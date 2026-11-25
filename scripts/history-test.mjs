// 撤销栈纯函数测试：不需要浏览器，node 直接跑。
// 锁住四条最容易写错的行为（每一条都对应源仓库踩过的坑）。
import assert from 'node:assert/strict'
import { createHistory } from '../client/canvas/history.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try {
    await fn()
    pass += 1
    console.log(`  ok  ${name}`)
  } catch (error) {
    failed += 1
    console.error(`  FAIL ${name}\n       ${error.message}`)
    process.exitCode = 1
  }
}

/** 造一个可控的假画布：每次变更都产生新数组引用，模拟不可变更新。 */
function makeStore(initial) {
  let state = initial
  const applied = []
  const history = createHistory({
    get: () => state,
    apply: (snap) => { state = { ...state, ...snap }; applied.push(snap) },
    wait: 0, // 测试里不防抖
  })
  return {
    history,
    get state() { return state },
    applied,
    set(patch) {
      state = { ...state, ...patch }
      history.tick()
    },
    flush: () => history.flush(),
  }
}

const base = {
  nodes: [{ id: 'n1', x: 0 }],
  edges: [],
  grid: 'dots',
}

console.log('撤销栈')

await ok('push 的是上一稳定态，不是当前态（顺序写反会原地踏步）', async () => {
  const s = makeStore(base)
  s.history.init()

  const second = [{ id: 'n1', x: 100 }]
  s.set({ nodes: second })
  await new Promise((r) => setTimeout(r, 5))

  // 此时 past[0] 应该是 base.nodes（旧值），不是 second
  assert.equal(s.history.depth, 1, '应记录 1 步')
  s.history.undo()
  assert.equal(s.state.nodes, base.nodes, '撤销后应回到旧引用')
})

await ok('undo 之后 redo 能回到新值', async () => {
  const s = makeStore(base)
  s.history.init()
  const second = [{ id: 'n1', x: 100 }]
  s.set({ nodes: second })
  await new Promise((r) => setTimeout(r, 5))

  s.history.undo()
  assert.equal(s.state.nodes, base.nodes)
  assert.equal(s.history.canRedo, true, '撤销后应可重做')

  s.history.redo()
  assert.equal(s.state.nodes, second, '重做应回到新值')
})

await ok('undo 期间不产生新历史（否则会死循环）', async () => {
  const s = makeStore(base)
  s.history.init()
  s.set({ nodes: [{ id: 'n1', x: 100 }] })
  await new Promise((r) => setTimeout(r, 5))
  const depthBefore = s.history.depth

  s.history.undo()
  // apply 会写 state；如果不暂停，这次写入会再 tick 一次，深度会变
  await new Promise((r) => setTimeout(r, 5))
  assert.equal(s.history.depth, depthBefore - 1, `撤销后深度应减 1，实际 ${s.history.depth}`)
})

await ok('pause 期间不记录（拖拽时用）', async () => {
  const s = makeStore(base)
  s.history.init()
  s.history.pause()

  // 模拟拖拽：连续多次变更
  for (let i = 1; i <= 5; i++) {
    s.set({ nodes: [{ id: 'n1', x: i * 10 }] })
    await new Promise((r) => setTimeout(r, 2))
  }
  assert.equal(s.history.depth, 0, `拖拽期间不该记录，实际 ${s.history.depth} 步`)

  s.history.resume()
  assert.equal(s.history.depth, 1, `resume 后应只记 1 步，实际 ${s.history.depth}`)
})

await ok('空栈时 undo/redo 返回 false，不炸', async () => {
  const s = makeStore(base)
  s.history.init()
  assert.equal(s.history.undo(), false)
  assert.equal(s.history.redo(), false)
  assert.equal(s.state.nodes, base.nodes, '状态不该被改动')
})

await ok('超过上限后丢最旧的（默认 50）', async () => {
  const history = createHistory({
    get: () => globalThis.__st,
    apply: () => {},
    limit: 3,
    wait: 0,
  })
  globalThis.__st = { nodes: [], edges: [], grid: 'dots' }
  history.init()
  for (let i = 0; i < 6; i++) {
    globalThis.__st = { ...globalThis.__st, nodes: [{ id: `n${i}` }] }
    history.tick()
    await new Promise((r) => setTimeout(r, 2))
  }
  assert.ok(history.depth <= 3, `深度应 ≤3，实际 ${history.depth}`)
})

await ok('内容没变时不记录（引用相等短路）', async () => {
  const s = makeStore(base)
  s.history.init()
  // 不改变任何字段
  s.history.flush()
  await new Promise((r) => setTimeout(r, 5))
  assert.equal(s.history.depth, 0, `无变更不该产生历史，实际 ${s.history.depth}`)
})

await ok('不把 chatSessions 之类的字段带进快照', async () => {
  let captured = null
  const history = createHistory({
    get: () => ({ nodes: [1], edges: [2], grid: 'dots', chatSessions: ['不该出现'], viewport: { x: 9 } }),
    apply: (snap) => { captured = snap },
    wait: 0,
  })
  history.init()
  // 制造一次变更
  const store = { nodes: [1], edges: [2], grid: 'dots', chatSessions: ['x'] }
  const h2 = createHistory({ get: () => store, apply: (s) => { captured = s }, wait: 0 })
  h2.init()
  store.nodes = [1, 2]
  h2.tick()
  await new Promise((r) => setTimeout(r, 5))
  h2.undo()
  assert.ok(captured, '应拿到快照')
  assert.equal(captured.chatSessions, undefined, '快照里不该有 chatSessions')
  assert.equal(captured.viewport, undefined, '快照里不该有 viewport')
  assert.deepEqual(Object.keys(captured).sort(), ['edges', 'grid', 'nodes'], `快照字段应只有三样，实际 ${Object.keys(captured)}`)
})

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
