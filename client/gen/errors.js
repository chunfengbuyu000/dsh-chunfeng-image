// 错误归一化：把各种形态的上游失败收敛成一句中文 + 稳定的 code。
//
// 实测这个上游可能返回四种形态，全都得认：
//   {code:"API_KEY_REQUIRED", message:"..."}                     ← OpenAI 兼容中转
//   {error:{code:401, message:"...", status:"UNAUTHENTICATED"}}  ← Gemini 原生
//   '404 page not found'                                         ← text/plain
//   '<!doctype html>...'                                         ← 反代错误页 / SPA
// 而且 code 比 message 有信息量：API_KEY_REQUIRED（没填）与
// INVALID_API_KEY（填错）是两个完全不同的用户动作。

const STATUS_TEXT = {
  400: '请求格式有误',
  401: '鉴权失败',
  403: '没有权限',
  404: '接口或模型不存在',
  405: '接口不支持该请求方法',
  408: '上游响应超时',
  409: '请求冲突，请稍后重试',
  413: '请求体过大：参考图太多或提示词太长',
  415: '上游不支持这种内容类型',
  422: '上游拒绝了这个参数组合',
  429: '请求过于频繁',
  499: '已取消',
  500: '上游服务出错',
  502: '上游网关错误',
  503: '上游繁忙',
  504: '上游网关超时',
}

/** 这些状态最常见原因是配置问题，给一句能直接照做的提示。 */
const STATUS_HINT = {
  401: 'API Key 没填或已失效',
  403: 'API Key 无权用这个模型',
  413: '减少参考图，或把提示词拆短',
  429: '降并发或稍后重试',
}

/** 上游的业务码，比 message 更准。 */
const BODY_CODE_TEXT = {
  API_KEY_REQUIRED: '没有填 API Key',
  INVALID_API_KEY: 'API Key 无效或已过期',
  RATE_LIMITED: '上游限流，稍后重试',
  NOT_FOUND: '上游没有这个接口或模型',
  INSUFFICIENT_QUOTA: '上游额度不足',
  CONTENT_POLICY: '内容被上游安全策略拦下，换个描述再试',
}

/** 上游可能返回 HTML（反代错误页 / 挑战页），抽一小段可见文字当证据。 */
function htmlPreview(text) {
  const visible = text
    .replace(/<script[\s\S]*?<\/script>/gi, ' ')
    .replace(/<style[\s\S]*?<\/style>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
  return visible.slice(0, 120) || '空页面'
}

/**
 * 从任意形态的错误体里挖一句人能看懂的话。
 * 覆盖：{code,message}、{error:{message}}、{error:{message,status}}、
 * {msg}、{detail:[]}、多层 JSON 字符串、纯文本、HTML 页。
 */
export function readApiMessage(value, depth = 0) {
  if (value == null || depth > 5) return ''
  if (typeof value === 'number' || typeof value === 'boolean') return ''

  if (typeof value === 'string') {
    const text = value.trim()
    if (!text) return ''
    if (/^<(!doctype|html|head|body|\?xml)/i.test(text) || /<[a-z][\s\S]*>/i.test(text)) {
      return `上游返回了网页而不是接口数据：${htmlPreview(text)}`
    }
    if (/^[[{]/.test(text)) {
      try { return readApiMessage(JSON.parse(text), depth + 1) } catch { return text.slice(0, 200) }
    }
    return text.slice(0, 200)
  }

  if (Array.isArray(value)) {
    for (const item of value) {
      const found = readApiMessage(item, depth + 1)
      if (found) return found
    }
    return ''
  }

  const error = value.error
  const errorText = typeof error === 'string'
    ? error
    : error && typeof error === 'object'
      ? (readApiMessage(error.message, depth + 1) || readApiMessage(error.msg, depth + 1))
      : ''
  const code = typeof value.code === 'string' ? value.code : ''
  return BODY_CODE_TEXT[code]
    || readApiMessage(value.msg, depth + 1)
    || readApiMessage(value.message, depth + 1)
    || readApiMessage(errorText, depth + 1)
    || readApiMessage(value.detail, depth + 1)
    || readApiMessage(value.error, depth + 1)
    || ''
}

export class ApiError extends Error {
  constructor(message, { code, status, body, cause } = {}) {
    super(message)
    this.name = 'ApiError'
    this.code = code || 'REQUEST_FAILED'
    this.status = status ?? 0
    this.body = body
    if (cause) this.cause = cause
  }
}

/** fetch 抛错时区分：被取消、超时、断开。 */
export function classifyFetchError(error, { timeoutMs } = {}) {
  if (error?.name === 'AbortError') return new ApiError('已取消', { code: 'ABORTED', cause: error })
  if (error?.name === 'TimeoutError') {
    return new ApiError(
      `请求超时：超过 ${Math.round((timeoutMs || 0) / 1000)} 秒没有响应`,
      { code: 'TIMEOUT', cause: error },
    )
  }
  // 不要一口咬定「插件服务没启动」—— 真实原因可能是请求被截断、
  // 连接被重置、scheme 处理器超时。把底层的名字带出来，
  // 否则每次出问题都只能靠猜。
  const detail = error?.cause?.message || error?.message || ''
  const suffix = detail && detail !== 'Failed to fetch' ? `：${detail}` : ''
  return new ApiError(`网络请求失败${suffix}`, { code: 'NETWORK', cause: error })
}

/**
 * 非 2xx：先看 body 里的话，再退回状态码文案。
 * 走 Host 转发后，body 的形状是 { error, upstreamStatus, raw }，由 Host 已经归一化过一次；
 * 这里再兜一层，是为了兼容直连模式与未来其它后端。
 */
export function errorFromResponse(response, body, fallback = '请求失败') {
  const status = response?.status ?? 0
  // Host 已经给出可读 error 时直接用
  const direct = typeof body?.error === 'string' ? body.error.trim() : ''
  const apiMessage = direct || readApiMessage(body)
  const hint = STATUS_HINT[status]

  if (body?.cancelled || status === 499) {
    return new ApiError('已取消', { code: 'ABORTED', status })
  }
  if (apiMessage) {
    return new ApiError(hint ? `${apiMessage}（${hint}）` : apiMessage, {
      code: `HTTP_${status}`, status, body,
    })
  }
  const label = STATUS_TEXT[status] || fallback
  return new ApiError(`${label}（HTTP ${status}）`, { code: `HTTP_${status}`, status, body })
}

/**
 * 连通性诊断。
 *
 * 走 Host 转发后，CORS 不再是问题——真正的失败原因变成了三种：
 *   1. 插件服务没起（连不上 Host）
 *   2. 渠道没填 / 填错 Base URL
 *   3. 上游 Key 无效
 * 三者给完全不同的提示，不能都报"失败"。
 *
 * @param probe 由调用方注入：{ ok, message } —— 打一次自家 Host 的轻量请求
 */
export function describeDiagnosis({ reachable, status, message }) {
  if (!reachable) return '插件服务没有响应：确认 DSH 正在运行，且插件已启用。'
  if (status === 401 || status === 403) return message || 'API Key 无效或没有权限。'
  if (status === 404) return '接口路径不存在：检查 Base URL 与模型名。'
  if (status === 429) return '上游限流，稍后再试。'
  if (status >= 500) return `上游出错（HTTP ${status}）：${message || '稍后重试'}`
  return message || ''
}
