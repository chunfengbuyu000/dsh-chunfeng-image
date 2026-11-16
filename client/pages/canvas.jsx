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
  const [prompt, setPrompt] = React.useState(typeof window !== 'undefined' ? (window.__CF_DEV_PROMPT || '') : '')
  const [ratio, setRatio] = React.useState(defaults?.ratio || '1:1')
  const [count, setCount] = React.useState(defaults?.count || 1)
  const [modelKey, setModelKey] = React.useState(defaults?.modelKey || '')
  const [menu, setMenu] = React.useState(typeof window !== 'undefined' ? (window.__CF_DEV_MENU || null) : null)
  const [refs, setRefs] = React.useState([])
  const [camera, setCamera] = React.useState(null)
  const menuRef = React.useRef(null)
  const fileRef = React.useRef(null)

  // 点空白或 Esc 关菜单
  React.useEffect(() => {
    if (!menu) return
    const onDown = (e) => { if (!menuRef.current?.contains(e.target)) setMenu(null) }
    const onKey = (e) => { if (e.key === 'Escape') setMenu(null) }
    window.addEventListener('pointerdown', onDown)
    window.addEventListener('keydown', onKey)
    return () => { window.removeEventListener('pointerdown', onDown); window.removeEventListener('keydown', onKey) }
  }, [menu])

  const nodes = canvas.nodes
  const edges = canvas.edges
  const pickedNodes = nodes.filter(n => selection.includes(n.id))
  const one = pickedNodes.length === 1 ? pickedNodes[0] : null
  // 连到这个节点的素材，可以 @ 进提示词
  const connected = React.useMemo(() => {
    if (!one) return []
    return edges
      .filter(e => e.to === one.id)
      .map(e => nodes.find(n => n.id === e.from))
      .filter(n => n && n.type !== 'group' && n.type !== 'config')
  }, [one, edges, nodes])

  const uploadRef = () => {
    fileRef.current?.click()
  }
  const onFiles = (e) => {
    const files = [...(e.target.files || [])]
    if (!files.length) return
    setRefs(prev => [...prev, ...files.map(f => ({ id: f.name + f.size, name: f.name, url: URL.createObjectURL(f) }))])
    say?.(`已加入 ${files.length} 张参考图`)
    e.target.value = ''
  }

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
            rows={4}
            placeholder={one?.type === 'image' ? '描述你想把这张图改成什么' : '描述画面主体、风格、构图、光线和用途'}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); generate() }
            }}
          />

          <div className="cf-composer-bar" ref={menuRef}>
                        <div className="cf-composer-left">
{/* ＋ 参考 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn" onClick={() => setMenu(menu === 'ref' ? null : 'ref')}
                aria-expanded={menu === 'ref'} aria-haspopup="menu">
                <Icon name="plus" size={15} />
                参考
                {refs.length + connected.length ? <span className="cf-bar-badge">{refs.length + connected.length}</span> : null}
              </button>
              {menu === 'ref' ? (
                <div className="cf-menu cf-menu--up" role="menu">
                  <p className="cf-menu-head">画布上已连接的素材</p>
                  {connected.length ? connected.map(n => (
                    <button key={n.id} type="button" className="cf-menu-item" role="menuitem"
                      onClick={() => {
                        setPrompt(t => `${t}${t && !t.endsWith(' ') ? ' ' : ''}@${NODE_TYPES[n.type]}${n.name ? `:${n.name}` : ''} `)
                        setMenu(null)
                      }}>
                      <Icon name={n.type === 'image' ? 'image' : n.type === 'text' ? 'text' : 'audio'} size={14} />
                      <span className="cf-menu-label">{n.name || (n.prompt || n.text || '未命名素材').slice(0, 18)}</span>
                    </button>
                  )) : <p className="cf-menu-empty">先把素材连到这个节点，就能在这里引用</p>}
                  <div className="cf-menu-sep" />
                  <button type="button" className="cf-menu-item" role="menuitem" onClick={uploadRef}>
                    <Icon name="upload" size={14} />
                    <span className="cf-menu-label">从本地上传图片</span>
                  </button>
                  <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={onFiles} />
                </div>
              ) : null}
            </div>

            {/* 比例 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn" onClick={() => setMenu(menu === 'ratio' ? null : 'ratio')}
                aria-expanded={menu === 'ratio'} aria-haspopup="menu">
                <Icon name="frame" size={15} />
                {ratio}
              </button>
              {menu === 'ratio' ? (
                <div className="cf-menu cf-menu--up" role="menu">
                  <p className="cf-menu-head">画面比例</p>
                  {RATIOS.map(r => (
                    <button key={r.id} type="button" className={`cf-menu-item${ratio === r.id ? ' is-on' : ''}`} role="menuitem"
                      onClick={() => { setRatio(r.id); setMenu(null) }}>
                      <span className="cf-menu-label">{r.label}</span>
                      <span className="cf-menu-meta">{r.w} × {r.h}</span>
                    </button>
                  ))}
                </div>
              ) : null}
            </div>

            {/* 张数 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn" onClick={() => setMenu(menu === 'count' ? null : 'count')}
                aria-expanded={menu === 'count'} aria-haspopup="menu">
                {count} 张
                <Icon name="chevron" size={12} />
              </button>
              {menu === 'count' ? (
                <div className="cf-menu cf-menu--up" role="menu">
                  <p className="cf-menu-head">生成张数</p>
                  {[1, 2, 4].map(n => (
                    <button key={n} type="button" className={`cf-menu-item${count === n ? ' is-on' : ''}`} role="menuitem"
                      onClick={() => { setCount(n); setMenu(null) }}>{n} 张</button>
                  ))}
                </div>
              ) : null}
            </div>

            </div>

            <div className="cf-composer-right">
              {/* 模型 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn cf-bar-btn--select" onClick={() => setMenu(menu === 'model' ? null : 'model')}
                aria-expanded={menu === 'model'} aria-haspopup="menu">
                <Icon name="bars" size={15} />
                <span className="cf-bar-label">{activeModel ? activeModel.label : '选择模型'}</span>
                <Icon name="chevron" size={12} />
              </button>
              {menu === 'model' ? (
                <div className="cf-menu cf-menu--up" role="menu" style={{ width: 300 }}>
                  <p className="cf-menu-head">生图模型</p>
                  {imageModels.length ? imageModels.map(m => (
                    <button key={m.key} type="button" className={`cf-menu-item${m.key === modelKey ? ' is-on' : ''}`} role="menuitem"
                      onClick={() => { setModelKey(m.key); setMenu(null) }}>
                      <span className="cf-menu-label">{m.label}</span>
                      <span className="cf-menu-meta">{m.channel.name || m.channel.protocol}</span>
                    </button>
                  )) : <p className="cf-menu-empty">还没有可用模型，去「配置 → 渠道」添加</p>}
                </div>
              ) : null}
              </div>

              {pickedNodes.length ? (
              <span style={{ display: 'inline-flex', gap: 2 }}>
                <IconBtn name="group" label="包成组" onClick={wrap} />
                <IconBtn name="trash" label="删除选中" onClick={removeSelected} />
              </span>
            ) : null}

              <button type="button" className="cf-send" onClick={generate} disabled={!prompt.trim()}
                aria-label="生成" title="生成（Enter）">
                <Icon name="arrowUp" size={17} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
