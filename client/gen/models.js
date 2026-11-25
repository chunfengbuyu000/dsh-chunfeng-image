// 经 Host 拉取上游模型列表。
//
// 为什么绕 Host：上游的 /v1/models 同样需要鉴权头，浏览器直连会先撞 CORS。
// Host 侧已有 relay 路由，直接复用，不另开端点。

import { relay } from './index.js'
import { ApiError } from './errors.js'

const LIST_TIMEOUT_MS = 30_000

/**
 * 拉一个渠道的模型列表。
 * @returns {Promise<Array<{id:string, label:string}>>}
 */
export async function fetchUpstreamModels(channel, { signal } = {}) {
  if (!channel?.baseUrl) throw new ApiError('渠道没有填 Base URL', { code: 'NO_BASE_URL' })
  if (!channel?.apiKey) throw new ApiError('这个渠道还没有填 API Key', { code: 'NO_API_KEY' })

  const isGemini = channel.protocol === 'gemini'
  const raw = await relay({
    channel,
    path: isGemini ? 'v1beta/models' : 'v1/models',
    method: 'GET',
    timeoutMs: LIST_TIMEOUT_MS,
    signal,
  })

  const items = Array.isArray(raw?.data) ? raw.data
    : Array.isArray(raw?.models) ? raw.models
      : Array.isArray(raw) ? raw
        : []

  if (!items.length) throw new ApiError('上游没有返回任何模型', { code: 'NO_MODELS', body: raw })

  return items
    .map((item) => {
      const rawId = typeof item === 'string' ? item : (item?.id || item?.name || '')
      if (!rawId) return null
      const id = isGemini ? String(rawId).replace(/^models\//, '') : rawId
      return { id, label: (typeof item === 'object' && (item.displayName || item.display_name || item.name))?.replace(/^models\//, '') || id }
    })
    .filter(Boolean)
}

/** 按模型名猜能力标签。上游的 models 接口一般不返回能力，只能靠命名。 */
export function guessCapability(id) {
  const name = String(id || '').toLowerCase()
  if (/video|sora|veo|kling|seedance|runway|luma|hailuo|grok-imagine-video|cogvideo|vidu|pika/.test(name)) return 'video'
  if (/tts|speech|audio|voice|whisper|music|suno/.test(name)) return 'audio'
  if (/image|dall|flux|seedream|banana|nanobanana|nano[_-]?banana|imagen|sdxl|stable-diffusion|sd[-_]?\d|midjourney|mj[_-]|gpt-image|grok-imagine|jimeng|ideogram|recraft|kolors|wanx|cogview|hidream|omnigen|hunyuan-image|qwen-image/.test(name)) return 'image'
  return 'text'
}
