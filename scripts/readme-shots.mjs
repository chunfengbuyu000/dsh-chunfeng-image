// 自动渲染并截取 README 展示用的 5 张高清 WebP 界面截图。
// 跑法：PUPPETEER_DIR=/path/to/puppeteer npm run shot:readme
import { createServer } from 'node:http'
import { mkdir, readFile, rm } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { execSync } from 'node:child_process'
import { pathToFileURL } from 'node:url'
import { loadPuppeteer, findChromeExecutable } from './puppeteer-loader.mjs'

const ROOT = new URL('..', import.meta.url).pathname
const PREVIEW = join(ROOT, 'preview')
const SHOTS_DIR = join(ROOT, 'assets', 'screenshots')
const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
}

const puppeteer = await loadPuppeteer()
if (!puppeteer) {
  console.error('需要 puppeteer / puppeteer-core 才能运行截图脚本，请设置 PUPPETEER_DIR 后重试')
  process.exit(1)
}
const executablePath = findChromeExecutable()
if (!executablePath) {
  console.error('找不到 Chrome / Chromium 可执行文件，请设置 CHROME_PATH 后重试')
  process.exit(1)
}

execSync('node scripts/preview.mjs', { cwd: ROOT, stdio: 'inherit' })
await mkdir(SHOTS_DIR, { recursive: true })

// 隔离本机配置文件，绝不写入或读取用户真实渠道密钥
process.env.DSH_CHUNFENG_CONFIG = `/tmp/dsh-readme-shots-${process.pid}.json`
await rm(process.env.DSH_CHUNFENG_CONFIG, { force: true }).catch(() => {})

const { default: pluginHost } = await import(pathToFileURL(join(ROOT, 'src/host.js')).href)
const hostHandlers = {}
const fakeLlm = {
  listProviders: async () => [{ id: 'dsh', name: 'DSH 视觉模型' }],
  listModels: async () => [{ id: 'vision-pro', name: 'Vision Pro (多模态)', inputModalities: ['text', 'image'] }],
  prepareCall: async () => ({ config: {}, stream: async function* () { yield { type: 'finish', reason: { kind: 'stop' } } } }),
}
const fakeServices = {
  connection: { requestRejection: () => 0 },
  llm: fakeLlm,
  agentDefaultModel: { currentSelection: () => ({ provider: 'dsh', model: 'vision-pro' }) },
}
pluginHost.apply({
  effect: (fn) => { fn(); return () => {} },
  get: (name) => fakeServices[name] || null,
  webServer: { register: (o) => { hostHandlers[o.path] = o.handler; return () => {} } },
  connection: fakeServices.connection,
  llm: fakeLlm,
  agentDefaultModel: fakeServices.agentDefaultModel,
})

// 启动后由浏览器 Canvas 渲染出高质量演示图，再回传给本地 HTTP 服务供提示词封面/参考图加载
const demoArtBuffers = new Map()

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')

  if (url.pathname.startsWith('/dsh-chunfeng-image') && hostHandlers['/dsh-chunfeng-image']) {
    return hostHandlers['/dsh-chunfeng-image'](req, res)
  }

  if (url.pathname.startsWith('/demo-art/') && req.method === 'GET') {
    const key = url.pathname.replace('/demo-art/', '').replace(/\.png$/, '')
    const buf = demoArtBuffers.get(key)
    if (!buf) { res.writeHead(404).end('not found'); return }
    res.writeHead(200, { 'content-type': 'image/png', 'cache-control': 'public, max-age=3600' })
    res.end(buf)
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
await new Promise((r) => server.listen(0, '127.0.0.1', r))
const base = `http://127.0.0.1:${server.address().port}`

const browser = await puppeteer.launch({
  executablePath,
  headless: 'new',
  args: ['--no-sandbox', '--font-render-hinting=medium'],
})

const wait = (page, ms) => page.evaluate((n) => new Promise((r) => setTimeout(r, n)), ms)

const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
await page.setRequestInterception(true)
page.on('request', (req) => {
  const u = req.url()
  if (/^https?:\/\/(fonts\.googleapis\.com|fonts\.gstatic\.com)\b/i.test(u)) {
    req.abort()
    return
  }
  req.continue()
})

// 1) 初始化数据库结构（通过 preview-entry 跑一遍建表），然后用 ?raw=1 注入真实演示内容
await page.goto(`${base}/index.html?fresh=1`, { waitUntil: 'domcontentloaded' })
await page.waitForSelector('.cf-app')
await wait(page, 400)

// 2) 在浏览器 Canvas 中绘制 6 张富层次高分辨率作品图（3:4、1:1、4:3），返回 base64 同时写入 IndexedDB
const renderedArt = await page.evaluate(async () => {
  const mkCanvas = (w, h) => {
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    return [c, c.getContext('2d')]
  }

  const drawNeonNight = (variant = 1) => {
    const [c, ctx] = mkCanvas(900, 1200)
    const sky = ctx.createLinearGradient(0, 0, 0, 1200)
    sky.addColorStop(0, variant === 1 ? '#080e1d' : '#120b24')
    sky.addColorStop(0.55, variant === 1 ? '#11253a' : '#1c1836')
    sky.addColorStop(1, '#090d14')
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, 900, 1200)

    // 远景薄雾高光
    const mist = ctx.createRadialGradient(450, 560, 40, 450, 560, 480)
    mist.addColorStop(0, variant === 1 ? 'rgba(42, 212, 224, 0.38)' : 'rgba(255, 166, 77, 0.34)')
    mist.addColorStop(0.55, variant === 1 ? 'rgba(232, 74, 148, 0.16)' : 'rgba(94, 129, 255, 0.18)')
    mist.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = mist
    ctx.fillRect(0, 0, 900, 1200)

    // 两侧建筑剪影与窗户网格
    ctx.fillStyle = '#070b12'
    ctx.beginPath()
    ctx.moveTo(0, 0); ctx.lineTo(315, 110); ctx.lineTo(340, 820); ctx.lineTo(0, 920); ctx.closePath(); ctx.fill()
    ctx.beginPath()
    ctx.moveTo(900, 0); ctx.lineTo(575, 95); ctx.lineTo(555, 810); ctx.lineTo(900, 930); ctx.closePath(); ctx.fill()

    for (let r = 0; r < 11; r += 1) {
      for (let col = 0; col < 4; col += 1) {
        if ((r + col) % 3 === 0) continue
        ctx.fillStyle = (r + col) % 2 === 0 ? 'rgba(255, 200, 120, 0.25)' : 'rgba(92, 225, 230, 0.2)'
        ctx.fillRect(36 + col * 58, 120 + r * 58, 28, 34)
        ctx.fillRect(620 + col * 58, 130 + r * 56, 26, 32)
      }
    }

    // 悬空霓虹招牌
    const signs = variant === 1
      ? [
        { x: 165, y: 240, w: 148, h: 66, fg: '#2ee6ff', glow: 'rgba(46, 230, 255, 0.7)' },
        { x: 560, y: 210, w: 160, h: 72, fg: '#ff4f9a', glow: 'rgba(255, 79, 154, 0.7)' },
        { x: 205, y: 390, w: 118, h: 52, fg: '#ffb547', glow: 'rgba(255, 181, 71, 0.65)' },
        { x: 535, y: 365, w: 140, h: 56, fg: '#39f0c8', glow: 'rgba(57, 240, 200, 0.65)' },
      ]
      : [
        { x: 180, y: 210, w: 150, h: 68, fg: '#ffa940', glow: 'rgba(255, 169, 64, 0.7)' },
        { x: 540, y: 250, w: 164, h: 64, fg: '#5b8cff', glow: 'rgba(91, 140, 255, 0.7)' },
        { x: 220, y: 380, w: 120, h: 54, fg: '#ff5d8f', glow: 'rgba(255, 93, 143, 0.65)' },
      ]
    for (const s of signs) {
      ctx.save()
      ctx.shadowColor = s.glow
      ctx.shadowBlur = 28
      ctx.strokeStyle = s.fg
      ctx.lineWidth = 4
      ctx.fillStyle = 'rgba(10, 14, 24, 0.86)'
      ctx.beginPath()
      ctx.roundRect(s.x, s.y, s.w, s.h, 10)
      ctx.fill()
      ctx.stroke()
      ctx.fillStyle = s.fg
      ctx.fillRect(s.x + 18, s.y + 20, s.w - 36, 8)
      ctx.fillRect(s.x + 18, s.y + 38, (s.w - 36) * 0.65, 6)
      ctx.restore()
    }

    // 湿润地面反光条带
    const floor = ctx.createLinearGradient(0, 760, 0, 1200)
    floor.addColorStop(0, '#0a121f')
    floor.addColorStop(1, '#05080f')
    ctx.fillStyle = floor
    ctx.fillRect(0, 760, 900, 440)
    for (let i = 0; i < 42; i += 1) {
      const rx = 250 + ((i * 73) % 410)
      const ry = 785 + i * 9.5
      const rw = 24 + ((i * 19) % 80)
      ctx.fillStyle = i % 3 === 0 ? 'rgba(46, 230, 255, 0.24)' : i % 3 === 1 ? 'rgba(255, 79, 154, 0.22)' : 'rgba(255, 184, 77, 0.20)'
      ctx.fillRect(rx - rw / 2, ry, rw, 4)
    }

    // 近景行人 + 伞剪影
    ctx.save()
    ctx.fillStyle = '#090c13'
    ctx.beginPath()
    ctx.ellipse(455, 910, 24, 110, 0, 0, Math.PI * 2)
    ctx.fill()
    const umb = ctx.createRadialGradient(455, 770, 10, 455, 790, 96)
    umb.addColorStop(0, variant === 1 ? 'rgba(69, 238, 255, 0.92)' : 'rgba(255, 193, 94, 0.95)')
    umb.addColorStop(1, 'rgba(18, 32, 54, 0.88)')
    ctx.fillStyle = umb
    ctx.beginPath()
    ctx.arc(455, 815, 92, Math.PI, 0)
    ctx.closePath()
    ctx.fill()
    ctx.restore()

    // 细雨雨丝
    ctx.strokeStyle = 'rgba(190, 235, 255, 0.16)'
    ctx.lineWidth = 1.5
    for (let i = 0; i < 120; i += 1) {
      const x = (i * 97) % 900
      const y = (i * 173) % 1160
      ctx.beginPath(); ctx.moveTo(x, y); ctx.lineTo(x - 10, y + 36); ctx.stroke()
    }
    return c
  }

  const drawDawnStreet = () => {
    const [c, ctx] = mkCanvas(900, 1200)
    const sky = ctx.createLinearGradient(0, 0, 0, 1200)
    sky.addColorStop(0, '#3e5370')
    sky.addColorStop(0.45, '#e8a87c')
    sky.addColorStop(0.72, '#ffd699')
    sky.addColorStop(1, '#26303d')
    ctx.fillStyle = sky
    ctx.fillRect(0, 0, 900, 1200)

    const sun = ctx.createRadialGradient(450, 620, 20, 450, 620, 380)
    sun.addColorStop(0, 'rgba(255, 248, 224, 0.96)')
    sun.addColorStop(0.4, 'rgba(255, 198, 122, 0.52)')
    sun.addColorStop(1, 'rgba(255, 198, 122, 0)')
    ctx.fillStyle = sun
    ctx.fillRect(0, 0, 900, 1200)

    // 晨曦建筑轮廓
    ctx.fillStyle = 'rgba(35, 44, 58, 0.9)'
    ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(310, 140); ctx.lineTo(340, 810); ctx.lineTo(0, 900); ctx.closePath(); ctx.fill()
    ctx.beginPath(); ctx.moveTo(900, 0); ctx.lineTo(585, 130); ctx.lineTo(560, 810); ctx.lineTo(900, 910); ctx.closePath(); ctx.fill()

    // 丁达尔光束
    ctx.fillStyle = 'rgba(255, 241, 205, 0.16)'
    ctx.beginPath(); ctx.moveTo(420, 600); ctx.lineTo(140, 1200); ctx.lineTo(390, 1200); ctx.closePath(); ctx.fill()
    ctx.beginPath(); ctx.moveTo(470, 600); ctx.lineTo(560, 1200); ctx.lineTo(780, 1200); ctx.closePath(); ctx.fill()

    // 雨后积水反光
    const wet = ctx.createLinearGradient(0, 800, 0, 1200)
    wet.addColorStop(0, 'rgba(65, 76, 94, 0.85)')
    wet.addColorStop(1, 'rgba(25, 31, 42, 0.96)')
    ctx.fillStyle = wet
    ctx.fillRect(0, 800, 900, 400)
    const ref = ctx.createRadialGradient(450, 960, 15, 450, 960, 210)
    ref.addColorStop(0, 'rgba(255, 224, 165, 0.72)')
    ref.addColorStop(1, 'rgba(255, 224, 165, 0)')
    ctx.fillStyle = ref
    ctx.fillRect(150, 810, 600, 340)
    return c
  }

  const drawProductStudio = () => {
    const [c, ctx] = mkCanvas(1024, 1024)
    const bg = ctx.createLinearGradient(0, 0, 1024, 1024)
    bg.addColorStop(0, '#f3efe9')
    bg.addColorStop(1, '#ddd4c7')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, 1024, 1024)

    // 柔光圈
    const glow = ctx.createRadialGradient(512, 430, 40, 512, 430, 420)
    glow.addColorStop(0, 'rgba(255, 255, 255, 0.95)')
    glow.addColorStop(1, 'rgba(255, 255, 255, 0)')
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, 1024, 1024)

    // 石膏台座
    ctx.fillStyle = '#c8beb0'
    ctx.beginPath(); ctx.roundRect(220, 700, 584, 240, 18); ctx.fill()
    ctx.fillStyle = '#e5ddd1'
    ctx.beginPath(); ctx.roundRect(220, 690, 584, 58, 12); ctx.fill()

    // 接触投影
    const sh = ctx.createRadialGradient(512, 718, 20, 512, 718, 180)
    sh.addColorStop(0, 'rgba(60, 52, 44, 0.34)')
    sh.addColorStop(1, 'rgba(60, 52, 44, 0)')
    ctx.fillStyle = sh
    ctx.fillRect(280, 660, 464, 120)

    // 磨砂玻璃香水瓶身
    const glass = ctx.createLinearGradient(362, 310, 662, 710)
    glass.addColorStop(0, '#f8e6d2')
    glass.addColorStop(0.5, '#dfb58c')
    glass.addColorStop(1, '#c38b5d')
    ctx.fillStyle = glass
    ctx.strokeStyle = 'rgba(255,255,255,0.8)'
    ctx.lineWidth = 4
    ctx.beginPath(); ctx.roundRect(362, 310, 300, 400, 36); ctx.fill(); ctx.stroke()
    // 内液面
    ctx.fillStyle = 'rgba(255, 248, 238, 0.42)'
    ctx.beginPath(); ctx.roundRect(386, 336, 92, 348, 20); ctx.fill()
    // 金属瓶颈与黑曜石瓶盖
    ctx.fillStyle = '#b49468'
    ctx.fillRect(466, 260, 92, 52)
    ctx.fillStyle = '#1f2228'
    ctx.beginPath(); ctx.roundRect(432, 168, 160, 98, 18); ctx.fill()
    // 极简标签
    ctx.fillStyle = 'rgba(252, 250, 246, 0.92)'
    ctx.beginPath(); ctx.roundRect(422, 440, 180, 120, 10); ctx.fill()
    ctx.fillStyle = '#2d2926'
    ctx.fillRect(458, 484, 108, 10)
    ctx.fillStyle = '#8b7f74'
    ctx.fillRect(474, 510, 76, 6)
    return c
  }

  const drawInkMountain = () => {
    const [c, ctx] = mkCanvas(900, 1200)
    const paper = ctx.createLinearGradient(0, 0, 0, 1200)
    paper.addColorStop(0, '#ece4d3')
    paper.addColorStop(1, '#dcd0b8')
    ctx.fillStyle = paper
    ctx.fillRect(0, 0, 900, 1200)

    // 朱红落日
    ctx.fillStyle = 'rgba(196, 68, 52, 0.85)'
    ctx.beginPath(); ctx.arc(620, 290, 56, 0, Math.PI * 2); ctx.fill()

    const drawPeak = (points, color) => {
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(0, 1200)
      for (const [x, y] of points) ctx.lineTo(x, y)
      ctx.lineTo(900, 1200)
      ctx.closePath()
      ctx.fill()
    }
    drawPeak([[0, 540], [180, 390], [360, 490], [560, 320], [740, 460], [900, 380]], 'rgba(92, 100, 108, 0.32)')
    drawPeak([[0, 720], [210, 520], [430, 650], [670, 470], [900, 620]], 'rgba(54, 60, 68, 0.56)')
    drawPeak([[0, 920], [170, 740], [350, 860], [580, 780], [900, 880]], 'rgba(24, 28, 34, 0.84)')

    // 留白江雾
    const fog = ctx.createLinearGradient(0, 720, 0, 1020)
    fog.addColorStop(0, 'rgba(236, 228, 211, 0)')
    fog.addColorStop(0.5, 'rgba(240, 234, 220, 0.82)')
    fog.addColorStop(1, 'rgba(236, 228, 211, 0)')
    ctx.fillStyle = fog
    ctx.fillRect(0, 720, 900, 300)

    // 一叶孤舟
    ctx.fillStyle = '#1b1d20'
    ctx.beginPath(); ctx.moveTo(410, 955); ctx.quadraticCurveTo(465, 976, 520, 952); ctx.closePath(); ctx.fill()
    ctx.fillRect(454, 932, 12, 22)
    return c
  }

  const drawIsometricRoom = () => {
    const [c, ctx] = mkCanvas(1024, 1024)
    const bg = ctx.createLinearGradient(0, 0, 1024, 1024)
    bg.addColorStop(0, '#dce7f5')
    bg.addColorStop(1, '#c5d6ec')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, 1024, 1024)

    // 等距地板与两面墙
    ctx.fillStyle = '#f6f1e9'
    ctx.beginPath(); ctx.moveTo(512, 190); ctx.lineTo(180, 380); ctx.lineTo(180, 680); ctx.lineTo(512, 490); ctx.closePath(); ctx.fill()
    ctx.fillStyle = '#e7dfd3'
    ctx.beginPath(); ctx.moveTo(512, 190); ctx.lineTo(844, 380); ctx.lineTo(844, 680); ctx.lineTo(512, 490); ctx.closePath(); ctx.fill()
    ctx.fillStyle = '#d3b08c'
    ctx.beginPath(); ctx.moveTo(512, 490); ctx.lineTo(844, 680); ctx.lineTo(512, 870); ctx.lineTo(180, 680); ctx.closePath(); ctx.fill()

    // 窗户暖光
    ctx.fillStyle = '#ffe5b0'
    ctx.beginPath(); ctx.moveTo(250, 390); ctx.lineTo(420, 290); ctx.lineTo(420, 445); ctx.lineTo(250, 545); ctx.closePath(); ctx.fill()

    // 书桌与显示器
    ctx.fillStyle = '#ffffff'
    ctx.beginPath(); ctx.roundRect(450, 520, 220, 120, 14); ctx.fill()
    ctx.fillStyle = '#252b38'
    ctx.beginPath(); ctx.roundRect(505, 435, 118, 76, 10); ctx.fill()
    ctx.fillStyle = '#5596ff'
    ctx.beginPath(); ctx.roundRect(514, 444, 100, 58, 6); ctx.fill()

    // 绿植圆罐
    ctx.fillStyle = '#5a8f69'
    ctx.beginPath(); ctx.arc(325, 625, 44, 0, Math.PI * 2); ctx.fill()
    ctx.fillStyle = '#e27d5f'
    ctx.beginPath(); ctx.roundRect(300, 650, 50, 42, 8); ctx.fill()
    return c
  }

  const specs = [
    { key: 'neon1', storageKey: 'image:shot_neon1', canvas: drawNeonNight(1) },
    { key: 'neon2', storageKey: 'image:shot_neon2', canvas: drawNeonNight(2) },
    { key: 'dawn', storageKey: 'image:shot_dawn', canvas: drawDawnStreet() },
    { key: 'prod', storageKey: 'image:shot_prod', canvas: drawProductStudio() },
    { key: 'ink', storageKey: 'image:shot_ink', canvas: drawInkMountain() },
    { key: 'iso', storageKey: 'image:shot_iso', canvas: drawIsometricRoom() },
  ]

  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open('dsh-chunfeng-image', 1)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })

  const exported = []
  const now = Date.now()
  for (const sp of specs) {
    const blob = await new Promise((r) => sp.canvas.toBlob(r, 'image/png'))
    const dataUrl = sp.canvas.toDataURL('image/png')
    await new Promise((resolve, reject) => {
      const tx = db.transaction('image_files', 'readwrite')
      tx.objectStore('image_files').put({
        blob,
        type: 'image/png',
        bytes: blob.size,
        width: sp.canvas.width,
        height: sp.canvas.height,
        at: now,
      }, sp.storageKey)
      tx.oncomplete = resolve
      tx.onerror = () => reject(tx.error)
    })
    exported.push({ key: sp.key, storageKey: sp.storageKey, bytes: blob.size, width: sp.canvas.width, height: sp.canvas.height, b64: dataUrl.split(',')[1] })
  }
  db.close()
  return exported
})

for (const art of renderedArt) {
  demoArtBuffers.set(art.key, Buffer.from(art.b64, 'base64'))
}

// 3) 注入 5 个展示场景共享的演示配置、画布、提示词源与工作台记录
await page.evaluate(async ({ baseUrl, arts }) => {
  const byKey = Object.fromEntries(arts.map((a) => [a.key, a]))
  const now = Date.now()

  const channels = [
    {
      id: 'ch_openai',
      name: 'OpenAI 兼容 · 主力生图',
      protocol: 'openai',
      baseUrl: 'https://api.openai.com/v1',
      keyHint: '9a2f',
      hasKey: true,
      enabled: true,
      models: [
        { id: 'seedream-5-pro', label: 'Seedream 5.0 Pro', caps: ['image'], enabled: true, source: 'remote' },
        { id: 'gpt-image-1', label: 'GPT Image 1', caps: ['image'], enabled: true, source: 'remote' },
        { id: 'sora-video-2', label: 'Sora Video 2', caps: ['video'], enabled: true, source: 'remote' },
      ],
    },
    {
      id: 'ch_gemini',
      name: 'Google Gemini 官方',
      protocol: 'gemini',
      baseUrl: 'https://generativelanguage.googleapis.com/v1beta',
      keyHint: 'c48e',
      hasKey: true,
      enabled: true,
      models: [
        { id: 'gemini-2.5-flash-image', label: 'Gemini 2.5 Flash Image', caps: ['image'], enabled: true, source: 'remote' },
        { id: 'imagen-3.0-generate', label: 'Imagen 3.0', caps: ['image'], enabled: false, source: 'remote' },
      ],
    },
  ]

  const defaults = {
    image: {
      modelKey: 'ch_openai:seedream-5-pro',
      size: '1024x1024',
      ratio: '3:4',
      count: 1,
      quality: '高',
      resolution: '2k',
      transparent: false,
    },
    canvasCount: 1,
  }

  localStorage.setItem('dsh-cf:config:v1', JSON.stringify({ channels, defaults, assistantModel: null }))
  localStorage.setItem('dsh-cf:config:backup', JSON.stringify({ channels, defaults, assistantModel: null }))

  const imgEntry = (id, a, prompt) => ({
    id,
    storageKey: a.storageKey,
    width: a.width,
    height: a.height,
    bytes: a.bytes,
    mimeType: 'image/png',
    prompt,
    createdAt: now - 120000,
  })

  const demoCanvas = {
    id: 'cv_showcase',
    name: '赛博街角 · 多方案视觉编排',
    grid: 'dots',
    camera: { x: 0, y: 0, s: 1 },
    updatedAt: now,
    nodes: [
      {
        id: 't_scene',
        type: 'text',
        x: 90,
        y: 135,
        w: 248,
        h: 170,
        name: '场景设定',
        status: 'done',
        z: 2,
        text: '雨夜香港霓虹深巷，青橙冷暖对比，35mm 电影胶片颗粒，湿润石板路倒映招牌霓虹灯。',
      },
      {
        id: 'cfg_main',
        type: 'config',
        x: 90,
        y: 335,
        w: 248,
        h: 256,
        name: '出图参数',
        status: 'idle',
        z: 2,
        mode: 'image',
        modelKey: 'ch_openai:seedream-5-pro',
        ratio: '3:4',
        count: 2,
        resolution: '2k',
        quality: '高',
        prompt: '保留镜头焦段与建筑透视，突出近景雨伞与地面水洼倒影层次',
      },
      {
        id: 'g_batch',
        type: 'group',
        x: 410,
        y: 112,
        w: 586,
        h: 492,
        name: '霓虹街角 · 多方案对比',
        status: 'idle',
        z: 1,
      },
      {
        id: 'i_night',
        type: 'image',
        x: 440,
        y: 196,
        w: 252,
        h: 364,
        name: '方案 A（批量 3 张）',
        status: 'done',
        z: 2,
        ratio: '3:4',
        resolution: '2k',
        locked: true,
        prompt: '雨夜香港霓虹深巷，青橙对比，透明发光雨伞背影',
        storageKey: byKey.neon1.storageKey,
        primaryImageId: 'img_n1',
        images: [
          imgEntry('img_n1', byKey.neon1, '雨夜香港霓虹深巷 · 青蓝方案'),
          imgEntry('img_n2', byKey.neon2, '雨夜电车霓虹桥 · 琥珀方案'),
          imgEntry('img_n3', byKey.dawn, '雨后晨曦街角 · 金光对比'),
        ],
      },
      {
        id: 'i_dawn',
        type: 'image',
        x: 720,
        y: 196,
        w: 252,
        h: 364,
        name: '方案 B · 晨曦转场',
        status: 'done',
        z: 2,
        ratio: '3:4',
        resolution: '2k',
        locked: true,
        prompt: '同一街角的清晨，雨停后的暖色丁达尔光与水洼倒影',
        storageKey: byKey.dawn.storageKey,
        primaryImageId: 'img_d1',
        images: [imgEntry('img_d1', byKey.dawn, '同一街角的清晨，雨停后的暖色丁达尔光与水洼倒影')],
      },
      {
        id: 'i_prod',
        type: 'image',
        x: 1054,
        y: 230,
        w: 268,
        h: 296,
        name: '衍生 · 商业静物海报',
        status: 'done',
        z: 2,
        ratio: '1:1',
        resolution: '2k',
        locked: true,
        prompt: '保持暖调高光质感，磨砂玻璃香水瓶与石膏台座商业特写',
        storageKey: byKey.prod.storageKey,
        primaryImageId: 'img_p1',
        images: [imgEntry('img_p1', byKey.prod, '保持暖调高光质感，磨砂玻璃香水瓶与石膏台座商业特写')],
      },
    ],
    edges: [
      { id: 'e1', from: 't_scene', to: 'cfg_main' },
      { id: 'e2', from: 'cfg_main', to: 'i_night' },
      { id: 'e3', from: 'i_night', to: 'i_dawn' },
      { id: 'e4', from: 'i_dawn', to: 'i_prod' },
    ],
  }

  const promptItems = [
    {
      id: 'pr_1',
      title: '雨夜香港霓虹深巷',
      text: '低角度超广角街拍，雨夜香港霓虹深巷，青蓝与洋红招牌冷暖对比，湿润石板路倒映细碎霓虹，前景撑透明雨伞的行人背影，35mm 电影胶片颗粒。',
      category: '赛博夜景',
      tags: ['霓虹', '雨夜', '电影感'],
      author: 'YukkCat',
      coverUrl: `${baseUrl}/demo-art/neon1.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/neon1.png`, `${baseUrl}/demo-art/neon2.png`],
      sourceId: 'awesome-gpt-image',
      sourceName: 'Awesome GPT Image',
    },
    {
      id: 'pr_2',
      title: '极简磨砂香水商业静物',
      text: '极简商业摄影，磨砂琥珀色玻璃香水瓶置于浅灰石膏几何台座，柔光箱侧逆光打亮瓶身通透边缘，干净高级米白色影棚背景。',
      category: '商业摄影',
      tags: ['产品', '极简', '棚拍'],
      author: 'YouMind',
      coverUrl: `${baseUrl}/demo-art/prod.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/prod.png`, `${baseUrl}/demo-art/iso.png`],
      sourceId: 'youmind-gpt-image-2',
      sourceName: 'YouMind GPT Image 2',
    },
    {
      id: 'pr_3',
      title: '水墨留白远山孤舟',
      text: '东方意境水墨山水，宣纸纹理，远山层峦叠嶂淡墨晕染，朱红落日点缀天际，江雾留白间一叶孤舟随波停泊。',
      category: '国风山水',
      tags: ['水墨', '留白', '国风'],
      author: 'Quicker',
      coverUrl: `${baseUrl}/demo-art/ink.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/ink.png`],
      sourceId: 'banana-prompt-quicker',
      sourceName: 'Banana Prompt Quicker',
    },
    {
      id: 'pr_4',
      title: '3D 等距温暖设计师工作间',
      text: '3D 等距微缩工作室场景，阳光透过窗棂洒在木质地板上，极简白书桌与双屏显示器，角落龟背竹绿植，Blender Cycles 柔和全局光照。',
      category: '3D 等距',
      tags: ['等距', '微缩', '治愈'],
      author: 'Freestylefly',
      coverUrl: `${baseUrl}/demo-art/iso.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/iso.png`, `${baseUrl}/demo-art/prod.png`],
      sourceId: 'freestylefly-gpt-image-2',
      sourceName: 'Freestylefly GPT Image 2',
    },
    {
      id: 'pr_5',
      title: '雨后晨曦丁达尔街道',
      text: '电影感清晨转场画面，暴雨初歇的旧城深巷，金橘色朝阳穿透云层形成柔和丁达尔光束，积水路面清晰倒映天空霞光。',
      category: '电影转场',
      tags: ['晨光', '丁达尔', '倒影'],
      author: 'DavidWu',
      coverUrl: `${baseUrl}/demo-art/dawn.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/dawn.png`, `${baseUrl}/demo-art/neon1.png`],
      sourceId: 'davidwu-gpt-image2-prompts',
      sourceName: 'DavidWu GPT Image 2',
    },
    {
      id: 'pr_6',
      title: '复古电车霓虹天桥夜色',
      text: '琥珀与钴蓝双色夜景构图，复古有轨电车穿过高架霓虹天桥，前景失焦光斑虚化，强烈纵深透视感。',
      category: '赛博夜景',
      tags: ['电车', '光斑', '透视'],
      author: 'GPT4o Hub',
      coverUrl: `${baseUrl}/demo-art/neon2.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/neon2.png`, `${baseUrl}/demo-art/dawn.png`],
      sourceId: 'awesome-gpt4o-image-prompts',
      sourceName: 'Awesome GPT-4o',
    },
    {
      id: 'pr_7',
      title: '高级护肤品石膏礼盒陈列',
      text: 'Studio 静物构图，哑光质感包装与琥珀玻璃瓶对称陈列，自然窗光与柔光板勾勒立体轮廓阴影，高阶审美电商主图。',
      category: '商业摄影',
      tags: ['电商', '静物', '高级感'],
      author: 'NanoBanana',
      coverUrl: `${baseUrl}/demo-art/prod.png`,
      referenceImageUrls: [],
      sourceId: 'youmind-nano-banana-pro',
      sourceName: 'YouMind Nano Banana Pro',
    },
    {
      id: 'pr_8',
      title: '日系清新室内工作角插画',
      text: '干净柔和的明快色调，木质原色工作台搭配绿色盆栽，午后自然漫反射光影，适合作为应用启动插画或桌面壁纸。',
      category: '3D 等距',
      tags: ['室内', '清新', '插画'],
      author: 'Studio',
      coverUrl: `${baseUrl}/demo-art/iso.png`,
      referenceImageUrls: [`${baseUrl}/demo-art/iso.png`],
      sourceId: 'awesome-gpt-image',
      sourceName: 'Awesome GPT Image',
    },
  ]

  const promptSources = [
    {
      id: 'awesome-gpt-image',
      name: 'Awesome GPT Image',
      url: 'https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources/awesome-gpt-image.json',
      fallbackUrl: 'https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources/awesome-gpt-image.json',
      enabled: true,
      builtIn: true,
    },
    {
      id: 'youmind-gpt-image-2',
      name: 'YouMind GPT Image 2',
      url: 'https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources/youmind-gpt-image-2.json',
      fallbackUrl: 'https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources/youmind-gpt-image-2.json',
      enabled: true,
      builtIn: true,
    },
    {
      id: 'banana-prompt-quicker',
      name: 'Banana Prompt Quicker',
      url: 'https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources/banana-prompt-quicker.json',
      fallbackUrl: 'https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources/banana-prompt-quicker.json',
      enabled: true,
      builtIn: true,
    },
  ]

  const promptCache = {}
  promptSources.forEach((s) => {
    const items = promptItems.filter((p) => p.sourceId === s.id || (s.id === 'awesome-gpt-image' && !['youmind-gpt-image-2', 'banana-prompt-quicker'].includes(p.sourceId)))
    promptCache[s.url] = { id: s.id, name: s.name, url: s.url, items, at: now - 300000, count: items.length }
  })
  localStorage.setItem('dsh-cf:prompt-cache:v1', JSON.stringify(promptCache))

  const logs = [
    {
      id: 'rec_1',
      prompt: '极简商业摄影，磨砂琥珀玻璃香水瓶置于浅灰石膏台座，柔和侧逆光打亮轮廓，米白色高级影棚背景',
      modelKey: 'ch_openai:seedream-5-pro',
      modelLabel: 'Seedream 5.0 Pro',
      ratio: '1:1',
      resolution: '2k',
      size: '1024×1024',
      count: 2,
      status: 'done',
      at: now - 180000,
      elapsedMs: 4200,
      images: [
        { storageKey: byKey.prod.storageKey, width: byKey.prod.width, height: byKey.prod.height, bytes: byKey.prod.bytes, mimeType: 'image/png', index: 0, status: 'done' },
        { storageKey: byKey.iso.storageKey, width: byKey.iso.width, height: byKey.iso.height, bytes: byKey.iso.bytes, mimeType: 'image/png', index: 1, status: 'done' },
      ],
    },
    {
      id: 'rec_2',
      prompt: '雨夜香港霓虹深巷，青橙冷暖对比，湿润路面倒映细碎招牌灯光，电影胶片质感',
      modelKey: 'ch_gemini:gemini-2.5-flash-image',
      modelLabel: 'Gemini 2.5 Flash Image',
      ratio: '3:4',
      resolution: '2k',
      size: '864×1152',
      count: 2,
      status: 'done',
      at: now - 620000,
      elapsedMs: 5600,
      images: [
        { storageKey: byKey.neon1.storageKey, width: byKey.neon1.width, height: byKey.neon1.height, bytes: byKey.neon1.bytes, mimeType: 'image/png', index: 0, status: 'done' },
        { storageKey: byKey.dawn.storageKey, width: byKey.dawn.width, height: byKey.dawn.height, bytes: byKey.dawn.bytes, mimeType: 'image/png', index: 1, status: 'done' },
      ],
    },
    {
      id: 'rec_3',
      prompt: '水墨留白远山淡墨晕染，朱红落日点缀天际，江雾之间一叶孤舟',
      modelKey: 'ch_openai:gpt-image-1',
      modelLabel: 'GPT Image 1',
      ratio: '3:4',
      resolution: '1k',
      size: '768×1024',
      count: 1,
      status: 'done',
      at: now - 1200000,
      elapsedMs: 3800,
      images: [
        { storageKey: byKey.ink.storageKey, width: byKey.ink.width, height: byKey.ink.height, bytes: byKey.ink.bytes, mimeType: 'image/png', index: 0, status: 'done' },
      ],
    },
  ]

  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open('dsh-chunfeng-image', 1)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  await new Promise((resolve, reject) => {
    const tx = db.transaction(['app_state', 'logs', 'meta'], 'readwrite')
    const st = tx.objectStore('app_state')
    st.put({ state: { canvases: [demoCanvas], openCanvasId: demoCanvas.id, grid: 'dots' }, version: 1 }, 'canvas:projects')
    st.put(promptItems, 'prompts')
    st.put(promptSources, 'promptSources')
    st.put(promptCache, 'promptCache')
    st.put([], 'assistantMessages')

    const logStore = tx.objectStore('logs')
    logs.forEach((rec) => logStore.put(rec, `log:${rec.id}`))

    const meta = tx.objectStore('meta')
    meta.put(1, 'schemaVersion')
    meta.put({ at: now, seeded: true }, 'migratedAt')

    tx.oncomplete = resolve
    tx.onerror = () => reject(tx.error)
  })
  db.close()
}, { baseUrl: base, arts: renderedArt.map(({ b64, ...rest }) => rest) })

const setUiAndReload = async (uiPatch) => {
  await page.evaluate((patch) => {
    const cur = JSON.parse(localStorage.getItem('dsh-cf:ui:v1') || '{}') || {}
    localStorage.setItem('dsh-cf:ui:v1', JSON.stringify({ ...cur, ...patch }))
  }, uiPatch)
  await page.goto(`${base}/index.html?raw=1&v=${Date.now()}`, { waitUntil: 'domcontentloaded' })
  await page.waitForSelector('.cf-app')
  await wait(page, 900)
}

// 截图 1：无限画布主视图 + 15 项悬浮工具条（暗黑主题）
await setUiAndReload({ view: 'canvas', theme: 'dark', grid: 'dots' })
await page.waitForSelector('.cf-node img')
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('.cf-node img')]
  await Promise.all(imgs.map((img) => img.complete ? null : new Promise((r) => { img.onload = r; img.onerror = r })))
})
await page.evaluate(() => {
  const ta = document.querySelector('.cf-composer-input')
  if (!ta) return
  const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
  setter.call(ta, '延续第一张的霓虹冷暖色调，镜头拉近到雨伞与地面霓虹倒影特写')
  ta.dispatchEvent(new Event('input', { bubbles: true }))
})
await wait(page, 250)
const firstImgCenter = await page.evaluate(() => {
  const el = document.querySelector('.cf-node[data-id="i_night"]') || document.querySelector('.cf-node')
  const r = el.getBoundingClientRect()
  return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
})
await page.mouse.move(firstImgCenter.x, firstImgCenter.y)
await wait(page, 450)
await page.screenshot({ path: join(SHOTS_DIR, '01-canvas-dark.webp'), type: 'webp', quality: 90 })
console.log('saved 01-canvas-dark.webp')

// 截图 2：蒙版局部重绘对话弹窗（暗黑主题）
const maskBtnClicked = await page.evaluate(() => {
  const btn = document.querySelector('.cf-node-toolbar [data-tip="局部修改"]')
  if (!btn) return false
  btn.click()
  return true
})
if (!maskBtnClicked) throw new Error('未能找到局部修改工具条按钮')
await page.waitForSelector('.cf-mask-box img')
await page.evaluate(async () => {
  const img = document.querySelector('.cf-mask-box img')
  if (img && !img.complete) await new Promise((r) => { img.onload = r; img.onerror = r })
})
await wait(page, 250)
const maskBox = await page.evaluate(() => {
  const r = document.querySelector('.cf-mask-box').getBoundingClientRect()
  return { x: r.x, y: r.y, w: r.width, h: r.height }
})
await page.mouse.move(maskBox.x + maskBox.w * 0.34, maskBox.y + maskBox.h * 0.62)
await page.mouse.down()
await page.mouse.move(maskBox.x + maskBox.w * 0.66, maskBox.y + maskBox.h * 0.64, { steps: 14 })
await page.mouse.move(maskBox.x + maskBox.w * 0.50, maskBox.y + maskBox.h * 0.54, { steps: 10 })
await page.mouse.up()
await page.evaluate(() => {
  const inp = document.querySelector('.cf-dialog .cf-input')
  if (!inp) return
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
  setter.call(inp, '将涂抹区域替换为一把温暖发光的琥珀色透明雨伞，保留地面水洼倒影')
  inp.dispatchEvent(new Event('input', { bubbles: true }))
})
await wait(page, 250)
await page.screenshot({ path: join(SHOTS_DIR, '02-inpaint-dark.webp'), type: 'webp', quality: 90 })
console.log('saved 02-inpaint-dark.webp')

// 关闭弹窗后切回总览列表，清空 openCanvasId 以便直接进工作台/提示词/配置页
await page.keyboard.press('Escape')
await wait(page, 150)
await page.evaluate(async () => {
  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open('dsh-chunfeng-image', 1)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })
  await new Promise((resolve, reject) => {
    const tx = db.transaction('app_state', 'readwrite')
    const st = tx.objectStore('app_state')
    const g = st.get('canvas:projects')
    g.onsuccess = () => {
      const cur = g.result
      if (cur?.state) st.put({ ...cur, state: { ...cur.state, openCanvasId: null } }, 'canvas:projects')
    }
    tx.oncomplete = resolve
    tx.onerror = () => reject(tx.error)
  })
  db.close()
})

// 截图 3：Studio 生图工作台（明亮主题，展示深浅双外观）
await setUiAndReload({ view: 'studio', theme: 'light' })
await page.waitForSelector('.cf-result img')
await page.evaluate(async () => {
  const imgs = [...document.querySelectorAll('.cf-result img')]
  await Promise.all(imgs.map((img) => img.complete ? null : new Promise((r) => { img.onload = r; img.onerror = r })))
  const ta = document.querySelector('.cf-studio .cf-input--area')
  if (ta) {
    const setter = Object.getOwnPropertyDescriptor(window.HTMLTextAreaElement.prototype, 'value').set
    setter.call(ta, '极简商业摄影，磨砂琥珀玻璃香水瓶置于浅灰石膏台座，柔和侧逆光打亮轮廓，米白色高级影棚背景')
    ta.dispatchEvent(new Event('input', { bubbles: true }))
  }
})
const firstCardCenter = await page.evaluate(() => {
  const fig = document.querySelector('.cf-result figure') || document.querySelector('.cf-result')
  const r = fig.getBoundingClientRect()
  return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
})
await page.mouse.move(firstCardCenter.x, firstCardCenter.y)
await wait(page, 350)
await page.screenshot({ path: join(SHOTS_DIR, '03-studio-light.webp'), type: 'webp', quality: 90 })
console.log('saved 03-studio-light.webp')

// 截图 4：提示词中心封面墙（明亮主题）
await setUiAndReload({ view: 'prompts', theme: 'light' })
await page.waitForSelector('.cf-prompt-cover img')
await page.evaluate(async () => {
  const visibleImgs = [...document.querySelectorAll('.cf-prompt-cover img')].filter((img) => {
    const r = img.getBoundingClientRect()
    return r.top < window.innerHeight + 120
  })
  await Promise.race([
    Promise.all(visibleImgs.map((img) => (img.complete ? null : new Promise((r) => { img.onload = r; img.onerror = r })))),
    new Promise((r) => setTimeout(r, 3000)),
  ])
})
await wait(page, 400)
await page.screenshot({ path: join(SHOTS_DIR, '04-prompts-light.webp'), type: 'webp', quality: 90 })
console.log('saved 04-prompts-light.webp')

// 截图 5：多协议渠道与来源配置（暗黑主题）
await setUiAndReload({ view: 'config', configTab: 'channels', theme: 'dark' })
await page.waitForSelector('.cf-tabs')
await wait(page, 350)
await page.screenshot({ path: join(SHOTS_DIR, '05-config-dark.webp'), type: 'webp', quality: 90 })
console.log('saved 05-config-dark.webp')

await page.close()
await browser.close()
server.close()
await rm(process.env.DSH_CHUNFENG_CONFIG, { force: true }).catch(() => {})
console.log('全部 5 张 README 截图已生成到 assets/screenshots/')
