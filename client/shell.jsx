// 春风画布 · 外壳：顶栏导航 + 页面路由 + 状态
import React from 'react'
import css from './css.js'
import { Boundary, Icon, IconBtn, Toast } from './ui.jsx'
import { VIEWS, initialState, newCanvas, newId, seedCanvas, sanitizeState, currentView, navigate, openCanvasIn, closeCanvasIn } from './store.js'
import { CanvasListPage, CanvasEditor } from './pages/canvas.jsx'
import { StudioPage } from './pages/studio.jsx'
import { PromptsPage } from './pages/prompts.jsx'
import { AssetsPage } from './pages/assets.jsx'
import { ConfigPage } from './pages/config.jsx'

const STORE_KEY = 'dsh-chunfeng-image:state:v2'

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

export function App() {
  const [state, setState] = React.useState(() => {
    const saved = load()
    // 读到的任何数据都先清洗一遍：字段缺失、类型不对、旧版本结构都在这里收敛
    if (saved) return sanitizeState(saved)
    // 首次启动给一张示例画布，但停在列表页（一进来就进编辑器会让人以为导航失灵）
    const init = initialState()
    init.canvases = [{ ...newCanvas('霓虹街角'), ...seedCanvas() }]
    init.openCanvasId = null
    return init
  })
  const [studioPrompt, setStudioPrompt] = React.useState('')
  const [returnTo, setReturnTo] = React.useState(null)
  const [toast, setToast] = React.useState(null)
  const toastTimer = React.useRef(0)

  React.useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)) } catch { /* 存不下就算了 */ }
  }, [state])

  const say = React.useCallback((text, kind) => {
    setToast({ text, kind, at: Date.now() })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2200)
  }, [])
  React.useEffect(() => () => clearTimeout(toastTimer.current), [])

  const patch = (p) => setState(s => ({ ...s, ...p }))
  const openCanvas = state.canvases.find(c => c.id === state.openCanvasId) || null
  const view = currentView(state)

  const go = (target) => {
    setReturnTo(null)
    setState(s => navigate(s, target))
  }

  // RC1：必须用函数式更新。之前用渲染闭包里的 state.canvases 重建数组，
  // 同一 tick 内连续两次写入（先 nodes 再 edges）会互相覆盖，表现为
  // 「删了边没删节点」「⌘D 无效」「生成后内容回退」。
  // p 既可以是对象补丁，也可以是 (canvas) => 补丁，方便一次原子提交多个字段。
  const updateCanvas = (canvasId, p) =>
    setState(s => ({
      ...s,
      canvases: s.canvases.map(c => {
        if (c.id !== canvasId) return c
        const next = typeof p === 'function' ? p(c) : p
        return { ...c, ...next, updatedAt: Date.now() }
      }),
    }))

  const createCanvas = () => {
    // 新建必须是空白画布：之前把演示场景一起种进去，每张新画布都带 6 节点 4 连线
    const cv = newCanvas()
    setState(s => ({ ...s, canvases: [cv, ...s.canvases], openCanvasId: cv.id, view: 'canvas' }))
    say('已新建画布')
  }

  const importCanvas = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json,application/json'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      try {
        const data = JSON.parse(await file.text())
        const cv = {
          ...newCanvas(data.name || '导入的画布'),
          nodes: Array.isArray(data.nodes) ? data.nodes : [],
          edges: Array.isArray(data.edges) ? data.edges : [],
          grid: data.grid || 'dots',
        }
        setState(s => ({ ...s, canvases: [cv, ...s.canvases], openCanvasId: cv.id, view: 'canvas' }))
        say('画布已导入')
      } catch {
        say('导入失败，请检查文件格式', 'error')
      }
    }
    input.click()
  }

  /** 使用一条提示词：在画布里新建节点，否则回生图工作台填进去。 */
  const usePrompt = (p) => {
    if (openCanvas) {
      const node = {
        id: newId('i'), type: 'image',
        x: 220 + openCanvas.nodes.length * 26, y: 220 + openCanvas.nodes.length * 20,
        w: 240, h: 268, name: '', status: 'idle', z: 2,
        prompt: p.text, ratio: state.defaults.image.ratio || '1:1', locked: true,
      }
      updateCanvas(openCanvas.id, { nodes: [...openCanvas.nodes, node] })
      say(`已用「${p.title}」新建图片节点`)
      return
    }
    setStudioPrompt(p.text)
    patch({ view: 'studio', openCanvasId: null })
    say(`已填入「${p.title}」`)
  }

  return (
    <div className="cf-app">
      <style>{css}</style>
      <div className="cf-ambient" aria-hidden="true"><i /><i /><i /></div>

      <header className="cf-nav">
        <span className="cf-brand">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3.5L21 19H3z" />
            <path d="M12 9.5v5.5" strokeLinecap="round" />
          </svg>
          春风画布
        </span>

        <nav className="cf-nav-list" aria-label="主导航">
          {VIEWS.map(v => {
            const on = v.id === 'canvas' ? (view === 'canvas' || view === 'editor') : view === v.id
            return (
              <button key={v.id} type="button" className={`cf-nav-item${on ? ' is-on' : ''}`}
                onClick={() => go(v.id)} aria-current={on ? 'page' : undefined}>
                <Icon name={v.icon} size={15} />
                {v.label}
              </button>
            )
          })}
        </nav>

        <div className="cf-nav-right">
          {openCanvas ? (
            <>
              <span style={{ fontSize: 12, color: 'var(--cf-muted)', maxWidth: 160, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                {openCanvas.name}
              </span>
              <div className="cf-seg" role="group" aria-label="网格样式">
                {[{ id: 'dots', label: '点阵' }, { id: 'lines', label: '网格' }, { id: 'blank', label: '空白' }].map(g => (
                  <button key={g.id} type="button" className={(openCanvas.grid || 'dots') === g.id ? 'is-on' : ''}
                    onClick={() => updateCanvas(openCanvas.id, { grid: g.id })}>{g.label}</button>
                ))}
              </div>
            </>
          ) : null}
          <span className="cf-nav-version">v0.1.0</span>
          <IconBtn name="keyboard" label="快捷键" onClick={() => say('V 选择 · H 移动 · T/I/A/C/G 新建节点 · ⌘D 复制 · ⌘G 包组 · ⌫ 删除')} />
        </div>
      </header>

      <Boundary key={view}>
      {view === 'editor' && openCanvas ? (
        <CanvasEditor
          canvas={openCanvas}
          channels={state.channels}
          defaults={state.defaults.image}
          onChange={(p) => updateCanvas(openCanvas.id, p)}
          onBack={() => setState(s => closeCanvasIn(s))}
          say={say}
        />
      ) : null}

      {view === 'canvas' ? (
        <CanvasListPage
          canvases={state.canvases}
          onOpen={(id) => setState(s => openCanvasIn(s, id))}
          onCreate={createCanvas}
          onRename={(id, name) => updateCanvas(id, { name })}
          onDelete={(id) => setState(s => ({ ...s, canvases: s.canvases.filter(c => c.id !== id), openCanvasId: null }))}
          onImport={importCanvas}
        />
      ) : null}

      {view === 'studio' ? (
        <StudioPage
          channels={state.channels}
          defaults={state.defaults.image}
          records={state.records}
          prompt={studioPrompt}
          onPrompt={setStudioPrompt}
          onCreateRecord={(rec) => setState(s => ({ ...s, records: [rec, ...s.records] }))}
          onDeleteRecords={(ids) => setState(s => ({ ...s, records: s.records.filter(r => !ids.includes(r.id)) }))}
          onLookupPrompts={() => { setReturnTo('studio'); patch({ view: 'prompts', openCanvasId: null }) }}
          say={say}
        />
      ) : null}

      {view === 'prompts' ? (
        <PromptsPage
          prompts={state.prompts}
          sources={state.promptSources}
          returnTo={returnTo}
          onUse={usePrompt}
          onBack={returnTo ? () => { setReturnTo(null); patch({ view: returnTo }) } : null}
        />
      ) : null}

      {view === 'assets' ? (
        <AssetsPage
          assets={state.assets}
          onSave={(next) => patch({ assets: next })}
          onDelete={(id) => setState(s => ({ ...s, assets: s.assets.filter(a => a.id !== id) }))}
          onImport={() => say('资产包导入接 Host 后可用')}
          say={say}
        />
      ) : null}

      {view === 'config' ? (
        <ConfigPage
          tab={state.configTab}
          onTab={(t) => patch({ configTab: t })}
          channels={state.channels}
          onChannels={(channels) => patch({ channels })}
          defaults={state.defaults}
          onDefaults={(defaults) => patch({ defaults })}
          promptSources={state.promptSources}
          onPromptSources={(promptSources) => patch({ promptSources })}
          say={say}
        />
      ) : null}

      </Boundary>

      {toast ? <Toast text={toast.text} kind={toast.kind} /> : null}
    </div>
  )
}
