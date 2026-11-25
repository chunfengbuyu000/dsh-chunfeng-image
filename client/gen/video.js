// 视频生成：建任务 + 轮询。
//
// 接口按 OpenAI Videos 规范：
//   POST /v1/videos            建任务 → { id }
//   GET  /v1/videos/{id}       查状态 → { status, ... }
//   GET  /v1/videos/{id}/content  取二进制（有些上游直接给 url）
//
// 我们的上游（chunfengapi）**不支持视频**（实测 404 "Videos API is not
// supported for this platform"），所以这段代码在真机上只会给出明确提示。
// 写它是为了：换一个支持视频的渠道就能直接用，而不是到时候再从头做。
//
// 轮询策略比源项目稳（源是 120 × 2500ms = 5 分钟硬上限）：
//   - 总时限 15 分钟
//   - 429 单独退避：2.5 → 4.5 → 8.1 → 14.6 → 20s
//   - 单次查询失败不判死（网络抖动不该让计费中的任务作废）
//   - taskId 落到节点上，刷新后可 pollOnly() 续查

import { relay } from './index.js'
import { ApiError } from './errors.js'
import { putMedia, makeStorageKey } from './result.js'
import { STORES } from '../storage/keys.js'

const CREATE_TIMEOUT = 60_000
const POLL_TIMEOUT = 30_000

/** 总时限：源项目 5 分钟，长视频不够。 */
export const VIDEO_DEADLINE_MS = 15 * 60_000

/** 429 退避序列，用尽后固定 20s。 */
const BACKOFF = [2500, 4500, 8100, 14600, 20000]

const sleep = (ms, signal) => new Promise((resolve, reject) => {
  if (signal?.aborted) { reject(new DOMException('Aborted', 'AbortError')); return }
  const timer = setTimeout(() => { signal?.removeEventListener('abort', onAbort); resolve() }, ms)
  function onAbort() { clearTimeout(timer); reject(new DOMException('Aborted', 'AbortError')) }
  signal?.addEventListener('abort', onAbort, { once: true })
})

/** 从各种可能的形状里挖出任务 id。 */
export function pickTaskId(payload) {
  if (!payload || typeof payload !== 'object') return ''
  for (const key of ['id', 'task_id', 'taskId']) {
    if (typeof payload[key] === 'string' && payload[key]) return payload[key]
  }
  for (const key of ['data', 'task', 'result']) {
    const inner = payload[key]
    if (inner && typeof inner === 'object') {
      const found = pickTaskId(inner)
      if (found) return found
    }
  }
  return ''
}

/** 结果 URL：上游完成时可能直接给链接。 */
export function pickResultUrl(payload) {
  if (!payload || typeof payload !== 'object') return ''
  const direct = [payload.url, payload.video_url, payload.result_url, payload.output_url, payload.download_url]
    .find((v) => typeof v === 'string' && v)
  if (direct) return direct
  // 常见的嵌套：output / result / data 里再放一层
  for (const key of ['output', 'result', 'data', 'video']) {
    const inner = payload[key]
    if (inner && typeof inner === 'object') {
      const found = pickResultUrl(inner)
      if (found) return found
    }
  }
  return ''
}

/** 归一化状态。上游用词不统一。 */
export function normalizeStatus(payload) {
  const raw = String(payload?.status || payload?.state || payload?.task_status || '').toLowerCase()
  if (['completed', 'succeeded', 'success', 'done', 'finished'].includes(raw)) return 'completed'
  if (['failed', 'error', 'cancelled', 'canceled'].includes(raw)) return 'failed'
  if (['queued', 'pending', 'running', 'processing', 'in_progress', 'generating'].includes(raw)) return 'pending'
  return raw ? 'pending' : 'unknown'
}

/**
 * 建任务。
 * 注意：这里发 JSON。带参考图需要 multipart，当前 Host 转发还不支持，
 * 所以只做文生视频（text-to-video）。
 */
export async function createVideoTask({ channel, model, prompt, params = {}, signal }) {
  if (!String(prompt || '').trim()) {
    throw new ApiError('先写一句提示词', { code: 'NO_PROMPT' })
  }
  const payload = { model, prompt }
  if (params.seconds) payload.seconds = String(params.seconds)
  if (params.size) payload.size = params.size

  let raw
  try {
    raw = await relay({
      channel,
      path: 'v1/videos',
      payload,
      timeoutMs: CREATE_TIMEOUT,
      signal,
    })
  } catch (error) {
    // 上游明确说不支持时，给一句能照做的提示
    if (/not supported|unsupported|not found|404/i.test(error.message || '')) {
      throw new ApiError(
        `这个渠道不支持视频生成（上游返回：${error.message}）。换一个支持视频的渠道再试。`,
        { code: 'VIDEO_UNSUPPORTED' },
      )
    }
    throw error
  }

  const id = pickTaskId(raw)
  if (!id) throw new ApiError('上游没有返回任务 ID', { code: 'NO_TASK_ID', body: raw })
  return { taskId: id, raw }
}

/**
 * 查一次任务状态。
 * 永远 resolve 成 { status, url?, error? }，不抛（除了用户取消）。
 */
export async function pollVideoTaskOnce({ channel, taskId, signal }) {
  const raw = await relay({
    channel,
    path: `v1/videos/${encodeURIComponent(taskId)}`,
    method: 'GET',
    timeoutMs: POLL_TIMEOUT,
    signal,
  })
  const status = normalizeStatus(raw)
  const url = pickResultUrl(raw)
  if (status === 'completed' && !url) {
    // 完成但没给链接：有的上游要单独取内容
    return { status: 'completed', url: '', needContent: true, raw }
  }
  if (status === 'failed') {
    const message = raw?.error?.message || raw?.message || '上游报告任务失败'
    return { status: 'failed', error: message, raw }
  }
  return { status: status === 'completed' ? 'completed' : 'pending', url, raw }
}

/**
 * 轮询到完成。
 *
 * @param onTick 每次查询后回调 ({ status, elapsed, attempt })，用于更新界面
 */
export async function pollVideoTask({
  channel, taskId, signal, deadlineMs = VIDEO_DEADLINE_MS, onTick,
}) {
  const start = Date.now()
  let attempt = 0
  let backoffIndex = 0

  while (Date.now() - start < deadlineMs) {
    if (signal?.aborted) throw new DOMException('Aborted', 'AbortError')
    attempt += 1
    let result = null
    let failedReason = ''

    try {
      result = await pollVideoTaskOnce({ channel, taskId, signal })
    } catch (error) {
      if (error?.name === 'AbortError') throw error
      // 429 单独退避；其它错误记下来但不当场判死 —— 网络抖一下不该让计费任务作废
      const isRateLimit = error?.status === 429 || /429|rate limit/i.test(error.message || '')
      if (isRateLimit) {
        const wait = BACKOFF[Math.min(backoffIndex, BACKOFF.length - 1)]
        backoffIndex += 1
        onTick?.({ status: 'pending', elapsed: Date.now() - start, attempt, note: `限流，${Math.round(wait / 1000)}s 后重试` })
        await sleep(wait, signal)
        continue
      }
      failedReason = error?.message || '查询失败'
      onTick?.({ status: 'pending', elapsed: Date.now() - start, attempt, note: failedReason })
      await sleep(2500, signal)
      continue
    }

    if (result.status === 'completed') {
      return { ...result, elapsed: Date.now() - start }
    }
    if (result.status === 'failed') {
      throw new ApiError(result.error || '视频生成失败', { code: 'VIDEO_FAILED', body: result.raw })
    }

    onTick?.({ status: 'pending', elapsed: Date.now() - start, attempt })
    // 查询间隔：前几次快一点，之后放慢，省请求
    await sleep(attempt < 6 ? 2500 : 5000, signal)
  }

  throw new ApiError(
    `等了 ${Math.round(deadlineMs / 60000)} 分钟还没完成。任务可能还在跑，刷新后可以继续等。`,
    { code: 'VIDEO_TIMEOUT' },
  )
}

/** 把结果落成 Blob 并写进 media_files。 */
export async function saveVideoResult({ url, blob, taskId, signal }) {
  let data = blob
  if (!data) {
    if (!url) throw new ApiError('上游没有给出视频地址', { code: 'NO_VIDEO_URL' })
    const res = await fetch(url, { signal })
    if (!res.ok) throw new ApiError(`下载视频失败：HTTP ${res.status}`, { code: 'DOWNLOAD_FAILED' })
    data = await res.blob()
  }
  if (!data.size) throw new ApiError('下载到的视频是空的', { code: 'EMPTY_VIDEO' })

  const key = makeStorageKey('video')
  const saved = await putMedia(key, data, {
    store: STORES.mediaFiles,
    mimeType: data.type || 'video/mp4',
    source: 'video-task',
    taskId,
  })
  return { ...saved, taskId }
}

/**
 * 续查：任务 ID 已经写在节点上，刷新后接着等。
 * 源项目把结果放内存 Map，刷新即丢，而任务已经计费 —— 这里不会。
 */
export async function resumeVideoTask({ channel, taskId, signal, onTick }) {
  const result = await pollVideoTask({ channel, taskId, signal, onTick })
  return saveVideoResult({ url: result.url, blob: null, taskId, signal })
}
