// 最小 ZIP 打包：只用 stored（不压缩），自己算 CRC32。
//
// 为什么不用 JSZip：
// 零依赖是既定约束，而备份场景要的是「能拿出来、能解开」，
// 图片本身已经是 PNG/JPEG（压缩过的），再套一层 deflate 收益很小。
// stored 模式的缺点只是文件大，好处是**不用引库、不用 async 压缩、实现可审计**。
//
// 格式参考 PKZIP APPNOTE。这里只实现单层、无目录树、不支持 ZIP64：
// 超过 4GB 的备份不是这个场景。

const LOCAL_HEADER_SIG = 0x04034b50
const CENTRAL_HEADER_SIG = 0x02014b50
const END_SIG = 0x06054b50

/** CRC32 查表，模块加载时算一次。 */
const CRC_TABLE = (() => {
  const table = new Uint32Array(256)
  for (let i = 0; i < 256; i += 1) {
    let c = i
    for (let k = 0; k < 8; k += 1) {
      c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1
    }
    table[i] = c >>> 0
  }
  return table
})()

export function crc32(bytes) {
  let crc = 0xffffffff
  for (let i = 0; i < bytes.length; i += 1) {
    crc = CRC_TABLE[(crc ^ bytes[i]) & 0xff] ^ (crc >>> 8)
  }
  return (crc ^ 0xffffffff) >>> 0
}

/** UTF-8 文件名。中文名必须置 bit 11，否则解压出来是乱码。 */
const encoder = new TextEncoder()

function toBytes(input) {
  if (input instanceof Uint8Array) return input
  if (input instanceof ArrayBuffer) return new Uint8Array(input)
  if (input instanceof Blob) return input.arrayBuffer().then((b) => new Uint8Array(b))
  if (typeof input === 'string') return encoder.encode(input)
  return encoder.encode(String(input))
}

/** DOS 时间格式。ZIP 只有这个精度，秒只有 2 秒粒度。 */
function dosDateTime(date = new Date()) {
  const time = ((date.getHours() & 0x1f) << 11)
    | ((date.getMinutes() & 0x3f) << 5)
    | ((Math.floor(date.getSeconds() / 2)) & 0x1f)
  const day = (((date.getFullYear() - 1980) & 0x7f) << 9)
    | (((date.getMonth() + 1) & 0x0f) << 5)
    | (date.getDate() & 0x1f)
  return { time, day }
}

function writeU16(view, offset, value) {
  view.setUint16(offset, value, true)
}

function writeU32(view, offset, value) {
  view.setUint32(offset, value >>> 0, true)
}

/**
 * 打包。
 * @param entries Array<{ name: string, data: string|Uint8Array|ArrayBuffer|Blob }>
 * @returns Promise<Blob>
 */
export async function createZip(entries, { date = new Date() } = {}) {
  const files = []
  const { time, day } = dosDateTime(date)

  for (const entry of entries || []) {
    const name = String(entry?.name || '').replace(/^\/+/, '')
    if (!name) continue
    const raw = entry.data
    const data = raw instanceof Blob ? await toBytes(raw) : await toBytes(raw)
    const nameBytes = encoder.encode(name)
    const crc = crc32(data)
    files.push({ nameBytes, data, crc })
  }

  if (!files.length) throw new Error('没有可打包的内容')

  // 先算总大小，一次分配
  let localSize = 0
  for (const f of files) localSize += 30 + f.nameBytes.length + f.data.length
  let centralSize = 0
  for (const f of files) centralSize += 46 + f.nameBytes.length
  const total = localSize + centralSize + 22

  const out = new Uint8Array(total)
  const view = new DataView(out.buffer)
  let at = 0
  const offsets = []

  // 本地文件头 + 数据
  for (const f of files) {
    offsets.push(at)
    writeU32(view, at, LOCAL_HEADER_SIG)
    writeU16(view, at + 4, 20)        // version needed
    writeU16(view, at + 6, 0x0800)    // UTF-8 文件名
    writeU16(view, at + 8, 0)         // stored
    writeU16(view, at + 10, time)
    writeU16(view, at + 12, day)
    writeU32(view, at + 14, f.crc)
    writeU32(view, at + 18, f.data.length)  // compressed = uncompressed
    writeU32(view, at + 22, f.data.length)
    writeU16(view, at + 26, f.nameBytes.length)
    writeU16(view, at + 28, 0)        // extra
    at += 30
    out.set(f.nameBytes, at)
    at += f.nameBytes.length
    out.set(f.data, at)
    at += f.data.length
  }

  // 中央目录
  const centralStart = at
  files.forEach((f, i) => {
    writeU32(view, at, CENTRAL_HEADER_SIG)
    writeU16(view, at + 4, 20)        // version made by
    writeU16(view, at + 6, 20)        // version needed
    writeU16(view, at + 8, 0x0800)
    writeU16(view, at + 10, 0)
    writeU16(view, at + 12, time)
    writeU16(view, at + 14, day)
    writeU32(view, at + 16, f.crc)
    writeU32(view, at + 20, f.data.length)
    writeU32(view, at + 24, f.data.length)
    writeU16(view, at + 28, f.nameBytes.length)
    writeU16(view, at + 30, 0)
    writeU16(view, at + 32, 0)
    writeU16(view, at + 34, 0)
    writeU16(view, at + 36, 0)
    writeU32(view, at + 38, 0)
    writeU32(view, at + 42, offsets[i])
    at += 46
    out.set(f.nameBytes, at)
    at += f.nameBytes.length
  })

  // 目录结束记录
  writeU32(view, at, END_SIG)
  writeU16(view, at + 4, 0)
  writeU16(view, at + 6, 0)
  writeU16(view, at + 8, files.length)
  writeU16(view, at + 10, files.length)
  writeU32(view, at + 12, at - centralStart)
  writeU32(view, at + 16, centralStart)
  writeU16(view, at + 20, 0)

  return new Blob([out], { type: 'application/zip' })
}

/** 从文件名推 MIME，写进 manifest 用。 */
export function extOf(name) {
  const m = /\.([a-z0-9]+)$/i.exec(String(name || ''))
  return m ? m[1].toLowerCase() : ''
}

/**
 * 导出整份备份：画布数据 + 图片 + 清单。
 * 不打包 chatSessions —— 那是宿主的东西，不该跟着走。
 */
export async function buildBackup(state, { getBlob, date = new Date() } = {}) {
  const entries = []
  const manifest = {
    app: 'dsh-chunfeng-image',
    version: 1,
    exportedAt: new Date(date).toISOString(),
    canvases: (state?.canvases || []).map((c) => ({ id: c.id, name: c.name, nodes: c.nodes?.length || 0 })),
    assets: (state?.assets || []).length,
    prompts: (state?.prompts || []).length,
    files: [],
  }

  // 画布数据
  const canvasPayload = {
    canvases: state?.canvases || [],
    openCanvasId: state?.openCanvasId ?? null,
    grid: state?.grid || 'dots',
  }
  entries.push({ name: 'canvas.json', data: JSON.stringify(canvasPayload, null, 2) })

  // 配置（不含 apiKey —— 备份文件会外流，密钥不该跟着走）
  const safeChannels = (state?.channels || []).map((c) => {
    const { apiKey, ...rest } = c
    return { ...rest, apiKey: '', hasKey: Boolean(apiKey) }
  })
  entries.push({
    name: 'config.json',
    data: JSON.stringify({
      channels: safeChannels,
      defaults: state?.defaults || {},
      assistantModel: state?.assistantModel || '',
      promptSources: state?.promptSources || [],
    }, null, 2),
  })

  // 资产与提示词
  entries.push({ name: 'assets.json', data: JSON.stringify(state?.assets || [], null, 2) })
  entries.push({ name: 'prompts.json', data: JSON.stringify(state?.prompts || [], null, 2) })

  // 图片：按 storageKey 收集
  const keys = new Set()
  const walk = (v, depth = 0) => {
    if (!v || typeof v !== 'object' || depth > 6) return
    if (typeof v.storageKey === 'string' && v.storageKey) keys.add(v.storageKey)
    for (const item of Object.values(v)) {
      if (Array.isArray(item)) item.forEach((x) => walk(x, depth + 1))
      else walk(item, depth + 1)
    }
  }
  walk(state?.canvases)
  walk(state?.assets)

  let i = 0
  for (const key of keys) {
    const blob = await getBlob(key).catch(() => null)
    if (!blob?.size) continue
    i += 1
    const ext = (blob.type?.split('/')[1] || 'png').replace('jpeg', 'jpg')
    const name = `images/${String(i).padStart(4, '0')}.${ext}`
    entries.push({ name, data: blob })
    manifest.files.push({ storageKey: key, name, bytes: blob.size, type: blob.type })
  }

  // 清单放最后：它要知道上面打包了什么
  entries.push({ name: 'manifest.json', data: JSON.stringify(manifest, null, 2) })

  const blob = await createZip(entries, { date })
  return { blob, manifest, count: entries.length }
}
