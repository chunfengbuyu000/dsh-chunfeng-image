// 容量统计与清理。不做成一整页，只给偏好设置底部一行用。
//
// 存在的理由很具体：原来 shell.jsx 是 `catch { /* 存不下就算了 */ }`，
// 写失败静默吞掉，用户以为存上了其实丢了。接上真实图片后，
// 一张 2MB 原图几十张就够顶到 IndexedDB 配额。

import { STORES, STORE_NAMES } from './keys.js'
import { openDb, each, delMany } from './idb.js'

/** 估算单条记录占多少字节。媒体包裹对象优先取 bytes / blob.size，JSON 回退估算长度。 */
function bytesOf(value) {
  if (!value) return 0
  if (typeof value.bytes === 'number' && Number.isFinite(value.bytes)) return value.bytes
  if (value instanceof Blob) return value.size
  if (value.blob instanceof Blob) return value.blob.size
  if (value instanceof ArrayBuffer) return value.byteLength
  if (ArrayBuffer.isView(value)) return value.byteLength
  try { return new TextEncoder().encode(JSON.stringify(value)).byteLength } catch { return 0 }
}

const LABELS = {
  [STORES.appState]: '画布数据',
  [STORES.imageFiles]: '图片原图',
  [STORES.imagePreviews]: '预览缩略图',
  [STORES.mediaFiles]: '视频音频',
  [STORES.logs]: '生成记录',
  [STORES.meta]: '元信息',
}

export const formatBytes = (n) => {
  if (!n) return '0 B'
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
  if (n < 1024 ** 3) return `${(n / 1024 / 1024).toFixed(1)} MB`
  return `${(n / 1024 ** 3).toFixed(2)} GB`
}

/**
 * 统计各 store 的占用。
 * 自算为主：navigator.storage.estimate() 只给整个 origin 的总量，不拆分到 store，
 * 而且 Safari 隐私模式下会返回 0 或直接抛。所以两者都给，标注来源。
 */
export async function measure() {
  const out = { stores: [], total: 0, usage: null, quota: null, unavailable: false }
  try {
    await openDb()
  } catch (error) {
    return { ...out, unavailable: true, reason: error?.message || '存储不可用' }
  }

  for (const name of STORE_NAMES) {
    let records = 0
    let bytes = 0
    await each(name, (_k, v) => { records += 1; bytes += bytesOf(v) }).catch(() => {})
    out.stores.push({ name, label: LABELS[name] || name, records, bytes })
    out.total += bytes
  }
  out.stores.sort((a, b) => b.bytes - a.bytes)

  try {
    if (navigator.storage?.estimate) {
      const est = await navigator.storage.estimate()
      if (Number.isFinite(est?.usage) && est.usage > 0) {
        out.usage = est.usage
        out.quota = est.quota ?? null
      }
    }
  } catch { /* 隐私模式可能直接抛，忽略 */ }

  if (out.usage === null) out.usage = out.total
  return out
}

/** 收集仍在使用的 storageKey（节点、资产、记录里的都算）。 */
export function collectUsedKeys(state) {
  const used = new Set()
  const walk = (value, depth = 0) => {
    if (!value || typeof value !== 'object' || depth > 8) return
    if (typeof value.storageKey === 'string' && value.storageKey) used.add(value.storageKey)
    for (const item of Object.values(value)) {
      if (Array.isArray(item)) item.forEach((x) => walk(x, depth + 1))
      else walk(item, depth + 1)
    }
  }
  walk(state)
  return used
}

/**
 * 找孤儿 Blob：没有任何引用、且超过保留期。
 * 保留期很重要 —— 刚生成但还没挂到节点上的图，立刻删会误伤。
 */
export async function findOrphans(state, { keepMs = 7 * 24 * 3600_000, now = Date.now() } = {}) {
  const used = collectUsedKeys(state)
  const orphans = []
  let bytes = 0
  for (const [store, label] of [[STORES.imageFiles, '图片'], [STORES.imagePreviews, '预览'], [STORES.mediaFiles, '媒体']]) {
    await each(store, (key, value) => {
      if (used.has(key)) return
      const at = value?.at || 0
      if (at && now - at < keepMs) return
      const size = bytesOf(value)
      orphans.push({ store, label, key, bytes: size })
      bytes += size
    }).catch(() => {})
  }
  return { orphans, bytes }
}

/** 删除孤儿。dryRun 只报不删。 */
export async function purgeOrphans(state, { dryRun = true, ...options } = {}) {
  const found = await findOrphans(state, options)
  if (dryRun) return { ...found, deleted: 0 }
  const byStore = new Map()
  for (const item of found.orphans) {
    if (!byStore.has(item.store)) byStore.set(item.store, [])
    byStore.get(item.store).push(item.key)
  }
  let deleted = 0
  for (const [store, keys] of byStore) deleted += await delMany(store, keys)
  return { ...found, deleted }
}
