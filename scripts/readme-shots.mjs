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
    const key = url.pathname.replace('/demo-art/', '').replace(/\.(png|jpe?g|webp)$/i, '')
    const entry = demoArtBuffers.get(key)
    if (!entry) { res.writeHead(404).end('not found'); return }
    res.writeHead(200, { 'content-type': entry.mimeType, 'cache-control': 'public, max-age=3600' })
    res.end(entry.buffer)
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

// 优先读取外部真实照片素材（通过 DEMO_ART_DIR 指定，不进仓库），缺失时才回落内置 Canvas 绘制
const ART_KEYS = ['neon1', 'dawn', 'prod', 'cafe', 'portrait', 'mountain', 'tram', 'botanical']
const externalPhotos = []
const demoArtDir = String(process.env.DEMO_ART_DIR || '').trim()
if (demoArtDir) {
  for (const key of ART_KEYS) {
    for (const [ext, mime] of [['.jpg', 'image/jpeg'], ['.jpeg', 'image/jpeg'], ['.png', 'image/png'], ['.webp', 'image/webp']]) {
      try {
        const buf = await readFile(join(demoArtDir, `${key}${ext}`))
        externalPhotos.push({ key, mime, dataUrl: `data:${mime};base64,${buf.toString('base64')}` })
        break
      } catch { /* 试下一个扩展名 */ }
    }
  }
}

// 2) 将高分辨率摄影实图（或兜底绘制图）规范缩放至合适演示尺寸，写入 IndexedDB 并导出至本地 HTTP 路由
const renderedArt = await page.evaluate(async (extList) => {
  const mkCanvas = (w, h) => {
    const c = document.createElement('canvas')
    c.width = w
    c.height = h
    return [c, c.getContext('2d')]
  }

  const normalizePhoto = (dataUrl) => new Promise((resolve, reject) => {
    const img = new Image()
    img.onload = () => {
      const maxEdge = 1280
      const scale = Math.min(1, maxEdge / Math.max(img.naturalWidth || 1, img.naturalHeight || 1))
      const w = Math.max(1, Math.round(img.naturalWidth * scale))
      const h = Math.max(1, Math.round(img.naturalHeight * scale))
      const [c, ctx] = mkCanvas(w, h)
      ctx.drawImage(img, 0, 0, w, h)
      c.toBlob((blob) => {
        if (!blob) { reject(new Error('toBlob failed')); return }
        const outUrl = c.toDataURL('image/jpeg', 0.92)
        resolve({ blob, w, h, mime: 'image/jpeg', b64: outUrl.split(',')[1] })
      }, 'image/jpeg', 0.92)
    }
    img.onerror = () => reject(new Error('load photo failed'))
    img.src = dataUrl
  })

  const drawFallback = (key) => {
    const isVert = ['neon1', 'dawn', 'mountain'].includes(key)
    const isSq = key === 'prod'
    const [w, h] = isSq ? [1024, 1024] : isVert ? [900, 1200] : [1200, 900]
    const [c, ctx] = mkCanvas(w, h)
    const g = ctx.createLinearGradient(0, 0, w, h)
    g.addColorStop(0, '#1c2432')
    g.addColorStop(1, '#3b4d63')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, w, h)
    return c
  }

  const extMap = Object.fromEntries((extList || []).map((x) => [x.key, x]))
  const keys = ['neon1', 'dawn', 'prod', 'cafe', 'portrait', 'mountain', 'tram', 'botanical']

  const db = await new Promise((resolve, reject) => {
    const req = indexedDB.open('dsh-chunfeng-image', 1)
    req.onsuccess = () => resolve(req.result)
    req.onerror = () => reject(req.error)
  })

  const exported = []
  const now = Date.now()
  for (const key of keys) {
    const storageKey = `image:shot_${key}`
    let blob, width, height, mime, b64
    if (extMap[key]) {
      const out = await normalizePhoto(extMap[key].dataUrl)
      blob = out.blob; width = out.w; height = out.h; mime = out.mime; b64 = out.b64
    } else {
      const canvas = drawFallback(key)
      blob = await new Promise((r) => canvas.toBlob(r, 'image/jpeg', 0.9))
      width = canvas.width; height = canvas.height; mime = 'image/jpeg'
      b64 = canvas.toDataURL('image/jpeg', 0.9).split(',')[1]
    }
    await new Promise((resolve, reject) => {
      const tx = db.transaction('image_files', 'readwrite')
      tx.objectStore('image_files').put({ blob, type: mime, bytes: blob.size, width, height, at: now }, storageKey)
      tx.oncomplete = resolve
      tx.onerror = () => reject(tx.error)
    })
    exported.push({ key, storageKey, mimeType: mime, bytes: blob.size, width, height, b64 })
  }
  db.close()
  return exported
}, externalPhotos)

for (const art of renderedArt) {
  demoArtBuffers.set(art.key, { mimeType: art.mimeType, buffer: Buffer.from(art.b64, 'base64') })
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
          imgEntry('img_n1', byKey.neon1, '香港雨夜霓虹深巷街拍 · 青橙方案'),
          imgEntry('img_n2', byKey.tram, '港岛雨夜复古电车抓拍 · 暖光方案'),
          imgEntry('img_n3', byKey.dawn, '雨后老街破晓晨光 · 对比方案'),
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
        prompt: '雨后老街破晓晨光，湿润石板路与暖色晨雾倒影',
        storageKey: byKey.dawn.storageKey,
        primaryImageId: 'img_d1',
        images: [imgEntry('img_d1', byKey.dawn, '雨后老街破晓晨光，湿润石板路与暖色晨雾倒影')],
      },
      {
        id: 'i_prod',
        type: 'image',
        x: 1054,
        y: 230,
        w: 268,
        h: 296,
        name: '衍生 · 商业静物摄影',
        status: 'done',
        z: 2,
        ratio: '1:1',
        resolution: '2k',
        locked: true,
        prompt: '洞石台面磨砂琥珀香水瓶商业棚拍，自然晨光树影投射在微水泥墙面',
        storageKey: byKey.prod.storageKey,
        primaryImageId: 'img_p1',
        images: [imgEntry('img_p1', byKey.prod, '洞石台面磨砂琥珀香水瓶商业棚拍，自然晨光树影投射在微水泥墙面')],
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
      title: '香港雨夜霓虹街巷纪实',
      text: 'Leica 35mm 纪实夜拍，香港窄巷雨夜，青蓝与洋红老式霓虹招牌在湿润柏油路面拉出色彩倒影，前景风衣旅人撑透明雨伞背影。',
      category: '街头纪实',
      tags: ['35mm胶片', '雨夜', '香港街拍'],
      author: 'YukkCat',
      coverUrl: `${baseUrl}/demo-art/neon1.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/neon1.jpg`, `${baseUrl}/demo-art/tram.jpg`],
      sourceId: 'awesome-gpt-image',
      sourceName: 'Awesome GPT Image',
    },
    {
      id: 'pr_2',
      title: '午后雨窗手冲咖啡静物',
      text: '自然光生活摄影，雨珠挂满玻璃的窗边原木桌面，手冲陶瓷滤杯腾起细腻热气，粗陶咖啡杯与亚麻笔记本沐浴在午后暖阳里。',
      category: '生活静物',
      tags: ['自然光', '咖啡', '日系胶片'],
      author: 'YouMind',
      coverUrl: `${baseUrl}/demo-art/cafe.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/cafe.jpg`, `${baseUrl}/demo-art/botanical.jpg`],
      sourceId: 'youmind-gpt-image-2',
      sourceName: 'YouMind GPT Image 2',
    },
    {
      id: 'pr_3',
      title: '雨后老街破晓丁达尔晨光',
      text: 'Fujifilm Pro 400H 纪实摄影，雨后清晨寂静的旧城老巷，金橘色朝阳穿透晨雾照亮阳台绿植，湿润石板路倒映柔蓝天色。',
      category: '城市风光',
      tags: ['晨雾', '逆光', '石板路'],
      author: 'DavidWu',
      coverUrl: `${baseUrl}/demo-art/dawn.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/dawn.jpg`, `${baseUrl}/demo-art/neon1.jpg`],
      sourceId: 'awesome-gpt-image',
      sourceName: 'Awesome GPT Image',
    },
    {
      id: 'pr_4',
      title: '陶艺工坊自然光环境人像',
      text: 'Kodak Portra 400 纪实环境人像，穿着亚麻围裙的年轻东亚陶艺师在阳光工作坊拉坯塑形，柔和侧逆窗光与虚化陶器货架。',
      category: '纪实人像',
      tags: ['Portra400', '手工艺', '侧逆光'],
      author: 'Freestylefly',
      coverUrl: `${baseUrl}/demo-art/portrait.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/portrait.jpg`],
      sourceId: 'youmind-gpt-image-2',
      sourceName: 'YouMind GPT Image 2',
    },
    {
      id: 'pr_5',
      title: '洞石台面琥珀香水商业棚拍',
      text: '哈苏中画幅极简商业静物，无标磨砂琥珀玻璃香水瓶稳立于多孔洞石台座，清晨自然日光将橄榄叶柔影投在微水泥墙面。',
      category: '商业摄影',
      tags: ['产品静物', '光影', '哈苏中画幅'],
      author: 'Studio',
      coverUrl: `${baseUrl}/demo-art/prod.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/prod.jpg`, `${baseUrl}/demo-art/botanical.jpg`],
      sourceId: 'banana-prompt-quicker',
      sourceName: 'Banana Prompt Quicker',
    },
    {
      id: 'pr_6',
      title: '侘寂风日光原木室内一角',
      text: '室内空间自然采光实拍，微水泥白墙搭配原木躺椅与亚麻软垫，手工陶罐插着新鲜橄榄枝，在橡木地板留下斑驳午后日影。',
      category: '空间摄影',
      tags: ['微水泥', '自然采光', '家居'],
      author: 'NanoBanana',
      coverUrl: `${baseUrl}/demo-art/botanical.jpg`,
      referenceImageUrls: [],
      sourceId: 'banana-prompt-quicker',
      sourceName: 'Banana Prompt Quicker',
    },
    {
      id: 'pr_7',
      title: '港岛雨夜复古电车抓拍',
      text: '雨夜 35mm 街头抓拍，老式绿色双层有轨电车暖黄车灯穿透雨幕驶过街口，隔着挂满雨滴的车窗捕捉铁轨高光反射。',
      category: '街头纪实',
      tags: ['电车', '雨夜', '抓拍'],
      author: 'GPT4o Hub',
      coverUrl: `${baseUrl}/demo-art/tram.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/tram.jpg`],
      sourceId: 'awesome-gpt-image',
      sourceName: 'Awesome GPT Image',
    },
    {
      id: 'pr_8',
      title: '漓江晨雾喀斯特山水实景',
      text: '长焦压缩感自然风光摄影，破晓时分漓江如镜的深碧水面漂浮一叶旧竹筏，喀斯特峰林掩映在层叠山谷晨雾之中。',
      category: '城市风光',
      tags: ['漓江', '晨雾', '自然风光'],
      author: 'Quicker',
      coverUrl: `${baseUrl}/demo-art/mountain.jpg`,
      referenceImageUrls: [`${baseUrl}/demo-art/mountain.jpg`],
      sourceId: 'youmind-gpt-image-2',
      sourceName: 'YouMind GPT Image 2',
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
      prompt: '极简商业静物摄影，磨砂琥珀玻璃香水瓶置于天然洞石台面，晨光橄榄叶影投射在微水泥墙面，哈苏中画幅实拍',
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
        { storageKey: byKey.prod.storageKey, width: byKey.prod.width, height: byKey.prod.height, bytes: byKey.prod.bytes, mimeType: byKey.prod.mimeType, index: 0, status: 'done' },
        { storageKey: byKey.botanical.storageKey, width: byKey.botanical.width, height: byKey.botanical.height, bytes: byKey.botanical.bytes, mimeType: byKey.botanical.mimeType, index: 1, status: 'done' },
      ],
    },
    {
      id: 'rec_2',
      prompt: '午后雨窗边原木咖啡桌，手冲陶瓷滤杯微冒热气，窗玻璃挂着细碎雨珠，50mm f/1.8 自然光生活纪实',
      modelKey: 'ch_gemini:gemini-2.5-flash-image',
      modelLabel: 'Gemini 2.5 Flash Image',
      ratio: '4:3',
      resolution: '2k',
      size: '1152×864',
      count: 2,
      status: 'done',
      at: now - 620000,
      elapsedMs: 5600,
      images: [
        { storageKey: byKey.cafe.storageKey, width: byKey.cafe.width, height: byKey.cafe.height, bytes: byKey.cafe.bytes, mimeType: byKey.cafe.mimeType, index: 0, status: 'done' },
        { storageKey: byKey.portrait.storageKey, width: byKey.portrait.width, height: byKey.portrait.height, bytes: byKey.portrait.bytes, mimeType: byKey.portrait.mimeType, index: 1, status: 'done' },
      ],
    },
    {
      id: 'rec_3',
      prompt: '桂林漓江破晓实景风光，喀斯特峰林掩映在层叠山谷晨雾之中，镜面江水一叶旧竹筏轻泛',
      modelKey: 'ch_openai:gpt-image-1',
      modelLabel: 'GPT Image 1',
      ratio: '3:4',
      resolution: '2k',
      size: '864×1152',
      count: 1,
      status: 'done',
      at: now - 1200000,
      elapsedMs: 3800,
      images: [
        { storageKey: byKey.mountain.storageKey, width: byKey.mountain.width, height: byKey.mountain.height, bytes: byKey.mountain.bytes, mimeType: byKey.mountain.mimeType, index: 0, status: 'done' },
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
await page.mouse.move(maskBox.x + maskBox.w * 0.43, maskBox.y + maskBox.h * 0.525)
await page.mouse.down()
await page.mouse.move(maskBox.x + maskBox.w * 0.61, maskBox.y + maskBox.h * 0.525, { steps: 14 })
await page.mouse.move(maskBox.x + maskBox.w * 0.52, maskBox.y + maskBox.h * 0.495, { steps: 10 })
await page.mouse.up()
await page.evaluate(() => {
  const inp = document.querySelector('.cf-dialog .cf-input')
  if (!inp) return
  const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set
  setter.call(inp, '将透明雨伞替换为温暖发光的复古琥珀色油纸伞，保留雨夜地面反光')
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
    setter.call(ta, '极简商业静物摄影，磨砂琥珀玻璃香水瓶置于天然洞石台面，晨光橄榄叶影投射在微水泥墙面，哈苏中画幅实拍')
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
