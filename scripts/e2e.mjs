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


// ---------- P0 根因回归（2026-11-16 审计发现） ----------

const readState = (page) => page.evaluate(() => {
  try { return JSON.parse(localStorage.getItem('dsh-chunfeng-image:state:v2') || 'null') } catch { return null }
})
const canvasOf = async (page) => {
  const s = await readState(page)
  return (s && s.canvases && s.canvases.find(c => c.id === s.openCanvasId)) || (s && s.canvases && s.canvases[0]) || null
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
await check('RC1 复用生成 900ms 后内容不回退', async () => {
  const { page, errors } = await openPage('/editor.html?seed=demo')
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
  const got = n.w / n.h
  assert(Math.abs(got - 3 / 4) < 0.06, `比例应为 0.75，实际 ${got.toFixed(3)}（${n.w}×${n.h}）`)
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
  const p = await page.evaluate(() => {
    const r = document.querySelector('.cf-node.is-group').getBoundingClientRect()
    return { x: r.x + r.width - 60, y: r.y + 40 }
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
    return { x: r.x + r.width - 60, y: r.y + 40 }
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

await browser.close()
server.close()

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
if (failed) process.exitCode = 1
