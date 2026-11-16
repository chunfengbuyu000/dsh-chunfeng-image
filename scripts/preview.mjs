// 构建一个独立 HTML 预览，方便在浏览器里直接看画布。
import { build } from 'esbuild'
import { writeFile, mkdir } from 'node:fs/promises'

const out = 'preview'
await mkdir(out, { recursive: true })

await build({
  entryPoints: ['scripts/preview-entry.jsx'],
  outfile: `${out}/app.js`,
  bundle: true,
  format: 'esm',
  platform: 'browser',
  target: 'chrome120',
  jsx: 'transform',
  jsxFactory: 'React.createElement',
  jsxFragment: 'React.Fragment',
  loader: { '.css': 'text', '.js': 'jsx' },
  define: { 'process.env.NODE_ENV': '"production"' },
  minify: false,
  logLevel: 'error',
})

const css = await import('node:fs/promises').then(f => f.readFile('preview/app.js', 'utf8'))
// 把内联的 CSS 抽出来单独注入，避免 text loader 的字符串进 JS
const PAGES = ['editor', 'editor-ref', 'editor-ratio', 'editor-demo', 'canvas', 'studio', 'prompts', 'assets', 'config', 'config-defaults', 'config-sources']
const mk = (view) => `<!doctype html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>春风画布 · 预览</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500&display=swap" rel="stylesheet">
<style>html,body{margin:0;height:100%;background:#0d0b0a}#root{height:100%}</style>
</head>
<body>
<div id="root"></div>
<script>
window.__CF_VIEW = ${JSON.stringify(view.startsWith('editor-') ? 'editor' : view)};
window.__CF_DEV_MENU = ${JSON.stringify(view === 'editor-ref' ? 'ref' : view === 'editor-ratio' ? 'ratio' : null)};
window.__CF_DEV_DEMO = ${JSON.stringify(view === 'editor-demo')};
</script>
<script type="module" src="./app.js"></script>
</body>
</html>`
await writeFile(`${out}/index.html`, mk('editor'))
for (const view of PAGES) await writeFile(`${out}/${view}.html`, mk(view))
console.log('preview/index.html 已生成')
