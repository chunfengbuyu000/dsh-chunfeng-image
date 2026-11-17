// 与 Host 半片通信：列出 DSH 供应的模型、流式取文本。
// 在真宿主里（有 window.__DSH_BOOT__）任何失败都如实报错，绝不伪造结果；
// 只有在独立预览页里才降级成一份本地示例，方便截图与演示。

const BASE = 'dsh-chunfeng-image/'
const IN_HOST = typeof window !== 'undefined' && Boolean(window.__DSH_BOOT__)

const PREVIEW_MODELS = {
  providers: [{
    id: 'preview',
    name: '预览示例',
    models: [
      { id: 'deepseek-v4.1-flash', name: 'deepseek-v4.1-flash' },
      { id: 'deepseek-v4.1-pro', name: 'deepseek-v4.1-pro' },
    ],
  }],
  default: { provider: 'preview', model: 'deepseek-v4.1-flash' },
  available: false,
  preview: true,
}

let cachedModels = null

/** 列出 DSH 当前供应的全部模型（按 provider 分组）。 */
export async function fetchModels({ force = false } = {}) {
  if (cachedModels && !force) return cachedModels
  try {
    const res = await fetch(BASE + 'models', {
      headers: { 'sec-fetch-site': 'same-origin' },
      cache: 'no-store',
    })
    if (!res.ok) throw new Error(`HTTP ${res.status}`)
    cachedModels = await res.json()
    return cachedModels
  } catch (err) {
    if (IN_HOST) throw err
    cachedModels = PREVIEW_MODELS
    return cachedModels
  }
}

/** 把 provider/model 显示成「模型名」，找不到就退回 model id。 */
export function modelLabel(models, selection) {
  if (!selection?.model) return ''
  const provider = models?.providers?.find(p => p.id === selection.provider)
  const model = provider?.models?.find(m => m.id === selection.model)
  return model?.name || selection.model
}

/**
 * 流式取文本。onDelta(增量, 累积) 会被逐段调用。
 * @returns {Promise<string>} 完整文本
 */
export async function streamText({ messages, system, model, maxTokens, signal, onDelta }) {
  if (!IN_HOST) return previewStream({ messages, onDelta, signal })

  const res = await fetch(BASE + 'stream', {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
    body: JSON.stringify({ messages, system, model, maxTokens }),
    signal,
  })
  if (!res.ok) {
    let message = `模型调用失败（HTTP ${res.status}）`
    try {
      const body = await res.json()
      if (body?.error) message = body.error
    } catch { /* 保留默认文案 */ }
    throw new Error(message)
  }
  if (!res.body) throw new Error('当前环境不支持流式读取')

  const reader = res.body.getReader()
  const decoder = new TextDecoder()
  let buffer = ''
  let text = ''

  for (;;) {
    const { value, done } = await reader.read()
    if (done) break
    buffer += decoder.decode(value, { stream: true })
    let cut
    while ((cut = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, cut).trim()
      buffer = buffer.slice(cut + 1)
      if (!line) continue
      let event
      try {
        event = JSON.parse(line)
      } catch {
        continue
      }
      if (event.error) throw new Error(event.error)
      if (typeof event.d === 'string' && event.d) {
        text += event.d
        onDelta?.(event.d, text)
      }
      if (event.done) return text
    }
  }
  return text
}

/** 仅预览：给一段本地示例流，让界面在脱离宿主时也能走通。 */
async function previewStream({ messages, onDelta, signal }) {
  const last = [...(messages || [])].reverse().find(m => m.role === 'user')?.text || ''
  const reply = `（预览示例，没有连接真实模型）\n\n收到：${last.slice(0, 60)}`
  let text = ''
  for (const ch of reply) {
    if (signal?.aborted) break
    text += ch
    onDelta?.(ch, text)
    await new Promise(r => setTimeout(r, 12))
  }
  return text
}
