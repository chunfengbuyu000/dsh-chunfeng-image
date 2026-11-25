// 旧数据迁移：localStorage 整包 state(v2) → 三层存储（配置 / 画布 / 媒体）。
//
// 设计前提：**这是唯一会造成真实数据损失的环节**，所以：
// 1. 旧键永不删。迁移成功只打标记，不碰 localStorage 的旧值。
// 2. schemaVersion 只写进 IndexedDB 的 meta。写 localStorage 会出现
//    「标记写成功、数据其实没写进去」的假成功。
// 3. 全程幂等。校验不过就整批回滚（按写入顺序逆序删），重跑无害。
// 4. 清洗逻辑**复用 store.js 的 sanitizeState**，不写第二套——两套清洗
//    一定会漂移，然后出现「迁移后能显示但一编辑就崩」这种最难查的问题。

import { LS, STORES, K, SCHEMA_VERSION } from './keys.js'
import { get, set, setMany, delMany, clear } from './idb.js'
import { sanitizeState, initialState } from '../store.js'

const TAB_ID = Math.random().toString(36).slice(2)
/** 迁移锁有效期。超过就认为是上次崩掉留下的陈旧锁。 */
const LOCK_TTL = 30_000
/** 旧数据备份上限。超过就不留 raw，只记体积，免得把 IDB 撑爆。 */
const BACKUP_LIMIT = 4 * 1024 * 1024
/** 助手对话截断：旧版会无限增长，是撑爆 localStorage 的主力。 */
const MAX_MESSAGES = 200
const MAX_MESSAGE_CHARS = 8000

/** FNV-1a，仅用于校验「写回的和读出来的是不是同一份」，不要求密码学强度。 */
function hash(value) {
  let h = 0x811c9dc5
  const text = JSON.stringify(value)
  for (let i = 0; i < text.length; i += 1) {
    h ^= text.charCodeAt(i)
    h = Math.imul(h, 0x01000193) >>> 0
  }
  return h.toString(16)
}

function safeReadLegacy() {
  try {
    const raw = localStorage.getItem(LS.legacyState)
    return raw && raw.length > 2 ? raw : null
  } catch {
    return null // localStorage 被禁用（Safari 隐私模式）
  }
}

function readJson(key, fallback = null) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : fallback
  } catch {
    return fallback
  }
}

/**
 * blob: / data: URL 都不能进持久化。
 * blob: 是进程内句柄，刷新即死；data: 会把几 MB base64 塞进 JSON。
 * 两者都清成空串，让上层按「没有图」处理，而不是渲染一个坏链。
 */
function stripVolatile(value, seen = new WeakSet()) {
  if (value === null || typeof value !== 'object') {
    if (typeof value === 'string' && (value.startsWith('blob:') || value.startsWith('data:'))) return ''
    return value
  }
  if (seen.has(value)) return value
  seen.add(value)
  if (Array.isArray(value)) return value.map((item) => stripVolatile(item, seen))
  const out = {}
  for (const [k, v] of Object.entries(value)) out[k] = stripVolatile(v, seen)
  return out
}

/** 是否需要迁移：三步都满足才迁。 */
export async function needsMigration() {
  const schema = await get(STORES.meta, K.schemaVersion).catch(() => undefined)
  const raw = safeReadLegacy()
  return (!schema || schema < SCHEMA_VERSION) && Boolean(raw)
}

/** 只读探测，不写任何东西。给 UI 决定要不要显示「正在迁移」。 */
export async function inspectLegacy() {
  const raw = safeReadLegacy()
  if (!raw) return { present: false, bytes: 0 }
  let parsed = null
  try { parsed = JSON.parse(raw) } catch { /* 坏 JSON，如实返回 */ }
  return {
    present: true,
    bytes: raw.length,
    valid: Boolean(parsed && typeof parsed === 'object'),
    canvases: Array.isArray(parsed?.canvases) ? parsed.canvases.length : 0,
    channels: Array.isArray(parsed?.channels) ? parsed.channels.length : 0,
  }
}

/**
 * 执行迁移。
 * @returns {{status:'done'|'skipped'|'locked', canvases?:number}}
 */
export async function migrate({ onProgress } = {}) {
  if (!(await needsMigration())) return { status: 'skipped' }

  // 迁移锁：避免两个标签页同时写
  const lock = await get(STORES.meta, K.migrationLock).catch(() => null)
  if (lock && Date.now() - lock.at < LOCK_TTL && lock.tabId !== TAB_ID) return { status: 'locked' }
  await set(STORES.meta, K.migrationLock, { at: Date.now(), tabId: TAB_ID }).catch(() => {})

  const written = []
  const track = async (store, key, value) => {
    await set(store, key, value)
    written.push([store, key])
  }

  try {
    onProgress?.('read')
    const raw = safeReadLegacy()
    const parsed = JSON.parse(raw) // 坏 JSON 直接抛，走 catch 回滚
    const state = sanitizeState(parsed) // 复用已有清洗，坏字段在这里回落成安全值

    onProgress?.('backup')
    await track(STORES.meta, K.rawBackup, raw.length <= BACKUP_LIMIT
      ? { at: Date.now(), bytes: raw.length, raw }
      : { at: Date.now(), bytes: raw.length, omitted: true })

    onProgress?.('transform')
    const defaults = initialState().defaults
    const clean = stripVolatile({
      ...state,
      openCanvasId: null, // 打开态无意义，且画布可能已删
      assistantMessages: (state.assistantMessages || [])
        .slice(-MAX_MESSAGES)
        .map((m) => ({ ...m, text: typeof m.text === 'string' ? m.text.slice(0, MAX_MESSAGE_CHARS) : '' })),
      // 旧数据的 hasKey 是假的：当时只存了末四位，从来没有明文密钥。
      // 所以旧渠道一律要求重填；但**已经带明文 apiKey 的新数据不能清**，
      // 否则每次启动都会把用户刚填的密钥抹掉。
      channels: (state.channels || []).map((c) => (
        c.apiKey
          ? c
          : { ...c, apiKey: '', keyHint: '', hasKey: false }
      )),
    })

    onProgress?.('write')
    // 画布层：zustand persist 的 { state, version } 形状
    await track(STORES.appState, K.canvasProjects, {
      state: { canvases: clean.canvases, openCanvasId: null, grid: clean.grid },
      version: SCHEMA_VERSION,
    })
    // 其余 JSON 数据
    await track(STORES.appState, K.prompts, clean.prompts)
    await track(STORES.appState, K.promptSources, clean.promptSources)
    await track(STORES.appState, K.assets, clean.assets)
    await track(STORES.appState, K.assistantMessages, clean.assistantMessages)
    // 生成记录：一条一条
    if (clean.records.length) {
      const now = Date.now()
      await setMany(STORES.logs, clean.records.map((r, i) => [
        K.logOne(r.id || `log_${now}_${i}`),
        { ...r, createdAt: r.createdAt || now },
      ]))
      written.push([STORES.logs, '*'])
    }
    // 配置层：小，留 localStorage
    try {
      localStorage.setItem(LS.config, JSON.stringify({
        channels: clean.channels,
        defaults: clean.defaults || defaults,
        assistantModel: clean.assistantModel,
      }))
      localStorage.setItem(LS.ui, JSON.stringify({
        view: clean.view,
        configTab: clean.configTab,
        grid: clean.grid,
      }))
    } catch (error) {
      throw new Error(`配置层写入失败（localStorage 可能已满）：${error.message}`)
    }

    onProgress?.('verify')
    // 校验：数量 + 每画布的节点集合哈希 + 配置条数
    const back = await get(STORES.appState, K.canvasProjects)
    const backCanvases = back?.state?.canvases
    const sameCount = Array.isArray(backCanvases) && backCanvases.length === clean.canvases.length
    const sameNodes = sameCount && clean.canvases.every((cv, i) => {
      const other = backCanvases[i]
      return other?.id === cv.id
        && Array.isArray(other.nodes) && other.nodes.length === cv.nodes.length
        && hash(other.nodes) === hash(cv.nodes)
    })
    const cfg = readJson(LS.config, {})
    const sameConfig = Array.isArray(cfg.channels) && cfg.channels.length === clean.channels.length
    if (!sameCount || !sameNodes || !sameConfig) {
      throw new Error('迁移校验未通过：写回内容与旧数据不一致')
    }

    onProgress?.('mark')
    // 原子提交点：数据都写好了，最后才落版本号
    await setMany(STORES.meta, [
      [K.schemaVersion, SCHEMA_VERSION],
      [K.migratedAt, { at: Date.now(), fromKey: LS.legacyState, fromBytes: raw.length, canvases: clean.canvases.length }],
    ])
    await delMany(STORES.meta, [K.migrationLock]).catch(() => {})
    return { status: 'done', canvases: clean.canvases.length }
  } catch (error) {
    // 回滚：按写入顺序逆序删掉本次新建的键；旧 localStorage 键一个都不动
    for (const [store, key] of written.reverse()) {
      if (key === '*') await clear(store).catch(() => {})
      else await delMany(store, [key]).catch(() => {})
    }
    await set(STORES.meta, K.migrationStatus, {
      status: 'failed',
      at: Date.now(),
      error: String(error?.message || error),
    }).catch(() => {})
    await delMany(STORES.meta, [K.migrationLock]).catch(() => {})
    throw error
  }
}
