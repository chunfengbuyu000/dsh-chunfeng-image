// 春风画布 · Host 半片
// 职责只有两件：
//   1. 把 DSH 当前供应的模型列给浏览器（客户端拿不到 llm 服务，只能在 Host 侧问）
//   2. 把文本生成 / 助手对话以流式回传（NDJSON，每行一个 JSON）
// 画布数据本身仍然存在浏览器侧。
import { randomUUID } from 'node:crypto'

export const name = 'dsh-chunfeng-image'

/** 插件在会话之外调模型，自己带一个会话标识（有些网关按会话路由，缺了会直接 400）。 */
const PLUGIN_SESSION_ID = `dsh-chunfeng-image-${randomUUID()}`

const DEFAULT_SYSTEM = '你是一个简洁、具体的中文创意与写作助手。直接给内容，不要解释你在做什么。'

function json(res, status, body) {
  const text = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
  })
  res.end(text)
}

/** Web 服务不替插件路由鉴权，每个请求自己查一遍；拿不到鉴权服务时一律拒绝。 */
function requestRejection(ctx, req) {
  const connection = ctx.get('connection')
  if (typeof connection?.requestRejection !== 'function') return 403
  return connection.requestRejection({ headers: req.headers })
}

async function readJson(req, limit = 512 * 1024) {
  const chunks = []
  let size = 0
  for await (const chunk of req) {
    size += chunk.length
    if (size > limit) throw Object.assign(new Error('请求体过大'), { status: 413 })
    chunks.push(chunk)
  }
  if (!chunks.length) return {}
  try {
    return JSON.parse(Buffer.concat(chunks).toString('utf8'))
  } catch {
    throw Object.assign(new Error('请求体不是合法 JSON'), { status: 400 })
  }
}

/** DSH 当前供应的全部模型，按 provider 分组。 */
async function listModels(ctx) {
  const llm = ctx.get('llm')
  if (!llm || typeof llm.listProviders !== 'function') {
    return { providers: [], default: null, available: false }
  }
  let providers = []
  try {
    providers = await llm.listProviders()
  } catch {
    providers = []
  }

  const out = []
  for (const provider of providers) {
    let models = []
    try {
      models = await llm.listModels(provider.id)
    } catch {
      models = []
    }
    if (!models?.length) continue
    out.push({
      id: provider.id,
      name: provider.name || provider.id,
      models: models.map(m => ({ id: m.id, name: m.name || m.id })),
    })
  }

  let def = null
  try {
    const selection = ctx.get('agentDefaultModel')?.currentSelection()
    if (selection?.provider && selection?.model) {
      def = { provider: selection.provider, model: selection.model }
    }
  } catch {
    def = null
  }

  return { providers: out, default: def, available: true }
}

/** 指定了就用指定的，否则跟随 DSH 的默认模型。 */
function resolveRoute(ctx, wanted) {
  if (wanted?.provider && wanted?.model) return { provider: wanted.provider, model: wanted.model }
  try {
    const selection = ctx.get('agentDefaultModel')?.currentSelection()
    if (selection?.provider && selection?.model) {
      return { provider: selection.provider, model: selection.model }
    }
  } catch { /* 没有默认模型 */ }
  return null
}

function normalizeMessages(raw) {
  const list = Array.isArray(raw) ? raw : []
  return list
    .filter(m => m && typeof m.text === 'string' && m.text.length)
    .slice(-24)
    .map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: [{ type: 'text', text: m.text }],
      source: { kind: 'dsh-chunfeng-image' },
    }))
}

/** 流式文本：每行一个 JSON，{d} 增量、{done} 结束、{error} 失败。 */
async function streamText(ctx, req, res, body) {
  const llm = ctx.get('llm')
  if (!llm || typeof llm.prepareCall !== 'function') {
    json(res, 503, { error: '当前环境没有可用的模型服务' })
    return
  }
  const route = resolveRoute(ctx, body.model)
  if (!route) {
    json(res, 400, { error: '还没有可用的模型，请先在 DSH 里选择默认模型' })
    return
  }

  const controller = new AbortController()
  req.on('close', () => controller.abort())

  res.writeHead(200, {
    'content-type': 'application/x-ndjson; charset=utf-8',
    'cache-control': 'no-store',
    'x-accel-buffering': 'no',
  })
  const send = (obj) => {
    if (!res.writableEnded) res.write(`${JSON.stringify(obj)}\n`)
  }

  try {
    const call = await llm.prepareCall({ ...route, maxTokens: Math.min(8000, body.maxTokens || 4000) }, controller.signal)
    let text = ''
    for await (const chunk of call.stream({
      ...call.config,
      system: typeof body.system === 'string' && body.system.trim() ? body.system : DEFAULT_SYSTEM,
      messages: normalizeMessages(body.messages),
      sessionId: PLUGIN_SESSION_ID,
      signal: controller.signal,
    })) {
      if (chunk.type === 'text-delta') {
        text += chunk.text
        send({ d: chunk.text })
      } else if (chunk.type === 'finish' && ['error', 'aborted'].includes(chunk.reason?.kind)) {
        throw new Error(chunk.reason.failure?.message || '模型调用失败')
      }
    }
    send({ done: true, model: route.model, chars: text.length })
  } catch (err) {
    if (!controller.signal.aborted) send({ error: err.message || '模型调用失败' })
  } finally {
    res.end()
  }
}

export default {
  inject: ['webServer', 'connection'],
  apply(ctx) {
    ctx.effect(() => ctx.webServer.register({
      kind: 'prefix',
      path: '/dsh-chunfeng-image',
      handler: async (req, res) => {
        try {
          const rejection = requestRejection(ctx, req)
          if (rejection) {
            json(res, rejection, { error: '未授权' })
            return
          }
          const url = new URL(req.url || '/', 'http://local')
          const path = url.pathname.replace(/^\/dsh-chunfeng-image\/?/, '')
          const method = req.method || 'GET'

          if (method === 'GET' && path === 'models') {
            json(res, 200, await listModels(ctx))
            return
          }
          if (method === 'POST' && path === 'stream') {
            await streamText(ctx, req, res, await readJson(req))
            return
          }
          json(res, 404, { error: '未知路径' })
        } catch (err) {
          if (res.headersSent) {
            res.end()
            return
          }
          json(res, err.status || 500, { error: err.message })
        }
      },
    }), 'dsh-chunfeng-image: routes')
  },
}
