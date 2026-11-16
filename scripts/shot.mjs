// 只截画布编辑器的输入框区域，用于看 composer 的实际效果
import { chromium } from 'playwright'

const url = process.argv[2] || 'http://127.0.0.1:8899/editor.html'
const out = process.argv[3] || '/tmp/composer.png'
const browser = await chromium.launch()
const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 })
await page.goto(url, { waitUntil: 'networkidle' })
await page.waitForTimeout(600)
const el = await page.$('.cf-composer')
await el.screenshot({ path: out })
console.log('saved', out)
await browser.close()
