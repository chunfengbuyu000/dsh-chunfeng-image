// 视图导航自测：锁住「点顶栏没反应」这个回归。
// 跑法：node scripts/selftest.mjs
import assert from 'node:assert/strict'
import { initialState, newCanvas, seedCanvas, currentView, navigate, openCanvasIn, closeCanvasIn, VIEWS } from '../client/store.js'

let pass = 0
const ok = (name, fn) => {
  try {
    fn()
    pass += 1
    console.log(`  ok  ${name}`)
  } catch (err) {
    console.error(`  FAIL ${name}\n       ${err.message}`)
    process.exitCode = 1
  }
}

console.log('视图导航')

ok('没打开画布时，显示 state.view', () => {
  const s = { ...initialState(), view: 'studio', openCanvasId: null }
  assert.equal(currentView(s), 'studio')
})

ok('打开了画布时，显示编辑器', () => {
  const s = { ...initialState(), view: 'canvas', openCanvasId: 'cv1' }
  assert.equal(currentView(s), 'editor')
})

ok('编辑器里点任意一个顶栏导航都能切走（原来的 bug）', () => {
  const base = { ...initialState(), view: 'canvas', openCanvasId: 'cv1' }
  for (const v of VIEWS) {
    const next = navigate(base, v.id)
    assert.equal(next.openCanvasId, null, `导航到 ${v.label} 后 openCanvasId 应该被清空`)
    assert.equal(currentView(next), v.id, `导航到 ${v.label} 后应显示 ${v.id}`)
  }
})

ok('导航不破坏画布数据', () => {
  const cv = { ...newCanvas('样例'), ...seedCanvas() }
  const s = { ...initialState(), canvases: [cv], openCanvasId: cv.id }
  const next = navigate(s, 'assets')
  assert.equal(next.canvases.length, 1)
  assert.equal(next.canvases[0].nodes.length, cv.nodes.length)
})

ok('打开画布进编辑器，返回回到列表', () => {
  const cv = { ...newCanvas('样例'), ...seedCanvas() }
  let s = { ...initialState(), canvases: [cv] }
  s = openCanvasIn(s, cv.id)
  assert.equal(currentView(s), 'editor')
  s = closeCanvasIn(s)
  assert.equal(currentView(s), 'canvas')
})

ok('种子画布不会一进来就锁死编辑器', () => {
  const cv = { ...newCanvas('霓虹街角'), ...seedCanvas() }
  const s = { ...initialState(), canvases: [cv], openCanvasId: null }
  assert.equal(currentView(s), 'canvas')
})

console.log(`\n${pass} 项通过`)
