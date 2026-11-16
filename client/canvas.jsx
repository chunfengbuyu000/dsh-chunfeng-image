// 无限画布：相机、网格、节点、连线、框选、缩略图。
// 相机只往 world 层写一个 transform；不碰 CSS 变量，避免整层重算样式。
import React from 'react'
import { makeNode, canConnect, wrapInGroup, newId, TYPE_LABEL, IMAGE_MODELS } from './store.js'

const MIN_S = 0.1
const MAX_S = 3
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
  const stop = React.useCallback(() => {
    const c = cam.current
    if (c.raf) cancelAnimationFrame(c.raf)
    c.raf = 0
    c.tx = c.x; c.ty = c.y; c.ts = c.s
  }, [])
  React.useEffect(() => () => { if (cam.current.raf) cancelAnimationFrame(cam.current.raf) }, [])
  return { cam, apply, moveTo, stop }
}

/** 屏幕坐标 → 世界坐标。 */
export function screenToWorld(cam, rect, clientX, clientY) {
  return {
    x: (clientX - rect.left - cam.x) / cam.s,
    y: (clientY - rect.top - cam.y) / cam.s,
  }
}

/** 连线：从节点右中到目标左中的三次贝塞尔。 */
function edgePath(a, b) {
  if (!a || !b) return ''
  const x1 = a.x + a.w, y1 = a.y + a.h / 2
  const x2 = b.x, y2 = b.y + b.h / 2
  const dx = Math.max(40, Math.abs(x2 - x1) * 0.45)
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

// ---------- 节点 ----------

function NodeChrome({ node, selected, running, children, onPointerDown, onResize, onContext }) {
  return (
    <div
      className={`node${selected ? ' is-selected' : ''}${running ? ' is-running' : ''}${node.type === 'group' ? ' is-group' : ''}`}
      data-id={node.id}
      style={{ left: node.x, top: node.y, width: node.w, height: node.h, zIndex: node.type === 'group' ? 1 : (node.z || 2) }}
      onPointerDown={(e) => onPointerDown(e, node)}
      onContextMenu={(e) => { e.preventDefault(); onContext?.(node) }}
    >
      {children}
      {selected ? (
        <span
          className="node-handle"
          onPointerDown={(e) => { e.stopPropagation(); onResize(e, node) }}
          title="调整尺寸"
        />
      ) : null}
    </div>
  )
}

function ImageBody({ node }) {
  return (
    <div className="node-media">
      {node.src ? (
        <img src={node.src} alt={node.prompt || node.name || '生成图片'} draggable={false} />
      ) : node.status === 'running' ? (
        <div className="node-void"><span className="node-spin" aria-hidden="true" />生成中</div>
      ) : (
        <div className="node-void">{node.status === 'failed' ? '生成失败' : '空图片节点'}</div>
      )}
    </div>
  )
}

function Placeholder({ node }) {
  // 没有真实模型时，按提示词与节点 id 画一张可复现的图，证明布局与交互，不假装是 AI 输出
  const ref = React.useRef(null)
  React.useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const ctx = cv.getContext('2d')
    const W = (cv.width = 480), H = (cv.height = 480)
    const bg = ctx.createLinearGradient(0, 0, W, H)
    bg.addColorStop(0, '#1a1512')
    bg.addColorStop(1, '#0d0b0a')
    ctx.fillStyle = bg
    ctx.fillRect(0, 0, W, H)
    let seed = 0
    const key = `${node.id}${node.prompt || ''}`
    for (let i = 0; i < key.length; i++) seed = (seed * 31 + key.charCodeAt(i)) % 2147483647
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
    // 一条暖色光带 + 几笔冷色几何，像夜景的抽象
    const glow = ctx.createRadialGradient(W * (0.3 + rnd() * 0.4), H * (0.4 + rnd() * 0.3), 20, W * 0.5, H * 0.5, W * 0.75)
    glow.addColorStop(0, 'oklch(70% 0.2 45 / 0.55)')
    glow.addColorStop(0.55, 'oklch(40% 0.16 27 / 0.25)')
    glow.addColorStop(1, 'transparent')
    ctx.fillStyle = glow
    ctx.fillRect(0, 0, W, H)
    ctx.strokeStyle = 'oklch(94% 0.02 80 / 0.22)'
    ctx.lineWidth = 2
    for (let i = 0; i < 5; i++) {
      const y = H * (0.2 + rnd() * 0.7)
      ctx.beginPath()
      ctx.moveTo(0, y)
      ctx.lineTo(W, y + (rnd() - 0.5) * 90)
      ctx.stroke()
    }
    ctx.strokeStyle = 'oklch(70% 0.2 45 / 0.5)'
    ctx.lineWidth = 3
    for (let i = 0; i < 4; i++) {
      const x = W * (0.15 + rnd() * 0.7)
      ctx.beginPath()
      ctx.moveTo(x, H * 0.15)
      ctx.lineTo(x + (rnd() - 0.5) * 40, H * (0.5 + rnd() * 0.4))
      ctx.stroke()
    }
  }, [node.id, node.prompt])
  return <canvas ref={ref} className="node-canvas" width="480" height="480" aria-label={node.prompt || '示例画面'} />
}

function ImageContent({ node }) {
  return (
    <div className="node-media">
      {node.src ? <img src={node.src} alt={node.prompt || '图片'} draggable={false} /> : <Placeholder node={node} />}
    </div>
  )
}

function NodeBody({ node, onEditText, onGenerate }) {
  switch (node.type) {
    case 'image':
      return <ImageContent node={node} />
    case 'video':
      return (
        <div className="node-media node-media--video">
          {node.src ? (
            <video src={node.src} controls playsInline muted preload="metadata" />
          ) : (
            <div className="node-void"><span className="node-badge">视频</span>{node.status === 'running' ? '生成中' : '空视频节点'}</div>
          )}
        </div>
      )
    case 'audio':
      return (
        <div className="node-audio">
          <div className="node-wave" aria-hidden="true">
            {Array.from({ length: 28 }, (_, i) => (
              <span key={i} style={{ height: `${18 + ((i * 37) % 62)}%` }} />
            ))}
          </div>
          <p className="node-audio-label">{node.status === 'running' ? '生成中' : (node.prompt || '空音频节点')}</p>
        </div>
      )
    case 'text':
      return (
        <div className="node-text">
          {node.text ? <p style={{ fontSize: node.fontSize || 14 }}>{node.text}</p> : <p className="node-hint">双击编辑文本</p>}
        </div>
      )
    case 'config':
      return (
        <div className="node-config">
          <p className="node-config-row"><span>模型</span><b>{IMAGE_MODELS.find(m => m.id === node.model)?.label || node.model}</b></p>
          <p className="node-config-row"><span>比例</span><b>{node.ratio}</b></p>
          <p className="node-config-row"><span>张数</span><b>{node.count}</b></p>
          <div className="node-config-order">
            <span>输入顺序</span>
            <ol>
              {node.orders?.length ? node.orders.map((o, i) => <li key={i}>{o}</li>) : <li className="is-empty">未连接输入</li>}
            </ol>
          </div>
        </div>
      )
    case 'group':
      return (
        <div className="node-group-head">
          <span className="node-group-name">{node.name || '分组'}</span>
          {node.childIds?.length ? <span className="node-group-count">{node.childIds.length} 个节点</span> : null}
        </div>
      )
    default:
      return null
  }
}

// ---------- 缩略图 ----------

function Minimap({ nodes, cam, size, onJump }) {
  const W = 168, H = 112
  if (!nodes.length) return null
  const pad = 80
  const minX = Math.min(...nodes.map(n => n.x)) - pad
  const minY = Math.min(...nodes.map(n => n.y)) - pad
  const maxX = Math.max(...nodes.map(n => n.x + n.w)) + pad
  const maxY = Math.max(...nodes.map(n => n.y + n.h)) + pad
  const spanX = Math.max(1, maxX - minX), spanY = Math.max(1, maxY - minY)
  const k = Math.min(W / spanX, H / spanY)
  const offX = (W - spanX * k) / 2, offY = (H - spanY * k) / 2
  const map = (n) => ({ x: (n.x - minX) * k + offX, y: (n.y - minY) * k + offY, w: n.w * k, h: n.h * k })
  // 当前视口在世界里的矩形
  const view = {
    x: (-cam.x / cam.s - minX) * k + offX,
    y: (-cam.y / cam.s - minY) * k + offY,
    w: (size.w / cam.s) * k,
    h: (size.h / cam.s) * k,
  }
  return (
    <svg
      className="minimap"
      viewBox={`0 0 ${W} ${H}`}
      width={W}
      height={H}
      role="img"
      aria-label="画布缩略图，点击可跳转"
      onClick={(e) => {
        const r = e.currentTarget.getBoundingClientRect()
        const px = ((e.clientX - r.left) / r.width) * W
        const py = ((e.clientY - r.top) / r.height) * H
        onJump({ x: minX + (px - offX) / k, y: minY + (py - offY) / k })
      }}
    >
      {nodes.filter(n => n.type === 'group').map(n => {
        const m = map(n)
        return <rect key={n.id} x={m.x} y={m.y} width={m.w} height={m.h} rx={3} className="mini-group" />
      })}
      {nodes.filter(n => n.type !== 'group').map(n => {
        const m = map(n)
        return <rect key={n.id} x={m.x} y={m.y} width={Math.max(3, m.w)} height={Math.max(3, m.h)} rx={2} className={`mini-node mini-${n.type}`} />
      })}
      <rect x={view.x} y={view.y} width={Math.max(6, view.w)} height={Math.max(6, view.h)} rx={2} className="mini-view" />
    </svg>
  )
}

// ---------- 画布本体 ----------

export function Canvas({
  state, dispatch, camApi, onOpenNode, tool, setTool, showMinimap, onCanvasSize,
}) {
  const worldRef = React.useRef(null)
  const stageRef = React.useRef(null)
  const { cam, moveTo, stop } = camApi
  const [size, setSize] = React.useState({ w: 1200, h: 800 })
  const drag = React.useRef(null)
  const pan = React.useRef(null)
  const resize = React.useRef(null)
  const marquee = React.useRef(null)
  const edgeDraw = React.useRef(null)
  const [edgePreview, setEdgePreview] = React.useState(null)
  const [marqueeBox, setMarqueeBox] = React.useState(null)
  const [spaceDown, setSpaceDown] = React.useState(false)

  const paint = React.useCallback(() => camApi.apply(worldRef.current), [camApi])

  // 尺寸观察
  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect()
      setSize({ w: r.width, h: r.height })
      onCanvasSize?.({ w: r.width, h: r.height })
    })
    ro.observe(el)
    const r = el.getBoundingClientRect()
    setSize({ w: r.width, h: r.height })
    onCanvasSize?.({ w: r.width, h: r.height })
    return () => ro.disconnect()
  }, [onCanvasSize])

  // 首帧与外部相机变化时同步
  React.useEffect(() => { paint() })

  // 空格临时切移动
  React.useEffect(() => {
    const down = (e) => {
      if (e.code === 'Space' && !/input|textarea/i.test(e.target.tagName)) { setSpaceDown(true); e.preventDefault() }
    }
    const up = (e) => { if (e.code === 'Space') setSpaceDown(false) }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  const rect = () => stageRef.current.getBoundingClientRect()
  const toWorld = (cx, cy) => screenToWorld(cam.current, rect(), cx, cy)

  // ---- 滚轮缩放（以光标为心）----
  const onWheel = (e) => {
    if (e.ctrlKey || e.metaKey || !e.shiftKey) {
      e.preventDefault()
      const r = rect()
      const px = e.clientX - r.left, py = e.clientY - r.top
      const c = cam.current
      const wx = (px - c.tx) / c.ts
      const wy = (py - c.ty) / c.ts
      const factor = Math.exp(-e.deltaY * 0.0018)
      const ns = Math.min(MAX_S, Math.max(MIN_S, c.ts * factor))
      moveTo(worldRef.current, px - wx * ns, py - wy * ns, ns, paint)
    }
  }

  // ---- 背景按下：平移或框选 ----
  const onStageDown = (e) => {
    if (e.button === 1 || spaceDown || tool === 'pan') {
      e.preventDefault()
      pan.current = { x: e.clientX, y: e.clientY, cx: cam.current.tx, cy: cam.current.ty }
      stageRef.current.classList.add('is-panning')
      stageRef.current.setPointerCapture(e.pointerId)
      return
    }
    if (e.button !== 0) return
    const p = toWorld(e.clientX, e.clientY)
    marquee.current = { x0: p.x, y0: p.y, additive: e.shiftKey }
    setMarqueeBox({ x: p.x, y: p.y, w: 0, h: 0 })
    stageRef.current.setPointerCapture(e.pointerId)
  }

  // ---- 移动 ----
  const onStageMove = (e) => {
    if (pan.current) {
      const c = cam.current
      moveTo(worldRef.current, pan.current.cx + (e.clientX - pan.current.x), pan.current.cy + (e.clientY - pan.current.y), c.ts, paint)
      return
    }
    if (drag.current) {
      const p = toWorld(e.clientX, e.clientY)
      const dx = p.x - drag.current.p0.x, dy = p.y - drag.current.p0.y
      dispatch({
        type: 'move-selection',
        dx, dy, ids: drag.current.ids,
      })
      drag.current.p0 = p
      return
    }
    if (resize.current) {
      const p = toWorld(e.clientX, e.clientY)
      const r = resize.current
      const w = Math.max(120, Math.round(p.x - r.x))
      const h = r.locked ? Math.round(w / r.ratio) : Math.max(90, Math.round(p.y - r.y))
      dispatch({ type: 'resize-node', id: r.id, w, h })
      return
    }
    if (marquee.current) {
      const p = toWorld(e.clientX, e.clientY)
      const m = marquee.current
      setMarqueeBox({
        x: Math.min(m.x0, p.x), y: Math.min(m.y0, p.y),
        w: Math.abs(p.x - m.x0), h: Math.abs(p.y - m.y0),
      })
      return
    }
    if (edgeDraw.current) {
      const p = toWorld(e.clientX, e.clientY)
      setEdgePreview({ from: edgeDraw.current, to: p })
    }
  }

  const onStageUp = (e) => {
    if (pan.current) {
      pan.current = null
      stageRef.current.classList.remove('is-panning')
      return
    }
    if (drag.current) { drag.current = null; dispatch({ type: 'commit' }); return }
    if (resize.current) { resize.current = null; dispatch({ type: 'commit' }); return }
    if (marquee.current) {
      const m = marquee.current
      marquee.current = null
      const box = marqueeBox
      setMarqueeBox(null)
      if (box && (box.w > 6 || box.h > 6)) {
        const hit = state.nodes.filter(n => !(n.x > box.x + box.w || n.x + n.w < box.x || n.y > box.y + box.h || n.y + n.h < box.y))
        dispatch({ type: 'select', ids: hit.map(n => n.id), additive: m.additive })
      } else if (!m.additive) {
        dispatch({ type: 'select', ids: [] })
      }
      return
    }
    if (edgeDraw.current) {
      const p = toWorld(e.clientX, e.clientY)
      const target = state.nodes.find(n => p.x >= n.x && p.x <= n.x + n.w && p.y >= n.y && p.y <= n.y + n.h)
      if (target && canConnect(state.nodes, state.edges, edgeDraw.current, target.id)) {
        dispatch({ type: 'connect', from: edgeDraw.current, to: target.id })
      }
      edgeDraw.current = null
      setEdgePreview(null)
    }
  }

  // ---- 节点按下：选中并拖 ----
  const onNodeDown = (e, node) => {
    e.stopPropagation()
    if (e.button === 1 || spaceDown || tool === 'pan') return
    if (e.button === 2) return
    const additive = e.shiftKey || e.metaKey || e.ctrlKey
    const already = state.selection.includes(node.id)
    const ids = additive
      ? (already ? state.selection.filter(id => id !== node.id) : [...state.selection, node.id])
      : (already ? state.selection : [node.id])
    dispatch({ type: 'select', ids: additive && already ? ids : (additive ? ids : [node.id]) })
    if (!additive) {
      const p = toWorld(e.clientX, e.clientY)
      // 组被拖动时，子节点一起走
      const moving = node.type === 'group' && node.childIds?.length
        ? [node.id, ...node.childIds]
        : (state.selection.includes(node.id) && state.selection.length > 1 ? state.selection : [node.id])
      drag.current = { ids: moving, p0: p }
      stageRef.current.setPointerCapture(e.pointerId)
    }
  }

  const onResizeDown = (e, node) => {
    const ratio = node.ratio && node.ratio.includes(':')
      ? Number(node.ratio.split(':')[1]) / Number(node.ratio.split(':')[0])
      : node.h / node.w
    resize.current = { id: node.id, x: node.x, y: node.y, locked: node.locked !== false, ratio }
    stageRef.current.setPointerCapture(e.pointerId)
  }

  // 双击：图片重新出图，文本进编辑，组进出
  const onNodeDouble = (e, node) => {
    e.stopPropagation()
    if (node.type === 'text') return onOpenNode(node, 'text')
    if (node.type === 'image' || node.type === 'video' || node.type === 'audio') return onOpenNode(node, 'detail')
    if (node.type === 'config') return onOpenNode(node, 'config')
    onOpenNode(node, 'detail')
  }

  // 从节点右侧端口拉线
  const onPortDown = (e, node) => {
    e.stopPropagation()
    edgeDraw.current = node.id
    const p = toWorld(e.clientX, e.clientY)
    setEdgePreview({ from: node.id, to: p })
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const nodeById = React.useMemo(() => Object.fromEntries(state.nodes.map(n => [n.id, n])), [state.nodes])
  const gridClass = `stage-grid stage-grid--${state.grid}`

  return (
    <div
      className={`stage ${gridClass}${spaceDown ? ' is-space' : ''}${tool === 'pan' ? ' is-pan' : ''}`}
      ref={stageRef}
      onPointerDown={onStageDown}
      onPointerMove={onStageMove}
      onPointerUp={onStageUp}
      onPointerCancel={onStageUp}
      onWheel={onWheel}
      onContextMenu={(e) => e.preventDefault()}
      style={{ '--grid-size': `${28 * cam.current.s}px` }}
    >
      <div className="world" ref={worldRef}>
        <svg className="edges" width="1" height="1" aria-hidden="true">
          <defs>
            <marker id="edge-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
              <path d="M0 0 L8 4 L0 8 z" className="edge-arrow-head" />
            </marker>
          </defs>
          {state.edges.map(edge => {
            const a = nodeById[edge.from], b = nodeById[edge.to]
            if (!a || !b) return null
            return (
              <g key={edge.id} className="edge">
                <path d={edgePath(a, b)} className="edge-line" markerEnd="url(#edge-arrow)" />
                <path d={edgePath(a, b)} className="edge-hit" onPointerDown={(e) => { e.stopPropagation(); dispatch({ type: 'remove-edge', id: edge.id }) }}>
                  <title>点击删除这条连线</title>
                </path>
              </g>
            )
          })}
          {edgePreview ? (() => {
            const a = nodeById[edgePreview.from]
            if (!a) return null
            const ghost = { x: edgePreview.to.x, y: edgePreview.to.y - 10, w: 0, h: 20 }
            return <path d={edgePath(a, ghost)} className="edge-line edge-line--ghost" />
          })() : null}
        </svg>

        {state.nodes.map(node => (
          <NodeChrome
            key={node.id}
            node={node}
            selected={state.selection.includes(node.id)}
            running={node.status === 'running'}
            onPointerDown={onNodeDown}
            onResize={onResizeDown}
            onContext={(n) => dispatch({ type: 'select', ids: [n.id] })}
          >
            <div className="node-head">
              <span className="node-type">{TYPE_LABEL[node.type]}</span>
              <span className="node-name">{node.name || (node.type === 'image' || node.type === 'video' ? node.ratio || '' : '')}</span>
              <button
                type="button"
                className="node-port"
                onPointerDown={(e) => onPortDown(e, node)}
                title="从这里拖到另一个节点以连线"
                aria-label="连线端口"
              />
            </div>
            <div className="node-body" onDoubleClick={(e) => onNodeDouble(e, node)}>
              <NodeBody node={node} onEditText={onOpenNode} onGenerate={onOpenNode} />
            </div>
          </NodeChrome>
        ))}

        {marqueeBox && marqueeBox.w > 4 ? (
          <div className="marquee" style={{ left: marqueeBox.x, top: marqueeBox.y, width: marqueeBox.w, height: marqueeBox.h }} />
        ) : null}
      </div>

      {showMinimap ? (
        <Minimap
          nodes={state.nodes}
          cam={cam.current}
          size={size}
          onJump={(p) => moveTo(worldRef.current, size.w / 2 - p.x * cam.current.s, size.h / 2 - p.y * cam.current.s, cam.current.s, paint)}
        />
      ) : null}
    </div>
  )
}
