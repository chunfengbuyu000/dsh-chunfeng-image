// 春风画布 · Host 半片
// 职责三件：
//   1. 把 DSH 当前供应的模型列给浏览器（客户端拿不到 llm 服务，只能在 Host 侧问）
//   2. 把文本生成 / 助手对话以流式回传（NDJSON，每行一个 JSON）
//   3. 代浏览器转发生图 / 视频请求到用户的 OpenAI 兼容上游
// 画布数据本身仍然存在浏览器侧。
//
// 为什么生图要走 Host 而不是浏览器直连：
// 渲染进程是 Chromium，从 dsh-app:// 直连 https://<上游> 属于跨源请求，
// 上游没放 Access-Control-Allow-Origin 时浏览器会在响应进 JS 之前就丢掉它，
// 前端只能拿到一句 TypeError: Failed to fetch。Host 跑在 Node 里，不受 CORS 约束，
// 而且和文本走的是同一条已验证的路径。
import { randomUUID } from 'node:crypto'
import { appendFile, chmod, mkdir, readFile, writeFile, rename, stat } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'

export const name = 'dsh-chunfeng-image'

/** 插件在会话之外调模型，自己带一个会话标识（有些网关按会话路由，缺了会直接 400）。 */
const PLUGIN_SESSION_ID = `dsh-chunfeng-image-${randomUUID()}`

const DEFAULT_SYSTEM = '你是一个简洁、具体的中文创意与写作助手。直接给内容，不要解释你在做什么。'

function json(res, status, body, extraHeaders = {}) {
  const text = JSON.stringify(body)
  res.writeHead(status, {
    'content-type': 'application/json; charset=utf-8',
    'cache-control': 'no-store',
    'x-content-type-options': 'nosniff',
    ...extraHeaders,
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
      // inputModalities 用来判断模型能不能读图。不传下去的话，
      // 客户端只能盲发图片 —— 而 DSH 在模型不支持时会把图片静默丢掉，
      // 结果就是「看着成功了，其实是瞎编的」。
      models: models.map(m => ({
        id: m.id,
        name: m.name || m.id,
        inputModalities: Array.isArray(m.inputModalities) ? m.inputModalities : null,
      })),
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

/**
 * 把简单的 {role, text} 转成 DSH 的消息格式。
 *
 * `images` 只挂到最后一条 user 消息上（反推提示词这类「看图说话」的用法）：
 *   { type: 'input_image', detail: 'auto', image_url: 'data:image/png;base64,...' }
 * 这是 DSH 认的形状，用别的写法图片会被丢掉。
 */
function normalizeMessages(raw, images) {
  const list = Array.isArray(raw) ? raw : []
  const out = list
    .filter(m => m && typeof m.text === 'string' && m.text.length)
    .slice(-24)
    .map(m => ({
      role: m.role === 'assistant' ? 'assistant' : 'user',
      content: [{ type: 'text', text: m.text }],
      source: { kind: 'dsh-chunfeng-image' },
    }))

  const pics = Array.isArray(images) ? images.filter(i => i && i.data && i.mimeType) : []
  if (pics.length && out.length) {
    // 挂到最后一个 user 上
    let target = -1
    for (let i = out.length - 1; i >= 0; i -= 1) {
      if (out[i].role === 'user') { target = i; break }
    }
    if (target < 0) target = out.length - 1
    out[target].content = [
      ...out[target].content,
      ...pics.map(p => ({
        type: 'input_image',
        detail: 'auto',
        image_url: `data:${p.mimeType};base64,${p.data}`,
      })),
    ]
  }
  return out
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
      messages: normalizeMessages(body.messages, body.images),
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

// ---------- 上游转发（生图 / 视频） ----------

/** 生成类请求可能带多张无损参考图与蒙版，放宽到 64MB。 */
const RELAY_BODY_LIMIT = 64 * 1024 * 1024
/** 生图是长事务，源仓库给的是 10 分钟；这里稍宽一点。 */
const RELAY_TIMEOUT_MS = 10 * 60_000

/**
 * 上游出图是「按账号池调度」，经常 1 秒内回一句
 *   503 No available compatible accounts
 *   502 Upstream service temporarily unavailable
 * 而同一个模型过十几秒再打就 200。这类瞬时拒绝必须自己重试，
 * 否则用户点一次生成、看到一句英文报错、再点一次就好了 —— 体验全毁在中间那步。
 */
const RETRYABLE_UPSTREAM_STATUS = new Set([502, 503, 504])
const RETRYABLE_UPSTREAM_PATTERN = /No available compatible accounts|Upstream service temporarily unavailable|no available compatible account/i
const RELAY_RETRY_TIMES = 4
const RELAY_RETRY_DELAYS_MS = [1_500, 4_000, 9_000, 20_000]

/** 这个响应值不值得重试：状态码在名单里，或文案是我们认得的那种瞬时拒绝。 */
function shouldRetryUpstream(status, text) {
  if (RETRYABLE_UPSTREAM_STATUS.has(Number(status))) return true
  return typeof text === 'string' && RETRYABLE_UPSTREAM_PATTERN.test(text)
}

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

/** 上游 baseUrl 可能是 https://host/、https://host/v1 或 https://host/v1beta，统一拼成完整地址。 */
function joinUpstream(baseUrl, path, protocol) {
  const base = String(baseUrl || '').trim().replace(/\/+$/, '')
  if (!base) throw Object.assign(new Error('渠道没有填 Base URL'), { status: 400 })
  let suffix = String(path || '').replace(/^\/+/, '')

  if (protocol === 'gemini' || /^v1beta(\/|$)/i.test(suffix)) {
    if ((/\/v1beta$/i.test(base) || /\/v1$/i.test(base)) && /^v1beta(\/|$)/i.test(suffix)) {
      suffix = suffix.replace(/^v1beta\/?/i, '')
    }
    return suffix ? `${base}/${suffix}` : base
  }

  // base 已经以 /v1 结尾时不能再拼一次 —— 否则 https://api.x.com/v1 会变成
  // https://api.x.com/v1/v1/models，上游直接 404。
  if (/\/v1$/i.test(base) && /^v1(\/|$)/i.test(suffix)) {
    suffix = suffix.replace(/^v1\/?/i, '')
  }
  return suffix ? `${base}/${suffix}` : base
}

/** 按协议准备鉴权头：Google 官方 Gemini 只认 x-goog-api-key（带 Bearer 会被拒）；兼容中转站三头并用。 */
function authHeaders(apiKey, channel = {}) {
  const key = String(apiKey || '').trim()
  if (!key) return {}
  if (channel?.protocol === 'gemini' && /googleapis\.com/i.test(String(channel?.baseUrl || ''))) {
    return { 'x-goog-api-key': key }
  }
  return {
    authorization: `Bearer ${key}`,
    'x-api-key': key,
    'x-goog-api-key': key,
  }
}

function buildMultipartForm(multipart) {
  const form = new FormData()
  const fields = multipart?.fields || {}
  for (const [key, value] of Object.entries(fields)) {
    if (value !== undefined && value !== null && value !== '') form.append(key, String(value))
  }
  const files = Array.isArray(multipart?.files) ? multipart.files : []
  files.forEach((item, index) => {
    const raw = String(item?.dataUrl || '')
    const match = raw.match(/^data:([^;,]+)?(?:;charset=[^;,]+)?;base64,([\s\S]+)$/i)
    if (!match) throw Object.assign(new Error('参考图必须为 base64 Data URL 才能通过 multipart 上传'), { status: 400 })
    const mimeType = item.mimeType || match[1] || 'image/png'
    const ext = (mimeType.split('/')[1] || 'png').replace('jpeg', 'jpg').replace(/[^a-z0-9]/gi, '') || 'png'
    const buf = Buffer.from(match[2].replace(/\s+/g, ''), 'base64')
    const blob = new Blob([buf], { type: mimeType })
    form.append(item.field || 'image', blob, item.name || `image-${index + 1}.${ext}`)
  })
  return form
}

/**
 * 把上游的错误体压成一句人能看懂的话。
 * 上游可能是 {code,message}、{error:{message}}、纯文本、甚至整页 HTML。
 */
function readUpstreamMessage(body, status) {
  const raw = typeof body === 'string' ? body.trim() : ''
  if (!raw) return ''
  if (/^<(!doctype|html|head|body)/i.test(raw)) {
    const text = raw.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim().slice(0, 120)
    return `上游返回了网页而不是接口数据（HTTP ${status}）：${text}`
  }
  try {
    const parsed = JSON.parse(raw)
    const codeText = {
      API_KEY_REQUIRED: '没有填 API Key',
      INVALID_API_KEY: 'API Key 无效或已过期',
      RATE_LIMITED: '上游限流，稍后重试',
      INSUFFICIENT_QUOTA: '上游额度不足',
    }
    const picked = codeText[parsed?.code]
    const message = parsed?.error?.message || parsed?.message || parsed?.msg || parsed?.detail
    if (picked && message) return `${picked}（${message}）`
    if (picked) return picked
    if (typeof message === 'string' && message) {
      // 这两个是上游「账号池暂时没空位」的原话，重试过仍然失败时
      // 必须翻译成人话，否则画布上只剩一句英文，看不出该干什么。
      if (/No available compatible accounts/i.test(message)) {
        return '上游账号池暂时没有可用账号（已自动重试若干次），稍等一会儿再生成，或换一个出图模型'
      }
      if (/Upstream service temporarily unavailable/i.test(message)) {
        return '上游服务临时不可用（已自动重试若干次），稍后再试'
      }
      return message.slice(0, 200)
    }
  } catch { /* 不是 JSON，按纯文本给 */ }
  return raw.slice(0, 200)
}

/**
 * 转发一次上游请求。
 * body 原样透传（JSON 或已经被前端解析好的对象），响应体原样回传。
 * 关键点：**不在这里解析结果**，让前端统一处理 b64/url 双形态，
 * 免得 Host 和浏览器两端各有一套解析逻辑、慢慢漂移。
 */
async function relayUpstream(req, res, body) {
  const channel = body?.channel || {}
  const upstreamPath = String(body?.path || '').trim()
  if (!upstreamPath) {
    json(res, 400, { error: '缺少要转发的上游路径' })
    return
  }

  const startedAt = Date.now()
  let target
  try {
    target = joinUpstream(channel.baseUrl, upstreamPath, channel.protocol)
  } catch (error) {
    appendLog(`relay FAIL join ${upstreamPath} → ${error.message}`)
    json(res, error.status || 400, { error: error.message })
    return
  }
  appendLog(`relay START ${upstreamPath} → ${target}`)

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), Number(body?.timeoutMs) || RELAY_TIMEOUT_MS)
  // 浏览器取消（用户点停止）时，把上游请求也掐掉，别让它继续计费
  req.on('close', () => controller.abort())

  try {
    const method = String(body?.method || 'POST').toUpperCase()
    const isMultipart = Boolean(body?.multipart)
    const requestBody = isMultipart
      ? buildMultipartForm(body.multipart)
      : (body?.payload === undefined ? undefined : JSON.stringify(body.payload))
    const requestHeaders = {
      ...(isMultipart ? {} : { 'content-type': 'application/json' }),
      ...authHeaders(channel.apiKey, channel),
      ...(body?.headers && typeof body.headers === 'object' ? body.headers : {}),
    }

    let upstream
    let text = ''
    let binaryImage = null
    for (let attempt = 0; ; attempt += 1) {
      upstream = await fetch(target, {
        method,
        headers: requestHeaders,
        body: requestBody,
        signal: controller.signal,
        redirect: 'follow',
      })
      const ct = String(upstream.headers.get('content-type') || '').toLowerCase()
      if (upstream.ok && ct.startsWith('image/')) {
        const ab = await upstream.arrayBuffer()
        binaryImage = { mimeType: ct.split(';')[0], b64: Buffer.from(ab).toString('base64') }
        break
      }
      text = await upstream.text()
      if (upstream.ok || attempt >= RELAY_RETRY_TIMES) break
      if (!shouldRetryUpstream(upstream.status, text)) break
      const wait = RELAY_RETRY_DELAYS_MS[Math.min(attempt, RELAY_RETRY_DELAYS_MS.length - 1)]
      appendLog(`relay RETRY ${upstream.status} ${upstreamPath} attempt=${attempt + 1}/${RELAY_RETRY_TIMES} wait=${wait}ms`)
      await sleep(wait)
      if (controller.signal.aborted) break
    }

    if (binaryImage) {
      const packed = JSON.stringify({ data: [{ b64_json: binaryImage.b64, mime_type: binaryImage.mimeType }] })
      appendLog(`relay OK ${upstreamPath} ${Date.now() - startedAt}ms image:${binaryImage.b64.length}B`)
      res.writeHead(200, {
        'content-type': 'application/json; charset=utf-8',
        'cache-control': 'no-store',
        'x-content-type-options': 'nosniff',
      })
      res.end(packed)
      return
    }

    if (!upstream.ok) {
      appendLog(`relay HTTP ${upstream.status} ${upstreamPath} ${Date.now() - startedAt}ms`)
      const base = readUpstreamMessage(text, upstream.status) || `上游返回 HTTP ${upstream.status}`
      // 把真正请求的地址带上：404 十次有九次是路径拼错，
      // 只给状态码等于让用户猜。
      const message = `${base}（请求 ${target}）`
      // status 透传，前端据此区分 401 / 429 / 5xx
      json(res, upstream.status, { error: message, upstreamStatus: upstream.status, target, raw: text.slice(0, 4000) })
      return
    }
    if (!text) {
      json(res, 502, { error: '上游返回了空响应' })
      return
    }

    appendLog(`relay OK ${upstreamPath} ${Date.now() - startedAt}ms ${text.length}B`)
    // 正常结果原样回传。用 text 而不是 json()，因为要保留上游的原始结构。
    res.writeHead(200, {
      'content-type': 'application/json; charset=utf-8',
      'cache-control': 'no-store',
      'x-content-type-options': 'nosniff',
    })
    res.end(text)
  } catch (error) {
    if (controller.signal.aborted) {
      // 用户取消：不当作错误，回一个明确的标记
      if (!res.headersSent) json(res, 499, { error: '已取消', cancelled: true })
      return
    }
    const reason = error?.name === 'TimeoutError'
      ? '等待上游超时，可能是上游卡住了'
      : (error?.message || '转发失败')
    appendLog(`relay ERROR ${upstreamPath} ${Date.now() - startedAt}ms ${reason}`)
    if (!res.headersSent) json(res, 502, { error: reason, target })
  } finally {
    clearTimeout(timer)
  }
}

// ---------- 请求日志 ----------
//
// 「网络请求失败」这类问题，光看浏览器端什么都查不出来 ——
// 请求可能压根没到 Host，也可能到了但上游卡住。
// 每次 relay 都落一行到本机文件，出问题时有据可查。

const logFile = () => join(dirname(configFile()), 'relay.log')

let logTruncated = false

function appendLog(line) {
  // 不 await：日志失败不该影响请求。
  // 用 appendFile 而不是「读-改-写」—— 之前那样写，两个 relay 并发时
  // 会各自读到旧内容再整体覆盖，日志互相吃字（真出现过）。
  ;(async () => {
    try {
      const file = logFile()
      // 每次都 mkdir：recursive 本身幂等，开销可忽略。
      // 之前用 logDirReady 缓存，路径一变（测试/换 DSH_CHUNFENG_CONFIG）
      // 就不会再建目录，日志静默丢失。
      await mkdir(dirname(file), { recursive: true })
      // 只在第一次接近上限时截断一次，不做每写都检查
      if (!logTruncated) {
        try {
          const { size } = await stat(file)
          if (size > 1024 * 1024) {
            const prev = await readFile(file, 'utf8')
            await writeFile(file, prev.split('\n').slice(-300).join('\n'), 'utf8')
          }
        } catch { /* 文件还不存在 */ }
        logTruncated = true
      }
      await appendFile(file, `${new Date().toISOString()} ${line}\n`, 'utf8')
    } catch { /* 日志是辅助，失败静默 */ }
  })()
}

// ---------- 通用文本代理（提示词来源等） ----------
//
// 渲染进程 origin 是 dsh-app://app，浏览器直连 https:// 会被跨域拦掉
// （没有 ACAO 头就只剩一句 Failed to fetch）。提示词来源是任意 URL，
// 走不了 /relay 那套 OpenAI 渠道通道，所以单独给一个只读的文本代理。

const FETCH_TEXT_TIMEOUT = 60_000
const FETCH_TEXT_LIMIT = 8 * 1024 * 1024
const FETCH_MEDIA_TIMEOUT = 45_000
const FETCH_MEDIA_LIMIT = 20 * 1024 * 1024
const FETCH_UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) dsh-chunfeng-image/0.1'
const MAX_FETCH_REDIRECTS = 5

const BLOCKED_FETCH_HOSTS = new Set([
  '100.100.100.200',
  'metadata.google.internal',
  'metadata.goog',
  'metadata.azure.internal',
])

const BLOCKED_FETCH_ERROR = '禁止访问云元数据或链路本地地址'

/** 拒绝云元数据与链路本地地址，防止 /fetch 与 /fetch-media 被用作 SSRF 跳板。 */
function isBlockedFetchHost(hostname) {
  let host = String(hostname || '').trim().toLowerCase()
  if (host.startsWith('[') && host.endsWith(']')) host = host.slice(1, -1)
  host = host.replace(/\.+$/, '')
  const zoneIdx = host.indexOf('%')
  if (zoneIdx >= 0) host = host.slice(0, zoneIdx)
  if (!host) return false

  if (BLOCKED_FETCH_HOSTS.has(host)) return true
  if (/^169\.254\.\d{1,3}\.\d{1,3}$/.test(host)) return true
  if (/^fe[89ab][0-9a-f]:/i.test(host)) return true
  if (/^(::ffff:|0:0:0:0:0:ffff:)(169\.254\.\d{1,3}\.\d{1,3}|a9fe:[0-9a-f]{1,4}|100\.100\.100\.200|6464:64c8)$/i.test(host)) {
    return true
  }
  return false
}

async function fetchWithSafeRedirects(initialUrl, init) {
  let current = initialUrl
  for (let hop = 0; hop <= MAX_FETCH_REDIRECTS; hop += 1) {
    const res = await fetch(current.toString(), { ...init, redirect: 'manual' })
    if (![301, 302, 303, 307, 308].includes(res.status)) return { ok: true, response: res }
    const loc = res.headers.get('location')
    if (!loc) return { ok: true, response: res }
    res.body?.cancel?.().catch(() => {})
    let next
    try {
      next = new URL(loc, current)
    } catch {
      return { ok: false, status: 400, error: '地址格式不对' }
    }
    if (!/^https?:$/.test(next.protocol)) {
      return { ok: false, status: 400, error: '只支持 http(s) 地址' }
    }
    if (isBlockedFetchHost(next.hostname)) {
      return { ok: false, status: 403, error: BLOCKED_FETCH_ERROR }
    }
    current = next
  }
  return { ok: false, status: 508, error: '重定向次数过多' }
}

async function fetchTextViaHost(rawUrl) {
  let target
  try {
    target = new URL(rawUrl)
  } catch {
    return { ok: false, status: 0, error: '地址格式不对' }
  }
  if (!/^https?:$/.test(target.protocol)) {
    return { ok: false, status: 0, error: '只支持 http(s) 地址' }
  }
  if (isBlockedFetchHost(target.hostname)) {
    return { ok: false, status: 403, error: BLOCKED_FETCH_ERROR }
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_TEXT_TIMEOUT)
  try {
    const fetched = await fetchWithSafeRedirects(target, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        accept: 'application/json,text/plain,*/*',
        'user-agent': FETCH_UA,
      },
    })
    if (!fetched.ok) return fetched
    const upstream = fetched.response
    const contentType = upstream.headers.get('content-type') || ''
    const buf = await upstream.arrayBuffer()
    if (buf.byteLength > FETCH_TEXT_LIMIT) {
      return { ok: false, status: upstream.status, error: `内容超过 ${FETCH_TEXT_LIMIT / 1024 / 1024}MB` }
    }
    return {
      ok: upstream.ok,
      status: upstream.status,
      contentType,
      text: Buffer.from(buf).toString('utf8'),
    }
  } catch (error) {
    const reason = (error?.name === 'AbortError' || error?.name === 'TimeoutError')
      ? `超过 ${FETCH_TEXT_TIMEOUT / 1000} 秒没响应`
      : (error?.message || '取不到内容')
    return { ok: false, status: 0, error: `请求失败：${reason}` }
  } finally {
    clearTimeout(timer)
  }
}

function sniffImageMime(buf, declaredType = '') {
  const headerMime = String(declaredType || '').split(';')[0].trim().toLowerCase()
  const headText = buf.subarray(0, 64).toString('utf8')
  if (headerMime === 'text/html' || /^\s*<(!doctype|html|head|body)/i.test(headText)) {
    return { isHtml: true, mimeType: '' }
  }
  if (/^image\/[a-z0-9.+-]+$/i.test(headerMime)) {
    return { isHtml: false, mimeType: headerMime }
  }
  if (buf.length >= 4 && buf[0] === 0x89 && buf[1] === 0x50 && buf[2] === 0x4e && buf[3] === 0x47) {
    return { isHtml: false, mimeType: 'image/png' }
  }
  if (buf.length >= 3 && buf[0] === 0xff && buf[1] === 0xd8 && buf[2] === 0xff) {
    return { isHtml: false, mimeType: 'image/jpeg' }
  }
  if (buf.length >= 12 && buf.subarray(0, 4).toString('ascii') === 'RIFF' && buf.subarray(8, 12).toString('ascii') === 'WEBP') {
    return { isHtml: false, mimeType: 'image/webp' }
  }
  if (buf.length >= 4 && buf.subarray(0, 4).toString('ascii') === 'GIF8') {
    return { isHtml: false, mimeType: 'image/gif' }
  }
  if (/^\s*<svg[\s>]/i.test(buf.subarray(0, 256).toString('utf8'))) {
    return { isHtml: false, mimeType: 'image/svg+xml' }
  }
  return { isHtml: false, mimeType: '' }
}

async function fetchMediaViaHost(rawUrl) {
  let target
  try {
    target = new URL(rawUrl)
  } catch {
    return { ok: false, status: 400, error: '地址格式不对' }
  }
  if (!/^https?:$/.test(target.protocol)) {
    return { ok: false, status: 400, error: '只支持 http(s) 地址' }
  }
  if (isBlockedFetchHost(target.hostname)) {
    return { ok: false, status: 403, error: BLOCKED_FETCH_ERROR }
  }

  const controller = new AbortController()
  const timer = setTimeout(() => controller.abort(), FETCH_MEDIA_TIMEOUT)
  try {
    const fetched = await fetchWithSafeRedirects(target, {
      method: 'GET',
      signal: controller.signal,
      headers: {
        accept: 'image/*,*/*;q=0.8',
        'user-agent': FETCH_UA,
      },
    })
    if (!fetched.ok) return fetched
    const upstream = fetched.response
    if (!upstream.ok) {
      return { ok: false, status: upstream.status, error: `HTTP ${upstream.status}` }
    }
    const ab = await upstream.arrayBuffer()
    if (ab.byteLength > FETCH_MEDIA_LIMIT) {
      return { ok: false, status: 413, error: '图片超过 20MB' }
    }
    const buffer = Buffer.from(ab)
    const { isHtml, mimeType } = sniffImageMime(buffer, upstream.headers.get('content-type') || '')
    if (isHtml) {
      return { ok: false, status: 415, error: '返回的不是图片而是网页' }
    }
    if (!mimeType) {
      return { ok: false, status: 415, error: '不支持的图片格式' }
    }
    return { ok: true, status: 200, mimeType, buffer }
  } catch (error) {
    const reason = error?.name === 'AbortError'
      ? `超过 ${FETCH_MEDIA_TIMEOUT / 1000} 秒没响应`
      : (error?.message || '图片拉取失败')
    return { ok: false, status: 502, error: `请求失败：${reason}` }
  } finally {
    clearTimeout(timer)
  }
}

// ---------- 配置存档（渠道 / 默认参数 / 助手模型） ----------
//
// 为什么要有这一层：渠道存在浏览器的 localStorage 里，一旦浏览器存储出问题
// （换 origin、分区被清、写入没落地），渠道就整批没了，用户得重新配一遍 Key。
// 这份 JSON 落在本机文件里，浏览器那边出任何事都能从这里恢复。
//
// 位置：~/.dsh/dsh-chunfeng-image/config.json

// 路径延迟计算：测试可以用 DSH_CHUNFENG_CONFIG 指到临时文件，
// 不会覆盖用户真实的渠道配置。
const configFile = () => process.env.DSH_CHUNFENG_CONFIG
  || join(homedir(), '.dsh', 'dsh-chunfeng-image', 'config.json')

async function readConfigFile() {
  try {
    const raw = await readFile(configFile(), 'utf8')
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

async function writeConfigFile(payload) {
  const file = configFile()
  await mkdir(dirname(file), { recursive: true })
  const text = JSON.stringify({ ...payload, savedAt: new Date().toISOString() }, null, 2)

  // 覆盖前留一代备份。教训：曾有一次测试脚本往这个文件写了假渠道，
  // 用户真实的渠道配置被直接盖掉且无从恢复。
  try {
    const prev = await readFile(file, 'utf8')
    if (prev && prev !== text) {
      await writeFile(`${file}.bak`, prev, { encoding: 'utf8', mode: 0o600 })
      await chmod(`${file}.bak`, 0o600).catch(() => {})
    }
  } catch { /* 首次写入没有旧文件，正常 */ }

  // 先写临时文件再改名：中途崩溃不会留下半截 JSON
  const tmp = `${file}.tmp`
  await writeFile(tmp, text, { encoding: 'utf8', mode: 0o600 })
  await rename(tmp, file)
  await chmod(file, 0o600).catch(() => {})
  return file
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
            // 带图片时请求体会到几 MB，用文本那套 512KB 上限会直接 413
            await streamText(ctx, req, res, await readJson(req, 24 * 1024 * 1024))
            return
          }
          if (method === 'GET' && path === 'ping') {
            json(res, 200, { ok: true, at: Date.now(), pid: process.pid })
            return
          }
          if (method === 'GET' && path === 'fetch') {
            const target = url.searchParams.get('url') || ''
            if (!target) { json(res, 400, { ok: false, error: '缺少 url' }); return }
            const out = await fetchTextViaHost(target)
            json(res, 200, out)
            return
          }
          if (method === 'GET' && path === 'fetch-media') {
            const target = url.searchParams.get('url') || ''
            if (!target) { json(res, 400, { ok: false, error: '缺少 url' }); return }
            const out = await fetchMediaViaHost(target)
            if (!out.ok) {
              json(res, out.status >= 400 ? out.status : 502, { ok: false, error: out.error })
              return
            }
            res.writeHead(200, {
              'content-type': out.mimeType,
              'content-length': out.buffer.length,
              'cache-control': 'public, max-age=86400',
            })
            res.end(out.buffer)
            return
          }
          if (method === 'GET' && path === 'config') {
            const saved = await readConfigFile()
            json(res, 200, { exists: Boolean(saved), config: saved, file: configFile() })
            return
          }
          if (method === 'PUT' && path === 'config') {
            const body = await readJson(req, 2 * 1024 * 1024)
            const channels = Array.isArray(body?.channels) ? body.channels : null
            // 空渠道不写：避免一次读失败把磁盘上的好配置抹掉
            if (!channels || !channels.length) {
              const saved = await readConfigFile()
              if (saved?.channels?.length) {
                json(res, 200, { ok: true, skipped: true, file: configFile() })
                return
              }
            }
            const nextPayload = {
              channels: channels || [],
              defaults: body?.defaults ?? null,
              assistantModel: body?.assistantModel ?? null,
            }
            if (Array.isArray(body?.promptSources)) {
              nextPayload.promptSources = body.promptSources
            }
            const file = await writeConfigFile(nextPayload)
            json(res, 200, { ok: true, file })
            return
          }
          if (method === 'POST' && path === 'relay') {
            await relayUpstream(req, res, await readJson(req, RELAY_BODY_LIMIT))
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
