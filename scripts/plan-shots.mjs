// 重构后全功能页效果图：把 8 个页面的完整状态渲染成一张可滚动的 HTML。
// 样式直接读 client/tokens.css + client/styles.css（真样式，不是重画），
// 图标复用 client/ui.jsx 的 <Icon>，因此图上看到的间距/圆角/描边就是将来真实的样子。
import { build } from 'esbuild'
import { readFile, writeFile, mkdir } from 'node:fs/promises'

const OUT = 'preview'
await mkdir(OUT, { recursive: true })

// React 一起打进来：这是一张独立效果图页，不是宿主里的 lazy 模块。
await build({
  entryPoints: ['scripts/plan-entry.jsx'],
  outfile: `${OUT}/plan.js`,
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'chrome120',
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  loader: { '.css': 'text' },
  define: { 'process.env.NODE_ENV': '"production"' },
  logLevel: 'error',
})

const LIGHT_OVERRIDE = '<style>.cf-app{color-scheme:light}@media (prefers-color-scheme: dark){.cf-app:not(.light):not(.dark){--cf-bg:#fff;--cf-panel:#fff;--cf-panel-2:#f9fafb;--cf-panel-3:#f0f2f5;--cf-fg:#0f1115;--cf-fg-2:#61666b;--cf-muted:#81858c;--cf-caption:#81858c;--cf-line:rgb(15 17 21 / .09);--cf-line-strong:rgb(15 17 21 / .16);--cf-primary:#0f1115;--cf-primary-fg:#fff;--cf-primary-hover:#353638;--cf-link:#4176e6;--cf-hover:rgb(15 17 21 / .05);--cf-active:rgb(15 17 21 / .09);--cf-focus:#5686fe;--cf-glass:color-mix(in srgb,#fff 76%,transparent);--cf-glass-soft:color-mix(in srgb,#fff 58%,transparent)}}</style>'
const tokens = await readFile('client/tokens.css', 'utf8')
const styles = await readFile('client/styles.css', 'utf8')

const html = `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>春风画布 · 重构后全功能页</title>
<style>${tokens}</style>
<style>${styles}</style>
<style>
  html, body { margin: 0; height: 100%; background: var(--cf-bg, #17161a); }
  #root { height: 100%; }
  .plan-wrap { height: 100%; overflow-y: auto; overflow-x: clip; }
  .plan-doc { max-width: 1560px; margin-inline: auto; padding: 40px 32px 80px; display: grid; gap: 48px; }
  .plan-h { display: flex; align-items: baseline; gap: 14px; margin-bottom: 14px; }
  .plan-h h2 { margin: 0; font-size: 22px; font-weight: 600; letter-spacing: -0.01em; color: var(--cf-fg); }
  .plan-h span { font-size: 13px; color: var(--cf-muted); }
  .plan-h i { font-style: normal; font-size: 12px; color: var(--cf-caption); margin-inline-start: auto; }
  .plan-frame {
    position: relative; height: 860px; border-radius: 18px; overflow: clip;
    background: var(--cf-bg); box-shadow: inset 0 0 0 1px var(--cf-line-strong), 0 30px 70px -40px oklch(0% 0 0 / 0.9);
  }
  .plan-frame > .cf-app { height: 100%; }
  .plan-frame--tall { height: 980px; }
  .plan-legend { display: flex; flex-wrap: wrap; gap: 8px 20px; margin-top: 10px; font-size: 12px; color: var(--cf-muted); }
  .plan-legend b { color: var(--cf-fg-2); font-weight: 500; }
  .plan-new { display: inline-flex; align-items: center; height: 18px; padding-inline: 7px; border-radius: 999px; font-size: 11px; font-weight: 500; color: var(--cf-primary-fg); background: var(--cf-primary); }
  .plan-aug { display: inline-flex; align-items: center; height: 18px; padding-inline: 7px; border-radius: 999px; font-size: 11px; font-weight: 500; color: var(--cf-fg); background: var(--cf-active); box-shadow: inset 0 0 0 1px var(--cf-line-strong); }
</style>
</head>
<body>
<div id="root"></div>
<script type="module" src="./plan.js"></script>
</body>
</html>`

await writeFile(`${OUT}/plan.html`, html)
// 明色主题：把 .cf-app 强制 light（覆盖系统偏好与宿主 .dark）
await writeFile(`${OUT}/plan-light.html`, html
  .replace('<style>' + tokens + '</style>', '<style>' + tokens + '</style>' + LIGHT_OVERRIDE))
// 暗色主题：在 html 上加 class="dark"，走 tokens.css 里的 .dark 分支
await writeFile(`${OUT}/plan-dark.html`, html
  .replace('<html lang="zh-CN">', '<html lang="zh-CN" class="dark">'))
console.log('preview/plan.html + plan-light.html + plan-dark.html 已生成')
