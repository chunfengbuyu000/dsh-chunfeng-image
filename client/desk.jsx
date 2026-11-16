// 画布工作台主界面。
import React from 'react'
import { Canvas, useCamera } from './canvas.jsx'
import { reducer } from './reducer.js'
import { initialState, seedCanvas, TYPE_LABEL, GRID_STYLES, IMAGE_MODELS } from './store.js'
import { Inspector, PromptLibrary, ModelsPanel, AssetsPanel, LogsPanel } from './panels.jsx'
import { Icon, Dialog, Toast } from './ui.jsx'
import css from './css.js'

const TOOLS = [
  { id: 'select', label: '选择', key: 'V', icon: 'cursor' },
  { id: 'pan', label: '移动', key: 'H', icon: 'hand' },
  { id: 'focus', label: '居中', key: 'F', icon: 'target' },
  { sep: true },
  { id: 'text', label: '文本', key: 'T', icon: 'text' },
  { id: 'image', label: '图片', key: 'I', icon: 'image' },
  { id: 'video', label: '视频', key: 'M', icon: 'video' },
  { id: 'audio', label: '音频', key: 'A', icon: 'audio' },
  { id: 'config', label: '配置', key: 'C', icon: 'sliders' },
  { id: 'group', label: '分组', key: 'G', icon: 'group' },
]

const PANELS = [
  { id: 'inspector', label: '检视', icon: 'sliders' },
  { id: 'prompts', label: '提示词', icon: 'book' },
  { id: 'models', label: '模型', icon: 'chip' },
  { id: 'assets', label: '素材', icon: 'image' },
  { id: 'logs', label: '记录', icon: 'list' },
]

let logSeq = 0

export function apply(ctx) {
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, Desk))
  ctx.effect(() => {
    let release = null
    const mount = () => {
      release?.()
      release = ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
        name: 'sidebar.panellist', id: PANEL_ID, order: 6, label: () => '春风画布',
      }, PanelIcon))
    }
    mount()
    return () => release?.()
  }, 'dsh-chunfeng-image: sidebar entry')
}

function PanelIcon() {
  return <Icon name="canvas" size={16} />
}


export function Desk() {
  const [state, dispatch] = React.useReducer(reducer, undefined, () => {
    const s = initialState()
    const seed = seedCanvas()
    return { ...s, nodes: seed.nodes, edges: seed.edges }
  })
  const camApi = useCamera()
  const { cam, moveTo } = camApi
  const [tool, setTool] = React.useState('select')
  const [stageSize, setStageSize] = React.useState({ w: 1200, h: 800 })
  const [sceneReady, setSceneReady] = React.useState(false)
  const [toast, setToast] = React.useState(null)
  const [menuOpen, setMenuOpen] = React.useState(false)
  const [shortcutsOpen, setShortcutsOpen] = React.useState(false)
  const [detailNode, setDetailNode] = React.useState(null)
  const [logs, setLogs] = React.useState([])
  const [workbench, setWorkbench] = React.useState(null)
  const stageRef = React.useRef(null)

  const selected = state.nodes.find(n => state.selection.includes(n.id)) || null
  const say = React.useCallback((text, kind) => {
    setToast({ text, kind, id: Date.now() })
    setTimeout(() => setToast(t => (t && Date.now() - t.id > 2200 ? null : t)), 2400)
  }, [])

  const worldEl = () => document.querySelector('.world')

  const fitView = React.useCallback(() => {
    const el = worldEl()
    if (!el || !state.nodes.length) return
    const pad = 80
    const minX = Math.min(...state.nodes.map(n => n.x)) - pad
    const minY = Math.min(...state.nodes.map(n => n.y)) - pad
    const maxX = Math.max(...state.nodes.map(n => n.x + n.w)) + pad
    const maxY = Math.max(...state.nodes.map(n => n.y + n.h)) + pad
    const s = Math.min(1.4, Math.max(0.1, Math.min(stageSize.w / (maxX - minX), stageSize.h / (maxY - minY))))
    moveTo(el, pad - minX * s, pad - minY * s, s, () => {})
  }, [state.nodes, stageSize, moveTo])

  // 首屏取景
  React.useEffect(() => {
    if (sceneReady || !state.nodes.length) return
    const t = setTimeout(() => { fitView(); setSceneReady(true) }, 60)
    return () => clearTimeout(t)
  }, [sceneReady, state.nodes.length, fitView])

  const zoomBy = (factor) => {
    const el = worldEl()
    if (!el) return
    const cx = stageSize.w / 2, cy = stageSize.h / 2
    const c = cam.current
    const wx = (cx - c.tx) / c.ts, wy = (cy - c.ty) / c.ts
    const ns = Math.min(3, Math.max(0.1, c.ts * factor))
    moveTo(el, cx - wx * ns, cy - wy * ns, ns, () => {})
  }

  const addNode = React.useCallback((type) => {
    const el = worldEl()
    const c = cam.current
    const at = {
      x: (stageSize.w / 2 - c.tx) / c.ts,
      y: (stageSize.h / 2 - c.ty) / c.ts,
    }
    const jitter = (state.nodes.length % 6) * 26
    dispatch({ type: 'add-node', nodeType: type, at: { x: at.x + jitter, y: at.y + jitter } })
    say(`已新建${TYPE_LABEL[type]}节点`)
  }, [stageSize, state.nodes.length, say])

  const runGenerate = React.useCallback((node) => {
    const model = IMAGE_MODELS[0]
    const at = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' })
    dispatch({ type: 'update-node', id: node.id, patch: { status: 'running' } })
    setLogs(prev => [{ id: `l${++logSeq}`, prompt: node.prompt, model: model.label, ratio: node.ratio || '1:1', at, status: 'running' }, ...prev])
    // 原型：本地等待后标记完成。真实实现里这里是调用渠道接口。
    setTimeout(() => {
      dispatch({ type: 'update-node', id: node.id, patch: { status: 'done' } })
      setLogs(prev => prev.map(l => l.status === 'running' ? { ...l, status: 'done' } : l))
      say('图片已生成')
    }, 1100)
  }, [say])

  // ---- 键盘 ----
  React.useEffect(() => {
    const onKey = (e) => {
      const inField = /input|textarea|select/i.test(e.target.tagName)
      const mod = e.metaKey || e.ctrlKey
      if (inField && !(mod && (e.key === 's' || e.key === 'z'))) return
      if (mod && e.key.toLowerCase() === 'z') {
        e.preventDefault()
        dispatch({ type: e.shiftKey ? 'redo' : 'undo' })
        return
      }
      if (mod && e.key.toLowerCase() === 'a') { e.preventDefault(); dispatch({ type: 'select', ids: state.nodes.map(n => n.id) }); return }
      if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); dispatch({ type: 'duplicate-selected' }); return }
      if (mod && e.key.toLowerCase() === 'g') { e.preventDefault(); dispatch({ type: e.shiftKey ? 'ungroup' : 'wrap-group' }); return }
      if (mod) return
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); dispatch({ type: 'remove-selected' }); return }
      if (e.key === 'Escape') { dispatch({ type: 'select', ids: [] }); setDetailNode(null); setMenuOpen(false); return }
      const map = { v: 'select', h: 'pan', f: 'focus', t: 'text', i: 'image', m: 'video', a: 'audio', c: 'config', g: 'group' }
      const k = e.key.toLowerCase()
      if (map[k]) {
        const t = map[k]
        if (t === 'focus') { fitView(); return }
        if (['text', 'image', 'video', 'audio', 'config', 'group'].includes(t)) { addNode(t); setTool('select'); return }
        setTool(t)
      }
      if (e.key === '0') fitView()
      if (e.key === '1') zoomBy(1 / 1.25)
      if (e.key === '2') zoomBy(1.25)
      if (e.key === '?') setShortcutsOpen(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [state.nodes, addNode, fitView])

  // ---- 导出 ----
  const exportPng = () => {
    const nodes = state.nodes.filter(n => n.type !== 'group')
    if (!nodes.length) { say('画布是空的'); return }
    const pad = 60
    const minX = Math.min(...nodes.map(n => n.x)) - pad
    const minY = Math.min(...nodes.map(n => n.y)) - pad
    const maxX = Math.max(...nodes.map(n => n.x + n.w)) + pad
    const maxY = Math.max(...nodes.map(n => n.y + n.h)) + pad
    const out = document.createElement('canvas')
    out.width = Math.ceil(maxX - minX)
    out.height = Math.ceil(maxY - minY)
    const ctx = out.getContext('2d')
    ctx.fillStyle = '#0d0b0a'
    ctx.fillRect(0, 0, out.width, out.height)
    for (const n of nodes) {
      const x = n.x - minX, y = n.y - minY
      // 节点底板
      ctx.fillStyle = '#1a1512'
      ctx.strokeStyle = 'rgba(255,244,230,0.16)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.roundRect(x + 0.5, y + 0.5, n.w - 1, n.h - 1, 12)
      ctx.fill(); ctx.stroke()
      // 把节点里的 canvas 画进去
      const src = document.querySelector(`[data-id="${n.id}"] canvas`)
      if (src) {
        try { ctx.drawImage(src, x + 1, y + 34, n.w - 2, Math.min(n.w - 2, n.h - 36)) } catch { /* 忽略跨元素绘制失败 */ }
      }
      ctx.fillStyle = '#f2e9dd'
      ctx.font = '500 12px system-ui, sans-serif'
      const label = (n.prompt || n.text || n.name || TYPE_LABEL[n.type]).slice(0, 22)
      ctx.fillText(label, x + 10, y + 22)
    }
    out.toBlob(blob => {
      const a = document.createElement('a')
      a.href = URL.createObjectURL(blob)
      a.download = `画布-${new Date().toISOString().slice(0, 10)}.png`
      a.click()
      setTimeout(() => URL.revokeObjectURL(a.href), 2000)
      say(`已导出 ${out.width} × ${out.height}`)
    }, 'image/png')
  }

  const exportJson = () => {
    const data = { version: 1, nodes: state.nodes, edges: state.edges, grid: state.grid }
    const a = document.createElement('a')
    a.href = URL.createObjectURL(new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' }))
    a.download = '画布.json'
    a.click()
    say('已导出工程文件')
  }

  const zoomPct = Math.round(cam.current.s * 100)

  return (
    <div className={`desk ${state.theme === 'light' ? 'is-light' : ''}`}>
      <style>{css}</style>
      <header className="topbar">
        <div className="topbar-left">
          <button type="button" className="icon-btn" aria-label="画布菜单" onClick={() => setMenuOpen(v => !v)}>
            <Icon name="menu" size={16} />
          </button>
          <div className="title-block">
            <h1 className="desk-title">{state.canvases[0].name}</h1>
            <p className="desk-meta">{state.nodes.length} 个节点 · {state.edges.length} 条连线</p>
          </div>
        </div>

        <div className="topbar-mid">
          <button type="button" className="icon-btn" onClick={() => dispatch({ type: 'undo' })} disabled={!state.undo.length} aria-label="撤销" title="撤销 ⌘Z">
            <Icon name="undo" size={16} />
          </button>
          <button type="button" className="icon-btn" onClick={() => dispatch({ type: 'redo' })} disabled={!state.redo.length} aria-label="重做" title="重做 ⇧⌘Z">
            <Icon name="redo" size={16} />
          </button>
          <span className="topbar-sep" aria-hidden="true" />
          <button type="button" className="icon-btn" onClick={() => dispatch({ type: 'toggle-minimap' })} aria-label="缩略图" title="缩略图" aria-pressed={state.minimap}>
            <Icon name="map" size={16} />
          </button>
          <button type="button" className="icon-btn" onClick={() => setShortcutsOpen(true)} aria-label="快捷键" title="快捷键 ?">
            <Icon name="keyboard" size={16} />
          </button>
        </div>

        <div className="topbar-right">
          <div className="seg" role="group" aria-label="网格样式">
            {GRID_STYLES.map(g => (
              <button key={g.id} type="button" className={`seg-btn${state.grid === g.id ? ' is-on' : ''}`} onClick={() => dispatch({ type: 'set-grid', grid: g.id })}>{g.label}</button>
            ))}
          </div>
          <button type="button" className="icon-btn" onClick={() => dispatch({ type: 'set-theme', theme: state.theme === 'dark' ? 'light' : 'dark' })} aria-label="主题" title="切换主题">
            <Icon name={state.theme === 'dark' ? 'sun' : 'moon'} size={16} />
          </button>
          <button type="button" className="btn btn--ghost btn--sm" onClick={exportJson}>导出工程</button>
          <button type="button" className="btn btn--primary btn--sm" onClick={exportPng}>导出 PNG</button>
        </div>
      </header>

      {menuOpen ? (
        <div className="menu" role="menu">
          <p className="menu-head">画布列表</p>
          {state.canvases.map(c => (
            <button key={c.id} type="button" className="menu-item is-on" role="menuitem">{c.name}</button>
          ))}
          <span className="menu-sep" aria-hidden="true" />
          <button type="button" className="menu-item" role="menuitem" onClick={() => { exportPng(); setMenuOpen(false) }}>导出当前画布</button>
          <button type="button" className="menu-item" role="menuitem" onClick={() => { dispatch({ type: 'clear' }); setMenuOpen(false); say('画布已清空') }}>清空画布</button>
          <button type="button" className="menu-item" role="menuitem" onClick={() => { setShortcutsOpen(true); setMenuOpen(false) }}>键盘快捷键</button>
        </div>
      ) : null}

      <div className="body">
        <nav className="rail" aria-label="画布工具">
          {TOOLS.map((t, i) => t.sep ? <span key={`s${i}`} className="rail-sep" aria-hidden="true" /> : (
            <button
              key={t.id}
              type="button"
              className={`rail-btn${tool === t.id ? ' is-on' : ''}`}
              onClick={() => {
                if (t.id === 'focus') { fitView(); return }
                if (['text', 'image', 'video', 'audio', 'config', 'group'].includes(t.id)) { addNode(t.id); return }
                setTool(t.id)
              }}
              title={`${t.label}  ${t.key}`}
              aria-pressed={tool === t.id}
            >
              <Icon name={t.icon} size={18} />
              <span className="rail-label">{t.label}</span>
            </button>
          ))}
        </nav>

        <div className="board" ref={stageRef}>
          <Canvas
            state={state}
            dispatch={dispatch}
            camApi={camApi}
            tool={tool}
            setTool={setTool}
            showMinimap={state.minimap}
            onCanvasSize={setStageSize}
            onOpenNode={(node, kind) => {
              if (kind === 'text') { dispatch({ type: 'select', ids: [node.id] }); dispatch({ type: 'set-panel', panel: 'inspector' }) ; return }
              setDetailNode(node)
              dispatch({ type: 'set-panel', panel: 'inspector' })
            }}
          />

          <div className="hud hud--zoom">
            <button type="button" className="hud-btn" onClick={() => zoomBy(1 / 1.25)} aria-label="缩小">−</button>
            <input
              className="zoom-range"
              type="range"
              min={10} max={300} step={1}
              value={zoomPct}
              aria-label="精确调整缩放"
              onChange={(e) => {
                const el = worldEl()
                if (!el) return
                const ns = Number(e.target.value) / 100
                const cx = stageSize.w / 2, cy = stageSize.h / 2
                const c = cam.current
                const wx = (cx - c.ts) / c.s, wy = (cy - c.ts) / c.s
                moveTo(el, cx - ((cx - c.tx) / c.s) * ns, cy - ((cy - c.ty) / c.s) * ns, ns, () => {})
              }}
            />
            <button type="button" className="hud-btn" onClick={() => zoomBy(1.25)} aria-label="放大">+</button>
            <span className="hud-num">{zoomPct}%</span>
            <button type="button" className="hud-btn hud-btn--wide" onClick={fitView}>适应</button>
          </div>

          <p className="hud hud--hint">
            {tool === 'pan' ? '按住拖动移动画布 · 滚轮缩放' : '拖空白处框选 · 空格拖动平移 · 从节点右上端口拖线连接'}
          </p>
        </div>

        <aside className="side" aria-label="面板">
          <div className="side-tabs" role="tablist">
            {PANELS.map(p => (
              <button
                key={p.id}
                type="button"
                role="tab"
                aria-selected={state.panel === p.id}
                className={`side-tab${state.panel === p.id ? ' is-on' : ''}`}
                onClick={() => dispatch({ type: 'set-panel', panel: p.id })}
                title={p.label}
                aria-label={p.label}
              >
                <Icon name={p.icon} size={16} />
              </button>
            ))}
          </div>
          <div className="side-body">
            {state.panel === 'inspector' ? (
              <Inspector
                node={selected}
                dispatch={dispatch}
                selectedCount={state.selection.length}
                onDelete={() => dispatch({ type: 'remove-selected' })}
                onDuplicate={() => dispatch({ type: 'duplicate-selected' })}
                onWrap={() => dispatch({ type: 'wrap-group' })}
                onUngroup={() => dispatch({ type: 'ungroup' })}
              />
            ) : null}
            {state.panel === 'prompts' ? (
              <PromptLibrary onUse={(p) => {
                if (selected && (selected.type === 'image' || selected.type === 'video' || selected.type === 'audio')) {
                  dispatch({ type: 'update-node', id: selected.id, patch: { prompt: p.text } })
                  say(`已填入「${p.name}」`)
                } else {
                  const at = { x: 400, y: 400 }
                  dispatch({ type: 'add-node', nodeType: 'image', at, extra: { prompt: p.text } })
                  say(`已用「${p.name}」新建图片节点`)
                }
              }} />
            ) : null}
            {state.panel === 'models' ? <ModelsPanel /> : null}
            {state.panel === 'assets' ? <AssetsPanel nodes={state.nodes} /> : null}
            {state.panel === 'logs' ? <LogsPanel logs={logs} /> : null}
          </div>
        </aside>
      </div>

      <footer className="statusbar">
        <span>{state.selection.length ? `已选 ${state.selection.length} 个` : '未选中'}</span>
        <span className="statusbar-sep" aria-hidden="true" />
        <span>{TOOLS.find(t => t.id === tool)?.label || '选择'}</span>
        <span className="statusbar-sep" aria-hidden="true" />
        <span>{state.grid === 'dots' ? '点阵' : state.grid === 'lines' ? '网格' : '空白'}底</span>
        <span className="statusbar-grow" />
        <span>⌘Z 撤销 · ⇧⌘Z 重做 · ⌫ 删除 · 0 适应</span>
      </footer>

      {detailNode ? (
        <NodeDetail
          node={detailNode}
          onClose={() => setDetailNode(null)}
          onGenerate={() => { runGenerate(detailNode); setDetailNode(null) }}
          dispatch={dispatch}
        />
      ) : null}

      {shortcutsOpen ? <Shortcuts onClose={() => setShortcutsOpen(false)} /> : null}

      {toast ? <Toast text={toast.text} kind={toast.kind} /> : null}
    </div>
  )
}

// ---------- 节点详情 ----------

function NodeDetail({ node, onClose, onGenerate, dispatch }) {
  const isImage = node.type === 'image'
  return (
    <Dialog title={node.name || (isImage ? '图片节点' : `${TYPE_LABEL[node.type]}节点`)} onClose={onClose} wide>
      <div className="detail">
        <div className="detail-media">
          {isImage ? (
            node.src ? <img src={node.src} alt={node.prompt || ''} /> : <div className="detail-void">这一格还没有图。填提示词后点生成。</div>
          ) : (
            <div className="detail-void">{TYPE_LABEL[node.type]}节点</div>
          )}
        </div>
        <div className="detail-side">
          <p className="detail-k">提示词</p>
          <p className="detail-prompt">{node.prompt || node.text || '（空）'}</p>
          <p className="detail-k">参数</p>
          <ul className="detail-facts">
            <li>{node.w} × {node.h}</li>
            {node.ratio ? <li>比例 {node.ratio}</li> : null}
            {node.model ? <li>{IMAGE_MODELS.find(m => m.id === node.model)?.label || node.model}</li> : null}
            <li>{node.status === 'running' ? '生成中' : node.status === 'done' ? '已完成' : '待生成'}</li>
          </ul>
          <div className="detail-actions">
            {isImage ? (
              <button type="button" className="btn btn--primary btn--sm" onClick={onGenerate} disabled={node.status === 'running'}>
                {node.status === 'running' ? '生成中…' : node.status === 'done' ? '重新生成' : '开始生成'}
              </button>
            ) : null}
            <button type="button" className="btn btn--ghost btn--sm" onClick={onClose}>关闭</button>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

// ---------- 快捷键 ----------

const KEYS = [
  ['选择', 'V'], ['移动', 'H'], ['居中 / 适应', 'F 或 0'],
  ['文本节点', 'T'], ['图片节点', 'I'], ['视频节点', 'M'],
  ['音频节点', 'A'], ['配置节点', 'C'], ['分组', 'G'],
  ['框选', '拖空白处'], ['平移', '空格 + 拖'], ['缩放', '滚轮'],
  ['撤销', '⌘Z'], ['重做', '⇧⌘Z'], ['全选', '⌘A'],
  ['复制节点', '⌘D'], ['包成组 / 解散', '⌘G / ⇧⌘G'],
  ['删除', '⌫'], ['关闭弹层', 'Esc'], ['本表', '?'],
]

function Shortcuts({ onClose }) {
  return (
    <Dialog title="键盘快捷键" onClose={onClose}>
      <ul className="keys">
        {KEYS.map(([k, v]) => (
          <li key={k}><span>{k}</span><kbd>{v}</kbd></li>
        ))}
      </ul>
    </Dialog>
  )
}
