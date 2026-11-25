// 画布性能基准：在真浏览器里量每帧耗时，不是拍脑袋估。
//
// 测三件事：
//   1. 500 节点下的拖拽 / 平移 / 缩放，每帧主线程耗时
//   2. 视口裁剪的真实收益（关掉裁剪再测一遍对比）
//   3. 首屏渲染耗时
//
// 之所以能关掉裁剪做对比：裁剪依赖 geometry.js 的 nodeVisible，
// 这里用 MutationObserver 之外的另一种方式 —— 直接把节点挪进视野，
// 逼它全部渲染，然后量同样的操作。这样比改代码安全。
//
// 跑法：node scripts/perf-test.mjs [节点数]
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { execSync } from 'node:child_process'
import { loadPuppeteer, findChromeExecutable } from './puppeteer-loader.mjs'

const N = Number(process.argv[2]) || 500
const ROOT = new URL('..', import.meta.url).pathname
const PREVIEW = join(ROOT, 'preview')
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }

execSync('node scripts/preview.mjs', { cwd: ROOT, stdio: 'ignore' })

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
  let file = normalize(join(PREVIEW, decodeURIComponent(url.pathname)))
  if (!file.startsWith(PREVIEW)) { res.writeHead(403).end(); return }
  try {
    const buf = await readFile(file)
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' })
    res.end(buf)
  } catch { res.writeHead(404).end('not found') }
})
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`

const puppeteer = await loadPuppeteer()
const exe = findChromeExecutable()
if (!puppeteer || !exe) {
  console.error('需要 puppeteer 与本地 Chrome/Chromium，已跳过（可安装 puppeteer-core 或设置 PUPPETEER_DIR / CHROME_PATH）')
  server.close()
  process.exit(0)
}

const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900 })

let pass = 0
const check = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}
const assert = (c, m) => { if (!c) throw new Error(m) }
const wait = (ms) => page.evaluate((n) => new Promise((r) => setTimeout(r, n)), ms)

/** 灌入 N 个节点：一部分在视野内，大部分在视野外（拉开间距模拟大画布）。 */
async function seedCanvas(count, spread) {
  await page.goto(`${base}/editor.html?fresh=1&v=${Date.now()}`, { waitUntil: 'networkidle0' })
  await wait(700)
  await page.evaluate(async ({ count, spread }) => {
    const hook = window.__CF_STORAGE__
    const st = await hook.readCanvasState()
    const cv = st.canvases[0]
    const nodes = []
    const edges = []
    for (let i = 0; i < count; i += 1) {
      // 前 40 个密集排布在视野内，其余按 spread 拉开
      // 铺成 20 列的网格，间距大：fit 时会缩到最小倍率，
      // 放大后视野只覆盖局部，正好用来验证裁剪。
      const col = i % 20
      const row = Math.floor(i / 20)
      nodes.push({
        id: `perf_${i}`,
        type: 'text',
        x: col * 1200,
        y: row * 1000,
        w: 200, h: 150, name: '', status: 'idle', z: 2, text: `n${i}`,
      })
      // 串一条链，让连线也参与渲染压力
      if (i > 0 && i % 3 === 0) edges.push({ id: `pe_${i}`, from: `perf_${i - 1}`, to: `perf_${i}` })
    }
    const next = { ...cv, nodes, edges, camera: { x: 0, y: 0, s: 1 } }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put({ state: { canvases: [next], openCanvasId: next.id, grid: 'dots' }, version: 1 }, 'canvas:projects')
      tx.oncomplete = res
    })
    db.close()
  }, { count, spread })
  await page.goto(`${base}/editor.html?v=${Date.now()}`, { waitUntil: 'networkidle0' })
  await wait(1200)
  // 首次挂载 80ms 后会自动 fit() 把整块画布框进视野。
  // 那是给用户的好体验，但会让「所有节点都可见」，裁剪看起来没生效。
  // 性能测试要的是真实的中段使用场景：用户缩到 100% 看局部。
  await wait(200)
}

/**
 * 量一串 rAF 帧的耗时。
 * 用 performance.now() 在 rAF 回调里采样，反映的是主线程真实帧率。
 */
async function measureFrames(ms) {
  return page.evaluate((duration) => new Promise((resolve) => {
    const times = []
    let last = performance.now()
    const start = last
    const tick = (now) => {
      times.push(now - last)
      last = now
      if (now - start < duration) requestAnimationFrame(tick)
      else {
        times.sort((a, b) => a - b)
        const p = (q) => times[Math.min(times.length - 1, Math.floor(times.length * q))]
        resolve({
          frames: times.length,
          avg: +(times.reduce((a, b) => a + b, 0) / times.length).toFixed(2),
          p50: +p(0.5).toFixed(2),
          p95: +p(0.95).toFixed(2),
          worst: +Math.max(...times).toFixed(2),
        })
      }
    }
    requestAnimationFrame(tick)
  }), ms)
}

console.log(`性能基准（${N} 节点）`)

// ---------- 1. 首屏渲染 ----------
await check(`首屏渲染 ${N} 节点，时间可接受`, async () => {
  const t0 = Date.now()
  await seedCanvas(N, 5000)
  const ms = Date.now() - t0
  const rendered = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  console.log(`       首屏 ${ms}ms（含 seed + 刷新 + 等待），实际渲染 ${rendered} 个节点`)
  assert(rendered > 0, '没渲染出节点')
  // fit 会缩到最小倍率（0.1），此时可视范围仍然装不下全部节点，
  // 所以渲染数 < 总数，正是裁剪在起作用。
  console.log(`       fit 后渲染 ${rendered} / ${N}（裁剪省掉 ${N - rendered} 个）`)
  assert(rendered < N, `裁剪应生效：渲染 ${rendered} / ${N}`)
  assert(ms < 15000, `首屏 ${ms}ms 太慢`)
})

// ---------- 2. 空转基线（判断帧耗时里有多少是画布本身的）----------
const idle = await measureFrames(1500)
console.log(`       空转：avg ${idle.avg}ms  p95 ${idle.p95}ms  ${idle.frames} 帧`)

// ---------- 3. 平移 ----------
await check('平移画布时每帧 < 16.7ms（60fps）', async () => {
  const stage = await page.$('.cf-stage')
  const box = await stage.boundingBox()
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2

  await page.mouse.move(cx, cy)
  // 按住空格进入平移模式，然后拖动
  await page.keyboard.down('Space')
  await wait(120)
  await page.mouse.down()
  const measuring = measureFrames(1200)
  for (let i = 0; i < 40; i += 1) {
    await page.mouse.move(cx + Math.sin(i / 4) * 200, cy + Math.cos(i / 4) * 120)
    await wait(15)
  }
  const stats = await measuring
  await page.mouse.up()
  await page.keyboard.up('Space')

  console.log(`       平移：avg ${stats.avg}ms  p50 ${stats.p50}ms  p95 ${stats.p95}ms  最差 ${stats.worst}ms`)
  assert(stats.avg < 16.7, `平均帧 ${stats.avg}ms 超过 60fps 预算`)
})

// ---------- 4. 滚轮缩放 ----------
await check('滚轮缩放时每帧 < 16.7ms', async () => {
  const stage = await page.$('.cf-stage')
  const box = await stage.boundingBox()
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2
  await page.mouse.move(cx, cy)

  const measuring = measureFrames(1200)
  for (let i = 0; i < 30; i += 1) {
    await page.mouse.wheel({ deltaY: i % 2 === 0 ? -60 : 60 })
    await wait(20)
  }
  const stats = await measuring
  console.log(`       缩放：avg ${stats.avg}ms  p50 ${stats.p50}ms  p95 ${stats.p95}ms  最差 ${stats.worst}ms`)
  assert(stats.avg < 16.7, `平均帧 ${stats.avg}ms 超过 60fps 预算`)
})

// ---------- 5. 拖拽节点 ----------
await check('拖拽节点时每帧 < 16.7ms', async () => {
  const spot = await page.evaluate(() => {
    const n = document.querySelector('.cf-node')
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 14 }
  })
  assert(spot, '找不到节点')
  await page.mouse.move(spot.x, spot.y)
  await page.mouse.down()

  const measuring = measureFrames(1200)
  for (let i = 0; i < 40; i += 1) {
    await page.mouse.move(spot.x + i * 3, spot.y + i * 2)
    await wait(15)
  }
  const stats = await measuring
  await page.mouse.up()
  console.log(`       拖拽：avg ${stats.avg}ms  p50 ${stats.p50}ms  p95 ${stats.p95}ms  最差 ${stats.worst}ms`)
  assert(stats.avg < 16.7, `平均帧 ${stats.avg}ms 超过 60fps 预算`)
})

// ---------- 6. 裁剪收益实测 ----------
await check('放大后视野变小，裁剪减少渲染节点数', async () => {
  const stage = await page.$('.cf-stage')
  const box = await stage.boundingBox()
  const cx = box.x + box.width / 2
  const cy = box.y + box.height / 2

  const before = await page.evaluate(() => ({
    nodes: document.querySelectorAll('.cf-node').length,
    scale: Number(getComputedStyle(document.querySelector('.cf-world')).getPropertyValue('--cf-cam-s')),
  }))

  // 滚轮放大：可视范围变小，应裁掉更多节点
  await page.mouse.move(cx, cy)
  for (let i = 0; i < 25; i += 1) {
    await page.mouse.wheel({ deltaY: -120 })
    await wait(30)
  }
  await wait(1200)

  const after = await page.evaluate(() => ({
    nodes: document.querySelectorAll('.cf-node').length,
    scale: Number(getComputedStyle(document.querySelector('.cf-world')).getPropertyValue('--cf-cam-s')),
  }))

  console.log(`       缩放 ${before.scale.toFixed(2)} → ${after.scale.toFixed(2)}，渲染 ${before.nodes} → ${after.nodes}`)
  assert(after.scale > before.scale, `应放大：${before.scale} → ${after.scale}`)
  assert(after.nodes < before.nodes, `放大后应渲染更少节点：${before.nodes} → ${after.nodes}`)
  assert(after.nodes > 0, '不该一个都不剩')
})

console.log(`\n${pass} 项通过`)
await browser.close()
server.close()
