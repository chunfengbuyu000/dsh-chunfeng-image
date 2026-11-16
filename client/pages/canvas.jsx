// 我的画布：列表页 + 画布编辑器（含底部 composer）
import React from 'react'
import { Canvas, useCamera } from '../canvas.jsx'
import { Empty, Icon, IconBtn, Btn, Dialog } from '../ui.jsx'
import { GRID_STYLES, NODE_TYPES, RATIOS, makeNode, newCanvas, newId, wrapInGroup, modelsWithCap, findModel } from '../store.js'

// ---------- 列表 ----------

export function CanvasListPage({ canvases, onOpen, onCreate, onRename, onDelete, onImport }) {
  const [renaming, setRenaming] = React.useState(null)
  const [confirm, setConfirm] = React.useState(null)

  return (
    <div className="cf-page">
      <div className="cf-page-inner">
        <div className="cf-page-head">
          <div>
            <h1 className="cf-page-title">无限画布</h1>
            <p className="cf-page-sub">在画布上生成、连接和重组图片与文字，让创作从单次生成变成连续推演。</p>
          </div>
          <div className="cf-page-actions">
            <Btn icon="upload" onClick={onImport}>导入画布</Btn>
            <Btn variant="primary" icon="plus" onClick={onCreate}>新建画布</Btn>
          </div>
        </div>

        {canvases.length === 0 ? (
          <Empty
            icon="canvas"
            title="还没有画布"
            hint="新建一个画布后，就可以独立保存节点、连线和画布外观。"
            action={<Btn variant="primary" icon="plus" onClick={onCreate}>新建画布</Btn>}
          />
        ) : (
          <div className="cf-card">
            <div className="cf-list-head">
              <span>名称</span>
              <span>内容</span>
              <span>更新</span>
            </div>
            <div className="cf-canvas-list">
              {canvases.map(c => (
                <div key={c.id} className="cf-canvas-row">
                  <button type="button" className="cf-canvas-name" style={{ textAlign: 'start' }} onClick={() => onOpen(c.id)}>
                    {c.name || '未命名画布'}
                  </button>
                  <span className="cf-canvas-meta">{c.nodes.length} 个节点 · {c.edges.length} 条连线</span>
                  <span className="cf-canvas-row-actions">
                    <IconBtn name="edit" label="重命名" onClick={() => setRenaming(c)} />
                    <IconBtn name="trash" label="删除" onClick={() => setConfirm(c)} />
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {renaming ? (
        <RenameDialog canvas={renaming} onClose={() => setRenaming(null)} onSubmit={(name) => { onRename(renaming.id, name); setRenaming(null) }} />
      ) : null}

      {confirm ? (
        <Dialog title="删除画布？" onClose={() => setConfirm(null)}
          footer={<>
            <Btn onClick={() => setConfirm(null)}>取消</Btn>
            <Btn variant="danger" onClick={() => { onDelete(confirm.id); setConfirm(null) }}>删除</Btn>
          </>}>
          <p style={{ fontSize: 13, color: 'var(--cf-muted)', lineHeight: 1.6 }}>
            将删除「{confirm.name || '未命名画布'}」，里面的 {confirm.nodes.length} 个节点和 {confirm.edges.length} 条连线会一起移除。
          </p>
        </Dialog>
      ) : null}
    </div>
  )
}

function RenameDialog({ canvas, onClose, onSubmit }) {
  const [name, setName] = React.useState(canvas.name || '')
  return (
    <Dialog title="重命名画布" onClose={onClose}
      footer={<><Btn onClick={onClose}>取消</Btn><Btn variant="primary" onClick={() => onSubmit(name.trim() || '未命名画布')}>保存</Btn></>}>
      <label className="cf-field">
        <span className="cf-label">名称</span>
        <input className="cf-input" value={name} autoFocus onChange={e => setName(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') onSubmit(name.trim() || '未命名画布') }} />
      </label>
    </Dialog>
  )
}

// ---------- 编辑器 ----------

const RAIL = [
  { id: 'select', label: '选择', icon: 'cursor', key: 'V' },
  { id: 'pan', label: '移动', icon: 'hand', key: 'H' },
  { id: 'focus', label: '适应', icon: 'target', key: 'F' },
  { sep: true },
  { id: 'text', label: '文本', icon: 'text', key: 'T' },
  { id: 'image', label: '图片', icon: 'image', key: 'I' },
  { id: 'audio', label: '音频', icon: 'audio', key: 'A' },
  { id: 'config', label: '配置', icon: 'sliders', key: 'C' },
  { id: 'group', label: '分组', icon: 'group', key: 'G' },
]

export function CanvasEditor({ canvas, channels, defaults, onChange, onBack, say }) {
  const camApi = useCamera()
  const { cam, moveTo } = camApi
  const [selection, setSelection] = React.useState([])
  const [tool, setTool] = React.useState('select')
  const [prompt, setPrompt] = React.useState('')
  const [ratio, setRatio] = React.useState(defaults?.ratio || '1:1')
  const [count, setCount] = React.useState(defaults?.count || 1)
  const [modelKey, setModelKey] = React.useState(defaults?.modelKey || '')
  const [pickerOpen, setPickerOpen] = React.useState(false)
  const [camera, setCamera] = React.useState(null)

  const nodes = canvas.nodes
  const edges = canvas.edges
  const pickedNodes = nodes.filter(n => selection.includes(n.id))
  const one = pickedNodes.length === 1 ? pickedNodes[0] : null
  const imageModels = modelsWithCap(channels, 'image')
  const activeModel = findModel(channels, modelKey) || imageModels[0] || null

  // 选中单个图片节点时，composer 绑定到它
  React.useEffect(() => {
    if (one && (one.type === 'image' || one.type === 'audio')) {
      setPrompt(one.prompt || '')
      if (one.ratio) setRatio(one.ratio)
    }
  }, [one?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  const setNodes = (next) => onChange({ nodes: next, updatedAt: Date.now() })
  const setEdges = (next) => onChange({ edges: next, updatedAt: Date.now() })

  const updateNode = (id, patch) => setNodes(nodes.map(n => (n.id === id ? { ...n, ...patch } : n)))

  const onMove = (ids, dx, dy) => {
    const set = new Set(ids)
    setNodes(nodes.map(n => (set.has(n.id) ? { ...n, x: Math.round(n.x + dx), y: Math.round(n.y + dy) } : n)))
  }
  const onResize = (id, w, h) => updateNode(id, { w, h })
  const onConnect = (from, to) => setEdges([...edges, { id: newId('e'), from, to }])
  const onRemoveEdge = (id) => setEdges(edges.filter(e => e.id !== id))

  const addNode = (type) => {
    const c = cam.current
    const at = { x: (window.innerWidth / 2 - c.tx) / c.s, y: (window.innerHeight / 2 - c.ty) / c.s }
    const n = makeNode(type, at, type === 'config' ? { modelKey: modelKey || imageModels[0]?.key || '', ratio, count } : {})
    setNodes([...nodes, n])
    setSelection([n.id])
    say?.(`已新建${NODE_TYPES[type]}节点`)
  }

  // 生成：A 批仍是本地占位，B 批接真实渠道
  const generate = () => {
    const text = prompt.trim()
    if (!text) return
    const target = one && one.type === 'image' ? one : null
    if (target) {
      updateNode(target.id, { prompt: text, status: 'running', ratio })
      setTimeout(() => updateNode(target.id, { status: 'done' }), 900)
      say?.('开始生成')
      return
    }
    // 没有选中图片节点：按张数新建
    const c = cam.current
    const base = { x: (window.innerWidth / 2 - c.tx) / c.s, y: (window.innerHeight / 2 - c.ty) / c.s }
    const made = Array.from({ length: count }, (_, i) => makeNode('image', { x: base.x + i * 260, y: base.y }, {
      prompt: text, ratio, status: 'running',
    }))
    setNodes([...nodes, ...made])
    setSelection(made.map(n => n.id))
    setTimeout(() => {
      setNodes(prev => prev.map(n => (made.some(m => m.id === n.id) ? { ...n, status: 'done' } : n)))
    }, 900)
    setPrompt('')
    say?.('开始生成')
  }

  const wrap = () => {
    const g = wrapInGroup(nodes, selection)
    if (!g) return
    setNodes([g, ...nodes])
    setSelection([g.id])
  }
  const removeSelected = () => {
    const set = new Set(selection)
    setNodes(nodes.filter(n => !set.has(n.id)))
    setEdges(edges.filter(e => !set.has(e.from) && !set.has(e.to)))
    setSelection([])
  }
  const duplicate = () => {
    const picks = nodes.filter(n => selection.includes(n.id))
    if (!picks.length) return
    const map = {}
    const copies = picks.map(n => {
      const id = newId(n.type[0])
      map[n.id] = id
      return { ...n, id, x: n.x + 40, y: n.y + 40, status: 'idle' }
    })
    const inner = edges.filter(e => map[e.from] && map[e.to]).map(e => ({ id: newId('e'), from: map[e.from], to: map[e.to] }))
    setNodes([...nodes, ...copies])
    setEdges([...edges, ...inner])
    setSelection(copies.map(c => c.id))
  }

  React.useEffect(() => {
    const onKey = (e) => {
      if (/input|textarea|select/i.test(e.target.tagName)) return
      const mod = e.metaKey || e.ctrlKey
      if (mod && e.key.toLowerCase() === 'd') { e.preventDefault(); duplicate(); return }
      if (mod && e.key.toLowerCase() === 'g') { e.preventDefault(); wrap(); return }
      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); removeSelected(); return }
      if (e.key === 'Escape') { setSelection([]); return }
      const k = e.key.toLowerCase()
      if (k === 'v') setTool('select')
      if (k === 'h') setTool('pan')
      if (k === 't') addNode('text')
      if (k === 'i') addNode('image')
      if (k === 'a') addNode('audio')
      if (k === 'c') addNode('config')
      if (k === 'g') addNode('group')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [nodes, edges, selection, prompt, ratio, count, modelKey])

  return (
    <div className="cf-editor">
      <nav className="cf-rail" aria-label="画布工具">
        <IconBtn name="back" label="返回画布列表" onClick={onBack} />
        <span className="cf-rail-sep" aria-hidden="true" />
        {RAIL.map((t, i) => (t.sep ? <span key={`s${i}`} className="cf-rail-sep" aria-hidden="true" /> : (
          <button
            key={t.id}
            type="button"
            className={`cf-rail-btn${tool === t.id ? ' is-on' : ''}`}
            title={`${t.label}  ${t.key}`}
            aria-label={t.label}
            aria-pressed={tool === t.id}
            onClick={() => {
              if (t.id === 'focus') { setCamera({ ...cam.current, s: cam.current.s }); return }
              if (['text', 'image', 'audio', 'config', 'group'].includes(t.id)) { addNode(t.id); return }
              setTool(t.id)
            }}
          >
            <Icon name={t.icon} size={18} />
          </button>
        )))}
      </nav>

      <div className="cf-editor-main">
        <Canvas
          nodes={nodes}
          edges={edges}
          selection={selection}
          channels={channels}
          grid={canvas.grid || 'dots'}
          minimap
          camera={camera}
          camApi={camApi}
          showHint={!pickedNodes.length}
          onSelection={setSelection}
          onMove={onMove}
          onResize={onResize}
          onConnect={onConnect}
          onRemoveEdge={onRemoveEdge}
          onOpenNode={(node) => { setSelection([node.id]); setPrompt(node.prompt || node.text || '') }}
        />

        <div className="cf-composer">
          <textarea
            className="cf-composer-input"
            value={prompt}
            placeholder={one?.type === 'image' ? '描述你想把这张图改成什么' : '描述画面主体、风格、构图、光线和用途'}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => { if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) { e.preventDefault(); generate() } }}
          />
          <div className="cf-composer-bar">
            <div style={{ position: 'relative' }}>
              <button type="button" className="cf-model-pill" onClick={() => setPickerOpen(v => !v)}>
                <Icon name="sparkle" size={13} />
                <span>{activeModel ? activeModel.label : '选择模型'}</span>
                <Icon name="chevron" size={12} />
              </button>
              {pickerOpen ? (
                <div className="cf-menu" style={{ position: 'absolute', bottom: 'calc(100% + 6px)', left: 0, width: 280 }}>
                  <p className="cf-menu-head">生图模型</p>
                  {imageModels.length ? imageModels.map(m => (
                    <button key={m.key} type="button" className={`cf-menu-item${m.key === (modelKey || imageModels[0]?.key) ? ' is-on' : ''}`}
                      onClick={() => { setModelKey(m.key); setPickerOpen(false) }}>
                      {m.label} <span style={{ color: 'var(--cf-caption)' }}>· {m.channel.name || m.channel.protocol}</span>
                    </button>
                  )) : <p className="cf-menu-head" style={{ whiteSpace: 'normal' }}>还没有可用模型，去「配置 → 渠道」添加。</p>}
                </div>
              ) : null}
            </div>

            <div className="cf-chips">
              {RATIOS.map(r => (
                <button key={r.id} type="button" className={`cf-chip cf-chip--tag${ratio === r.id ? ' is-on' : ''}`}
                  onClick={() => setRatio(r.id)}>{r.label}</button>
              ))}
            </div>

            <div className="cf-seg" role="group" aria-label="张数">
              {[1, 2, 4].map(n => (
                <button key={n} type="button" className={count === n ? 'is-on' : ''} onClick={() => setCount(n)}>{n} 张</button>
              ))}
            </div>

            <button type="button" className="cf-btn cf-btn--primary cf-btn--sm" onClick={generate} disabled={!prompt.trim()}>
              <Icon name="play" size={13} />
              生成
            </button>
            {pickedNodes.length ? (
              <span style={{ display: 'inline-flex', gap: 4 }}>
                <IconBtn name="link" label="包成组" onClick={wrap} />
                <IconBtn name="trash" label="删除选中" onClick={removeSelected} />
              </span>
            ) : null}
            <span className="cf-composer-hint">⌘⏎ 生成</span>
          </div>
        </div>
      </div>
    </div>
  )
}
