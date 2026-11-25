// 截「悬浮在发送钮上」的状态，用于确认提示气泡与悬浮色
import { loadPuppeteer, findChromeExecutable } from './puppeteer-loader.mjs'

const puppeteer = await loadPuppeteer()
const exe = findChromeExecutable()
if (!puppeteer || !exe) {
  console.error('需要 puppeteer 与本地 Chrome/Chromium，已跳过（可安装 puppeteer-core 或设置 PUPPETEER_DIR / CHROME_PATH）')
  process.exit(0)
}

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
