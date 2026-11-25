// ZIP 打包测试。格式细节最容易错，所以既对着已知值验 CRC32，
// 也把产出的字节解回来验结构（不依赖外部工具）。
import assert from 'node:assert/strict'
import { createZip, crc32, extOf } from '../client/storage/zip.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { failed += 1; console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}

const enc = new TextEncoder()

console.log('ZIP 打包')

await ok('CRC32 对照已知值：空串 = 0', async () => {
  assert.equal(crc32(new Uint8Array()), 0)
})

await ok('CRC32 对照已知值："a" = 0xE8B7BE43', async () => {
  assert.equal(crc32(enc.encode('a')), 0xe8b7be43)
})

await ok('CRC32 对照已知值："123456789" = 0xCBF43926', async () => {
  assert.equal(crc32(enc.encode('123456789')), 0xcbf43926)
})

await ok('CRC32 对照已知值："The quick brown fox jumps over the lazy dog"', async () => {
  assert.equal(crc32(enc.encode('The quick brown fox jumps over the lazy dog')), 0x414fa339)
})

/** 解析产出的 ZIP 字节，验证结构。 */
function parseZip(bytes) {
  const view = new DataView(bytes.buffer, bytes.byteOffset, bytes.byteLength)
  const files = []
  let at = 0
  // 读本地头
  while (at + 4 <= bytes.length && view.getUint32(at, true) === 0x04034b50) {
    const flags = view.getUint16(at + 6, true)
    const method = view.getUint16(at + 8, true)
    const crc = view.getUint32(at + 14, true)
    const compSize = view.getUint32(at + 18, true)
    const size = view.getUint32(at + 22, true)
    const nameLen = view.getUint16(at + 26, true)
    const extraLen = view.getUint16(at + 28, true)
    const nameBytes = bytes.slice(at + 30, at + 30 + nameLen)
    const name = new TextDecoder().decode(nameBytes)
    const dataStart = at + 30 + nameLen + extraLen
    const data = bytes.slice(dataStart, dataStart + compSize)
    files.push({ name, flags, method, crc, compSize, size, data })
    at = dataStart + compSize
  }
  // 找中央目录结束记录
  const end = bytes.length - 22
  const endSig = view.getUint32(end, true)
  const total = view.getUint16(end + 10, true)
  const centralSize = view.getUint32(end + 12, true)
  const centralOffset = view.getUint32(end + 16, true)
  // 中央目录条数
  let centralCount = 0
  let c = centralOffset
  while (c + 4 <= end && view.getUint32(c, true) === 0x02014b50) {
    const nameLen = view.getUint16(c + 28, true)
    const extraLen = view.getUint16(c + 30, true)
    const commentLen = view.getUint16(c + 32, true)
    centralCount += 1
    c += 46 + nameLen + extraLen + commentLen
  }
  return { files, endSig, total, centralSize, centralOffset, centralCount }
}

await ok('打包后能以 ZIP 签名开头（PK\\x03\\x04）', async () => {
  const zip = await createZip([{ name: 'a.txt', data: 'hello' }])
  const bytes = new Uint8Array(await zip.arrayBuffer())
  assert.equal(bytes[0], 0x50)
  assert.equal(bytes[1], 0x4b)
  assert.equal(bytes[2], 0x03)
  assert.equal(bytes[3], 0x04)
})

await ok('本地头、中央目录、结束记录三处签名都正确', async () => {
  const zip = await createZip([{ name: 'a.txt', data: 'x' }, { name: 'b.txt', data: 'y' }])
  const parsed = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(parsed.endSig, 0x06054b50, '结束记录签名不对')
  assert.equal(parsed.total, 2, `结束记录里的条数应 2，实际 ${parsed.total}`)
  assert.equal(parsed.centralCount, 2, `中央目录实际条数应 2，实际 ${parsed.centralCount}`)
})

await ok('stored 模式：压缩后大小 = 原始大小，方法字段 = 0', async () => {
  const payload = '这是一段会被原样存下的文本'
  const zip = await createZip([{ name: 'a.txt', data: payload }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  const f = files[0]
  assert.equal(f.method, 0, `方法应 0(stored)，实际 ${f.method}`)
  assert.equal(f.compSize, f.size, 'stored 模式下压缩大小应等于原始大小')
  assert.equal(new TextDecoder().decode(f.data), payload, '内容应原样')
})

await ok('每个文件头里的 CRC 与内容匹配', async () => {
  const payload = 'CRC 要能被独立验证'
  const zip = await createZip([{ name: 'c.txt', data: payload }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(files[0].crc, crc32(enc.encode(payload)), 'CRC 与独立计算不一致')
})

await ok('UTF-8 文件名置了 bit 11（通用标志位）', async () => {
  const zip = await createZip([{ name: '中文名.json', data: '{}' }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(files[0].flags & 0x0800, 0x0800, '未置 UTF-8 标志，解压会乱码')
  assert.equal(files[0].name, '中文名.json', `名字没正确写入：${files[0].name}`)
})

await ok('多文件时中央目录偏移指向正确位置', async () => {
  const zip = await createZip([
    { name: 'a.json', data: 'a' },
    { name: 'b.json', data: 'b' },
    { name: 'c.json', data: 'c' },
  ])
  const bytes = new Uint8Array(await zip.arrayBuffer())
  const parsed = parseZip(bytes)
  assert.equal(parsed.centralCount, 3)
  // 中央目录起点必须是 PK\x01\x02
  assert.equal(bytes[parsed.centralOffset], 0x50)
  assert.equal(bytes[parsed.centralOffset + 1], 0x4b)
  assert.equal(bytes[parsed.centralOffset + 2], 0x01)
  assert.equal(bytes[parsed.centralOffset + 3], 0x02)
})

await ok('Blob 输入能正常打包', async () => {
  const blob = new Blob(['blob 内容'], { type: 'text/plain' })
  const zip = await createZip([{ name: 'b.txt', data: blob }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(new TextDecoder().decode(files[0].data), 'blob 内容')
})

await ok('Uint8Array 二进制能原样保留', async () => {
  const bin = new Uint8Array([0, 1, 2, 255, 254, 128])
  const zip = await createZip([{ name: 'x.bin', data: bin }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.deepEqual([...files[0].data], [...bin], '二进制内容被改动了')
})

await ok('空条目列表抛错而不是产出坏包', async () => {
  await assert.rejects(() => createZip([]), /没有可打包/)
})

await ok('没有名字的条目被跳过', async () => {
  const zip = await createZip([{ name: '', data: 'x' }, { name: 'ok.txt', data: 'y' }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(files.length, 1)
  assert.equal(files[0].name, 'ok.txt')
})

await ok('开头斜杠被去掉（避免绝对路径）', async () => {
  const zip = await createZip([{ name: '/abs/path.txt', data: 'x' }])
  const { files } = parseZip(new Uint8Array(await zip.arrayBuffer()))
  assert.equal(files[0].name, 'abs/path.txt', `不该保留开头斜杠：${files[0].name}`)
})

await ok('extOf 正确取扩展名', async () => {
  assert.equal(extOf('a.PNG'), 'png')
  assert.equal(extOf('dir/b.jpeg'), 'jpeg')
  assert.equal(extOf('noext'), '')
})

// ---------- buildBackup：备份内容策略 ----------
import { buildBackup } from '../client/storage/zip.js'

await ok('备份里不含明文 API Key（会外流的文件不能带密钥）', async () => {
  const state = {
    canvases: [],
    channels: [{ id: 'c1', name: '某渠道', apiKey: 'sk-secret-123', baseUrl: 'https://x' }],
  }
  const { blob } = await buildBackup(state, { getBlob: async () => null })
  const bytes = new Uint8Array(await blob.arrayBuffer())
  const text = new TextDecoder('utf-8', { fatal: false }).decode(bytes)
  assert.ok(!text.includes('sk-secret-123'), '明文 Key 出现在备份里')
  // 但「有没有配 Key」这个信息要保留
  const parsed = parseZip(bytes)
  const cfg = parsed.files.find((f) => f.name === 'config.json')
  const json = JSON.parse(new TextDecoder().decode(cfg.data))
  assert.equal(json.channels[0].apiKey, '', 'apiKey 应被清空')
  assert.equal(json.channels[0].hasKey, true, 'hasKey 应保留，用于提示用户重填')
})

await ok('备份包含 canvas/config/assets/prompts/manifest 五份元数据', async () => {
  const state = { canvases: [{ id: 'cv1', name: '画布一', nodes: [] }], assets: [], prompts: [] }
  const { blob } = await buildBackup(state, { getBlob: async () => null })
  const { files } = parseZip(new Uint8Array(await blob.arrayBuffer()))
  const names = files.map((f) => f.name)
  for (const want of ['canvas.json', 'config.json', 'assets.json', 'prompts.json', 'manifest.json']) {
    assert.ok(names.includes(want), `缺 ${want}，实际 ${names.join(',')}`)
  }
})

await ok('manifest 记录画布摘要与图片映射', async () => {
  const state = {
    canvases: [{ id: 'cv1', name: '测试画布', nodes: [{ id: 'n1' }, { id: 'n2' }] }],
    assets: [], prompts: [],
  }
  const fakeBlob = new Blob([new Uint8Array([1, 2, 3, 4])], { type: 'image/png' })
  const { manifest } = await buildBackup(state, { getBlob: async () => fakeBlob })
  assert.equal(manifest.version, 1)
  assert.equal(manifest.canvases[0].name, '测试画布')
  assert.equal(manifest.canvases[0].nodes, 2)
  assert.ok(manifest.files.length >= 0)
})

await ok('备份不带 chatSessions（宿主的东西不该跟着走）', async () => {
  const state = { canvases: [], chatSessions: [{ id: 's1', messages: ['不该出现'] }] }
  const { blob } = await buildBackup(state, { getBlob: async () => null })
  const text = new TextDecoder().decode(new Uint8Array(await blob.arrayBuffer()))
  assert.ok(!text.includes('不该出现'), 'chatSessions 混进备份了')
})

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
