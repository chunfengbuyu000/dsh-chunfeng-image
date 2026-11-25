// 二维分辨率/比例矩阵、参考图编号前缀、蒙版与多角度提示词构建。
// 像素规格对齐原项目 infinite-canvas/web/src/lib/media-size.ts，并保留 e2e 对「自动 + 3:4 = 864×1152」的兼容。

export const IMAGE_SIZE_PRESETS = {
  '1k': {
    '自动': '1024x1024',
    auto: '1024x1024',
    '1:1': '1024x1024',
    '2:3': '832x1248',
    '3:2': '1248x832',
    '3:4': '864x1152',
    '4:3': '1152x864',
    '16:9': '1536x864',
    '9:16': '864x1536',
    '21:9': '1792x768',
    '9:21': '768x1792',
  },
  '2k': {
    '自动': '2048x2048',
    auto: '2048x2048',
    '1:1': '2048x2048',
    '2:3': '1664x2496',
    '3:2': '2496x1664',
    '3:4': '1728x2304',
    '4:3': '2304x1728',
    '16:9': '2560x1440',
    '9:16': '1440x2560',
    '21:9': '3072x1344',
    '9:21': '1344x3072',
  },
  '4k': {
    '自动': '4096x4096',
    auto: '4096x4096',
    '1:1': '4096x4096',
    '2:3': '2560x3840',
    '3:2': '3840x2560',
    '3:4': '3072x4096',
    '4:3': '4096x3072',
    '16:9': '3840x2160',
    '9:16': '2160x3840',
    '21:9': '4096x1792',
    '9:21': '1792x4096',
  },
}

export const AUTO_RATIO_PIXELS = {
  '自动': '1024x1024',
  auto: '1024x1024',
  '1:1': '1024x1024',
  '2:3': '832x1248',
  '3:2': '1248x832',
  '3:4': '864x1152',
  '4:3': '1152x864',
  '16:9': '1536x864',
  '9:16': '864x1536',
  '21:9': '1792x768',
  '9:21': '768x1792',
}

export function clampSide(value, align16 = true) {
  let n = Math.max(256, Math.min(4096, Math.round(Number(value) || 1024)))
  if (align16) n = Math.max(256, Math.round(n / 16) * 16)
  return n
}

export function parseSizeString(size) {
  const m = String(size || '').trim().toLowerCase().match(/^(\d+)x(\d+)$/)
  if (!m) return null
  return { width: Number(m[1]), height: Number(m[2]) }
}

/** 根据分辨率档位 + 比例（或自定义宽高）算最终上游 WxH。 */
export function resolveImageDimensions({ resolution = '自动', ratio = '1:1', customSize = '', align16 = true } = {}) {
  const custom = parseSizeString(customSize)
  if (custom) {
    return `${clampSide(custom.width, align16)}x${clampSide(custom.height, align16)}`
  }
  const res = String(resolution || '自动').toLowerCase()
  const rKey = ratio === 'auto' ? '自动' : (ratio || '1:1')
  if (IMAGE_SIZE_PRESETS[res]?.[rKey]) return IMAGE_SIZE_PRESETS[res][rKey]
  if ((res === '自动' || res === 'auto') && AUTO_RATIO_PIXELS[rKey]) return AUTO_RATIO_PIXELS[rKey]

  // 自定义比例（例如画布输入框里反推出来的 5:4）：按分辨率基准边长推算，并遵守对齐
  const baseSide = res === '4k' ? 3072 : res === '2k' ? 2048 : 1024
  const [rw, rh] = String(rKey).split(':').map(Number)
  const ar = Number.isFinite(rw) && Number.isFinite(rh) && rw > 0 && rh > 0 ? rw / rh : 1
  const w = clampSide(Math.sqrt(baseSide * baseSide * ar), align16)
  const h = clampSide(Math.sqrt((baseSide * baseSide) / ar), align16)
  return `${w}x${h}`
}

/** Gemini 原生 generateContent.generationConfig.imageConfig。 */
export function buildGeminiImageConfig({ ratio = '1:1', resolution = '自动' } = {}) {
  const cfg = {}
  if (ratio && ratio !== '自动' && ratio !== 'auto') {
    cfg.aspectRatio = ratio
  }
  const r = String(resolution || '').toLowerCase()
  if (r === '1k' || r === '2k' || r === '4k') {
    cfg.imageSize = r.toUpperCase()
  }
  return Object.keys(cfg).length ? cfg : undefined
}

/** 从节点真实图片宽高或节点比例推导出编辑尺寸，保证局部修改/多角度不失真。 */
export function sizeFromNode(node) {
  const main = Array.isArray(node?.images) && node.images.length
    ? (node.images.find((i) => i.id === node.primaryImageId) || node.images[0])
    : null
  const w = Number(main?.width) || Number(node?.metadata?.width) || 0
  const h = Number(main?.height) || Number(node?.metadata?.height) || 0
  if (w > 0 && h > 0) {
    // 若原图超过单边上限 4096 或小于 256，保持宽高比缩放到安全范围
    const max = Math.max(w, h)
    const min = Math.min(w, h)
    let sw = w
    let sh = h
    if (max > 4096) {
      const k = 4096 / max
      sw = w * k
      sh = h * k
    } else if (min < 256) {
      const k = 256 / min
      sw = Math.min(4096, w * k)
      sh = Math.min(4096, h * k)
    }
    return `${clampSide(sw, true)}x${clampSide(sh, true)}`
  }
  return resolveImageDimensions({ resolution: node?.resolution || '自动', ratio: node?.ratio || '1:1' })
}

/** 参考图前缀：明确告诉模型每张参考图的序号，和原项目一致。 */
export function buildImageReferencePromptText(prompt, refCount) {
  const text = String(prompt || '').trim()
  if (!refCount || refCount <= 0) return text
  const labels = Array.from({ length: refCount }, (_, i) => `图片${i + 1}`).join('、')
  return text ? `参考图片编号：${labels}。\n${text}` : `参考图片编号：${labels}。`
}

/** 局部修改提示词模板：严格约束只改蓝色标注区域，不留标注颜色。 */
export function buildMaskEditPrompt(userPrompt) {
  const text = String(userPrompt || '').trim()
  return `参考图片1为原图，图片2是在原图上用蓝色半透明标注出的待修改区域。请只修改蓝色标注覆盖的区域，其余区域与原图保持完全一致，输出与原图相同尺寸的完整图片，并且结果中不要保留任何蓝色标注。修改要求：${text}`
}

/** AI 多角度提示词模板：保持主体身份与场景一致性，改变机位参数。 */
export function buildAnglePrompt({ horizontal = 0, pitch = 0, distance = 5, wide = false } = {}) {
  const h = Math.round(Number(horizontal) || 0)
  const p = Math.round(Number(pitch) || 0)
  const d = Number(distance) || 5
  const hDesc = h === 0 ? '正面平视方位（水平偏转 0°）' : h > 0 ? `向右侧环绕旋转 ${h}°` : `向左侧环绕旋转 ${Math.abs(h)}°`
  const pDesc = p === 0 ? '水平视线（俯仰 0°）' : p > 0 ? `向上抬升并俯拍 ${p}°` : `降低机位并仰拍 ${Math.abs(p)}°`
  const dDesc = d <= 3 ? '特写近景距离（放大主体细节）' : d >= 7.5 ? '远景全貌距离（纳入更多环境背景）' : `中景距离（镜头距离系数 ${d.toFixed(1)}）`
  const lensDesc = wide ? '广角镜头透视效果' : '标准镜头自然透视效果'
  return `保持参考图片1中的主体外观、服饰特征、材质光影与整体风格完全一致，仅从新的三维摄像机机位重新拍摄生成画面：水平角度${hDesc}，垂直视角${pDesc}，拍摄景别为${dDesc}，采用${lensDesc}。`
}
