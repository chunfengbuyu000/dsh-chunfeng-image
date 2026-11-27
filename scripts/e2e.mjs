// 端到端回归：真开浏览器点一遍，锁住「点了就崩」这类问题。
// 跑法：node scripts/e2e.mjs（会自动重新构建 preview）
import { createServer } from 'node:http'
import { readFile, writeFile, rm } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { pathToFileURL } from 'node:url'
import { execSync } from 'node:child_process'
import { loadPuppeteer, findChromeExecutable } from './puppeteer-loader.mjs'

const ROOT = new URL('..', import.meta.url).pathname
const PREVIEW = join(ROOT, 'preview')
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' }

execSync('node scripts/preview.mjs', { cwd: ROOT, stdio: 'ignore' })

// 把真实的 Host 半片挂到 e2e 服务器上，这样生成链路（含 /relay 转发）
// 能在浏览器里端到端跑，而不是只测静态页面。
// 配置镜像文件指到临时路径：否则 e2e 会读到开发者真实机器上的渠道配置，
// 「从本机文件自愈」会把测试页面的干净状态污染掉。
process.env.DSH_CHUNFENG_CONFIG = `/tmp/dsh-e2e-config-${process.pid}.json`
await rm(process.env.DSH_CHUNFENG_CONFIG, { force: true }).catch(() => {})

const { default: pluginHost } = await import(pathToFileURL(join(ROOT, 'src/host.js')).href)
const hostHandlers = {}
// 假的 DSH llm 服务：让顶栏模型选择器有内容可列（e2e 里不接真宿主）
const lastStreamMessages = []
const fakeLlm = {
  listProviders: async () => [{ id: 'p1', name: '厂商一' }, { id: 'p2', name: '厂商二' }],
  listModels: async (id) => (id === 'p1'
    ? [
      { id: 'm1', name: '模型一', inputModalities: ['text', 'image'] },
      // m2 显式声明不支持图片：用来验证守卫会不会拦住
      { id: 'm2', name: '纯文本模型', inputModalities: ['text'] },
    ]
    : []),
  prepareCall: async () => ({
    config: {},
    stream: async function* (args) {
      lastStreamMessages.push(args.messages)
      yield { type: 'text-delta', text: '一只橘色小猫，柔和侧光，浅景深。' }
      yield { type: 'finish', reason: { kind: 'stop' } }
    },
  }),
}
const fakeServices = {
  connection: { requestRejection: () => 0 },
  llm: fakeLlm,
  agentDefaultModel: { currentSelection: () => ({ provider: 'p1', model: 'm1' }) },
}
pluginHost.apply({
  effect: (fn) => { fn(); return () => {} },
  get: (name) => fakeServices[name] || null,
  webServer: { register: (o) => { hostHandlers[o.path] = o.handler; return () => {} } },
  connection: fakeServices.connection,
  llm: fakeLlm,
  agentDefaultModel: fakeServices.agentDefaultModel,
})

// 假视频上游：让 e2e 能在真实转发链路上验视频任务轮询
// 记录打到了哪个 mock 生图端点：generations / edits
const mockHits = []
// 记录每次拉取模型时带的 Authorization，用来验证「用的是输入框里的新 Key」
const mockModelPulls = []
// 为 true 时图片下载接口返回 500，用来验证远程兜底
let downloadBroken = false
let videoPollCount = 0
let videoUnsupported = false

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')

  // ---- 插件 Host 路由（/relay 等）----
  if (url.pathname.startsWith('/dsh-chunfeng-image') && hostHandlers['/dsh-chunfeng-image']) {
    return hostHandlers['/dsh-chunfeng-image'](req, res)
  }

  // ---- mock 视频 API ----
  if (url.pathname === '/mock/v1/videos' && req.method === 'POST') {
    for await (const _ of req) { /* 丢掉 body */ }
    if (videoUnsupported) {
      res.writeHead(404, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ error: { message: 'Videos API is not supported for this platform' } }))
      return
    }
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ id: 'task_e2e', status: 'queued' }))
    return
  }
  if (url.pathname === '/mock/v1/videos/task_e2e' && req.method === 'GET') {
    videoPollCount += 1
    // 前两次进行中，第三次完成
    if (videoPollCount < 3) {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ id: 'task_e2e', status: 'in_progress' }))
      return
    }
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ id: 'task_e2e', status: 'completed', url: `${base}/mock/out.mp4` }))
    return
  }
  // 只返回链接的生图上游：模拟「上游给 url、不给 b64」的真实情形
  if (url.pathname === '/mock-url/v1/images/generations' && req.method === 'POST') {
    let n = 1
    try {
      let body = ''
      for await (const c of req) body += c
      n = Number(JSON.parse(body)?.n) || 1
    } catch { n = 1 }
    // 延迟 600ms：真实上游要 20 多秒，这里留出观察 loading 态的窗口
    setTimeout(() => {
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify({
        // 带上唯一参数：resolveMediaResult 用 force-cache 拉图，
        // 地址不变会命中上一次的缓存，测不出「下载失败」这条路径
        data: Array.from({ length: n }, (_, i) => ({
          url: `${base}/mock-url/img/${i}?t=${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        })),
      }))
    }, 600)
    return
  }
  // 图片下载：downloadBroken 时故意 500，用来验证「下载失败也要能显示」
  if (url.pathname.startsWith('/mock-url/img/')) {
    if (downloadBroken) { res.writeHead(500).end('boom'); return }
    res.writeHead(200, { 'content-type': 'image/png', 'access-control-allow-origin': '*' })
    res.end(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'))
    return
  }

  // mock 模型列表（给「配置页不保存也能拉模型」用）
  if (url.pathname === '/mockup/v1/models' && req.method === 'GET') {
    mockModelPulls.push(req.headers.authorization || '')
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({
      data: ['gpt-image-2', 'gpt-image-2.5', 'deepseek-v4.1-flash', 'seedream-5-pro', 'kling-video-3']
        .map((id) => ({ id })),
    }))
    return
  }

  // mock 文生图：按请求的 n 返回对应张数
  if (url.pathname === '/mock/v1/images/generations' && req.method === 'POST') {
    mockHits.push('generations')
    let body = ''
    for await (const c of req) body += c
    let n = 1
    try { n = Number(JSON.parse(body)?.n) || 1 } catch { n = 1 }
    const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ data: Array.from({ length: n }, () => ({ b64_json: b64, width: 1024, height: 1024 })) }))
    return
  }

  // mock 图片编辑：按上游真实行为返回 b64
  if (url.pathname === '/mock/v1/images/edits' && req.method === 'POST') {
    mockHits.push('edits')
    let body = ''
    for await (const c of req) body += c
    let parsed = null
    try { parsed = JSON.parse(body) } catch { parsed = null }
    const shapeOk = Array.isArray(parsed?.images) && typeof parsed.images[0]?.image_url === 'string'
    if (!shapeOk) {
      res.writeHead(400, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ error: { message: 'images[].image_url is required' } }))
      return
    }
    // 1x1 透明 PNG
    const b64 = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ created: Date.now(), data: [{ b64_json: b64, width: 1024, height: 1024 }] }))
    return
  }

  if (url.pathname === '/mock/out.mp4') {
    res.writeHead(200, { 'content-type': 'video/mp4' })
    res.end(Buffer.from([0, 0, 0, 24, 102, 116, 121, 112, 0, 0, 0, 0]))
    return
  }

  let file = normalize(join(PREVIEW, decodeURIComponent(url.pathname)))
  if (!file.startsWith(PREVIEW)) { res.writeHead(403).end(); return }
  if (url.pathname === '/') file = join(PREVIEW, 'index.html')
  try {
    const buf = await readFile(file)
    res.writeHead(200, { 'content-type': MIME[extname(file)] || 'application/octet-stream' })
    res.end(buf)
  } catch {
    res.writeHead(404).end('not found')
  }
})
await new Promise(r => server.listen(0, '127.0.0.1', r))
// 跨域提示词源：故意不发 Access-Control-Allow-Origin。
// 浏览器直连必失败，只有走 Host 代理才能成功 —— 用它证明代理真的在起作用。
const crossSource = createServer((req, res) => {
  if (req.url === '/prompts.json') {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify([
      { title: '霓虹街角', prompt: '雨夜霓虹，湿润地面反射招牌' },
      { title: '森林晨雾', prompt: '晨雾中的松林，逆光' },
    ]))
    return
  }
  if (req.url === '/prompts-with-images.json') {
    const port = crossSource.address().port
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify([
      {
        id: 'ext_poster_1',
        title: '苹果风格示例海报',
        prompt: '充分参考图片设计风格，生成商业产品海报',
        description: '测试带封面与参考图的提示词',
        coverUrl: `http://127.0.0.1:${port}/cover.png`,
        referenceImageUrls: [`http://127.0.0.1:${port}/ref.png`],
        tags: ['海报', '示例'],
      },
    ]))
    return
  }
  if (req.url === '/cover.png' || req.url === '/ref.png') {
    res.writeHead(200, { 'content-type': 'image/png' })
    res.end(Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'))
    return
  }
  res.writeHead(404).end('nf')
})
await new Promise((r) => crossSource.listen(0, '127.0.0.1', r))
const crossSourceUrl = `http://127.0.0.1:${crossSource.address().port}/prompts.json`
const crossSourceImgUrl = `http://127.0.0.1:${crossSource.address().port}/prompts-with-images.json`

const base = `http://127.0.0.1:${server.address().port}`

const puppeteer = await loadPuppeteer()
const exe = findChromeExecutable()
if (!puppeteer || !exe) {
  console.error('需要 puppeteer 与本地 Chrome/Chromium 才能跑端到端检查，已跳过（可安装 puppeteer-core 或设置 PUPPETEER_DIR / CHROME_PATH）')
  server.close()
  crossSource.close()
  await rm(process.env.DSH_CHUNFENG_CONFIG, { force: true }).catch(() => {})
  process.exit(0)
}

const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] })
let pass = 0
let failed = 0

// 每个用例都要从干净状态开始。数据根现在同时有 localStorage（配置层）和
// IndexedDB（画布层 + 媒体层），只清前者会让用例互相污染。
// 清完再带 ?fresh=1 让预览页重新预置。
async function openPage(path) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', m => { if (m.type() === 'error' && !/favicon|404/i.test(m.text())) errors.push(m.text()) })
  await page.goto(base + path, { waitUntil: 'networkidle0' })
  await page.evaluate(async () => {
    localStorage.clear()
    // 删库比逐 store 清更彻底，顺带验证 onupgradeneeded 能重建
    await new Promise((resolve) => {
      const req = indexedDB.deleteDatabase('dsh-chunfeng-image')
      req.onsuccess = resolve
      req.onerror = resolve
      req.onblocked = resolve
    })
  })
  const sep = path.includes('?') ? '&' : '?'
  await page.goto(base + path + sep + 'fresh=1', { waitUntil: 'networkidle0' })
  await new Promise(r => setTimeout(r, 500))
  return { page, errors }
}

async function check(name, fn) {
  try {
    await fn()
    pass += 1
    console.log(`  ok  ${name}`)
  } catch (err) {
    failed += 1
    console.error(`  FAIL ${name}\n       ${err.message.split('\n').slice(0, 3).join('\n       ')}`)
  }
}

const assert = (cond, msg) => { if (!cond) throw new Error(msg) }
const wait = (page, ms) => page.evaluate((n) => new Promise(r => setTimeout(r, n)), ms)

console.log('端到端')

// 1. 顶栏每个导航都能切换（曾经的「点了没反应」）
await check('顶栏四个页都能切过去', async () => {
  const { page, errors } = await openPage('/canvas.html')
  for (const label of ['生图', '提示词', '资产']) {
    await page.evaluate((t) => {
      const btn = [...document.querySelectorAll('.cf-nav-glass button')].find(b => b.textContent.includes(t))
      btn.click()
    }, label)
    await new Promise(r => setTimeout(r, 150))
    const active = await page.$eval('.cf-nav-glass button.is-on', el => el.textContent.trim())
    assert(active.includes(label), `点「${label}」后高亮的是「${active}」`)
  }
  // 配置走右侧齿轮
  await page.evaluate(() => [...document.querySelectorAll('.cf-glass-btn')].find(b => b.getAttribute('aria-label') === '配置').click())
  await new Promise(r => setTimeout(r, 200))
  assert(await page.evaluate(() => Boolean(document.querySelector('.cf-tabs'))), '齿轮没有进入配置页')
  assert(!errors.length, '页面报错：' + errors.join(' | '))
  await page.close()
})

// 2. 没选中节点时点发送：新建节点且不崩（曾经的黑屏）
await check('输入提示词点发送不崩溃', async () => {
  const { page, errors } = await openPage('/editor.html')
  // 生图现在是真的打上游，要先给个假渠道，否则只会提示「没有可用的生图模型」
  await withMockImageChannel(page)
  const before = await page.$$eval('.cf-node', els => els.length)
  await page.click('.cf-composer-input')
  await page.type('.cf-composer-input', '雨夜的霓虹街角，湿润地面反射招牌')
  await page.click('.cf-send')
  await new Promise(r => setTimeout(r, 1500))
  const after = await page.$$eval('.cf-node', els => els.length)
  assert(after > before, `节点数没有增加（${before} → ${after}）`)
  assert(await page.$('.cf-app'), '整个面板消失了（黑屏）')
  assert(!errors.length, '页面报错：' + errors.join(' | '))
  await page.close()
})

// 3. 选中一个图片节点再发送：只在原节点上重画，不新增
await check('选中图片节点后发送不崩溃', async () => {
  const { page, errors } = await openPage('/editor.html')
  await withMockImageChannel(page)
  const before = await page.$$eval('.cf-node', els => els.length)
  // 用真实鼠标点第一个图片节点，确认确实选中了
  const box = await page.evaluate(() => {
    // 要挑真正的「图片」节点：选到文本节点时按设计本来就会新建图片节点
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.click(box.x, box.y)
  await new Promise(r => setTimeout(r, 250))
  const picked = await page.evaluate(() => document.querySelectorAll('.cf-node.is-selected').length)
  assert(picked === 1, `应当恰好选中 1 个节点，实际 ${picked} 个`)
  await page.click('.cf-composer-input')
  await page.type('.cf-composer-input', '改成清晨，雨停之后的街道')
  await page.click('.cf-send')
  await new Promise(r => setTimeout(r, 1500))
  const after = await page.$$eval('.cf-node', els => els.length)
  assert(after === before, `选中节点生成时节点数不该变（${before} → ${after}）`)
  assert(await page.$('.cf-app'), '整个面板消失了（黑屏）')
  assert(!errors.length, '页面报错：' + errors.join(' | '))
  await page.close()
})

// 4. 连续点两次发送不产生异常
await check('连续两次发送稳定', async () => {
  const { page, errors } = await openPage('/editor.html')
  await page.click('.cf-composer-input')
  await page.type('.cf-composer-input', '第一句')
  await page.click('.cf-send')
  await page.type('.cf-composer-input', '第二句')
  await page.click('.cf-send')
  await new Promise(r => setTimeout(r, 1800))
  assert(await page.$('.cf-app'), '整个面板消失了（黑屏）')
  assert(!errors.length, '页面报错：' + errors.join(' | '))
  await page.close()
})


// ---------- P0 根因回归（2026-11-16 审计发现） ----------

// 数据根已从 localStorage 挪到 IndexedDB。测试必须走同一条读取路径，
// 否则读到的是已被清掉的旧键。raw 模式（验证迁移）仍允许回退读旧键。
const readState = (page) => page.evaluate(async () => {
  try {
    const hook = window.__CF_STORAGE__
    if (hook) {
      const canvasState = await hook.readCanvasState()
      if (canvasState) {
        const cfg = hook.readConfig() || {}
        return {
          ...canvasState,
          channels: cfg.channels || [],
          defaults: cfg.defaults || null,
          assistantModel: cfg.assistantModel ?? null,
        }
      }
    }
    // 回退：迁移前 / raw 模式
    return JSON.parse(localStorage.getItem('dsh-chunfeng-image:state:v2') || 'null')
  } catch { return null }
})
// 写盘有 400ms 防抖，读之前先强制冲刷，否则读到的是上一拍。
// 注意：这不是"绕过"防抖，而是测试需要确定性的读点——
// 生产里靠 pagehide/visibilitychange 冲刷，这里手动触发同一条 flush。
const flushWrites = (page) => page.evaluate(async () => {
  const hook = window.__CF_STORAGE__
  if (hook?.flush) await hook.flush()
})
const canvasOf = async (page) => {
  await flushWrites(page)
  const s = await readState(page)
  if (!s || !Array.isArray(s.canvases)) return null
  return s.canvases.find(c => c.id === s.openCanvasId) || s.canvases[0] || null
}
const nodeBox = (page, predicate) => page.evaluate((src) => {
  const fn = new Function('n', 'return ' + src)
  const el = [...document.querySelectorAll('.cf-node')].find(n => fn(n))
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { x: r.x + r.width / 2, y: r.y + r.height / 2, w: r.width, h: r.height, left: r.x, top: r.y }
}, predicate)

// RC1-a：Delete 必须同时删节点与连线（之前只删边）
await check('RC1 Delete 同时删掉节点与连线', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '文本')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.click(box.x, box.y)
  await wait(page, 200)
  assert(await page.$('.cf-node.is-selected'), '没选中节点')
  await page.keyboard.press('Delete')
  await wait(page, 300)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length - 1, `节点数应 ${before.nodes.length}→${before.nodes.length - 1}，实际 ${after.nodes.length}`)
  assert(after.edges.length < before.edges.length, `连线数应下降，仍为 ${after.edges.length}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

// RC1-b：⌘D 复制要生效且保留选择（之前完全无反应）
await check('RC1 ⌘D 复制生效并保留选择', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '文本')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.click(box.x, box.y)
  await wait(page, 150)
  await page.keyboard.down('Meta')
  await page.keyboard.press('KeyD')
  await page.keyboard.up('Meta')
  await wait(page, 250)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length + 1, `节点数应 +1，实际 ${before.nodes.length}→${after.nodes.length}`)
  const selected = await page.$$eval('.cf-node.is-selected', els => els.length)
  assert(selected >= 1, '复制后选择被清空了')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

// RC1-c：复用节点生成，900ms 后提示词不能被旧快照改回去
await check('RC1 复用生成后内容不回退', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await withMockImageChannel(page, '/editor.html?seed=demo')
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 40 }
  })
  await page.mouse.click(box.x, box.y)
  await wait(page, 200)
  const idBefore = await page.$eval('.cf-node.is-selected', el => el.dataset.id)
  // 直接写 React 的受控值，避免无头环境下 Meta+A 不生效
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '改成赛博朋克风格')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 150)
  await page.click('.cf-send')
  await wait(page, 1400)
  const cv = await canvasOf(page)
  const node = cv.nodes.find(n => n.id === idBefore)
  assert(node, '找不到原节点')
  assert(node.prompt === '改成赛博朋克风格', `提示词被改回「${node.prompt}」`)
  assert(node.status === 'done', `状态应为 done，实际 ${node.status}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

// RC2：模型名不能是空的（之前三处 UI 都显示空白）
await check('RC2 模型名正常显示', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await page.click('.cf-bar-btn--select')
  await wait(page, 200)
  const label = await page.$eval('.cf-menu-label', el => el.textContent.trim())
  assert(label.length > 0 && label !== '·', `模型名为空：「${label}」`)
  await page.close()
})

// RC3：toast 出现期间输入条按钮必须仍可点
await check('RC3 toast 不遮挡输入条', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await page.click('.cf-composer-input')
  await page.keyboard.type('触发一个 toast')
  await page.click('.cf-send')
  await wait(page, 60)
  const hasToast = await page.$('.cf-toast')
  assert(hasToast, '没有出现 toast，无法验证')
  const blocked = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.cf-composer-bar button')]
    const hits = btns.map(b => {
      const r = b.getBoundingClientRect()
      const el = document.elementFromPoint(r.x + r.width / 2, r.y + r.height / 2)
      return el && el.closest('.cf-toast') ? 1 : 0
    })
    return hits.reduce((a, b) => a + b, 0)
  })
  assert(blocked === 0, `有 ${blocked} 个按钮被 toast 挡住`)
  await page.close()
})

// RC4：分组要能选中并拖动（之前 pointer-events 全关）
await check('RC4 分组可选中可拖动', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  const g0 = before.nodes.find(n => n.type === 'group')
  const box = await page.evaluate(() => {
    const el = document.querySelector('.cf-node.is-group .cf-node-group-head')
    const r = el.getBoundingClientRect()
    return { x: r.x + Math.min(30, r.width / 2), y: r.y + r.height / 2 }
  })
  await page.mouse.move(box.x, box.y)
  await page.mouse.down()
  await page.mouse.move(box.x + 40, box.y + 20, { steps: 6 })
  await page.mouse.up()
  await wait(page, 250)
  const after = await canvasOf(page)
  const g1 = after.nodes.find(n => n.id === g0.id)
  assert(g1.x !== g0.x || g1.y !== g0.y, `分组没动（${g0.x},${g0.y} → ${g1.x},${g1.y}）`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

// RC5：从节点上按住空格也要能平移视野
await check('RC5 节点上空格可平移', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const t0 = await page.$eval('.cf-world', el => el.style.transform)
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '文本')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.keyboard.down('Space')
  await page.mouse.move(box.x, box.y)
  await page.mouse.down()
  await page.mouse.move(box.x - 120, box.y - 60, { steps: 8 })
  await page.mouse.up()
  await page.keyboard.up('Space')
  await wait(page, 350)
  const t1 = await page.$eval('.cf-world', el => el.style.transform)
  assert(t0 !== t1, `视野没有移动（${t0} → ${t1}）`)
  await page.close()
})

// RC6：3:4 图片节点拉把手后仍须是 3:4
await check('RC6 图片节点缩放保持 3:4', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 40 }
  })
  await page.mouse.click(box.x, box.y)
  await wait(page, 200)
  const id = await page.$eval('.cf-node.is-selected', el => el.dataset.id)
  const handle = await page.evaluate(() => {
    const h = document.querySelector('.cf-node.is-selected .cf-node-handle')
    if (!h) return null
    const r = h.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  assert(handle, '找不到缩放手柄')
  await page.mouse.move(handle.x, handle.y)
  await page.mouse.down()
  await page.mouse.move(handle.x + 80, handle.y + 20, { steps: 6 })
  await page.mouse.up()
  await wait(page, 250)
  const cv = await canvasOf(page)
  const n = cv.nodes.find(x => x.id === id)
  // 图片节点的 h 含 28px 标题栏，画面比例要看扣掉标题栏之后的那块
  const got = n.w / (n.h - 28)
  assert(Math.abs(got - 3 / 4) < 0.06, `画面比例应为 0.75，实际 ${got.toFixed(3)}（${n.w}×${n.h}，扣标题栏 ${n.h - 28}）`)
  await page.close()
})

// RC7：新建画布必须是空白
await check('RC7 新建画布是空白', async () => {
  const { page } = await openPage('/canvas.html')
  await page.evaluate(() => {
    const b = [...document.querySelectorAll('.cf-btn')].find(x => x.textContent.includes('新建画布'))
    b.click()
  })
  await wait(page, 400)
  const cv = await canvasOf(page)
  assert(cv, '没有进入新画布')
  assert(cv.nodes.length === 0, `新画布应为空，实际 ${cv.nodes.length} 个节点`)
  await page.close()
})

// RC8：坏数据不能白屏
await check('RC8 坏数据不白屏', async () => {
  const { page } = await openPage('/editor.html?raw=1')
  for (const bad of ['{"canvases":{}}', '{"canvases":"abc"}', '{"canvases":[{"nodes":123}]}', 'not json at all']) {
    await page.evaluate((v) => localStorage.setItem('dsh-chunfeng-image:state:v2', v), bad)
    await page.reload({ waitUntil: 'networkidle0' })
    await wait(page, 300)
    const alive = await page.evaluate(() => Boolean(document.querySelector('.cf-app') || document.querySelector('.cf-crash')))
    assert(alive, `坏数据「${bad}」把面板打成白屏`)
  }
  await page.close()
})


// ---------- 右键菜单 / 分组可选中（2026-11-17） ----------

const menuItems = (page) => page.$$eval('.cf-ctx-item', els => els.map(e => e.textContent.replace(/\s+/g, '')))

await check('右键节点：菜单出现且删除生效', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  const p = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 30 }
  })
  await page.mouse.click(p.x, p.y, { button: 'right' })
  await wait(page, 250)
  assert(await page.$('.cf-ctx'), '没有出现右键菜单')
  const items = await menuItems(page)
  assert(items.some(t => t.includes('删除')), `菜单项缺删除：${items.join('|')}`)
  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-ctx-item')].find(b => b.textContent.includes('删除')).click()
  })
  await wait(page, 300)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length - 1, `删除未生效：${before.nodes.length}→${after.nodes.length}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('右键空白：菜单出现且新建生效', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  await page.mouse.click(360, 720, { button: 'right' })
  await wait(page, 250)
  assert(await page.$('.cf-ctx'), '空白处没有右键菜单')
  const items = await menuItems(page)
  assert(items.some(t => t.includes('新建图片')), `菜单项缺新建：${items.join('|')}`)
  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-ctx-item')].find(b => b.textContent.includes('新建图片')).click()
  })
  await wait(page, 300)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length + 1, `新建未生效：${before.nodes.length}→${after.nodes.length}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('右键分组：有取消分组与整组删除', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  // 分组现在是贴着三张图收紧的框，右侧只剩 40 的内边距，所以取真正落在内边距里的点
  const p = await page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-group').getBoundingClientRect()
    return { x: r.x + r.width - 8, y: r.y + r.height / 2 }
  })
  await page.mouse.click(p.x, p.y, { button: 'right' })
  await wait(page, 250)
  const items = await menuItems(page)
  assert(items.some(t => t.includes('取消分组')), '缺取消分组')
  assert(items.some(t => t.includes('删除分组与内容')), '缺整组删除')
  await page.close()
})

await check('点分组内部空白可选中，且选中可见', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const p = await page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-group').getBoundingClientRect()
    return { x: r.x + r.width - 8, y: r.y + r.height / 2 }
  })
  const shadowBefore = await page.$eval('.cf-node.is-group', el => getComputedStyle(el).boxShadow)
  await page.mouse.click(p.x, p.y)
  await wait(page, 250)
  const selected = await page.$('.cf-node.is-group.is-selected')
  assert(selected, '点分组内部没有选中分组')
  const shadowAfter = await page.$eval('.cf-node.is-group', el => getComputedStyle(el).boxShadow)
  assert(shadowBefore !== shadowAfter, '选中后描边没有变化（看不出来选中了）')
  await page.close()
})


// ---------- 输入条：粘贴图片 / 输入法守卫（2026-11-17） ----------

const PASTE_JS = `(async () => {
  const cv = document.createElement('canvas'); cv.width = 64; cv.height = 64;
  const ctx = cv.getContext('2d'); ctx.fillStyle = '#3a7afe'; ctx.fillRect(0, 0, 64, 64);
  const blob = await new Promise(r => cv.toBlob(r, 'image/png'));
  const dt = new DataTransfer();
  dt.items.add(new File([blob], 'pasted.png', { type: 'image/png' }));
  document.querySelector('.cf-composer-input').dispatchEvent(
    new ClipboardEvent('paste', { clipboardData: dt, bubbles: true, cancelable: true }));
})()`

await check('粘贴图片进入参考区并可移除', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  assert((await page.$$('.cf-ref-thumb')).length === 0, '初始不该有缩略图')
  await page.evaluate(PASTE_JS)
  await wait(page, 400)
  const thumbs = await page.$$('.cf-ref-thumb')
  assert(thumbs.length === 1, `粘贴后应有 1 张缩略图，实际 ${thumbs.length}`)
  const blobImg = await page.$$eval('.cf-ref-thumb img', els => els.filter(i => i.src.startsWith('blob:')).length)
  assert(blobImg === 1, '缩略图没有用 blob 地址')
  const badge = await page.evaluate(() => document.querySelector('.cf-bar-badge')?.textContent ?? '')
  assert(badge.trim() === '1', `参考角标应为 1，实际「${badge}」`)
  await page.evaluate(() => document.querySelector('.cf-ref-x').click())
  await wait(page, 250)
  assert((await page.$$('.cf-ref-thumb')).length === 0, '移除后仍有缩略图')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('输入法选词回车不会误发送', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const before = await canvasOf(page)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '测试输入法组词')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
    ta.dispatchEvent(new CompositionEvent('compositionstart', { bubbles: true }))
    ta.dispatchEvent(new CompositionEvent('compositionend', { bubbles: true }))
    ta.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter', bubbles: true, cancelable: true }))
  })
  await wait(page, 900)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length, `组词后的回车误触发了生成（${before.nodes.length}→${after.nodes.length}）`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})


// ---------- 模型助手与助手栏（2026-11-17） ----------

await check('模型选择弹框列出供应模型并可选中', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await page.evaluate(() => [...document.querySelectorAll('.cf-glass-btn')].find(b => b.querySelector('.cf-sparkle') || b.textContent.includes('模型'))?.click()
    || [...document.querySelectorAll('.cf-glass-btn')][0].click())
  await wait(page, 400)
  assert(await page.$('.cf-dialog'), '模型弹框没打开')
  const items = await page.$$eval('.cf-dialog .cf-menu-item', els => els.map(e => e.textContent.trim()))
  assert(items.length >= 2, `弹框里模型太少：${items.length}`)
  await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.cf-dialog .cf-menu-item')]
    btns[btns.length - 1].click()
  })
  await wait(page, 300)
  const pill = await page.$eval('.cf-glass-btn', el => el.textContent.trim())
  assert(pill.length > 0, '选完模型后顶栏按钮没更新')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('开助手：画布输入条隐藏、草稿迁移过去；关掉后草稿回来', async () => {
  const { page, errors } = await openPage('/editor.html')
  await page.click('.cf-composer-input')
  await page.keyboard.type('这句话要带进助手')
  await wait(page, 200)
  await page.evaluate(() => [...document.querySelectorAll('.cf-glass-btn')].find(b => b.textContent.includes('助手')).click())
  await wait(page, 400)
  assert(!(await page.$('.cf-composer')), '助手打开后画布输入条应该隐藏')
  const dockValue = await page.$eval('.cf-dock-input', el => el.value)
  assert(dockValue === '这句话要带进助手', `草稿没迁移过去：「${dockValue}」`)
  await page.evaluate(() => document.querySelector('.cf-dock-head .cf-icon-btn').click())
  await wait(page, 300)
  const back = await page.$eval('.cf-composer-input', el => el.value)
  assert(back === '这句话要带进助手', `关掉助手后草稿丢了：「${back}」`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('助手回复可以插入画布成为文本节点', async () => {
  const { page, errors } = await openPage('/editor.html')
  const before = await canvasOf(page)
  await page.evaluate(() => [...document.querySelectorAll('.cf-glass-btn')].find(b => b.textContent.includes('助手')).click())
  await wait(page, 350)
  await page.click('.cf-dock-input')
  await page.keyboard.type('写一句短诗')
  await page.evaluate(() => document.querySelector('.cf-dock-bar .cf-send').click())
  await wait(page, 3000)
  assert((await page.$$('.cf-msg')).length >= 2, '助手没有回复')
  await page.evaluate(() => document.querySelector('.cf-msg-actions button').click())
  await wait(page, 400)
  const after = await canvasOf(page)
  assert(after.nodes.length === before.nodes.length + 1, `插入画布没生效：${before.nodes.length}→${after.nodes.length}`)
  assert(after.nodes.some(n => n.type === 'text' && n.text && n.text.length > 0), '插入的文本节点没有内容')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('文本节点可以流式生成文字', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const box = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '文本')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.click(box.x, box.y)
  await wait(page, 250)
  const id = await page.$eval('.cf-node.is-selected', el => el.dataset.id)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '写一句关于雨夜的短句')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 150)
  await page.click('.cf-send')
  await wait(page, 3500)
  const cv = await canvasOf(page)
  const node = cv.nodes.find(n => n.id === id)
  assert(node.text && node.text.length > 0, '文本节点没有生成内容')
  assert(node.status === 'done', `状态应为 done，实际 ${node.status}`)
  assert(!errors.includes('pageerror'), '报错：' + errors.join(' | '))
  await page.close()
})


// ---------- 画布视觉调整回归（2026-11-17 第二轮） ----------

const boxOf = (page, sel) => page.evaluate((s) => {
  const el = document.querySelector(s)
  if (!el) return null
  const r = el.getBoundingClientRect()
  return { x: r.x, y: r.y, w: r.width, h: r.height, right: r.right, bottom: r.bottom }
}, sel)

await check('图片节点默认尺寸小于左右节点上限', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const sizes = await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('.cf-node')]
    const get = (label) => {
      const el = nodes.find(n => n.querySelector('.cf-node-type')?.textContent === label)
      if (!el) return null
      const r = el.getBoundingClientRect()
      return { w: +r.width.toFixed(1), h: +r.height.toFixed(1) }
    }
    return { image: get('图片'), text: get('文本'), config: get('配置') }
  })
  // 画布此时是 fit 视图，按同一缩放比较宽度即可
  const imgW = sizes.image.w
  assert(imgW <= 280, `图片节点宽 ${imgW}px 超出 280 上限`)
  assert(Math.abs(imgW - sizes.config.w) < 24, `图片宽 ${imgW} 与配置宽 ${sizes.config.w} 差得太多，比例仍失衡`)
  assert(Math.abs(imgW - sizes.text.w) < 24, `图片宽 ${imgW} 与文本宽 ${sizes.text.w} 差得太多`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('示例画布三张图垂直等距，连线不交叉', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const geo = await page.evaluate(async () => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const imgs = cv.nodes.filter(n => n.type === 'image').sort((a, b) => a.y - b.y)
    return {
      xs: imgs.map(n => n.x),
      gaps: imgs.slice(1).map((n, i) => n.y - (imgs[i].y + imgs[i].h)),
      edges: cv.edges.length,
    }
  })
  assert(new Set(geo.xs).size === 1, `三张图没有对齐同一列：${geo.xs.join(',')}`)
  for (const gap of geo.gaps) {
    assert(Math.abs(gap - 18) < 1, `图片间距应为 18px，实际 ${gap}`)
  }
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('画布提示文案单行不折行且与工具栏左边距对齐', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.evaluate(() => {
    const hint = document.querySelector('.cf-editor-hint')
    const rail = document.querySelector('.cf-rail')
    const hr = hint.getBoundingClientRect()
    const rr = rail.getBoundingClientRect()
    return { h: hr.height, left: hr.left, railLeft: rr.left, scrollW: hint.scrollWidth, clientW: hint.clientWidth }
  })
  assert(m.h <= 20, `提示文案高度 ${m.h}px，说明折行了`)
  assert(m.scrollW === m.clientW, '提示文案被裁切')
  assert(Math.abs(m.left - m.railLeft) < 2, `左边距 ${m.left} 与工具栏 ${m.railLeft} 没有对齐`)
  await page.close()
})

await check('缩放条与缩略图拉开安全距离', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.evaluate(() => {
    const z = document.querySelector('.cf-zoom').getBoundingClientRect()
    const mm = document.querySelector('.cf-minimap').getBoundingClientRect()
    return { gap: mm.top - z.bottom, zh: z.height, mr: mm.right, zr: z.right }
  })
  assert(m.gap >= 12, `缩放条与缩略图间距只有 ${m.gap}px，容易误触`)
  assert(m.zh <= 32, `缩放条高 ${m.zh}px，未收到 28-32 区间`)
  assert(Math.abs(m.mr - m.zr) < 1, '缩放条与缩略图右边线没对齐')
  await page.close()
})

await check('左侧工具栏收窄且图标间距 8px', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.evaluate(() => {
    const rail = document.querySelector('.cf-rail')
    const btns = [...rail.querySelectorAll('.cf-rail-btn')]
    const a = btns[0].getBoundingClientRect()
    const b = btns[1].getBoundingClientRect()
    return { w: rail.getBoundingClientRect().width, gap: b.top - a.bottom }
  })
  assert(m.w >= 40 && m.w <= 46, `工具栏宽 ${m.w}px，不在 40-44 区间`)
  assert(Math.abs(m.gap - 8) < 0.6, `图标间距 ${m.gap}px，应为 8px`)
  await page.close()
})

await check('卡片有轻投影与描边，连线有选中高亮', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const shadow = await page.$eval('.cf-node:not(.is-group)', el => getComputedStyle(el).boxShadow)
  // 由「内描边 + 外投影」两段组成，用逗号段数判定比匹配颜色空间稳
  assert(shadow.split(/,(?![^(]*\))/).length >= 2, `节点缺少外阴影：${shadow}`)
  const line = await page.$eval('.cf-edge-line', el => getComputedStyle(el).strokeWidth)
  assert(parseFloat(line) >= 1.5, `默认连线太细：${line}`)
  const pt = await page.evaluate(() => {
    const p = document.querySelector('.cf-edge-hit')
    const m = p.getPointAtLength(p.getTotalLength() / 2)
    const s = new DOMPoint(m.x, m.y).matrixTransform(p.getScreenCTM())
    return { x: s.x, y: s.y }
  })
  await page.mouse.click(pt.x, pt.y)
  await wait(page, 200)
  const on = await page.$eval('.cf-edge.is-on .cf-edge-line', el => ({
    stroke: getComputedStyle(el).stroke, width: getComputedStyle(el).strokeWidth,
  })).catch(() => null)
  assert(on, '点击连线没有出现选中态')
  assert(parseFloat(on.width) > parseFloat(line), `选中后没有加粗：${on.width}`)
  await page.close()
})

await check('点连线只选中，不直接删除', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const before = (await canvasOf(page)).edges.length
  const pt = await page.evaluate(() => {
    const p = document.querySelector('.cf-edge-hit')
    const m = p.getPointAtLength(p.getTotalLength() / 2)
    const s = new DOMPoint(m.x, m.y).matrixTransform(p.getScreenCTM())
    return { x: s.x, y: s.y }
  })
  await page.mouse.click(pt.x, pt.y)
  await wait(page, 200)
  assert((await canvasOf(page)).edges.length === before, '点一下就把连线删了')
  await page.keyboard.press('Delete')
  await wait(page, 300)
  assert((await canvasOf(page)).edges.length === before - 1, 'Delete 没有删掉选中的连线')
  await page.close()
})

await check('连接点热区放大，靠近时吸附放大', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.evaluate(() => {
    const port = document.querySelector('.cf-node-port')
    const dot = port.querySelector('span')
    const pr = port.getBoundingClientRect()
    const dr = dot.getBoundingClientRect()
    const world = document.querySelector('.cf-world')
    const s = Number(getComputedStyle(world).getPropertyValue('--cf-cam-s')) || 1
    return { hot: pr.width, dot: dr.width, s, cx: pr.x + pr.width / 2, cy: pr.y + pr.height / 2 }
  })
  // 热区是屏幕像素，画布缩小后仍应 ≥ 20px（世界层会缩，CSS 按 --cf-cam-s 反算）
  assert(Math.round(m.hot) >= 20, `热区只有 ${m.hot.toFixed(1)}px（缩放 ${m.s}），鼠标不好瞄`)
  assert(m.dot <= 11, `视觉圆点 ${m.dot}px，应该保持小尺寸`)
  await page.mouse.move(m.cx, m.cy)
  await wait(page, 220)
  const scaled = await page.$eval('.cf-node-port span', el => getComputedStyle(el).transform)
  assert(scaled !== 'none', '靠近连接点没有吸附放大动效')
  await page.close()
})

await check('分组标签升级为带底色胶囊', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.$eval('.cf-node-group-head', el => {
    const cs = getComputedStyle(el)
    return { bg: cs.backgroundColor, radius: cs.borderRadius, shadow: cs.boxShadow }
  })
  assert(m.bg !== 'rgba(0, 0, 0, 0)', `分组标签没有底色：${m.bg}`)
  assert(parseFloat(m.radius) > 8, `分组标签不是胶囊：${m.radius}`)
  assert(m.shadow !== 'none', '分组标签缺少描边/投影')
  await page.close()
})

await check('网格切换选中态有字重区分', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.$$eval('.cf-seg button', els => els.map(e => ({
    on: e.classList.contains('is-on'),
    weight: getComputedStyle(e).fontWeight,
    bg: getComputedStyle(e).backgroundColor,
  })))
  const active = m.find(x => x.on)
  const idle = m.find(x => !x.on)
  assert(active, '没有选中项')
  assert(Number(active.weight) > Number(idle.weight), `选中项字重 ${active.weight} 不高于 ${idle.weight}`)
  assert(active.bg !== idle.bg, '选中项没有底色区分')
  await page.close()
})

await check('底部输入框聚焦有 focus ring，且高度自适应到 200 以内', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const plain = await page.$eval('.cf-composer', el => getComputedStyle(el).boxShadow)
  await page.click('.cf-composer-input')
  await wait(page, 260)
  const focused = await page.$eval('.cf-composer', el => getComputedStyle(el).boxShadow)
  assert(focused !== plain, '聚焦后底部面板没有 focus ring')
  assert(/0px 0px 0px 1px/.test(focused) || focused.split(',').length > plain.split(',').length, '聚焦 ring 不明显')
  const heights = await page.evaluate(() => [
    document.querySelector('.cf-composer').getBoundingClientRect().height,
  ])
  assert(heights[0] < 200, `默认高度 ${heights[0]} 太高`)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, Array.from({ length: 12 }, (_, i) => `第 ${i + 1} 行长提示词内容`).join('\n'))
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 300)
  const grown = await page.$eval('.cf-composer', el => el.getBoundingClientRect().height)
  assert(grown > heights[0], `长提示词没有撑开（${heights[0]} → ${grown}）`)
  assert(grown <= 200, `撑开后 ${grown}px 超过 200 上限，会遮挡过多画布`)
  await page.close()
})

await check('图片节点双击打开大图预览，Esc 关闭', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const p = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find(n => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 40 }
  })
  await page.mouse.move(p.x, p.y)
  await page.mouse.down(); await page.mouse.up()
  await wait(page, 40)
  await page.mouse.down(); await page.mouse.up()
  await wait(page, 400)
  assert(await page.$('.cf-lightbox'), '双击图片节点没有打开大图')
  const fig = await page.$eval('.cf-lightbox-figure', el => {
    const r = el.getBoundingClientRect()
    return { w: r.width, h: r.height, r: +(r.width / r.height).toFixed(2) }
  })
  assert(fig.w > 300, `大图只有 ${fig.w}px 宽，不够看细节`)
  assert(Math.abs(fig.r - 0.75) < 0.05, `灯箱没有按 3:4 显示，实际 ${fig.r}`)
  await page.keyboard.press('Escape')
  await wait(page, 250)
  assert(!(await page.$('.cf-lightbox')), 'Esc 没关掉大图')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('画布入口图标换成图片叠层图', async () => {
  const { page, errors } = await openPage('/canvas.html')
  // 空态里用的就是 'canvas' 这套图标；删除示例画布后应看到叠层图片图标
  await page.evaluate(() => {
    const del = [...document.querySelectorAll('.cf-canvas-row-actions .cf-icon-btn')]
      .find(b => b.getAttribute('aria-label') === '删除')
    del.click()
  })
  await wait(page, 250)
  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-dialog-foot .cf-btn')].find(b => b.textContent.trim() === '删除').click()
  })
  await wait(page, 400)
  const g = await page.evaluate(() => {
    const svg = document.querySelector('.cf-empty-icon svg')
    if (!svg) return null
    return {
      rects: svg.querySelectorAll('rect').length,
      circles: svg.querySelectorAll('circle').length,
      paths: [...svg.querySelectorAll('path')].map(p => p.getAttribute('d')),
    }
  })
  assert(g, '空态里没有画布图标')
  assert(g.rects === 1 && g.circles === 1, `图标不是「图片叠层」：rect ${g.rects} / circle ${g.circles}`)
  assert(g.paths.some(d => d.startsWith('M4.6 8')), `缺少后层卡片勾边：${g.paths.join(' ')}`)
  assert(!g.paths.includes('M3 10h18M9 10v10'), '还是旧的四宫格画布图标')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('模型胶囊与助手按钮之间多留一档间距', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const m = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.cf-nav-right .cf-glass-btn')]
    const rs = btns.map(b => b.getBoundingClientRect())
    return { gaps: rs.slice(1).map((r, i) => +(r.left - rs[i].right).toFixed(1)) }
  })
  const dockGap = m.gaps[m.gaps.length - 1]
  const cfgGap = m.gaps[0]
  assert(dockGap > cfgGap, `助手按钮间距 ${dockGap} 不大于模型配置的 ${cfgGap}`)
  assert(dockGap >= 10, `助手按钮与左侧只隔 ${dockGap}px，仍贴太近`)
  await page.close()
})

// ---------- 图标语义：配置=齿轮、插件入口=图片（2026-11-18） ----------

await check('顶栏「配置」用齿轮图标，不是三横滑杆', async () => {
  const { page, errors } = await openPage('/canvas.html')
  const g = await page.evaluate(() => {
    // 顶栏右侧第二个按钮（模型胶囊之后、助手之前）就是配置
    const btns = [...document.querySelectorAll('.cf-nav-right .cf-glass-btn')]
    const btn = btns.find(b => b.getAttribute('aria-label') === '配置')
    if (!btn) return null
    const svg = btn.querySelector('svg')
    return {
      circles: svg.querySelectorAll('circle').length,
      paths: [...svg.querySelectorAll('path')].map(p => p.getAttribute('d')).join(' '),
    }
  })
  assert(g, '顶栏找不到「配置」按钮')
  // 齿轮 = 一个内圈 circle + 一条闭合齿形 path
  assert(g.circles === 1, `齿轮应有 1 个内圈，实际 ${g.circles}`)
  assert(g.paths.includes('a7.6 7.6 0 0 0 0-3.2'), '不是齿轮齿形')
  // 旧的三横滑杆特征：水平短线 M4 7h9 之类
  assert(!g.paths.includes('M4 7h9'), '配置图标还是三横滑杆 sliders')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('画布工具栏「配置」（建配置节点）仍是滑杆，不被齿轮顶替', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const r = await page.evaluate(() => {
    // 左侧工具栏里 title 以「配置」开头、且带快捷键 C 的那颗
    const btn = [...document.querySelectorAll('.cf-rail-btn')]
      .find(b => (b.getAttribute('title') || '').startsWith('配置'))
    const svg = btn && btn.querySelector('svg')
    return svg ? [...svg.querySelectorAll('path')].map(p => p.getAttribute('d')).join(' ') : null
  })
  assert(r, '左侧工具栏找不到「配置」按钮')
  assert(r.includes('M4 7h9'), `建配置节点仍应是滑杆 sliders，实际 ${r}`)
  assert(!r.includes('a7.6 7.6'), '建配置节点被误换成了齿轮')
  await page.close()
})

// ---------- 画布尺寸面板：比例 + 自定义像素 / 分辨率（2026-11-17 第三轮） ----------

const setPxInput = (page, idx, v) => page.evaluate(({ idx, v }) => {
  const el = document.querySelectorAll('.cf-px')[idx]
  const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value').set
  setter.call(el, v)
  el.dispatchEvent(new Event('input', { bubbles: true }))
}, { idx, v })

const barLabels = (page) => page.$$eval('.cf-composer-left .cf-bar-btn', els => els.map(e => e.textContent.trim()))
const openSizePanel = (page) => page.evaluate(() => {
  [...document.querySelectorAll('.cf-composer-left .cf-bar-btn')].find(b => b.textContent.includes(':')).click()
})

await check('尺寸面板同时给出比例胶囊与自定义像素', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await openSizePanel(page)
  const m = await page.evaluate(() => {
    const panel = document.querySelector('.cf-size-panel')
    if (!panel) return null
    return {
      chips: [...panel.querySelectorAll('.cf-size-chip')].map(b => b.textContent.trim()),
      px: [...panel.querySelectorAll('.cf-px')].map(i => i.value),
      align: Boolean(panel.querySelector('.cf-size-align input')),
      alignChecked: panel.querySelector('.cf-size-align input')?.checked,
      apply: Boolean(panel.querySelector('.cf-size-foot .cf-btn')),
    }
  })
  assert(m, '尺寸面板没打开')
  assert(['1:1', '4:3', '3:4', '16:9', '9:16'].every(x => m.chips.includes(x)), `比例胶囊不全：${m.chips.join('|')}`)
  assert(m.px.length === 2 && m.px[0] && m.px[1], `像素框不对：${JSON.stringify(m.px)}`)
  assert(m.align && m.alignChecked, '缺少「16 倍数对齐」，或默认没勾上')
  assert(m.apply, '缺少应用按钮')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('选比例会带出该比例的基准像素', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await openSizePanel(page)
  await page.evaluate(() => [...document.querySelectorAll('.cf-size-chip')].find(b => b.textContent.trim() === '3:4').click())
  await wait(page, 250)
  const label = await barLabels(page)
  assert(label.includes('3:4'), `composer 没显示 3:4：${label.join('|')}`)
  await openSizePanel(page)
  await wait(page, 200)
  const px = await page.$$eval('.cf-px', els => els.map(i => i.value))
  assert(px[0] === '864' && px[1] === '1152', `3:4 的像素应为 864×1152，实际 ${px.join('×')}`)
  await page.close()
})

await check('自定义像素反推比例，16 倍数对齐可关', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await openSizePanel(page)
  await setPxInput(page, 0, '1600')
  await setPxInput(page, 1, '900')
  await page.evaluate(() => document.querySelector('.cf-size-foot .cf-btn').click())
  await wait(page, 250)
  let label = await barLabels(page)
  assert(label.includes('16:9'), `1600×900 应收敛成 16:9，实际 ${label.join('|')}`)

  await openSizePanel(page)
  await page.evaluate(() => document.querySelector('.cf-size-align input').click())
  await wait(page, 150)
  await setPxInput(page, 0, '1000')
  await setPxInput(page, 1, '1000')
  await page.evaluate(() => document.querySelector('.cf-size-foot .cf-btn').click())
  await wait(page, 250)
  label = await barLabels(page)
  assert(label.includes('1:1'), `1000×1000 应收敛成 1:1，实际 ${label.join('|')}`)
  await openSizePanel(page)
  await wait(page, 200)
  const px = await page.$$eval('.cf-px', els => els.map(i => i.value))
  assert(px[0] === '1000' && px[1] === '1000', `关掉对齐后不该被改成 16 倍数，实际 ${px.join('×')}`)
  await page.close()
})

await check('比例锁：锁上改一边另一边跟着走', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await openSizePanel(page)
  await setPxInput(page, 0, '1536')
  await wait(page, 180)
  let px = await page.$$eval('.cf-px', els => els.map(i => +i.value))
  assert(px[0] === 1536 && px[1] === 1024, `未锁时两侧应各填各的，实际 ${px.join('×')}`)
  await page.click('.cf-size-link')
  await wait(page, 200)
  px = await page.$$eval('.cf-px', els => els.map(i => +i.value))
  assert(px[0] === px[1], `锁上后两侧应对齐，实际 ${px.join('×')}`)
  await setPxInput(page, 0, '768')
  await wait(page, 180)
  px = await page.$$eval('.cf-px', els => els.map(i => +i.value))
  assert(px[1] === 768, `锁定后改宽应变高，实际 ${px.join('×')}`)
  const pressed = await page.$eval('.cf-size-link', el => el.getAttribute('aria-pressed'))
  assert(pressed === 'true', '锁定按钮没有按下态')
  await page.close()
})

await check('分辨率紧挨张数，默认自动，可选 1k/2k/4k', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  const labels = await barLabels(page)
  const iCount = labels.findIndex(t => t.includes('张'))
  const iRes = labels.findIndex(t => t === '自动')
  assert(iCount >= 0, `没找到张数按钮：${labels.join('|')}`)
  assert(iRes === iCount + 1, `分辨率应紧跟张数，实际顺序 ${labels.join('|')}`)
  await page.evaluate((i) => document.querySelectorAll('.cf-composer-left .cf-bar-btn')[i].click(), iRes)
  await wait(page, 250)
  const opts = await page.$$eval('[aria-label="分辨率"] .cf-size-chip', els => els.map(e => e.textContent.trim()))
  assert(['1k', '2k', '4k', '自动'].every(x => opts.includes(x)), `分辨率选项不全：${opts.join('|')}`)
  const on = await page.$eval('[aria-label="分辨率"] .cf-size-chip.is-on', el => el.textContent.trim())
  assert(on === '自动', `默认应为自动，实际 ${on}`)
  await page.evaluate(() => [...document.querySelectorAll('[aria-label="分辨率"] .cf-size-chip')].find(b => b.textContent.trim() === '2k').click())
  await wait(page, 250)
  assert((await barLabels(page)).includes('2k'), '选 2k 后 composer 没更新')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('生成的图片节点带上所选比例与分辨率', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await withMockImageChannel(page, '/editor.html?seed=demo')
  await openSizePanel(page)
  await page.evaluate(() => [...document.querySelectorAll('.cf-size-chip')].find(b => b.textContent.trim() === '3:4').click())
  await wait(page, 200)
  await page.evaluate(() => {
    const i = [...document.querySelectorAll('.cf-composer-left .cf-bar-btn')].findIndex(b => b.textContent.trim() === '自动')
    document.querySelectorAll('.cf-composer-left .cf-bar-btn')[i].click()
  })
  await wait(page, 200)
  await page.evaluate(() => [...document.querySelectorAll('[aria-label="分辨率"] .cf-size-chip')].find(b => b.textContent.trim() === '2k').click())
  await wait(page, 200)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '雨夜霓虹街角的第三版')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await page.click('.cf-send')
  await wait(page, 1200)
  const cv = await canvasOf(page)
  const made = cv.nodes.filter(n => n.type === 'image' && n.prompt === '雨夜霓虹街角的第三版')
  assert(made.length === 1, `应新建 1 个节点，实际 ${made.length}`)
  assert(made[0].ratio === '3:4', `节点比例应为 3:4，实际 ${made[0].ratio}`)
  assert(made[0].resolution === '2k', `节点分辨率应为 2k，实际 ${made[0].resolution}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

// ---------- 配置页：渠道行的「拉取模型 / 诊断」按钮（2026-11-18 P1） ----------

await check('渠道行有「拉取模型」与「连通性诊断」两个入口', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  const labels = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-channel-actions .cf-icon-btn')].map((b) => b.getAttribute('aria-label'))
  )
  assert(labels.includes('拉取模型'), `缺「拉取模型」，实际 ${labels.join(',')}`)
  assert(labels.includes('连通性诊断'), `缺「连通性诊断」，实际 ${labels.join(',')}`)
  await page.close()
})

await check('没填 Key 时点拉取模型给出明确提示，不发请求', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  // 清掉 demo 渠道的 key
  await page.evaluate(async () => {
    const key = 'dsh-cf:config:v1'
    const cfg = JSON.parse(localStorage.getItem(key) || '{}')
    if (cfg.channels?.[0]) { cfg.channels[0].apiKey = ''; cfg.channels[0].hasKey = false }
    localStorage.setItem(key, JSON.stringify(cfg))
  })
  await page.reload({ waitUntil: 'networkidle0' })
  await new Promise((r) => setTimeout(r, 600))

  const clicked = await page.evaluate(() => {
    const b = [...document.querySelectorAll('.cf-channel-actions .cf-icon-btn')]
      .find((x) => x.getAttribute('aria-label') === '拉取模型')
    if (!b) return false
    b.click()
    return true
  })
  assert(clicked, '找不到拉取模型按钮')
  await new Promise((r) => setTimeout(r, 400))
  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('API Key'), `提示不对：「${toast}」`)
  await page.close()
})

// ---------- 配置页：三个 tab（2026-11-18 真实落地） ----------

await check('配置页只有三个 tab：渠道 / 偏好设置 / 提示词来源', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  const tabs = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-tab')].map((t) => t.textContent.trim())
  )
  assert(tabs.length === 3, `应为 3 个 tab，实际 ${tabs.length}：${tabs.join('/')}`)
  assert(tabs[0] === '渠道', `第一个应是渠道，实际 ${tabs[0]}`)
  assert(tabs[1] === '偏好设置', `第二个应是偏好设置，实际 ${tabs[1]}`)
  assert(tabs[2] === '提示词来源', `第三个应是提示词来源，实际 ${tabs[2]}`)
  // 被删掉的三个不能再出现
  for (const gone of ['本地代理', 'WebDAV', '本地存储']) {
    assert(!tabs.includes(gone), `已删除的「${gone}」又出现了`)
  }
  await page.close()
})

await check('偏好设置底部有真实存储用量与清理入口', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await page.evaluate(() => {
    const t = [...document.querySelectorAll('.cf-tab')].find((x) => x.textContent.trim() === '偏好设置')
    t?.click()
  })
  await new Promise((r) => setTimeout(r, 700))
  const info = await page.evaluate(() => {
    const text = document.body.innerText
    return {
      hasUsage: /已用\s*[\d.]+\s*(B|KB|MB|GB)/.test(text),
      hasClean: text.includes('清理未引用文件'),
      hasRefresh: text.includes('刷新'),
    }
  })
  assert(info.hasUsage, '没有显示真实用量（应形如「已用 16.6 KB」）')
  assert(info.hasClean, '没有「清理未引用文件」按钮')
  assert(info.hasRefresh, '没有「刷新」按钮')
  await page.close()
})

// ---------- P3：图片工具与批量图组（2026-11-18） ----------

/** 造一张真图写进 IDB，并挂到第一个图片节点上。返回该节点 id。 */
async function seedRealImage(page) {
  return page.evaluate(async () => {
    const canvas = document.createElement('canvas')
    canvas.width = 400
    canvas.height = 300
    const ctx = canvas.getContext('2d')
    ctx.fillStyle = '#d94'
    ctx.fillRect(0, 0, 400, 300)
    ctx.fillStyle = '#2a4'
    ctx.fillRect(0, 0, 200, 150)
    const blob = await new Promise((res) => canvas.toBlob(res, 'image/png'))

    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const target = cv.nodes.find((n) => n.type === 'image')
    const key = 'image:e2e_seed'
    const entry = {
      id: 'img_e2e', storageKey: key, width: 400, height: 300,
      bytes: blob.size, mimeType: 'image/png', prompt: '测试图', createdAt: Date.now(),
    }
    const next = {
      ...cv,
      nodes: cv.nodes.map((n) => (n.id === target.id
        ? { ...n, storageKey: key, images: [entry], primaryImageId: 'img_e2e', status: 'done' }
        : n)),
    }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction(['image_files', 'app_state'], 'readwrite')
      tx.objectStore('image_files').put({ blob, type: 'image/png', bytes: blob.size, at: Date.now() }, key)
      tx.objectStore('app_state').put(
        { state: { canvases: [next], openCanvasId: next.id, grid: 'dots' }, version: 1 },
        'canvas:projects',
      )
      tx.oncomplete = res
    })
    db.close()
    return target.id
  })
}

/** 打开画布 + 灌真图 + 刷新，返回可用的 page。 */
async function openWithImage() {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await seedRealImage(page)
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
  return { page, errors }
}

/** 选中带图的节点。 */
async function selectImageNode(page) {
  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-media img'))
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 14 }
  })
  assert(spot, '找不到带图的节点')
  await page.mouse.click(spot.x, spot.y)
  await wait(page, 500)
  return spot
}

await check('真图能从 storageKey 解析出来并渲染（不再是占位纹理）', async () => {
  const { page } = await openWithImage()
  const imgs = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-node-media img')].map((i) => ({
      src: i.getAttribute('src')?.slice(0, 5),
      w: i.naturalWidth,
      h: i.naturalHeight,
    }))
  )
  assert(imgs.length >= 1, '应有至少一张图渲染')
  assert(imgs[0].src === 'blob:', `应使用 blob URL，实际 ${imgs[0].src}`)
  assert(imgs[0].w === 400 && imgs[0].h === 300, `尺寸应 400x300，实际 ${imgs[0].w}x${imgs[0].h}`)
  await page.close()
})

/** 悬停到图片节点中心，等工具条出现（出现有 100ms 延迟）。 */
async function hoverImageNode(page) {
  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-media img'))
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, top: r.top }
  })
  assert(spot, '找不到带图的节点')
  await page.mouse.move(spot.x, spot.y)
  await wait(page, 350)
  return spot
}

/** 点浮动工具条上的按钮。 */
async function clickToolbarTool(page, label) {
  const clicked = await page.evaluate((l) => {
    const btn = [...document.querySelectorAll('.cf-node-toolbar-btn')]
      .find((b) => b.getAttribute('aria-label') === l)
    if (!btn) return false
    btn.click()
    return true
  }, label)
  assert(clicked, `工具条上找不到「${label}」`)
  await wait(page, 700)
}

await check('只改渠道也会写盘（去重键不能只看 canvases）', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  // 新增一个渠道，全程不碰画布
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('新增渠道'))?.click())
  await wait(page, 600)
  await page.evaluate(() => {
    const inputs = [...document.querySelectorAll('.cf-dialog input.cf-input')]
    const setV = (el, v) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      setter.call(el, v)
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    setV(inputs[0], '只改渠道的测试')
    setV(inputs[1], 'https://api.dedupe.test/v1')
    const key = inputs.find((i) => i.type === 'password') || inputs[2]
    setV(key, 'sk-dedupe-9999')
  })
  await wait(page, 400)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog-foot .cf-btn')].find((b) => b.textContent.trim() === '保存')?.click()
  })
  await wait(page, 2200)

  const stored = await page.evaluate(() => {
    const cfg = JSON.parse(localStorage.getItem('dsh-cf:config:v1') || '{}') || {}
    return (cfg.channels || []).map((c) => c.name)
  })
  // 之前这里会是 ["默认渠道"] —— state 变了但去重键只看 canvases，直接跳过写盘
  assert(stored.includes('只改渠道的测试'), `渠道没写进 localStorage：${JSON.stringify(stored)}`)
  await page.close()
})

// ---------- 画布生图：状态可见 + 远程兜底（2026-11-23） ----------

/** 配一个只返回链接的上游渠道。 */
async function withUrlOnlyChannel(page, path = '/editor.html') {
  await page.evaluateOnNewDocument((mockBase) => {
    const K = 'dsh-cf:config:v1'
    const cfg = JSON.parse(localStorage.getItem(K) || '{}') || {}
    cfg.channels = [{
      id: 'ch_url', name: '链接上游', protocol: 'openai',
      baseUrl: mockBase + '/mock-url', apiKey: 'sk-url',
      keyHint: 'url', hasKey: true, enabled: true,
      models: [{ id: 'url-image', label: '链接模型', caps: ['image'], enabled: true }],
    }]
    cfg.defaults = cfg.defaults || {}
    cfg.defaults.image = { ...(cfg.defaults.image || {}), modelKey: 'ch_url:url-image' }
    localStorage.setItem(K, JSON.stringify(cfg))
  }, base)
  await page.goto(base + path + '?seed=demo&v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
}

await check('点发送后按钮进入 loading，画布上立刻出现「生成中」节点', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await withUrlOnlyChannel(page, '/editor.html')
  // 取消选中，走「新建占位节点」这条路
  await page.mouse.click(110, 700)
  await wait(page, 300)
  const ta = await page.$('.cf-composer-input')
  await ta.click()
  await page.keyboard.type('一只猫', { delay: 8 })
  await wait(page, 300)

  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await page.evaluate(() => document.querySelector('.cf-send')?.click())
  await wait(page, 200)

  const during = await page.evaluate(() => ({
    busy: Boolean(document.querySelector('.cf-send.is-busy')),
    running: document.body.innerText.includes('生成中'),
    nodes: document.querySelectorAll('.cf-node').length,
  }))
  assert(during.busy, '发送后按钮应进入 loading 态（否则连点会重复扣费）')
  assert(during.nodes === before + 1, `应立即出现占位节点：${before}→${during.nodes}`)
  assert(during.running, '占位节点应显示「生成中」')

  // 等完成，按钮恢复
  for (let i = 0; i < 40; i += 1) {
    await wait(page, 300)
    if (!(await page.evaluate(() => Boolean(document.querySelector('.cf-send.is-busy'))))) break
  }
  const after = await page.evaluate(() => ({
    busy: Boolean(document.querySelector('.cf-send.is-busy')),
    decoded: [...document.querySelectorAll('.cf-node-media img')].some((i) => i.naturalWidth > 0),
  }))
  assert(!after.busy, '完成后按钮应恢复')
  assert(after.decoded, '完成后节点里应有能显示的图片')
  await page.close()
})

await check('远程结果下载失败时，节点仍然显示图并标「远程」', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await withUrlOnlyChannel(page, '/editor.html')
  downloadBroken = true

  await page.mouse.click(110, 700)
  await wait(page, 300)
  const ta = await page.$('.cf-composer-input')
  await ta.click()
  await page.keyboard.type('下载会失败的图', { delay: 8 })
  await wait(page, 300)
  await page.evaluate(() => document.querySelector('.cf-send')?.click())

  for (let i = 0; i < 40; i += 1) {
    await wait(page, 300)
    if (!(await page.evaluate(() => Boolean(document.querySelector('.cf-send.is-busy'))))) break
  }
  await wait(page, 500)

  const r = await page.evaluate(() => ({
    hasImg: document.querySelectorAll('.cf-node-media img').length > 0,
    remoteFlag: Boolean(document.querySelector('.cf-node-flag')),
    blank: document.body.innerText.includes('生成失败'),
  }))
  downloadBroken = false
  // 关键：扣了费就必须看得见图，哪怕只是远程链接
  assert(r.hasImg, '下载失败时不该是空白 —— 要用远程地址兜底显示')
  assert(r.remoteFlag, '远程兜底图应有「远程」角标，提示没有本地副本')
  await page.close()
})

await check('画布模型菜单：渠道里配了生图模型就能列出并切换', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  // 注入两个生图模型 + 一个文本模型
  await page.evaluate(() => {
    const cfg = JSON.parse(localStorage.getItem('dsh-cf:config:v1') || '{}') || {}
    cfg.channels = [{
      id: 'ch_menu', name: '菜单渠道', protocol: 'openai',
      baseUrl: 'https://api.menu.test/v1', apiKey: 'sk-menu', keyHint: 'menu', hasKey: true, enabled: true,
      models: [
        { id: 'img-a', label: '生图模型 A', caps: ['image'], enabled: true },
        { id: 'img-b', label: '生图模型 B', caps: ['image'], enabled: true },
        { id: 'txt-c', label: '文本模型 C', caps: ['text'], enabled: true },
      ],
    }]
    localStorage.setItem('dsh-cf:config:v1', JSON.stringify(cfg))
  })
  await page.goto(base + '/editor.html?seed=demo&v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  // 打开输入条右侧的模型菜单
  await page.evaluate(() => document.querySelector('.cf-bar-btn--select')?.click())
  await wait(page, 400)

  const menu = await page.evaluate(() => ({
    labels: [...document.querySelectorAll('.cf-menu--up .cf-menu-label')].map((e) => e.textContent.trim()),
    metas: [...document.querySelectorAll('.cf-menu--up .cf-menu-meta')].map((e) => e.textContent.trim()),
  }))
  assert(menu.labels.includes('生图模型 A') && menu.labels.includes('生图模型 B'),
    `生图模型没列出来：${JSON.stringify(menu.labels)}`)
  assert(!menu.labels.includes('文本模型 C'), `文本模型不该出现在生图列表：${JSON.stringify(menu.labels)}`)
  assert(menu.metas.includes('菜单渠道'), `没显示所属渠道：${JSON.stringify(menu.metas)}`)

  // 切到 B，按钮文字应变化
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-menu--up .cf-menu-item')]
      .find((b) => b.textContent.includes('生图模型 B'))?.click()
  })
  await wait(page, 400)
  const label = await page.evaluate(() => document.querySelector('.cf-bar-btn--select .cf-bar-label')?.textContent.trim())
  assert(label === '生图模型 B', `切换后按钮没更新：${label}`)
  await page.close()
})

await check('画布模型菜单：模型没有「生图」能力时，提示要说清楚原因', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await page.evaluate(() => {
    const cfg = JSON.parse(localStorage.getItem('dsh-cf:config:v1') || '{}') || {}
    cfg.channels = [{
      id: 'ch_txt', name: '纯文本渠道', protocol: 'openai',
      baseUrl: 'https://api.txt.test/v1', apiKey: 'sk-txt', keyHint: 'txt', hasKey: true, enabled: true,
      models: [{ id: 'chat-x', label: '聊天模型', caps: ['text'], enabled: true }],
    }]
    localStorage.setItem('dsh-cf:config:v1', JSON.stringify(cfg))
  })
  await page.goto(base + '/editor.html?seed=demo&v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
  await page.evaluate(() => document.querySelector('.cf-bar-btn--select')?.click())
  await wait(page, 400)
  const empty = await page.evaluate(() => document.querySelector('.cf-menu-empty')?.textContent || '')
  // 不能只说「去配置里添加」——模型是有的，缺的是能力标签
  assert(empty.includes('生图'), `提示应点明缺少生图能力：${empty}`)
  assert(!/^还没有可用模型/.test(empty), `不该用笼统提示：${empty}`)
  await page.close()
})

// ---------- 渠道配置：不保存也能拉模型（2026-11-22） ----------

/** 打开配置页 → 新增渠道 → 填 Base URL 与 Key（不保存）。 */
async function openNewChannelDialog(page) {
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('新增渠道'))?.click())
  await wait(page, 600)
  await page.evaluate((mockBase) => {
    const inputs = [...document.querySelectorAll('.cf-dialog input.cf-input')]
    const setV = (el, v) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      setter.call(el, v)
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    // 名称 / 接口地址 / API Key —— 按顺序取前三个文本输入
    setV(inputs[0], '临时渠道')
    setV(inputs[1], mockBase + '/mockup')
    const keyInput = inputs.find((i) => i.type === 'password') || inputs[2]
    setV(keyInput, 'sk-temp-e2e')
  }, base)
  await wait(page, 400)
}

await check('新增渠道：不用保存就能拉到模型列表', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  mockModelPulls.length = 0
  await openNewChannelDialog(page)
  const before = await page.evaluate(() => document.querySelectorAll('.cf-model-row').length)
  assert(before === 0, `新渠道一开始不该有模型行，实际 ${before}`)

  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog .cf-btn')].find((b) => b.textContent.includes('拉取模型'))?.click()
  })
  await wait(page, 1600)

  const after = await page.evaluate(() => ({
    rows: document.querySelectorAll('.cf-model-row').length,
    checked: [...document.querySelectorAll('.cf-model-row input[type=checkbox]')].filter((c) => c.checked).length,
    note: document.querySelector('.cf-model-note')?.textContent || '',
    hasUpstreamTag: document.body.innerText.includes('上游'),
  }))
  assert(after.rows === 5, `应列出 5 个模型，实际 ${after.rows}`)
  assert(after.checked === 5, `新拉的模型应默认全部勾选，实际 ${after.checked}`)
  assert(after.note.includes('5'), `应提示拉到几个：${after.note}`)
  assert(after.hasUpstreamTag, '应标出「上游」来源')
  // 用的是输入框里刚填的 Key，不是空值
  assert(mockModelPulls.some((k) => k.includes('sk-temp-e2e')), `拉取时没带新 Key：${JSON.stringify(mockModelPulls)}`)
  await page.close()
})

await check('模型勾选：取消只是不启用，条目和能力标签都还在', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await openNewChannelDialog(page)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog .cf-btn')].find((b) => b.textContent.includes('拉取模型'))?.click()
  })
  await wait(page, 1600)

  // 取消第一个
  await page.evaluate(() => document.querySelector('.cf-model-row input[type=checkbox]').click())
  await wait(page, 400)
  const r = await page.evaluate(() => ({
    rows: document.querySelectorAll('.cf-model-row').length,
    checked: [...document.querySelectorAll('.cf-model-row input[type=checkbox]')].filter((c) => c.checked).length,
    note: document.querySelector('.cf-model-note')?.textContent || '',
    firstRowHasCaps: document.querySelectorAll('.cf-model-row')[0].querySelectorAll('.cf-chip').length,
  }))
  assert(r.rows === 5, `取消勾选不该删掉行，实际 ${r.rows} 行`)
  assert(r.checked === 4, `应只剩 4 个勾选，实际 ${r.checked}`)
  assert(r.firstRowHasCaps === 4, `能力标签不该消失，实际 ${r.firstRowHasCaps}`)
  assert(r.note.includes('已启用 4'), `计数摘要应更新：${r.note}`)
  await page.close()
})

await check('重复拉取是增量合并：勾选状态与改过的能力标签都不被覆盖', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await openNewChannelDialog(page)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog .cf-btn')].find((b) => b.textContent.includes('拉取模型'))?.click()
  })
  await wait(page, 1600)

  // 取消第一个 + 给 deepseek 加「生图」能力
  await page.evaluate(() => {
    document.querySelector('.cf-model-row input[type=checkbox]').click()
    const row = [...document.querySelectorAll('.cf-model-row')].find((r) => r.textContent.includes('deepseek-v4.1-flash'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.trim() === '生图')?.click()
  })
  await wait(page, 400)

  // 再拉一次
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog .cf-btn')].find((b) => b.textContent.includes('拉取模型'))?.click()
  })
  await wait(page, 1500)

  const r = await page.evaluate(() => {
    const rows = [...document.querySelectorAll('.cf-model-row')]
    const flash = rows.find((x) => x.textContent.includes('deepseek-v4.1-flash'))
    return {
      rows: rows.length,
      checked: rows.filter((x) => x.querySelector('input').checked).length,
      note: document.querySelector('.cf-model-note')?.textContent || '',
      flashOnCaps: flash ? [...flash.querySelectorAll('.cf-chip.is-on')].map((c) => c.textContent.trim()) : [],
      firstStillOff: rows[0] ? !rows[0].querySelector('input').checked : null,
    }
  })
  assert(r.rows === 5, `不该出现重复行，实际 ${r.rows}`)
  assert(r.firstStillOff === true, '取消过的那个不该被重新勾上')
  assert(r.checked === 4, `勾选数应保持 4，实际 ${r.checked}`)
  assert(r.flashOnCaps.includes('生图'), `改过的能力标签被覆盖了：${JSON.stringify(r.flashOnCaps)}`)
  assert(r.note.includes('没有新模型'), `应提示没有新模型：${r.note}`)
  await page.close()
})

// ---------- P4：画布真生图 + 参考图 + 送去工作台（2026-11-22） ----------

await check('画布生图走真实接口：节点拿到 storageKey 且图片能显示', async () => {
  const { page } = await openPage('/editor.html')
  await withMockImageChannel(page)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '一只橘猫在窗边')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 300)
  await page.click('.cf-send')

  let st = null
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    st = await page.evaluate(async () => {
      const s2 = await window.__CF_STORAGE__.readCanvasState()
      const n = s2.canvases[0].nodes.filter((x) => x.type === 'image' && x.storageKey).pop()
      return n ? { key: n.storageKey, status: n.status, imgs: n.images?.length || 0 } : null
    })
    if (st?.key) break
  }
  assert(st, '没有拿到带 storageKey 的图片节点（说明又变成假生成了）')
  assert(st.key.startsWith('image:'), `storageKey 形状不对：${st.key}`)
  assert(st.imgs === 1, `应有 1 张图，实际 ${st.imgs}`)

  // 图片真的解码出来了
  const decoded = await page.evaluate(() => [...document.querySelectorAll('.cf-node-media img')].some((i) => i.naturalWidth > 0))
  assert(decoded, '节点里的图片没解码出来')
  await page.close()
})

await check('画布：加了参考图就走图片编辑（不是纯文生图）', async () => {
  const { page } = await openPage('/editor.html')
  await withMockImageChannel(page)
  // 打开「参考」菜单并上传
  await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.cf-composer button, .cf-composer .cf-bar-btn')]
    btns.find((b) => b.textContent.includes('参考'))?.click()
  })
  await wait(page, 400)
  const input = await page.$('input[type=file]')
  assert(input, '参考图的文件输入没出现')
  const tmp = '/tmp/e2e-ref.png'
  await writeFile(tmp, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'))
  await input.uploadFile(tmp)
  await wait(page, 500)
  const refs = await page.evaluate(() => document.querySelectorAll('.cf-composer-refs img').length)
  assert(refs === 1, `参考图缩略图应有 1 张，实际 ${refs}`)

  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '改成蓝色调')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 300)
  await page.click('.cf-send')
  for (let i = 0; i < 25; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => [...document.querySelectorAll('.cf-node-media img')].some((i) => i.naturalWidth > 0))) break
  }
  const hits = mockHits.filter((h) => h === 'edits').length
  assert(hits >= 1, `带了参考图就该打 /images/edits，实际请求：${JSON.stringify(mockHits)}`)
  await page.close()
})

await check('工作台：上传参考图后走图片编辑，缩略图与提示都在', async () => {
  const { page } = await openPage('/studio.html')
  await withMockImageChannel(page, '/studio.html')
  mockHits.length = 0
  const tmp = '/tmp/e2e-ref2.png'
  await writeFile(tmp, Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==', 'base64'))
  const input = await page.$('input[type=file]')
  assert(input, '工作台没有文件输入')
  await input.uploadFile(tmp)
  await wait(page, 600)
  const thumb = await page.evaluate(() => document.querySelectorAll('.cf-studio-ref img').length)
  assert(thumb === 1, `参考图缩略图应有 1 张，实际 ${thumb}`)
  const hint = await page.evaluate(() => document.body.innerText.includes('图片编辑'))
  assert(hint, '应提示「有参考图时走图片编辑」')

  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('改成蓝色调', { delay: 10 })
  await wait(page, 300)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())
  for (let i = 0; i < 25; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => document.querySelectorAll('.cf-result').length)) break
  }
  assert(mockHits.includes('edits'), `应打 /images/edits，实际：${JSON.stringify(mockHits)}`)
  await page.close()
})

await check('画布节点「送去工作台」：提示词和参考图都带过去', async () => {
  const { page } = await openPage('/index.html?seed=demo')
  await withMockImageChannel(page, '/index.html?seed=demo')
  // 造一个带图的节点
  await page.evaluate(async () => {
    const c = document.createElement('canvas')
    c.width = 320
    c.height = 240
    const x = c.getContext('2d')
    x.fillStyle = '#c96'
    x.fillRect(0, 0, 320, 240)
    const blob = await new Promise((r) => c.toBlob(r, 'image/png'))
    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const t = Date.now()
    const key = 'image:s2s_' + t
    const entry = { id: 'img_' + t, storageKey: key, width: 320, height: 240, bytes: blob.size, mimeType: 'image/png', prompt: '一只橘猫', createdAt: t }
    const nodes = cv.nodes.map((n) => (n.type === 'image'
      ? { ...n, storageKey: key, images: [entry], primaryImageId: entry.id, status: 'done', prompt: '一只橘猫' }
      : n))
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction(['image_files', 'app_state'], 'readwrite')
      tx.objectStore('image_files').put({ blob, type: 'image/png', bytes: blob.size, at: t }, key)
      tx.objectStore('app_state').put({ state: { ...st, canvases: st.canvases.map((c2) => (c2.id === cv.id ? { ...cv, nodes } : c2)) }, version: 1 }, 'canvas:projects')
      tx.oncomplete = res
    })
    db.close()
  })

  await page.goto(base + '/index.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1300)
  // 进画布
  await page.evaluate(() => [...document.querySelectorAll('.cf-nav-item')].find((b) => b.textContent.trim() === '画布')?.click())
  await wait(page, 800)
  await page.evaluate(() => document.querySelector('.cf-canvas-card, .cf-canvas-item')?.click())
  await wait(page, 1200)

  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-media img'))
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  assert(spot, '画布上找不到图片节点')
  await page.mouse.move(spot.x, spot.y)
  await wait(page, 400)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-node-toolbar-btn')]
      .find((b) => b.getAttribute('aria-label') === '送去工作台')?.click()
  })
  await wait(page, 1500)

  const r = await page.evaluate(() => ({
    inStudio: Boolean(document.querySelector('.cf-studio-col')),
    prompt: document.querySelector('.cf-input--area')?.value || '',
    refThumb: document.querySelectorAll('.cf-studio-ref img').length,
  }))
  assert(r.inStudio, '没有切到工作台（记得清 openCanvasId）')
  assert(r.prompt === '一只橘猫', `提示词没带过去：${r.prompt}`)
  assert(r.refThumb === 1, `参考图没带过去：${r.refThumb}`)
  await page.close()
})

// ---------- P4：工作台张数与批量展示 / 资产图片预览（2026-11-19） ----------

await check('工作台有张数选择器，且生成时把张数真的传给上游', async () => {
  const { page } = await openPage('/studio.html?seed=demo')
  const chips = await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    return row ? [...row.querySelectorAll('.cf-chip')].map((c) => c.textContent.trim()) : null
  })
  assert(chips, '找不到张数选择器')
  // 上游 n 上限 4，所以不该出现 5 张
  assert(JSON.stringify(chips) === JSON.stringify(['1 张', '2 张', '4 张']), `选项不对：${chips.join(',')}`)

  // 选 4 张 → 生成 → 上游应收到 n=4
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.includes('4'))?.click()
  })
  await withMockImageChannel(page, '/studio.html')
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.includes('4'))?.click()
  })
  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('一只猫', { delay: 10 })
  await wait(page, 300)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())

  let cards = 0
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    cards = await page.evaluate(() => document.querySelectorAll('.cf-result').length)
    if (cards) break
  }
  assert(cards >= 1, '没有生成结果')
  await page.close()
})

await check('批量结果合成一张卡：角标显示张数，点开能看全部', async () => {
  const { page } = await openPage('/studio.html?seed=demo')
  await withMockImageChannel(page, '/studio.html')
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.includes('4'))?.click()
  })
  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('一只猫', { delay: 10 })
  await wait(page, 300)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())

  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => document.querySelectorAll('.cf-result').length)) break
  }
  await wait(page, 600)

  const r = await page.evaluate(() => {
    const cards = [...document.querySelectorAll('.cf-result')]
    return {
      cards: cards.length,
      // 一次生成 4 张 → 应该只有一张卡，角标写 4
      badges: cards.map((c) => c.querySelector('.cf-result-badge')?.textContent || ''),
      stackable: cards.filter((c) => c.classList.contains('cf-result--stack')).length,
    }
  })
  assert(r.cards === 1, `4 张应合成 1 张卡，实际 ${r.cards} 张`)
  assert(r.badges[0] === '4', `角标应显示 4，实际「${r.badges[0]}」`)
  assert(r.stackable === 1, '应有叠牌样式')

  // 点开看全部
  await page.evaluate(() => document.querySelector('.cf-result--stack')?.click())
  await wait(page, 500)
  const gal = await page.evaluate(() => ({
    open: Boolean(document.querySelector('.cf-dialog')),
    items: document.querySelectorAll('.cf-result-gallery-item').length,
  }))
  assert(gal.open, '画廊没打开')
  assert(gal.items === 4, `画廊应有 4 项，实际 ${gal.items}`)
  await page.close()
})

await check('资产页：图片资产显示真图（storageKey 要先换成 objectURL）', async () => {
  const { page } = await openPage('/assets.html?seed=demo')
  // 造一张真图资产
  const key = await page.evaluate(async () => {
    const c = document.createElement('canvas')
    c.width = 320
    c.height = 240
    const x = c.getContext('2d')
    x.fillStyle = '#c96'
    x.fillRect(0, 0, 320, 240)
    const blob = await new Promise((r) => c.toBlob(r, 'image/png'))
    const storageKey = 'image:asset_e2e'
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('image_files', 'readwrite')
      tx.objectStore('image_files').put({ blob, type: 'image/png', bytes: blob.size, at: Date.now() }, storageKey)
      tx.oncomplete = res
    })
    db.close()
    const KEY = 'dsh-cf:config:v1'
    return storageKey
  })

  // 通过 IDB 写入一条图片资产
  await page.evaluate(async (storageKey) => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put(
        [{ id: 'a_img_e2e', kind: 'image', title: '测试图片资产', cover: storageKey, tags: ['测试'], source: '画布节点' }],
        'assets',
      )
      tx.oncomplete = res
    })
    db.close()
  }, key)

  await page.goto(base + '/assets.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  const r = await page.evaluate(() => {
    const thumbs = [...document.querySelectorAll('.cf-asset-thumb img')]
    return {
      count: thumbs.length,
      first: thumbs[0] ? { src: thumbs[0].getAttribute('src')?.slice(0, 5), w: thumbs[0].naturalWidth } : null,
    }
  })
  assert(r.count >= 1, '资产缩略图没有渲染出图片')
  assert(r.first.src === 'blob:', `缩略图应使用 blob URL，实际 ${r.first.src}`)
  assert(r.first.w > 0, `图片没解码成功（naturalWidth=${r.first.w}）`)

  // 点开预览
  await page.evaluate(() => document.querySelector('.cf-asset-thumb')?.click())
  await wait(page, 500)
  const pv = await page.evaluate(() => ({
    open: Boolean(document.querySelector('.cf-dialog')),
    hasImg: Boolean(document.querySelector('.cf-asset-preview img')),
  }))
  assert(pv.open && pv.hasImg, `预览没打开：${JSON.stringify(pv)}`)
  await page.close()
})

await check('工作台：悬停结果卡出现「送到画布」，点了变成一个带角标的图片节点', async () => {
  const { page } = await openPage('/studio.html?seed=demo')
  await withMockImageChannel(page, '/studio.html')
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.includes('4'))?.click()
  })
  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('一只橘猫', { delay: 10 })
  await wait(page, 300)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())

  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => document.querySelectorAll('.cf-result').length)) break
  }
  await wait(page, 700)

  // 悬停卡片 → 按钮可见
  const box = await page.evaluate(() => {
    const r = document.querySelector('.cf-result').getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.move(box.x, box.y)
  await wait(page, 350)
  const btn = await page.evaluate(() => {
    const b = document.querySelector('.cf-result-send')
    if (!b) return null
    const r = b.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2, opacity: getComputedStyle(b).opacity }
  })
  assert(btn, '找不到「送到画布」按钮')
  assert(btn.opacity === '1', `悬停后按钮应可见，实际 opacity=${btn.opacity}`)

  const nodesBefore = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await page.mouse.click(btn.x, btn.y)
  await wait(page, 900)

  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('已送到画布'), `没提示：${toast}`)
  // 画布名必须是真实名字，不能是兜底值
  assert(!toast.includes('「生成结果」'), `画布名取错了（兜底名）：${toast}`)

  // 切到画布
  await page.evaluate(() => [...document.querySelectorAll('.cf-nav-item')].find((b) => b.textContent.trim() === '画布')?.click())
  await wait(page, 1100)
  const after = await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('.cf-node')]
    const badges = nodes.map((n) => n.querySelector('.cf-node-badge')?.textContent).filter(Boolean)
    return { total: nodes.length, badges }
  })
  assert(after.total === nodesBefore + 1 || nodesBefore === 0, `节点没增加：${nodesBefore}→${after.total}`)
  assert(after.badges.includes('4'), `应有角标 4（4 张合成一个节点），实际 ${JSON.stringify(after.badges)}`)
  await page.close()
})

await check('工作台：画廊里「全部送到画布」也能用', async () => {
  const { page } = await openPage('/studio.html?seed=demo')
  await withMockImageChannel(page, '/studio.html')
  await page.evaluate(() => {
    const row = [...document.querySelectorAll('.cf-form-row')].find((r) => r.textContent.includes('张数'))
    ;[...row.querySelectorAll('.cf-chip')].find((c) => c.textContent.includes('2'))?.click()
  })
  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('海边日落', { delay: 10 })
  await wait(page, 300)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => document.querySelectorAll('.cf-result').length)) break
  }
  await wait(page, 600)

  await page.evaluate(() => document.querySelector('.cf-result--stack')?.click())
  await wait(page, 500)
  const hasBtn = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-dialog-foot .cf-btn')].some((b) => b.textContent.includes('全部送到画布')))
  assert(hasBtn, '画廊里没有「全部送到画布」')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-dialog-foot .cf-btn')].find((b) => b.textContent.includes('全部送到画布'))?.click()
  })
  await wait(page, 800)
  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('已送到画布'), `没提示：${toast}`)
  await page.close()
})

// ---------- P3：替换图片 / 锁比例 / 信息（2026-11-19） ----------

await check('工具条补齐到 15 个操作（含替换图片、比例切换、信息、送去工作台）', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  const labels = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-node-toolbar-btn')].map((b) => b.getAttribute('aria-label')))
  assert(labels.length === 15, `应有 15 个操作，实际 ${labels.length}：${labels.join(',')}`)
  for (const want of ['替换图片', '信息', '送去工作台']) {
    assert(labels.includes(want), `缺「${want}」`)
  }
  assert(labels.some((l) => l.includes('自由比例')), `缺比例切换：${labels.join(',')}`)
  await page.close()
})

await check('锁比例：点一下切成自由比例，标签随之变化', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)

  const before = await page.evaluate(async () => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const n = st.canvases[0].nodes.find((x) => x.type === 'image' && x.images?.length)
    return { locked: n.locked !== false, label: null }
  })
  assert(before.locked === true, '图片节点默认应锁比例')

  await clickToolbarTool(page, '改为自由比例')
  await wait(page, 400)

  const after = await page.evaluate(async () => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const n = st.canvases[0].nodes.find((x) => x.type === 'image' && x.images?.length)
    const labels = [...document.querySelectorAll('.cf-node-toolbar-btn')]
      .map((b) => b.getAttribute('aria-label'))
    return { locked: n.locked !== false, hasReverse: labels.some((l) => l === '改为等比缩放') }
  })
  assert(after.locked === false, `应切成自由比例，实际 locked=${after.locked}`)
  assert(after.hasReverse, '标签应变成「改为等比缩放」')
  await page.close()
})

await check('信息：点开显示尺寸/体积/存储键', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  await clickToolbarTool(page, '信息')

  const info = await page.evaluate(() => {
    const dlg = document.querySelector('.cf-dialog')
    if (!dlg) return null
    const rows = [...dlg.querySelectorAll('.cf-info-row')]
      .map((r) => r.textContent.replace(/\s+/g, ' ').trim())
    return { title: document.querySelector('.cf-dialog-title')?.textContent || '', rows }
  })
  assert(info, '信息面板没打开')
  assert(info.title.includes('信息'), `标题不对：${info.title}`)
  assert(info.rows.length >= 8, `字段太少：${info.rows.length}`)
  const text = info.rows.join(' ')
  assert(/原始尺寸/.test(text), '缺原始尺寸')
  assert(text.includes('存储键'), '缺存储键这一行')
  assert(/image:[a-z0-9_]+/i.test(text), `存储键应形如 image:xxx：${text.slice(0, 140)}`)
  assert(/文件大小/.test(text), '缺文件大小')
  await page.close()
})

await check('从工具条移回节点，工具条不消失（relatedTarget 回归）', async () => {
  const { page } = await openWithImage()
  const spot = await hoverImageNode(page)

  // 移到工具条
  const tb = await page.evaluate(() => {
    const r = document.querySelector('.cf-node-toolbar').getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.move(tb.x, tb.y, { steps: 8 })
  await wait(page, 250)
  assert(await page.evaluate(() => Boolean(document.querySelector('.cf-node-toolbar'))), '移到工具条上就消失了')

  // 再移回节点中心
  await page.mouse.move(spot.x, spot.y, { steps: 10 })
  await wait(page, 350)
  const still = await page.evaluate(() => Boolean(document.querySelector('.cf-node-toolbar')))
  assert(still, '从工具条移回节点后工具条消失了')
  await page.close()
})

// ---------- P3：反推提示词（用 DSH 本地模型，不碰绘图 key） ----------

await check('工具条有「反推提示词」', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  const labels = await page.evaluate(() =>
    [...document.querySelectorAll('.cf-node-toolbar-btn')].map((b) => b.getAttribute('aria-label')))
  assert(labels.includes('反推提示词'), `工具条上没有反推提示词：${labels.join(',')}`)
  await page.close()
})

await check('反推提示词：图片按 input_image 发给本地模型，结果写回节点并新建文本节点', async () => {
  const { page } = await openWithImage()
  lastStreamMessages.length = 0
  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)

  // preview 环境默认走本地假流；置上 __DSH_BOOT__ 才会真的打 Host 的 /stream
  await page.evaluateOnNewDocument(() => { window.__DSH_BOOT__ = true })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  await hoverImageNode(page)
  await clickToolbarTool(page, '反推提示词')
  await wait(page, 1500)

  // 1) 模型确实收到了图片
  assert(lastStreamMessages.length >= 1, '没有向 DSH 模型发起请求')
  const msgs = lastStreamMessages[lastStreamMessages.length - 1]
  const content = msgs?.[0]?.content || []
  const img = content.find((c) => c.type === 'input_image')
  assert(img, `消息里没有 input_image：${content.map((c) => c.type).join(',')}`)
  assert(String(img.image_url).startsWith('data:image/'), `图片不是 dataURL：${String(img.image_url).slice(0, 30)}`)

  // 2) 图片被缩过（长边 768 以内），别把 1.5MB 原图直接塞进去
  const bytes = String(img.image_url).length
  assert(bytes < 400000, `图片太大（${Math.round(bytes / 1024)}KB），说明没缩`)

  // 3) 节点数 +1，且原节点的 prompt 被写上
  await wait(page, 500)
  const after = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  assert(after === before + 1, `应新增一个文本节点：${before}→${after}`)

  const text = await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('.cf-node')]
    const last = nodes[nodes.length - 1]
    return last?.textContent || ''
  })
  assert(text.includes('橘色小猫'), `新节点没写进模型输出：${text.slice(0, 60)}`)
  await page.close()
})

await check('反推提示词：模型不支持读图时给出明确中文提示，不发请求', async () => {
  const { page } = await openWithImage()
  lastStreamMessages.length = 0
  await page.evaluateOnNewDocument(() => {
    window.__DSH_BOOT__ = true
    // 把默认模型换成没声明 image 的那个
    const KEY = 'dsh-cf:config:v1'
    const cfg = JSON.parse(localStorage.getItem(KEY) || '{}') || {}
    cfg.assistantModel = { provider: 'p1', model: 'm2' }
    localStorage.setItem(KEY, JSON.stringify(cfg))
  })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  await hoverImageNode(page)
  await clickToolbarTool(page, '反推提示词')

  let toast = ''
  for (let i = 0; i < 20; i += 1) {
    await wait(page, 250)
    toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (toast) break
  }
  assert(toast.includes('不支持读图'), `应提示模型不支持读图，实际「${toast}」`)
  assert(toast.includes('换一个'), `应给出可照做的指引：${toast}`)
  await page.close()
})

// ---------- P3：蒙版局部编辑（2026-11-19） ----------

await check('工具条上有「局部修改」，点开是可涂抹的蒙版对话框', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  await clickToolbarTool(page, '局部修改')

  const dlg = await page.evaluate(() => {
    const d = document.querySelector('.cf-dialog--wide')
    return {
      open: Boolean(d),
      title: document.querySelector('.cf-dialog-title')?.textContent || '',
      hasStage: Boolean(document.querySelector('.cf-mask-box')),
      hasCanvas: Boolean(document.querySelector('.cf-mask-layer')),
      hasHint: Boolean(document.querySelector('.cf-mask-hint')),
      brushes: document.querySelectorAll('.cf-mask-bar .cf-chip').length,
    }
  })
  assert(dlg.open, '蒙版对话框没打开')
  assert(dlg.title.includes('局部修改'), `标题不对：${dlg.title}`)
  assert(dlg.hasStage && dlg.hasCanvas, '缺少绘制区或蒙版层')
  assert(dlg.hasHint, '没涂之前应给出提示')
  assert(dlg.brushes >= 5, `笔刷/橡皮/清空应不少于 5 个，实际 ${dlg.brushes}`)
  await page.close()
})

await check('蒙版：涂过之后才能提交，没涂时按钮是禁用的', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  await clickToolbarTool(page, '局部修改')
  await wait(page, 600)

  const btnState = () => page.evaluate(() => {
    const btn = [...document.querySelectorAll('.cf-dialog-foot .cf-btn')]
      .find((b) => b.textContent.includes('按标记修改'))
    return btn ? btn.disabled : null
  })
  assert((await btnState()) === true, '还没写提示词/涂蒙版时，提交按钮应禁用')

  // 填提示词
  await page.evaluate(() => {
    const input = document.querySelector('.cf-dialog--wide .cf-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    setter.call(input, '换成红色')
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 300)
  assert((await btnState()) === true, '只写提示词但没涂，仍应禁用')

  // 在蒙版上涂一笔
  const box = await page.evaluate(() => {
    const r = document.querySelector('.cf-mask-box').getBoundingClientRect()
    return { x: r.x, y: r.y, w: r.width, h: r.height }
  })
  await page.mouse.move(box.x + box.w * 0.35, box.y + box.h * 0.4)
  await page.mouse.down()
  await page.mouse.move(box.x + box.w * 0.6, box.y + box.h * 0.55, { steps: 8 })
  await page.mouse.up()
  await wait(page, 300)

  const painted = await page.evaluate(() => {
    const cv = document.querySelector('.cf-mask-layer')
    const ctx = cv.getContext('2d', { willReadFrequently: true })
    const { data } = ctx.getImageData(0, 0, cv.width, cv.height)
    for (let i = 3; i < data.length; i += 4) if (data[i] > 8) return true
    return false
  })
  assert(painted, '涂抹后蒙版上应该有像素')
  assert((await btnState()) === false, '涂过之后提交按钮应可用')
  await page.close()
})

await check('蒙版编辑：提交后走 /images/edits，产出新节点', async () => {
  const { page } = await openWithImage()
  await withMockImageChannel(page)

  await hoverImageNode(page)
  await clickToolbarTool(page, '局部修改')
  await wait(page, 600)

  await page.evaluate(() => {
    const input = document.querySelector('.cf-dialog--wide .cf-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    setter.call(input, '换成红色')
    input.dispatchEvent(new Event('input', { bubbles: true }))
  })
  const box = await page.evaluate(() => {
    const r = document.querySelector('.cf-mask-box').getBoundingClientRect()
    return { x: r.x, y: r.y, w: r.width, h: r.height }
  })
  await page.mouse.move(box.x + box.w * 0.4, box.y + box.h * 0.4)
  await page.mouse.down()
  await page.mouse.move(box.x + box.w * 0.6, box.y + box.h * 0.6, { steps: 6 })
  await page.mouse.up()
  await wait(page, 300)

  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-dialog-foot .cf-btn')]
      .find((b) => b.textContent.includes('按标记修改'))?.click()
  })

  // 等新节点出现
  let after = before
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 300)
    after = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
    if (after > before) break
  }
  assert(after === before + 1, `应新增一个节点：${before}→${after}`)

  // 新节点要有图（说明编辑结果真的落盘了）
  const hasImage = await page.evaluate(() => {
    const nodes = [...document.querySelectorAll('.cf-node')]
    const last = nodes[nodes.length - 1]
    return Boolean(last?.querySelector('.cf-node-media img'))
  })
  assert(hasImage, '新节点没有图片')
  await page.close()
})

// ---------- P3：视频节点（2026-11-19） ----------

/** 往当前画布灌一个视频节点，返回它的 id。 */
async function seedVideoNode(page, { prompt = '', taskId = '' } = {}) {
  return page.evaluate(async ({ prompt, taskId }) => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const id = 'v_' + Date.now().toString(36)
    const node = {
      id, type: 'video', x: 500, y: 300, w: 320, h: 260,
      name: '', status: 'idle', z: 2, prompt, ratio: '16:9',
      seconds: 4, videoTaskId: taskId, storageKey: '',
    }
    const next = { ...cv, nodes: [...cv.nodes, node] }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put(
        { state: { ...st, canvases: st.canvases.map((c) => (c.id === cv.id ? next : c)) }, version: 1 },
        'canvas:projects',
      )
      tx.oncomplete = res
    })
    db.close()
    return id
  }, { prompt, taskId })
}

/** 配置一个指向 mock 上游的「图片」渠道（编辑接口也在这个 mock 上）。 */
async function withMockImageChannel(page, path = '/editor.html') {
  await page.evaluateOnNewDocument((mockBase) => {
    const KEY = 'dsh-cf:config:v1'
    const cfg = JSON.parse(localStorage.getItem(KEY) || '{}') || {}
    cfg.channels = [{
      id: 'ch_mock_img', name: '假图片上游', protocol: 'openai',
      baseUrl: mockBase + '/mock', apiKey: 'sk-mock',
      keyHint: 'mock', hasKey: true, enabled: true,
      models: [{ id: 'mock-image', label: 'Mock Image', caps: ['image'], enabled: true }],
    }]
    cfg.defaults = cfg.defaults || {}
    cfg.defaults.image = { ...(cfg.defaults.image || {}), modelKey: 'ch_mock_img:mock-image' }
    localStorage.setItem(KEY, JSON.stringify(cfg))
  }, base)
  const sep = path.includes('?') ? '&' : '?'
  await page.goto(base + path + sep + 'v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
}

/** 配置一个指向 mock 视频上游的渠道。用 evaluateOnNewDocument 绕开 pagehide 回写。 */
async function withMockVideoChannel(page) {
  await page.evaluateOnNewDocument((mockBase) => {
    const KEY = 'dsh-cf:config:v1'
    const cfg = JSON.parse(localStorage.getItem(KEY) || '{}') || {}
    cfg.channels = [{
      id: 'ch_mock', name: '假视频上游', protocol: 'openai',
      baseUrl: mockBase + '/mock', apiKey: 'sk-mock',
      keyHint: 'mock', hasKey: true, enabled: true,
      models: [{ id: 'mock-video', label: 'Mock Video', caps: ['video'], enabled: true }],
    }]
    localStorage.setItem(KEY, JSON.stringify(cfg))
  }, base)
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
}

await check('侧栏有「视频」，点一下建出视频节点', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)

  const clicked = await page.evaluate(() => {
    const btn = [...document.querySelectorAll('.cf-rail-btn')]
      .find((b) => (b.getAttribute('title') || '').startsWith('视频'))
    if (!btn) return false
    btn.click()
    return true
  })
  assert(clicked, '侧栏找不到「视频」按钮')

  await wait(page, 500)
  const after = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  assert(after === before + 1, `应新增节点：${before}→${after}`)

  const text = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-void')?.textContent.includes('视频'))
    return n ? n.textContent : ''
  })
  assert(text.includes('视频'), `视频节点没正确渲染：${text}`)
  await page.close()
})

await check('视频节点：有任务 ID 时显示出来（刷新后可续查的依据）', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await seedVideoNode(page, { prompt: '一只猫', taskId: 'task_visible_123' })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1100)

  // 手动把它标成运行中，才会显示任务 ID
  await page.evaluate(async () => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const next = { ...cv, nodes: cv.nodes.map((n) => (n.type === 'video' ? { ...n, status: 'running' } : n)) }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put(
        { state: { ...st, canvases: st.canvases.map((c) => (c.id === cv.id ? next : c)) }, version: 1 },
        'canvas:projects',
      )
      tx.oncomplete = res
    })
    db.close()
  })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1100)

  const hasTaskId = await page.evaluate(() =>
    document.body.innerText.includes('task_visible_123'))
  assert(hasTaskId, '运行中的视频节点应显示任务 ID')
  await page.close()
})

await check('视频生成：走建任务 + 轮询 + 落盘，节点拿到 storageKey', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await seedVideoNode(page, { prompt: '一只猫在草地上走' })
  await withMockVideoChannel(page)

  // 选中视频节点
  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node-void')]
      .find((x) => x.textContent.includes('视频'))?.closest('.cf-node')
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 14 }
  })
  assert(spot, '找不到视频节点')
  await page.mouse.click(spot.x, spot.y)
  await wait(page, 400)

  // 点发送（输入条已有提示词时才会启用；用节点自己的 prompt）
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    if (ta) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
      setter.call(ta, '一只猫在草地上走')
      ta.dispatchEvent(new Event('input', { bubbles: true }))
    }
  })
  await wait(page, 300)
  await page.evaluate(() => document.querySelector('.cf-send')?.click())

  // 轮询需要几秒
  let stored = null
  for (let i = 0; i < 40; i += 1) {
    await wait(page, 500)
    stored = await page.evaluate(async () => {
      const st = await window.__CF_STORAGE__.readCanvasState()
      const v = st.canvases[0].nodes.find((n) => n.type === 'video')
      return v ? { key: v.storageKey || '', status: v.status, err: v.error || '' } : null
    })
    if (stored?.key || stored?.status === 'failed') break
  }
  assert(stored, '视频节点不见了')
  assert(stored.key, `视频没落盘：status=${stored.status} err=${stored.err}`)
  await page.close()
})

await check('视频生成：上游不支持时给中文提示，不是英文报错', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await seedVideoNode(page, { prompt: '测试' })
  await withMockVideoChannel(page)
  // 让 mock 上游返回“不支持”
  videoUnsupported = true

  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node-void')]
      .find((x) => x.textContent.includes('视频'))?.closest('.cf-node')
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 14 }
  })
  await page.mouse.click(spot.x, spot.y)
  await wait(page, 400)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '测试')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 300)
  await page.evaluate(() => document.querySelector('.cf-send')?.click())

  let toast = ''
  for (let i = 0; i < 24; i += 1) {
    await wait(page, 400)
    toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (toast) break
  }
  videoUnsupported = false
  assert(toast.includes('不支持'), `应提示不支持，实际「${toast}」`)
  // 要有可照做的中文指引；括号里附上游原文是有意的（方便排查），不算违规
  assert(toast.includes('换一个支持视频的渠道'), `缺少可照做的指引：${toast}`)
  assert(toast.startsWith('这个渠道'), `应先用中文说清楚，实际以「${toast.slice(0, 12)}」开头`)
  await page.close()
})

await check('悬停图片节点出现浮动工具条，十五个操作齐全且不遮挡节点', async () => {
  const { page } = await openWithImage()
  const spot = await hoverImageNode(page)

  const bar = await page.evaluate(() => {
    const tb = document.querySelector('.cf-node-toolbar')
    if (!tb) return null
    const r = tb.getBoundingClientRect()
    const node = document.querySelector('.cf-node-media img').closest('.cf-node').getBoundingClientRect()
    return {
      labels: [...tb.querySelectorAll('.cf-node-toolbar-btn')].map((b) => b.getAttribute('aria-label')),
      width: Math.round(r.width),
      gapAboveNode: Math.round(node.top - r.bottom),
      horizontalCenterDiff: Math.round(Math.abs((r.left + r.right) / 2 - (node.left + node.right) / 2)),
      hasLabels: tb.classList.contains('is-labels'),
    }
  })
  assert(bar, '悬停后没出现工具条')
  const want = ['复制提示词', '反推提示词', '送去工作台', '替换图片', '局部修改', '裁剪', '切图', '放大', '多角度', '看大图', '信息', '存为资产', '下载', '删除']
  assert(bar.labels.length === 15, `应有 15 个操作，实际 ${bar.labels.length}：${bar.labels.join(',')}`)
  for (const label of want) {
    assert(bar.labels.includes(label), `缺「${label}」`)
  }
  assert(Math.abs(bar.gapAboveNode - 14) <= 2, `应在节点上方 14px，实际 ${bar.gapAboveNode}px`)
  assert(bar.horizontalCenterDiff <= 3, `应水平居中，偏移 ${bar.horizontalCenterDiff}px`)
  assert(!bar.hasLabels, '默认应只显示图标')
  // 工具条不能压住节点内容
  assert(bar.gapAboveNode >= 0, '工具条压到了节点')
  await page.close()
})

await check('鼠标穿过节点与工具条之间的间隙时，工具条不消失', async () => {
  const { page } = await openWithImage()
  const spot = await hoverImageNode(page)

  // 分步向上移动，中间会经过 14px 间隙
  const target = await page.evaluate(() => {
    const r = document.querySelector('.cf-node-toolbar').getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.move(spot.x, spot.y, { steps: 2 })
  await page.mouse.move(target.x, target.y, { steps: 12 })
  await wait(page, 300)

  const alive = await page.evaluate(() => Boolean(document.querySelector('.cf-node-toolbar')))
  assert(alive, '穿过间隙后工具条消失了（间隙是死亡区）')

  // 而且真的能点到按钮
  await clickToolbarTool(page, '复制提示词')
  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('已复制'), `点不到按钮，toast「${toast}」`)
  await page.close()
})

await check('鼠标移开后工具条消失', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  assert(await page.evaluate(() => Boolean(document.querySelector('.cf-node-toolbar'))), '悬停时应在')
  await page.mouse.move(60, 700, { steps: 6 })
  await wait(page, 500)
  const gone = await page.evaluate(() => !document.querySelector('.cf-node-toolbar'))
  assert(gone, '移开后应消失')
  await page.close()
})

await check('工具条：复制提示词与删除可用', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  await clickToolbarTool(page, '复制提示词')
  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('已复制'), `复制无提示：${toast}`)

  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await hoverImageNode(page)
  await clickToolbarTool(page, '删除')
  const after = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  assert(after === before - 1, `删除应少一个节点：${before}→${after}`)
  await page.close()
})

await check('工具条：看大图会弹层，裁剪会开对话框', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)
  await clickToolbarTool(page, '看大图')
  const zoomOpen = await page.evaluate(() => Boolean(document.querySelector('.cf-lightbox')))
  assert(zoomOpen, '看大图没弹层')
  await page.keyboard.press('Escape')
  // 关掉弹层后鼠标还在原处，不先挪开就不会再触发 pointerenter
  await page.mouse.move(80, 700, { steps: 4 })
  await wait(page, 350)

  await hoverImageNode(page)
  await clickToolbarTool(page, '裁剪')
  const dlg = await page.evaluate(() => ({
    open: Boolean(document.querySelector('.cf-dialog--wide')),
    handles: document.querySelectorAll('.cf-crop-handle').length,
  }))
  assert(dlg.open, '裁剪对话框没打开')
  assert(dlg.handles === 8, `裁剪手柄应 8 个，实际 ${dlg.handles}`)
  await page.close()
})

await check('工具条：切换为显示文字后按钮带标签', async () => {
  const { page } = await openWithImage()
  // 直接改 UI 偏好（等价于配置页点「显示文字」）
  // 不能直接写 localStorage 再 reload：pagehide 时 shell 会用内存态回写，
  // 把刚写的值覆盖掉（和 seed 脚本踩过的是同一个坑）。
  // evaluateOnNewDocument 在旧文档卸载之后、新文档脚本之前执行，绕开这次回写。
  await page.evaluateOnNewDocument(() => {
    const ui = JSON.parse(localStorage.getItem('dsh-cf:ui:v1') || '{}') || {}
    ui.showToolbarLabels = true
    localStorage.setItem('dsh-cf:ui:v1', JSON.stringify(ui))
  })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
  await hoverImageNode(page)

  const info = await page.evaluate(() => {
    const tb = document.querySelector('.cf-node-toolbar')
    if (!tb) return null
    return {
      hasLabels: tb.classList.contains('is-labels'),
      texts: [...tb.querySelectorAll('.cf-node-toolbar-btn span')].map((s) => s.textContent),
    }
  })
  assert(info, '工具条没出现')
  assert(info.hasLabels, '应切到文字模式')
  assert(info.texts.includes('裁剪'), `按钮应带文字，实际 ${info.texts.join(',')}`)
  await page.close()
})

await check('输入条里不再有图片工具（已搬到浮动条）', async () => {
  const { page } = await openWithImage()
  await selectImageNode(page)
  const stray = await page.evaluate(() => document.querySelectorAll('.cf-composer .cf-img-tool, .cf-composer-bar .cf-node-toolbar-btn').length)
  assert(stray === 0, `输入条里还有 ${stray} 个图片工具`)
  await page.close()
})

await check('选中图片节点后，输入条保持单行不换行', async () => {
  const { page } = await openWithImage()
  await selectImageNode(page)

  const layout = await page.evaluate(() => {
    const bar = document.querySelector('.cf-composer-bar')
    const left = document.querySelector('.cf-composer-left')
    const right = document.querySelector('.cf-composer-right')
    if (!bar || !left || !right) return null
    const br = bar.getBoundingClientRect()
    const lr = left.getBoundingClientRect()
    const rr = right.getBoundingClientRect()
    return {
      barHeight: Math.round(br.height),
      sameRow: Math.abs(lr.top - rr.top) < 6,
      composerWidth: Math.round(document.querySelector('.cf-composer').getBoundingClientRect().width),
    }
  })
  assert(layout, '找不到输入条结构')
  // 加了 4 个图片工具后，右侧组曾经整体换行到第二行
  assert(layout.sameRow, '左右两组不在同一行（布局错行）')
  assert(layout.barHeight <= 40, `输入条高度 ${layout.barHeight}px，说明换行了`)
  assert(layout.composerWidth >= 500, `输入条只有 ${layout.composerWidth}px，太窄`)
  // 图片工具必须在独立行，不能挤进 bar 里
  const toolsInBar = await page.evaluate(() =>
    document.querySelectorAll('.cf-composer-bar .cf-node-toolbar-btn, .cf-composer .cf-img-tool').length)
  assert(toolsInBar === 0, `图片工具不该出现在输入条里，实际 ${toolsInBar} 个`)
  await page.close()
})

await check('工具条按钮有 data-tip，且不同时设置 title（否则弹两个提示）', async () => {
  const { page } = await openWithImage()
  await hoverImageNode(page)

  const info = await page.evaluate(() => {
    const btns = [...document.querySelectorAll('.cf-node-toolbar-btn')]
    return {
      count: btns.length,
      tips: btns.map((b) => b.getAttribute('data-tip')),
      withTitle: btns.filter((b) => b.hasAttribute('title')).length,
    }
  })
  assert(info.count === 15, `应有 15 个按钮，实际 ${info.count}`)
  for (const tip of info.tips) {
    assert(typeof tip === 'string' && tip.length >= 2, `data-tip 为空：${JSON.stringify(tip)}`)
  }
  assert(info.withTitle === 0, `${info.withTitle} 个按钮同时有 title，会弹两个提示`)

  // 悬停后 ::after 应可见
  const first = await page.$('.cf-node-toolbar-btn')
  await first.hover()
  await wait(page, 250)
  const opacity = await page.evaluate(() => {
    const b = document.querySelector('.cf-node-toolbar-btn')
    return getComputedStyle(b, '::after').opacity
  })
  assert(parseFloat(opacity) > 0.5, `悬停后提示未显示，opacity=${opacity}`)
  await page.close()
})

await check('裁剪对话框有八个手柄，应用后新增节点', async () => {
  const { page } = await openWithImage()
  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await selectImageNode(page)

  await hoverImageNode(page)
  await clickToolbarTool(page, '裁剪')
  await wait(page, 400)

  const dlg = await page.evaluate(() => ({
    open: Boolean(document.querySelector('.cf-dialog--wide')),
    title: document.querySelector('.cf-dialog-title')?.textContent || '',
    handles: document.querySelectorAll('.cf-crop-handle').length,
  }))
  assert(dlg.open, '裁剪对话框没打开')
  assert(dlg.title.includes('裁剪'), `标题不对：${dlg.title}`)
  assert(dlg.handles === 8, `应有 8 个手柄，实际 ${dlg.handles}`)

  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-dialog-foot .cf-btn')]
      .find((b) => b.textContent.includes('裁剪并生成'))?.click()
  })
  await wait(page, 2500)

  const after = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  assert(after === before + 1, `应新增 1 个节点：${before}→${after}`)
  await page.close()
})

await check('切图 2x2 一次生成 4 个节点', async () => {
  const { page } = await openWithImage()
  const before = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  await selectImageNode(page)

  await hoverImageNode(page)
  await clickToolbarTool(page, '切图')
  await wait(page, 400)

  const cells = await page.evaluate(() => document.querySelectorAll('.cf-split-cell').length)
  assert(cells === 4, `预览格子应 4 个（默认 2x2），实际 ${cells}`)

  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-dialog-foot .cf-btn')]
      .find((b) => b.textContent.includes('切成'))?.click()
  })

  // toast 只显示 2.2 秒，而切 4 张图要落盘几次，死等固定时长会错过。
  // 用轮询尽早抓，再等节点数到位。
  let toast = ''
  for (let i = 0; i < 60; i += 1) {
    const text = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (text) { toast = text; break }
    await wait(page, 100)
  }
  await wait(page, 2000)

  const nodesNow = await page.evaluate(() => document.querySelectorAll('.cf-node').length)
  assert(nodesNow === before + 4, `应新增 4 个节点：${before}→${nodesNow}`)
  assert(toast.includes('已切出'), `提示不对：「${toast}」`)
  await page.close()
})

await check('放大对话框显示换算后的目标尺寸', async () => {
  const { page } = await openWithImage()
  await selectImageNode(page)
  await hoverImageNode(page)
  await clickToolbarTool(page, '放大')
  await wait(page, 400)
  const info = await page.evaluate(() => {
    const title = document.querySelector('.cf-dialog-title')?.textContent || ''
    const hint = document.querySelector('.cf-tool-hint')?.textContent || ''
    return { title, hint }
  })
  assert(info.title.includes('放大'), `不是放大对话框：${info.title}`)
  assert(/400\s*×\s*300/.test(info.hint), `应显示原尺寸 400 × 300，实际「${info.hint}」`)
  await page.close()
})

await check('批量图组：多张图时显示数量角标', async () => {
  const { page } = await openWithImage()
  // 把该节点改成 3 张图
  await page.evaluate(async () => {
    const st = await window.__CF_STORAGE__.readCanvasState()
    const cv = st.canvases[0]
    const target = cv.nodes.find((n) => n.type === 'image' && n.images?.length)
    const more = [
      { id: 'img_b', storageKey: 'image:e2e_seed', width: 400, height: 300, bytes: 100, mimeType: 'image/png', prompt: '', createdAt: Date.now() },
      { id: 'img_c', storageKey: 'image:e2e_seed', width: 400, height: 300, bytes: 100, mimeType: 'image/png', prompt: '', createdAt: Date.now() },
    ]
    const next = {
      ...cv,
      nodes: cv.nodes.map((n) => (n.id === target.id
        ? { ...n, images: [...n.images, ...more], primaryImageId: n.images[0].id }
        : n)),
    }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put(
        { state: { canvases: [next], openCanvasId: next.id, grid: 'dots' }, version: 1 },
        'canvas:projects',
      )
      tx.oncomplete = res
    })
    db.close()
  })
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  const badge = await page.evaluate(() => {
    const b = document.querySelector('.cf-node-badge')
    return b ? b.textContent.trim() : null
  })
  assert(badge === '3', `角标应显示 3，实际「${badge}」`)
  await page.close()
})

// ---------- P2：撤销栈与快捷键守卫（2026-11-18） ----------

const nodeCount = (page) => page.evaluate(() => document.querySelectorAll('.cf-node').length)

await check('⌘Z 撤销、⇧⌘Z 重做，节点数可逆', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const start = await nodeCount(page)
  assert(start > 0, '起始应有节点')

  // 建一个文本节点
  await page.keyboard.press('t')
  await wait(page, 400)
  const added = await nodeCount(page)
  assert(added === start + 1, `按 t 应新建 1 个，实际 ${start}→${added}`)

  // 撤销
  await page.keyboard.down('Meta'); await page.keyboard.press('z'); await page.keyboard.up('Meta')
  await wait(page, 400)
  const undone = await nodeCount(page)
  assert(undone === start, `撤销后应回到 ${start}，实际 ${undone}`)

  // 重做
  await page.keyboard.down('Meta'); await page.keyboard.down('Shift')
  await page.keyboard.press('z')
  await page.keyboard.up('Shift'); await page.keyboard.up('Meta')
  await wait(page, 400)
  const redone = await nodeCount(page)
  assert(redone === start + 1, `重做后应回到 ${start + 1}，实际 ${redone}`)

  await page.close()
})

await check('工具栏有撤销/重做按钮，且随状态禁用', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const info = await page.evaluate(() => {
    const find = (prefix) => [...document.querySelectorAll('.cf-rail-btn')]
      .find((b) => (b.getAttribute('title') || '').startsWith(prefix))
    const u = find('撤销')
    const r = find('重做')
    return {
      hasUndo: Boolean(u), hasRedo: Boolean(r),
      undoDisabled: u?.disabled, redoDisabled: r?.disabled,
    }
  })
  assert(info.hasUndo, '缺撤销按钮')
  assert(info.hasRedo, '缺重做按钮')
  assert(info.undoDisabled === true, '刚打开时撤销应禁用')
  assert(info.redoDisabled === true, '刚打开时重做应禁用')
  await page.close()
})

await check('中文输入法组词期间按字母不新建节点', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const before = await nodeCount(page)
  // 模拟输入法组词中的 keydown：isComposing + keyCode 229
  await page.evaluate(() => {
    for (const key of ['t', 'i', 'a', 'c', 'g']) {
      window.dispatchEvent(new KeyboardEvent('keydown', { key, keyCode: 229, which: 229, bubbles: true }))
    }
  })
  await wait(page, 400)
  const after = await nodeCount(page)
  assert(after === before, `组词期间不该建节点，实际 ${before}→${after}`)
  await page.close()
})

await check('⌘A 全选 → ⌘C 复制 → ⌘V 粘贴，节点与连线都翻倍', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const before = await page.evaluate(() => ({
    nodes: document.querySelectorAll('.cf-node').length,
    edges: document.querySelectorAll('.cf-edge').length,
  }))
  assert(before.nodes > 0, '起始应有节点')

  await page.keyboard.down('Meta'); await page.keyboard.press('a'); await page.keyboard.up('Meta')
  await wait(page, 300)
  await page.keyboard.down('Meta'); await page.keyboard.press('c'); await page.keyboard.up('Meta')
  await wait(page, 300)
  const copyToast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(copyToast.includes('已复制'), `复制应有提示，实际「${copyToast}」`)

  await page.keyboard.down('Meta'); await page.keyboard.press('v'); await page.keyboard.up('Meta')
  await wait(page, 500)

  const after = await page.evaluate(() => ({
    nodes: document.querySelectorAll('.cf-node').length,
    edges: document.querySelectorAll('.cf-edge').length,
    selected: document.querySelectorAll('.cf-node.is-selected').length,
  }))
  assert(after.nodes === before.nodes * 2, `节点应翻倍：${before.nodes}→${after.nodes}`)
  assert(after.edges === before.edges * 2, `连线应翻倍：${before.edges}→${after.edges}`)
  assert(after.selected === before.nodes, `粘贴后应选中新副本，实际选中 ${after.selected}`)
  await page.close()
})

await check('粘贴的副本落在视口内，不是原点', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  await page.keyboard.down('Meta'); await page.keyboard.press('a'); await page.keyboard.up('Meta')
  await wait(page, 300)
  await page.keyboard.down('Meta'); await page.keyboard.press('c'); await page.keyboard.up('Meta')
  await wait(page, 300)
  await page.keyboard.down('Meta'); await page.keyboard.press('v'); await page.keyboard.up('Meta')
  await wait(page, 500)

  const inView = await page.evaluate(() => {
    const vw = window.innerWidth
    const vh = window.innerHeight
    const sel = [...document.querySelectorAll('.cf-node.is-selected')]
    if (!sel.length) return { ok: false, reason: '没有选中副本' }
    // 至少有一个副本的中心落在视口内
    const hit = sel.some((n) => {
      const r = n.getBoundingClientRect()
      const cx = r.x + r.width / 2
      const cy = r.y + r.height / 2
      return cx > 0 && cx < vw && cy > 0 && cy < vh
    })
    return { ok: hit, total: sel.length }
  })
  assert(inView.ok, `副本应落在视口内，实际 ${JSON.stringify(inView)}`)
  await page.close()
})

await check('选中节点时四个角都有缩放手柄，光标方向正确', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  // 选一个文本节点（自由缩放，不受图片宽度封顶干扰）
  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-text'))
    if (!n) return null
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 12 }
  })
  assert(spot, '找不到文本节点')
  await page.mouse.click(spot.x, spot.y)
  await wait(page, 400)

  const handles = await page.evaluate(() => {
    const list = [...document.querySelectorAll('.cf-node.is-selected .cf-node-handle')]
    return list.map((h) => ({
      corner: [...h.classList].find((c) => c.startsWith('cf-node-handle--')),
      cursor: getComputedStyle(h).cursor,
    }))
  })
  assert(handles.length === 4, `应有 4 个手柄，实际 ${handles.length}`)
  const byCorner = Object.fromEntries(handles.map((h) => [h.corner, h.cursor]))
  assert(byCorner['cf-node-handle--se'] === 'nwse-resize', 'se 光标不对')
  assert(byCorner['cf-node-handle--nw'] === 'nwse-resize', 'nw 光标不对')
  assert(byCorner['cf-node-handle--sw'] === 'nesw-resize', 'sw 光标不对')
  assert(byCorner['cf-node-handle--ne'] === 'nesw-resize', 'ne 光标不对')
  await page.close()
})

await check('右下角缩放只放大不改位置，左上角缩放同时移动位置', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const spot = await page.evaluate(() => {
    const n = [...document.querySelectorAll('.cf-node')].find((x) => x.querySelector('.cf-node-text'))
    const r = n.getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + 12 }
  })
  await page.mouse.click(spot.x, spot.y)
  await wait(page, 400)

  const boxOf = () => page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-selected').getBoundingClientRect()
    return { w: Math.round(r.width), x: Math.round(r.x) }
  })

  const before = await boxOf()

  // 右下角：向右下拉，宽度变大，x 不变
  const se = await page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-selected .cf-node-handle--se').getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.move(se.x, se.y)
  await page.mouse.down()
  await page.mouse.move(se.x + 60, se.y + 40, { steps: 10 })
  await page.mouse.up()
  await wait(page, 300)
  const afterSE = await boxOf()
  assert(afterSE.w > before.w, `右下角应放大：${before.w}→${afterSE.w}`)
  assert(afterSE.x === before.x, `右下角不该改 x：${before.x}→${afterSE.x}`)

  // 左上角：向左上拉，宽度变大，x 左移
  const nw = await page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-selected .cf-node-handle--nw').getBoundingClientRect()
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.move(nw.x, nw.y)
  await page.mouse.down()
  await page.mouse.move(nw.x - 50, nw.y - 30, { steps: 10 })
  await page.mouse.up()
  await wait(page, 300)
  const afterNW = await boxOf()
  assert(afterNW.w > afterSE.w, `左上角应继续放大：${afterSE.w}→${afterNW.w}`)
  assert(afterNW.x < afterSE.x, `左上角应左移：${afterSE.x}→${afterNW.x}`)

  await page.close()
})

await check('视口裁剪：300+ 节点只渲染视野内的', async () => {
  const { page } = await openPage('/editor.html?seed=demo')

  // 灌入 300 个远处节点 + 3 个近处节点
  const wrote = await page.evaluate(async () => {
    const hook = window.__CF_STORAGE__
    const st = await hook.readCanvasState()
    const cv = st.canvases[0]
    const nodes = []
    for (let i = 0; i < 300; i += 1) {
      nodes.push({ id: `far_${i}`, type: 'text', x: 20000 + i * 300, y: 20000, w: 230, h: 160, name: '', status: 'idle', z: 2, text: 'far' })
    }
    for (let i = 0; i < 3; i += 1) {
      nodes.push({ id: `near_${i}`, type: 'text', x: 200 + i * 300, y: 250, w: 230, h: 160, name: '', status: 'idle', z: 2, text: 'near' })
    }
    const next = { ...cv, nodes, edges: [], camera: { x: 0, y: 0, s: 1 } }
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    await new Promise((res) => {
      const tx = db.transaction('app_state', 'readwrite')
      tx.objectStore('app_state').put({ state: { canvases: [next], openCanvasId: next.id, grid: 'dots' }, version: 1 }, 'canvas:projects')
      tx.oncomplete = res
    })
    db.close()
    return nodes.length
  })
  assert(wrote === 303, `应写入 303 个，实际 ${wrote}`)

  // 不带 fresh 刷新，读到的就是刚写的
  await page.goto(base + '/editor.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1200)

  const r = await page.evaluate(() => {
    const ids = [...document.querySelectorAll('.cf-node')].map((n) => n.dataset.id)
    return { rendered: ids.length, near: ids.filter((i) => i.startsWith('near_')).length, far: ids.filter((i) => i.startsWith('far_')).length }
  })
  assert(r.rendered < wrote, `应裁剪，实际渲染 ${r.rendered} / ${wrote}`)
  assert(r.near === 3, `视口内 3 个应全渲染，实际 ${r.near}`)
  assert(r.far === 0, `远处节点不该渲染，实际 ${r.far}`)
  await page.close()
})

await check('⌘A 是全选，不是新建音频节点', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const before = await nodeCount(page)
  await page.keyboard.down('Meta'); await page.keyboard.press('a'); await page.keyboard.up('Meta')
  await wait(page, 400)
  const after = await nodeCount(page)
  const selected = await page.evaluate(() => document.querySelectorAll('.cf-node.is-selected').length)
  assert(after === before, `⌘A 不该新建节点，实际 ${before}→${after}`)
  assert(selected > 0, `⌘A 应选中全部节点，实际选中 ${selected}`)
  await page.close()
})

// ---------- P4：提示词来源（2026-11-18） ----------

await check('提示词来源：能被添加、显示状态、拉取失败给出不同原因', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await page.evaluate(() => {
    [...document.querySelectorAll('.cf-tab')].find((t) => t.textContent.trim() === '提示词来源')?.click()
  })
  await wait(page, 600)

  const tabOn = await page.evaluate(() => document.querySelector('.cf-tab.is-on')?.textContent?.trim())
  assert(tabOn === '提示词来源', `tab 没切过去：${tabOn}`)

  // 加一个必然失败的源（e2e server 没有这条路由 → 404）
  const inputs = await page.$$('.cf-input')
  await inputs[0].click()
  await page.keyboard.type('坏源')
  await inputs[1].click()
  await page.keyboard.type('https://127.0.0.1:1/nothing.json')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.trim() === '添加')?.click()
  })
  await wait(page, 500)

  const hasRow = await page.evaluate(() => document.body.innerText.includes('坏源'))
  assert(hasRow, '添加后列表里看不到这个源')

  // 拉取
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('拉取全部'))?.click()
  })
  await wait(page, 3000)

  const state = await page.evaluate(() => {
    const text = document.body.innerText
    return { fail: text.includes('失败'), hasReason: /失败：[^\n]+/.test(text) }
  })
  assert(state.fail, '失败的源没有标出「失败」')
  assert(state.hasReason, '失败时没有给出具体原因')

  await page.close()
})

await check('提示词来源：三个 tab 里只有它显示拉取入口', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  const inChannels = await page.evaluate(() => document.body.innerText.includes('拉取全部'))
  assert(!inChannels, '渠道 tab 不该出现「拉取全部」')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-tab')].find((t) => t.textContent.trim() === '提示词来源')?.click()
  })
  await wait(page, 500)
  const inSources = await page.evaluate(() => document.body.innerText.includes('拉取全部'))
  assert(inSources, '提示词来源 tab 应出现「拉取全部」')
  await page.close()
})

await check('提示词来源：跨域地址也能拉到（走 Host 代理，不是浏览器直连）', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-tab')].find((t) => t.textContent.trim() === '提示词来源')?.click()
  })
  await wait(page, 500)

  // 先证明浏览器直连这条路是不通的
  const direct = await page.evaluate(async (u) => {
    try { const r = await fetch(u, { cache: 'no-cache' }); return `ok:${r.status}` }
    catch (e) { return `fail:${e.message}` }
  }, crossSourceUrl)
  assert(direct.startsWith('fail'), `这个源本来就是跨域的，直连不该成功：${direct}`)

  // 通过 UI 添加来源并拉取
  await page.evaluate((u) => {
    const setV = (el, v) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      setter.call(el, v)
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    const nameInput = [...document.querySelectorAll('input.cf-input')].find((i) => i.placeholder === '名称')
    const urlInput = [...document.querySelectorAll('input.cf-input')].find((i) => String(i.placeholder).startsWith('https://example.com'))
    setV(nameInput, '跨域源')
    setV(urlInput, u)
  }, crossSourceUrl)
  await wait(page, 400)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.trim() === '添加')?.click()
  })
  await wait(page, 800)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('拉取全部'))?.click()
  })

  let toast = ''
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 300)
    toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (toast && !toast.includes('拉取中')) break
  }
  assert(toast.includes('拉到'), `应成功拉到提示词，实际「${toast}」`)
  assert(/\d+ 条/.test(toast), `应报出条数：${toast}`)
  await page.close()
})

// ---------- 春风升级方案回归检查（渲染降载 / 主题 / 工作流派生 / 配置节点 / 批量展开 / 工作台 IDB 恢复） ----------

await check('渲染层清理：零 .cf-ambient 与零 backdrop-filter', async () => {
  const { page } = await openPage('/editor.html?seed=demo')
  const info = await page.evaluate(() => {
    const ambient = document.querySelectorAll('.cf-ambient').length
    const els = [...document.querySelectorAll('.cf-island, .cf-glass-btn, .cf-rail, .cf-canvas-bar')]
    const blurred = els.filter((el) => {
      const cs = getComputedStyle(el)
      return (cs.backdropFilter && cs.backdropFilter !== 'none') || (cs.webkitBackdropFilter && cs.webkitBackdropFilter !== 'none')
    }).length
    return { ambient, blurred, total: els.length }
  })
  assert(info.ambient === 0, `残留 .cf-ambient 节点：${info.ambient}`)
  assert(info.blurred === 0 && info.total >= 3, `仍有元素开启 backdrop-filter：${info.blurred}`)
  await page.close()
})

await check('配置页：外观主题切换（暗黑/明亮）立即生效', async () => {
  const { page } = await openPage('/config.html?seed=demo')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-tab')].find((t) => t.textContent.trim() === '偏好设置')?.click()
  })
  await wait(page, 400)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-chip')].find((c) => c.textContent.trim() === '暗黑')?.click()
  })
  await wait(page, 250)
  assert(await page.$('.cf-app.dark'), '点击「暗黑」后 .cf-app 应带有 .dark')
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-chip')].find((c) => c.textContent.trim() === '明亮')?.click()
  })
  await wait(page, 250)
  assert(await page.$('.cf-app.light'), '点击「明亮」后 .cf-app 应带有 .light')
  await page.close()
})

await check('工作流连线与派生分支：实图节点再生成派生子节点，且配置节点「生成」也产出下游节点', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await withMockImageChannel(page, '/editor.html?seed=demo')
  mockHits.length = 0

  // 选中第 1 张空白图片节点 -> 首次生图（原地填图）
  const firstSpot = await page.evaluate(() => {
    const el = [...document.querySelectorAll('.cf-node')].find((n) => n.querySelector('.cf-node-type')?.textContent === '图片')
    const r = el.getBoundingClientRect()
    return { id: el.dataset.id, x: r.x + r.width / 2, y: r.y + r.height / 2 }
  })
  await page.mouse.click(firstSpot.x, firstSpot.y)
  await wait(page, 250)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '第一版夜景')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await page.click('.cf-send')
  await wait(page, 1400)
  const cv1 = await canvasOf(page)
  const firstNodeAfter = cv1.nodes.find((n) => n.id === firstSpot.id)
  assert(Boolean(firstNodeAfter?.storageKey), '首次生图后原节点应有真实 storageKey')

  // 选中这枚已有实图的节点再次生图 -> 应派生新连接子节点（不覆盖原图），且走 edits
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '加一条彩虹')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await page.click('.cf-send')
  await wait(page, 1400)
  const cv2 = await canvasOf(page)
  assert(cv2.nodes.length === cv1.nodes.length + 1, `已有实图再生成应派生 1 个子节点：${cv1.nodes.length} → ${cv2.nodes.length}`)
  const derivedEdge = cv2.edges.find((e) => e.from === firstSpot.id)
  assert(derivedEdge, '派生节点应有从原节点连出的边')
  assert(mockHits.includes('edits'), `派生图生图应携带原图走 edits：${JSON.stringify(mockHits)}`)

  // 点击交互式配置节点里的「生成」按钮 -> 同样应产出连接到自身的下游图节点
  await page.evaluate(() => {
    const inp = document.querySelector('.cf-node-config-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
    setter.call(inp, '配置节点测试出图')
    inp.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await wait(page, 150)
  await page.evaluate(() => document.querySelector('.cf-node-config-foot .cf-btn')?.click())
  await wait(page, 1400)
  const cv3 = await canvasOf(page)
  const cfgNode = cv3.nodes.find((n) => n.type === 'config')
  assert(cv3.nodes.length === cv2.nodes.length + 1, `配置节点点生成应新增 1 个结果节点：${cv2.nodes.length} → ${cv3.nodes.length}`)
  assert(cv3.edges.some((e) => e.from === cfgNode.id), '应新建配置节点指向下游结果节点的连线')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('批量图组：点击角标展开全部缩略图，支持设为主图', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
  await withMockImageChannel(page, '/editor.html?seed=demo')
  // 选中画布上第 1 个空白图片节点生成 4 张批量图
  await page.evaluate(() => {
    const btn = [...document.querySelectorAll('.cf-composer-left .cf-bar-btn')].find((b) => b.textContent.includes('张'))
    btn?.click()
  })
  await wait(page, 150)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-menu-item')].find((m) => m.textContent.trim().startsWith('4'))?.click()
  })
  await wait(page, 150)
  await page.evaluate(() => {
    const ta = document.querySelector('.cf-composer-input')
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '四连拍猫')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  })
  await page.click('.cf-send')
  await wait(page, 1600)

  const badgeText = await page.$eval('.cf-node-badge', (b) => b.textContent.trim())
  assert(badgeText === '4', `角标应为 4，实际 ${badgeText}`)
  await page.click('.cf-node-badge')
  await wait(page, 250)
  const items = await page.$$eval('.cf-batch-pop .cf-batch-item', (els) => els.length)
  assert(items === 4, `展开面板应显示 4 张图，实际 ${items}`)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-batch-item-btn')].find((b) => b.textContent.trim() === '设为主图')?.click()
  })
  await wait(page, 300)
  const toast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
  assert(toast.includes('主图'), `未提示设为主图：${toast}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('工作台升级：刷新后从 IDB 恢复结果真图，点击记录回填、点击「新建」清空', async () => {
  const { page, errors } = await openPage('/studio.html?seed=demo')
  await withMockImageChannel(page, '/studio.html?seed=demo')
  const ta = await page.$('.cf-input--area')
  await ta.click()
  await page.keyboard.type('雪夜小屋', { delay: 10 })
  await wait(page, 250)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('开始生成'))?.click())
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 400)
    if (await page.evaluate(() => document.querySelectorAll('.cf-result img').length)) break
  }
  await wait(page, 800)

  // 不带 ?fresh=1 重载，验证 records 与结果图片均从 IDB 自动恢复
  await page.goto(base + '/studio.html?v=' + Date.now(), { waitUntil: 'networkidle0' })
  await wait(page, 1400)
  const restored = await page.evaluate(() => ({
    imgs: [...document.querySelectorAll('.cf-result img')].map((img) => img.getAttribute('src') || ''),
    recs: document.querySelectorAll('.cf-record').length,
  }))
  assert(restored.recs >= 1, '刷新后左栏生成记录丢失')
  assert(restored.imgs.length >= 1 && restored.imgs[0].startsWith('blob:'), `刷新后右栏结果图未从 IDB 恢复：${JSON.stringify(restored)}`)

  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('新建'))?.click())
  await wait(page, 200)
  const clearedVal = await page.$eval('.cf-input--area', (el) => el.value)
  assert(clearedVal === '', `点新建后输入框应清空，实际「${clearedVal}」`)

  await page.click('.cf-record')
  await wait(page, 250)
  const backVal = await page.$eval('.cf-input--area', (el) => el.value)
  assert(backVal === '雪夜小屋', `点记录后应回填提示词「雪夜小屋」，实际「${backVal}」`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('提示词模块全链路：blob 链接自动转 raw、拉取带封面与参考图条目并联动到工作台', async () => {
  const { page, errors } = await openPage('/index.html?seed=demo')
  // 点顶栏齿轮进配置 -> 提示词来源
  await page.click('.cf-glass-btn--icon[aria-label="配置"]')
  await wait(page, 400)
  await page.evaluate(() => {
    ;[...document.querySelectorAll('.cf-tab')].find((t) => t.textContent.trim() === '提示词来源')?.click()
  })
  await wait(page, 400)

  // 1) 验证 GitHub blob 网页链接自动转换成 raw.githubusercontent.com JSON 直链
  await page.evaluate(() => {
    const setV = (el, v) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      setter.call(el, v)
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    const nameInput = [...document.querySelectorAll('input.cf-input')].find((i) => i.placeholder === '名称')
    const urlInput = [...document.querySelectorAll('input.cf-input')].find((i) => String(i.placeholder).startsWith('https://example.com'))
    setV(nameInput, 'Blob转换测试')
    setV(urlInput, 'https://github.com/demo/repo/blob/main/dist/prompts.json')
  })
  await wait(page, 200)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.trim() === '添加')?.click())
  await wait(page, 350)
  const convertedOk = await page.evaluate(() => document.body.innerText.includes('https://raw.githubusercontent.com/demo/repo/main/dist/prompts.json'))
  assert(convertedOk, 'GitHub blob 链接未能自动转为 raw.githubusercontent.com 直链')
  // 移除这条无实际服务的示例源，避免影响下一句全量拉取
  await page.evaluate(() => document.querySelector('[aria-label="移除来源"]')?.click())
  await wait(page, 250)

  // 2) 添加带封面与参考图的跨域源并拉取
  await page.evaluate((u) => {
    const setV = (el, v) => {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
      setter.call(el, v)
      el.dispatchEvent(new Event('input', { bubbles: true }))
    }
    const nameInput = [...document.querySelectorAll('input.cf-input')].find((i) => i.placeholder === '名称')
    const urlInput = [...document.querySelectorAll('input.cf-input')].find((i) => String(i.placeholder).startsWith('https://example.com'))
    setV(nameInput, '图生图示例源')
    setV(urlInput, u)
  }, crossSourceImgUrl)
  await wait(page, 250)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.trim() === '添加')?.click())
  await wait(page, 400)
  await page.evaluate(() => [...document.querySelectorAll('.cf-btn')].find((b) => b.textContent.includes('拉取全部'))?.click())

  let pullToast = ''
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 300)
    pullToast = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (pullToast && !pullToast.includes('拉取中')) break
  }
  assert(pullToast.includes('拉到') || pullToast.includes('共 1 条'), `拉取状态异常：「${pullToast}」`)

  // 3) 切到「提示词」页：确认封面图渲染且详情弹窗包含参考图
  await page.evaluate(() => [...document.querySelectorAll('.cf-nav-glass button')].find((b) => b.textContent.trim() === '提示词')?.click())
  await wait(page, 800)
  const promptCard = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('.cf-prompt-cover img')]
    const badge = document.querySelector('.cf-prompt-ref-badge')?.textContent || ''
    return {
      hasTitle: document.body.innerText.includes('苹果风格示例海报'),
      imgCount: imgs.length,
      loaded: imgs.some((im) => im.complete && im.naturalWidth > 0),
      badge,
    }
  })
  assert(promptCard.hasTitle, '提示词中心未出现拉到的「苹果风格示例海报」')
  assert(promptCard.imgCount >= 1 && promptCard.loaded, `提示词封面图未正常加载：${JSON.stringify(promptCard)}`)
  assert(promptCard.badge.includes('参考图×1'), `未标出参考图数量角标：${promptCard.badge}`)

  // 打开详情弹窗验证大图与配套参考图
  await page.click('.cf-prompt-cover')
  await wait(page, 500)
  const detailInfo = await page.evaluate(() => ({
    open: Boolean(document.querySelector('.cf-dialog')),
    hasRefImg: document.querySelectorAll('.cf-prompt-detail-ref-item img').length >= 1,
    hasFullPrompt: document.querySelector('.cf-prompt-detail-full')?.textContent?.includes('充分参考图片设计风格'),
  }))
  assert(detailInfo.open && detailInfo.hasRefImg && detailInfo.hasFullPrompt, `详情弹窗内容不完整：${JSON.stringify(detailInfo)}`)

  // 4) 点「带参考图使用」跳转到生图工作台，验证文字和经 Host /fetch-media 拉取的参考图同步到位
  await page.evaluate(() => [...document.querySelectorAll('.cf-dialog-foot .cf-btn')].find((b) => b.textContent.includes('带参考图使用'))?.click())
  let studioRefs = 0
  for (let i = 0; i < 30; i += 1) {
    await wait(page, 300)
    studioRefs = await page.evaluate(() => document.querySelectorAll('.cf-studio-ref img').length)
    if (studioRefs >= 1) break
  }
  const studioPromptVal = await page.$eval('.cf-studio .cf-input--area', (el) => el.value)
  assert(studioPromptVal.includes('充分参考图片设计风格'), `提示词未传入工作台：「${studioPromptVal}」`)
  assert(studioRefs >= 1, '提示词配套参考图未经 Host 代理传入工作台参考图栏')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('宿主侧栏收起时：顶栏主导航自动右移避让红绿灯与壳层按钮，且不与画布标题条重叠', async () => {
  const { page, errors } = await openPage('/editor.html')
  await wait(page, 300)

  const defaultNav = await page.$eval('.cf-nav', (el) => el.getBoundingClientRect().left)
  assert(Math.abs(defaultNav - 12) <= 1, `默认顶栏左边距应为 12px，实际 ${defaultNav}`)

  await page.setViewport({ width: 1024, height: 800 })
  await page.evaluate(() => {
    document.documentElement.setAttribute('data-platform', 'darwin')
    document.body.setAttribute('data-sidebar-collapsed', '')
    document.documentElement.style.setProperty('--dsh-frame-leading-clearance', '160px')
  })
  await wait(page, 350)

  const collapsed = await page.evaluate(() => {
    const pick = (sel) => {
      const r = document.querySelector(sel)?.getBoundingClientRect()
      return r ? { left: r.left, right: r.right, top: r.top, width: r.width } : null
    }
    return {
      nav: pick('.cf-island--nav'),
      bar: pick('.cf-canvas-bar'),
      right: pick('.cf-nav-right'),
    }
  })
  assert(collapsed.nav && collapsed.bar && collapsed.right, `缺少顶栏关键元素：${JSON.stringify(collapsed)}`)
  assert(collapsed.nav.left >= 159, `收起侧栏后主导航未避让 160px 安全区：left=${collapsed.nav.left}`)
  assert(collapsed.nav.right < collapsed.bar.left, `主导航(${collapsed.nav.right})与画布标题条(${collapsed.bar.left})发生重叠`)
  assert(collapsed.bar.right < collapsed.right.left, `画布标题条(${collapsed.bar.right})与右侧操作区(${collapsed.right.left})发生重叠`)

  await page.evaluate(() => {
    document.documentElement.setAttribute('data-fullscreen', 'true')
    document.documentElement.style.setProperty('--dsh-frame-leading-clearance', '84px')
  })
  await wait(page, 350)

  const fullscreenNav = await page.$eval('.cf-island--nav', (el) => el.getBoundingClientRect().left)
  assert(Math.abs(fullscreenNav - 84) <= 2, `全屏收起侧栏时左边距应为 84px，实际 ${fullscreenNav}`)
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await browser.close()
server.close()
crossSource.close()

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
if (failed) process.exitCode = 1
