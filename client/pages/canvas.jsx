// 我的画布：列表页 + 画布编辑器（含底部 composer）
import React from 'react'
import { Canvas, useCamera } from '../canvas.jsx'
import { Empty, Icon, IconBtn, Btn, Dialog } from '../ui.jsx'
import { GRID_STYLES, NODE_TYPES, NODE_GAP, RATIOS, RESOLUTIONS, QUALITIES, imageSize, makeNode, newCanvas, newId, wrapInGroup, modelsWithCap, findModel, ratioValue, createDraftStore } from '../store.js'
import { createHistory } from '../canvas/history.js'
import { ImageToolDialog } from './image-tools.jsx'
import { makeImageEntry, primaryImage, isBatch, secondaryImages, addImages, setPrimary, removeImage, explodeBatch, mergeIntoBatch } from '../canvas/batch.js'
import { resolveMediaUrl, releaseObjectUrl, putMedia, makeStorageKey, getMedia, getMediaAny, blobToDataUrl, mediaKeyToDataUrl, readBlobSize } from '../gen/result.js'
import { generate as runGenerate, isAbort } from '../gen/index.js'
import { resolveImageDimensions, sizeFromNode, parseSizeString } from '../gen/sizes.js'
import { streamText, fetchModels } from '../api.js'
import { toDataUrlScaled, readImageSize } from '../canvas/image-ops.js'
import { buildNodeGenerationContext, composePromptWithContext, hasRealImage } from '../canvas/workflow.js'
import { PromptPickerDialog } from '../prompts/prompt-ui.jsx'
import { fetchRemoteImagesToStorage } from '../prompts/sources.js'

/** 节点信息：尺寸、体积、存储键、批量张数等，排查问题时最有用。 */
function NodeInfoDialog({ info, onClose, say }) {
  const fmtBytes = (n) => {
    if (!n) return '—'
    if (n < 1024) return `${n} B`
    if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`
    return `${(n / 1024 / 1024).toFixed(2)} MB`
  }
  const rows = [
    ['节点 ID', info.id],
    ['原始尺寸', info.width && info.height ? `${info.width} × ${info.height}` : '—'],
    ['画布尺寸', `${info.w} × ${info.h}`],
    ['位置', `${info.x}, ${info.y}`],
    ['文件大小', fmtBytes(info.bytes)],
    ['格式', info.mimeType || '—'],
    ['批量张数', String(info.count || 1)],
    ['比例', info.locked ? '等比缩放' : '自由比例'],
    ['存储键', info.storageKey || '—'],
    ['创建时间', info.createdAt ? new Date(info.createdAt).toLocaleString('zh-CN') : '—'],
  ]

  return (
    <Dialog title="节点信息" onClose={onClose}
      footer={<Btn onClick={onClose}>关闭</Btn>}>
      <div className="cf-info-list">
        {rows.map(([k, v]) => (
          <div key={k} className="cf-info-row">
            <span className="cf-info-key">{k}</span>
            <span className={`cf-info-val${k === '存储键' ? ' is-mono' : ''}`}>{v}</span>
          </div>
        ))}
      </div>
      {info.storageKey ? (
        <div style={{ display: 'flex', gap: 6, marginTop: 'var(--cf-sp-3)' }}>
          <Btn size="sm" onClick={async () => {
            try { await navigator.clipboard.writeText(info.storageKey); say?.('存储键已复制') }
            catch { say?.('复制失败，浏览器不允许剪贴板', 'error') }
          }}>复制存储键</Btn>
        </div>
      ) : null}
    </Dialog>
  )
}

/**
 * 从 /models 的返回里挑出「当前该用的那个模型」。
 * 优先 DSH 的默认选择；没有就退回第一个 provider 的第一个模型。
 */
function pickDshModel(models, preferred) {
  if (!models?.providers?.length) return null
  const byId = (pid, mid) => {
    const p = models.providers.find((x) => x.id === pid)
    const m = p?.models?.find((x) => x.id === mid)
    return p && m ? { provider: p, model: m } : null
  }
  // 插件配置里选定的「助手模型」优先于 DSH 默认 —— 用户显式选过就该用它
  const wanted = preferred?.provider && preferred?.model ? preferred : models.default
  if (wanted?.provider && wanted?.model) {
    const hit = byId(wanted.provider, wanted.model)
    if (hit) return hit
  }
  const p = models.providers[0]
  const m = p?.models?.[0]
  return p && m ? { provider: p, model: m } : null
}

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
  { id: 'video', label: '视频', icon: 'video', key: '' },
  { id: 'audio', label: '音频（暂不支持生成）', icon: 'audio', key: 'A' },
  { id: 'config', label: '配置', icon: 'sliders', key: 'C' },
  { id: 'group', label: '分组', icon: 'group', key: 'G' },
  { sep: true },
  { id: 'undo', label: '撤销', icon: 'undo', key: '⌘Z', action: 'undo' },
  { id: 'redo', label: '重做', icon: 'redo', key: '⇧⌘Z', action: 'redo' },
]

const MemoCanvas = React.memo(Canvas)

function collectNodeKeys(node) {
  const keys = []
  if (node?.storageKey) keys.push(node.storageKey)
  if (Array.isArray(node?.images)) {
    for (const img of node.images) {
      if (img?.storageKey) keys.push(img.storageKey)
    }
  }
  return keys
}

function releaseRemovedUrls(removedNodes, keptNodes) {
  if (!removedNodes?.length) return
  const kept = new Set()
  for (const n of keptNodes || []) {
    for (const k of collectNodeKeys(n)) kept.add(k)
  }
  for (const n of removedNodes) {
    for (const k of collectNodeKeys(n)) {
      if (!kept.has(k)) releaseObjectUrl(k)
    }
  }
}

function ComposerPromptInput({ draftStore, placeholder, hasRefs, onPaste, onSubmit }) {
  const value = React.useSyncExternalStore(draftStore.subscribe, draftStore.get, draftStore.get)
  const inputRef = React.useRef(null)
  const imeAt = React.useRef(0)

  React.useLayoutEffect(() => {
    const el = inputRef.current
    if (!el) return
    const INPUT_MAX = hasRefs ? 85 : 121
    el.style.height = 'auto'
    const next = Math.min(el.scrollHeight, INPUT_MAX)
    el.style.height = `${next}px`
    el.style.overflowY = el.scrollHeight > INPUT_MAX ? 'auto' : 'hidden'
  }, [value, hasRefs])

  return (
    <textarea
      ref={inputRef}
      className="cf-composer-input"
      value={value}
      rows={2}
      placeholder={placeholder}
      onChange={(e) => draftStore.set(e.target.value)}
      onPaste={onPaste}
      onCompositionStart={() => { imeAt.current = Date.now() }}
      onCompositionEnd={() => { imeAt.current = Date.now() }}
      onKeyDown={(e) => {
        if (e.key !== 'Enter') return
        if (e.nativeEvent.isComposing) return
        if (Date.now() - imeAt.current < 500) return
        if (e.shiftKey) return
        e.preventDefault()
        imeAt.current = 0
        onSubmit()
      }}
    />
  )
}

function ComposerSendButton({ draftStore, textBusy, imgBusy, onSubmit, onStopText, onStopImg }) {
  const value = React.useSyncExternalStore(draftStore.subscribe, draftStore.get, draftStore.get)
  const label = textBusy ? '停止生成' : imgBusy ? '取消生成' : '发送消息'
  const onClick = textBusy ? onStopText : imgBusy ? onStopImg : onSubmit
  const disabled = !textBusy && !imgBusy && !value.trim()
  return (
    <button type="button" className={`cf-send${imgBusy ? ' is-busy' : ''}`}
      onClick={onClick} disabled={disabled}
      aria-label={label} data-tip={label}>
      {textBusy ? (
        <Icon name="stop" size={14} />
      ) : imgBusy ? (
        <span className="cf-spin" aria-hidden="true" />
      ) : (
        <Icon name="arrowUp" size={17} />
      )}
    </button>
  )
}

export function CanvasEditor({
  canvas, channels, defaults, assistantModel, prompts = [], draftStore, draft, onDraftChange, onSendToStudio,
  showComposer = true, onChange, onBack, say, onSaveAsset, showToolbarLabels = false,
  theme = 'system', onTheme,
}) {
  const camApi = useCamera()
  const { cam, moveTo } = camApi
  const canvasRef = React.useRef({ nodes: canvas.nodes, edges: canvas.edges })
  canvasRef.current = { nodes: canvas.nodes, edges: canvas.edges }
  const [promptModalOpen, setPromptModalOpen] = React.useState(false)
  const [selection, setSelection] = React.useState([])
  const [tool, setTool] = React.useState('select')

  // 撤销栈。apply 里直接调 onChange 写回整份 nodes/edges/grid。
  // historyRef 保持稳定，不随重渲染重建（否则每次渲染都会丢栈）。
  const historyRef = React.useRef(null)
  if (!historyRef.current) {
    historyRef.current = createHistory({
      get: () => historyRef._canvas || { nodes: [], edges: [], grid: 'dots' },
      apply: (snap) => onChange({ nodes: snap.nodes, edges: snap.edges, grid: snap.grid }),
    })
  }
  const history = historyRef.current
  // 把当前画布挂到 ref 上，让 history 的 get() 能读到最新值（避免闭包陈旧）
  historyRef._canvas = canvas
  const [histState, setHistState] = React.useState({ canUndo: false, canRedo: false })
  // 图片工具：{ kind, nodeId, src }。src 是图片的 objectURL。
  const [imgTool, setImgTool] = React.useState(null)
  const videoAbort = React.useRef(null)
  const imgAbort = React.useRef(null)
  // 生图进行中：按钮要有反馈，也要挡住连点重复扣费
  const [imgBusy, setImgBusy] = React.useState(false)
  const [infoNode, setInfoNode] = React.useState(null)
  // 批量图组展开态：{ [nodeId]: bool }
  const [expanded, setExpanded] = React.useState({})
  React.useEffect(() => history.subscribe(setHistState), [history])

  // 打开画布时重置基准：否则第一次撤销会把「空画布」也撤出来。
  React.useEffect(() => {
    history.init()
    // 只在切换画布时重置，节点变化不重置
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [canvas?.id])
  // 草稿由外部容器持有：敲键盘时仅局部输入组件重渲染，不惊动画布节点
  const fallbackStoreRef = React.useRef(null)
  if (!fallbackStoreRef.current) fallbackStoreRef.current = createDraftStore(draft || '')
  const activeDraftStore = draftStore || fallbackStoreRef.current
  const setPrompt = React.useCallback((next) => {
    activeDraftStore.set(next)
    if (!draftStore && onDraftChange) onDraftChange(activeDraftStore.get())
  }, [activeDraftStore, draftStore, onDraftChange])
  const [ratio, setRatio] = React.useState(defaults?.ratio || '1:1')
  const [count, setCount] = React.useState(defaults?.count || 1)
  const [resolution, setResolution] = React.useState(defaults?.resolution || '自动')
  const [quality, setQuality] = React.useState(defaults?.quality || '自动')
  const [transparent, setTransparent] = React.useState(Boolean(defaults?.transparent))
  const [modelKey, setModelKey] = React.useState(defaults?.modelKey || '')
  const [align16, setAlign16] = React.useState(true)
  const [lockRatio, setLockRatio] = React.useState(false)
  const [menu, setMenu] = React.useState(typeof window !== 'undefined' ? (window.__CF_DEV_MENU || null) : null)
  const [refs, setRefs] = React.useState([])
  const [cw, setCw] = React.useState(() => {
    const dims = parseSizeString(resolveImageDimensions({ resolution: defaults?.resolution || '自动', ratio: defaults?.ratio || '1:1' }))
    return dims ? dims.width : 1024
  })
  const [ch, setCh] = React.useState(() => {
    const dims = parseSizeString(resolveImageDimensions({ resolution: defaults?.resolution || '自动', ratio: defaults?.ratio || '1:1' }))
    return dims ? dims.height : 1024
  })
  const defaultsHydratedRef = React.useRef(Boolean(defaults?.modelKey))
  React.useEffect(() => {
    if (!defaultsHydratedRef.current && defaults?.modelKey) {
      defaultsHydratedRef.current = true
      if (!modelKey) setModelKey(defaults.modelKey)
    }
  }, [defaults?.modelKey, modelKey])
  const [camera, setCamera] = React.useState(null)
  const [textBusy, setTextBusy] = React.useState(false)
  const textStop = React.useRef(null)
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

  const addRefFiles = (files) => {
    const added = files.map((f, i) => ({
      id: `${Date.now()}_${i}_${f.name || 'paste'}`,
      name: f.name || '粘贴的图片',
      url: URL.createObjectURL(f),
      file: f,
    }))
    if (!added.length) return
    setRefs(prev => [...prev, ...added])
    say?.(`已加入 ${added.length} 张参考图`)
  }
  const removeRef = (id) => setRefs(prev => {
    const target = prev.find(r => r.id === id)
    if (target?.url) URL.revokeObjectURL(target.url)
    return prev.filter(r => r.id !== id)
  })

  const uploadRef = () => fileRef.current?.click()
  const onFiles = (e) => {
    addRefFiles([...(e.target.files || [])])
    e.target.value = ''
  }

  // 粘贴图片：截图、复制的图、从浏览器拖来的图都走这里
  const onPaste = (e) => {
    const dt = e.clipboardData
    if (!dt) return
    const files = []
    for (const item of Array.from(dt.items || [])) {
      if (item.kind === 'file' && item.type.startsWith('image/')) {
        const f = item.getAsFile()
        if (f) files.push(f)
      }
    }
    if (!files.length) {
      for (const f of Array.from(dt.files || [])) if (f.type.startsWith('image/')) files.push(f)
    }
    if (!files.length) return
    e.preventDefault()
    addRefFiles(files)
  }

  const imageModels = modelsWithCap(channels, 'image')
  const activeModel = findModel(channels, modelKey) || imageModels[0] || null

  /**
   * 模型列表为空的诊断文案。
   *
   * 之前只会说「去配置里添加」——但实际最常见的三种情况是：
   * 渠道总数里有模型、只是没勾「生图」能力 / 停用了 / 渠道本身停用了。
   * 笼统的提示会让人以为配置没保存，白白重配一遍。
   */
  const modelEmptyHint = React.useMemo(() => {
    const chs = channels || []
    if (!chs.length) return '还没有配渠道。去「配置 → 渠道」新增一个，填好地址和 Key 后拉取模型。'

    const usable = chs.filter(c => c.enabled !== false)
    if (!usable.length) return `有 ${chs.length} 个渠道但都停用了。去「配置 → 渠道」打开开关。`

    let total = 0
    let enabledModels = 0
    let withImageCap = 0
    for (const c of usable) {
      for (const m of (c.models || [])) {
        total += 1
        if (m.enabled === false) continue
        enabledModels += 1
        if ((m.caps || []).includes('image')) withImageCap += 1
      }
    }
    if (!total) return `渠道「${usable[0].name || '未命名'}」里还没有模型。去配置里点「拉取模型」，或手动添加。`
    if (!enabledModels) return `共有 ${total} 个模型但都被勾掉了。去配置里勾上要用的。`
    if (!withImageCap) return `共有 ${total} 个模型，但没有一个标了「生图」能力。去配置里给生图模型点亮「生图」。`
    return '还没有可用模型，去「配置 → 渠道」检查一下。'
  }, [channels])

  // ---------- 尺寸：比例 + 自定义像素 ----------
  // 选比例时给出该比例下的基准像素（16 的整数倍），自定义像素则反推比例，两者是同一个意图
  // 的两种表达：composer 上永远显示比例，菜单里既能点比例也能填像素。
  const snap16 = (n) => Math.max(256, Math.round(n / 16) * 16)
  const ratioPixels = (id, res = resolution) => {
    const dims = parseSizeString(resolveImageDimensions({ resolution: res, ratio: id, align16 }))
    if (dims) return { w: dims.width, h: dims.height }
    return { w: 1024, h: 1024 }
  }
  const [appliedPx, setAppliedPx] = React.useState(null)
  const sizeDraft = (id = ratio) => (appliedPx && appliedPx.ratio === id ? appliedPx : ratioPixels(id, resolution))
  const setSizeDraft = (id = ratio) => {
    const px = sizeDraft(id)
    setCw(px.w); setCh(px.h)
  }
  const ratioFromPixels = (w, h) => {
    const ar = w / h
    let best = null
    for (const r of RATIOS) {
      if (r.id === '自动') continue
      const d = Math.abs(ratioValue(r.id) - ar) / ar
      if (d < 0.02 && (!best || d < best.d)) best = { id: r.id, d }
    }
    if (best) return best.id
    const gcd = (a, b) => (b ? gcd(b, a % b) : a)
    const g = gcd(Math.round(w), Math.round(h)) || 1
    const rw = Math.round(w / g), rh = Math.round(h / g)
    if (rw <= 64 && rh <= 64) return `${rw}:${rh}`
    return `${(Math.round(ar * 100) / 100)}:1`
  }

  const applyRatio = (id) => {
    setRatio(id)
    const px = ratioPixels(id, resolution)
    setAppliedPx({ ratio: id, w: px.w, h: px.h, custom: false })
    setCw(px.w); setCh(px.h)
    if (one && one.type === 'image') {
      const next = imageSize(id, one.w)
      updateNode(one.id, { ratio: id, w: next.w, h: next.h })
    }
  }
  const applyResolution = (res) => {
    setResolution(res)
    const px = ratioPixels(ratio, res)
    setAppliedPx({ ratio, w: px.w, h: px.h, custom: false })
    setCw(px.w); setCh(px.h)
  }
  const applyPixels = () => {
    let w = Math.round(cw), h = Math.round(ch)
    if (!w || !h) return
    if (align16) { w = snap16(w); h = snap16(h) }
    setCw(w); setCh(h)
    const id = ratioFromPixels(w, h)
    setAppliedPx({ ratio: id, w, h, custom: true })
    setRatio(id)
    if (one && one.type === 'image') {
      const nodeW = Math.max(140, Math.min(280, w))
      updateNode(one.id, { ratio: id, w: nodeW, h: Math.round(nodeW / (w / h)) + 28 })
    }
  }
  // 填宽高：锁了比例时另一侧跟着走，没锁时两框各填各的，应用时按 w:h 反推比例
  const setPx = (side, raw) => {
    const value = Number(String(raw).replace(/\D/g, '')) || 0
    if (side === 'w') setCw(value)
    else setCh(value)
    if (!lockRatio || !value) return
    const ar = ratioValue(ratio)
    if (side === 'w') setCh(Math.round(value / ar))
    else setCw(Math.round(value * ar))
  }
  const toggleLock = () => {
    const next = !lockRatio
    setLockRatio(next)
    // 刚锁上时用当前比例把两边对齐一次，避免第一次输入就跳
    if (next && cw && ch) {
      const ar = ratioValue(ratio)
      setCh(Math.round(cw / ar))
    }
  }

  // 选中单个图片节点时，composer 绑定到它
  React.useEffect(() => {
    if (one && (one.type === 'image' || one.type === 'audio')) {
      setPrompt(one.prompt || '')
      if (one.ratio) { setRatio(one.ratio); setSizeDraft(one.ratio) }
      if (one.resolution) setResolution(one.resolution)
    }
  }, [one?.id]) // eslint-disable-line react-hooks/exhaustive-deps

  // RC1：所有写入都通过一次 onChange 提交，基准由父层函数式 setState 提供，
  // 所以同一 tick 里改 nodes 和 edges 不会再互相覆盖（之前「删边不删点」的根因）。
  const mutate = (produce) => {
    onChange(produce)
    // 每次写入都通知历史（内部有 180ms 防抖，不会一次拖拽产生十几步）
    history.tick()
  }

  const undo = () => { if (!history.undo()) say?.('没有可撤销的操作') }
  const redo = () => { if (!history.redo()) say?.('没有可重做的操作') }

  const updateNode = (id, patch) =>
    mutate(c => ({ nodes: c.nodes.map(n => (n.id === id ? { ...n, ...patch } : n)) }))

  const onMove = (ids, dx, dy) => {
    const set = new Set(ids)
    mutate(c => ({
      nodes: c.nodes.map(n => (set.has(n.id) ? { ...n, x: Math.round(n.x + dx), y: Math.round(n.y + dy) } : n)),
    }))
  }
  const onResize = (id, w, h) => updateNode(id, { w, h })
  const onConnect = (from, to) => mutate(c => ({ edges: [...c.edges, { id: newId('e'), from, to }] }))
  const onRemoveEdge = (id) => mutate(c => ({ edges: c.edges.filter(e => e.id !== id) }))

  const addNode = (type) => {
    const c = cam.current
    const at = { x: (window.innerWidth / 2 - c.tx) / c.s, y: (window.innerHeight / 2 - c.ty) / c.s }
    const extra = type === 'config'
      ? { modelKey: modelKey || imageModels[0]?.key || '', ratio, count, resolution }
      : type === 'audio' ? { name: '暂不支持生成' } : {}
    const n = makeNode(type, at, extra)
    mutate(cv => ({ nodes: [...cv.nodes, n] }))
    setSelection([n.id])
    say?.(type === 'audio' ? '已新建音频节点（暂不支持生成）' : `已新建${NODE_TYPES[type]}节点`)
  }

  const streamTextFor = async ({ node: targetTextNode, rawText, sourceParent = null, modelOverride = '' }) => {
    const ctx = buildNodeGenerationContext(sourceParent || targetTextNode, canvasRef.current.nodes, canvasRef.current.edges)
    const finalPrompt = composePromptWithContext(rawText, ctx.textInputs, ctx.upstream)
    if (!finalPrompt) { say?.('先写一句提示词', 'error'); return }

    let id = targetTextNode?.id || ''
    if (!id) {
      const origin = sourceParent
        ? { x: sourceParent.x + sourceParent.w + 96, y: sourceParent.y }
        : { x: (window.innerWidth / 2 - cam.current.tx) / cam.current.s, y: (window.innerHeight / 2 - cam.current.ty) / cam.current.s }
      const n = makeNode('text', { x: origin.x + 120, y: origin.y + 80 }, { text: '', prompt: rawText })
      n.x = origin.x
      n.y = origin.y
      id = n.id
      const edge = sourceParent ? { id: newId('e'), from: sourceParent.id, to: id } : null
      mutate((c) => ({ nodes: [...c.nodes, n], edges: edge ? [...c.edges, edge] : c.edges }))
      setSelection([id])
    }

    const pickedText = modelOverride ? findModel(channels, modelOverride) : null
    const dshModel = pickedText
      ? { provider: { id: pickedText.channel.id }, model: { id: pickedText.model.id } }
      : (assistantModel || null)

    const controller = new AbortController()
    textStop.current = controller
    setTextBusy(true)
    let last = 0
    let acc = ''
    let closed = false
    const write = (updater) => {
      if (closed) return
      mutate(c => ({ nodes: c.nodes.map(n => (n.id === id ? updater(n) : n)) }))
    }
    write(n => ({ ...n, text: '', status: 'running' }))
    try {
      await streamText({
        model: dshModel,
        messages: [{ role: 'user', text: finalPrompt }],
        signal: controller.signal,
        onDelta: (_d, all) => {
          acc = all
          const now = Date.now()
          if (now - last > 80) { last = now; write(n => ({ ...n, text: all })) }
        },
      })
      write(n => ({ ...n, text: acc, status: 'done' }))
    } catch (err) {
      write(n => ({ ...n, text: acc || `生成失败：${err.message}`, status: 'failed' }))
    } finally {
      setTextBusy(false)
      textStop.current = null
    }
  }

  // 生成：接连线工作流上下文，支持空节点原地填充、有图节点派生下游子节点
  const generate = () => {
    const text = activeDraftStore.get().trim()

    if (one && one.type === 'config') {
      runConfigNode({ ...one, prompt: text || one.prompt })
      return
    }

    if (!text) return

    // 视频节点：走建任务 + 轮询，不在这里等结果
    if (one && one.type === 'video') {
      mutate(c => ({ nodes: c.nodes.map(n => (n.id === one.id ? { ...n, prompt: text } : n)) }))
      generateVideoFor({ ...one, prompt: text })
      return
    }

    // 音频节点：暂不支持上游生成
    if (one && one.type === 'audio') {
      say?.('音频节点暂不支持生成', 'error')
      return
    }

    // 文本节点：把这句话交给模型，逐字写回节点
    if (one && one.type === 'text') {
      streamTextFor({ node: one, rawText: text }).then(() => setPrompt(''))
      return
    }

    const target = one && one.type === 'image' ? one : null
    runImageGeneration({ text, target, ratio, resolution, count, quality, transparent })
  }

  /** 把任意本地参考图转成无损 Data URL，绝不再缩放或强压白底 JPEG。 */
  const refToLosslessDataUrl = async (refItem) => {
    if (!refItem) return ''
    if (refItem.storageKey) {
      const u = await mediaKeyToDataUrl(refItem.storageKey).catch(() => '')
      if (u) return u
    }
    if (refItem.url?.startsWith('data:')) return refItem.url
    if (refItem.url) {
      const resp = await fetch(refItem.url)
      const blob = await resp.blob()
      return blobToDataUrl(blob)
    }
    return ''
  }

  const runImageGeneration = async ({
    text, target = null, sourceParent = null,
    ratio: curRatio, resolution: curRes, count: curCount, quality: curQuality, transparent: curTransparent,
    modelKeyOverride = '', forceOverwrite = false, extraRefInputs = [], onDoneStatus = null,
  }) => {
    const { nodes: curNodes, edges: curEdges } = canvasRef.current
    const ctxAnchor = target || sourceParent
    const ctx = ctxAnchor
      ? buildNodeGenerationContext(ctxAnchor, curNodes, curEdges)
      : { upstream: [], textInputs: [], imageInputs: [], configNode: null }

    // 选中已有实图节点时派生子节点连在右侧；空图片节点原地填入（不破坏既有行为）
    const derivedFrom = !forceOverwrite && target && hasRealImage(target) ? target : sourceParent
    const inPlaceTarget = derivedFrom === target ? null : target

    const effRatio = curRatio || ctx.configNode?.ratio || ratio
    const effRes = curRes || ctx.configNode?.resolution || resolution
    const effCount = Math.max(1, Number(curCount ?? ctx.configNode?.count ?? count) || 1)
    const effModelKey = modelKeyOverride || target?.modelKey || ctx.configNode?.modelKey || modelKey || defaults?.modelKey

    const pick = findModel(channels, effModelKey)
      || modelsWithCap(channels, 'image')[0]
      || null
    if (!pick) {
      onDoneStatus?.('idle')
      say?.('没有可用的生图模型，去配置里加一个支持生图的渠道', 'error')
      return
    }

    const finalPrompt = composePromptWithContext(text, ctx.textInputs, ctx.upstream)
    const displayPrompt = String(text || '').trim() || finalPrompt

    const controller = new AbortController()
    imgAbort.current?.abort()
    imgAbort.current = controller

    setImgBusy(true)

    let placeholderId = inPlaceTarget?.id || ''
    if (inPlaceTarget) {
      mutate(c => ({
        nodes: c.nodes.map(n => (n.id === inPlaceTarget.id
          ? { ...n, status: 'running', error: '', prompt: displayPrompt, ratio: effRatio, resolution: effRes, startedAt: Date.now() }
          : n)),
      }))
    } else {
      const camNow = cam.current
      const sz = imageSize(effRatio)
      const origin = derivedFrom
        ? { x: derivedFrom.x + derivedFrom.w + 96, y: derivedFrom.y }
        : { x: (window.innerWidth / 2 - camNow.tx) / camNow.s - sz.w / 2, y: (window.innerHeight / 2 - camNow.ty) / camNow.s - sz.h / 2 }
      const ph = {
        ...makeNode('image', { x: origin.x + sz.w / 2, y: origin.y + sz.h / 2 }, { prompt: displayPrompt, ratio: effRatio, resolution: effRes }),
        ...sz,
        x: Math.round(origin.x),
        y: Math.round(origin.y),
        status: 'running',
        startedAt: Date.now(),
        prompt: displayPrompt,
      }
      placeholderId = ph.id
      const edge = derivedFrom ? { id: newId('e'), from: derivedFrom.id, to: ph.id } : null
      mutate(cv => ({
        nodes: [...cv.nodes, ph],
        edges: edge ? [...cv.edges, edge] : cv.edges,
      }))
      setSelection([ph.id])
    }

    try {
      const customSize = appliedPx && appliedPx.custom && appliedPx.ratio === effRatio ? `${appliedPx.w}x${appliedPx.h}` : ''
      const size = resolveImageDimensions({ resolution: effRes, ratio: effRatio, customSize, align16 })

      // 汇集所有参考图并按 key/url 去重：先派生父节点实图，再上游连接图，再用户显式上传图
      const rawRefItems = []
      if (derivedFrom && derivedFrom.type === 'image' && hasRealImage(derivedFrom)) {
        const pm = primaryImage(derivedFrom)
        rawRefItems.push({ storageKey: pm?.storageKey || derivedFrom.storageKey || '', url: pm?.url || derivedFrom.src || '' })
      }
      rawRefItems.push(...ctx.imageInputs, ...extraRefInputs, ...refs)
      const seenRefs = new Set()
      const uniqueRefItems = rawRefItems.filter((it) => {
        const idKey = it?.storageKey || it?.url || ''
        if (!idKey || seenRefs.has(idKey)) return false
        seenRefs.add(idKey)
        return true
      })

      const refUrls = (await Promise.all(uniqueRefItems.map(refToLosslessDataUrl))).filter(Boolean)
      const genParams = {
        count: effCount,
        ratio: effRatio,
        resolution: effRes,
        size,
        quality: curQuality,
        background: curTransparent ? 'transparent' : undefined,
        outputFormat: curTransparent ? 'png' : undefined,
        align16,
      }
      let out
      if (refUrls.length) {
        out = await runGenerate({
          capability: 'image-edit',
          channel: pick.channel,
          model: pick.model.id,
          prompt: finalPrompt,
          params: { ...genParams, imageDataUrls: refUrls },
          signal: controller.signal,
        })
      } else {
        out = await runGenerate({
          capability: 'image',
          channel: pick.channel,
          model: pick.model.id,
          prompt: finalPrompt,
          params: genParams,
          signal: controller.signal,
        })
      }

      const items = out.items || []
      if (!items.length) {
        onDoneStatus?.('failed')
        say?.('上游没有返回图片', 'error')
        return
      }

      const entries = items.map((it) => makeImageEntry({
        storageKey: it.storageKey,
        width: it.width,
        height: it.height,
        bytes: it.bytes,
        mimeType: it.mimeType,
        prompt: displayPrompt,
        url: it.url,
        degraded: it.degraded,
      }))
      const first = entries[0]

      mutate(c => ({
        nodes: c.nodes.map(n => (n.id === placeholderId
          ? {
            ...n,
            status: 'done',
            error: '',
            startedAt: 0,
            images: entries,
            primaryImageId: first.id,
            storageKey: first.storageKey,
            prompt: displayPrompt,
          }
          : n)),
      }))
      setSelection([placeholderId])
      onDoneStatus?.('idle')

      setPrompt('')
      say?.(entries.length > 1 ? `已生成 ${entries.length} 张` : '生成完成')
      if (out.short > 0) say?.(`上游少给了 ${out.short} 张`, 'error')
    } catch (error) {
      const aborted = isAbort(error)
      if (aborted) say?.('已取消')
      else say?.(error.message || '生成失败', 'error')
      onDoneStatus?.(aborted ? 'idle' : 'failed')
      if (placeholderId) {
        mutate(c => ({
          nodes: c.nodes.map(n => (n.id === placeholderId
            ? { ...n, status: 'failed', error: aborted ? '已取消' : (error.message || '生成失败'), startedAt: 0 }
            : n)),
        }))
      }
    } finally {
      setImgBusy(false)
    }
  }

  const runConfigNode = async (cfgNode) => {
    if (!cfgNode) return
    const { nodes: curNodes, edges: curEdges } = canvasRef.current
    const ctx = buildNodeGenerationContext(cfgNode, curNodes, curEdges)
    const rawPrompt = (cfgNode.prompt || '').trim()
    const mode = cfgNode.mode || 'image'

    if (!rawPrompt && !ctx.textInputs.length && !ctx.imageInputs.length) {
      say?.('先连接上游文本/图片节点，或在配置节点里输入提示词', 'error')
      return
    }

    const setCfgStatus = (status) => mutate((c) => ({
      nodes: c.nodes.map((n) => (n.id === cfgNode.id ? { ...n, status } : n)),
    }))
    setCfgStatus('running')

    if (mode === 'text') {
      await streamTextFor({ node: null, rawText: rawPrompt, sourceParent: cfgNode, modelOverride: cfgNode.modelKey || '' })
      setCfgStatus('idle')
      return
    }

    if (mode === 'video') {
      const origin = { x: cfgNode.x + cfgNode.w + 96, y: cfgNode.y }
      const finalPrompt = composePromptWithContext(rawPrompt, ctx.textInputs, ctx.upstream)
      const vn = makeNode('video', { x: origin.x + 120, y: origin.y + 80 }, { prompt: finalPrompt, modelKey: cfgNode.modelKey || '' })
      vn.x = origin.x; vn.y = origin.y
      const edge = { id: newId('e'), from: cfgNode.id, to: vn.id }
      mutate((c) => ({ nodes: [...c.nodes, vn], edges: [...c.edges, edge] }))
      setSelection([vn.id])
      await generateVideoFor(vn)
      setCfgStatus('idle')
      return
    }

    if (mode === 'audio') {
      setCfgStatus('idle')
      say?.('上游渠道暂未提供音频生成接口', 'error')
      return
    }

    await runImageGeneration({
      text: rawPrompt,
      sourceParent: cfgNode,
      ratio: cfgNode.ratio || ratio,
      resolution: cfgNode.resolution || resolution,
      count: Math.max(1, Number(cfgNode.count) || 1),
      quality,
      transparent,
      modelKeyOverride: cfgNode.modelKey || '',
      extraRefInputs: ctx.imageInputs,
      onDoneStatus: setCfgStatus,
    })
  }

  const wrap = () => {
    const g = wrapInGroup(nodes, selection)
    if (!g) return
    mutate(c => ({ nodes: [g, ...c.nodes] }))
    setSelection([g.id])
  }

  // 分组只删框、保留子节点（等于取消分组）；其余节点连同两端连线一次原子删掉，并回收 blob objectURL
  const removeSelected = () => {
    const drop = new Set(selection)
    if (!drop.size) return
    mutate(c => {
      const removed = c.nodes.filter(n => drop.has(n.id) && n.type !== 'group')
      const kept = c.nodes.filter(n => !drop.has(n.id))
      releaseRemovedUrls(removed, kept)
      return {
        nodes: kept,
        edges: c.edges.filter(e => !drop.has(e.from) && !drop.has(e.to)),
      }
    })
    setSelection([])
  }

  // 剪贴板放在组件外，才能跨画布粘贴（切画布时组件会重挂载）
  const clipboard = React.useRef(null)
  if (!clipboard.current) clipboard.current = { nodes: [], edges: [] }

  /** 把选中内容收进剪贴板。带上一端在选中的入边——源仓库踩过这个坑：
      只复制内部边会让「图片 → 配置 → 结果」这种链在粘贴后断开。 */
  const collectSelection = () => {
    const picks = nodes.filter(n => selection.includes(n.id))
    if (!picks.length) return null
    const ids = new Set(picks.map(n => n.id))
    const keepEdges = edges.filter(e => ids.has(e.from) || ids.has(e.to))
    return { nodes: picks.map(n => ({ ...n })), edges: keepEdges.map(e => ({ ...e })) }
  }

  const copy = () => {
    const payload = collectSelection()
    if (!payload) return
    clipboard.current = payload
    say?.(`已复制 ${payload.nodes.length} 个节点`)
  }

  /**
   * 粘贴。
   * 重心对齐视口中心：粘到看不见的地方等于没粘。
   * 两端都在剪贴板里的边才重建；只有一端的边丢弃（对端不在这次粘贴里）。
   */
  const paste = () => {
    const clip = clipboard.current
    if (!clip?.nodes?.length) return
    const map = {}
    const cam = camApi.cam.current
    // 剪贴板内容的重心
    const minX = Math.min(...clip.nodes.map(n => n.x))
    const minY = Math.min(...clip.nodes.map(n => n.y))
    const maxX = Math.max(...clip.nodes.map(n => n.x + n.w))
    const maxY = Math.max(...clip.nodes.map(n => n.y + n.h))
    const cx = (minX + maxX) / 2
    const cy = (minY + maxY) / 2
    // 视口中心对应的世界坐标
    const targetX = (window.innerWidth / 2 - cam.tx) / cam.ts
    const targetY = (window.innerHeight / 2 - cam.ty) / cam.ts
    const dx = Math.round(targetX - cx)
    const dy = Math.round(targetY - cy)

    const copies = clip.nodes.map(n => {
      const id = newId(n.type[0])
      map[n.id] = id
      return { ...n, id, x: n.x + dx, y: n.y + dy, status: 'idle' }
    })
    const inner = clip.edges
      .filter(e => map[e.from] && map[e.to])
      .map(e => ({ id: newId('e'), from: map[e.from], to: map[e.to] }))

    mutate(c => ({ nodes: [...c.nodes, ...copies], edges: [...c.edges, ...inner] }))
    setSelection(copies.map(n => n.id))
    say?.(`已粘贴 ${copies.length} 个节点`)
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
    mutate(c => ({ nodes: [...c.nodes, ...copies], edges: [...c.edges, ...inner] }))
    setSelection(copies.map(n => n.id))
  }

  // ---------- 图片工具：打开与落盘 ----------

  /** 打开工具。src 用 resolveMediaUrl 换成本地 objectURL —— 工具内部要读像素。 */
  const openTool = async (kind, node) => {
    if (!node) return
    const main = primaryImage(node)
    const key = main?.storageKey || node.storageKey
    if (!key) { say?.('这个节点还没有图片', 'error'); return }
    const src = await resolveMediaUrl(key)
    if (!src) { say?.('图片数据读不出来，可能已被清理', 'error'); return }
    setImgTool({ kind, nodeId: node.id, src })
  }

  /**
   * 工具产出 → 新节点。
   * 产出是 Blob，必须先落 IndexedDB 拿 storageKey，
   * 再写进节点数据；直接存 Blob 会让持久化层存进不可序列化的对象。
   */
  const applyToolResult = async (result) => {
    const ctx = imgTool
    setImgTool(null)
    if (!ctx || !result) return
    const source = nodes.find(n => n.id === ctx.nodeId)

    // 多张 = 切图，生成多个节点横向排开
    if (Array.isArray(result)) {
      const made = []
      const cols = Math.max(...result.map(p => p.column)) + 1
      const gap = 24
      result.forEach((piece, i) => {
        const col = i % cols
        const row = Math.floor(i / cols)
        const n = makeNode('image', { x: 0, y: 0 }, { ratio: source?.ratio || '1:1' })
        n.x = (source ? source.x + source.w + 80 : 200) + col * (n.w + gap)
        n.y = (source ? source.y : 200) + row * (n.h + gap)
        n.prompt = source?.prompt || ''
        n.status = 'done'
        n.pending = piece.blob
        made.push(n)
      })
      await Promise.all(made.map(async (n) => {
        const key = makeStorageKey('image')
        await putMedia(key, n.pending, { mimeType: n.pending.type, source: 'split' })
        const entry = makeImageEntry({ storageKey: key, width: 0, height: 0, bytes: n.pending.size, mimeType: n.pending.type, prompt: n.prompt })
        delete n.pending
        n.images = [entry]
        n.primaryImageId = entry.id
        n.storageKey = key
      }))
      const newEdges = source ? made.map((n) => ({ id: newId('e'), from: source.id, to: n.id })) : []
      mutate(c => ({ nodes: [...c.nodes, ...made], edges: [...c.edges, ...newEdges] }))
      setSelection(made.map(n => n.id))
      say?.(`已切出 ${made.length} 个节点`)
      return
    }

    const loadSourceOriginalDataUrl = async () => {
      const main = source ? primaryImage(source) : null
      const key = main?.storageKey || source?.storageKey
      if (key) {
        const u = await mediaKeyToDataUrl(key).catch(() => '')
        if (u) return u
      }
      if (ctx.src) {
        const blob = await (await fetch(ctx.src)).blob()
        return blobToDataUrl(blob)
      }
      return ''
    }

    // AI 多角度重绘：将原图与三维机位提示词发给图生图，右侧派生新子节点
    if (result.kind === 'angle') {
      const pick = findModel(channels, source?.modelKey || modelKey || defaults?.modelKey) || modelsWithCap(channels, 'image')[0] || null
      if (!pick) { say?.('没有可用的生图模型，去配置里加一个', 'error'); return }
      const originalDataUrl = await loadSourceOriginalDataUrl().catch(() => '')
      if (!originalDataUrl) { say?.('原图数据不可用，无法重绘新视角', 'error'); return }
      const child = {
        ...makeNode('image', {
          x: source ? source.x + source.w + 96 : 400,
          y: source ? source.y : 200,
        }, { ratio: source?.ratio || '1:1', resolution: source?.resolution || resolution }),
        status: 'running',
        startedAt: Date.now(),
        prompt: result.prompt,
      }
      const edge = source ? { id: newId('e'), from: source.id, to: child.id } : null
      mutate((c) => ({
        nodes: [...c.nodes, child],
        edges: edge ? [...c.edges, edge] : c.edges,
      }))
      setSelection([child.id])
      try {
        const edit = await runGenerate({
          capability: 'image-edit',
          channel: pick.channel,
          model: pick.model.id,
          prompt: result.prompt,
          params: {
            imageDataUrls: [originalDataUrl],
            skipRefPrefix: true,
            size: sizeFromNode(source),
            ratio: source?.ratio || '1:1',
            quality,
            background: transparent ? 'transparent' : undefined,
            outputFormat: transparent ? 'png' : undefined,
          },
        })
        const first = edit.items?.[0]
        if (!first) throw new Error('上游没有返回图片')
        const entry = makeImageEntry({
          storageKey: first.storageKey,
          width: first.width,
          height: first.height,
          bytes: first.bytes,
          mimeType: first.mimeType,
          url: first.url,
          degraded: first.degraded,
          prompt: result.prompt,
        })
        mutate((c) => ({
          nodes: c.nodes.map((n) => (n.id === child.id
            ? { ...n, status: 'done', error: '', startedAt: 0, images: [entry], primaryImageId: entry.id, storageKey: first.storageKey }
            : n)),
        }))
        say?.('新视角生成完成')
      } catch (error) {
        mutate((c) => ({
          nodes: c.nodes.map((n) => (n.id === child.id
            ? { ...n, status: 'failed', error: error.message || '多角度生成失败', startedAt: 0 }
            : n)),
        }))
        say?.(error.message || '多角度生成失败', 'error')
      }
      return
    }

    // 蒙版局部修改：按原项目规范提交 [干净原图, 蓝色标注图] 双图 + 约束模板 + 原图比例
    if (result.kind === 'maskEdit' || result.dataUrl) {
      const pick = findModel(channels, source?.modelKey || modelKey || defaults?.modelKey) || modelsWithCap(channels, 'image')[0] || null
      if (!pick) { say?.('没有可用于编辑的模型，去配置里加一个', 'error'); return }
      try {
        const originalDataUrl = await loadSourceOriginalDataUrl().catch(() => '')
        const imageDataUrls = originalDataUrl ? [originalDataUrl, result.dataUrl] : [result.dataUrl]
        const edit = await runGenerate({
          capability: 'image-edit',
          channel: pick.channel,
          model: pick.model.id,
          prompt: result.prompt,
          params: {
            imageDataUrls,
            skipRefPrefix: true,
            size: sizeFromNode(source),
            ratio: source?.ratio || '1:1',
            quality,
            background: transparent ? 'transparent' : undefined,
            outputFormat: transparent ? 'png' : undefined,
          },
        })
        const first = edit.items?.[0]
        if (!first) { say?.('上游没有返回图片', 'error'); return }
        const displayPrompt = result.rawPrompt || result.prompt
        const entry = makeImageEntry({
          storageKey: first.storageKey,
          width: first.width,
          height: first.height,
          bytes: first.bytes,
          mimeType: first.mimeType,
          url: first.url,
          degraded: first.degraded,
          prompt: displayPrompt,
        })
        const n = makeNode('image', {
          x: source ? source.x + source.w + 96 : 400,
          y: source ? source.y : 200,
        }, { ratio: source?.ratio || '1:1', resolution: source?.resolution || resolution })
        n.prompt = displayPrompt
        n.status = 'done'
        n.images = [entry]
        n.primaryImageId = entry.id
        n.storageKey = first.storageKey
        const edge = source ? { id: newId('e'), from: source.id, to: n.id } : null
        mutate(c => ({ nodes: [...c.nodes, n], edges: edge ? [...c.edges, edge] : c.edges }))
        setSelection([n.id])
        say?.('局部修改完成')
      } catch (error) {
        say?.(error.message || '局部修改失败', 'error')
      }
      return
    }

    const key = makeStorageKey('image')
    await putMedia(key, result.blob, { mimeType: result.blob.type, source: 'tool', width: result.width, height: result.height })
    const entry = makeImageEntry({
      storageKey: key,
      width: result.width,
      height: result.height,
      bytes: result.blob.size,
      mimeType: result.blob.type,
      prompt: source?.prompt || '',
    })
    const n = makeNode('image', {
      x: source ? source.x + source.w + 96 : 400,
      y: source ? source.y : 200,
    }, { ratio: source?.ratio || '1:1' })
    n.prompt = source?.prompt || ''
    n.status = 'done'
    n.images = [entry]
    n.primaryImageId = entry.id
    n.storageKey = key
    const edge = source ? { id: newId('e'), from: source.id, to: n.id } : null
    mutate(c => ({ nodes: [...c.nodes, n], edges: edge ? [...c.edges, edge] : c.edges }))
    setSelection([n.id])
    say?.('已生成新节点')
  }

  const nodeIsImage = one && one.type === 'image' && (primaryImage(one) || one.storageKey)

  // ---------- 视频生成 ----------

  /** 视频模型：按能力标签筛。 */
  const videoModels = modelsWithCap(channels, 'video')

  /**
   * 给视频节点生成内容。
   * 任务 ID 一拿到就写进节点 —— 这样即使界面刷新，用户回来还能续查。
   */
  const generateVideoFor = async (node) => {
    const { nodes: curNodes, edges: curEdges } = canvasRef.current
    const ctx = buildNodeGenerationContext(node, curNodes, curEdges)
    const text = composePromptWithContext(node.prompt || '', ctx.textInputs, ctx.upstream)
    if (!text) { say?.('先给这个视频节点写一句提示词', 'error'); return }
    const pick = findModel(channels, node.modelKey || ctx.configNode?.modelKey) || videoModels[0] || null
    if (!pick) { say?.('没有支持视频的模型，去配置里加一个支持视频的渠道', 'error'); return }

    mutate((c) => ({
      nodes: c.nodes.map((n) => (n.id === node.id
        ? { ...n, status: 'running', error: '', modelKey: pick.key }
        : n)),
    }))

    try {
      const controller = new AbortController()
      videoAbort.current?.abort()
      videoAbort.current = controller

      const out = await runGenerate({
        capability: 'video',
        channel: pick.channel,
        model: pick.model.id,
        prompt: text,
        params: { seconds: node.seconds || 4 },
        signal: controller.signal,
        onTick: ({ status, stage, taskId, note }) => {
          if (taskId) {
            // 任务 ID 落盘，刷新后可续查
            mutate((c) => ({
              nodes: c.nodes.map((n) => (n.id === node.id ? { ...n, videoTaskId: taskId } : n)),
            }))
          }
          if (note) say?.(note)
        },
      })

      mutate((c) => ({
        nodes: c.nodes.map((n) => (n.id === node.id
          ? { ...n, status: 'idle', storageKey: out.storageKey, mimeType: out.mimeType, bytes: out.bytes }
          : n)),
      }))
      say?.('视频生成完成')
    } catch (error) {
      if (isAbort(error)) { say?.('已取消'); }
      else {
        say?.(error.message || '视频生成失败', 'error')
      }
      mutate((c) => ({
        nodes: c.nodes.map((n) => (n.id === node.id
          ? { ...n, status: 'failed', error: isAbort(error) ? '' : (error.message || '生成失败') }
          : n)),
      }))
    }
  }

  // ---------- 节点浮动工具条的动作 ----------

  /** 复制提示词。navigator.clipboard 在非 https/自定义协议下可能不可用，用 textarea 兜底。 */
  const copyPromptOf = async (node) => {
    const text = node?.prompt || ''
    if (!text.trim()) { say?.('这个节点还没有提示词', 'error'); return }
    try {
      await navigator.clipboard.writeText(text)
      say?.('提示词已复制')
    } catch {
      // 兜底：临时 textarea + execCommand
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;left:-9999px;top:0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        say?.('提示词已复制')
      } catch {
        say?.('复制失败，浏览器不允许剪贴板', 'error')
      } finally {
        document.body.removeChild(ta)
      }
    }
  }

  /** 下载原图。走和 ZIP 导出同一条 blob 路径。 */
  const downloadNodeImage = async (node) => {
    const main = primaryImage(node)
    const key = main?.storageKey || node.storageKey
    if (!key) { say?.('这个节点还没有图片', 'error'); return }
    const record = await getMedia(key).catch(() => null)
    if (!record?.blob) { say?.('图片数据读不出来，可能已被清理', 'error'); return }
    const ext = (record.blob.type?.split('/')[1] || 'png').replace('jpeg', 'jpg')
    const url = URL.createObjectURL(record.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${(node.prompt || 'canvas-image').slice(0, 40).replace(/[/\\:*?"<>|]/g, '')}.${ext}`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 3000)
    say?.('已开始下载')
  }

  /** 存为资产：资产页支持 kind:'image' + cover(storageKey)。 */
  const saveNodeAsAsset = async (node) => {
    const main = primaryImage(node)
    const key = main?.storageKey || node.storageKey
    if (!key) { say?.('这个节点还没有图片', 'error'); return }
    if (!onSaveAsset) { say?.('当前环境不支持存为资产', 'error'); return }
    onSaveAsset({
      id: newId('a'),
      kind: 'image',
      title: (node.prompt || '画布图片').slice(0, 30),
      text: node.prompt || '',
      cover: key,
      tags: ['画布'],
      source: '画布节点',
      at: Date.now(),
    })
    say?.('已存为资产')
  }

  /** 删除指定节点（不依赖 selection —— 悬停的节点可能没被选中）。 */
  const deleteNodeById = (id) => {
    if (!id) return
    mutate((c) => {
      const removed = c.nodes.filter((n) => n.id === id)
      const kept = c.nodes.filter((n) => n.id !== id)
      releaseRemovedUrls(removed, kept)
      return {
        nodes: kept,
        edges: c.edges.filter((e) => e.from !== id && e.to !== id),
      }
    })
    setSelection((prev) => prev.filter((x) => x !== id))
    say?.('已删除节点')
  }

  // ---------- 反推提示词 ----------

  /** 反推用的系统提示：只描述，不解释，方便直接当提示词用。 */
  const REVERSE_SYSTEM = '你是一个图像描述助手。看到图片后，用一段中文写清楚它的画面内容：主体、风格、构图、光线、色彩。'
  const REVERSE_PROMPT = '请描述这张图。只给描述本身，不要解释你在做什么，不要用 Markdown 标题或列表。'

  /**
   * 把图片交给 DSH 本地配置的模型，拿回一句可当提示词用的描述。
   *
   * 关键：**用 DSH 的模型，不碰绘图的 API Key**。
   * 图片会被缩到 768 长边再发，避免请求体过大。
   */
  const reversePromptOf = async (node) => {
    const main = primaryImage(node)
    const key = main?.storageKey || node.storageKey
    if (!key) { say?.('这个节点还没有图片', 'error'); return }

    const record = await getMediaAny(key).catch(() => null)
    if (!record?.blob) { say?.('图片数据读不出来，可能已被清理', 'error'); return }

    // 先确认模型声明支持图片输入 —— 不支持的话 DSH 会静默把图片丢掉，
    // 回来一段瞎编的文字，用户还以为成功了。
    const models = await fetchModels().catch(() => null)
    const chosen = pickDshModel(models, assistantModel)
    if (chosen && Array.isArray(chosen.model.inputModalities) && !chosen.model.inputModalities.includes('image')) {
      say?.(`DSH 当前模型「${chosen.model.name || chosen.model.id}」不支持读图，请在 DSH 里换一个支持图片输入的模型`, 'error')
      return
    }

    const img = await toDataUrlScaled(record.blob, 768)
    say?.('正在反推提示词…')

    try {
      const text = await streamText({
        messages: [{ role: 'user', text: REVERSE_PROMPT }],
        images: [{ mimeType: img.mimeType, data: img.data }],
        system: REVERSE_SYSTEM,
        model: chosen ? { provider: chosen.provider.id, model: chosen.model.id } : undefined,
        maxTokens: 600,
      })
      const clean = String(text || '').trim()
      if (!clean) { say?.('模型没有返回内容，可能这个模型不支持读图', 'error'); return }

      // 写进图片节点的 prompt，并新开一个文本节点把结果摆出来
      mutate((c) => {
        const nodes = c.nodes.map((n) => (n.id === node.id ? { ...n, prompt: clean } : n))
        const t = makeNode('text', { x: 0, y: 0 })
        t.x = node.x + node.w + 96
        t.y = node.y
        t.text = clean
        t.name = '反推提示词'
        t.status = 'done'
        return { nodes: [...nodes, t] }
      })
      say?.('反推完成，已写入提示词并新建文本节点')
    } catch (error) {
      if (isAbort(error)) say?.('已取消')
      else say?.(error.message || '反推失败', 'error')
    }
  }

  // ---------- 替换图片 / 锁比例 / 信息 ----------

  /** 换一张图：本地选文件 → 落 IDB → 换掉节点的图。 */
  const replaceImageOf = (node) => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = 'image/*'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      if (!/^image\//.test(file.type)) { say?.('请选择图片文件', 'error'); return }
      try {
        const key = makeStorageKey('image')
        await putMedia(key, file, { mimeType: file.type, source: 'replace' })
        const size = await readImageSize(file).catch(() => ({ width: 0, height: 0 }))
        const entry = makeImageEntry({
          storageKey: key,
          width: size.width,
          height: size.height,
          bytes: file.size,
          mimeType: file.type,
          prompt: node.prompt || '',
        })
        let applied = false
        mutate((c) => {
          // 用函数式更新拿最新节点，避免闭包里的旧值
          const current = c.nodes.find((n) => n.id === node.id)
          if (!current) return {}
          applied = true
          return {
            nodes: c.nodes.map((n) => (n.id === node.id
              ? { ...n, images: [entry], primaryImageId: entry.id, storageKey: key, status: 'idle', error: '' }
              : n)),
          }
        })
        if (applied) say?.('已替换图片')
      } catch (error) {
        say?.(error.message || '替换失败', 'error')
      }
    }
    input.click()
  }

  /** 切换等比缩放 / 自由比例。图片节点默认锁比例。 */
  const toggleLockOf = (node) => {
    const nowLocked = node.locked !== false
    mutate((c) => ({
      nodes: c.nodes.map((n) => (n.id === node.id ? { ...n, locked: !nowLocked } : n)),
    }))
    say?.(nowLocked ? '已改为自由比例' : '已改为等比缩放')
  }

  /** 节点信息。 */
  const showInfoOf = (node) => {
    const main = primaryImage(node)
    setInfoNode({
      id: node.id,
      title: node.name || node.prompt?.slice(0, 24) || '图片',
      width: main?.width || Math.round(node.w),
      height: main?.height || Math.round(node.h),
      bytes: main?.bytes || 0,
      mimeType: main?.mimeType || '',
      storageKey: main?.storageKey || node.storageKey || '',
      count: node.images?.length || 0,
      locked: node.locked !== false,
      createdAt: main?.createdAt || 0,
      x: Math.round(node.x),
      y: Math.round(node.y),
      w: Math.round(node.w),
      h: Math.round(node.h),
    })
  }

  /** 工具条统一入口。 */
  const handleNodeAction = (actionId, node) => {
    switch (actionId) {
      case 'copyPrompt': copyPromptOf(node); break
      case 'reversePrompt': reversePromptOf(node); break
      case 'sendToStudio': onSendToStudio?.(node); break
      case 'replace': replaceImageOf(node); break
      case 'resize': toggleLockOf(node); break
      case 'info': showInfoOf(node); break
      case 'crop':
      case 'split':
      case 'upscale':
      case 'angle':
      case 'maskEdit': openTool(actionId, node); break
      case 'saveAsset': saveNodeAsAsset(node); break
      case 'download': downloadNodeImage(node); break
      case 'delete': deleteNodeById(node.id); break
      default: break
    }
  }

  // 右键菜单用到的动作
  const ungroup = (id) => {
    mutate(c => ({ nodes: c.nodes.filter(n => n.id !== id) }))
    setSelection([])
    say?.('已取消分组，节点保留')
  }
  const deleteGroupDeep = (id) => {
    mutate(c => {
      const g = c.nodes.find(n => n.id === id)
      const drop = new Set([id, ...(g?.childIds || [])])
      const removed = c.nodes.filter(n => drop.has(n.id))
      const kept = c.nodes.filter(n => !drop.has(n.id))
      releaseRemovedUrls(removed, kept)
      return {
        nodes: kept,
        edges: c.edges.filter(e => !drop.has(e.from) && !drop.has(e.to)),
      }
    })
    setSelection([])
    say?.('已删除分组与内容')
  }
  const selectAll = () => setSelection(nodes.map(n => n.id))
  const generateNode = (id) => {
    const node = canvasRef.current.nodes.find((n) => n.id === id)
    if (!node) return
    if (node.type === 'config') { runConfigNode(node); return }
    if (node.type === 'video') { generateVideoFor(node); return }
    if (node.type === 'audio') { say?.('音频节点暂不支持生成', 'error'); return }
    if (node.type === 'text') {
      streamTextFor({ node, rawText: node.prompt || node.text || activeDraftStore.get().trim() })
      return
    }
    if (node.type === 'image') {
      const promptText = (node.prompt || '').trim() || activeDraftStore.get().trim()
      if (!promptText) { say?.('先写一句提示词再生成', 'error'); return }
      runImageGeneration({
        text: promptText,
        target: node,
        ratio: node.ratio || ratio,
        resolution: node.resolution || resolution,
        count,
        quality,
        transparent,
        forceOverwrite: !hasRealImage(node),
      })
    }
  }

  const ungroupSelected = () => {
    const curSel = new Set(selection)
    const dropGroups = canvasRef.current.nodes.filter((n) => curSel.has(n.id) && n.type === 'group').map((n) => n.id)
    if (!dropGroups.length) return
    const dropSet = new Set(dropGroups)
    mutate((c) => ({ nodes: c.nodes.filter((n) => !dropSet.has(n.id)) }))
    setSelection([])
    say?.('已取消分组，节点保留')
  }

  const createAtWorld = (type, worldPos) => {
    const extra = type === 'config'
      ? { modelKey: modelKey || imageModels[0]?.key || '', ratio, count, resolution }
      : type === 'audio' ? { name: '暂不支持生成' } : {}
    const n = makeNode(type, worldPos, extra)
    mutate((cv) => ({ nodes: [...cv.nodes, n] }))
    setSelection([n.id])
    say?.(type === 'audio' ? '已新建音频节点（暂不支持生成）' : `已新建${NODE_TYPES[type]}节点`)
    return n
  }

  const createFromConnection = (fromId, type, worldPos) => {
    const fromNode = canvasRef.current.nodes.find((n) => n.id === fromId)
    if (!fromNode) return
    const extra = type === 'config'
      ? { modelKey: modelKey || imageModels[0]?.key || '', ratio, count, resolution }
      : type === 'audio' ? { name: '暂不支持生成' } : {}
    const n = makeNode(type, worldPos, extra)
    const canLink = !(fromNode.type === 'config' && n.type === 'config') && n.type !== 'group'
    const edge = canLink ? { id: newId('e'), from: fromId, to: n.id } : null
    mutate((cv) => ({
      nodes: [...cv.nodes, n],
      edges: edge ? [...cv.edges, edge] : cv.edges,
    }))
    setSelection([n.id])
    const suffix = type === 'audio' ? '（暂不支持生成）' : ''
    say?.(canLink ? `已新建并连接${NODE_TYPES[type]}节点${suffix}` : `已新建${NODE_TYPES[type]}节点${suffix}`)
  }

  const handleBatchAction = async (action, target, imageId) => {
    if (action === 'setPrimary' && target) {
      mutate((c) => ({ nodes: c.nodes.map((n) => (n.id === target.id ? setPrimary(n, imageId) : n)) }))
      say?.('已设为主图')
      return
    }
    if (action === 'removeItem' && target) {
      mutate((c) => ({ nodes: c.nodes.map((n) => (n.id === target.id ? removeImage(n, imageId) : n)) }))
      say?.('已移除图片')
      return
    }
    if (action === 'explode' && target) {
      const split = explodeBatch(target, { makeId: () => newId('i') })
      if (!split.length) return
      mutate((c) => ({
        nodes: [...c.nodes.filter((n) => n.id !== target.id), ...split],
        edges: c.edges.filter((e) => e.from !== target.id && e.to !== target.id),
      }))
      setSelection(split.map((n) => n.id))
      say?.(`已拆分为 ${split.length} 个独立节点`)
      return
    }
    if (action === 'duplicateItem' && target) {
      const entry = (target.images || []).find((i) => i.id === imageId)
      if (!entry) return
      const aspect = entry.width && entry.height ? entry.width / entry.height : (target.w / Math.max(1, target.h - 28))
      const w = Math.max(180, Math.min(280, Math.round(target.w || 240)))
      const h = Math.round(w / Math.max(0.25, aspect)) + 28
      const copyNode = {
        ...makeNode('image', { x: target.x + target.w + 32, y: target.y }, { ratio: target.ratio || '1:1', w, h }),
        x: Math.round(target.x + target.w + 32),
        y: Math.round(target.y),
        prompt: entry.prompt || target.prompt || '',
        status: 'done',
        images: [{ ...entry }],
        primaryImageId: entry.id,
        storageKey: entry.storageKey || '',
      }
      mutate((c) => ({ nodes: [...c.nodes, copyNode] }))
      setSelection([copyNode.id])
      say?.('已拆出为独立节点')
      return
    }
    if (action === 'downloadItem' && target) {
      const entry = (target.images || []).find((i) => i.id === imageId)
      const key = entry?.storageKey
      if (!key) { say?.('这张图片暂无本地副本', 'error'); return }
      const record = await getMedia(key).catch(() => null)
      if (!record?.blob) { say?.('图片读取失败', 'error'); return }
      const ext = (record.blob.type?.split('/')[1] || 'png').replace('jpeg', 'jpg')
      const url = URL.createObjectURL(record.blob)
      const a = document.createElement('a')
      a.href = url
      a.download = `${(entry.prompt || target.prompt || 'image').slice(0, 32).replace(/[/\\:*?"<>|]/g, '')}.${ext}`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 3000)
      say?.('已开始下载')
      return
    }
    if (action === 'merge' && Array.isArray(target)) {
      const { nodes: curNodes } = canvasRef.current
      const pickSet = new Set(target)
      const pickedImgs = curNodes.filter((n) => pickSet.has(n.id) && n.type === 'image' && hasRealImage(n))
      if (pickedImgs.length < 2) { say?.('至少选择两个有图的图片节点', 'error'); return }
      const merged = mergeIntoBatch(pickedImgs, { makeId: () => newId('i') })
      if (!merged) return
      const drop = new Set(pickedImgs.map((n) => n.id))
      const capped = {
        ...merged,
        w: Math.min(280, Math.max(200, Math.round(pickedImgs[0].w || 240))),
        h: Math.min(380, Math.max(200, Math.round(pickedImgs[0].h || 268))),
      }
      mutate((c) => ({
        nodes: [...c.nodes.filter((n) => !drop.has(n.id)), capped],
        edges: c.edges.filter((e) => !drop.has(e.from) && !drop.has(e.to)),
      }))
      setSelection([capped.id])
      say?.(`已合并为 ${capped.images.length} 张批量图组`)
    }
  }

  const handleDropFiles = async (files, worldPos) => {
    const list = [...(files || [])].filter((f) => f?.type?.startsWith('image/'))
    if (!list.length) return
    const created = []
    let cursorX = Math.round(worldPos?.x ?? 200)
    const cursorY = Math.round(worldPos?.y ?? 200)
    for (const file of list) {
      const dims = await readBlobSize(file).catch(() => ({ width: 0, height: 0 }))
      const key = makeStorageKey('image')
      await putMedia(key, file, { mimeType: file.type, source: 'drop', width: dims.width, height: dims.height })
      const aspect = dims.width && dims.height ? dims.width / dims.height : 1
      const w = 240
      const h = Math.round(w / Math.max(0.25, Math.min(4, aspect))) + 28
      const entry = makeImageEntry({
        storageKey: key,
        width: dims.width,
        height: dims.height,
        bytes: file.size,
        mimeType: file.type,
        prompt: '',
      })
      const node = makeNode('image', { x: cursorX, y: cursorY }, { w, h, name: file.name || '' })
      node.x = cursorX
      node.y = cursorY
      node.status = 'done'
      node.images = [entry]
      node.primaryImageId = entry.id
      node.storageKey = key
      created.push(node)
      cursorX += w + 24
    }
    if (created.length) {
      mutate((c) => ({ nodes: [...c.nodes, ...created] }))
      setSelection(created.map((n) => n.id))
      say?.(`已导入 ${created.length} 张图片到画布`)
    }
  }

  const actionsRef = React.useRef(null)
  actionsRef.current = {
    duplicate, wrap, ungroupSelected, removeSelection: removeSelected, removeEdge: onRemoveEdge,
    addNode, selectAll, fit: () => camApi.fit?.(), generateNode, ungroup, deleteGroupDeep,
    undo, redo, copy, paste, setTool, setSelection,
    updateNode, runConfigNode, handleBatchAction, createFromConnection, createAtWorld, handleDropFiles,
    handleNodeAction, onMove, onResize, onConnect, onRemoveEdge,
    onOpenNode: (node) => { setSelection([node.id]); setPrompt(node.prompt || node.text || '') },
    onGesture: (phase) => { if (phase === 'start') history.pause(); else history.resume() },
  }
  const actions = React.useMemo(() => ({
    duplicate: () => actionsRef.current.duplicate(),
    wrap: () => actionsRef.current.wrap(),
    ungroupSelected: () => actionsRef.current.ungroupSelected(),
    removeSelection: () => actionsRef.current.removeSelection(),
    removeEdge: (id) => actionsRef.current.removeEdge(id),
    addNode: (type) => actionsRef.current.addNode(type),
    selectAll: () => actionsRef.current.selectAll(),
    fit: () => actionsRef.current.fit(),
    generateNode: (id) => actionsRef.current.generateNode(id),
    ungroup: (id) => actionsRef.current.ungroup(id),
    deleteGroupDeep: (id) => actionsRef.current.deleteGroupDeep(id),
  }), [])

  const stableCallbacks = React.useMemo(() => ({
    onMove: (ids, dx, dy) => actionsRef.current.onMove(ids, dx, dy),
    onResize: (id, w, h) => actionsRef.current.onResize(id, w, h),
    onConnect: (from, to) => actionsRef.current.onConnect(from, to),
    onRemoveEdge: (id) => actionsRef.current.onRemoveEdge(id),
    onNodeAction: (a, n) => actionsRef.current.handleNodeAction(a, n),
    onGesture: (phase) => actionsRef.current.onGesture(phase),
    onOpenNode: (node) => actionsRef.current.onOpenNode(node),
    onUpdateNode: (id, patch) => actionsRef.current.updateNode(id, patch),
    onRunConfig: (cfg) => actionsRef.current.runConfigNode(cfg),
    onBatchAction: (act, t, id) => actionsRef.current.handleBatchAction(act, t, id),
    onCreateFromConnection: (f, t, pos) => actionsRef.current.createFromConnection(f, t, pos),
    onCreateAt: (t, pos) => actionsRef.current.createAtWorld(t, pos),
    onDropFiles: (files, pos) => actionsRef.current.handleDropFiles(files, pos),
  }), [])

  React.useEffect(() => {
    const onWindowPaste = (e) => {
      const ae = document.activeElement
      if (ae && (/input|textarea|select/i.test(ae.tagName) || ae.isContentEditable)) return
      const dt = e.clipboardData
      if (!dt) return
      const imgs = []
      for (const item of Array.from(dt.items || [])) {
        if (item.kind === 'file' && item.type.startsWith('image/')) {
          const f = item.getAsFile()
          if (f) imgs.push(f)
        }
      }
      if (!imgs.length) {
        for (const f of Array.from(dt.files || [])) if (f.type?.startsWith('image/')) imgs.push(f)
      }
      if (!imgs.length) return
      e.preventDefault()
      const c = cam.current
      const center = { x: (window.innerWidth / 2 - c.tx) / c.s - 120, y: (window.innerHeight / 2 - c.ty) / c.s - 120 }
      actionsRef.current?.handleDropFiles(imgs, center)
    }
    window.addEventListener('paste', onWindowPaste)
    return () => window.removeEventListener('paste', onWindowPaste)
  }, [cam])

  React.useEffect(() => {
    const onKey = (e) => {
      if (/input|textarea|select/i.test(e.target.tagName)) return
      const native = e.nativeEvent || e
      if (e.isComposing || native.isComposing || e.keyCode === 229 || e.which === 229
        || native.keyCode === 229 || native.which === 229) return
      if (e.target.isContentEditable) return

      const act = actionsRef.current
      if (!act) return
      const mod = e.metaKey || e.ctrlKey
      const k = e.key.toLowerCase()

      if (mod) {
        if (k === 'z') {
          e.preventDefault()
          if (e.shiftKey) act.redo()
          else act.undo()
          return
        }
        if (k === 'y') { e.preventDefault(); act.redo(); return }
        if (k === 'd') { e.preventDefault(); act.duplicate(); return }
        if (k === 'g') {
          e.preventDefault()
          if (e.shiftKey) act.ungroup()
          else act.wrap()
          return
        }
        if (k === 'a') { e.preventDefault(); act.selectAll(); return }
        if (k === 'c') { e.preventDefault(); act.copy(); return }
        if (k === 'v') { e.preventDefault(); act.paste(); return }
        return
      }

      if (e.key === 'Delete' || e.key === 'Backspace') { e.preventDefault(); act.removeSelection(); return }
      if (e.key === 'Escape') { act.setSelection([]); return }
      if (k === 'v') act.setTool('select')
      if (k === 'h') act.setTool('pan')
      if (k === 't') act.addNode('text')
      if (k === 'i') act.addNode('image')
      if (k === 'a') act.addNode('audio')
      if (k === 'c') act.addNode('config')
      if (k === 'g') act.addNode('group')
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <div className="cf-editor">
      {imgTool ? (
        <ImageToolDialog
          kind={imgTool.kind}
          src={imgTool.src}
          onClose={() => setImgTool(null)}
          onDone={applyToolResult}
        />
      ) : null}

      {infoNode ? <NodeInfoDialog info={infoNode} onClose={() => setInfoNode(null)} say={say} /> : null}
      {promptModalOpen ? (
        <PromptPickerDialog
          prompts={prompts}
          onClose={() => setPromptModalOpen(false)}
          onPick={async (p, opts = {}) => {
            setPromptModalOpen(false)
            setPrompt(p.text || p.prompt || '')
            if (opts.withRefs && p.referenceImageUrls?.length) {
              say?.(`已填入「${p.title || '提示词'}」，正在加载 ${p.referenceImageUrls.length} 张配套参考图…`)
              const fetched = await fetchRemoteImagesToStorage(p.referenceImageUrls, { max: 4 })
              if (fetched.length) {
                setRefs((prev) => [...prev, ...fetched.map((it) => ({ id: it.id, name: it.name, url: it.url, storageKey: it.storageKey }))])
                say?.(`已加入 ${fetched.length} 张提示词配套参考图`)
              } else {
                say?.(`已填入「${p.title || '提示词'}」（配套参考图加载失败）`)
              }
            } else {
              say?.(`已填入「${p.title || '提示词'}」`)
            }
          }}
        />
      ) : null}
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
            disabled={t.action === 'undo' ? !histState.canUndo : t.action === 'redo' ? !histState.canRedo : false}
            onClick={() => {
              if (t.action === 'undo') { undo(); return }
              if (t.action === 'redo') { redo(); return }
              if (t.id === 'focus') { camApi.fit?.(); return }
              if (['text', 'image', 'video', 'audio', 'config', 'group'].includes(t.id)) { addNode(t.id); return }
              setTool(t.id)
            }}
          >
            <Icon name={t.icon} size={18} />
          </button>
        )))}
      </nav>

      <div className="cf-editor-main">
        <div className="cf-canvas-bar">
          <span className="cf-canvas-bar-name" title={canvas.name || '未命名画布'}>{canvas.name || '未命名画布'}</span>
          <div className="cf-seg" role="group" aria-label="网格样式">
            {GRID_STYLES.map(g => (
              <button key={g.id} type="button" className={(canvas.grid || 'dots') === g.id ? 'is-on' : ''}
                onClick={() => onChange({ grid: g.id })}>{g.label}</button>
            ))}
          </div>
          {onTheme ? (
            <button
              type="button"
              className="cf-icon-btn"
              title={`切换外观（当前：${theme === 'dark' ? '暗黑' : theme === 'light' ? '明亮' : '跟随系统'}）`}
              aria-label="切换外观主题"
              onClick={() => {
                const order = ['system', 'light', 'dark']
                onTheme(order[(order.indexOf(theme) + 1) % order.length])
              }}
            >
              <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={14} />
            </button>
          ) : null}
        </div>
        <MemoCanvas
          nodes={nodes}
          edges={edges}
          selection={selection}
          channels={channels}
          grid={canvas.grid || 'dots'}
          tool={tool}
          minimap
          camera={camera}
          camApi={camApi}
          showHint={!pickedNodes.length}
          onSelection={setSelection}
          onMove={stableCallbacks.onMove}
          onResize={stableCallbacks.onResize}
          onNodeAction={stableCallbacks.onNodeAction}
          showToolbarLabels={showToolbarLabels}
          onGesture={stableCallbacks.onGesture}
          onConnect={stableCallbacks.onConnect}
          onRemoveEdge={stableCallbacks.onRemoveEdge}
          onOpenNode={stableCallbacks.onOpenNode}
          onUpdateNode={stableCallbacks.onUpdateNode}
          onRunConfig={stableCallbacks.onRunConfig}
          onBatchAction={stableCallbacks.onBatchAction}
          onCreateFromConnection={stableCallbacks.onCreateFromConnection}
          onCreateAt={stableCallbacks.onCreateAt}
          onDropFiles={stableCallbacks.onDropFiles}
          actions={actions}
        />

        {showComposer ? (
        <div className={`cf-composer${menu ? ' is-menu' : ''}`}>
          {refs.length ? (
            <div className="cf-composer-refs">
              {refs.map(r => (
                <span key={r.id} className="cf-ref-thumb">
                  <img src={r.url} alt={r.name} />
                  <button type="button" className="cf-ref-x" onClick={() => removeRef(r.id)} aria-label={`移除 ${r.name}`}>×</button>
                </span>
              ))}
            </div>
          ) : null}
          <ComposerPromptInput
            draftStore={activeDraftStore}
            hasRefs={refs.length > 0}
            placeholder={one?.type === 'image' ? '描述你想把这张图改成什么' : one?.type === 'text' ? '描述要生成的文字内容' : one?.type === 'audio' ? '音频节点暂不支持生成' : '描述画面主体、风格、构图、光线和用途'}
            onPaste={onPaste}
            onSubmit={generate}
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

            {/* 比例 + 自定义像素 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn" onClick={() => {
                if (menu !== 'ratio') setSizeDraft()
                setMenu(menu === 'ratio' ? null : 'ratio')
              }}
                aria-expanded={menu === 'ratio'} aria-haspopup="menu">
                <Icon name="frame" size={15} />
                {ratio}
              </button>
              {menu === 'ratio' ? (
                <div className="cf-menu cf-menu--up cf-size-panel" role="menu" aria-label="尺寸">
                  <div className="cf-size-head">
                    <span className="cf-size-title">尺寸</span>
                    <label className="cf-size-align">
                      <span>16 倍数对齐</span>
                      <input type="checkbox" checked={align16} onChange={e => setAlign16(e.target.checked)} />
                    </label>
                  </div>
                  <div className="cf-size-row">
                    <input className="cf-input cf-input--num cf-px" value={cw} aria-label="宽"
                      inputMode="numeric"
                      onChange={e => setPx('w', e.target.value)} />
                    <button type="button" className={`cf-size-link${lockRatio ? ' is-on' : ''}`}
                      aria-pressed={lockRatio} title={lockRatio ? '已锁定比例' : '未锁定比例'}
                      aria-label={lockRatio ? '解锁比例' : '锁定比例'} onClick={toggleLock}>
                      <Icon name="link" size={13} />
                    </button>
                    <input className="cf-input cf-input--num cf-px" value={ch} aria-label="高"
                      inputMode="numeric"
                      onChange={e => setPx('h', e.target.value)} />
                  </div>
                  <div className="cf-size-chips">
                    {RATIOS.map(r => (
                      <button key={r.id} type="button"
                        className={`cf-size-chip${ratio === r.id ? ' is-on' : ''}`}
                        role="menuitem"
                        onClick={() => { applyRatio(r.id); setMenu(null) }}>{r.label}</button>
                    ))}
                  </div>
                  <div className="cf-menu-sep" />
                  <div className="cf-size-foot">
                    <span className="cf-size-hint">{cw && ch ? `${cw} × ${ch}` : '填两个边长'}</span>
                    <button type="button" className="cf-btn cf-btn--primary cf-btn--sm"
                      disabled={!cw || !ch}
                      onClick={() => { applyPixels(); setMenu(null) }}>应用</button>
                  </div>
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

            {/* 分辨率 */}
            <div className="cf-bar-slot">
              <button type="button" className="cf-bar-btn" onClick={() => setMenu(menu === 'res' ? null : 'res')}
                aria-expanded={menu === 'res'} aria-haspopup="menu" data-res
                title={`分辨率：${resolution}`} aria-label={`分辨率：${resolution}`}>
                <Icon name="resolution" size={15} />
                {resolution}
              </button>
              {menu === 'res' ? (
                <div className="cf-menu cf-menu--up cf-size-panel" role="menu" aria-label="分辨率">
                  <div className="cf-size-head">
                    <span className="cf-size-title">分辨率</span>
                    <span className="cf-size-hint">{cw} × {ch}</span>
                  </div>
                  <div className="cf-size-chips">
                    {RESOLUTIONS.map(r => (
                      <button key={r} type="button"
                        className={`cf-size-chip${resolution === r ? ' is-on' : ''}`}
                        role="menuitem"
                        onClick={() => { applyResolution(r); setMenu(null) }}>{r}</button>
                    ))}
                  </div>
                  <div className="cf-menu-sep" />
                  <div className="cf-size-head">
                    <span className="cf-size-title">画质</span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
                    {QUALITIES.map(q => (
                      <button key={q} type="button"
                        className={`cf-chip${quality === q ? ' is-on' : ''}`}
                        onClick={() => setQuality(q)}>{q}</button>
                    ))}
                  </div>
                  <div className="cf-menu-sep" />
                  <label className="cf-size-align" style={{ justifyContent: 'space-between' }}>
                    <span>透明背景（PNG）</span>
                    <input type="checkbox" checked={transparent} onChange={e => setTransparent(e.target.checked)} />
                  </label>
                </div>
              ) : null}
            </div>

            <button
              type="button"
              className="cf-icon-btn"
              title="从提示词库选择"
              aria-label="提示词库"
              onClick={() => setPromptModalOpen(true)}
            >
              <Icon name="book" size={15} />
            </button>

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
                  )) : <p className="cf-menu-empty">{modelEmptyHint}</p>}
                </div>
              ) : null}
              </div>

              {pickedNodes.length ? (
              <span style={{ display: 'inline-flex', gap: 2 }}>
                <IconBtn name="group" label="包成组" onClick={wrap} />
                <IconBtn name="trash" label="删除选中" onClick={removeSelected} />
              </span>
            ) : null}

              <ComposerSendButton
                draftStore={activeDraftStore}
                textBusy={textBusy}
                imgBusy={imgBusy}
                onSubmit={generate}
                onStopText={() => { textStop.current?.abort(); setTextBusy(false) }}
                onStopImg={() => { imgAbort.current?.abort() }}
              />
            </div>
          </div>
        </div>
        ) : null}
      </div>
    </div>
  )
}
