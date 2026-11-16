// 截「悬浮在发送钮上」的状态，用于确认提示气泡与悬浮色
import { createRequire } from 'node:module'
import { pathToFileURL } from 'node:url'
import { join, dirname } from 'node:path'
import { existsSync } from 'node:fs'

const HERE = '/Users/xiao/.agents/skills/hallmark'
const req = createRequire(join(HERE, 'noop.js'))
let puppeteer = null
for (const n of ['puppeteer-core', 'puppeteer']) {
  try { puppeteer = (await import(pathToFileURL(req.resolve(n)).href)).default; break } catch {}
}
const CHROMES = ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome', '/Applications/Chromium.app/Contents/MacOS/Chromium']
const exe = CHROMES.find(p => existsSync(p))

const browser = await puppeteer.launch({ executablePath: exe, headless: 'new', args: ['--no-sandbox'] })
const page = await browser.newPage()
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 })
await page.goto('http://127.0.0.1:8899/editor-demo.html', { waitUntil: 'networkidle0' })
await new Promise(r => setTimeout(r, 700))
await page.hover('.cf-send')
await new Promise(r => setTimeout(r, 400))
const el = await page.$('.cf-composer')
await el.screenshot({ path: process.argv[2] || '/tmp/demo-hover.png' })
console.log('saved')
await browser.close()
