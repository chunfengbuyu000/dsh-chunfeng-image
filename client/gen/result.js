// 把上游返回的图片结果统一成 Blob 并落进 IndexedDB。
//
// 这是「刷新后图还在不在」的唯一决定点：
// 持久化只存 storageKey（'image:xxx'），**绝不存 blob: URL**。
// blob: 是进程内句柄，刷新即失效，存进节点数据等于永久破图。

import { STORES } from '../storage/keys.js'
import { get, set, del } from '../storage/idb.js'

const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1)

export const PREVIEW_MAX_EDGE = 768
export const PREVIEW_QUALITY = 0.84
export const ORIGINAL_SWITCH_PX = 960

export function base64ToBlob(base64, mimeType = 'image/png') {
  const clean = String(base64 || '').replace(/^data:[^,]+,/, '').replace(/\s+/g, '')
  if (typeof Uint8Array.fromBase64 === 'function') {
    try { return new Blob([Uint8Array.fromBase64(clean)], { type: mimeType }) } catch { /* 兼容回退 */ }
  }
  if (typeof Buffer !== 'undefined') {
    return new Blob([Buffer.from(clean, 'base64')], { type: mimeType })
  }
  const binary = atob(clean)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return new Blob([bytes], { type: mimeType })
}

export function dataUrlToBlob(dataUrl) {
  const comma = dataUrl.indexOf(',')
  if (comma === -1 || !dataUrl.startsWith('data:')) throw new Error('不是合法的 data URL')
  const header = dataUrl.slice(5, comma)
  const mimeType = header.split(';')[0] || 'image/png'
  return header.includes(';base64')
    ? base64ToBlob(dataUrl.slice(comma + 1), mimeType)
    : new Blob([decodeURIComponent(dataUrl.slice(comma + 1))], { type: mimeType })
}

export function blobToDataUrl(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.onload = () => resolve(String(reader.result || ''))
    reader.onerror = () => reject(reader.error || new Error('读取文件失败'))
    reader.readAsDataURL(blob)
  })
}

/** 从一条结果里认出载荷形态。OpenAI 兼容上游可能给 b64_json，也可能给 url。 */
export function pickMediaPayload(item) {
  if (!item) return null
  if (item instanceof Blob) return { blob: item }
  if (typeof item === 'string') return item.startsWith('data:') ? { dataUrl: item } : { url: item }
  if (item.blob instanceof Blob) return { blob: item.blob }
  if (typeof item.b64_json === 'string' && item.b64_json) return { blob: base64ToBlob(item.b64_json, item.mime_type || 'image/png') }
  if (typeof item.base64 === 'string' && item.base64) return { blob: base64ToBlob(item.base64, item.mime_type || 'image/png') }
  const inline = item.inlineData || item.inline_data
  if (inline?.data) return { blob: base64ToBlob(inline.data, inline.mimeType || inline.mime_type || 'image/png') }
  const fileUri = item.fileData?.fileUri || item.file_data?.file_uri
  if (typeof fileUri === 'string' && fileUri) return { url: fileUri }
  if (typeof item.dataUrl === 'string' && item.dataUrl) return { dataUrl: item.dataUrl }
  if (typeof item.url === 'string' && item.url) return { url: item.url }
  const videoUrl = [item.video_url, item.result_url, item.content?.url, item.content?.video_url]
    .find((v) => typeof v === 'string' && v)
  return videoUrl ? { url: videoUrl } : null
}

/**
 * 从上游响应里取出结果数组。
 * 兼容 { data: [] }、{ images: [] }、{ results: [] }、Gemini { candidates: [] }、直接是数组、以及单个对象。
 */
export function pickResultItems(payload) {
  if (!payload) return []
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload.candidates)) {
    const parts = payload.candidates.flatMap((c) => c?.content?.parts || [])
    const media = parts.filter((p) => p?.inlineData?.data || p?.inline_data?.data || p?.fileData?.fileUri || p?.file_data?.file_uri)
    if (media.length) return media
  }
  for (const key of ['data', 'images', 'results', 'output']) {
    if (Array.isArray(payload[key])) return payload[key]
  }
  return [payload]
}

// ---------- objectURL 缓存 ----------
// 一个 storageKey 只换一个 objectURL，整个会话复用；
// 删 Blob 前必须先 forget，否则句柄一直占内存。

const objectUrls = new Map()
const previewUrls = new Map()
const previewMissing = new Set()
const previewInflight = new Map()
const previewSubs = new Set()
let previewQueue = Promise.resolve()

export function objectUrlFor(storageKey, blob) {
  if (objectUrls.has(storageKey)) return objectUrls.get(storageKey)
  const url = URL.createObjectURL(blob)
  objectUrls.set(storageKey, url)
  return url
}

function previewUrlFor(storageKey, blob) {
  if (previewUrls.has(storageKey)) return previewUrls.get(storageKey)
  const url = URL.createObjectURL(blob)
  previewUrls.set(storageKey, url)
  return url
}

export function getCachedMediaUrl(storageKey) {
  return objectUrls.get(storageKey) || ''
}

export function getCachedPreviewUrl(storageKey) {
  return previewUrls.get(storageKey) || ''
}

export function subscribeImagePreviews(fn) {
  previewSubs.add(fn)
  return () => previewSubs.delete(fn)
}

function notifyPreviewReady(storageKey) {
  for (const fn of previewSubs) {
    try { fn(storageKey) } catch { /* 订阅方异常不阻断通知 */ }
  }
}

export function pickImageSource({ originalUrl = '', previewUrl = '', forceOriginal = false, renderedPx = 0 } = {}) {
  if (forceOriginal) return originalUrl || previewUrl || ''
  if (renderedPx > ORIGINAL_SWITCH_PX) return originalUrl || previewUrl || ''
  return previewUrl || originalUrl || ''
}

export function releaseObjectUrl(storageKey) {
  if (!storageKey) return
  const url = objectUrls.get(storageKey)
  if (url) {
    URL.revokeObjectURL(url)
    objectUrls.delete(storageKey)
  }
  const purl = previewUrls.get(storageKey)
  if (purl) {
    URL.revokeObjectURL(purl)
    previewUrls.delete(storageKey)
  }
  previewMissing.delete(storageKey)
}

export function forgetObjectUrl(storageKey) {
  releaseObjectUrl(storageKey)
}

/** 解码 Blob 拿真实像素尺寸：优先使用 createImageBitmap 避免创建 DOM Image，用完即关闭释放显存。 */
export async function readBlobSize(blob) {
  if (typeof createImageBitmap === 'function' && blob.type !== 'image/svg+xml') {
    try {
      const bmp = await createImageBitmap(blob)
      const size = { width: bmp.width, height: bmp.height }
      bmp.close()
      return size
    } catch { /* 回退 HTMLImageElement */ }
  }
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(blob)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve({ width: img.naturalWidth, height: img.naturalHeight })
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error('图片解码失败'))
    }
    img.src = url
  })
}

async function generatePreviewBlob(blob) {
  if (!(blob instanceof Blob) || !blob.size) return null
  if (!blob.type?.startsWith('image/') || blob.type === 'image/svg+xml') return null
  if (typeof createImageBitmap !== 'function') return null
  let bmp = null
  try {
    bmp = await createImageBitmap(blob)
    const w = bmp.width
    const h = bmp.height
    if (!w || !h) return null
    const scale = Math.min(1, PREVIEW_MAX_EDGE / Math.max(w, h))
    // 小于等于 768px 且体积不大的图直接复用原图，避免重复存一份缩略图
    if (scale === 1 && (blob.type === 'image/webp' || blob.size <= 300_000)) {
      return null
    }
    const tw = Math.max(1, Math.round(w * scale))
    const th = Math.max(1, Math.round(h * scale))
    if (typeof OffscreenCanvas !== 'undefined') {
      const canvas = new OffscreenCanvas(tw, th)
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      ctx.drawImage(bmp, 0, 0, tw, th)
      const out = await canvas.convertToBlob({ type: 'image/webp', quality: PREVIEW_QUALITY }).catch(() => null)
      return out && out.size ? { blob: out, width: tw, height: th, origWidth: w, origHeight: h } : null
    }
    if (typeof document !== 'undefined') {
      const canvas = document.createElement('canvas')
      canvas.width = tw
      canvas.height = th
      const ctx = canvas.getContext('2d')
      if (!ctx) return null
      ctx.drawImage(bmp, 0, 0, tw, th)
      const out = await new Promise((r) => canvas.toBlob(r, 'image/webp', PREVIEW_QUALITY))
      return out && out.size ? { blob: out, width: tw, height: th, origWidth: w, origHeight: h } : null
    }
    return null
  } catch {
    return null
  } finally {
    try { bmp?.close() } catch { /* 忽略关闭错误 */ }
  }
}

export function ensureImagePreview(storageKey) {
  if (!storageKey) return Promise.resolve('')
  if (previewUrls.has(storageKey)) return Promise.resolve(previewUrls.get(storageKey))
  if (previewMissing.has(storageKey)) return Promise.resolve('')
  if (previewInflight.has(storageKey)) return previewInflight.get(storageKey)

  const job = previewQueue.then(async () => {
    if (previewUrls.has(storageKey)) return previewUrls.get(storageKey)
    const cached = await get(STORES.imagePreviews, storageKey).catch(() => null)
    if (cached?.blob) {
      const url = previewUrlFor(storageKey, cached.blob)
      notifyPreviewReady(storageKey)
      return url
    }
    const orig = await get(STORES.imageFiles, storageKey).catch(() => null)
    if (!orig?.blob) {
      previewMissing.add(storageKey)
      return ''
    }
    const generated = await generatePreviewBlob(orig.blob)
    if (!generated?.blob) {
      previewMissing.add(storageKey)
      return ''
    }
    await set(STORES.imagePreviews, storageKey, {
      blob: generated.blob,
      type: generated.blob.type,
      bytes: generated.blob.size,
      width: generated.width,
      height: generated.height,
      at: Date.now(),
    }).catch(() => {})
    const url = previewUrlFor(storageKey, generated.blob)
    notifyPreviewReady(storageKey)
    return url
  }).finally(() => {
    previewInflight.delete(storageKey)
  })

  previewQueue = job.catch(() => '')
  previewInflight.set(storageKey, job)
  return job
}

export function makeStorageKey(prefix = 'image') {
  const rand = Math.random().toString(36).slice(2, 10)
  return `${prefix}:${Date.now().toString(36)}${rand}`
}

/** 存 Blob，返回后续要写进节点的元信息。图片同步异步队列生成 768px WebP 缩略图。 */
export async function putMedia(storageKey, blob, meta = {}) {
  const store = meta.store || STORES.imageFiles
  if (!(blob instanceof Blob) || !blob.size) throw new Error('没有可保存的文件')
  await set(store, storageKey, {
    blob,
    type: blob.type,
    bytes: blob.size,
    at: Date.now(),
    ...meta,
  })
  previewMissing.delete(storageKey)
  const stalePreview = previewUrls.get(storageKey)
  if (stalePreview) {
    URL.revokeObjectURL(stalePreview)
    previewUrls.delete(storageKey)
  }
  if (store === STORES.imageFiles && blob.type?.startsWith('image/')) {
    void ensureImagePreview(storageKey)
  }
  return { storageKey, bytes: blob.size, mimeType: blob.type }
}

export async function getMedia(storageKey) {
  if (!storageKey) return null
  return get(STORES.imageFiles, storageKey).catch(() => null)
}

/**
 * 不分类型地取媒体。
 * 图片存在 image_files，视频/音频存在 media_files —— 调用方（比如节点渲染）
 * 不一定知道自己是哪一类，两个 store 都试一遍才不会出现「视频节点永远空白」。
 */
export async function getMediaAny(storageKey) {
  if (!storageKey) return null
  const inImages = await get(STORES.imageFiles, storageKey).catch(() => null)
  if (inImages?.blob) return inImages
  return get(STORES.mediaFiles, storageKey).catch(() => null)
}

export async function deleteMedia(storageKey) {
  if (!storageKey) return
  releaseObjectUrl(storageKey)
  await Promise.all([
    del(STORES.imageFiles, storageKey).catch(() => {}),
    del(STORES.imagePreviews, storageKey).catch(() => {}),
    del(STORES.mediaFiles, storageKey).catch(() => {}),
  ])
}

/** 把 storageKey 读成无损 Data URL（优先不缩放重编），供多参考图与局部重绘使用。 */
export async function mediaKeyToDataUrl(storageKey) {
  if (!storageKey) return ''
  const record = await getMediaAny(storageKey)
  if (!record?.blob) return ''
  return blobToDataUrl(record.blob)
}

/** 按 storageKey 取回可渲染的 URL（会话内缓存）。刷新后重新建，这才不会破图。 */
export async function resolveMediaUrl(storageKey) {
  if (!storageKey) return ''
  const cached = objectUrls.get(storageKey)
  if (cached) return cached
  const record = await getMediaAny(storageKey)
  if (!record?.blob) return ''
  return objectUrlFor(storageKey, record.blob)
}

/**
 * 上游一条结果 → 可渲染引用。
 *
 * 远程 URL 会先试着自己拉成 Blob（这样才有本地副本、能导出）。
 * 拉不下来就退回远程 URL 直出，但标记 degraded：
 * 实测降级图能显示，却**不能做缩略图、不能导出、不能取色**（canvas 被污染），
 * 所以这个标记必须一路传到 UI，导出时据此拦截。
 */
export async function resolveMediaResult(payload, { storageKey, signal, fetchImpl = fetch } = {}) {
  if (!payload) throw new Error('上游没有返回图片')

  if (payload.blob) {
    const key = storageKey || makeStorageKey()
    const size = await readBlobSize(payload.blob).catch(() => ({ width: 0, height: 0 }))
    const saved = await putMedia(key, payload.blob, { mimeType: payload.blob.type, width: size.width, height: size.height })
    return { ...saved, width: size.width, height: size.height, url: objectUrlFor(key, payload.blob), source: 'blob', degraded: false }
  }

  const inline = payload.dataUrl || (typeof payload.url === 'string' && payload.url.startsWith('data:') ? payload.url : '')
  if (inline) {
    const blob = dataUrlToBlob(inline)
    const key = storageKey || makeStorageKey()
    const size = await readBlobSize(blob).catch(() => ({ width: 0, height: 0 }))
    const saved = await putMedia(key, blob, { mimeType: blob.type, width: size.width, height: size.height })
    return { ...saved, width: size.width, height: size.height, url: objectUrlFor(key, blob), source: 'data-url', degraded: false }
  }

  const remoteUrl = payload.url
  try {
    const response = await fetchImpl(remoteUrl, { signal, cache: 'force-cache' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    const blob = await response.blob()
    if (!blob.size) throw new Error('空文件')
    const key = storageKey || makeStorageKey()
    const size = await readBlobSize(blob).catch(() => ({ width: 0, height: 0 }))
    const saved = await putMedia(key, blob, { mimeType: blob.type, remoteUrl, width: size.width, height: size.height })
    return {
      ...saved,
      url: objectUrlFor(key, blob),
      remoteUrl,
      source: 'downloaded',
      degraded: false,
      width: size.width,
      height: size.height,
    }
  } catch (error) {
    if (error?.name === 'AbortError' || signal?.aborted) throw error
    // 拉不下来不致命：链接本身还能在 <img> 里显示
    return {
      storageKey: '',
      bytes: 0,
      mimeType: '',
      url: remoteUrl,
      remoteUrl,
      source: 'remote',
      degraded: true,
    }
  }
}

/** 把上游响应批量转成结果列表。单条失败只影响该条，不整批 reject。 */
export async function resolveMediaList(payload, options = {}) {
  const items = pickResultItems(payload)
  const results = []
  for (const [index, item] of items.entries()) {
    const picked = pickMediaPayload(item)
    if (!picked) continue
    try {
      const resolved = await resolveMediaResult(picked, {
        ...options,
        storageKey: options.storageKey ? `${options.storageKey}-${index}` : undefined,
      })
      results.push({ ...resolved, index })
    } catch (error) {
      if (error?.name === 'AbortError') throw error
      results.push({ index, error: error.message })
    }
  }
  return results
}

export { cap }
