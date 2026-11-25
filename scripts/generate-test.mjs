// 生成链路端到端验证：真浏览器 + 真 Host + 假上游。
//
// 验的是这条链：
//   浏览器 studio → POST dsh-chunfeng-image/relay（同源，无 CORS）
//                → Host(Node) → 假上游 → 回传 b64 图
//                → 前端存 IndexedDB → 渲染真图 → 刷新后还在
//
// 跑法：node scripts/generate-test.mjs
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { execSync } from 'node:child_process'
import { loadPuppeteer, findChromeExecutable } from './puppeteer-loader.mjs'
// 配置镜像必须指到临时文件：这个脚本会往 localStorage 里塞一个假渠道，
// 不隔离的话 saveState 会把它镜像进用户真实的 ~/.dsh/.../config.json。
// （这个坑真踩过：用户的真实配置被测试渠道覆盖了。）
process.env.DSH_CHUNFENG_CONFIG = `/tmp/dsh-generate-test-${process.pid}.json`

import host from '../src/host.js'

const ROOT = new URL('..', import.meta.url).pathname
const PREVIEW = join(ROOT, 'preview')
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css' }

execSync('node scripts/preview.mjs', { cwd: ROOT, stdio: 'ignore' })

// ---------- 假上游：返回一张 1x1 PNG 的 b64 ----------
const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
let upstreamMode = 'ok' // ok | unauthorized | html
const upstreamCalls = []

const upstream = createServer(async (req, res) => {
  const chunks = []
  for await (const c of req) chunks.push(c)
  upstreamCalls.push({ url: req.url, body: Buffer.concat(chunks).toString(), headers: req.headers })

  if (upstreamMode === 'unauthorized') {
    res.writeHead(401, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ code: 'INVALID_API_KEY', message: 'Invalid API key' }))
    return
  }
  if (upstreamMode === 'html') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<!doctype html><html><body>Not An API</body></html>')
    return
  }
  res.writeHead(200, { 'content-type': 'application/json' })
  res.end(JSON.stringify({ data: [{ b64_json: PNG_1PX }] }))
})
await new Promise((r) => upstream.listen(0, '127.0.0.1', r))
const upstreamBase = `http://127.0.0.1:${upstream.address().port}`

// ---------- 静态服务 + Host 路由挂载 ----------
const hostHandlers = {}
const fakeCtx = {
  effect: (fn) => { fn(); return () => {} },
  get: (name) => (name === 'connection' ? { requestRejection: () => 0 } : null),
  // Cordis 的 inject 会把服务直接挂到 ctx 上，webServer 不是通过 ctx.get 拿的
  webServer: { register: (opts) => { hostHandlers[opts.path] = opts.handler; return () => {} } },
  connection: { requestRejection: () => 0 },
}
host.apply(fakeCtx)

const readJsonBody = async (req) => {
  const chunks = []
  for await (const c of req) chunks.push(c)
  return chunks.length ? Buffer.concat(chunks).toString() : ''
}

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')

  // Host 路由：/dsh-chunfeng-image/*
  const handler = hostHandlers['/dsh-chunfeng-image']
  if (handler && url.pathname.startsWith('/dsh-chunfeng-image')) {
    // 把 body 预读进 req 供 Host 使用
    return handler(req, res)
  }

  // 静态文件
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
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`

const puppeteer = await loadPuppeteer()
const exe = findChromeExecutable()
if (!puppeteer || !exe) {
  console.error('需要 puppeteer 与本地 Chrome/Chromium，已跳过（可安装 puppeteer-core 或设置 PUPPETEER_DIR / CHROME_PATH）')
  server.close(); upstream.close(); process.exit(0)
}

const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] })

let pass = 0
const check = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (e) { console.error(`  FAIL ${name}\n       ${e.message}`); process.exitCode = 1 }
}
const assert = (c, m) => { if (!c) throw new Error(m) }
const wait = (page, ms) => page.evaluate((n) => new Promise((r) => setTimeout(r, n)), ms)

/** 轮询抓 toast：它 2.2s 后会自动消失，死等固定时长会错过。 */
async function waitForToast(page, timeoutMs = 3000) {
  const deadline = Date.now() + timeoutMs
  let last = ''
  while (Date.now() < deadline) {
    const text = await page.evaluate(() => document.querySelector('.cf-toast')?.textContent || '')
    if (text) last = text
    if (text) return text
    await wait(page, 80)
  }
  return last
}

/** 打开 studio 并注入一个指向假上游的渠道 */
async function openStudio() {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  const errors = []
  page.on('pageerror', (e) => errors.push(e.message))
  await page.goto(`${base}/studio.html?fresh=1`, { waitUntil: 'networkidle0' })
  await page.evaluate(async (upstreamBase) => {
    const cfg = JSON.parse(localStorage.getItem('dsh-cf:config:v1') || '{}') || {}
    cfg.channels = [{
      id: 'ch_test', name: '测试上游', protocol: 'openai',
      baseUrl: upstreamBase, apiKey: 'sk-test-1234',
      keyHint: '1234', hasKey: true, enabled: true,
      models: [{ id: 'test-image', label: 'Test Image', caps: ['image'], enabled: true }],
    }]
    cfg.defaults = { image: { modelKey: 'ch_test:test-image', size: '1024x1024', ratio: '1:1', count: 1, quality: '自动', resolution: '自动' }, canvasCount: 1 }
    localStorage.setItem('dsh-cf:config:v1', JSON.stringify(cfg))
  }, upstreamBase)
  await page.reload({ waitUntil: 'networkidle0' })
  await wait(page, 700)
  return { page, errors }
}

/** 真输入提示词并点生成。必须用 puppeteer 的 click+type，
 *  不能 evaluate 里直接改 value —— React 受控组件收不到 onChange。 */
async function fillAndGenerate(page, text = '一只猫') {
  const ta = await page.$('.cf-input--area')
  assert(ta, '找不到提示词框')
  await ta.click()
  await page.keyboard.type(text, { delay: 16 })
  const clicked = await page.evaluate(() => {
    const b = [...document.querySelectorAll('.cf-btn')].find((x) => x.textContent.includes('开始生成'))
    if (!b || b.disabled) return false
    b.click()
    return true
  })
  assert(clicked, '生成按钮不可点')
}

console.log('生成链路')

await check('Host /relay 路由已挂载', async () => {
  assert(typeof hostHandlers['/dsh-chunfeng-image'] === 'function', '没挂上')
})

await check('studio 能选中渠道并点生成，产出真图并落 IndexedDB', async () => {
  upstreamMode = 'ok'
  upstreamCalls.length = 0
  const { page, errors } = await openStudio()

  // 填提示词
  const ta = await page.$('.cf-input--area')
  assert(ta, '找不到提示词框')
  await ta.click()
  await page.keyboard.type('一只猫')

  // 点开始生成
  const btn = await page.evaluate(() => {
    const b = [...document.querySelectorAll('.cf-btn')].find((x) => x.textContent.includes('开始生成'))
    if (!b) return false
    b.click()
    return true
  })
  assert(btn, '找不到开始生成按钮')
  await wait(page, 2500)

  // 上游确实被调用了，且路径正确
  assert(upstreamCalls.length >= 1, '上游没被调用')
  assert(upstreamCalls[0].url === '/v1/images/generations', `上游路径不对：${upstreamCalls[0].url}`)
  assert(upstreamCalls[0].headers.authorization === 'Bearer sk-test-1234', '鉴权头没带上')
  const sentBody = JSON.parse(upstreamCalls[0].body)
  assert(sentBody.prompt === '一只猫', `提示词没传对：${sentBody.prompt}`)
  assert(sentBody.n === 1, `张数不对：${sentBody.n}`)

  // 结果区出现真图（img 而不是 canvas）
  const shot = await page.evaluate(() => {
    const imgs = [...document.querySelectorAll('.cf-result img')]
    return imgs.map((i) => ({ src: i.getAttribute('src'), alt: i.getAttribute('alt') }))
  })
  assert(shot.length >= 1, '没有渲染出图片')
  assert(shot[0].src.startsWith('blob:'), `应是本地 blob，实际 ${shot[0].src}`)
  assert(shot[0].alt === '一只猫', '图片 alt 不对')

  // IndexedDB 里真有 Blob
  const stored = await page.evaluate(async () => {
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    const tx = db.transaction('image_files', 'readonly')
    const all = await new Promise((res) => {
      const q = tx.objectStore('image_files').getAll()
      q.onsuccess = () => res(q.result)
    })
    db.close()
    return all.map((x) => ({ bytes: x.bytes, type: x.type }))
  })
  assert(stored.length >= 1, 'IndexedDB 里没有图片 Blob')
  assert(stored[0].bytes > 0, 'Blob 是空的')
  assert(!errors.length, '报错：' + errors.join(' | '))
  await page.close()
})

await check('刷新后图片仍在（storageKey 链路正确）', async () => {
  upstreamMode = 'ok'
  const { page } = await openStudio()
  await fillAndGenerate(page)
  await wait(page, 2500)
  const before = await page.evaluate(() => document.querySelectorAll('.cf-result img').length)
  assert(before >= 1, `生成后没有图（${before}）`)

  // 刷新：结果列表是会话态会被清空，但 IndexedDB 里的 Blob 必须还在。
  // 注意必须去掉 fresh=1 —— 它的语义是「清库重预置」，留着会让这个断言永远失败。
  await page.goto(page.url().replace(/[?&]fresh=1/, ''), { waitUntil: 'networkidle0' })
  await wait(page, 1200)
  const after = await page.evaluate(async () => {
    const req = indexedDB.open('dsh-chunfeng-image')
    const db = await new Promise((res, rej) => { req.onsuccess = () => res(req.result); req.onerror = () => rej(req.error) })
    const tx = db.transaction('image_files', 'readonly')
    const q = tx.objectStore('image_files').getAll()
    const all = await new Promise((res) => { q.onsuccess = () => res(q.result) })
    db.close()
    return all.length
  })
  assert(after >= 1, '刷新后 IndexedDB 里的图片没了')
  await page.close()
})

await check('Key 无效时给出中文提示，不是 Failed to fetch', async () => {
  upstreamMode = 'unauthorized'
  const { page } = await openStudio()
  await fillAndGenerate(page)
  // toast 2.2s 后自动消失，所以用轮询尽早抓到，不能死等
  const toast = await waitForToast(page, 3000)
  assert(toast.includes('API Key') || toast.includes('鉴权'), `提示不对：「${toast}」`)
  assert(!/Failed to fetch/.test(toast), '还在报 Failed to fetch')
  await page.close()
})

await check('上游返回 HTML 时提示「网页而不是接口数据」', async () => {
  upstreamMode = 'html'
  const { page } = await openStudio()
  await fillAndGenerate(page)
  const toast = await waitForToast(page, 3000)
  assert(toast.length > 0, '没有提示')
  assert(!/Unexpected token|<|JSON/.test(toast), `提示里有英文语法错：${toast}`)
  await page.close()
})

await browser.close()
server.close()
upstream.close()
console.log(`\n${pass} 项通过`)
