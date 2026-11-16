// 只用于本地预览：把 App 挂到 #root，并把样式字符串注入 <style>。
// 每个页面一个 html（见 scripts/preview.mjs），这里按 window.__CF_VIEW 写一份完整状态再挂载。
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '../client/shell.jsx'
import css from '../client/css.js'
import { initialState, newCanvas, seedCanvas } from '../client/store.js'

const style = document.createElement('style')
style.textContent = css
document.head.append(style)

const KEY = 'dsh-chunfeng-image:state:v2'
const view = window.__CF_VIEW || 'canvas'

const base = { ...initialState(), view: view === 'editor' ? 'canvas' : view, openCanvasId: null }
if (view !== 'canvas' || view === 'editor' || true) {
  // 一份示例画布，让列表页有内容、编辑器可进
  const cv = { ...newCanvas('霓虹街角'), ...seedCanvas() }
  base.canvases = [cv]
  if (view === 'editor') base.openCanvasId = cv.id
}
localStorage.setItem(KEY, JSON.stringify(base))

createRoot(document.getElementById('root')).render(React.createElement(App))
