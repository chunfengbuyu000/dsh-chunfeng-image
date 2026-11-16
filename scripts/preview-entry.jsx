// 只用于本地预览：把 App 挂到 #root，并把样式字符串注入 <style>。
// 支持 #canvas / #studio / #prompts / #assets / #config 直接落到对应页。
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '../client/shell.jsx'
import css from '../client/css.js'

const style = document.createElement('style')
style.textContent = css
document.head.append(style)

const KEY = 'dsh-chunfeng-image:state:v2'
const hash = window.__CF_VIEW || new URLSearchParams(location.search).get('view') || location.hash.replace('#', '')
if (hash) {
  const base = { view: hash === 'editor' ? 'canvas' : hash, openCanvasId: hash === 'editor' || !hash ? undefined : null }
  if (hash === 'canvas') { base.view = 'canvas'; base.openCanvasId = null }
  if (hash === 'config-defaults') { base.view = 'config'; base.configTab = 'defaults'; base.openCanvasId = null }
  if (hash === 'config-sources') { base.view = 'config'; base.configTab = 'sources'; base.openCanvasId = null }
  localStorage.setItem(KEY, JSON.stringify(base))
}

createRoot(document.getElementById('root')).render(React.createElement(App))
