// 图片工具：裁剪 / 切图 / 放大 / 多角度。
//
// 四个工具共用一个外壳（ToolDialog），只是内容区不同。
// 裁剪框用**归一化坐标**存储，与图片实际像素解耦 —— 这样预览用小图、
// 实际处理用原图，坐标不用换算两次。
import React from 'react'
import { Btn, Icon } from '../ui.jsx'
import { cropImage, splitImage, upscaleImage, resolveUpscaleSize, readImageSize } from '../canvas/image-ops.js'
import { compositeMask, maskHasPaint, clearMask, paintStroke, MASK_COLOR, MASK_ALPHA } from '../canvas/mask.js'
import { buildAnglePrompt, buildMaskEditPrompt } from '../gen/sizes.js'

/** 工具对话框外壳。 */
function ToolDialog({ title, icon, onClose, onApply, applyLabel = '应用', busy, disabled, children }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape' && !busy) onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose, busy])

  return (
    // 用现成的 cf-scrim（position:fixed; inset:0），不要自己造遮罩类名 ——
    // 手写一个不存在的 .cf-dialog-mask 会让对话框失去全屏定位，跑偏到左上角。
    <div className="cf-scrim" onPointerDown={(e) => { if (e.target === e.currentTarget && !busy) onClose() }}>
      <div className="cf-dialog cf-dialog--wide" role="dialog" aria-modal="true" aria-label={title}>
        <header className="cf-dialog-head">
          <h2 className="cf-dialog-title">{title}</h2>
          <button type="button" className="cf-icon-btn" aria-label="关闭" onClick={onClose} disabled={busy}>
            <Icon name="close" size={15} />
          </button>
        </header>
        <div className="cf-dialog-body">{children}</div>
        <footer className="cf-dialog-foot">
          <Btn onClick={onClose} disabled={busy}>取消</Btn>
          <Btn variant="primary" onClick={onApply} disabled={busy || disabled}>
            {busy ? '处理中…' : applyLabel}
          </Btn>
        </footer>
      </div>
    </div>
  )
}

// ---------- 裁剪 ----------

const MIN_CROP = 0.06
const defaultCrop = { x: 0.12, y: 0.12, width: 0.76, height: 0.76 }

/** 把拖动量夹到合法范围内。宽高不小于 MIN_CROP，且不越出 0-1。 */
function clampCrop(rect) {
  const width = Math.max(MIN_CROP, Math.min(1, rect.width))
  const height = Math.max(MIN_CROP, Math.min(1, rect.height))
  return {
    x: Math.max(0, Math.min(1 - width, rect.x)),
    y: Math.max(0, Math.min(1 - height, rect.y)),
    width,
    height,
  }
}

const CORNERS = ['nw', 'n', 'ne', 'e', 'se', 's', 'sw', 'w']

function CropTool({ src, onClose, onDone }) {
  const [crop, setCrop] = React.useState(defaultCrop)
  const [meta, setMeta] = React.useState(null)
  const [preset, setPreset] = React.useState('free')
  const [busy, setBusy] = React.useState(false)
  const boxRef = React.useRef(null)

  React.useEffect(() => { readImageSize(src).then(setMeta).catch(() => setMeta(null)) }, [src])

  const ratio = preset === 'free' ? null : preset === '1:1' ? 1 : preset === '4:3' ? 4 / 3 : preset === '3:4' ? 3 / 4 : preset === '16:9' ? 16 / 9 : 9 / 16

  const applyRatio = (next) => {
    setPreset(next)
    if (next === 'free' || !meta) return
    const r = next === '1:1' ? 1 : next === '4:3' ? 4 / 3 : next === '3:4' ? 3 / 4 : next === '16:9' ? 16 / 9 : 9 / 16
    // 在图片坐标系里算：让框的像素比例等于 r
    const px = crop.width * meta.width
    const py = crop.height * meta.height
    let width = crop.width
    let height = crop.height
    // 以当前宽度为准反推高度
    const wantH = (px / r) / meta.height
    if (wantH <= 1) height = wantH
    else { height = 1; width = (meta.height * r) / meta.width }
    setCrop(clampCrop({ x: crop.x, y: crop.y, width, height }))
  }

  const startDrag = (mode, e, handle) => {
    e.preventDefault()
    e.stopPropagation()
    const box = boxRef.current?.getBoundingClientRect()
    if (!box) return
    const startRect = { ...crop }
    const startX = e.clientX
    const startY = e.clientY

    const move = (event) => {
      const dx = (event.clientX - startX) / box.width
      const dy = (event.clientY - startY) / box.height
      let next
      if (mode === 'move') {
        next = { ...startRect, x: startRect.x + dx, y: startRect.y + dy }
      } else {
        let { x, y, width, height } = startRect
        if (handle.includes('w')) { x = startRect.x + dx; width = startRect.width - dx }
        if (handle.includes('e')) { width = startRect.width + dx }
        if (handle.includes('n')) { y = startRect.y + dy; height = startRect.height - dy }
        if (handle.includes('s')) { height = startRect.height + dy }
        next = { x, y, width, height }
        // 锁定比例时按宽度反推高度（图片坐标下成立）
        if (ratio && meta) {
          const targetH = (next.width * meta.width / ratio) / meta.height
          if (handle.includes('n')) next.y = startRect.y + (startRect.height - targetH)
          next.height = targetH
        }
      }
      setCrop(clampCrop(next))
    }
    const stop = () => {
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerup', stop)
    }
    window.addEventListener('pointermove', move)
    window.addEventListener('pointerup', stop)
  }

  const run = async () => {
    setBusy(true)
    try {
      const out = await cropImage(src, crop)
      onDone(out)
    } finally { setBusy(false) }
  }

  const px = meta ? { w: Math.round(crop.width * meta.width), h: Math.round(crop.height * meta.height) } : null

  return (
    <ToolDialog title="裁剪" icon="crop" onClose={onClose} onApply={run} busy={busy} applyLabel="裁剪并生成新节点">
      <div className="cf-tool-ratios">
        {[['free', '自由'], ['1:1', '1:1'], ['4:3', '4:3'], ['3:4', '3:4'], ['16:9', '16:9'], ['9:16', '9:16']].map(([id, label]) => (
          <button key={id} type="button" className={`cf-chip${preset === id ? ' is-on' : ''}`} onClick={() => applyRatio(id)}>{label}</button>
        ))}
        {px ? <span className="cf-tool-meta">{px.w} × {px.h} px</span> : null}
      </div>

      <div className="cf-crop-stage">
        <div className="cf-crop-box" ref={boxRef}>
          <img src={typeof src === 'string' ? src : ''} alt="" draggable={false} />
          {/* 暗化四边：用四个遮罩而不是 box-shadow，缩放时不会糊 */}
          <div className="cf-crop-shade" style={{ left: 0, top: 0, width: '100%', height: `${crop.y * 100}%` }} />
          <div className="cf-crop-shade" style={{ left: 0, top: `${(crop.y + crop.height) * 100}%`, width: '100%', bottom: 0 }} />
          <div className="cf-crop-shade" style={{ left: 0, top: `${crop.y * 100}%`, width: `${crop.x * 100}%`, height: `${crop.height * 100}%` }} />
          <div className="cf-crop-shade" style={{ right: 0, top: `${crop.y * 100}%`, left: `${(crop.x + crop.width) * 100}%`, height: `${crop.height * 100}%` }} />

          <div
            className="cf-crop-frame"
            style={{ left: `${crop.x * 100}%`, top: `${crop.y * 100}%`, width: `${crop.width * 100}%`, height: `${crop.height * 100}%` }}
            onPointerDown={(e) => startDrag('move', e)}
          >
            {CORNERS.map((h) => (
              <span key={h} className={`cf-crop-handle cf-crop-handle--${h}`} onPointerDown={(e) => startDrag('resize', e, h)} />
            ))}
          </div>
        </div>
      </div>
    </ToolDialog>
  )
}

// ---------- 切图 ----------

function SplitTool({ src, onClose, onDone }) {
  const [rows, setRows] = React.useState(2)
  const [columns, setColumns] = React.useState(2)
  const [busy, setBusy] = React.useState(false)
  const total = rows * columns

  const run = async () => {
    setBusy(true)
    try {
      const pieces = await splitImage(src, { rows, columns })
      onDone(pieces)
    } finally { setBusy(false) }
  }

  return (
    <ToolDialog title="切图" icon="split" onClose={onClose} onApply={run} busy={busy} applyLabel={`切成 ${total} 张`}>
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">行</span>
          <input className="cf-input" type="number" min={1} max={10} value={rows}
            onChange={(e) => setRows(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} />
        </label>
        <label className="cf-field">
          <span className="cf-label">列</span>
          <input className="cf-input" type="number" min={1} max={10} value={columns}
            onChange={(e) => setColumns(Math.max(1, Math.min(10, Number(e.target.value) || 1)))} />
        </label>
      </div>

      <div className="cf-split-preview">
        <div className="cf-split-grid" style={{ gridTemplateColumns: `repeat(${columns}, 1fr)`, gridTemplateRows: `repeat(${rows}, 1fr)` }}>
          {Array.from({ length: total }, (_, i) => <span key={i} className="cf-split-cell">{i + 1}</span>)}
        </div>
      </div>
      <p className="cf-tool-hint">切完会生成 {total} 个新节点，按行列排开。</p>
    </ToolDialog>
  )
}

// ---------- 放大 ----------

const TARGETS = [1024, 1536, 2048, 3072, 4096]

function UpscaleTool({ src, onClose, onDone }) {
  const [target, setTarget] = React.useState(2048)
  const [algorithm, setAlgorithm] = React.useState('high')
  const [meta, setMeta] = React.useState(null)
  const [busy, setBusy] = React.useState(false)

  React.useEffect(() => { readImageSize(src).then(setMeta).catch(() => setMeta(null)) }, [src])
  const out = meta ? resolveUpscaleSize(meta.width, meta.height, target) : null

  const run = async () => {
    setBusy(true)
    try {
      const result = await upscaleImage(src, target, algorithm)
      onDone(result)
    } finally { setBusy(false) }
  }

  return (
    <ToolDialog title="放大" icon="upscale" onClose={onClose} onApply={run} busy={busy} applyLabel="放大并生成新节点">
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">目标长边</span>
          <div className="cf-chips">
            {TARGETS.map((t) => (
              <button key={t} type="button" className={`cf-chip${target === t ? ' is-on' : ''}`} onClick={() => setTarget(t)}>{t}</button>
            ))}
          </div>
        </label>
      </div>
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">算法</span>
          <div className="cf-chips">
            {[['nearest', '邻近'], ['bilinear', '双线性'], ['high', '高质量']].map(([id, label]) => (
              <button key={id} type="button" className={`cf-chip${algorithm === id ? ' is-on' : ''}`} onClick={() => setAlgorithm(id)}>{label}</button>
            ))}
          </div>
        </label>
      </div>
      {meta && out ? (
        <p className="cf-tool-hint">
          {meta.width} × {meta.height} → <strong>{out.width} × {out.height}</strong>
          {algorithm === 'high' ? '（逐级翻倍，细节更稳）' : ''}
        </p>
      ) : null}
    </ToolDialog>
  )
}

// ---------- 多角度 ----------

function AngleTool({ src, onClose, onDone }) {
  const [horizontal, setHorizontal] = React.useState(0)
  const [pitch, setPitch] = React.useState(9)
  const [distance, setDistance] = React.useState(4.8)
  const [wide, setWide] = React.useState(false)
  const [busy, setBusy] = React.useState(false)

  const run = async () => {
    setBusy(true)
    try {
      const prompt = buildAnglePrompt({ horizontal, pitch, distance, wide })
      await onDone({ kind: 'angle', angleParams: { horizontal, pitch, distance, wide }, prompt })
    } finally { setBusy(false) }
  }

  const preview = {
    transform: `perspective(520px) rotateY(${horizontal * -0.45}deg) rotateX(${pitch * 0.35}deg) scale(${Math.max(0.72, Math.min(1.08, 1.08 - distance * 0.035 + (wide ? -0.08 : 0)))})`,
  }

  return (
    <ToolDialog title="多角度" icon="angle" onClose={onClose} onApply={run} busy={busy} applyLabel="AI 生成新视角">
      <div className="cf-angle-preview">
        <img src={typeof src === 'string' ? src : ''} alt="" style={preview} draggable={false} />
      </div>
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">水平 {horizontal}°</span>
          <input type="range" min={-60} max={60} value={horizontal} onChange={(e) => setHorizontal(Number(e.target.value))} />
        </label>
      </div>
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">俯仰 {pitch}°</span>
          <input type="range" min={-45} max={45} value={pitch} onChange={(e) => setPitch(Number(e.target.value))} />
        </label>
      </div>
      <div className="cf-tool-row">
        <label className="cf-field">
          <span className="cf-label">距离 {distance.toFixed(1)}</span>
          <input type="range" min={1} max={10} step={0.1} value={distance} onChange={(e) => setDistance(Number(e.target.value))} />
        </label>
      </div>
      <label className="cf-tool-check">
        <input type="checkbox" checked={wide} onChange={(e) => setWide(e.target.checked)} />
        <span>广角镜头</span>
      </label>
      <p className="cf-tool-hint">将原图与三维机位参数发送给生图模型，以新视角重绘并在右侧生成子节点。</p>
    </ToolDialog>
  )
}

// ---------- 蒙版局部编辑 ----------

const BRUSHES = [0.03, 0.06, 0.1, 0.16]

function replayStrokes(canvas, strokes) {
  if (!canvas) return
  clearMask(canvas)
  for (const s of strokes) {
    const pts = s.points || []
    for (let i = 0; i < pts.length; i += 1) {
      paintStroke(canvas, pts[i - 1] || pts[i], pts[i], s.brush, s.erase)
    }
  }
}

function MaskTool({ src, onClose, onDone }) {
  const [prompt, setPrompt] = React.useState('')
  const [brush, setBrush] = React.useState(0.06)
  const [erase, setErase] = React.useState(false)
  const [busy, setBusy] = React.useState(false)
  const [painted, setPainted] = React.useState(false)
  const [meta, setMeta] = React.useState(null)
  const [histCounts, setHistCounts] = React.useState({ undo: 0, redo: 0 })

  const maskRef = React.useRef(null)
  const stageRef = React.useRef(null)
  const drawing = React.useRef(null)
  const strokesRef = React.useRef([])
  const redoRef = React.useRef([])

  const syncHist = () => {
    setHistCounts({ undo: strokesRef.current.length, redo: redoRef.current.length })
    setPainted(maskRef.current ? maskHasPaint(maskRef.current) : false)
  }

  React.useEffect(() => {
    strokesRef.current = []
    redoRef.current = []
    setHistCounts({ undo: 0, redo: 0 })
    readImageSize(src).then((size) => {
      setMeta(size)
      const cv = maskRef.current
      if (cv) { cv.width = size.width; cv.height = size.height; clearMask(cv); setPainted(false) }
    }).catch(() => setMeta(null))
  }, [src])

  /** 屏幕坐标 → 归一化坐标（与画布尺寸解耦）。 */
  const norm = (e) => {
    const box = stageRef.current?.getBoundingClientRect()
    if (!box) return { x: 0, y: 0 }
    return {
      x: Math.max(0, Math.min(1, (e.clientX - box.left) / box.width)),
      y: Math.max(0, Math.min(1, (e.clientY - box.top) / box.height)),
    }
  }

  const start = (e) => {
    if (!maskRef.current || e.button !== 0) return
    e.preventDefault()
    e.currentTarget.setPointerCapture(e.pointerId)
    const p = norm(e)
    drawing.current = { last: p, stroke: { brush, erase, points: [p] } }
    paintStroke(maskRef.current, p, p, brush, erase)
    if (!erase) setPainted(true)
  }
  const move = (e) => {
    if (!drawing.current || !maskRef.current) return
    const p = norm(e)
    paintStroke(maskRef.current, drawing.current.last, p, drawing.current.stroke.brush, drawing.current.stroke.erase)
    drawing.current.last = p
    drawing.current.stroke.points.push(p)
  }
  const end = () => {
    const stroke = drawing.current?.stroke
    drawing.current = null
    if (stroke?.points?.length) {
      strokesRef.current.push(stroke)
      redoRef.current = []
      syncHist()
    }
  }

  const undoStroke = () => {
    if (!strokesRef.current.length) return
    const last = strokesRef.current.pop()
    redoRef.current.push(last)
    replayStrokes(maskRef.current, strokesRef.current)
    syncHist()
  }
  const redoStroke = () => {
    if (!redoRef.current.length) return
    const next = redoRef.current.pop()
    strokesRef.current.push(next)
    replayStrokes(maskRef.current, strokesRef.current)
    syncHist()
  }

  const run = async () => {
    const text = prompt.trim()
    if (!text) { setBusy(false); return }
    if (!maskHasPaint(maskRef.current)) return
    setBusy(true)
    try {
      const { dataUrl, width, height } = await compositeMask(src, maskRef.current)
      await onDone({
        kind: 'maskEdit',
        dataUrl,
        width,
        height,
        rawPrompt: text,
        prompt: buildMaskEditPrompt(text),
      })
    } finally {
      setBusy(false)
    }
  }

  const canApply = prompt.trim().length > 0 && painted

  return (
    <ToolDialog
      title="局部修改"
      icon="edit"
      onClose={onClose}
      onApply={run}
      busy={busy}
      disabled={!canApply}
      applyLabel="按标记修改"
    >
      <div className="cf-mask-bar">
        <span className="cf-mask-label">笔刷</span>
        {BRUSHES.map((b) => (
          <button key={b} type="button" className={`cf-chip${brush === b && !erase ? ' is-on' : ''}`}
            onClick={() => { setBrush(b); setErase(false) }}
            title={`${Math.round(b * 100)}%`}>
            {Math.round(b * 100)}
          </button>
        ))}
        <span className="cf-mask-sep" />
        <button type="button" className={`cf-chip${erase ? ' is-on' : ''}`}
          onClick={() => setErase((v) => !v)}>橡皮</button>
        <button type="button" className="cf-chip" disabled={!histCounts.undo} onClick={undoStroke}>撤销</button>
        <button type="button" className="cf-chip" disabled={!histCounts.redo} onClick={redoStroke}>重做</button>
        <button type="button" className="cf-chip" onClick={() => {
          strokesRef.current = []
          redoRef.current = []
          clearMask(maskRef.current)
          syncHist()
        }}>清空</button>
      </div>

      {/* stage 只负责居中；真正量坐标的是 box —— 它紧贴图片，
          否则图片按 contain 居中留了黑边，蒙版会和图对不上 */}
      <div className="cf-mask-stage">
        <div
          className="cf-mask-box"
          ref={stageRef}
          onPointerDown={start}
          onPointerMove={move}
          onPointerUp={end}
          onPointerCancel={end}
        >
          {typeof src === 'string' ? <img src={src} alt="" draggable={false} /> : null}
          <canvas
            ref={maskRef}
            className="cf-mask-layer"
            style={{ opacity: MASK_ALPHA + 0.15 }}
          />
          {!painted ? <span className="cf-mask-hint">在要修改的地方涂抹</span> : null}
        </div>
      </div>

      <label className="cf-field">
        <span className="cf-label">要改成什么</span>
        <input className="cf-input" value={prompt} placeholder="例如：把标记的地方换成红色的杯子"
          onChange={(e) => setPrompt(e.target.value)} />
      </label>
      <p className="cf-tool-hint">
        将<strong>干净原图</strong>与<strong>半透明蓝标注图（{MASK_COLOR}）</strong>成对提交模型，锁定未标注区域一致性。
        {meta ? ` 原图 ${meta.width} × ${meta.height}。` : ''}
      </p>
    </ToolDialog>
  )
}

// ---------- 对外入口 ----------

/**
 * 一个组件分发四种工具。
 * 用 kind 而不是四个独立 Dialog，是因为它们共用外壳与错误处理。
 */
export function ImageToolDialog({ kind, src, onClose, onDone }) {
  if (!kind || !src) return null
  if (kind === 'crop') return <CropTool src={src} onClose={onClose} onDone={onDone} />
  if (kind === 'split') return <SplitTool src={src} onClose={onClose} onDone={onDone} />
  if (kind === 'upscale') return <UpscaleTool src={src} onClose={onClose} onDone={onDone} />
  if (kind === 'angle') return <AngleTool src={src} onClose={onClose} onDone={onDone} />
  if (kind === 'maskEdit') return <MaskTool src={src} onClose={onClose} onDone={onDone} />
  return null
}
