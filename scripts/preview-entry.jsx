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
window.__CF_DEV_MENU = window.__CF_DEV_MENU || null

const base = { ...initialState(), view: view === 'editor' ? 'canvas' : view, openCanvasId: null }
if (view !== 'canvas' || view === 'editor' || true) {
  // 一份示例画布，让列表页有内容、编辑器可进
  const cv = { ...newCanvas('霓虹街角'), ...seedCanvas() }
  base.canvases = [cv]
  if (view === 'editor') base.openCanvasId = cv.id
}
const seed = new URLSearchParams(location.search).get('seed')
if (seed === 'demo' || window.__CF_DEV_DEMO) {
  base.channels = [{
    id: 'ch_demo', name: '默认渠道', protocol: 'openai', baseUrl: 'https://api.openai.com/v1',
    keyHint: 'demo', hasKey: true, enabled: true,
    models: [{ id: 'seedream-5-pro', label: 'Seedream 5.0 Pro', caps: ['image'], enabled: true, source: 'manual' }],
  }]
  base.defaults.image.modelKey = 'ch_demo:seedream-5-pro'
  window.__CF_DEV_PROMPT = '低角度仰拍，超广角镜头，强烈透视近大远小，一位年轻男生，撞色街头运动穿搭，宽松运动长裤，复古球衣，厚底运动鞋，银色链条项链，墨镜架在头顶，蹲姿，手持金属罐伸向镜头，罐身凝着水珠，背景是简洁的现代建筑，午后硬光'
}
if (!new URLSearchParams(location.search).has('raw')) localStorage.setItem(KEY, JSON.stringify(base))

createRoot(document.getElementById('root')).render(React.createElement(App))
