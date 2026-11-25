// 图片像素处理：裁剪 / 切图 / 放大 / 多角度。
//
// 移植自源仓库 lib/canvas/canvas-image-data.ts（174 行），逻辑照抄，
// 但**输出从 dataURL 改成 Blob** —— 这个改动是必须的：
// dataURL 会让每张图膨胀 33% 并常驻字符串，而我们已有 storageKey → Blob 链路，
// 直接产出 Blob 就能走 putMedia()，刷新后不会破图。
//
// 全部是纯 canvas 操作，不联网、不依赖 React。

/**
 * 裁剪框用归一化坐标（0-1），与图片实际像素解耦 —— 换分辨率也不用重算。
 * @typedef {{ x: number, y: number, width: number, height: number }} CropRect
 * @typedef {{ rows: number, columns: number, horizontalLines?: number[], verticalLines?: number[] }} SplitParams
 * @typedef {{ row: number, column: number, blob: Blob, width: number, height: number }} SplitPiece
 * @typedef {'nearest'|'bilinear'|'high'} UpscaleAlgorithm
 */

export const MAX_UPSCALE_LONG_EDGE = 4096

function loadImage(source) {
  return new Promise((resolve, reject) => {
    const image = new Image()
    const url = typeof source === 'string' ? source : URL.createObjectURL(source)
    image.onload = () => {
      if (typeof source !== 'string') URL.revokeObjectURL(url)
      resolve(image)
    }
    image.onerror = () => {
      if (typeof source !== 'string') URL.revokeObjectURL(url)
      reject(new Error('图片解码失败'))
    }
    image.src = url
  })
}

function toBlob(canvas) {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => (blob ? resolve(blob) : reject(new Error('导出图片失败'))), 'image/png')
  })
}

/** 从画布抠一块。坐标已经是像素，调用方负责换算。 */
async function drawCrop(image, sx, sy, sw, sh) {
  const canvas = document.createElement('canvas')
  canvas.width = Math.max(1, Math.round(sw))
  canvas.height = Math.max(1, Math.round(sh))
  const context = canvas.getContext('2d')
  if (!context) throw new Error('无法创建画布上下文')
  // 源头先夹到图片范围内，避免负坐标或越界时抠出黑边
  const x = Math.max(0, Math.min(image.width - 1, Math.round(sx)))
  const y = Math.max(0, Math.min(image.height - 1, Math.round(sy)))
  const w = Math.max(1, Math.min(image.width - x, Math.round(sw)))
  const h = Math.max(1, Math.min(image.height - y, Math.round(sh)))
  context.drawImage(image, x, y, w, h, 0, 0, canvas.width, canvas.height)
  return { blob: await toBlob(canvas), width: canvas.width, height: canvas.height }
}

/** 裁剪。不传 crop 时取中心正方形（源仓库的老行为）。 */
export async function cropImage(source, crop) {
  const image = await loadImage(source)
  if (crop) {
    return drawCrop(
      image,
      Math.floor(crop.x * image.width),
      Math.floor(crop.y * image.height),
      Math.ceil(crop.width * image.width),
      Math.ceil(crop.height * image.height),
    )
  }
  const size = Math.min(image.width, image.height)
  const sx = Math.max(0, Math.floor((image.width - size) / 2))
  const sy = Math.max(0, Math.floor((image.height - size) / 2))
  return drawCrop(image, sx, sy, size, size)
}

function buildCuts(lines, size, count) {
  if (!lines?.length) {
    return Array.from({ length: count + 1 }, (_, index) => Math.floor((index * size) / count))
  }
  return [
    0,
    ...lines.map((line) => Math.round(line * size)).filter((line) => line > 0 && line < size).sort((a, b) => a - b),
    size,
  ]
}

/** 按行列切分。行优先，返回 row/column 便于调用方摆位置。 */
export async function splitImage(source, params) {
  const image = await loadImage(source)
  const rows = Math.max(1, Math.floor(params.rows))
  const columns = Math.max(1, Math.floor(params.columns))
  const xCuts = buildCuts(params.verticalLines, image.width, columns)
  const yCuts = buildCuts(params.horizontalLines, image.height, rows)
  const pieces = []

  for (let row = 0; row < yCuts.length - 1; row += 1) {
    const sy = yCuts[row]
    const sh = yCuts[row + 1] - sy
    for (let column = 0; column < xCuts.length - 1; column += 1) {
      const sx = xCuts[column]
      const sw = xCuts[column + 1] - sx
      const cut = await drawCrop(image, sx, sy, sw, sh)
      pieces.push({ row, column, ...cut })
    }
  }
  return pieces
}

/** 目标尺寸：长边对齐，且不超过上限。 */
export function resolveUpscaleSize(width, height, targetLongEdge) {
  const longEdge = Math.max(1, width, height)
  const target = Math.min(MAX_UPSCALE_LONG_EDGE, Math.max(1, Math.round(targetLongEdge)))
  const scale = target / longEdge
  return { width: Math.max(1, Math.round(width * scale)), height: Math.max(1, Math.round(height * scale)) }
}

function resizeCanvas(source, sourceWidth, sourceHeight, width, height, algorithm) {
  const canvas = document.createElement('canvas')
  canvas.width = width
  canvas.height = height
  const context = canvas.getContext('2d')
  if (!context) throw new Error('无法创建画布上下文')
  context.imageSmoothingEnabled = algorithm !== 'nearest'
  context.imageSmoothingQuality = algorithm === 'bilinear' ? 'medium' : 'high'
  context.drawImage(source, 0, 0, sourceWidth, sourceHeight, 0, 0, width, height)
  return canvas
}

/**
 * 放大。
 * high 算法走**逐级翻倍**：一次拉 4 倍会糊，分步 2 倍能把细节保住 ——
 * 这是浏览器 canvas 做超采样的常规做法，源仓库也是这么写的。
 */
export async function upscaleImage(source, targetLongEdge, algorithm = 'high') {
  const image = await loadImage(source)
  const { width, height } = resolveUpscaleSize(image.width, image.height, targetLongEdge)

  if (algorithm !== 'high') {
    const canvas = resizeCanvas(image, image.width, image.height, width, height, algorithm)
    return { blob: await toBlob(canvas), width, height }
  }

  let step = image
  let stepWidth = image.width
  let stepHeight = image.height
  while (stepWidth * 2 < width && stepHeight * 2 < height) {
    const nextWidth = stepWidth * 2
    const nextHeight = stepHeight * 2
    step = resizeCanvas(step, stepWidth, stepHeight, nextWidth, nextHeight, 'high')
    stepWidth = nextWidth
    stepHeight = nextHeight
  }
  const finalCanvas = resizeCanvas(step, stepWidth, stepHeight, width, height, 'high')
  return { blob: await toBlob(finalCanvas), width, height }
}

/**
 * 多角度拟态。
 *
 * 注意：这是**二维仿射近似**，不是真三维重建。
 * 源仓库也是这么做的（setTransform 加宽度收缩模拟透视）。
 * 对「换个视角看看」够用，但不能指望它生成新视角的真实内容 ——
 * 那需要模型，不在这个工具的范围内。
 */
export async function angleImage(source, params) {
  const image = await loadImage(source)
  const canvas = document.createElement('canvas')
  const padding = Math.round(Math.max(image.width, image.height) * 0.18)
  canvas.width = image.width + padding * 2
  canvas.height = image.height + padding * 2
  const context = canvas.getContext('2d')
  if (!context) throw new Error('无法创建画布上下文')
  context.clearRect(0, 0, canvas.width, canvas.height)

  const horizontal = params.horizontalAngle / 60
  const pitch = params.pitchAngle / 45
  const distanceScale = 1.12 - params.cameraDistance * 0.035
  const wideScale = params.wideAngle ? 0.88 : 1
  const scale = Math.max(0.64, Math.min(1.1, distanceScale * wideScale))
  const width = image.width * scale * (1 - Math.abs(horizontal) * 0.28)
  const height = image.height * scale * (1 - Math.abs(pitch) * 0.18)
  const cx = canvas.width / 2
  const cy = canvas.height / 2
  const skewX = horizontal * image.width * 0.18
  const skewY = pitch * image.height * 0.12
  const x = cx - width / 2 + horizontal * padding * 0.5
  const y = cy - height / 2 + pitch * padding * 0.45

  context.save()
  context.setTransform(1, pitch * 0.08, horizontal * -0.1, 1, 0, 0)
  context.drawImage(image, x + skewX, y + skewY, width, height)
  context.restore()

  if (params.wideAngle) {
    const gradient = context.createRadialGradient(
      cx, cy, Math.min(canvas.width, canvas.height) * 0.2,
      cx, cy, Math.max(canvas.width, canvas.height) * 0.62,
    )
    gradient.addColorStop(0, 'rgba(255,255,255,0)')
    gradient.addColorStop(1, 'rgba(0,0,0,0.18)')
    context.fillStyle = gradient
    context.fillRect(0, 0, canvas.width, canvas.height)
  }

  return { blob: await toBlob(canvas), width: canvas.width, height: canvas.height }
}

/**
 * 把图片缩到指定长边以内并转 dataURL。
 *
 * 为什么要缩：反推提示词要把图塞进请求体，1024×1024 的 PNG base64 约 1.5MB，
 * 视觉模型看 768 长边就足够了。不缩的话请求慢、还容易撞上 body 上限。
 * 输出 JPEG（质量 0.86）：同样画质下体积只有 PNG 的三分之一左右。
 */
export async function toDataUrlScaled(source, maxEdge = 768, quality = 0.86) {
  const img = await loadImage(source)
  const longEdge = Math.max(img.width, img.height)
  if (longEdge <= maxEdge && typeof source !== 'string') {
    // 已经够小，但还是要转 dataURL
  }
  const scale = longEdge > maxEdge ? maxEdge / longEdge : 1
  const w = Math.max(1, Math.round(img.width * scale))
  const h = Math.max(1, Math.round(img.height * scale))
  const canvas = document.createElement('canvas')
  canvas.width = w
  canvas.height = h
  const ctx = canvas.getContext('2d')
  if (!ctx) throw new Error('无法创建画布上下文')
  // 透明背景铺白：JPEG 不支持 alpha，不铺会变黑
  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, w, h)
  ctx.drawImage(img, 0, 0, w, h)
  const dataUrl = canvas.toDataURL('image/jpeg', quality)
  return {
    dataUrl,
    mimeType: 'image/jpeg',
    // 去掉 "data:image/jpeg;base64," 前缀，DSH 那边要纯 base64
    data: dataUrl.slice(dataUrl.indexOf(',') + 1),
    width: w,
    height: h,
  }
}

/** 读图片的原始像素尺寸，给裁剪框算显示比例用。 */
export function readImageSize(source) {
  return loadImage(source).then((image) => ({ width: image.width, height: image.height }))
}
