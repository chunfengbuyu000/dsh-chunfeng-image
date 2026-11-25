// 界面原子：一套自绘图标（24 视框、1.6 描边）+ 弹层 / 提示。
import React from 'react'

// 画布入口图标：前方一张图片卡（太阳点 + 山形），后方从左上抽出一张底卡，
// 和插件 icon.svg 同一套形；用在侧栏入口、画布空态等处。
const imageStack = (
  <>
    <path d="M4.6 8v7.9a2.4 2.4 0 0 0 2.4 2.4h7.6" />
    <rect x="7.2" y="3.2" width="13.6" height="13.6" rx="3.1" />
    <circle cx="11.7" cy="7.7" r="1.35" />
    <path d="M9.3 13.6l3.6-4.3 3.9 4.3" />
  </>
)

const P = {
  canvas: imageStack,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" /></>,
  book: <><path d="M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z" /><path d="M5 17h14" /></>,
  folder: <path d="M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  sliders: <path d="M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4" />,
  // 齿轮：八齿 + 内圈。用于「配置」入口；sliders 留给「生成配置节点」，
  // 两者语义不同——齿轮是应用设置，滑杆是节点参数。
  gear: (
    <>
      <circle cx="12" cy="12" r="3.1" />
      <path d="M19.4 13.6a7.6 7.6 0 0 0 0-3.2l1.9-1.4-1.6-2.8-2.3.8a7.6 7.6 0 0 0-2.8-1.6L14.2 2.8h-4.4l-.4 2.6a7.6 7.6 0 0 0-2.8 1.6l-2.3-.8-1.6 2.8 1.9 1.4a7.6 7.6 0 0 0 0 3.2l-1.9 1.4 1.6 2.8 2.3-.8a7.6 7.6 0 0 0 2.8 1.6l.4 2.6h4.4l.4-2.6a7.6 7.6 0 0 0 2.8-1.6l2.3.8 1.6-2.8z" />
    </>
  ),
  cursor: <path d="M6 3l12 7-5 1.5L10.5 20z" />,
  hand: <path d="M8 13V6.5a1.8 1.8 0 013.6 0V12m0-1V5.5a1.8 1.8 0 013.6 0V12m0-1.5V7a1.8 1.8 0 013.6 0v9a6 6 0 01-6 6h-1.6a6 6 0 01-6-6v-4a1.8 1.8 0 013.6 0v2" />,
  target: <><circle cx="12" cy="12" r="6.5" /><circle cx="12" cy="12" r="2.2" /><path d="M12 2.5v2.5M12 19v2.5M2.5 12H5M19 12h2.5" /></>,
  text: <path d="M5 6.5h14M12 6.5V19M9 19h6" />,
  audio: <path d="M4 10v4M8 6.5v11M12 4v16M16 6.5v11M20 10v4" />,
  group: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /><path d="M11 11l2 2" /></>,
  search: <><circle cx="11" cy="11" r="6.5" /><path d="M16 16l4 4" /></>,
  plus: <path d="M12 5v14M5 12h14" />,
  minus: <path d="M5 12h14" />,
  trash: <><path d="M4 7h16M10 4h4M6 7l1 13h10l1-13" /><path d="M10 11v5M14 11v5" /></>,
  edit: <><path d="M4 20h4l10-10-4-4L4 16z" /><path d="M14 6l4 4" /></>,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  chevron: <path d="M6 9l6 6 6-6" />,
  upload: <><path d="M12 16V4" /><path d="M7 9l5-5 5 5" /><path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" /></>,
  download: <><path d="M12 4v12" /><path d="M7 11l5 5 5-5" /><path d="M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2" /></>,
  check: <path d="M4 12l5 5L20 6" />,
  refresh: <><path d="M20 12a8 8 0 11-2.4-5.7" /><path d="M20 4v4h-4" /></>,
  more: <><circle cx="6" cy="12" r="1.2" /><circle cx="12" cy="12" r="1.2" /><circle cx="18" cy="12" r="1.2" /></>,
  undo: <><path d="M9 8H4v5" /><path d="M4 13a8 8 0 1114 5" /></>,
  redo: <><path d="M15 8h5v5" /><path d="M20 13A8 8 0 106 18" /></>,
  // 图片工具四件套
  crop: <><path d="M6 3v12a3 3 0 003 3h12" /><path d="M18 21V9a3 3 0 00-3-3H3" /></>,
  split: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 12h18M12 3v18" /></>,
  upscale: <><path d="M15 3h6v6" /><path d="M9 21H3v-6" /><path d="M21 3l-7 7" /><path d="M3 21l7-7" /></>,
  angle: <><path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" /><path d="M4 7.5l8 4.5 8-4.5" /><path d="M12 12v9" /></>,
  // 图片工具条剩下的三个
  replace: <><path d="M20 11a8 8 0 10-2.6 5.9" /><path d="M20 5v6h-6" /><path d="M12 8v8M9 13l3 3 3-3" /></>,
  lock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7a4 4 0 018 0v3.5" /></>,
  unlock: <><rect x="4.5" y="10.5" width="15" height="10" rx="2" /><path d="M8 10.5V7a4 4 0 017.5-2" /></>,
  info: <><circle cx="12" cy="12" r="9" /><path d="M12 11v6" /><path d="M12 7.6h.01" /></>,
  video: <><rect x="2.5" y="6" width="13" height="12" rx="2" /><path d="M15.5 10.5l6-3.5v10l-6-3.5z" /></>,
  copy: <><rect x="9" y="9" width="12" height="12" rx="2" /><path d="M5 15V5a2 2 0 012-2h8" /></>,
  // 批量图组
  stack: <><path d="M12 3l9 5-9 5-9-5z" /><path d="M3 13l9 5 9-5" /><path d="M3 17.5l9 5 9-5" /></>,
  explode: <><rect x="3" y="3" width="7" height="7" rx="1.5" /><rect x="14" y="3" width="7" height="7" rx="1.5" /><rect x="3" y="14" width="7" height="7" rx="1.5" /><rect x="14" y="14" width="7" height="7" rx="1.5" /></>,
  map: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 10v10M15 10v10" /></>,
  keyboard: <><rect x="2" y="6.5" width="20" height="11" rx="2" /><path d="M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10" /></>,
  link: <><path d="M9 15l6-6" /><path d="M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8" /><path d="M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8" /></>,
  sparkle: <><path d="M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z" /><path d="M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z" /></>,
  message: <><path d="M20 15a2 2 0 01-2 2H8l-4 3V6a2 2 0 012-2h12a2 2 0 012 2z" /></>,
  play: <path d="M8 5l11 7-11 7z" />,
  stop: <rect x="6" y="6" width="12" height="12" rx="1.5" />,
  grid: <><path d="M4 9h16M4 15h16M9 4v16M15 4v16" /></>,
  back: <><path d="M10 6l-5 6 5 6" /><path d="M5 12h14" /></>,
  arrowUp: <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>,
  frame: <><path d="M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2" /></>,
  bars: <><path d="M5 15v3M9.5 10v8M14 6v12M18.5 12v6" /></>,
  resolution: <><rect x="4" y="4" width="16" height="16" rx="2.5" /><rect x="9" y="9" width="6" height="6" rx="1.2" fill="currentColor" stroke="none" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" /></>,
  moon: <><path d="M20.5 14.5A8.5 8.5 0 019.5 3.5a7 7 0 1011 11z" /></>,
}

export function Icon({ name, size = 16, ...rest }) {
  const body = P[name]
  if (!body) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...rest}>
      {body}
    </svg>
  )
}

/**
 * 图标按钮。
 *
 * 提示用 data-tip 而不是原生 title：
 * 原生 title 要悬停约 1 秒才出现、样式由系统决定、和项目其它提示不一致。
 * data-tip 由 CSS 即时渲染（见 styles.css 的 [data-tip] 规则）。
 * aria-label 保留给读屏与测试。
 */
export function IconBtn({ name, label, size = 16, ...rest }) {
  return (
    <button type="button" className="cf-icon-btn" aria-label={label} data-tip={label} {...rest}>
      <Icon name={name} size={size} />
    </button>
  )
}

export function Btn({ variant = 'ghost', size, icon, children, ...rest }) {
  return (
    <button type="button" className={`cf-btn cf-btn--${variant}${size === 'sm' ? ' cf-btn--sm' : ''}`} {...rest}>
      {icon ? <Icon name={icon} size={14} /> : null}
      {children}
    </button>
  )
}

export function Dialog({ title, children, footer, onClose, wide }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="cf-scrim" onPointerDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`cf-dialog${wide ? ' cf-dialog--wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
        <header className="cf-dialog-head">
          <h2 className="cf-dialog-title">{title}</h2>
          <IconBtn name="close" label="关闭" onClick={onClose} />
        </header>
        <div className="cf-dialog-body">
          {children}
          {footer ? <div className="cf-dialog-foot">{footer}</div> : null}
        </div>
      </div>
    </div>
  )
}

/**
 * 错误边界：任何一层渲染抛错都只替换掉出问题的那块，
 * 而不是让整个面板变黑（DSH 主区没有兜底，插件必须自己兜）。
 */
export class Boundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('[春风画布] 渲染出错', error, info)
  }

  render() {
    const { error } = this.state
    if (!error) return this.props.children
    const message = String((error && error.message) || error)
    return (
      <div className="cf-crash" role="alert">
        <span className="cf-crash-icon"><Icon name="refresh" size={22} /></span>
        <p className="cf-crash-title">这一块出错了</p>
        <p className="cf-crash-detail">{message}</p>
        <div className="cf-crash-actions">
          <Btn variant="primary" size="sm" onClick={() => this.setState({ error: null })}>重试</Btn>
          <Btn size="sm" onClick={() => { try { localStorage.clear() } catch {} location.reload() }}>重置本地数据</Btn>
        </div>
      </div>
    )
  }
}

export function Toast({ text, kind }) {
  return <p className={`cf-toast${kind === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">{text}</p>
}

export function Empty({ icon = 'canvas', title, hint, action }) {
  return (
    <div className="cf-empty">
      <span className="cf-empty-icon"><Icon name={icon} size={28} /></span>
      <p className="cf-empty-title">{title}</p>
      {hint ? <p className="cf-empty-hint">{hint}</p> : null}
      {action}
    </div>
  )
}

export function Caret({ open }) {
  return <Icon name="chevron" size={14} style={{ rotate: open ? '180deg' : '0deg', transition: 'rotate 160ms cubic-bezier(.16,1,.3,1)' }} />
}
