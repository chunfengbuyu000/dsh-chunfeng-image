// 画布引擎：相机、网格、节点、连线、框选、缩略图。
// 相机只往 world 层写一个 transform，不改 CSS 变量。
import React from 'react'
import { edgeVisible, nodeVisible, viewBounds } from './canvas/geometry.js'
import { canConnect, IMAGE_HEAD, NODE_TYPES, findModel, modelsWithCap, RATIOS, RESOLUTIONS, ratioValue } from './store.js'
import { Icon } from './ui.jsx'
import {
  resolveMediaUrl,
  ensureImagePreview,
  getCachedMediaUrl,
  getCachedPreviewUrl,
  pickImageSource,
  subscribeImagePreviews,
} from './gen/result.js'
import { primaryImage } from './canvas/batch.js'
import { NodeToolbar } from './canvas/node-toolbar.jsx'

export const MIN_S = 0.1
export const MAX_S = 3

const MANUAL_RESIZE_MAX = 4096

export function useCamera() {
  const cam = React.useRef({ x: 0, y: 0, s: 1, tx: 0, ty: 0, ts: 1, raf: 0, prevS: null, gridS: null, stage: null })

  const bindStage = React.useCallback((stageEl) => {
    cam.current.stage = stageEl
  }, [])

  const apply = React.useCallback((el, stageEl = cam.current.stage) => {
    const c = cam.current
    if (el) {
      el.style.transform = `translate3d(${c.x}px, ${c.y}px, 0) scale(${c.s})`
      // 仅在缩放倍率变化时写入 --cf-cam-s，平移过程不触发展开子节点样式重算
      if (c.prevS !== c.s) {
        c.prevS = c.s
        el.style.setProperty('--cf-cam-s', String(c.s))
      }
    }
    const gridEl = stageEl?.firstElementChild?.classList?.contains('cf-grid') ? stageEl.firstElementChild : null
    if (gridEl) {
      const step = 28 * c.s
      if (c.gridS !== step) {
        c.gridS = step
        gridEl.style.setProperty('--cf-grid', `${step}px`)
      }
      const mx = ((c.x % step) + step) % step
      const my = ((c.y % step) + step) % step
      gridEl.style.transform = `translate3d(${mx}px, ${my}px, 0)`
    }
  }, [])

  const moveTo = React.useCallback((el, x, y, s, onTick, stageEl = cam.current.stage) => {
    const c = cam.current
    c.tx = x
    c.ty = y
    c.ts = Math.min(MAX_S, Math.max(MIN_S, s))
    const flush = () => {
      c.raf = 0
      c.x = c.tx
      c.y = c.ty
      c.s = c.ts
      apply(el, stageEl)
      onTick?.()
    }
    if (typeof requestAnimationFrame !== 'function') {
      flush()
      return
    }
    if (!c.raf) c.raf = requestAnimationFrame(flush)
  }, [apply])

  React.useEffect(() => () => { if (cam.current.raf) cancelAnimationFrame(cam.current.raf) }, [])
  return React.useMemo(() => ({ cam, bindStage, apply, moveTo }), [bindStage, apply, moveTo])
}

const CORNERS = ['se', 'sw', 'ne', 'nw']

function edgePath(a, b) {
  if (!a || !b) return ''
  const x1 = a.x + a.w, y1 = a.y + a.h / 2
  const x2 = b.x, y2 = b.y + b.h / 2
  const dx = Math.max(40, Math.abs(x2 - x1) * 0.45)
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

/** 生成中已等待的秒数：长时间生图时让用户看清进度计时。 */
function useElapsed(startedAt) {
  const [now, setNow] = React.useState(Date.now())
  React.useEffect(() => {
    if (!startedAt) return undefined
    const timer = setInterval(() => setNow(Date.now()), 1000)
    return () => clearInterval(timer)
  }, [startedAt])
  if (!startedAt) return 0
  return Math.max(0, Math.round((now - startedAt) / 1000))
}

function ImageBody({ node, scaleBucket = 1, expanded = false, onToggleExpand }) {
  const images = node.images || []
  const main = primaryImage(node)
  const key = main?.storageKey || node.storageKey || ''
  const [originalUrl, setOriginalUrl] = React.useState(() => (key ? getCachedMediaUrl(key) : '') || node.src || '')
  const [previewUrl, setPreviewUrl] = React.useState(() => (key ? getCachedPreviewUrl(key) : ''))

  React.useEffect(() => {
    let alive = true
    if (!key) {
      setOriginalUrl(node.src || '')
      setPreviewUrl('')
      return () => { alive = false }
    }
    setOriginalUrl(getCachedMediaUrl(key))
    setPreviewUrl(getCachedPreviewUrl(key))
    resolveMediaUrl(key).then((url) => { if (alive) setOriginalUrl(url || '') }).catch(() => { if (alive) setOriginalUrl('') })
    ensureImagePreview(key).then((url) => { if (alive && url) setPreviewUrl(url) }).catch(() => {})
    const unsub = subscribeImagePreviews((readyKey) => {
      if (alive && readyKey === key) setPreviewUrl(getCachedPreviewUrl(key))
    })
    return () => { alive = false; unsub() }
  }, [key, node.src])

  const isRunning = node.status === 'running'
  const batch = images.length > 1
  const elapsed = useElapsed(isRunning ? node.startedAt : 0)

  const remote = main?.degraded ? (main.url || '') : ''
  const localShown = pickImageSource({
    originalUrl,
    previewUrl,
    forceOriginal: scaleBucket >= 1.8,
    renderedPx: Math.max(node.w || 0, node.h || 0) * scaleBucket,
  })
  const shown = localShown || remote

  return (
    <div className={`cf-node-media${batch ? ' cf-node-media--batch' : ''}${shown ? ' has-img' : ''}`}>
      {shown ? <img src={shown} alt={node.prompt || '图片'} decoding="async" draggable={false} /> : null}
      {!shown && isRunning ? (
        <div className="cf-node-void">
          <span className="cf-spin" aria-hidden="true" />
          生成中{elapsed >= 3 ? ` · ${elapsed}s` : ''}
        </div>
      ) : null}
      {!shown && !isRunning && node.status !== 'failed' ? (
        <div className="cf-node-empty">
          <Icon name="image" size={20} stroke={1.4} />
          <span>图片</span>
        </div>
      ) : null}
      {!shown && node.status === 'failed'
        ? <div className="cf-node-void">生成失败{node.error ? `：${node.error}` : ''}</div>
        : null}
      {batch ? (
        <button
          type="button"
          className={`cf-node-badge${expanded ? ' is-on' : ''}`}
          title={`共 ${images.length} 张 · 点击展开`}
          aria-expanded={expanded}
          onPointerDown={(e) => e.stopPropagation()}
          onClick={(e) => { e.stopPropagation(); onToggleExpand?.(node.id) }}
        >{images.length}</button>
      ) : null}
      {shown && remote && !localShown ? <span className="cf-node-flag">远程</span> : null}
    </div>
  )
}

function BatchThumb({ entry, fallbackSrc = '', onClick }) {
  const key = entry?.storageKey || ''
  const fallback = entry?.degraded ? (entry.url || '') : (entry?.url || fallbackSrc || '')
  const [src, setSrc] = React.useState(() => (key ? (getCachedPreviewUrl(key) || getCachedMediaUrl(key)) : '') || fallback)
  React.useEffect(() => {
    let alive = true
    if (!key) { setSrc(fallback); return () => { alive = false } }
    setSrc(getCachedPreviewUrl(key) || getCachedMediaUrl(key) || fallback)
    ensureImagePreview(key).then((u) => { if (alive && u) setSrc(u) }).catch(() => {})
    resolveMediaUrl(key).then((u) => { if (alive && u) setSrc((prev) => prev || u) }).catch(() => {})
    return () => { alive = false }
  }, [key, fallback])
  return <img src={src || undefined} alt={entry?.prompt || '批量图片'} decoding="async" draggable={false} onClick={onClick} />
}

function ExpandedBatchPanel({ node, onClose, onOpenZoom, onBatchAction }) {
  const images = node.images || []
  const main = primaryImage(node)
  return (
    <div
      className="cf-batch-pop"
      style={{ transform: `translate3d(${node.x}px, ${node.y + node.h + 10}px, 0)` }}
      onPointerDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <div className="cf-batch-pop-head">
        <span>共 {images.length} 张</span>
        <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => onBatchAction?.('explode', node)}>全部拆分</button>
        <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" onClick={onClose}>收起</button>
      </div>
      <div className="cf-batch-grid">
        {images.map((img, idx) => {
          const isMain = main?.id === img.id
          return (
            <div key={img.id || idx} className={`cf-batch-item${isMain ? ' is-main' : ''}`}>
              <BatchThumb entry={img} fallbackSrc={node.src || ''} onClick={() => onOpenZoom?.(node, idx)} />
              {isMain ? <span className="cf-batch-main-tag">主图</span> : null}
              <div className="cf-batch-item-bar">
                {!isMain ? (
                  <button type="button" className="cf-batch-item-btn" onClick={() => onBatchAction?.('setPrimary', node, img.id)}>设为主图</button>
                ) : <span className="cf-batch-item-btn" style={{ opacity: 0.6 }}>主图</span>}
                <button type="button" className="cf-batch-item-btn" title="拆成独立节点" onClick={() => onBatchAction?.('duplicateItem', node, img.id)}>拆出</button>
                <button type="button" className="cf-batch-item-btn" title="下载" onClick={() => onBatchAction?.('downloadItem', node, img.id)}>下载</button>
                <button type="button" className="cf-batch-item-btn" title="移除" onClick={() => onBatchAction?.('removeItem', node, img.id)}>删</button>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

/**
 * 视频节点主体。
 *
 * 三件事：
 *   1. storageKey → objectURL（和图片同一条铁律，不存 blob: URL）
 *   2. 有 videoTaskId 但还没结果时显示「生成中」并把任务 ID 露出来，
 *      让用户知道任务在跑、刷新丢了还能续查
 *   3. 播放器加 controls，不自动播放（画布上多个视频同时播会很吵）
 */
function VideoBody({ node }) {
  const [src, setSrc] = React.useState('')
  const key = node.storageKey || ''

  React.useEffect(() => {
    let alive = true
    if (!key) { setSrc(''); return () => { alive = false } }
    resolveMediaUrl(key).then((url) => { if (alive) setSrc(url || '') }).catch(() => { if (alive) setSrc('') })
    return () => { alive = false }
  }, [key])

  if (src) {
    return (
      <div className="cf-node-media cf-node-media--video">
        <video src={src} controls preload="metadata" playsInline />
      </div>
    )
  }

  if (node.status === 'running') {
    return (
      <div className="cf-node-void">
        <span className="cf-spin" aria-hidden="true" />
        生成中
        {node.videoTaskId ? <span className="cf-node-taskid">{node.videoTaskId}</span> : null}
      </div>
    )
  }

  if (node.status === 'failed') {
    return <div className="cf-node-void">生成失败{node.error ? `：${node.error}` : ''}</div>
  }

  return (
    <div className="cf-node-void">
      视频
      {node.prompt ? <span className="cf-node-taskid">{node.prompt.slice(0, 24)}</span> : null}
    </div>
  )
}

const CONFIG_MODES = [
  { id: 'image', label: '生图' },
  { id: 'text', label: '文本' },
  { id: 'video', label: '视频' },
  { id: 'audio', label: '音频' },
]

function ConfigNodeBody({ node, channels, upstreamSummary, onUpdateNode, onRunConfig }) {
  const mode = node.mode || 'image'
  const models = modelsWithCap(channels, mode)
  const pickedKey = models.some((m) => m.key === node.modelKey) ? node.modelKey : (models[0]?.key || '')
  const stop = (e) => e.stopPropagation()

  return (
    <div className="cf-node-config" onPointerDown={stop} onWheel={stop}>
      <div className="cf-node-config-tabs" role="group" aria-label="生成模式">
        {CONFIG_MODES.map((m) => (
          <button
            key={m.id}
            type="button"
            className={`cf-node-config-tab${mode === m.id ? ' is-on' : ''}`}
            onClick={() => onUpdateNode?.(node.id, { mode: m.id })}
          >{m.label}</button>
        ))}
      </div>

      <select
        className="cf-node-config-select"
        aria-label="配置节点模型"
        value={pickedKey}
        onChange={(e) => onUpdateNode?.(node.id, { modelKey: e.target.value })}
      >
        {models.length
          ? models.map((m) => <option key={m.key} value={m.key}>{m.label}</option>)
          : <option value="">无可用模型</option>}
      </select>

      {mode === 'image' ? (
        <div className="cf-node-config-grid">
          <select
            className="cf-node-config-select"
            aria-label="比例"
            value={node.ratio || '1:1'}
            onChange={(e) => onUpdateNode?.(node.id, { ratio: e.target.value })}
          >
            {RATIOS.map((r) => <option key={r.id} value={r.id}>{r.label}</option>)}
          </select>
          <select
            className="cf-node-config-select"
            aria-label="分辨率"
            value={node.resolution || '自动'}
            onChange={(e) => onUpdateNode?.(node.id, { resolution: e.target.value })}
          >
            {RESOLUTIONS.map((r) => <option key={r} value={r}>{r}</option>)}
          </select>
          <input
            type="number"
            min={1}
            max={10}
            className="cf-node-config-input"
            aria-label="张数"
            value={Math.max(1, Number(node.count) || 1)}
            onChange={(e) => onUpdateNode?.(node.id, { count: Math.max(1, Math.min(10, Number(e.target.value) || 1)) })}
          />
        </div>
      ) : null}

      <input
        type="text"
        className="cf-node-config-input"
        placeholder="输入或补充提示词…"
        value={node.prompt || ''}
        onChange={(e) => onUpdateNode?.(node.id, { prompt: e.target.value })}
        onKeyDown={(e) => {
          if (e.key === 'Enter') { e.preventDefault(); onRunConfig?.(node) }
        }}
      />

      <div className="cf-node-config-foot">
        <span className="cf-node-config-meta" title={upstreamSummary || '未连接上游节点'}>
          {upstreamSummary || '可连上游图/文本'}
        </span>
        <button
          type="button"
          className="cf-btn cf-btn--primary cf-btn--sm"
          style={{ height: 22, paddingInline: 8, fontSize: 11 }}
          disabled={node.status === 'running'}
          onClick={() => onRunConfig?.(node)}
        >{node.status === 'running' ? '生成中' : '生成'}</button>
      </div>
    </div>
  )
}

function InlineTextEditor({ node, onCommit, onCancel }) {
  const [val, setVal] = React.useState(node.text || '')
  return (
    <textarea
      autoFocus
      className="cf-node-text-edit"
      value={val}
      onChange={(e) => setVal(e.target.value)}
      onPointerDown={(e) => e.stopPropagation()}
      onBlur={() => onCommit(node.id, val)}
      onKeyDown={(e) => {
        if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); onCancel() }
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') { e.preventDefault(); onCommit(node.id, val) }
      }}
    />
  )
}

function NodeBody({ node, channels, scaleBucket, expanded, upstreamSummary, isEditingText, onToggleExpand, onUpdateNode, onRunConfig, onCommitText, onCancelText }) {
  switch (node.type) {
    case 'image':
      return <ImageBody node={node} scaleBucket={scaleBucket} expanded={expanded} onToggleExpand={onToggleExpand} />
    case 'video':
      return <VideoBody node={node} />
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
          {isEditingText
            ? <InlineTextEditor node={node} onCommit={onCommitText} onCancel={onCancelText} />
            : (node.text ? <p style={{ fontSize: node.fontSize || 13 }}>{node.text}</p> : <p style={{ color: 'var(--cf-caption)' }}>双击编辑文本</p>)}
        </div>
      )
    case 'config':
      return (
        <ConfigNodeBody
          node={node}
          channels={channels}
          upstreamSummary={upstreamSummary}
          onUpdateNode={onUpdateNode}
          onRunConfig={onRunConfig}
        />
      )
    case 'group':
      return null
    default:
      return null
  }
}

const CanvasNode = React.memo(function CanvasNode({
  node, selected, dragging, isTarget, expanded, upstreamSummary, isEditingText, channels, scaleBucket,
  onNodeDown, onHoverEnter, onHoverLeave, onOpenZoom, onPortDown, onResizeDown,
  onToggleExpand, onUpdateNode, onRunConfig, onCommitText, onCancelText,
}) {
  return (
    <div
      className={`cf-node${selected ? ' is-selected' : ''}${dragging ? ' is-dragging' : ''}${isTarget ? ' is-target' : ''}${node.status === 'running' ? ' is-running' : ''}${node.type === 'group' ? ' is-group' : ''}`}
      data-id={node.id}
      style={{
        transform: `translate3d(${node.x}px, ${node.y}px, 0)`,
        width: node.w,
        height: node.h,
        zIndex: node.type === 'group' ? 1 : 2,
      }}
      onPointerDown={(e) => onNodeDown(e, node)}
      onPointerEnter={() => onHoverEnter(node)}
      onPointerLeave={onHoverLeave}
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
          </div>
          <div className="cf-node-body">
            <NodeBody
              node={node}
              channels={channels}
              scaleBucket={scaleBucket}
              expanded={expanded}
              upstreamSummary={upstreamSummary}
              isEditingText={isEditingText}
              onToggleExpand={onToggleExpand}
              onUpdateNode={onUpdateNode}
              onRunConfig={onRunConfig}
              onCommitText={onCommitText}
              onCancelText={onCancelText}
            />
          </div>
          {node.type === 'image' ? (
            <button type="button" className="cf-node-zoom" title="看大图（也可以双击）" aria-label="看大图"
              onPointerDown={(e) => e.stopPropagation()} onClick={(e) => { e.stopPropagation(); onOpenZoom(node) }}>
              <Icon name="search" size={12} />
            </button>
          ) : null}
          <span className="cf-node-port-in" aria-hidden="true" title="连线输入端口" />
          <button type="button" className="cf-node-port" onPointerDown={(e) => onPortDown(e, node)}
            title="从这里拖到另一个节点以连线" aria-label="连线端口">
            <span aria-hidden="true" />
          </button>
        </>
      )}
      {selected && node.type !== 'group'
        ? CORNERS.map((corner) => (
          <span
            key={corner}
            className={`cf-node-handle cf-node-handle--${corner}`}
            onPointerDown={(e) => { e.stopPropagation(); onResizeDown(e, node, corner) }}
            title="调整尺寸"
          />
        ))
        : null}
    </div>
  )
})

function Lightbox({ node, initialIndexOverride = null, onClose }) {
  const images = React.useMemo(() => {
    const list = Array.isArray(node?.images) && node.images.length ? node.images : []
    if (list.length) return list
    if (node?.storageKey || node?.src) {
      return [{ id: 'single', storageKey: node.storageKey || '', url: node.src || '' }]
    }
    return []
  }, [node])

  const initialIndex = React.useMemo(() => {
    if (typeof initialIndexOverride === 'number' && initialIndexOverride >= 0 && initialIndexOverride < images.length) {
      return initialIndexOverride
    }
    const idx = images.findIndex((i) => i.id === node?.primaryImageId)
    return idx >= 0 ? idx : 0
  }, [images, node?.primaryImageId, initialIndexOverride])

  const [index, setIndex] = React.useState(initialIndex)
  React.useEffect(() => { setIndex(initialIndex) }, [initialIndex, node?.id])

  const active = images[index] || images[0] || null
  const activeKey = active?.storageKey || ''
  const fallbackSrc = active?.degraded ? (active.url || '') : (active?.url && !activeKey ? active.url : (node?.src || ''))
  const [src, setSrc] = React.useState(() => (activeKey ? getCachedMediaUrl(activeKey) : '') || fallbackSrc)

  React.useEffect(() => {
    let alive = true
    if (!activeKey) { setSrc(fallbackSrc); return () => { alive = false } }
    setSrc(getCachedMediaUrl(activeKey) || fallbackSrc)
    resolveMediaUrl(activeKey).then((url) => { if (alive) setSrc(url || fallbackSrc) }).catch(() => { if (alive) setSrc(fallbackSrc) })
    return () => { alive = false }
  }, [activeKey, fallbackSrc])

  React.useEffect(() => {
    if (images.length <= 1) return undefined
    const onKey = (e) => {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault()
        setIndex((i) => (i + (e.key === 'ArrowRight' ? 1 : -1) + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [images.length])

  return (
    <div className="cf-lightbox" role="dialog" aria-modal="true" aria-label="预览大图"
      onPointerDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <figure className="cf-lightbox-figure" style={{ '--cf-lb-ratio': ratioValue(node.ratio) }}>
        {src ? (
          <img src={src} alt={node.prompt || '图片'} />
        ) : node.status === 'running' ? (
          <div className="cf-node-void"><span className="cf-spin" aria-hidden="true" />生成中</div>
        ) : (
          <div className="cf-node-empty"><Icon name="image" size={28} stroke={1.3} /><span>暂无图片</span></div>
        )}
      </figure>
      {images.length > 1 ? (
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)} aria-label="上一张">上一张</button>
          <span className="cf-lightbox-cap">{index + 1} / {images.length}</span>
          <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => setIndex((i) => (i + 1) % images.length)} aria-label="下一张">下一张</button>
        </div>
      ) : null}
      {node.prompt ? <figcaption className="cf-lightbox-cap">{node.prompt}</figcaption> : null}
      <button type="button" className="cf-lightbox-x" onClick={onClose} aria-label="关闭预览">
        <Icon name="close" size={16} />
      </button>
    </div>
  )
}

function findSnapTarget(nodes, edges, fromId, pt, snapPx = 28) {
  let best = null
  let bestDist = Infinity
  for (const n of nodes) {
    if (n.type === 'group' || !canConnect(nodes, edges, fromId, n.id)) continue
    if (pt.x < n.x - snapPx || pt.x > n.x + n.w + snapPx || pt.y < n.y - snapPx || pt.y > n.y + n.h + snapPx) continue
    const portDist = Math.hypot(pt.x - n.x, pt.y - (n.y + n.h / 2))
    const inside = pt.x >= n.x && pt.x <= n.x + n.w && pt.y >= n.y && pt.y <= n.y + n.h
    const score = inside ? portDist * 0.5 : portDist
    if (score < bestDist) { bestDist = score; best = n }
  }
  return best
}

function NodeCreatePopover({ title, sx, sy, items, onPick, onClose }) {
  return (
    <div
      className="cf-ctx cf-create-menu"
      style={{ left: sx, top: sy }}
      role="menu"
      onPointerDown={(e) => e.stopPropagation()}
      onWheel={(e) => e.stopPropagation()}
    >
      <p className="cf-ctx-head">{title}</p>
      {items.map((it) => (
        <button
          key={it.type}
          type="button"
          className="cf-ctx-item"
          role="menuitem"
          onClick={() => { onPick(it.type); onClose() }}
        >
          <Icon name={it.icon} size={14} />
          <span className="cf-ctx-item-label">{it.label}</span>
        </button>
      ))}
    </div>
  )
}

export function Canvas({
  nodes, edges, selection, channels, grid, minimap, tool = 'select', actions = {},
  onSelection, onMove, onResize, onConnect, onRemoveEdge, onOpenNode, onGesture,
  camera, camApi, showHint, onNodeAction, showToolbarLabels = false,
  onUpdateNode, onRunConfig, onBatchAction, onCreateFromConnection, onCreateAt, onDropFiles,
}) {
  const worldRef = React.useRef(null)
  const stageRef = React.useRef(null)
  const { cam, moveTo, bindStage } = camApi
  const [size, setSize] = React.useState({ w: 1200, h: 700 })

  const [hoverNodeId, setHoverNodeId] = React.useState(null)
  const hoverShowTimer = React.useRef(0)
  const hoverHideTimer = React.useRef(0)

  const cancelHoverTimers = React.useCallback(() => {
    if (hoverShowTimer.current) { clearTimeout(hoverShowTimer.current); hoverShowTimer.current = 0 }
    if (hoverHideTimer.current) { clearTimeout(hoverHideTimer.current); hoverHideTimer.current = 0 }
  }, [])
  React.useEffect(() => cancelHoverTimers, [cancelHoverTimers])

  const hoverEnterNode = React.useCallback((node) => {
    if (!node || node.type !== 'image') return
    cancelHoverTimers()
    hoverShowTimer.current = setTimeout(() => setHoverNodeId(node.id), 100)
  }, [cancelHoverTimers])
  const hoverLeaveNode = React.useCallback((e) => {
    if (hoverShowTimer.current) { clearTimeout(hoverShowTimer.current); hoverShowTimer.current = 0 }
    if (e?.relatedTarget?.closest?.('.cf-node-toolbar')) return
    hoverHideTimer.current = setTimeout(() => setHoverNodeId(null), 180)
  }, [])
  const hoverKeep = React.useCallback(() => {
    if (hoverHideTimer.current) { clearTimeout(hoverHideTimer.current); hoverHideTimer.current = 0 }
  }, [])
  const hoverLeaveBar = React.useCallback((e) => {
    if (e?.relatedTarget?.closest?.('.cf-node')) { hoverKeep(); return }
    hoverHideTimer.current = setTimeout(() => setHoverNodeId(null), 180)
  }, [hoverKeep])

  const [camView, setCamView] = React.useState(() => ({
    x: cam.current.x, y: cam.current.y, s: cam.current.s, zoom: Math.round(cam.current.s * 100),
  }))
  const camViewRef = React.useRef(camView)
  camViewRef.current = camView
  const lastCullRef = React.useRef({ x: cam.current.x, y: cam.current.y, s: cam.current.s })

  const syncCam = React.useCallback((force = false) => {
    const c = cam.current
    const nextZoom = Math.round(c.s * 100)
    const moved = Math.hypot(c.x - lastCullRef.current.x, c.y - lastCullRef.current.y)
    const scaled = Math.abs(c.s - lastCullRef.current.s) > 0.0005
    if (force || scaled) {
      lastCullRef.current = { x: c.x, y: c.y, s: c.s }
      setCamView({ x: c.x, y: c.y, s: c.s, zoom: nextZoom })
    } else if (moved >= (pan.current ? 360 : 160)) {
      lastCullRef.current = { x: c.x, y: c.y, s: c.s }
      React.startTransition(() => {
        setCamView({ x: c.x, y: c.y, s: c.s, zoom: nextZoom })
      })
    } else if (nextZoom !== camViewRef.current.zoom) {
      setCamView((prev) => ({ ...prev, s: c.s, zoom: nextZoom }))
    }
  }, [cam])

  const zoom = camView.zoom
  const pan = React.useRef(null)
  const drag = React.useRef(null)
  const resize = React.useRef(null)
  const marquee = React.useRef(null)
  const edgeFrom = React.useRef(null)
  const moveRaf = React.useRef(0)
  const [liveGeo, setLiveGeo] = React.useState(null)
  const [edgePreview, setEdgePreview] = React.useState(null)
  const snapTargetRef = React.useRef(null)
  const [snapTargetId, setSnapTargetId] = React.useState(null)
  const [expandedBatchId, setExpandedBatchId] = React.useState(null)
  const [editingTextId, setEditingTextId] = React.useState(null)
  const [connMenu, setConnMenu] = React.useState(null)
  const [blankMenu, setBlankMenu] = React.useState(null)
  const [minimapOpen, setMinimapOpen] = React.useState(true)
  const [ctx, setCtx] = React.useState(null)
  const [box, setBox] = React.useState(null)
  const [space, setSpace] = React.useState(false)
  const [zoomState, setZoomState] = React.useState(null)
  const [edgeSel, setEdgeSel] = React.useState(null)

  React.useEffect(() => () => { if (moveRaf.current) cancelAnimationFrame(moveRaf.current) }, [])

  React.useEffect(() => {
    const el = stageRef.current
    if (!el) return
    bindStage?.(el)
    const ro = new ResizeObserver(() => {
      const r = el.getBoundingClientRect()
      setSize({ w: r.width, h: r.height })
    })
    ro.observe(el)
    const r = el.getBoundingClientRect()
    setSize({ w: r.width, h: r.height })
    return () => ro.disconnect()
  }, [bindStage])

  React.useEffect(() => {
    bindStage?.(stageRef.current)
    camApi.apply(worldRef.current, stageRef.current)
    syncCam(true)
  }, [camApi, bindStage, syncCam])

  React.useEffect(() => {
    const down = (e) => { if (e.code === 'Space' && !/input|textarea/i.test(e.target.tagName)) { setSpace(true); e.preventDefault() } }
    const up = (e) => { if (e.code === 'Space') setSpace(false) }
    window.addEventListener('keydown', down)
    window.addEventListener('keyup', up)
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up) }
  }, [])

  React.useEffect(() => {
    if (!camera) return
    const el = worldRef.current
    if (!el) return
    moveTo(el, camera.x, camera.y, camera.s, () => syncCam(true), stageRef.current)
  }, [camera, moveTo, syncCam])

  const rect = React.useCallback(() => stageRef.current.getBoundingClientRect(), [])
  const toWorld = React.useCallback((cx, cy) => {
    const r = stageRef.current.getBoundingClientRect()
    return { x: (cx - r.left - cam.current.x) / cam.current.s, y: (cy - r.top - cam.current.y) / cam.current.s }
  }, [cam])

  const fit = React.useCallback(() => {
    const el = worldRef.current
    if (!el || !nodes.length) return
    const pad = 72
    const minX = Math.min(...nodes.map(n => n.x)) - pad
    const minY = Math.min(...nodes.map(n => n.y)) - pad
    const maxX = Math.max(...nodes.map(n => n.x + n.w)) + pad
    const maxY = Math.max(...nodes.map(n => n.y + n.h)) + pad
    const s = Math.min(1.35, Math.max(MIN_S, Math.min(size.w / (maxX - minX), size.h / (maxY - minY))))
    moveTo(el, pad - minX * s, pad - minY * s, s, () => syncCam(true), stageRef.current)
  }, [nodes, size, moveTo, syncCam])

  React.useEffect(() => {
    const t = setTimeout(fit, 80)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(() => { camApi.fit = fit }, [camApi, fit])

  const zoomBy = (factor) => {
    const el = worldRef.current
    if (!el) return
    const cx = size.w / 2, cy = size.h / 2
    const c = cam.current
    const wx = (cx - c.tx) / c.ts, wy = (cy - c.ty) / c.ts
    const ns = Math.min(MAX_S, Math.max(MIN_S, c.ts * factor))
    moveTo(el, cx - wx * ns, cy - wy * ns, ns, () => syncCam(true), stageRef.current)
  }

  const onWheel = (e) => {
    e.preventDefault()
    const r = rect()
    const px = e.clientX - r.left, py = e.clientY - r.top
    const c = cam.current
    const wx = (px - c.tx) / c.ts, wy = (py - c.ty) / c.ts
    const ns = Math.min(MAX_S, Math.max(MIN_S, c.ts * Math.exp(-e.deltaY * 0.0018)))
    moveTo(worldRef.current, px - wx * ns, py - wy * ns, ns, () => syncCam(), stageRef.current)
  }

  const openContext = (e) => {
    e.preventDefault()
    const r = rect()
    const x = Math.max(0, Math.min(e.clientX - r.left, r.width - 200))
    const y = Math.max(0, Math.min(e.clientY - r.top, r.height - 40))
    // 用坐标查真实命中元素：右键的 pointerdown 可能被前面的事件捕获，
    // 导致 contextmenu 的 target 被重定向到舞台（之前就是这个坑）。
    const hit = document.elementFromPoint(e.clientX, e.clientY) || e.target
    const nodeEl = hit.closest?.('.cf-node')
    if (nodeEl) {
      const id = nodeEl.dataset.id
      const node = nodes.find(n => n.id === id)
      if (id && !selection.includes(id)) onSelection([id])
      setCtx({ kind: node?.type === 'group' ? 'group' : 'node', id, x, y })
      return
    }
    const edgeEl = hit.closest?.('.cf-edge')
    if (edgeEl?.dataset.id) { setCtx({ kind: 'edge', id: edgeEl.dataset.id, x, y }); return }
    setCtx({ kind: 'blank', id: null, x, y })
  }

  const onDown = (e) => {
    if (ctx) setCtx(null)
    if (connMenu) setConnMenu(null)
    if (blankMenu) setBlankMenu(null)
    if (edgeSel) setEdgeSel(null)
    // RC5：空格、中键、或选中「移动」工具时都是平移
    if (e.button === 1 || space || tool === 'pan') {
      e.preventDefault()
      pan.current = { x: e.clientX, y: e.clientY, cx: cam.current.tx, cy: cam.current.ty }
      stageRef.current.classList.add('is-grabbing')
      stageRef.current.setPointerCapture(e.pointerId)
      return
    }
    if (e.button !== 0) return
    const p = toWorld(e.clientX, e.clientY)
    marquee.current = { x0: p.x, y0: p.y, additive: e.shiftKey, clientX: e.clientX, clientY: e.clientY }
    setBox({ x: p.x, y: p.y, w: 0, h: 0 })
    stageRef.current.setPointerCapture(e.pointerId)
  }

  const byId = React.useMemo(() => Object.fromEntries(nodes.map(n => [n.id, n])), [nodes])
  const nodesRef = React.useRef(nodes)
  nodesRef.current = nodes
  const edgesRef = React.useRef(edges)
  edgesRef.current = edges
  const byIdRef = React.useRef(byId)
  byIdRef.current = byId
  const selectionRef = React.useRef(selection)
  selectionRef.current = selection
  const spaceRef = React.useRef(space)
  spaceRef.current = space
  const toolRef = React.useRef(tool)
  toolRef.current = tool
  const edgeSelRef = React.useRef(edgeSel)
  edgeSelRef.current = edgeSel

  const computeDragPatch = (d, clientX, clientY) => {
    const p = toWorld(clientX, clientY)
    const dx = p.x - d.p0.x
    const dy = p.y - d.p0.y
    const patch = {}
    for (const id of d.ids) {
      const orig = d.start.get(id)
      if (orig) patch[id] = { x: orig.x + dx, y: orig.y + dy, w: orig.w, h: orig.h }
    }
    return { dx, dy, patch }
  }

  const computeResizeRect = (r, clientX, clientY) => {
    const p = toWorld(clientX, clientY)
    const MIN_W = 140
    const MIN_H = 80
    const left = r.corner === 'nw' || r.corner === 'sw'
    const top = r.corner === 'nw' || r.corner === 'ne'

    let w
    let h
    let x = r.start.x
    let y = r.start.y

    if (left) {
      w = Math.round(r.anchorRight - p.x)
      w = Math.max(MIN_W, Math.min(MANUAL_RESIZE_MAX, w))
      x = r.anchorRight - w
    } else {
      w = Math.round(p.x - r.start.x)
      w = Math.max(MIN_W, Math.min(MANUAL_RESIZE_MAX, w))
    }

    if (r.locked) {
      h = Math.round(w / r.ratio) + r.head
    } else if (top) {
      h = Math.round(r.anchorBottom - p.y)
      h = Math.max(MIN_H, h)
      y = r.anchorBottom - h
    } else {
      h = Math.round(p.y - r.start.y)
      h = Math.max(MIN_H, h)
    }

    if (r.locked && top) y = r.anchorBottom - h
    return { x, y, w, h }
  }

  const flushFrame = () => {
    moveRaf.current = 0
    if (drag.current) {
      const d = drag.current
      const { dx, dy, patch } = computeDragPatch(d, d.clientX, d.clientY)
      d.dx = dx
      d.dy = dy
      setLiveGeo(patch)
      return
    }
    if (resize.current) {
      const r = resize.current
      const next = computeResizeRect(r, r.clientX, r.clientY)
      r.last = next
      setLiveGeo({ [r.id]: next })
      return
    }
    if (marquee.current) {
      const m = marquee.current
      const p = toWorld(m.clientX, m.clientY)
      setBox({ x: Math.min(m.x0, p.x), y: Math.min(m.y0, p.y), w: Math.abs(p.x - m.x0), h: Math.abs(p.y - m.y0) })
      return
    }
    if (edgeFrom.current) {
      const raw = toWorld(edgeFrom.current.clientX, edgeFrom.current.clientY)
      const snap = findSnapTarget(nodesRef.current, edgesRef.current, edgeFrom.current.id, raw, 28)
      const nextSnapId = snap?.id || null
      if (snapTargetRef.current !== nextSnapId) {
        snapTargetRef.current = nextSnapId
        setSnapTargetId(nextSnapId)
      }
      setEdgePreview({
        from: edgeFrom.current.id,
        to: snap ? { x: snap.x, y: snap.y + snap.h / 2 } : raw,
      })
    }
  }

  const scheduleFrame = () => {
    if (!moveRaf.current) moveRaf.current = requestAnimationFrame(flushFrame)
  }

  const onMovePointer = (e) => {
    if (pan.current) {
      const c = cam.current
      moveTo(worldRef.current, pan.current.cx + (e.clientX - pan.current.x), pan.current.cy + (e.clientY - pan.current.y), c.ts,
        () => syncCam(), stageRef.current)
      return
    }
    if (drag.current) {
      drag.current.clientX = e.clientX
      drag.current.clientY = e.clientY
      scheduleFrame()
      return
    }
    if (resize.current) {
      resize.current.clientX = e.clientX
      resize.current.clientY = e.clientY
      scheduleFrame()
      return
    }
    if (marquee.current) {
      marquee.current.clientX = e.clientX
      marquee.current.clientY = e.clientY
      scheduleFrame()
      return
    }
    if (edgeFrom.current) {
      edgeFrom.current.clientX = e.clientX
      edgeFrom.current.clientY = e.clientY
      scheduleFrame()
    }
  }

  const onUp = (e) => {
    if (moveRaf.current) { cancelAnimationFrame(moveRaf.current); moveRaf.current = 0 }
    if (pan.current) {
      pan.current = null
      stageRef.current?.classList.remove('is-grabbing')
      syncCam(true)
      return
    }
    if (drag.current) {
      const d = drag.current
      drag.current = null
      const { dx, dy } = computeDragPatch(d, e.clientX ?? d.clientX, e.clientY ?? d.clientY)
      setLiveGeo(null)
      if (dx !== 0 || dy !== 0) onMove(d.ids, dx, dy)
      onGesture?.('end')
      return
    }
    if (resize.current) {
      const r = resize.current
      resize.current = null
      const final = computeResizeRect(r, e.clientX ?? r.clientX, e.clientY ?? r.clientY)
      setLiveGeo(null)
      if (final.w !== r.start.w || final.h !== r.start.h) onResize(r.id, final.w, final.h)
      if (final.x !== r.start.x || final.y !== r.start.y) onMove([r.id], final.x - r.start.x, final.y - r.start.y)
      onGesture?.('end')
      return
    }
    if (marquee.current) {
      const m = marquee.current
      marquee.current = null
      const p = toWorld(e.clientX, e.clientY)
      const b = { x: Math.min(m.x0, p.x), y: Math.min(m.y0, p.y), w: Math.abs(p.x - m.x0), h: Math.abs(p.y - m.y0) }
      setBox(null)
      if (b.w > 6 || b.h > 6) {
        const hit = nodes.filter(n => !(n.x > b.x + b.w || n.x + n.w < b.x || n.y > b.y + b.h || n.y + n.h < b.y))
        onSelection(m.additive ? [...new Set([...selection, ...hit.map(n => n.id)])] : hit.map(n => n.id))
      } else if (!m.additive) onSelection([])
      return
    }
    if (edgeFrom.current) {
      const { id: fromId, startX, startY } = edgeFrom.current
      edgeFrom.current = null
      snapTargetRef.current = null
      setSnapTargetId(null)
      setEdgePreview(null)
      const p = toWorld(e.clientX, e.clientY)
      const target = findSnapTarget(nodesRef.current, edgesRef.current, fromId, p, 28)
      if (target && canConnect(nodesRef.current, edgesRef.current, fromId, target.id)) {
        onConnect(fromId, target.id)
      } else if (Math.hypot((e.clientX ?? startX) - startX, (e.clientY ?? startY) - startY) > 24 && onCreateFromConnection) {
        const r = rect()
        setConnMenu({
          fromId,
          worldX: p.x,
          worldY: p.y,
          sx: Math.max(8, Math.min(e.clientX - r.left, r.width - 190)),
          sy: Math.max(8, Math.min(e.clientY - r.top, r.height - 230)),
        })
      }
    }
  }

  const lastTap = React.useRef({ id: '', t: 0, x: 0, y: 0 })
  const isDoubleTap = React.useCallback((node, e) => {
    const now = e.timeStamp || Date.now()
    const prev = lastTap.current
    const near = Math.abs(e.clientX - prev.x) < 6 && Math.abs(e.clientY - prev.y) < 6
    lastTap.current = { id: node.id, t: now, x: e.clientX, y: e.clientY }
    return prev.id === node.id && now - prev.t < 320 && near
  }, [])

  const openZoom = React.useCallback((node, idx = null) => {
    setZoomState(node ? { node, idx } : null)
  }, [])
  const closeZoom = React.useCallback(() => {
    setZoomState(null)
  }, [])

  React.useEffect(() => {
    if (!zoomState && !connMenu && !blankMenu) return undefined
    const onKey = (e) => {
      if (e.key === 'Escape') {
        e.preventDefault()
        e.stopPropagation()
        if (zoomState) setZoomState(null)
        else { setConnMenu(null); setBlankMenu(null) }
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [zoomState, connMenu, blankMenu])

  const toggleExpand = React.useCallback((id) => {
    setExpandedBatchId((cur) => (cur === id ? null : id))
  }, [])
  const commitText = React.useCallback((id, text) => {
    setEditingTextId(null)
    onUpdateNode?.(id, { text })
  }, [onUpdateNode])
  const cancelText = React.useCallback(() => setEditingTextId(null), [])

  const nodeDown = React.useCallback((e, node) => {
    if (e.button !== 0) return
    if (e.button === 1 || spaceRef.current || toolRef.current === 'pan') return
    if (edgeSelRef.current) setEdgeSel(null)
    if (isDoubleTap(node, e)) {
      e.stopPropagation()
      if (node.type === 'image') openZoom(node)
      else if (node.type === 'text') { setEditingTextId(node.id); onOpenNode(node) }
      else onOpenNode(node)
      return
    }
    e.stopPropagation()
    const curSel = selectionRef.current
    const additive = e.shiftKey || e.metaKey || e.ctrlKey
    const already = curSel.includes(node.id)
    const ids = additive
      ? (already ? curSel.filter(x => x !== node.id) : [...curSel, node.id])
      : (already ? curSel : [node.id])
    onSelection(ids)
    if (additive) return
    const p = toWorld(e.clientX, e.clientY)
    const moving = node.type === 'group' && node.childIds?.length
      ? [node.id, ...node.childIds]
      : (ids.length > 1 ? ids : [node.id])
    const start = new Map()
    for (const id of moving) {
      const n = byIdRef.current[id]
      if (n) start.set(id, { x: n.x, y: n.y, w: n.w, h: n.h })
    }
    drag.current = { ids: moving, start, p0: p, clientX: e.clientX, clientY: e.clientY, dx: 0, dy: 0 }
    onGesture?.('start')
    stageRef.current?.setPointerCapture(e.pointerId)
  }, [isDoubleTap, openZoom, onOpenNode, onSelection, toWorld, onGesture])

  const resizeDown = React.useCallback((e, node, corner = 'se') => {
    const locked = node.type === 'image' && node.locked !== false
    resize.current = {
      id: node.id,
      corner,
      locked,
      ratio: ratioValue(node.ratio),
      head: node.type === 'image' ? IMAGE_HEAD : 0,
      start: { x: node.x, y: node.y, w: node.w, h: node.h },
      last: { x: node.x, y: node.y, w: node.w, h: node.h },
      anchorRight: node.x + node.w,
      anchorBottom: node.y + node.h,
      clientX: e.clientX,
      clientY: e.clientY,
    }
    onGesture?.('start')
    stageRef.current?.setPointerCapture(e.pointerId)
  }, [onGesture])

  const portDown = React.useCallback((e, node) => {
    e.stopPropagation()
    edgeFrom.current = { id: node.id, startX: e.clientX, startY: e.clientY, clientX: e.clientX, clientY: e.clientY }
    setEdgePreview({ from: node.id, to: toWorld(e.clientX, e.clientY) })
    stageRef.current?.setPointerCapture(e.pointerId)
  }, [toWorld])

  const visible = React.useMemo(() => {
    const view = viewBounds(camView, size)
    const alive = new Set()
    const keep = new Set(selection || [])
    if (edgeFrom.current?.id) keep.add(edgeFrom.current.id)
    const visNodes = nodes.filter((n) => keep.has(n.id) || nodeVisible(n, view))
    visNodes.forEach((n) => alive.add(n.id))
    const visEdges = edges.filter((e) => {
      const a = byId[e.from]
      const b = byId[e.to]
      if (!a || !b) return false
      if (!alive.has(a.id) || !alive.has(b.id)) return false
      return edgeVisible(a, b, view)
    })
    return { nodes: visNodes, edges: visEdges, culled: nodes.length - visNodes.length }
  }, [nodes, edges, byId, selection, camView, size.w, size.h])

  const effectiveNodes = React.useMemo(() => {
    if (!liveGeo) return visible.nodes
    return visible.nodes.map((n) => (liveGeo[n.id] ? { ...n, ...liveGeo[n.id] } : n))
  }, [visible.nodes, liveGeo])

  const liveById = React.useMemo(() => {
    if (!liveGeo) return byId
    const next = { ...byId }
    for (const [id, patch] of Object.entries(liveGeo)) {
      if (next[id]) next[id] = { ...next[id], ...patch }
    }
    return next
  }, [byId, liveGeo])

  const scaleBucket = camView.s >= 1.8 ? 2 : camView.s >= 1.1 ? 1.5 : 1
  const gridClass = grid === 'lines' ? 'cf-stage--lines' : grid === 'blank' ? 'cf-stage--blank' : 'cf-stage--dots'
  const selSet = React.useMemo(() => new Set(selection || []), [selection])

  // 仅对 config 节点算上游数量摘要，不破坏其他节点在 500 节点下的 React.memo 稳定性
  const configSummaries = React.useMemo(() => {
    const out = new Map()
    for (const n of nodes) {
      if (n.type !== 'config') continue
      let imgs = 0
      let txts = 0
      for (const e of edges) {
        if (e.to !== n.id) continue
        const src = byId[e.from]
        if (!src) continue
        if (src.type === 'image') imgs += 1
        else if (src.type === 'text') txts += 1
      }
      if (imgs || txts) {
        const parts = []
        if (imgs) parts.push(`图×${imgs}`)
        if (txts) parts.push(`文×${txts}`)
        out.set(n.id, `上游 ${parts.join(' ')}`)
      } else {
        out.set(n.id, '')
      }
    }
    return out
  }, [nodes, edges, byId])

  const expandedBatchNode = React.useMemo(() => {
    if (!expandedBatchId) return null
    const n = liveById[expandedBatchId]
    return n && (n.images?.length || 0) > 1 ? n : null
  }, [expandedBatchId, liveById])

  const selBarInfo = React.useMemo(() => {
    if (!selection || selection.length < 2) return null
    const picked = selection.map((id) => byId[id]).filter(Boolean)
    const hasGroup = picked.some((n) => n.type === 'group')
    const mergeableImgs = picked.filter((n) => n.type === 'image' && (n.images?.length || n.storageKey || n.src))
    return { count: selection.length, hasGroup, canMerge: mergeableImgs.length >= 2 }
  }, [selection, byId])

  React.useEffect(() => {
    if (!edgeSel) return
    const onKey = (e) => {
      if (/input|textarea|select/i.test(e.target.tagName)) return
      if (e.key === 'Escape') { setEdgeSel(null); return }
      if (e.key === 'Delete' || e.key === 'Backspace') {
        e.preventDefault()
        e.stopPropagation()
        onRemoveEdge(edgeSel)
        setEdgeSel(null)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [edgeSel, onRemoveEdge])

  const onDoubleClickStage = (e) => {
    if (!onCreateAt) return
    if (e.target.closest?.('.cf-node, .cf-zoom, .cf-minimap, .cf-ctx, .cf-node-toolbar, .cf-sel-bar, .cf-batch-pop')) return
    const r = rect()
    const w = toWorld(e.clientX, e.clientY)
    setBlankMenu({
      worldX: w.x,
      worldY: w.y,
      sx: Math.max(8, Math.min(e.clientX - r.left, r.width - 190)),
      sy: Math.max(8, Math.min(e.clientY - r.top, r.height - 230)),
    })
  }

  const onDragOverStage = (e) => {
    if (!onDropFiles) return
    if (e.dataTransfer?.types?.includes('Files')) e.preventDefault()
  }

  const onDropStage = (e) => {
    if (!onDropFiles) return
    const files = [...(e.dataTransfer?.files || [])].filter((f) => f.type.startsWith('image/'))
    if (!files.length) return
    e.preventDefault()
    onDropFiles(files, toWorld(e.clientX, e.clientY))
  }

  const createMenuItems = [
    { type: 'image', icon: 'image', label: '新建图片节点' },
    { type: 'text', icon: 'text', label: '新建文本节点' },
    { type: 'config', icon: 'sliders', label: '新建配置节点' },
    { type: 'video', icon: 'play', label: '新建视频节点' },
    { type: 'audio', icon: 'bars', label: '新建音频节点' },
  ]

  return (
    <div className="cf-board">
      <div
        className={`cf-stage ${gridClass}${space || tool === 'pan' ? ' is-grab' : ''}`}
        ref={stageRef}
        onPointerDown={onDown}
        onPointerMove={onMovePointer}
        onPointerUp={onUp}
        onPointerCancel={onUp}
        onDoubleClick={onDoubleClickStage}
        onDragOver={onDragOverStage}
        onDrop={onDropStage}
        onWheel={onWheel}
        onContextMenu={openContext}
      >
        <div className={`cf-grid ${gridClass}`} aria-hidden="true" />
        <div className="cf-world" ref={worldRef}>
          <svg className="cf-edges" width="1" height="1">
            <defs>
              <marker id="cf-arrow" viewBox="0 0 8 8" refX="7" refY="4" markerWidth="7" markerHeight="7" orient="auto">
                <path d="M0 0 L8 4 L0 8 z" className="cf-arrow-head" />
              </marker>
            </defs>
            {visible.edges.map(edge => {
              const a = liveById[edge.from], b = liveById[edge.to]
              if (!a || !b) return null
              const d = edgePath(a, b)
              const related = selSet.has(edge.from) || selSet.has(edge.to)
              return (
                <g key={edge.id} className={`cf-edge${edgeSel === edge.id ? ' is-on' : ''}${related ? ' is-related' : ''}`} data-id={edge.id}>
                  <path d={d} className="cf-edge-line" markerEnd="url(#cf-arrow)" />
                  <path d={d} className="cf-edge-hit"
                    onPointerDown={(e) => { e.stopPropagation(); setEdgeSel(edge.id) }}>
                    <title>点击选中，Delete 或右键菜单删除</title>
                  </path>
                </g>
              )
            })}
            {edgePreview ? (() => {
              const a = liveById[edgePreview.from]
              if (!a) return null
              return <path d={edgePath(a, { x: edgePreview.to.x, y: edgePreview.to.y - 10, w: 0, h: 20 })} className="cf-edge-line cf-edge-line--ghost" />
            })() : null}
          </svg>

          {effectiveNodes.map(node => (
            <CanvasNode
              key={node.id}
              node={node}
              selected={selSet.has(node.id)}
              dragging={Boolean(liveGeo?.[node.id])}
              isTarget={snapTargetId === node.id}
              expanded={expandedBatchId === node.id}
              upstreamSummary={node.type === 'config' ? configSummaries.get(node.id) : undefined}
              isEditingText={editingTextId === node.id}
              channels={channels}
              scaleBucket={scaleBucket}
              onNodeDown={nodeDown}
              onHoverEnter={hoverEnterNode}
              onHoverLeave={hoverLeaveNode}
              onOpenZoom={openZoom}
              onPortDown={portDown}
              onResizeDown={resizeDown}
              onToggleExpand={toggleExpand}
              onUpdateNode={onUpdateNode}
              onRunConfig={onRunConfig}
              onCommitText={commitText}
              onCancelText={cancelText}
            />
          ))}

          {expandedBatchNode ? (
            <ExpandedBatchPanel
              node={expandedBatchNode}
              onClose={() => setExpandedBatchId(null)}
              onOpenZoom={openZoom}
              onBatchAction={onBatchAction}
            />
          ) : null}

          {box && box.w > 4 ? <div className="cf-marquee" style={{ left: box.x, top: box.y, width: box.w, height: box.h }} /> : null}
        </div>

        {selBarInfo && !box ? (
          <div className="cf-sel-bar" role="toolbar" aria-label="多选批量操作" onPointerDown={(e) => e.stopPropagation()}>
            <span className="cf-sel-bar-count">已选 {selBarInfo.count} 项</span>
            <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => actions.wrap?.()}>打组</button>
            {selBarInfo.hasGroup && actions.ungroupSelected ? (
              <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => actions.ungroupSelected?.()}>取消分组</button>
            ) : null}
            {selBarInfo.canMerge && onBatchAction ? (
              <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => onBatchAction('merge', selection)}>合并为图组</button>
            ) : null}
            <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => actions.duplicate?.()}>复制</button>
            <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => actions.removeSelection?.()}>删除</button>
          </div>
        ) : null}

        {hoverNodeId ? (() => {
          const node = liveById[hoverNodeId]
          if (!node || node.type !== 'image') return null
          return (
            <NodeToolbar
              node={node}
              cam={cam.current}
              showLabels={showToolbarLabels}
              onAction={(actionId, n) => {
                if (actionId === 'view') { openZoom(n); return }
                onNodeAction?.(actionId, n)
              }}
              onKeep={hoverKeep}
              onLeave={hoverLeaveBar}
            />
          )
        })() : null}

        {ctx ? (
          <ContextMenu ctx={ctx} nodes={nodes} selection={selection} actions={actions} onClose={() => setCtx(null)} />
        ) : null}

        {connMenu ? (
          <NodeCreatePopover
            title="新建并连接"
            sx={connMenu.sx}
            sy={connMenu.sy}
            items={createMenuItems}
            onPick={(type) => onCreateFromConnection?.(connMenu.fromId, type, { x: connMenu.worldX, y: connMenu.worldY })}
            onClose={() => setConnMenu(null)}
          />
        ) : null}

        {blankMenu ? (
          <NodeCreatePopover
            title="在此处新建"
            sx={blankMenu.sx}
            sy={blankMenu.sy}
            items={[...createMenuItems, { type: 'group', icon: 'group', label: '新建分组' }]}
            onPick={(type) => onCreateAt?.(type, { x: blankMenu.worldX, y: blankMenu.worldY })}
            onClose={() => setBlankMenu(null)}
          />
        ) : null}
      </div>

      {minimap && minimapOpen ? (
        <Minimap nodes={nodes} cam={camView} size={size}
          onJump={(p) => moveTo(worldRef.current, size.w / 2 - p.x * cam.current.s, size.h / 2 - p.y * cam.current.s, cam.current.s,
            () => syncCam(true), stageRef.current)} />
      ) : null}

      <div className={`cf-zoom${!minimap || !minimapOpen ? ' is-no-minimap' : ''}`}>
        <button type="button" className="cf-icon-btn" onClick={() => zoomBy(1 / 1.25)} aria-label="缩小">−</button>
        <input
          className="cf-zoom-range" type="range" min={10} max={300} value={zoom} aria-label="缩放"
          onChange={(e) => {
            const el = worldRef.current
            if (!el) return
            const ns = Number(e.target.value) / 100
            const c = cam.current
            const cx = size.w / 2, cy = size.h / 2
            moveTo(el, cx - ((cx - c.tx) / c.s) * ns, cy - ((cy - c.ty) / c.s) * ns, ns, () => syncCam(), stageRef.current)
          }}
        />
        <button type="button" className="cf-icon-btn" onClick={() => zoomBy(1.25)} aria-label="放大">+</button>
        <span className="cf-zoom-num">{zoom}%</span>
        <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" onClick={fit}>适应</button>
        {minimap ? (
          <button
            type="button"
            className="cf-icon-btn"
            aria-label={minimapOpen ? '隐藏缩略图' : '显示缩略图'}
            aria-pressed={minimapOpen}
            title="缩略图"
            onClick={() => setMinimapOpen((v) => !v)}
          >
            <Icon name="frame" size={13} />
          </button>
        ) : null}
      </div>

      {showHint ? (
        <p className="cf-editor-hint" aria-hidden="true">
          <span>框选</span><span>空格平移</span><span>滚轮缩放</span><span>双击看大图</span>
        </p>
      ) : null}

      {zoomState?.node ? (
        <Lightbox
          node={liveById[zoomState.node.id] || zoomState.node}
          initialIndexOverride={zoomState.idx}
          onClose={closeZoom}
        />
      ) : null}
    </div>
  )
}

const Minimap = React.memo(function Minimap({ nodes, cam, size, onJump }) {
  const W = 143, H = 92, pad = 80
  const layout = React.useMemo(() => {
    if (!nodes.length) return null
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity
    for (const n of nodes) {
      if (n.x < minX) minX = n.x
      if (n.y < minY) minY = n.y
      if (n.x + n.w > maxX) maxX = n.x + n.w
      if (n.y + n.h > maxY) maxY = n.y + n.h
    }
    minX -= pad; minY -= pad; maxX += pad; maxY += pad
    const spanX = Math.max(1, maxX - minX), spanY = Math.max(1, maxY - minY)
    const k = Math.min(W / spanX, H / spanY)
    const offX = (W - spanX * k) / 2, offY = (H - spanY * k) / 2
    const map = (n) => ({ x: (n.x - minX) * k + offX, y: (n.y - minY) * k + offY, w: n.w * k, h: n.h * k })
    const rects = (
      <>
        {nodes.filter(n => n.type === 'group').map(n => {
          const m = map(n)
          return <rect key={n.id} x={m.x} y={m.y} width={m.w} height={m.h} rx={3} className="cf-mini-group" />
        })}
        {nodes.filter(n => n.type !== 'group').map(n => {
          const m = map(n)
          return <rect key={n.id} x={m.x} y={m.y} width={Math.max(3, m.w)} height={Math.max(3, m.h)} rx={2}
            className={`cf-mini-node${n.type === 'image' ? ' cf-mini-image' : ''}`} />
        })}
      </>
    )
    return { minX, minY, k, offX, offY, rects }
  }, [nodes])

  if (!layout) return null
  const { minX, minY, k, offX, offY, rects } = layout
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
      {rects}
      <rect x={view.x} y={view.y} width={Math.max(6, view.w)} height={Math.max(6, view.h)} rx={2} className="cf-mini-view" />
    </svg>
  )
})


function ContextMenu({ ctx, nodes, selection, actions, onClose }) {
  const node = ctx.id ? nodes.find(n => n.id === ctx.id) : null
  const run = (fn) => () => { onClose(); fn?.() }

  const items = (() => {
    if (ctx.kind === 'edge') {
      return [{ icon: 'trash', label: '删除连线', run: run(() => actions.removeEdge?.(ctx.id)) }]
    }
    if (ctx.kind === 'group') {
      return [
        { icon: 'plus', label: '复制分组', run: run(() => actions.duplicate?.()) },
        { icon: 'close', label: '取消分组（保留节点）', run: run(() => actions.ungroup?.(ctx.id)) },
        { sep: true },
        { icon: 'trash', label: '删除分组与内容', danger: true, run: run(() => actions.deleteGroupDeep?.(ctx.id)) },
      ]
    }
    if (ctx.kind === 'node') {
      const list = []
      if (node?.type === 'image') list.push({ icon: 'play', label: '用当前提示词生成', run: run(() => actions.generateNode?.(ctx.id)) })
      list.push({ icon: 'plus', label: '复制', hint: '⌘D', run: run(() => actions.duplicate?.()) })
      list.push({ icon: 'group', label: '包成组', hint: '⌘G', disabled: selection.length < 2, run: run(() => actions.wrap?.()) })
      list.push({ sep: true })
      list.push({ icon: 'trash', label: '删除', hint: '⌫', danger: true, run: run(() => actions.removeSelection?.()) })
      return list
    }
    return [
      { icon: 'image', label: '新建图片节点', run: run(() => actions.addNode?.('image')) },
      { icon: 'text', label: '新建文本节点', run: run(() => actions.addNode?.('text')) },
      { icon: 'sliders', label: '新建配置节点', run: run(() => actions.addNode?.('config')) },
      { icon: 'group', label: '新建分组', run: run(() => actions.addNode?.('group')) },
      { sep: true },
      { icon: 'check', label: '全选', hint: '⌘A', run: run(() => actions.selectAll?.()) },
      { icon: 'target', label: '适应视图', hint: '0', run: run(() => actions.fit?.()) },
    ]
  })()

  return (
    <div className="cf-ctx" style={{ left: ctx.x, top: ctx.y }} role="menu"
      onPointerDown={(e) => e.stopPropagation()} onContextMenu={(e) => e.preventDefault()}>
      <p className="cf-ctx-head">
        {ctx.kind === 'blank' ? '画布' : ctx.kind === 'edge' ? '连线' : node?.type === 'group' ? (node.name || '分组') : `${NODE_TYPES[node?.type] || ''}节点`}
      </p>
      {items.map((it, i) => (it.sep ? <div key={`s${i}`} className="cf-ctx-sep" /> : (
        <button key={i} type="button" className="cf-ctx-item" role="menuitem" disabled={it.disabled} onClick={it.run}>
          <Icon name={it.icon} size={14} />
          <span className="cf-ctx-item-label">{it.label}</span>
          {it.hint ? <span className="cf-ctx-item-key">{it.hint}</span> : null}
        </button>
      )))}
    </div>
  )
}
