// 视图导航与核心纯逻辑自测：路由/能力推断/2D分辨率矩阵/工作流图 Traversal/Gemini 解析。
// 跑法：node scripts/selftest.mjs
import assert from 'node:assert/strict'
import { initialState, newCanvas, seedCanvas, currentView, navigate, openCanvasIn, closeCanvasIn, VIEWS } from '../client/store.js'
import { guessCapability } from '../client/gen/models.js'
import { resolveImageDimensions, buildGeminiImageConfig, buildMaskEditPrompt, buildAnglePrompt } from '../client/gen/sizes.js'
import { buildNodeGenerationContext, composePromptWithContext, hasRealImage } from '../client/canvas/workflow.js'
import { pickResultItems, pickMediaPayload } from '../client/gen/result.js'

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

console.log('模型能力与生图矩阵')

ok('guessCapability 识别主流生图模型家族', () => {
  for (const id of ['nanobanana-pro', 'jimeng-3.0', 'ideogram-v3', 'recraft-v3', 'kolors-v2', 'sdxl-turbo', 'flux-pro', 'gpt-image-1']) {
    assert.equal(guessCapability(id), 'image', `${id} 未识别为生图模型`)
  }
  assert.equal(guessCapability('gpt-4o-mini'), 'text')
})

ok('resolveImageDimensions 按 2D 分辨率×比例矩阵算像素', () => {
  assert.equal(resolveImageDimensions({ resolution: '自动', ratio: '3:4' }), '864x1152')
  assert.equal(resolveImageDimensions({ resolution: '2k', ratio: '16:9' }), '2560x1440')
  assert.equal(resolveImageDimensions({ resolution: '4k', ratio: '3:4' }), '3072x4096')
  assert.equal(resolveImageDimensions({ resolution: '2k', ratio: '1:1', customSize: '900x700', align16: true }), '896x704')
  assert.deepEqual(buildGeminiImageConfig({ ratio: '16:9', resolution: '2k' }), { aspectRatio: '16:9', imageSize: '2K' })
})

ok('Gemini candidates inlineData 解析为可用 Blob', () => {
  const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
  const items = pickResultItems({
    candidates: [{ content: { parts: [{ text: 'ok' }, { inlineData: { mimeType: 'image/png', data: PNG_1PX } }] } }],
  })
  assert.equal(items.length, 1)
  const payload = pickMediaPayload(items[0])
  assert.ok(payload?.blob instanceof Blob && payload.blob.size > 0, 'Gemini inlineData 未转成 Blob')
})

ok('多角度与蒙版局部编辑 Prompt 模板构造正确', () => {
  const angle = buildAnglePrompt({ horizontal: 45, pitch: 20, distance: 2, wide: true })
  assert.ok(angle.includes('向右侧环绕旋转 45°') && angle.includes('俯拍 20°') && angle.includes('特写近景距离') && angle.includes('广角镜头透视效果'))
  const mask = buildMaskEditPrompt('换成红色跑车')
  assert.ok(mask.includes('参考图片1') && mask.includes('图片2') && mask.includes('换成红色跑车'))
})

console.log('工作流上下文解析')

ok('hasRealImage 与上游文本/图片/分组展开解析', () => {
  const t1 = { id: 't1', type: 'text', name: '风格', x: 0, y: 100, text: '赛博朋克雨夜' }
  const img1 = { id: 'i1', type: 'image', name: '底图', x: 0, y: 200, storageKey: 'image:k1', images: [{ id: 'm1', storageKey: 'image:k1' }] }
  const imgEmpty = { id: 'i_empty', type: 'image', x: 100, y: 200, images: [] }
  const g1 = { id: 'g1', type: 'group', x: 0, y: 50, childIds: ['t1', 'i1'] }
  const cfg = { id: 'c1', type: 'config', x: 300, y: 150, ratio: '16:9', count: 2, modelKey: 'm' }
  const target = { id: 'i2', type: 'image', x: 500, y: 150 }
  const edges = [{ id: 'e1', from: 'g1', to: 'c1' }, { id: 'e2', from: 'c1', to: 'target' }]

  assert.equal(hasRealImage(img1), true)
  assert.equal(hasRealImage(imgEmpty), false)
  const ctx = buildNodeGenerationContext(cfg, [t1, img1, g1, cfg, target], edges)
  assert.equal(ctx.textInputs.length, 1)
  assert.equal(ctx.imageInputs.length, 1)
  const composed = composePromptWithContext('按 @文本:风格 画一只猫参照 @图片:底图', ctx.textInputs, ctx.upstream)
  assert.ok(composed.includes('赛博朋克雨夜') && composed.includes('参考图(底图)'))
})

console.log(`\n${pass} 项通过`)
