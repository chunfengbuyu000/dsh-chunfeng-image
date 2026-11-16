// 界面原子：一套图标、弹层、提示。图标全部自绘，统一 24 视框、1.6 描边。
import React from 'react'

const PATHS = {
  cursor: <path d="M5 3l14 8-6 1.5L10 20z" />,
  hand: <path d="M8 13V6a2 2 0 114 0v6m0-1V5a2 2 0 114 0v8m0-2V7a2 2 0 114 0v9a6 6 0 01-6 6h-2a6 6 0 01-6-6v-4a2 2 0 114 0v2" />,
  target: <><circle cx="12" cy="12" r="7" /><circle cx="12" cy="12" r="2.5" /><path d="M12 2v3m0 14v3M2 12h3m14 0h3" /></>,
  text: <path d="M5 6h14M12 6v13M9 19h6" />,
  image: <><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="9" cy="10" r="1.6" /><path d="M4 18l5-5 4 4 3-3 4 4" /></>,
  video: <><rect x="3" y="5" width="13" height="14" rx="2" /><path d="M16 10l5-3v10l-5-3z" /></>,
  audio: <><path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" /></>,
  sliders: <path d="M4 7h10M18 7h2M4 12h4M12 12h8M4 17h9M17 17h3M14 5v4M8 10v4M13 15v4" />,
  group: <><rect x="3" y="3" width="8" height="8" rx="1.5" /><rect x="13" y="13" width="8" height="8" rx="1.5" /><path d="M11 11l2 2" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  undo: <path d="M9 7L4 12l5 5M4 12h10a5 5 0 010 10" />,
  redo: <path d="M15 7l5 5-5 5M20 12H10a5 5 0 000 10" />,
  map: <><rect x="3" y="4" width="18" height="16" rx="2" /><path d="M3 10h18M9 10v10M15 10v10" /></>,
  keyboard: <><rect x="2" y="6" width="20" height="12" rx="2" /><path d="M6 10h.01M10 10h.01M14 10h.01M18 10h.01M7 14h10" /></>,
  sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></>,
  moon: <path d="M20 14a8 8 0 11-9.9-9.6A7 7 0 0020 14z" />,
  book: <><path d="M4 5a2 2 0 012-2h13v18H6a2 2 0 01-2-2z" /><path d="M4 17h15" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v3m6-3v3M9 19v3m6-3v3M2 9h3m-3 6h3M19 9h3m-3 6h3" /></>,
  list: <path d="M8 6h13M8 12h13M8 18h13M3.5 6h.01M3.5 12h.01M3.5 18h.01" />,
  canvas: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M3 9h18M9 9v12" /></>,
  close: <path d="M6 6l12 12M18 6L6 18" />,
}

export function Icon({ name, size = 16 }) {
  const body = PATHS[name]
  if (!body) return null
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {body}
    </svg>
  )
}

export function Dialog({ title, children, onClose, wide }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="scrim" onPointerDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <div className={`dialog${wide ? ' dialog--wide' : ''}`} role="dialog" aria-modal="true" aria-label={title}>
        <header className="dialog-head">
          <h2>{title}</h2>
          <button type="button" className="icon-btn" onClick={onClose} aria-label="关闭">
            <Icon name="close" size={16} />
          </button>
        </header>
        <div className="dialog-body">{children}</div>
      </div>
    </div>
  )
}

export function Toast({ text, kind }) {
  return (
    <p className={`toast${kind === 'error' ? ' is-error' : ''}`} role="status" aria-live="polite">{text}</p>
  )
}
