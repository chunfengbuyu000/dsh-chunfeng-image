// 视频任务纯逻辑测试：任务 ID 提取、状态归一、结果 URL 提取。
// 不涉及网络 —— 轮询的时序行为另由 mock 测试覆盖。
import assert from 'node:assert/strict'
import { pickTaskId, pickResultUrl, normalizeStatus, VIDEO_DEADLINE_MS } from '../client/gen/video.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { failed += 1; console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}

console.log('视频任务 · 响应解析')

await ok('任务 ID：直接给 id', async () => {
  assert.equal(pickTaskId({ id: 'task_1' }), 'task_1')
})

await ok('任务 ID：task_id / taskId 别名', async () => {
  assert.equal(pickTaskId({ task_id: 't2' }), 't2')
  assert.equal(pickTaskId({ taskId: 't3' }), 't3')
})

await ok('任务 ID：嵌套在 data / task / result 里', async () => {
  assert.equal(pickTaskId({ data: { id: 'nested1' } }), 'nested1')
  assert.equal(pickTaskId({ task: { task_id: 'nested2' } }), 'nested2')
  assert.equal(pickTaskId({ result: { id: 'nested3' } }), 'nested3')
})

await ok('任务 ID：拿不到时返回空串，不抛', async () => {
  assert.equal(pickTaskId(null), '')
  assert.equal(pickTaskId({}), '')
  assert.equal(pickTaskId({ data: {} }), '')
  assert.equal(pickTaskId('string'), '')
})

await ok('结果 URL：常见字段名', async () => {
  assert.equal(pickResultUrl({ url: 'https://a/1.mp4' }), 'https://a/1.mp4')
  assert.equal(pickResultUrl({ video_url: 'https://a/2.mp4' }), 'https://a/2.mp4')
  assert.equal(pickResultUrl({ result_url: 'https://a/3.mp4' }), 'https://a/3.mp4')
})

await ok('结果 URL：嵌套在 output / data 里', async () => {
  assert.equal(pickResultUrl({ output: { url: 'https://a/4.mp4' } }), 'https://a/4.mp4')
  assert.equal(pickResultUrl({ data: { video: { url: 'https://a/5.mp4' } } }), 'https://a/5.mp4')
})

await ok('结果 URL：没有时返回空串', async () => {
  assert.equal(pickResultUrl({ status: 'pending' }), '')
  assert.equal(pickResultUrl(null), '')
})

await ok('状态归一：完成类词汇', async () => {
  for (const s of ['completed', 'succeeded', 'success', 'done', 'finished']) {
    assert.equal(normalizeStatus({ status: s }), 'completed', `${s} 应判完成`)
  }
})

await ok('状态归一：失败类词汇', async () => {
  for (const s of ['failed', 'error', 'cancelled', 'canceled']) {
    assert.equal(normalizeStatus({ status: s }), 'failed', `${s} 应判失败`)
  }
})

await ok('状态归一：进行中类词汇', async () => {
  for (const s of ['queued', 'pending', 'running', 'processing', 'in_progress', 'generating']) {
    assert.equal(normalizeStatus({ status: s }), 'pending', `${s} 应判进行中`)
  }
})

await ok('状态归一：state / task_status 别名', async () => {
  assert.equal(normalizeStatus({ state: 'completed' }), 'completed')
  assert.equal(normalizeStatus({ task_status: 'failed' }), 'failed')
})

await ok('状态归一：未知词按进行中处理（不误判完成）', async () => {
  assert.equal(normalizeStatus({ status: 'whatever' }), 'pending')
  assert.equal(normalizeStatus({}), 'unknown')
})

await ok('总时限是 15 分钟（源项目只有 5 分钟，长视频不够）', async () => {
  assert.equal(VIDEO_DEADLINE_MS, 15 * 60_000)
})

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
