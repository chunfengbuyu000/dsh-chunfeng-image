// zustand persist 的 IndexedDB 适配。

// Host 半片的路由前缀（与 client/api.js 保持同一个值）
const HOST_BASE = 'dsh-chunfeng-image/'
//
// 三件事，每件都对应一个会造成真实数据损失的场景：
// 1. **hydrated 闸门**：异步 hydrate 完成前拒绝写盘。否则首帧的空 state 会把
//    磁盘上已有的几十个画布覆盖掉。这是本文件存在的首要理由。
// 2. **400ms 防抖**：拖节点时每帧都会触发 setItem，不防抖等于每帧序列化一次全量画布。
// 3. **引用相等短路**：只比引用不比内容。视口/选中态变了不该触发整个画布写盘。

import { STORES, K, LS } from './keys.js'
import { get, set, del, setMany, delMany, values, isQuotaError } from './idb.js'

/** 读 localStorage 里的 JSON，坏值返回 null（不抛）。 */
function readLocalJson(key) {
  try {
    const raw = localStorage.getItem(key)
    return raw ? JSON.parse(raw) : null
  } catch {
    return null
  }
}

function shallowSame(a, b) {
  if (a === b) return true
  if (!a || !b) return false
  const ka = Object.keys(a)
  if (ka.length !== Object.keys(b).length) return false
  return ka.every((k) => a[k] === b[k])
}

/**
 * @param store       目标 object store
 * @param pick        从 StorageValue.state 里挑出「重字段」，用于引用短路
 * @param debounceMs  写盘防抖
 * @param onError     写失败回调（配额满时上层要能提示用户，不能静默）
 */
export function createIdbStateStorage({ store = STORES.appState, pick, debounceMs = 400, onError } = {}) {
  let hydrated = false
  let lastSlices = null
  let timer = 0
  let pending = null
  let tail = Promise.resolve()

  const write = () => {
    if (!pending) return tail
    const [key, value] = pending
    pending = null
    if (timer) { clearTimeout(timer); timer = 0 }
    tail = tail
      .then(() => set(store, key, value))
      .catch((error) => { onError?.(error) })
    return tail
  }

  return {
    /** 返回 { state, version } */
    async getItem(key) {
      try {
        const raw = await get(store, key)
        if (!raw) return null
        return typeof raw === 'string' ? JSON.parse(raw) : raw
      } catch (error) {
        onError?.(error)
        return null
      } finally {
        hydrated = true
        // hydrate 期间可能被拦下一次写盘，这里补上
        if (pending) void write()
      }
    },

    setItem(key, value) {
      // 闸门：hydrate 没完成就只记最后一次，绝不写盘
      if (!hydrated) { pending = [key, value]; return }
      const slices = pick ? pick(value.state) : value.state
      if (lastSlices && shallowSame(lastSlices, slices)) return
      lastSlices = slices
      pending = [key, value]
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => { void write() }, debounceMs)
    },

    removeItem(key) {
      pending = null
      if (timer) { clearTimeout(timer); timer = 0 }
      return del(store, key)
    },

    /** 页面要走了必须把待写刷掉（pagehide / visibilitychange）。 */
    flush: write,

    /** 只给测试和迁移用：重置内部闸门。 */
    _reset() {
      hydrated = false
      lastSlices = null
      pending = null
      if (timer) { clearTimeout(timer); timer = 0 }
    },
  }
}

/**
 * 画布层专用实例。短路只比 canvases —— 视口、选中态、当前打开的画布变了
 * 都不该触发一次可能几 MB 的全量写盘。
 */
export function createCanvasStorage(options = {}) {
  return createIdbStateStorage({
    store: STORES.appState,
    debounceMs: 400,
    pick: (state) => ({ canvases: state.canvases }),
    ...options,
  })
}

/** 画布层在 zustand persist 里用的键。 */
export const CANVAS_STORAGE_KEY = K.canvasProjects

// ---------- shell.jsx 用的轻量门面 ----------
// shell 目前把整份 state 放在 useState 里，不是 zustand store。
// 为了「只换落盘这一环、不动状态架构」，这里提供一对直白的读写函数：
//   loadState()  → 先看迁移后的三层，再回退到旧键
//   saveState()  → 400ms 防抖 + 引用短路，失败必回调（eq:'QuotaExceeded' 要能提示用户）
// 等画布层迁到 zustand 时，再换成上面的 createCanvasStorage。

/**
 * 把配置镜像到本机文件（Host 侧 <home>/.dsh/dsh-chunfeng-image/config.json）。
 *
 * 只做「有则写」：空渠道不写，避免一次读失败把磁盘上的好配置抹掉。
 * 失败完全不阻断 —— 这只是兜底，浏览器那边才是主路径。
 */
let mirrorTimer = 0
let mirrorPending = null
function mirrorConfig(config) {
  mirrorPending = config
  clearTimeout(mirrorTimer)
  mirrorTimer = setTimeout(() => {
    const body = mirrorPending
    if (!body) return
    if (!Array.isArray(body.channels) || body.channels.length === 0) return
    fetch(`${HOST_BASE}config`, {
      method: 'PUT',
      headers: { 'content-type': 'application/json', 'sec-fetch-site': 'same-origin' },
      body: JSON.stringify(body),
    }).catch(() => { /* 兜底路径，失败静默 */ })
  }, 600)
}

/** 从本机文件取配置（用于「恢复」按钮和读空时的自愈）。 */
export async function loadConfigMirror() {
  try {
    const res = await fetch(`${HOST_BASE}config`, { headers: { 'sec-fetch-site': 'same-origin' }, cache: 'no-store' })
    if (!res.ok) return null
    const data = await res.json()
    return data?.config || null
  } catch {
    return null
  }
}

let shellTimer = 0
let shellPending = null
let shellLast = null
let shellTail = Promise.resolve()

/**
 * 读：优先读 IndexedDB（迁移后的正式位置），没有再读旧 localStorage 键。
 * 返回值统一是「裸 state」，不是 zustand 的 { state, version } 包装。
 */
export async function loadState() {
  // 配置层（渠道 / 默认参数 / 助手模型）在 localStorage，**必须无条件读**。
  // 之前这段写在 if (packed) 里面，一旦 IDB 里没有 canvas:projects，
  // 渠道就读不回来，接着被首屏的空 channels 覆盖写死。
  const cfg = readLocalJson(LS.config) || {}
  const backupCfg = readLocalJson(LS.configBackup) || {}
  const ui = readLocalJson(LS.ui) || {}
  // 主键为空但备份有渠道时用备份（自愈）
  const cfgChannels = Array.isArray(cfg.channels) && cfg.channels.length
    ? cfg.channels
    : (Array.isArray(backupCfg.channels) && backupCfg.channels.length ? backupCfg.channels : cfg.channels)

  try {
    const packed = await get(STORES.appState, K.canvasProjects)
    if (packed) {
      shellLast = packed.state?.canvases ?? null
      // 画布层只存了画布相关字段，其余 JSON 数据分散在别的键里
      const [prompts, promptSources, assets, assistantMessages, rawLogs] = await Promise.all([
        get(STORES.appState, K.prompts).catch(() => undefined),
        get(STORES.appState, K.promptSources).catch(() => undefined),
        get(STORES.appState, K.assets).catch(() => undefined),
        get(STORES.appState, K.assistantMessages).catch(() => undefined),
        values(STORES.logs).catch(() => []),
      ])
      const records = Array.isArray(rawLogs)
        ? rawLogs
            .filter((r) => r && typeof r === 'object' && typeof r.id === 'string')
            .sort((a, b) => (b.at || 0) - (a.at || 0))
            .slice(0, 80)
        : []
      const cfgPromptSources = Array.isArray(cfg.promptSources)
        ? cfg.promptSources
        : (Array.isArray(backupCfg.promptSources) ? backupCfg.promptSources : null)
      const resolvedPromptSources = Array.isArray(promptSources) && promptSources.length
        ? promptSources
        : (cfgPromptSources || promptSources)
      // 配置层在 localStorage（渠道含明文 Key、默认参数、助手模型）。
      // 漏读这三个字段会让上层用种子里的空 channels 覆盖掉真实配置，
      // 表现是「渠道全没了」——所以必须一起回填。
      return {
        from: 'idb',
        state: {
          ...(packed.state || {}),
          prompts,
          promptSources: resolvedPromptSources,
          assets,
          assistantMessages,
          records,
          channels: cfgChannels,
          defaults: cfg.defaults,
          assistantModel: cfg.assistantModel,
          view: ui.view,
          configTab: ui.configTab,
          showToolbarLabels: Boolean(ui.showToolbarLabels),
          theme: ui.theme || 'system',
        },
      }
    }
  } catch {
    // IDB 不可用（隐私模式 / 受限 iframe）：下面回退旧键，不在这里报错
  }

  // 回退：旧 localStorage 整包
  try {
    const raw = localStorage.getItem(LS.legacyState)
    if (!raw) {
      // 连旧整包也没有：至少把配置层交回去，别让空种子把渠道盖掉
      if (Array.isArray(cfgChannels) && cfgChannels.length) {
        return {
          from: 'config',
          state: {
            channels: cfgChannels,
            defaults: cfg.defaults,
            assistantModel: cfg.assistantModel,
            promptSources: Array.isArray(cfg.promptSources) ? cfg.promptSources : undefined,
          },
        }
      }
      return { from: 'none', state: null }
    }
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object'
      ? { from: 'legacy', state: parsed }
      : { from: 'none', state: null }
  } catch {
    return { from: 'none', state: null }
  }
}

/**
 * 写：防抖 + 短路。
 * @param state  整份 state
 * @param opts.pick       参与短路的字段（默认 canvases）
 * @param opts.debounceMs 默认 400
 * @param opts.onError    (error, { quota:boolean }) => void
 */
let flushedSlices = null

export function saveState(state, { pick, debounceMs = 400, onError } = {}) {
  // 去重键必须覆盖**所有**会写盘的字段。
  const picked = pick ? pick(state) : {}
  const slices = {
    canvases: state?.canvases,
    openCanvasId: state?.openCanvasId,
    channels: state?.channels,
    defaults: state?.defaults,
    assistantModel: state?.assistantModel,
    prompts: state?.prompts,
    promptSources: state?.promptSources,
    assets: state?.assets,
    assistantMessages: state?.assistantMessages,
    records: state?.records,
    view: state?.view,
    configTab: state?.configTab,
    grid: state?.grid,
    showToolbarLabels: state?.showToolbarLabels,
    theme: state?.theme,
    ...picked,
  }
  if (shellLast && shallowSame(shellLast, slices)) return
  shellLast = slices
  shellPending = state
  if (shellTimer) clearTimeout(shellTimer)
  shellTimer = setTimeout(() => { void flushState({ onError }) }, debounceMs)
}

/** 立刻写（pagehide / visibilitychange 时必须调，否则防抖窗口内的最后一笔会丢）。 */
export function flushState({ onError } = {}) {
  if (!shellPending) return shellTail
  const state = shellPending
  shellPending = null
  if (shellTimer) { clearTimeout(shellTimer); shellTimer = 0 }

  shellTail = shellTail.then(async () => {
    const prev = flushedSlices
    try {
      const writes = []
      if (!prev || prev.canvases !== state.canvases || prev.openCanvasId !== state.openCanvasId || prev.grid !== state.grid) {
        writes.push([K.canvasProjects, {
          state: {
            canvases: state.canvases,
            openCanvasId: state.openCanvasId,
            grid: state.grid,
          },
          version: 1,
        }])
      }
      if (!prev || prev.prompts !== state.prompts) writes.push([K.prompts, state.prompts])
      if (!prev || prev.promptSources !== state.promptSources) writes.push([K.promptSources, state.promptSources])
      if (!prev || prev.assets !== state.assets) writes.push([K.assets, state.assets])
      if (!prev || prev.assistantMessages !== state.assistantMessages) writes.push([K.assistantMessages, state.assistantMessages])

      if (writes.length) {
        await setMany(STORES.appState, writes)
      }

      if (!prev || prev.records !== state.records) {
        const nextRecords = Array.isArray(state.records) ? state.records.slice(0, 80) : []
        const prevRecords = Array.isArray(prev?.records) ? prev.records : []
        const nextIds = new Set(nextRecords.map((r) => r.id))
        const removedKeys = prevRecords.filter((r) => r?.id && !nextIds.has(r.id)).map((r) => K.logOne(r.id))
        if (removedKeys.length) await delMany(STORES.logs, removedKeys)
        if (nextRecords.length) {
          await setMany(STORES.logs, nextRecords.map((r) => [K.logOne(r.id), r]))
        }
      }

      const configDirty = !prev
        || prev.channels !== state.channels
        || prev.defaults !== state.defaults
        || prev.assistantModel !== state.assistantModel
        || prev.promptSources !== state.promptSources
      const uiDirty = !prev
        || prev.view !== state.view
        || prev.configTab !== state.configTab
        || prev.grid !== state.grid
        || prev.showToolbarLabels !== state.showToolbarLabels
        || prev.theme !== state.theme

      try {
        if (configDirty) {
          const payload = JSON.stringify({
            channels: state.channels,
            defaults: state.defaults,
            assistantModel: state.assistantModel,
            promptSources: state.promptSources,
          })
          // 覆盖前先留一份上一版：万一这次写的是空渠道（读失败导致），
          // 下次还能从备份自愈，不至于让用户重配一遍 Key。
          const oldCfg = localStorage.getItem(LS.config)
          if (oldCfg && oldCfg !== payload) {
            try { localStorage.setItem(LS.configBackup, oldCfg) } catch { /* 备份失败不影响主流程 */ }
          }
          localStorage.setItem(LS.config, payload)
          // 仅配置层变化时写本机文件，避免拖动画布节点时频繁发 PUT /config
          mirrorConfig({
            channels: state.channels,
            defaults: state.defaults,
            assistantModel: state.assistantModel,
            promptSources: state.promptSources,
          })
        }
        if (uiDirty) {
          localStorage.setItem(LS.ui, JSON.stringify({
            view: state.view,
            configTab: state.configTab,
            grid: state.grid,
            showToolbarLabels: Boolean(state.showToolbarLabels),
            theme: state.theme || 'system',
          }))
        }
      } catch (error) {
        onError?.(error, { quota: true })
      }

      flushedSlices = {
        canvases: state.canvases,
        openCanvasId: state.openCanvasId,
        channels: state.channels,
        defaults: state.defaults,
        assistantModel: state.assistantModel,
        prompts: state.prompts,
        promptSources: state.promptSources,
        assets: state.assets,
        assistantMessages: state.assistantMessages,
        records: state.records,
        view: state.view,
        configTab: state.configTab,
        grid: state.grid,
        showToolbarLabels: state.showToolbarLabels,
        theme: state.theme,
      }
    } catch (error) {
      onError?.(error, { quota: isQuotaError(error) })
    }
  })
  return shellTail
}

/** 供测试用：清掉防抖状态。 */
export function _resetSaveState() {
  shellPending = null
  shellLast = null
  flushedSlices = null
  if (shellTimer) { clearTimeout(shellTimer); shellTimer = 0 }
}

// ---------- 测试钩子 ----------
// e2e 需要读「当前真实持久化的画布」。数据根从 localStorage 挪到 IDB 之后，
// 测试不能再直接 parse localStorage，否则读到的是旧键（已被清掉）或 null。
// 这里暴露一个只读入口，走的是和生产完全相同的读取路径。
if (typeof window !== 'undefined') {
  window.__CF_STORAGE__ = {
    /** 强制冲刷待写（等价于 pagehide 时的那次 flush） */
    flush: () => flushState(),
    /** 读画布层（{ canvases, openCanvasId, grid } 或 null） */
    async readCanvasState() {
      try {
        const packed = await get(STORES.appState, K.canvasProjects)
        return packed?.state ?? null
      } catch {
        return null
      }
    },
    /** 读配置层（channels / defaults / assistantModel） */
    readConfig() {
      try {
        return JSON.parse(localStorage.getItem(LS.config) || 'null')
      } catch {
        return null
      }
    },
    /** 读迁移标记，测试用来断言「只迁一次」 */
    async readMeta() {
      const [schemaVersion, migratedAt, status] = await Promise.all([
        get(STORES.meta, K.schemaVersion).catch(() => undefined),
        get(STORES.meta, K.migratedAt).catch(() => undefined),
        get(STORES.meta, K.migrationStatus).catch(() => undefined),
      ])
      return { schemaVersion, migratedAt, status }
    },
  }
}
