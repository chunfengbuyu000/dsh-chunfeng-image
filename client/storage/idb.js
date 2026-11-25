// 手写 IndexedDB 封装。只依赖浏览器 API，不引 localforage。
//
// 三条纪律（每一条都对应一个真实踩过的坑）：
// 1. **事务成功才算成功**。os.put() 的 onsuccess 只代表请求排队成功，
//    QuotaExceededError 是在事务提交时 abort 的，只有 tx.oncomplete 才真写进去了。
// 2. **失败必须抛**，绝不静默吞。上层才能区分「配额满」和「其它错误」并提示用户。
// 3. **onblocked 必须 reject**。多标签页升版时如果不 reject，调用方会永远 hang。

import { DB_NAME, DB_VERSION, STORE_NAMES, ERROR_KIND } from './keys.js'

export class StorageError extends Error {
  constructor(message, { cause, kind = ERROR_KIND.ERROR, store = '' } = {}) {
    super(message)
    this.name = 'StorageError'
    this.kind = kind
    this.store = store
    if (cause) this.cause = cause
  }
}

/** 把任意 DOMException 归到可判定的类别。Safari 的配额错误叫 QUOTA_EXCEEDED_ERR（code 22 / 1014）。 */
export function classifyError(error) {
  if (!error) return ERROR_KIND.ERROR
  const name = error.name || ''
  if (name === 'QuotaExceededError' || name === 'NS_ERROR_DOM_QUOTA_REACHED' || error.code === 22 || error.code === 1014) return ERROR_KIND.QUOTA
  if (name === 'VersionError') return ERROR_KIND.VERSION
  if (name === 'InvalidStateError') return ERROR_KIND.CLOSED
  if (name === 'AbortError') return ERROR_KIND.ABORT
  if (name === 'SecurityError') return ERROR_KIND.UNAVAILABLE
  if (name === 'UnknownError') return ERROR_KIND.UNAVAILABLE
  return ERROR_KIND.ERROR
}

export function isQuotaError(error) {
  return error instanceof StorageError ? error.kind === ERROR_KIND.QUOTA : classifyError(error) === ERROR_KIND.QUOTA
}

function toStorageError(error, store, message) {
  if (error instanceof StorageError) return error
  const kind = classifyError(error)
  const suffix = kind === ERROR_KIND.QUOTA ? '（本地存储配额已满）' : ''
  return new StorageError(`${message}${suffix}`, { cause: error, kind, store })
}

// ---------- 连接：单例 + 升版让路 ----------

const conn = { db: null, opening: null }

export function openDb() {
  if (conn.db) return Promise.resolve(conn.db)
  if (conn.opening) return conn.opening

  conn.opening = new Promise((resolve, reject) => {
    if (typeof indexedDB === 'undefined' || indexedDB === null) {
      reject(new StorageError('IndexedDB 不可用（隐私模式或受限的 iframe 环境）', { kind: ERROR_KIND.UNAVAILABLE }))
      return
    }
    let request
    try {
      request = indexedDB.open(DB_NAME, DB_VERSION)
    } catch (error) {
      reject(toStorageError(error, DB_NAME, '打开数据库失败'))
      return
    }

    request.onupgradeneeded = () => {
      const db = request.result
      for (const name of STORE_NAMES) {
        if (!db.objectStoreNames.contains(name)) db.createObjectStore(name)
      }
    }

    // 别的标签页占着旧版本连接时必须让调用方知道，否则永远卡住
    request.onblocked = () => {
      reject(new StorageError('数据库升级被其它窗口占用，请关闭其它标签页后重试', { kind: ERROR_KIND.BLOCKED }))
    }

    request.onerror = () => reject(toStorageError(request.error, DB_NAME, '打开数据库失败'))

    request.onsuccess = () => {
      const db = request.result
      // 别处要升版时主动让路，否则对方卡在 blocked
      db.onversionchange = () => {
        try { db.close() } catch { /* 已关闭 */ }
        conn.db = null
        conn.opening = null
      }
      db.onclose = () => { conn.db = null; conn.opening = null }
      conn.db = db
      resolve(db)
    }
  }).catch((error) => {
    conn.opening = null
    throw error
  })

  return conn.opening
}

export function closeDb() {
  try { conn.db?.close() } catch { /* 已关闭 */ }
  conn.db = null
  conn.opening = null
}

// ---------- 事务 ----------

const ask = (request) => new Promise((resolve, reject) => {
  request.onsuccess = () => resolve(request.result)
  request.onerror = () => reject(request.error)
})

async function withStore(storeName, mode, body) {
  const db = await openDb()
  let tx
  try {
    tx = db.transaction(storeName, mode)
  } catch (error) {
    throw toStorageError(error, storeName, `开启事务失败：${storeName}`)
  }

  // 事务级的成功/失败。QuotaExceededError 只会从这里冒出来。
  const finished = new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve()
    tx.onabort = () => reject(toStorageError(tx.error || new Error('事务被中止'), storeName, '事务被中止'))
    tx.onerror = () => reject(toStorageError(tx.error || new Error('事务失败'), storeName, '事务失败'))
  })

  let result
  try {
    result = await body(tx.objectStore(storeName))
  } catch (error) {
    try { tx.abort() } catch { /* 已结束 */ }
    await finished.catch(() => {})
    throw toStorageError(error, storeName, `写入失败：${storeName}`)
  }
  await finished // 关键：等事务真正提交
  return result
}

// ---------- 泛型接口 ----------

export function get(store, key) {
  return withStore(store, 'readonly', (os) => ask(os.get(key)))
}

export function set(store, key, value) {
  return withStore(store, 'readwrite', (os) => ask(os.put(value, key)))
}

/** 一批写入同一事务：要么全成，要么全不成。 */
export function setMany(store, entries) {
  return withStore(store, 'readwrite', async (os) => {
    for (const [key, value] of entries) await ask(os.put(value, key))
    return entries.length
  })
}

export function del(store, key) {
  return withStore(store, 'readwrite', (os) => ask(os.delete(key)))
}

export function delMany(store, keys) {
  return withStore(store, 'readwrite', async (os) => {
    for (const key of keys) await ask(os.delete(key))
    return keys.length
  })
}

export function clear(store) {
  return withStore(store, 'readwrite', (os) => ask(os.clear()))
}

export function keys(store) {
  return withStore(store, 'readonly', (os) => ask(os.getAllKeys()))
}

export function values(store) {
  return withStore(store, 'readonly', (os) => ask(os.getAll()))
}

export function entries(store) {
  return withStore(store, 'readonly', async (os) => {
    const [ks, vs] = await Promise.all([ask(os.getAllKeys()), ask(os.getAll())])
    return ks.map((key, index) => [key, vs[index]])
  })
}

export function count(store) {
  return withStore(store, 'readonly', (os) => ask(os.count()))
}

/** 游标遍历单表：统计容量或清理孤儿时避免 getAll() 把所有 Blob 元对象一次拉进内存数组。 */
export function each(store, fn) {
  return withStore(store, 'readonly', (os) => new Promise((resolve, reject) => {
    const req = os.openCursor()
    req.onsuccess = () => {
      const cursor = req.result
      if (!cursor) { resolve(); return }
      fn(cursor.key, cursor.value)
      cursor.continue()
    }
    req.onerror = () => reject(req.error)
  }))
}

/** 清空本插件全部 store。注意：不要用 localStorage.clear()，那会连带清掉宿主的数据。 */
export async function clearAll() {
  await openDb()
  for (const name of STORE_NAMES) await clear(name)
}
