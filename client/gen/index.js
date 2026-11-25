// 生成层统一入口。
//
// 走 Host 转发（POST dsh-chunfeng-image/relay），不是浏览器直连上游。
// 原因：渲染进程是 Chromium，从 dsh-app:// 直连 https://<上游> 属跨源，
// 上游没放 CORS 头时响应会在进 JS 之前被丢掉。Host 跑在 Node 里，不受这个限制。
//
// 分层纪律：**只有本文件与 http.js 知道"Host 在哪"，其余模块只管形状。**

import { requestSignal, isAbort } from './signal.js'
import { ApiError, classifyFetchError, errorFromResponse } from './errors.js'
import { pickMediaPayload, resolveMediaResult, makeStorageKey, pickResultItems } from './result.js'
import { resolveImageDimensions, buildGeminiImageConfig, buildImageReferencePromptText } from './sizes.js'

/** 与 client/api.js 里 BASE 保持一致（相对路径 → 同源）。 */
const HOST_BASE = 'dsh-chunfeng-image/'

/** 生图是长事务，源仓库给 10 分钟。 */
const IMAGE_TIMEOUT_MS = 10 * 60_000

/** 视频建任务较快，轮询由调用方负责。 */
const VIDEO_TIMEOUT_MS = 2 * 60_000

function requireChannel(channel) {
  if (!channel) throw new ApiError('还没有选择渠道，先去配置里加一个', { code: 'NO_CHANNEL' })
  if (!String(channel.baseUrl || '').trim()) throw new ApiError('渠道没有填 Base URL', { code: 'NO_BASE_URL' })
  if (!String(channel.apiKey || '').trim()) {
    throw new ApiError('这个渠道还没有填 API Key', { code: 'NO_API_KEY', status: 401 })
  }
  return channel
}

/**
 * 打一次 Host 的转发路由。
 * @returns 上游原始 JSON
 */
/** 探活：Host 的 /ping 能不能应答。3 秒超时，任何异常都算「不在线」。 */
export async function pingHost() {
  try {
    const signal = typeof AbortSignal.timeout === 'function' ? AbortSignal.timeout(3000) : undefined
    const res = await fetch(HOST_BASE + 'ping', {
      headers: { 'sec-fetch-site': 'same-origin' },
      cache: 'no-store',
      signal,
    })
    if (!res.ok) return false
    const data = await res.json().catch(() => null)
    return Boolean(data?.ok)
  } catch {
    return false
  }
}

export async function relay({ channel, path, method = 'POST', payload, multipart, headers, timeoutMs, signal }) {
  requireChannel(channel)
  const requestSignalFinal = requestSignal({ signal, timeoutMs: timeoutMs || IMAGE_TIMEOUT_MS })

  let response
  try {
    response = await fetch(HOST_BASE + 'relay', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: JSON.stringify({
        channel: { baseUrl: channel.baseUrl, apiKey: channel.apiKey, protocol: channel.protocol || 'openai' },
        path,
        method,
        payload,
        multipart,
        headers,
        timeoutMs: timeoutMs || IMAGE_TIMEOUT_MS,
      }),
      signal: requestSignalFinal,
    })
  } catch (error) {
    // 区分「服务没响应」和「请求本身失败」：探一下 ping。
    // 探活成功说明 Host 好的，问题在这一次请求；失败才该让用户去重启。
    const alive = await pingHost()
    const base = classifyFetchError(error, { timeoutMs: timeoutMs || IMAGE_TIMEOUT_MS })
    if (alive) {
      throw new ApiError(`${base.message}（插件服务在线，是这次请求没发出去，可重试）`, { code: 'NETWORK', cause: error })
    }
    throw new ApiError(`${base.message}（插件服务没有响应，请重启 DSH）`, { code: 'NETWORK', cause: error })
  }

  // Host 总回 JSON；但上游可能把 HTML 原样透传过来（200 + text/html），
  // 这时 JSON.parse 会抛英文语法错。识别出来，给一句人能看懂的话。
  const text = await response.text()
  let body = null
  if (text) {
    const trimmed = text.trim()
    if (/^<(!doctype|html|head|body|\?xml)/i.test(trimmed)) {
      const visible = trimmed
        .replace(/<script[\s\S]*?<\/script>/gi, ' ')
        .replace(/<style[\s\S]*?<\/style>/gi, ' ')
        .replace(/<[^>]+>/g, ' ')
        .replace(/\s+/g, ' ')
        .trim()
        .slice(0, 120)
      throw new ApiError(`上游返回了网页而不是接口数据：${visible || '空页面'}`, {
        code: 'UPSTREAM_HTML',
        status: response.status,
      })
    }
    try { body = JSON.parse(trimmed) } catch { body = { error: trimmed.slice(0, 200) } }
  }

  if (!response.ok) throw errorFromResponse(response, body)
  if (body && typeof body === 'object' && typeof body.error === 'string' && body.error) {
    // 上游错误被 Host 包成 200 的情况（历史兼容），照样当失败
    throw new ApiError(body.error, { code: 'UPSTREAM_ERROR', status: body.upstreamStatus || 0, body })
  }
  return body
}

// ---------- 尺寸规范化 ----------

export function normalizeSize(size, { align16 = true, ratio = '1:1', resolution = '自动' } = {}) {
  return resolveImageDimensions({
    customSize: typeof size === 'string' && /^\d+x\d+$/i.test(size.trim())
      ? size.trim()
      : (size && typeof size === 'object' && Number.isFinite(size.w) && Number.isFinite(size.h) ? `${size.w}x${size.h}` : ''),
    ratio: typeof size === 'string' && !/^\d+x\d+$/i.test(size.trim()) ? size : ratio,
    resolution,
    align16,
  })
}

function toGeminiImagePart(url) {
  const m = String(url || '').match(/^data:([^;,]+)(?:;[^,]*)?,([\s\S]+)$/i)
  if (m) return { inlineData: { mimeType: m[1] || 'image/png', data: m[2].replace(/\s+/g, '') } }
  return { fileData: { fileUri: url, mimeType: 'image/png' } }
}

async function runConcurrentBatch(count, runSingle) {
  const total = Math.max(1, Math.min(10, Number(count) || 1))
  if (total === 1) {
    const items = await runSingle(0)
    return { items, failed: [], short: Math.max(0, 1 - items.length) }
  }
  const items = new Array(total).fill(null)
  const failed = []
  const settled = await Promise.allSettled(
    Array.from({ length: total }, (_, idx) => runSingle(idx)),
  )
  settled.forEach((entry, idx) => {
    if (entry.status === 'fulfilled') {
      const first = entry.value?.[0]
      if (first) items[idx] = { ...first, index: idx }
      else failed.push({ index: idx, error: '上游没有返回图片' })
    } else {
      if (entry.reason?.name === 'AbortError' || isAbort(entry.reason)) throw entry.reason
      failed.push({ index: idx, error: entry.reason?.message || '生成失败' })
    }
  })
  const ordered = items.filter(Boolean)
  if (!ordered.length) {
    const firstErr = settled.find((s) => s.status === 'rejected')?.reason
    if (firstErr) throw firstErr
    throw new ApiError(failed[0]?.error || '上游没有返回图片', { code: 'NO_IMAGE' })
  }
  return { items: ordered, failed, short: Math.max(0, total - ordered.length - failed.length) }
}

async function generateGeminiImages({ channel, model, prompt, imageDataUrls = [], params = {}, signal, onProgress }) {
  const imageConfig = buildGeminiImageConfig({ ratio: params.ratio || '1:1', resolution: params.resolution || '自动' })
  const path = `v1beta/models/${encodeURIComponent(model)}:generateContent`
  const parts = [
    ...imageDataUrls.map((u) => toGeminiImagePart(u)),
    ...(prompt ? [{ text: prompt }] : []),
  ]
  const payload = {
    contents: [{ role: 'user', parts }],
    generationConfig: {
      responseModalities: ['IMAGE', 'TEXT'],
      ...(imageConfig ? { imageConfig } : {}),
    },
  }
  const count = Math.max(1, Math.min(10, Number(params.count) || 1))
  onProgress?.({ stage: 'request', n: count })

  const out = await runConcurrentBatch(count, async (slotIndex) => {
    const raw = await relay({ channel, path, payload, timeoutMs: IMAGE_TIMEOUT_MS, signal })
    if (raw?.promptFeedback?.blockReason) {
      throw new ApiError(`Gemini 安全策略拦截（${raw.promptFeedback.blockReason}）`, { code: 'GEMINI_BLOCKED' })
    }
    const { results } = await persistImageResults({ raw, signal, slotOffset: slotIndex, onProgress })
    return results
  })

  return { ok: true, items: out.items, failed: out.failed, requested: count, got: out.items.length, short: out.short }
}

// ---------- 能力：文生图 ----------

export async function generateImage({ channel, model, prompt, params = {}, signal, onProgress }) {
  if (channel?.protocol === 'gemini') {
    return generateGeminiImages({ channel, model, prompt, params, signal, onProgress })
  }

  const count = Math.max(1, Math.min(10, Number(params.count) || 1))
  const size = resolveImageDimensions({
    resolution: params.resolution || '自动',
    ratio: params.ratio || '1:1',
    customSize: params.size && /^\d+x\d+$/i.test(String(params.size)) ? params.size : (params.ratio ? '' : params.size),
    align16: params.align16 !== false,
  })
  const basePayload = { model, prompt, n: 1, size }
  if (params.quality && params.quality !== '自动') basePayload.quality = mapQuality(params.quality)
  if (params.background) basePayload.background = params.background
  const outputFormat = params.outputFormat || (params.background === 'transparent' ? 'png' : '')
  if (outputFormat) basePayload.output_format = outputFormat
  if (!/gpt-image/i.test(String(model || ''))) basePayload.response_format = 'b64_json'

  onProgress?.({ stage: 'request', n: count })
  const out = await runConcurrentBatch(count, async (slotIndex) => {
    const raw = await relay({
      channel,
      path: 'v1/images/generations',
      payload: basePayload,
      timeoutMs: IMAGE_TIMEOUT_MS,
      signal,
    })
    const { results } = await persistImageResults({ raw, signal, slotOffset: slotIndex, onProgress })
    return results
  })

  return {
    ok: true,
    items: out.items,
    failed: out.failed,
    requested: count,
    got: out.items.length,
    short: out.short,
  }
}

async function persistImageResults({ raw, signal, slotOffset = 0, onProgress }) {
  const items = pickResultItems(raw)
  if (!items.length) {
    throw new ApiError('上游没有返回图片', { code: 'NO_IMAGE', body: raw })
  }

  onProgress?.({ stage: 'save', n: items.length })

  const results = new Array(items.length).fill(null)
  const failed = []
  await Promise.all(items.map(async (item, index) => {
    const payload = pickMediaPayload(item)
    if (!payload) return
    try {
      const resolved = await resolveMediaResult(payload, {
        signal,
        storageKey: makeStorageKey('image'),
      })
      const withSize = {
        ...resolved,
        width: Number(resolved?.width) || Number(item?.width) || 0,
        height: Number(resolved?.height) || Number(item?.height) || 0,
        revisedPrompt: item?.revised_prompt || '',
      }
      results[index] = withSize
      onProgress?.({ stage: 'item', index: slotOffset + index, item: withSize })
    } catch (error) {
      if (error?.name === 'AbortError') throw error
      failed.push({ index: slotOffset + index, error: error.message })
    }
  }))

  const ordered = results.filter(Boolean)
  if (!ordered.length) {
    throw new ApiError(failed[0]?.error || '上游没有返回可用的图片', { code: 'NO_IMAGE', body: raw })
  }
  return { results: ordered, failed }
}

/**
 * 图片编辑（参考图生图 / 蒙版局部修改 / AI 多角度）。
 * 自动兼容标准 OpenAI multipart/form-data（image / image[]）与中转站 JSON（images[].image_url），并支持 Gemini 原生协议。
 */
export async function generateImageEdit({ channel, model, prompt, imageDataUrl, imageDataUrls, params = {}, signal, onProgress }) {
  const refList = Array.isArray(imageDataUrls) && imageDataUrls.length
    ? imageDataUrls.filter(Boolean)
    : (Array.isArray(params.imageDataUrls) && params.imageDataUrls.length
      ? params.imageDataUrls.filter(Boolean)
      : (imageDataUrl ? [imageDataUrl] : []))
  if (!refList.length) throw new ApiError('没有可编辑的图片', { code: 'NO_IMAGE_INPUT' })
  if (!String(prompt || '').trim()) throw new ApiError('先写一句要改什么', { code: 'NO_PROMPT' })

  const finalPrompt = params.skipRefPrefix
    ? String(prompt || '').trim()
    : buildImageReferencePromptText(prompt, refList.length)

  if (channel?.protocol === 'gemini') {
    return generateGeminiImages({ channel, model, prompt: finalPrompt, imageDataUrls: refList, params, signal, onProgress })
  }

  const count = Math.max(1, Math.min(10, Number(params.count) || 1))
  const size = resolveImageDimensions({
    resolution: params.resolution || '自动',
    ratio: params.ratio || '1:1',
    customSize: params.size && /^\d+x\d+$/i.test(String(params.size))
      ? params.size
      : (params.ratio || (params.resolution && params.resolution !== '自动') ? '' : (params.size || '1024x1024')),
    align16: params.align16 !== false,
  })
  const quality = params.quality && params.quality !== '自动' ? mapQuality(params.quality) : ''
  const background = params.background || ''
  const outputFormat = params.outputFormat || (background === 'transparent' ? 'png' : '')

  const sendJson = () => {
    const payload = {
      model,
      prompt: finalPrompt,
      n: 1,
      size,
      images: refList.map((url) => ({ image_url: url })),
    }
    if (quality) payload.quality = quality
    if (background) payload.background = background
    if (outputFormat) payload.output_format = outputFormat
    if (!/gpt-image/i.test(String(model || ''))) payload.response_format = 'b64_json'
    return relay({ channel, path: 'v1/images/edits', payload, timeoutMs: IMAGE_TIMEOUT_MS, signal })
  }

  const sendMultipart = () => {
    const fields = { model, prompt: finalPrompt, n: '1', size }
    if (quality) fields.quality = quality
    if (background) fields.background = background
    if (outputFormat) fields.output_format = outputFormat
    if (!/gpt-image/i.test(String(model || ''))) fields.response_format = 'b64_json'
    const files = refList.map((dataUrl, i) => ({
      field: refList.length > 1 ? 'image[]' : 'image',
      name: `reference-${i + 1}.png`,
      dataUrl,
    }))
    return relay({ channel, path: 'v1/images/edits', multipart: { fields, files }, timeoutMs: IMAGE_TIMEOUT_MS, signal })
  }

  const preferMultipart = channel?.editFormat === 'multipart' || /api\.openai\.com/i.test(String(channel?.baseUrl || ''))

  onProgress?.({ stage: 'request', n: count })
  const out = await runConcurrentBatch(count, async (slotIndex) => {
    let raw
    try {
      raw = preferMultipart ? await sendMultipart() : await sendJson()
    } catch (error) {
      if (isAbort(error)) throw error
      const msg = String(error?.message || '')
      // 自动协议回退：官方或标准接口拒 JSON 时回退 multipart；中转站要求 images[].image_url 时回退 JSON
      if (!preferMultipart && (error?.status === 415 || (/multipart|form-data|unsupported media type/i.test(msg) && !/images\[\]\.image_url/i.test(msg)))) {
        raw = await sendMultipart()
      } else if (preferMultipart && /images\[\]\.image_url|invalid json|unexpected token/i.test(msg)) {
        raw = await sendJson()
      } else if (/not supported|unsupported/i.test(msg)) {
        throw new ApiError(
          `这个渠道不支持图片编辑（上游返回：${msg}）。换一个支持编辑的渠道再试。`,
          { code: 'EDIT_UNSUPPORTED' },
        )
      } else {
        throw error
      }
    }
    const { results } = await persistImageResults({ raw, signal, slotOffset: slotIndex, onProgress })
    return results
  })

  return { ok: true, items: out.items, failed: out.failed, requested: count, got: out.items.length, short: out.short }
}

/** 中文质量档 → 上游字段值。 */
function mapQuality(quality) {
  const table = { 低: 'low', 中: 'medium', 高: 'high', 极高: 'xhigh', 最高: 'max' }
  return table[quality] || quality
}

// ---------- 入口 ----------

/**
 * 统一入口。支持图片生成/编辑与视频生成。
 */
export async function generateVideo({ channel, model, prompt, params = {}, signal, onTick }) {
  const { createVideoTask, pollVideoTask, saveVideoResult } = await import('./video.js')
  onTick?.({ status: 'pending', stage: 'create' })
  const { taskId } = await createVideoTask({ channel, model, prompt, params, signal })
  onTick?.({ status: 'pending', stage: 'created', taskId })
  const result = await pollVideoTask({ channel, taskId, signal, onTick })
  const saved = await saveVideoResult({ url: result.url, blob: result.blob, taskId, signal })
  return { ok: true, taskId, ...saved }
}

export async function generate({ capability, channel, model, prompt, params = {}, signal, onProgress, onTick }) {
  switch (capability) {
    case 'image':
      return generateImage({ channel, model, prompt, params, signal, onProgress })
    case 'image-edit':
      return generateImageEdit({
        channel,
        model,
        prompt,
        imageDataUrl: params.imageDataUrl,
        imageDataUrls: params.imageDataUrls,
        params,
        signal,
        onProgress,
      })
    case 'video':
      return generateVideo({ channel, model, prompt, params, signal, onTick })
    default:
      throw new ApiError(`暂时还不支持「${capability}」生成`, { code: 'CAPABILITY_TODO' })
  }
}

export { isAbort, ApiError }
