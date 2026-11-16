// 审计用浏览器脚手架（只读）。
// 用法：
//   import { open, audit } from '/Users/xiao/tools/chunfeng/dsh-chunfeng-image/scripts/audit-lib.mjs'
//   const { page, errors, close } = await open('/editor.html?seed=demo')
//   ... 操作 ...
//   await close()   // 关掉浏览器（每个 process 只开一次更好）
//
// 约定：只在 /tmp 下写文件；不要启动或关闭 8899 端口上的服务；不要构建预览。
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { join } from 'node:path'
import { existsSync } from 'node:fs'

const HALLMARK = '/Users/xiao/.agents/skills/hallmark'
const BASE = 'http://127.0.0.1:8899'

let puppeteer = null
const req = createRequire(join(HALLMARK, 'noop.js'))
for (const name of ['puppeteer-core', 'puppeteer']) {
  try {
    puppeteer = (await import(pathToFileURL(req.resolve(name)).href)).default
    break
  } catch { /* 换下一个 */ }
}
if (!puppeteer) throw new Error('找不到 puppeteer')

const exe = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
].find(existsSync)

const browser = await puppeteer.launch({
  executablePath: exe,
  headless: 'new',
  args: ['--no-sandbox', '--disable-dev-shm-usage'],
})

/** 打开一个预览页。path 形如 '/editor.html?seed=demo'。 */
export async function open(path = '/index.html', opts = {}) {
  const page = await browser.newPage()
  await page.setViewport({ width: opts.width || 1440, height: opts.height || 900, deviceScaleFactor: 1 })
  const errors = []
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message))
  page.on('console', (m) => {
    if (m.type() !== 'error') return
    const t = m.text()
    if (/favicon|404/i.test(t)) return
    errors.push('console: ' + t.slice(0, 400))
  })
  await page.goto(BASE + path, { waitUntil: 'networkidle0' })
  // 每次从干净状态开始
  await page.evaluate(() => localStorage.clear())
  await page.reload({ waitUntil: 'networkidle0' })
  await wait(page, 350)
  return { page, errors, close: () => page.close() }
}

export const wait = (page, ms) => page.evaluate((n) => new Promise((r) => setTimeout(r, n)), ms)

/** 按可见文字点一个元素。返回是否点到。 */
export async function clickText(page, selector, text) {
  return page.evaluate((sel, t) => {
    const el = [...document.querySelectorAll(sel)].find((e) => (e.textContent || '').trim().includes(t))
    if (!el) return false
    el.click()
    return true
  }, selector, text)
}

/** 真实鼠标点一个选择器（比 evaluate click 更接近用户）。 */
export async function mouseClick(page, selector, index = 0) {
  const box = await page.evaluate((sel, i) => {
    const el = document.querySelectorAll(sel)[i]
    if (!el) return null
    const r = el.getBoundingClientRect()
    if (!r.width || !r.height) return null
    return { x: r.x + r.width / 2, y: r.y + r.height / 2 }
  }, selector, index)
  if (!box) return false
  await page.mouse.click(box.x, box.y)
  return true
}

export async function text(page, selector) {
  return page.evaluate((sel) => document.querySelector(sel)?.textContent?.trim() ?? null, selector)
}

export async function count(page, selector) {
  return page.evaluate((sel) => document.querySelectorAll(sel).length, selector)
}

export async function close() {
  await browser.close()
}
