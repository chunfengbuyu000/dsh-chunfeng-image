// 图片工具与批量图组的纯逻辑测试。
// 像素处理（canvas）需要浏览器，这里只测可纯算的部分：
// 尺寸换算、切割线、批量图组的四条不变式。
import assert from 'node:assert/strict'
import { resolveUpscaleSize, MAX_UPSCALE_LONG_EDGE } from '../client/canvas/image-ops.js'
import {
  makeImageEntry, primaryImage, isBatch, secondaryImages,
  addImages, setPrimary, removeImage, explodeBatch, mergeIntoBatch,
} from '../client/canvas/batch.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { failed += 1; console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}

console.log('图片工具')

await ok('放大尺寸：长边对齐目标，短边等比', async () => {
  const r = resolveUpscaleSize(800, 600, 1600)
  assert.equal(r.width, 1600, `长边应 1600，实际 ${r.width}`)
  assert.equal(r.height, 1200, `短边应 1200，实际 ${r.height}`)
})

await ok('放大尺寸：竖图以高为长边', async () => {
  const r = resolveUpscaleSize(600, 800, 1600)
  assert.equal(r.height, 1600, `高应 1600，实际 ${r.height}`)
  assert.equal(r.width, 1200)
})

await ok('放大尺寸：不超过 4096 上限', async () => {
  const r = resolveUpscaleSize(1000, 1000, 99999)
  assert.equal(r.width, MAX_UPSCALE_LONG_EDGE, `应封顶 ${MAX_UPSCALE_LONG_EDGE}，实际 ${r.width}`)
})

await ok('放大尺寸：极端宽幅不出零或负', async () => {
  const r = resolveUpscaleSize(4000, 10, 4096)
  assert.ok(r.width >= 1 && r.height >= 1, `不该出现 0：${JSON.stringify(r)}`)
})

await ok('放大尺寸：目标小于原图时不报错（等于缩小）', async () => {
  const r = resolveUpscaleSize(2000, 1000, 500)
  assert.equal(r.width, 500)
  assert.equal(r.height, 250)
})

console.log('\n批量图组')

const mk = (id, key = `k_${id}`) => makeImageEntry({ id, storageKey: key, width: 1024, height: 1024, bytes: 100 })

await ok('主图：primaryImageId 无效时回落第一张', async () => {
  const node = { images: [mk('a'), mk('b')], primaryImageId: 'nope' }
  assert.equal(primaryImage(node).id, 'a', '应回落到第一张')
})

await ok('主图：primaryImageId 为空也回落第一张', async () => {
  const node = { images: [mk('a'), mk('b')], primaryImageId: '' }
  assert.equal(primaryImage(node).id, 'a')
})

await ok('空图组返回 null，不炸', async () => {
  assert.equal(primaryImage({ images: [] }), null)
  assert.equal(primaryImage({}), null)
  assert.equal(primaryImage(null), null)
})

await ok('isBatch：一张不算批量，两张才算', async () => {
  assert.equal(isBatch({ images: [mk('a')] }), false)
  assert.equal(isBatch({ images: [mk('a'), mk('b')] }), true)
  assert.equal(isBatch({ images: [] }), false)
})

await ok('secondaryImages 排除主图', async () => {
  const node = { images: [mk('a'), mk('b'), mk('c')], primaryImageId: 'b' }
  const rest = secondaryImages(node).map((x) => x.id)
  assert.deepEqual(rest, ['a', 'c'], `应排除 b，实际 ${rest}`)
})

await ok('addImages：第一张自动成为主图，并写回 storageKey', async () => {
  const node = { images: [], primaryImageId: '', storageKey: '' }
  const next = addImages(node, mk('a', 'key-a'))
  assert.equal(next.images.length, 1)
  assert.equal(next.primaryImageId, 'a', '首个应自动成为主图')
  assert.equal(next.storageKey, 'key-a', '兼容字段应指向主图')
})

await ok('addImages：已有主图时不抢主图', async () => {
  const node = { images: [mk('a')], primaryImageId: 'a', storageKey: 'k_a' }
  const next = addImages(node, mk('b'))
  assert.equal(next.primaryImageId, 'a', '主图不该被新图抢走')
  assert.equal(next.images.length, 2)
})

await ok('setPrimary：切换后 storageKey 跟着换', async () => {
  const node = { images: [mk('a', 'ka'), mk('b', 'kb')], primaryImageId: 'a', storageKey: 'ka' }
  const next = setPrimary(node, 'b')
  assert.equal(next.primaryImageId, 'b')
  assert.equal(next.storageKey, 'kb', 'storageKey 必须指向新主图')
})

await ok('setPrimary：传入不存在的 id 时原样返回', async () => {
  const node = { images: [mk('a')], primaryImageId: 'a' }
  assert.equal(setPrimary(node, 'zzz'), node)
})

await ok('removeImage：删主图后新主图自动顶上', async () => {
  const node = { images: [mk('a', 'ka'), mk('b', 'kb')], primaryImageId: 'a', storageKey: 'ka' }
  const next = removeImage(node, 'a')
  assert.equal(next.images.length, 1)
  assert.equal(next.primaryImageId, 'b', `应顶上来，实际 ${next.primaryImageId}`)
  assert.equal(next.storageKey, 'kb', 'storageKey 应同步')
})

await ok('removeImage：删非主图时主图不变', async () => {
  const node = { images: [mk('a'), mk('b')], primaryImageId: 'a', storageKey: 'k_a' }
  const next = removeImage(node, 'b')
  assert.equal(next.primaryImageId, 'a')
  assert.equal(next.images.length, 1)
})

await ok('removeImage：删到空时清干净，不留悬空主图', async () => {
  const node = { images: [mk('a')], primaryImageId: 'a', storageKey: 'ka' }
  const next = removeImage(node, 'a')
  assert.equal(next.images.length, 0)
  assert.equal(next.primaryImageId, '', '不该留悬空 id')
  assert.equal(next.storageKey, '', '不该留悬空 storageKey')
})

await ok('explodeBatch：每张图变成一个节点，横向排开不重叠', async () => {
  const node = {
    id: 'n1', type: 'image', x: 100, y: 200, w: 400, h: 400,
    images: [mk('a'), mk('b'), mk('c')], primaryImageId: 'a',
  }
  let seq = 0
  const out = explodeBatch(node, { makeId: () => `new_${++seq}` })
  assert.equal(out.length, 3, `应拆出 3 个，实际 ${out.length}`)
  // 横向递增且不重叠
  for (let i = 1; i < out.length; i += 1) {
    assert.ok(out[i].x >= out[i - 1].x + out[i - 1].w, `第 ${i} 个与上一个重叠`)
  }
  assert.ok(out.every((n) => n.images.length === 1), '每个应只有一张图')
  assert.ok(out.every((n) => n.primaryImageId === n.images[0].id), '主图应指向自己那张')
  assert.ok(out.every((n) => n.status === 'idle'), '拆开后应复位状态')
})

await ok('explodeBatch：单图节点不拆，返回空数组', async () => {
  const node = { images: [mk('a')] }
  assert.deepEqual(explodeBatch(node), [])
})

await ok('mergeIntoBatch：多节点合成一个，尺寸覆盖全部', async () => {
  const a = { ...mkNode('a', 0, 0, 200, 200) }
  const b = { ...mkNode('b', 400, 300, 200, 200) }
  const merged = mergeIntoBatch([a, b], { makeId: () => 'm1' })
  assert.ok(merged, '应合成一个节点')
  assert.equal(merged.images.length, 2)
  assert.ok(merged.w >= 600, `宽度应覆盖到 600，实际 ${merged.w}`)
  assert.ok(merged.h >= 500, `高度应覆盖到 500，实际 ${merged.h}`)
  assert.equal(merged.primaryImageId, merged.images[0].id)
})

await ok('mergeIntoBatch：单个节点返回 null', async () => {
  assert.equal(mergeIntoBatch([mkNode('a', 0, 0, 100, 100)]), null)
})

function mkNode(id, x, y, w, h) {
  return {
    id, type: 'image', x, y, w, h,
    images: [makeImageEntry({ id: `img_${id}`, storageKey: `k_${id}`, width: w, height: h })],
    primaryImageId: `img_${id}`,
    storageKey: `k_${id}`,
    prompt: `p_${id}`,
    bytes: 100,
    mimeType: 'image/png',
    status: 'done',
  }
}

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
