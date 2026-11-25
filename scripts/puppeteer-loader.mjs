// 统一解析浏览器测试所需的 Puppeteer 与本地 Chrome/Chromium 可执行文件。
// 优先使用当前项目依赖中的 puppeteer-core / puppeteer；
// 若未安装，可通过环境变量 PUPPETEER_DIR 与 CHROME_PATH 指定外部路径。
import { createRequire } from 'node:module'
import { existsSync } from 'node:fs'
import { join } from 'node:path'
import { pathToFileURL } from 'node:url'

const PACKAGE_NAMES = ['puppeteer-core', 'puppeteer']

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge',
  '/usr/bin/google-chrome',
  '/usr/bin/google-chrome-stable',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
]

async function tryLoad(req) {
  for (const name of PACKAGE_NAMES) {
    try {
      const resolved = req.resolve(name)
      const mod = await import(pathToFileURL(resolved).href)
      if (mod?.default?.launch) return mod.default
      if (mod?.launch) return mod
    } catch { /* 尝试下一种加载方式 */ }
    try {
      const mod = req(name)
      if (mod?.default?.launch) return mod.default
      if (mod?.launch) return mod
    } catch { /* 试下一个包名 */ }
  }
  return null
}

/** 尝试加载 puppeteer-core 或 puppeteer；不可用时返回 null。 */
export async function loadPuppeteer() {
  const local = await tryLoad(createRequire(import.meta.url))
  if (local) return local

  const dir = process.env.PUPPETEER_DIR
  if (dir) {
    try {
      const fromEnv = await tryLoad(createRequire(join(dir, 'noop.js')))
      if (fromEnv) return fromEnv
    } catch { /* 忽略无效 PUPPETEER_DIR */ }
  }

  return null
}

/** 查找本地 Chrome / Chromium 可执行文件路径；找不到时返回 null。 */
export function findChromeExecutable() {
  const envPath = process.env.CHROME_PATH
  if (envPath && existsSync(envPath)) return envPath
  return CHROME_CANDIDATES.find((p) => existsSync(p)) || null
}
