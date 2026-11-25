// 蒙版局部编辑：合成与绘制。
//
// 做法照源项目，但有个关键区别值得说明：
// **不用官方的 `mask` 参数，而是把涂改区域画到图上，作为一张参考图发出去。**
// 原因：实测这个上游的 edits 接口收 `images: [{ image_url }]`，
// 对单独的 mask 字段没有文档也没有验证；而"图上标出要改的地方"这条路
// 走的是纯 reference 通道，行为可预期。
//
// 合成规则：
//   - 底图保持原样
//   - 涂过的地方叠一层半透明蓝（#2563eb, 40%）
//   这样模型既看得到原图，也知道要动哪里。

export const MASK_COLOR = '#2563eb'
export const MASK_ALPHA = 0.4

/**
 * 解码成 HTMLImageElement。
 * 接受 Blob 或已有的 objectURL 字符串 —— 节点渲染那边传进来的是 objectURL，
 * 这里如果一律当 Blob 用，会报 "createObjectURL: Overload resolution failed"。
 */
function loadImage(source) {
  return new Promise((resolve, reject) => {
    const isString = typeof source === 'string'
    const url = isString ? source : URL.createObjectURL(source)
    const img = new Image()
    img.onload = () => { if (!isString) URL.revokeObjectURL(url); resolve(img) }
    img.onerror = () => { if (!isString) URL.revokeObjectURL(url); reject(new Error('图片解码失败')) }
    img.src = url
  })
}

/**
 * 把「底图 + 蒙版画布」合成为一张 PNG。
 *
 * @param base   底图 Blob
 * @param mask   和底图同尺寸的 canvas（涂过的地方 alpha > 0）
 * @returns { blob, dataUrl, width, height }
 */
export async function compositeMask(base, mask) {
  if (!mask) throw new Error('没有蒙版')

  // 底图按原始像素尺寸铺满，避免缩放导致错位
  const width = mask.width
  const height = mask.height
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('无法创建画布上下文')

  let img = null
  if (base) {
    img = await loadImage(base)
    ctx.drawImage(img, 0, 0, width, height)
  } else {
    ctx.fillStyle = '#ffffff'
    ctx.fillRect(0, 0, width, height)
  }

  // 蒙版层：把涂过的地方染成半透明蓝
  ctx.save()
  ctx.globalAlpha = MASK_ALPHA
  ctx.globalCompositeOperation = 'source-over'
  // 用 mask 自身作为形状，填色
  const tint = document.createElement('canvas')
  tint.width = width
  tint.height = height
  const tctx = tint.getContext('2d')
  tctx.drawImage(mask, 0, 0)
  tctx.globalCompositeOperation = 'source-in'
  tctx.fillStyle = MASK_COLOR
  tctx.fillRect(0, 0, width, height)
  ctx.drawImage(tint, 0, 0)
  ctx.restore()

  const blob = await new Promise((resolve, reject) => {
    canvas.toBlob((b) => (b ? resolve(b) : reject(new Error('导出失败'))), 'image/png')
  })
  return { blob, dataUrl: canvas.toDataURL('image/png'), width, height }
}

/** 蒙版画布上是否有内容（避免用户没涂就提交）。 */
export function maskHasPaint(mask) {
  if (!mask) return false
  const ctx = mask.getContext('2d', { willReadFrequently: true })
  if (!ctx) return false
  const { data } = ctx.getImageData(0, 0, mask.width, mask.height)
  // 每 4 个字节一个像素，只看 alpha
  for (let i = 3; i < data.length; i += 4) {
    if (data[i] > 8) return true
  }
  return false
}

/** 清空蒙版。 */
export function clearMask(mask) {
  if (!mask) return
  const ctx = mask.getContext('2d')
  if (ctx) ctx.clearRect(0, 0, mask.width, mask.height)
}

/**
 * 在蒙版上画一笔。
 * @param from/to 归一化坐标（0-1），与画布尺寸解耦
 */
export function paintStroke(mask, from, to, brushNorm, erase = false) {
  if (!mask) return
  const ctx = mask.getContext('2d')
  if (!ctx) return
  const w = mask.width
  const h = mask.height
  ctx.save()
  ctx.globalCompositeOperation = erase ? 'destination-out' : 'source-over'
  // 用和最终合成同一个蓝：屏幕上看到的颜色 = 真正发给模型的标记颜色。
  // 之前涂的时候是黑的、发出去是蓝的，用户会以为标错了地方。
  ctx.strokeStyle = MASK_COLOR
  ctx.lineWidth = Math.max(1, brushNorm * Math.min(w, h))
  ctx.lineCap = 'round'
  ctx.lineJoin = 'round'
  ctx.beginPath()
  ctx.moveTo(from.x * w, from.y * h)
  ctx.lineTo(to.x * w, to.y * h)
  ctx.stroke()
  ctx.restore()
}

/**
 * 把 Blob 转 dataURL（编辑接口要 dataURL）。
 * 图片已经有了就复用，不重复编码。
 */
export function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(new Error('读取图片失败'))
    reader.readAsDataURL(blob)
  })
}
