// 界面原子：一套自绘图标（24 视框、1.6 描边）+ 弹层 / 提示。
import React from 'react'

const P = {
  canvas: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 10v10" /></>,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" /></>,
  book: <><path d="M5 4h12a2 2 0 012 2v14H7a2 2 0 01-2-2z" /><path d="M5 17h14" /></>,
  folder: <path d="M3 7a2 2 0 012-2h4l2 2.5h8a2 2 0 012 2V18a2 2 0 01-2 2H5a2 2 0 01-2-2z" />,
  sliders: <path d="M4 7h9M17 7h3M4 12h4M12 12h8M4 17h9M17 17h3M13 5v4M8 10v4M13 15v4" />,
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
  map: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 10v10M15 10v10" /></>,
  keyboard: <><rect x="2" y="6.5" width="20" height="11" rx="2" /><path d="M6 10.5h.01M10 10.5h.01M14 10.5h.01M18 10.5h.01M7 14h10" /></>,
  link: <><path d="M9 15l6-6" /><path d="M10.5 6.5l1.8-1.8a4 4 0 015.6 5.6l-1.8 1.8" /><path d="M13.5 17.5l-1.8 1.8a4 4 0 01-5.6-5.6l1.8-1.8" /></>,
  sparkle: <><path d="M12 3l1.6 4.9L18.5 9.5 13.6 11.1 12 16l-1.6-4.9L5.5 9.5l4.9-1.6z" /><path d="M18 15l.9 2.6 2.6.9-2.6.9L18 21l-.9-2.6-2.6-.9 2.6-.9z" /></>,
  play: <path d="M8 5l11 7-11 7z" />,
  stop: <rect x="6" y="6" width="12" height="12" rx="1.5" />,
  grid: <><path d="M4 9h16M4 15h16M9 4v16M15 4v16" /></>,
  back: <><path d="M10 6l-5 6 5 6" /><path d="M5 12h14" /></>,
  arrowUp: <><path d="M12 19V5" /><path d="M6 11l6-6 6 6" /></>,
  frame: <><path d="M5 8V6a1 1 0 011-1h2M16 5h2a1 1 0 011 1v2M19 16v2a1 1 0 01-1 1h-2M8 19H6a1 1 0 01-1-1v-2" /></>,
  bars: <><path d="M5 15v3M9.5 10v8M14 6v12M18.5 12v6" /></>,
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

export function IconBtn({ name, label, size = 16, ...rest }) {
  return (
    <button type="button" className="cf-icon-btn" aria-label={label} title={label} {...rest}>
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
