// 只用于本地预览与 e2e：把 App 挂到 #root，并把样式字符串注入 <style>。
//
// 因为 shell 现在先跑迁移、再从 IndexedDB 读，所以这里必须在**挂载之前**
// 把预置数据写进 IDB，否则 App 会先渲染种子、再被异步数据覆盖，
// e2e 里断言节点/连线数量就会全错。
import React from 'react'
import { createRoot } from 'react-dom/client'
import { App } from '../client/shell.jsx'
import css from '../client/css.js'
import { initialState, newCanvas, seedCanvas } from '../client/store.js'
import { STORES, K, LS, SCHEMA_VERSION } from '../client/storage/keys.js'
import { setMany, clearAll, openDb, get } from '../client/storage/idb.js'

const style = document.createElement('style')
style.textContent = css
document.head.append(style)

const KEY = LS.legacyState
const view = window.__CF_VIEW || 'canvas'
window.__CF_DEV_MENU = window.__CF_DEV_MENU || null

const base = { ...initialState(), view: view === 'editor' ? 'canvas' : view, openCanvasId: null }
{
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

/**
 * 把预置数据写成「已经迁移完成」的样子：IDB 三层 + 配置层 localStorage + 标记。
 *
 * 默认**幂等**：已经预置过就不重写，这样刷新后 still 能验证「数据真的落盘了」。
 * 要每次全新开始（某些断言需要干净状态），加 ?fresh=1。
 */
async function prime() {
  await openDb()
  const force = new URLSearchParams(location.search).has('fresh')
  if (!force) {
    const existing = await get(STORES.appState, K.canvasProjects).catch(() => null)
    if (existing) return // 已有数据，保持原样（真实持久的语义）
  }
  await clearAll()
  await setMany(STORES.appState, [
    [K.canvasProjects, {
      state: { canvases: base.canvases, openCanvasId: base.openCanvasId, grid: base.grid },
      version: SCHEMA_VERSION,
    }],
    [K.prompts, base.prompts],
    [K.promptSources, base.promptSources],
    [K.assets, base.assets],
    [K.assistantMessages, base.assistantMessages],
  ])
  await setMany(STORES.meta, [
    [K.schemaVersion, SCHEMA_VERSION],
    [K.migratedAt, { at: Date.now(), fromKey: KEY, seeded: true }],
  ])
  try {
    // 已有配置就保留：测试会先注入自己的渠道再刷新，
    // 这里如果无条件覆盖，注入的渠道会被冲掉。
    const existing = localStorage.getItem(LS.config)
    const keepExisting = existing && JSON.parse(existing)?.channels?.length
    if (!keepExisting) {
      localStorage.setItem(LS.config, JSON.stringify({
        channels: base.channels, defaults: base.defaults, assistantModel: base.assistantModel,
      }))
    }
    // 合并而不是覆盖：LS.ui 里还有别的界面偏好（例如 showToolbarLabels），
    // 整体替换会把它们抹掉。
    let prevUi = {}
    try { prevUi = JSON.parse(localStorage.getItem(LS.ui) || '{}') || {} } catch { prevUi = {} }
    localStorage.setItem(LS.ui, JSON.stringify({
      ...prevUi, view: base.view, configTab: base.configTab, grid: base.grid,
    }))
    // 清掉旧整包键，确保走的是新路径而不是回退
    localStorage.removeItem(KEY)
  } catch { /* 隐私模式下 localStorage 可能不可写，不影响 IDB 路径 */ }
}

const raw = new URLSearchParams(location.search).has('raw')

// raw 模式：不预置，留给测试自己造数据（例如验证迁移）
if (raw) {
  createRoot(document.getElementById('root')).render(React.createElement(App))
} else {
  prime()
    .catch((error) => { console.error('[preview] 预置数据失败', error) })
    .finally(() => {
      createRoot(document.getElementById('root')).render(React.createElement(App))
    })
}
