// 画布引擎：相机、网格、节点、连线、框选、缩略图。
// 相机只往 world 层写一个 transform，不改 CSS 变量。
import React from 'react'
import { canConnect, NODE_TYPES, findModel, makeNode } from './store.js'

export const MIN_S = 0.1
export const MAX_S = 3

const reduceMotion = () => typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion: reduce)').matches

export function useCamera() {
  const cam = React.useRef({ x: 0, y: 0, s: 1, tx: 0, ty: 0, ts: 1, raf: 0 })

  const apply = React.useCallback((el) => {
    if (!el) return
    const c = cam.current
    el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) scale(${c.s})`
  }, [])

  const tick = React.useCallback((el, onTick) => {
    const c = cam.current
    c.raf = 0
    const k = 0.24
    const dx = c.tx - c.x, dy = c.ty - c.y, ds = c.ts - c.s
    if (Math.abs(dx) < 0.2 && Math.abs(dy) < 0.2 && Math.abs(ds) < 0.0008) {
      c.x = c.tx; c.y = c.ty; c.s = c.ts
      apply(el); onTick?.()
      return
    }
    c.x += dx * k; c.y += dy * k; c.s += ds * k
    apply(el); onTick?.()
    c.raf = requestAnimationFrame(() => tick(el, onTick))
  }, [apply])

  const moveTo = React.useCallback((el, x, y, s, onTick) => {
    const c = cam.current
    c.tx = x; c.ty = y
    c.ts = Math.min(MAX_S, Math.max(MIN_S, s))
    if (reduceMotion()) {
      c.x = c.tx; c.y = c.ty; c.s = c.ts
      if (c.raf) cancelAnimationFrame(c.raf)
      c.raf = 0
      apply(el); onTick?.()
      return
    }
    if (!c.raf) c.raf = requestAnimationFrame(() => tick(el, onTick))
  }, [apply, tick])

  React.useEffect(() => () => { if (cam.current.raf) cancelAnimationFrame(cam.current.raf) }, [])
  return { cam, apply, moveTo }
}

function edgePath(a, b) {
  if (!a || !b) return ''
  const x1 = a.x + a.w, y1 = a.y + a.h / 2
  const x2 = b.x, y2 = b.y + b.h / 2
  const dx = Math.max(40, Math.abs(x2 - x1) * 0.45)
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

// ---------- 占位图：没接模型时按节点画一张可复现的抽象图 ----------

function Placeholder({ node }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const S = 480
    cv.width = S; cv.height = S
    const key = `${node.id}${node.prompt || ''}`
    let seed = 7
    for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) % 2147483647
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
    ctx.fillStyle = '#141414'
    ctx.fillRect(0, 0, S, S)
    const g = ctx.createRadialGradient(S * (0.25 + rnd() * 0.5), S * (0.3 + rnd() * 0.4), 24, S / 2, S / 2, S * 0.8)
    g.addColorStop(0, 'rgba(255,255,255,0.16)')
    g.addColorStop(0.5, 'rgba(255,255,255,0.05)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, S, S)
    ctx.strokeStyle = 'rgba(255,255,255,0.22)'
    ctx.lineWidth = 1.5
    for (let i = 0; i < 6; i++) {
      const y = S * (0.18 + rnd() * 0.66)
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(S, y + (rnd() - 0.5) * 80)
      ctx.stroke()
    }
    ctx.strokeStyle = 'rgba(255,255,255,0.4)'
    for (let i = 0; i < 3; i++) {
      const x = S * (0.2 + rnd() * 0.6)
      const r = 40 + rnd() * 90
      ctx.beginPath()
      if (rnd() < 0.5) ctx.arc(x, S * (0.3 + rnd() * 0.4), r, 0, Math.PI * 2)
      else ctx.rect(x - r / 2, S * (0.3 + rnd() * 0.4) - r / 2, r, r)
      ctx.stroke()
    }
  }, [node.id, node.prompt])
  return <canvas ref={ref} aria-label={node.prompt || '示例画面'} />
}

function NodeBody({ node, channels }) {
  switch (node.type) {
    case 'image':
      return (
        <div className="cf-node-media">
          {node.src ? <img src={node.src} alt={node.prompt || '图片'} draggable={false} /> : null}
          {!node.src && node.status === 'running' ? <div className="cf-node-void"><span className="cf-spin" aria-hidden="true" />生成中</div> : null}
          {!node.src && node.status !== 'running' ? <Placeholder node={node} /> : null}
          {!node.src && node.status === 'failed' ? <div className="cf-node-void">生成失败</div> : null}
        </div>
      )
    case 'audio':
      return (
        <div className="cf-node-audio">
          <div className="cf-wave" aria-hidden="true">
            {Array.from({ length: 26 }, (_, i) => <span key={i} style={{ height: `${16 + ((i * 41) % 66)}%` }} />)}
          </div>
          <p style={{ fontSize: 11, color: 'var(--cf-muted)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {node.status === 'running' ? '生成中' : (node.prompt || '空音频节点')}
          </p>
        </div>
      )
    case 'text':
      return (
        <div className="cf-node-text">
          {node.text ? <p style={{ fontSize: node.fontSize || 13 }}>{node.text}</p> : <p style={{ color: 'var(--cf-caption)' }}>双击编辑文本</p>}
        </div>
      )
    case 'config': {
      const picked = findModel(channels, node.modelKey)
      return (
        <div className="cf-node-config">
          <p className="cf-node-config-row"><span>模型</span><b>{picked ? picked.label : '未选择'}</b></p>
          <p className="cf-node-config-row"><span>比例</span><b>{node.ratio}</b></p>
          <p className="cf-node-config-row"><span>张数</span><b>{node.count}</b></p>
        </div>
      )
    }
    case 'group':
      return null
    default:
      return null
  }
}

export function Canvas({
  nodes, edges, selection, channels, grid, minimap,
  onSelection, onMove, onResize, onConnect, onRemoveEdge, onOpenNode,
  camera, camApi, showHint,
}) {
  const worldRef = React.useRef(null)
  const stageRef = React.useRef(null)
  const { cam, moveTo } = camApi
  const [size, setSize] = React.useState({ w: 1200, h: 700 })
  const [zoom, setZoom] = React.useState(Math.round(cam.current.s * 100))
  const pan = React.useRef(null)
  const drag = React.useRef(null)
  const resize = React.useRef(null)
  const marquee = React.useRef(null)
  const edgeFrom = React.useRef(null)
  const [edgePreview, setEdgePreview] = React.useState(null)
  const [box, setBox] = React.useState(null)
  const [space, setSpace] = React.useState(false)

  const paint = React.useCallback(() => camApi.apply(worldRef.current), [camApi])

  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect()
      setSize({ w: r.width, h: r.height })
    })
    ro.observe(el)
    const r = el.getBoundingClientRect()
    setSize({ w: r.width, h: r.height })
    return () => ro.disconnect()
  }, [])

  React.useEffect(() => { paint(); setZoom(Math.round(cam.current.s * 100)) })

  React.useEffect(() => {
    const down = (e) => { if (e.code === 'Space' && !/input|textarea/i.test(e.target.tagName)) { setSpace(true); e.preventDefault() } }
    const up = (e) => { if (e.code === 'Space') setSpace(false) }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  // 外部要求改相机时同步
  React.useEffect(() => {
    if (!camera) return
    const el = worldRef.current
    if (!el) return
    moveTo(el, camera.x, camera.y, camera.s, () => setZoom(Math.round(cam.current.s * 100)))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [camera])

  const rect = () => stageRef.current.getBoundingClientRect()
  const toWorld = (cx, cy) => {
    const r = rect()
    return { x: (cx - r.left - cam.current.x) / cam.current.s, y: (cy - r.top - cam.current.y) / cam.current.s }
  }

  const fit = React.useCallback(() => {
    const el = worldRef.current
    if (!el || !nodes.length) return
    const pad = 72
    const minX = Math.min(...nodes.map(n => n.x)) - pad
    const minY = Math.min(...nodes.map(n => n.y)) - pad
    const maxX = Math.max(...nodes.map(n => n.x + n.w)) + pad
    const maxY = Math.max(...nodes.map(n => n.y + n.h)) + pad
    const s = Math.min(1.35, Math.max(MIN_S, Math.min(size.w / (maxX - minX), size.h / (maxY - minY))))
    moveTo(el, pad - minX * s, pad - minY * s, s, () => setZoom(Math.round(cam.current.s * 100)))
  }, [nodes, size, moveTo, cam])

  React.useEffect(() => {
    const t = setTimeout(fit, 80)
    return () => clearTimeout(t)
    // 只在首次挂载与节点数从 0 变非 0 时取景
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const zoomBy = (factor) => {
    const el = worldRef.current
    if (!el) return
    const cx = size.w / 2, cy = size.h / 2
    const c = cam.current
    const wx = (cx - c.tx) / c.ts, wy = (cy - c.ty) / c.ts
    const ns = Math.min(MAX_S, Math.max(MIN_S, c.ts * factor))
    moveTo(el, cx - wx * ns, cy - wy * ns, ns, () => setZoom(Math.round(cam.current.s * 100)))
  }

  const onWheel = (e) => {
    e.preventDefault()
    const r = rect()
    const px = e.clientX - r.left, py = e.clientY - r.top
    const c = cam.current
    const wx = (px - c.tx) / c.ts, wy = (py - c.ty) / c.ts
    const ns = Math.min(MAX_S, Math.max(MIN_S, c.ts * Math.exp(-e.deltaY * 0.0018)))
    moveTo(worldRef.current, px - wx * ns, py - wy * ns, ns, () => setZoom(Math.round(cam.current.s * 100)))
  }

  const onDown = (e) => {
    if (e.button === 1 || space) {
      e.preventDefault()
      pan.current = { x: e.clientX, y: e.clientY, cx: cam.current.tx, cy: cam.current.ty }
      stageRef.current.classList.add('is-grabbing')
      stageRef.current.setPointerCapture(e.pointerId)
      return
    }
    if (e.button !== 0) return
    const p = toWorld(e.clientX, e.clientY)
    marquee.current = { x0: p.x, y0: p.y, additive: e.shiftKey }
    setBox({ x: p.x, y: p.y, w: 0, h: 0 })
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const onMovePointer = (e) => {
    if (pan.current) {
      const c = cam.current
      moveTo(worldRef.current, pan.current.cx + (e.clientX - pan.current.x), pan.current.cy + (e.clientY - pan.current.y), c.ts,
        () => setZoom(Math.round(cam.current.s * 100)))
      return
    }
    if (drag.current) {
      const p = toWorld(e.clientX, e.clientY)
      onMove(drag.current.ids, p.x - drag.current.p0.x, p.y - drag.current.p0.y)
      drag.current.p0 = p
      return
    }
    if (resize.current) {
      const p = toWorld(e.clientX, e.clientY)
      const r = resize.current
      const w = Math.max(140, Math.round(p.x - r.x))
      const h = r.locked ? Math.round(w / r.ratio) : Math.max(80, Math.round(p.y - r.y))
      onResize(r.id, w, h)
      return
    }
    if (marquee.current) {
      const p = toWorld(e.clientX, e.clientY)
      const m = marquee.current
      setBox({ x: Math.min(m.x0, p.x), y: Math.min(m.y0, p.y), w: Math.abs(p.x - m.x0), h: Math.abs(p.y - m.y0) })
      return
    }
    if (edgeFrom.current) setEdgePreview({ from: edgeFrom.current, to: toWorld(e.clientX, e.clientY) })
  }

  const onUp = (e) => {
    if (pan.current) { pan.current = null; stageRef.current.classList.remove('is-grabbing'); return }
    if (drag.current) { drag.current = null; return }
    if (resize.current) { resize.current = null; return }
    if (marquee.current) {
      const m = marquee.current
      marquee.current = null
      const b = box
      setBox(null)
      if (b && (b.w > 6 || b.h > 6)) {
        const hit = nodes.filter(n => !(n.x > b.x + b.w || n.x + n.w < b.x || n.y > b.y + b.h || n.y + n.h < b.y))
        onSelection(m.additive ? [...new Set([...selection, ...hit.map(n => n.id)])] : hit.map(n => n.id))
      } else if (!m.additive) onSelection([])
      return
    }
    if (edgeFrom.current) {
      const p = toWorld(e.clientX, e.clientY)
      const target = nodes.find(n => p.x >= n.x && p.x <= n.x + n.w && p.y >= n.y && p.y <= n.y + n.h)
      if (target && canConnect(nodes, edges, edgeFrom.current, target.id)) onConnect(edgeFrom.current, target.id)
      edgeFrom.current = null
      setEdgePreview(null)
    }
  }

  const nodeDown = (e, node) => {
    e.stopPropagation()
    if (space || e.button === 1) return
    const additive = e.shiftKey || e.metaKey || e.ctrlKey
    const already = selection.includes(node.id)
    let ids
    if (additive) ids = already ? selection.filter(x => x !== node.id) : [...selection, node.id]
    else ids = already ? selection : [node.id]
    onSelection(ids)
    if (additive) return
    const p = toWorld(e.clientX, e.clientY)
    const moving = node.type === 'group' && node.childIds?.length
      ? [node.id, ...node.childIds]
      : (ids.length > 1 ? ids : [node.id])
    drag.current = { ids: moving, p0: p }
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const resizeDown = (e, node) => {
    const [rw, rh] = (node.ratio || '1:1').split(':').map(Number)
    resize.current = { id: node.id, x: node.x, y: node.y, locked: node.locked !== false, ratio: rh / rw }
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const portDown = (e, node) => {
    e.stopPropagation()
    edgeFrom.current = node.id
    setEdgePreview({ from: node.id, to: toWorld(e.clientX, e.clientY) })
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const byId = React.useMemo(() => Object.fromEntries(nodes.map(n => [n.id, n])), [nodes])
  const gridClass = grid === 'lines' ? 'cf-stage--lines' : grid === 'blank' ? 'cf-stage--blank' : 'cf-stage--dots'

  return (
    <div className="cf-board">
      <div
        className={`cf-stage ${gridClass}${space ? ' is-grab' : ''}`}
        ref={stageRef}
        onPointerDown={onDown}
        onPointerMove={onMovePointer}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onWheel={onWheel}
        style={{ '--cf-grid': `${28 * zoom / 100}px` }}
      >
        <div className="cf-world" ref={worldRef}>
          <svg className="cf-edges" width="1" height="1">
            <defs>
              <marker id="cf-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" className="cf-arrow-head" />
              </marker>
            </defs>
            {edges.map(edge => {
              const a = byId[edge.from], b = byId[edge.to]
              if (!a || !b) return null
              return (
                <g key={edge.id} className="cf-edge">
                  <path d={edgePath(a, b)} className="cf-edge-line" markerEnd="url(#cf-arrow)" />
                  <path d={edgePath(a, b)} className="cf-edge-hit" onPointerDown={(e) => { e.stopPropagation(); onRemoveEdge(edge.id) }}>
                    <title>点击删除这条连线</title>
                  </path>
                </g>
              )
            })}
            {edgePreview ? (() => {
              const a = byId[edgePreview.from]
              if (!a) return null
              return <path d={edgePath(a, { x: edgePreview.to.x, y: edgePreview.to.y - 10, w: 0, h: 20 })} className="cf-edge-line cf-edge-line--ghost" />
            })() : null}
          </svg>

          {nodes.map(node => (
            <div
              key={node.id}
              className={`cf-node${selection.includes(node.id) ? ' is-selected' : ''}${node.status === 'running' ? ' is-running' : ''}${node.type === 'group' ? ' is-group' : ''}`}
              data-id={node.id}
              style={{ left: node.x, top: node.y, width: node.w, height: node.h, zIndex: node.type === 'group' ? 3 : 2 }}
              onPointerDown={(e) => nodeDown(e, node)}
            >
              {node.type === 'group' ? (
                <div className="cf-node-group-head">
                  <span>{node.name || '分组'}</span>
                  {node.childIds?.length ? <span className="cf-node-group-count">{node.childIds.length} 个节点</span> : null}
                </div>
              ) : (
                <>
                  <div className="cf-node-head">
                    <span className="cf-node-type">{NODE_TYPES[node.type]}</span>
                    <span className="cf-node-name">{node.name || ''}</span>
                    <button type="button" className="cf-node-port" onPointerDown={(e) => portDown(e, node)}
                      title="从这里拖到另一个节点以连线" aria-label="连线端口" />
                  </div>
                  <div className="cf-node-body" onDoubleClick={(e) => { e.stopPropagation(); onOpenNode(node) }}>
                    <NodeBody node={node} channels={channels} />
                  </div>
                </>
              )}
              {selection.includes(node.id) && node.type !== 'group' ? (
                <span className="cf-node-handle" onPointerDown={(e) => { e.stopPropagation(); resizeDown(e, node) }} title="调整尺寸" />
              ) : null}
            </div>
          ))}

          {box && box.w > 4 ? <div className="cf-marquee" style={{ left: box.x, top: box.y, width: box.w, height: box.h }} /> : null}
        </div>
      </div>

      {minimap ? (
        <Minimap nodes={nodes} cam={cam.current} size={size}
          onJump={(p) => moveTo(worldRef.current, size.w / 2 - p.x * cam.current.s, size.h / 2 - p.y * cam.current.s, cam.current.s,
            () => setZoom(Math.round(cam.current.s * 100)))} />
      ) : null}

      <div className="cf-zoom">
        <button type="button" className="cf-icon-btn" onClick={() => zoomBy(1 / 1.25)} aria-label="缩小">−</button>
        <input
          className="cf-zoom-range" type="range" min={10} max={300} value={zoom} aria-label="缩放"
          onChange={(e) => {
            const el = worldRef.current
            if (!el) return
            const ns = Number(e.target.value) / 100
            const c = cam.current
            const cx = size.w / 2, cy = size.h / 2
            moveTo(el, cx - ((cx - c.tx) / c.s) * ns, cy - ((cy - c.ty) / c.s) * ns, ns, () => setZoom(Math.round(cam.current.s * 100)))
          }}
        />
        <button type="button" className="cf-icon-btn" onClick={() => zoomBy(1.25)} aria-label="放大">+</button>
        <span className="cf-zoom-num">{zoom}%</span>
        <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" onClick={fit}>适应</button>
      </div>

      {showHint ? <p className="cf-editor-hint">拖空白处框选 · 空格拖动平移 · 滚轮缩放 · 从节点右上端口拖线连接</p> : null}
    </div>
  )
}

function Minimap({ nodes, cam, size, onJump }) {
  if (!nodes.length) return null
  const W = 168, H = 108, pad = 80
  const minX = Math.min(...nodes.map(n => n.x)) - pad
  const minY = Math.min(...nodes.map(n => n.y)) - pad
  const maxX = Math.max(...nodes.map(n => n.x + n.w)) + pad
  const maxY = Math.max(...nodes.map(n => n.y + n.h)) + pad
  const spanX = Math.max(1, maxX - minX), spanY = Math.max(1, maxY - minY)
  const k = Math.min(W / spanX, H / spanY)
  const offX = (W - spanX * k) / 2, offY = (H - spanY * k) / 2
  const map = (n) => ({ x: (n.x - minX) * k + offX, y: (n.y - minY) * k + offY, w: n.w * k, h: n.h * k })
  const view = {
    x: (-cam.x / cam.s - minX) * k + offX,
    y: (-cam.y / cam.s - minY) * k + offY,
    w: (size.w / cam.s) * k,
    h: (size.h / cam.s) * k,
  }
  return (
    <svg
      className="cf-minimap" viewBox={`0 0 ${W} ${H}`} width={W} height={H}
      role="img" aria-label="画布缩略图，点击跳转"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const px = ((e.clientX - r.left) / r.width) * W
        const py = ((e.clientY - r.top) / r.height) * H
        onJump({ x: minX + (px - offX) / k, y: minY + (py - offY) / k })
      }}
    >
      {nodes.filter(n => n.type === 'group').map(n => {
        const m = map(n)
        return <rect key={n.id} x={m.x} y={m.y} width={m.w} height={m.h} rx={3} className="cf-mini-group" />
      })}
      {nodes.filter(n => n.type !== 'group').map(n => {
        const m = map(n)
        return <rect key={n.id} x={m.x} y={m.y} width={Math.max(3, m.w)} height={Math.max(3, m.h)} rx={2}
          className={`cf-mini-node${n.type === 'image' ? ' cf-mini-image' : ''}`} />
      })}
      <rect x={view.x} y={view.y} width={Math.max(6, view.w)} height={Math.max(6, view.h)} rx={2} className="cf-mini-view" />
    </svg>
  )
}
