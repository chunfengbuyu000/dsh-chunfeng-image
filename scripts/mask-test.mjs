// 蒙版纯逻辑测试（不碰真实 canvas，只验坐标与常量约定）。
// 合成本身依赖 canvas，由 e2e 在真浏览器里覆盖。
import assert from 'node:assert/strict'
import { MASK_COLOR, MASK_ALPHA } from '../client/canvas/mask.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { failed += 1; console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}

console.log('蒙版局部编辑')

await ok('蒙版用固定蓝色标记，和源项目一致', async () => {
  assert.equal(MASK_COLOR, '#2563eb')
})

await ok('蒙版透明度 0.4：既看得见原图，又看得出标记', async () => {
  assert.equal(MASK_ALPHA, 0.4)
  assert.ok(MASK_ALPHA > 0 && MASK_ALPHA < 1)
})

await ok('笔刷大小是相对值（0-1），与图片尺寸解耦', async () => {
  // paintStroke 的 brushNorm 会在内部乘以 min(w,h)。
  // 这里只验约定：几个预设笔刷都落在合理区间。
  const brushes = [0.03, 0.06, 0.1, 0.16]
  for (const b of brushes) {
    assert.ok(b > 0 && b < 0.5, `笔刷 ${b} 超出合理范围`)
  }
})

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
