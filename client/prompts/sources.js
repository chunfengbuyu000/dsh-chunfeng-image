// 提示词来源：7 个官方内置源预设、URL 智能归一化、全字段（含封面/参考图）解析、
// 镜像自动回退、IndexedDB 大容量缓存以及参考图经 Host 转存 IndexedDB。

import { get, set } from '../storage/idb.js'
import { STORES, K } from '../storage/keys.js'
import { putMedia, makeStorageKey, readBlobSize, resolveMediaUrl } from '../gen/result.js'

const CACHE_KEY = 'dsh-cf:prompt-cache:v1'
export const FETCH_TIMEOUT = 60_000
/** 主地址超过该时长仍未响应时，提前并发启用镜像地址竞速，避免干等超时才切换。 */
const HEDGE_DELAY_MS = 6_000
/** 批量拉取最大并发数，避免 7 路同时建连在弱网/代理下互相挤爆超时。 */
const FETCH_CONCURRENCY = 3
/** 单源最多取多少条，避免某个超大文件把内存打爆。 */
const MAX_ITEMS_PER_SOURCE = 3000

export const PROMPT_REGISTRY_RAW_BASE = 'https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources'
export const PROMPT_REGISTRY_CDN_BASE = 'https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources'

function makeBuiltinSource(id, name, homepage) {
  return {
    id,
    name,
    url: `${PROMPT_REGISTRY_RAW_BASE}/${id}.json`,
    fallbackUrl: `${PROMPT_REGISTRY_CDN_BASE}/${id}.json`,
    homepage,
    enabled: true,
    builtIn: true,
  }
}

export const BUILTIN_PROMPT_SOURCES = [
  makeBuiltinSource('banana-prompt-quicker', 'Banana Prompt Quicker', 'https://glidea.github.io/banana-prompt-quicker/'),
  makeBuiltinSource('davidwu-gpt-image2-prompts', 'DavidWu GPT Image 2', 'https://github.com/davidwuw0811-boop/awesome-gpt-image2-prompts'),
  makeBuiltinSource('freestylefly-gpt-image-2', 'Freestylefly GPT Image 2', 'https://github.com/freestylefly/awesome-gpt-image-2'),
  makeBuiltinSource('awesome-gpt-image', 'Awesome GPT Image', 'https://github.com/ZeroLu/awesome-gpt-image'),
  makeBuiltinSource('awesome-gpt4o-image-prompts', 'Awesome GPT-4o', 'https://github.com/ImgEdify/Awesome-GPT4o-Image-Prompts'),
  makeBuiltinSource('youmind-gpt-image-2', 'YouMind GPT Image 2', 'https://github.com/YouMind-OpenLab/awesome-gpt-image-2'),
  makeBuiltinSource('youmind-nano-banana-pro', 'YouMind Nano Banana Pro', 'https://github.com/YouMind-OpenLab/awesome-nano-banana-pro-prompts'),
]

/** 为 raw.githubusercontent.com 地址生成 jsDelivr 镜像地址。 */
export function jsdelivrMirrorOf(rawUrl) {
  const m = String(rawUrl || '').trim().match(/^https?:\/\/raw\.githubusercontent\.com\/([^/]+)\/([^/]+)\/([^/]+)\/(.+)$/i)
  if (!m) return ''
  return `https://cdn.jsdelivr.net/gh/${m[1]}/${m[2]}@${m[3]}/${m[4]}`
}

function cleanCompareKey(raw) {
  return String(raw || '')
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, '')
    .replace(/\/+(readme(?:\.md)?)?$/i, '')
    .replace(/\/tree\/(?:main|master)$/i, '')
    .replace(/\/+$/, '')
}

function findPresetByHomepageOrUrl(rawUrl) {
  const key = cleanCompareKey(rawUrl)
  if (!key) return null
  return BUILTIN_PROMPT_SOURCES.find((p) => (
    cleanCompareKey(p.homepage) === key
    || cleanCompareKey(p.url) === key
    || cleanCompareKey(p.fallbackUrl) === key
  )) || null
}

/**
 * 智能归一化来源配置：
 *   1. 若粘贴了已知内置源的 GitHub 主页或站点主页，自动映射到对应官方 JSON 源
 *   2. 若粘贴了 github.com/<owner>/<repo>/blob/<branch>/<path>.json，自动转为 raw 直链
 *   3. 自动生成 jsDelivr 备用镜像，避免单个域名网络抖动
 */
export function normalizeSourceRecord(source) {
  const rawObj = source && typeof source === 'object' ? source : { url: source }
  const inputUrl = String(rawObj.url || '').trim()
  let url = inputUrl
  let homepage = String(rawObj.homepage || '').trim()
  let convertedFromHomepage = false
  let convertedFromBlob = false

  const preset = findPresetByHomepageOrUrl(inputUrl)
  if (preset) {
    if (cleanCompareKey(inputUrl) === cleanCompareKey(preset.homepage)) {
      url = preset.url
      convertedFromHomepage = true
      if (!homepage) homepage = preset.homepage
    } else if (!homepage) {
      homepage = preset.homepage
    }
  } else {
    const blobMatch = inputUrl.match(/^https?:\/\/github\.com\/([^/]+)\/([^/]+)\/(?:blob|raw)\/([^/]+)\/(.+)$/i)
    if (blobMatch) {
      url = `https://raw.githubusercontent.com/${blobMatch[1]}/${blobMatch[2]}/${blobMatch[3]}/${blobMatch[4]}`
      convertedFromBlob = true
      if (!homepage) homepage = inputUrl
    }
  }

  const fallbackUrl = String(rawObj.fallbackUrl || '').trim()
    || (preset ? preset.fallbackUrl : '')
    || jsdelivrMirrorOf(url)

  const id = String(rawObj.id || '').trim() || preset?.id || `src_${hash(url || inputUrl || 'empty')}`
  const name = String(rawObj.name || '').trim() || preset?.name || '未命名来源'

  return {
    id,
    name,
    url,
    fallbackUrl,
    homepage,
    enabled: rawObj.enabled !== false,
    builtIn: Boolean(rawObj.builtIn || preset),
    convertedFromHomepage,
    convertedFromBlob,
  }
}

// ---------- 缓存读写（IndexedDB 主存储 + 内存同步镜像） ----------

let memCache = null

function readLegacyLocalCache() {
  if (typeof localStorage === 'undefined') return null
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

function hasIdb() {
  return typeof indexedDB !== 'undefined' && indexedDB !== null
}

/** 同步读缓存。初次调用若内存为空会先兜底读旧 localStorage。 */
export function readPromptCache() {
  if (memCache && typeof memCache === 'object') return memCache
  const legacy = readLegacyLocalCache()
  memCache = legacy || {}
  return memCache
}

/** 启动时异步从 IndexedDB 加载完整缓存，并把旧 localStorage 缓存迁入后清空。 */
export async function hydratePromptCache() {
  if (!hasIdb()) return readPromptCache()
  try {
    const idbData = await get(STORES.appState, K.promptCache).catch(() => null)
    const legacy = readLegacyLocalCache()
    const merged = {
      ...(legacy && typeof legacy === 'object' ? legacy : {}),
      ...(memCache && typeof memCache === 'object' ? memCache : {}),
      ...(idbData && typeof idbData === 'object' ? idbData : {}),
    }
    memCache = merged
    if (legacy && Object.keys(legacy).length) {
      await set(STORES.appState, K.promptCache, merged).catch(() => {})
      try { localStorage.removeItem(CACHE_KEY) } catch { /* ignore */ }
    }
    return merged
  } catch {
    return readPromptCache()
  }
}

export function writePromptCache(cache) {
  const clean = cache && typeof cache === 'object' ? cache : {}
  memCache = clean
  if (hasIdb()) {
    set(STORES.appState, K.promptCache, clean).catch(() => {})
    return true
  }
  if (typeof localStorage === 'undefined') return true
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify(clean))
    return true
  } catch {
    try {
      const keys = Object.keys(clean)
      const trimmed = {}
      keys.slice(-5).forEach((k) => { trimmed[k] = clean[k] })
      localStorage.setItem(CACHE_KEY, JSON.stringify(trimmed))
      return true
    } catch {
      return false
    }
  }
}

/** 从缓存展开成提示词数组，按启用源规范化并带出 sourceId / category。 */
export function promptsFromCache(cache, sources = null) {
  const out = []
  if (Array.isArray(sources)) {
    const seen = new Set()
    for (const s of sources) {
      if (!s || s.enabled === false || !s.url) continue
      const norm = normalizeSourceRecord(s)
      const entry = cache?.[norm.url] || cache?.[s.url] || cache?.[norm.id]
      if (!entry?.items?.length) continue
      for (const item of entry.items) {
        const uid = `${norm.id}\u0000${item.id}`
        if (seen.has(uid)) continue
        seen.add(uid)
        out.push({
          ...item,
          sourceId: norm.id,
          sourceName: norm.name,
          category: item.category || norm.name,
        })
      }
    }
    return out
  }

  for (const [sourceKey, entry] of Object.entries(cache || {})) {
    if (!entry?.items?.length) continue
    const sid = entry.id || sourceKey
    const sname = entry.name || sourceKey
    entry.items.forEach((item) => {
      out.push({
        ...item,
        sourceId: item.sourceId || sid,
        sourceName: sname,
        category: item.category || sname,
      })
    })
  }
  return out
}

/**
 * 精确合并：保留没有 sourceId 的本地/内置提示词，按启用来源列表从缓存重放，
 * 既能让重复拉取覆盖更新旧数据（含封面与参考图），也能在删除/停用来源时立刻移除其条目。
 */
export function mergePromptsWithSources(currentPrompts, sources, cache = readPromptCache()) {
  const localOnly = (currentPrompts || []).filter((p) => p && typeof p === 'object' && !p.sourceId)
  const fromSources = promptsFromCache(cache, sources || [])
  const out = []
  const seen = new Set()
  for (const p of [...fromSources, ...localOnly]) {
    const key = `${p.sourceId || ''}\u0000${p.id || `${p.title}\u0000${p.text}`}`
    if (seen.has(key)) continue
    seen.add(key)
    out.push(p)
  }
  return out
}

// ---------- Schema 归一化（严格字段白名单，绝不透传未知键） ----------

function absoluteUrl(baseUrl, path) {
  const p = String(path || '').trim()
  if (!p) return ''
  if (!baseUrl) return p
  try {
    return new URL(p, baseUrl).toString()
  } catch {
    return p
  }
}

const pickString = (obj, keys) => {
  if (!obj || typeof obj !== 'object') return ''
  for (const k of keys) {
    const v = obj[k]
    if (typeof v === 'string' && v.trim()) return v.trim()
  }
  return ''
}

function extractUrlArray(rawList, baseUrl) {
  if (!Array.isArray(rawList)) return []
  const out = []
  const seen = new Set()
  for (const entry of rawList) {
    const rawUrl = typeof entry === 'string'
      ? entry.trim()
      : pickString(entry, ['url', 'image_url', 'imageUrl', 'src'])
    if (!rawUrl) continue
    const abs = absoluteUrl(baseUrl, rawUrl)
    if (!seen.has(abs)) {
      seen.add(abs)
      out.push(abs)
    }
  }
  return out
}

/**
 * 把任意形状的 JSON 归一成提示词数组（兼容内置格式、社区包装、分类嵌套及纯文本数组）。
 */
export function normalizePrompts(payload, meta = {}) {
  const collect = (node, depth = 0) => {
    if (!node || depth > 4) return []
    if (Array.isArray(node)) {
      return node.flatMap((item) => (Array.isArray(item) ? collect(item, depth + 1) : [mapOne(item, meta)]))
    }
    if (typeof node !== 'object') return []
    for (const key of ['prompts', 'items', 'list', 'data', 'results']) {
      if (Array.isArray(node[key])) return node[key].map((it) => mapOne(it, meta))
    }
    if (Array.isArray(node.categories)) {
      return node.categories.flatMap((cat) => {
        const name = pickString(cat, ['name', 'title', 'category'])
        return collect(cat, depth + 1).map((p) => (p ? { ...p, category: p.category || name } : null))
      })
    }
    return []
  }

  const mapped = collect(payload).filter(Boolean)
  const seen = new Set()
  const out = []
  for (const p of mapped) {
    const dedupeKey = `${p.title}\u0000${p.text}`
    if (seen.has(dedupeKey)) continue
    seen.add(dedupeKey)
    out.push(p)
    if (out.length >= MAX_ITEMS_PER_SOURCE) break
  }
  return out
}

function mapOne(item, meta = {}) {
  if (!item) return null
  if (typeof item === 'string') {
    const text = item.trim()
    return text
      ? {
        id: `p_${hash(`${text.slice(0, 24)}\u0000${text}`)}`,
        title: text.slice(0, 24),
        text,
        category: meta.sourceName || '',
        tags: [],
        coverUrl: '',
        referenceImageUrls: [],
        description: '',
        preview: '',
        author: '',
        sourceUrl: '',
        createdAt: '',
        updatedAt: '',
        imageMode: '',
        imageSize: '',
        sourceId: meta.sourceId || '',
        sourceName: meta.sourceName || '',
      }
      : null
  }
  if (typeof item !== 'object') return null

  const text = pickString(item, ['prompt', 'text', 'content', 'value', 'zh', 'description'])
  const title = pickString(item, ['title', 'name', 'label']) || text.slice(0, 24)
  if (!text && !title) return null

  const rawDesc = pickString(item, ['description', 'desc', 'summary'])
  const description = rawDesc && rawDesc !== text ? rawDesc : ''

  const rawTags = item.tags ?? item.tag ?? item.labels
  const tags = Array.isArray(rawTags)
    ? rawTags.filter((t) => typeof t === 'string' && t.trim()).map((t) => t.trim())
    : typeof rawTags === 'string' && rawTags.trim()
      ? rawTags.split(/[,，;；\s]+/).filter(Boolean)
      : []

  const refRaw = item.referenceImageUrls ?? item.referenceImages ?? item.refImages ?? (Array.isArray(item.images) ? item.images : [])
  const referenceImageUrls = extractUrlArray(refRaw, meta.baseUrl)
  const rawCover = pickString(item, ['coverUrl', 'cover', 'imageUrl', 'image', 'thumbnail', 'previewImage'])
  const coverUrl = absoluteUrl(meta.baseUrl, rawCover) || referenceImageUrls[0] || ''

  return {
    id: pickString(item, ['id']) || `p_${hash(`${title}\u0000${text}`)}`,
    title,
    text: text || title,
    category: pickString(item, ['category', 'type', 'group', 'class']) || meta.sourceName || '',
    tags,
    coverUrl,
    referenceImageUrls,
    description,
    preview: pickString(item, ['preview']),
    author: pickString(item, ['author', 'creator']),
    sourceUrl: absoluteUrl(meta.baseUrl, pickString(item, ['sourceUrl', 'homepage', 'link'])),
    createdAt: pickString(item, ['createdAt', 'date']),
    updatedAt: pickString(item, ['updatedAt']),
    imageMode: pickString(item, ['imageMode']),
    imageSize: pickString(item, ['imageSize']),
    sourceId: meta.sourceId || pickString(item, ['sourceId']) || '',
    sourceName: meta.sourceName || '',
  }
}

/** 稳定短 hash，用于给没有 id 的条目或来源生成去重键。 */
function hash(str) {
  let h = 2166136261
  for (let i = 0; i < str.length; i += 1) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 16777619)
  }
  return (h >>> 0).toString(36)
}

// ---------- 网络拉取与参考图转存 ----------

async function fetchViaHost(url, signal) {
  try {
    const res = await fetch(`dsh-chunfeng-image/fetch?url=${encodeURIComponent(url)}`, {
      signal,
      headers: { 'sec-fetch-site': 'same-origin' },
      cache: 'no-store',
    })
    if (!res.ok) return null
    const ct = String(res.headers.get('content-type') || '').toLowerCase()
    if (!ct.includes('application/json')) return null
    const data = await res.json()
    if (!data || typeof data !== 'object') return null
    return data
  } catch {
    return null
  }
}

async function fetchOneJsonUrl(targetUrl, signal, sourceMeta) {
  let status = 0
  let text = ''
  const proxied = await fetchViaHost(targetUrl, signal)
  if (proxied) {
    status = proxied.status
    text = proxied.text || ''
    if (!proxied.ok && !text) {
      return { ok: false, error: proxied.error || `HTTP ${status}` }
    }
  } else {
    const res = await fetch(targetUrl, { signal, cache: 'no-cache' })
    status = res.status
    if (!res.ok) return { ok: false, error: `HTTP ${res.status}` }
    text = await res.text()
  }

  if (status && (status < 200 || status >= 300)) {
    return { ok: false, error: `HTTP ${status}` }
  }
  if (/^\s*<(!doctype|html|head|body)/i.test(text)) {
    return { ok: false, error: '返回的是网页而不是 JSON（请填 .json 数据直链）' }
  }

  let parsed
  try {
    parsed = JSON.parse(text)
  } catch {
    return { ok: false, error: 'JSON 格式有误' }
  }

  const items = normalizePrompts(parsed, {
    baseUrl: targetUrl,
    sourceId: sourceMeta.id,
    sourceName: sourceMeta.name,
  })
  if (!items.length) {
    return { ok: false, error: '这份 JSON 里没认出提示词' }
  }
  return { ok: true, items }
}

/** 判断某个已启用来源是否需要拉取（无缓存、空条目或上次失败）。 */
export function sourceNeedsFetch(rawSource, cache = readPromptCache()) {
  const source = normalizeSourceRecord(rawSource)
  if (!source.url || source.enabled === false) return false
  const cached = cache[source.url] || cache[rawSource?.url] || cache[source.id]
  if (!cached || !Array.isArray(cached.items) || cached.items.length === 0) return true
  if (cached.lastError) return true
  return false
}

/**
 * 拉取单个源，内置镜像自动回退 + 延迟竞速（主地址 6 秒无响应即并发拉镜像，谁先成功取谁）。
 * 返回 { ok, id, name, url, items, error, ms } —— 永远 resolve，不抛。
 */
export async function fetchSource(rawSource, { signal, timeoutMs = FETCH_TIMEOUT, hedgeDelayMs = HEDGE_DELAY_MS } = {}) {
  const source = normalizeSourceRecord(rawSource)
  const { id, name, url, fallbackUrl } = source
  if (!url) return { ok: false, id, name, url, items: [], error: '没有填地址' }
  if (!/^https?:\/\//i.test(url)) return { ok: false, id, name, url, items: [], error: '地址必须是 http(s)' }

  const t0 = Date.now()
  const hasFallback = Boolean(fallbackUrl && fallbackUrl !== url)
  const primaryCtrl = new AbortController()
  const fallbackCtrl = new AbortController()
  let timedOut = false
  const abortBoth = () => {
    primaryCtrl.abort()
    fallbackCtrl.abort()
  }
  const timer = setTimeout(() => { timedOut = true; abortBoth() }, timeoutMs)
  const onAbort = () => abortBoth()
  signal?.addEventListener('abort', onAbort, { once: true })

  const formatError = (error) => {
    if (error?.name === 'AbortError' || error?.name === 'TimeoutError') {
      if (signal?.aborted) return '已取消'
      if (timedOut) return `超过 ${Math.round(timeoutMs / 1000)} 秒没响应`
      return '请求已取消'
    }
    return /failed to fetch|load failed|networkerror/i.test(error?.message || '')
      ? '取不到内容：跨域被拦或地址不可达（Host 代理也没成功）'
      : (error?.message || '网络错误')
  }

  const runAttempt = async (targetUrl, ctrl) => {
    try {
      return await fetchOneJsonUrl(targetUrl, ctrl.signal, source)
    } catch (error) {
      return { ok: false, error: formatError(error), aborted: ctrl.signal.aborted }
    }
  }

  let hedgeTimer = null
  try {
    if (!hasFallback) {
      const out = await runAttempt(url, primaryCtrl)
      if (out.ok) return { ok: true, id, name, url, items: out.items, ms: Date.now() - t0 }
      return { ok: false, id, name, url, items: [], error: out.error || formatError({ name: 'AbortError' }), ms: Date.now() - t0 }
    }

    const out = await new Promise((resolve) => {
      let settled = false
      let primaryDone = false
      let fallbackStarted = false
      let fallbackDone = false
      let primaryRes = null
      let fallbackRes = null

      const finish = (res) => {
        if (settled) return
        settled = true
        if (hedgeTimer) { clearTimeout(hedgeTimer); hedgeTimer = null }
        abortBoth()
        resolve(res)
      }

      const checkBothFailed = () => {
        if (!primaryDone || !fallbackDone) return
        const err = (!fallbackRes?.aborted && fallbackRes?.error)
          || (!primaryRes?.aborted && primaryRes?.error)
          || primaryRes?.error
          || fallbackRes?.error
          || (signal?.aborted ? '已取消' : `超过 ${Math.round(timeoutMs / 1000)} 秒没响应`)
        finish({ ok: false, error: err })
      }

      const startFallback = () => {
        if (fallbackStarted || settled) return
        fallbackStarted = true
        if (hedgeTimer) { clearTimeout(hedgeTimer); hedgeTimer = null }
        if (signal?.aborted || timedOut) {
          fallbackDone = true
          fallbackRes = { ok: false, error: signal?.aborted ? '已取消' : `超过 ${Math.round(timeoutMs / 1000)} 秒没响应`, aborted: true }
          checkBothFailed()
          return
        }
        runAttempt(fallbackUrl, fallbackCtrl).then((res) => {
          fallbackDone = true
          fallbackRes = res
          if (res.ok) {
            primaryCtrl.abort()
            finish(res)
            return
          }
          checkBothFailed()
        })
      }

      hedgeTimer = setTimeout(startFallback, Math.max(0, hedgeDelayMs))

      runAttempt(url, primaryCtrl).then((res) => {
        primaryDone = true
        primaryRes = res
        if (res.ok) {
          fallbackCtrl.abort()
          finish(res)
          return
        }
        if (!fallbackStarted) startFallback()
        else checkBothFailed()
      })
    })

    if (!out.ok) {
      return { ok: false, id, name, url, items: [], error: out.error, ms: Date.now() - t0 }
    }
    return { ok: true, id, name, url, items: out.items, ms: Date.now() - t0 }
  } finally {
    if (hedgeTimer) clearTimeout(hedgeTimer)
    clearTimeout(timer)
    signal?.removeEventListener('abort', onAbort)
  }
}

/** 刷新单个源并写回缓存。 */
export async function fetchSingleSource(source, { signal, timeoutMs } = {}) {
  const cache = readPromptCache()
  const result = await fetchSource(source, { signal, timeoutMs })
  if (result.ok) {
    const key = result.url || result.name
    cache[key] = { id: result.id, name: result.name, url: result.url, items: result.items, at: Date.now(), count: result.items.length }
  } else if (result.url && cache[result.url]) {
    cache[result.url] = { ...cache[result.url], lastError: result.error, lastTriedAt: Date.now() }
  }
  writePromptCache(cache)
  return { result, cache, prompts: promptsFromCache(cache, [source]) }
}

/**
 * 拉取已启用源（默认限制并发数为 3，逐个完成即写缓存，避免弱网并发挤爆）。
 * onlyMissingOrFailed=true 时跳过已有有效缓存且无报错的源，只拉取失败或未拉取的源。
 */
export async function fetchAllSources(sources, {
  signal,
  onProgress,
  onResult,
  concurrency = FETCH_CONCURRENCY,
  onlyMissingOrFailed = false,
  timeoutMs,
  hedgeDelayMs,
} = {}) {
  const list = (sources || []).filter((s) => s && s.url && s.enabled !== false)
  const cache = readPromptCache()
  if (!list.length) return { results: [], skipped: 0, cache, prompts: [] }

  const targets = onlyMissingOrFailed
    ? list.filter((s) => sourceNeedsFetch(s, cache))
    : list
  const skipped = list.length - targets.length
  if (!targets.length) {
    return { results: [], skipped, cache, prompts: promptsFromCache(cache, list) }
  }

  const results = new Array(targets.length)
  let cursor = 0
  const workerCount = Math.max(1, Math.min(Number(concurrency) || FETCH_CONCURRENCY, targets.length))

  const runWorker = async () => {
    while (cursor < targets.length) {
      const idx = cursor
      cursor += 1
      const source = targets[idx]
      onProgress?.({ index: idx, total: targets.length, name: source.name || source.url })
      let r
      try {
        r = await fetchSource(source, { signal, timeoutMs, hedgeDelayMs })
      } catch (error) {
        const norm = normalizeSourceRecord(source)
        r = {
          ok: false,
          id: norm.id,
          name: norm.name,
          url: norm.url,
          items: [],
          error: error?.message || '未知错误',
        }
      }
      results[idx] = r
      if (r.ok) {
        const key = r.url || r.name
        cache[key] = { id: r.id, name: r.name, url: r.url, items: r.items, at: Date.now(), count: r.items.length }
      } else if (r.url && cache[r.url]) {
        cache[r.url] = { ...cache[r.url], lastError: r.error, lastTriedAt: Date.now() }
      }
      writePromptCache(cache)
      onResult?.(r, { ...cache })
    }
  }

  await Promise.all(Array.from({ length: workerCount }, runWorker))
  return { results, skipped, cache, prompts: promptsFromCache(cache, list) }
}

/** 每个源的状态摘要，给界面显示用。 */
export function describeSources(sources, results = [], cache = {}) {
  return (sources || []).map((rawSource) => {
    const source = normalizeSourceRecord(rawSource)
    const hit = results.find((r) => r.url === source.url || r.url === rawSource.url || r.id === source.id)
    const cached = cache[source.url] || cache[rawSource.url] || cache[source.id]
    return {
      id: source.id,
      name: source.name,
      url: source.url,
      enabled: source.enabled,
      ok: hit ? hit.ok : null,
      error: hit ? hit.error : (cached?.lastError || ''),
      count: cached?.count || cached?.items?.length || 0,
      at: cached?.at || 0,
      ms: hit?.ms || 0,
    }
  })
}

/**
 * 经 Host 代理把远程参考图拉成本地 Blob 并写入 IndexedDB（优先走 /fetch-media，支持 jsDelivr 镜像与纯预览直连回退）。
 */
export async function fetchRemoteImagesToStorage(urls, { max = 4, signal } = {}) {
  const list = (urls || []).filter((u) => typeof u === 'string' && /^https?:\/\//i.test(u.trim())).slice(0, max)
  if (!list.length) return []

  const fetchBlobForUrl = async (rawUrl) => {
    const tryCandidates = [rawUrl]
    const mirror = jsdelivrMirrorOf(rawUrl)
    if (mirror && mirror !== rawUrl) tryCandidates.push(mirror)

    for (const candidate of tryCandidates) {
      try {
        const res = await fetch(`dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(candidate)}`, {
          signal,
          headers: { 'sec-fetch-site': 'same-origin' },
          cache: 'force-cache',
        })
        if (res.ok) {
          const blob = await res.blob()
          if (blob.size > 0 && blob.type.startsWith('image/')) return blob
        }
        if (res.status === 404) break
      } catch (err) {
        if (err?.name === 'AbortError' || signal?.aborted) throw err
      }
    }

    // 仅预览环境（Host 路由不存在时）回退浏览器直连
    const direct = await fetch(rawUrl, { signal, cache: 'force-cache' })
    if (!direct.ok) return null
    const blob = await direct.blob()
    return blob.size > 0 && blob.type.startsWith('image/') ? blob : null
  }

  const out = []
  for (let i = 0; i < list.length; i += 1) {
    if (signal?.aborted) break
    try {
      const blob = await fetchBlobForUrl(list[i])
      if (!blob) continue
      const dims = await readBlobSize(blob).catch(() => ({ width: 0, height: 0 }))
      const key = makeStorageKey('ref')
      await putMedia(key, blob, {
        mimeType: blob.type || 'image/png',
        source: 'prompt-ref',
        width: dims.width,
        height: dims.height,
      })
      const url = await resolveMediaUrl(key).catch(() => URL.createObjectURL(blob))
      out.push({
        id: `ref_${Date.now().toString(36)}_${i}`,
        name: `提示词参考图 ${i + 1}`,
        storageKey: key,
        url,
        width: dims.width,
        height: dims.height,
      })
    } catch (err) {
      if (err?.name === 'AbortError' || signal?.aborted) break
    }
  }
  return out
}
