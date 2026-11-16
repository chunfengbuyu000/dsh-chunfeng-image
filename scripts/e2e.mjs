// 端到端回归：真开浏览器点一遍，锁住「点了就崩」这类问题。
// 跑法：node scripts/e2e.mjs（会自动重新构建 preview）
import { createServer } from 'node:http'
import { readFile } from 'node:fs/promises'
import { extname, join, normalize } from 'node:path'
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { existsSync } from 'node:fs'
import { execSync } from 'node:child_process'

const ROOT = new URL('..', import.meta.url).pathname
const PREVIEW = join(ROOT, 'preview')
const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.svg': 'image/svg+xml' }

execSync('node scripts/preview.mjs', { cwd: ROOT, stdio: 'ignore' })

const server = createServer(async (req, res) => {
  const url = new URL(req.url, 'http://localhost')
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
const base = `http://127.0.0.1:${server.address().port}`

// puppeteer 从 hallmark 的工具目录取
const req = createRequire(join('/Users/xiao/.agents/skills/hallmark', 'noop.js'))
let puppeteer = null
for (const n of ['puppeteer-core', 'puppeteer']) {
  try { puppeteer = (await import(pathToFileURL(req.resolve(n)).href)).default; break } catch {}
}
if (!puppeteer) {
  console.error('需要 puppeteer 才能跑端到端检查，已跳过')
  server.close()
  process.exit(0)
}
const exe = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
].find(existsSync)

const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] })
let pass = 0
let failed = 0

async function openPage(path) {
  const page = await browser.newPage()
  await page.setViewport({ width: 1440, height: 900 })
  const errors = []
  page.on('pageerror', e => errors.push(e.message))
  page.on('console', m => { if (m.type() === 'error' && !/favicon|404/i.test(m.text())) errors.push(m.text()) })
  await page.goto(base + path, { waitUntil: 'networkidle0' })
  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle0' })
  await new Promise(r => setTimeout(r, 400))
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

console.log('端到端')

// 1. 顶栏每个导航都能切换（曾经的「点了没反应」）
await check('顶栏四个页都能切过去', async () => {
  const { page, errors } = await openPage('/canvas.html')
  for (const label of ['生图工作台', '提示词库', '我的资产', '配置']) {
    await page.evaluate((t) => {
      const btn = [...document.querySelectorAll('.cf-nav-item')].find(b => b.textContent.includes(t))
      btn.click()
    }, label)
    await new Promise(r => setTimeout(r, 150))
    const active = await page.$eval('.cf-nav-item.is-on', el => el.textContent.trim())
    assert(active.includes(label), `点「${label}」后高亮的是「${active}」`)
  }
  assert(!errors.length, '页面报错：' + errors.join(' | '))
  await page.close()
})

// 2. 没选中节点时点发送：新建节点且不崩（曾经的黑屏）
await check('输入提示词点发送不崩溃', async () => {
  const { page, errors } = await openPage('/editor.html')
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

await browser.close()
server.close()

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
if (failed) process.exitCode = 1
