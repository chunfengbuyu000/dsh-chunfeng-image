// 春风画布 · 外壳：顶栏导航 + 模型助手 + 右侧助手栏 + 页面路由 + 状态
import React from 'react'
import css from './css.js'
import { Boundary, Dialog, Icon, IconBtn, Toast } from './ui.jsx'
import {
  VIEWS, initialState, newCanvas, newId, makeNode, seedCanvas, sanitizeState,
  currentView, navigate, openCanvasIn, closeCanvasIn,
} from './store.js'
import { fetchModels, modelLabel, streamText } from './api.js'
import { CanvasListPage, CanvasEditor } from './pages/canvas.jsx'
import { StudioPage } from './pages/studio.jsx'
import { PromptsPage } from './pages/prompts.jsx'
import { AssetsPage } from './pages/assets.jsx'
import { ConfigPage } from './pages/config.jsx'

const STORE_KEY = 'dsh-chunfeng-image:state:v2'

// 顶栏四项；「配置」移到右侧齿轮
const NAV = [
  { id: 'canvas', label: '画布', icon: 'canvas' },
  { id: 'studio', label: '生图', icon: 'image' },
  { id: 'prompts', label: '提示词', icon: 'book' },
  { id: 'assets', label: '资产', icon: 'folder' },
]

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw)
    return parsed && typeof parsed === 'object' ? parsed : null
  } catch {
    return null
  }
}

export function App() {
  const [state, setState] = React.useState(() => {
    const saved = load()
    if (saved) return sanitizeState(saved)
    const init = initialState()
    init.canvases = [{ ...newCanvas('霓虹街角'), ...seedCanvas() }]
    init.openCanvasId = null
    return init
  })

  // 画布输入条与助手共用这一份草稿：谁显示谁持有，内容不丢
  const [draft, setDraft] = React.useState(() => (typeof window !== 'undefined' && window.__CF_DEV_PROMPT ? window.__CF_DEV_PROMPT : ''))
  const [studioPrompt, setStudioPrompt] = React.useState('')
  const [returnTo, setReturnTo] = React.useState(null)
  const [toast, setToast] = React.useState(null)
  const [dockOpen, setDockOpen] = React.useState(false)
  const [modelPick, setModelPick] = React.useState(false)
  const [models, setModels] = React.useState(null)
  const [streaming, setStreaming] = React.useState(false)
  const toastTimer = React.useRef(0)
  const streamAbort = React.useRef(null)

  React.useEffect(() => {
    let alive = true
    fetchModels()
      .then(m => { if (alive) setModels(m) })
      .catch(err => { if (alive) setModels({ providers: [], error: err.message }) })
    return () => { alive = false }
  }, [])

  React.useEffect(() => {
    try { localStorage.setItem(STORE_KEY, JSON.stringify(state)) } catch { /* 存不下就算了 */ }
  }, [state])

  const say = React.useCallback((text, kind) => {
    setToast({ text, kind, at: Date.now() })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2200)
  }, [])
  React.useEffect(() => () => { clearTimeout(toastTimer.current); streamAbort.current?.abort() }, [])

  const patch = (p) => setState(s => ({ ...s, ...p }))
  const openCanvas = state.canvases.find(c => c.id === state.openCanvasId) || null
  const view = currentView(state)
  const messages = state.assistantMessages || []
  const selection = state.assistantModel || models?.default || null
  const selectionLabel = modelLabel(models, selection) || '模型'

  const go = (target) => {
    setReturnTo(null)
    setDockOpen(false)
    setState(s => navigate(s, target))
  }

  const updateCanvas = (canvasId, p) =>
    setState(s => ({
      ...s,
      canvases: s.canvases.map(c => {
        if (c.id !== canvasId) return c
        const next = typeof p === 'function' ? p(c) : p
        return { ...c, ...next, updatedAt: Date.now() }
      }),
    }))

  const createCanvas = () => {
    const cv = newCanvas()
    setState(s => ({ ...s, canvases: [cv, ...s.canvases], openCanvasId: cv.id, view: 'canvas' }))
    say('已新建画布')
  }

  const importCanvas = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json,application/json'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      try {
        const data = JSON.parse(await file.text())
        const cv = {
          ...newCanvas(data.name || '导入的画布'),
          nodes: Array.isArray(data.nodes) ? data.nodes : [],
          edges: Array.isArray(data.edges) ? data.edges : [],
          grid: data.grid || 'dots',
        }
        setState(s => ({ ...s, canvases: [cv, ...s.canvases], openCanvasId: cv.id, view: 'canvas' }))
        say('画布已导入')
      } catch {
        say('导入失败，请检查文件格式', 'error')
      }
    }
    input.click()
  }

  /** 使用一条提示词：在画布里新建节点，否则填进生图工作台。 */
  const usePrompt = (p) => {
    if (openCanvas) {
      const node = {
        id: newId('i'), type: 'image',
        x: 220 + openCanvas.nodes.length * 26, y: 220 + openCanvas.nodes.length * 20,
        w: 240, h: 268, name: '', status: 'idle', z: 2,
        prompt: p.text, ratio: state.defaults.image.ratio || '1:1', locked: true,
      }
      updateCanvas(openCanvas.id, { nodes: [...openCanvas.nodes, node] })
      say(`已用「${p.title}」新建图片节点`)
      return
    }
    setStudioPrompt(p.text)
    patch({ view: 'studio', openCanvasId: null })
    say(`已填入「${p.title}」`)
  }

  // ---------- 助手 ----------

  const setAssistantModel = (sel) => { patch({ assistantModel: sel || null }); setModelPick(false) }

  const sendAssistant = async () => {
    const text = draft.trim()
    if (!text || streaming) return
    const user = { id: newId('m'), role: 'user', text }
    const answer = { id: newId('m'), role: 'assistant', text: '' }
    const history = [...messages, user]
    patch({ assistantMessages: [...history, answer] })
    setDraft('')
    const controller = new AbortController()
    streamAbort.current = controller
    setStreaming(true)
    const write = (updater) => setState(s => ({
      ...s,
      assistantMessages: (s.assistantMessages || []).map(m => (m.id === answer.id ? updater(m) : m)),
    }))
    try {
      let last = 0
      let acc = ''
      await streamText({
        model: state.assistantModel || null,
        messages: history.map(m => ({ role: m.role, text: m.text })),
        signal: controller.signal,
        onDelta: (_d, all) => {
          acc = all
          const now = Date.now()
          if (now - last > 60) { last = now; write(m => ({ ...m, text: all })) }
        },
      })
      write(m => ({ ...m, text: acc }))
    } catch (err) {
      write(m => ({ ...m, text: `${m.text || ''}\n\n（失败：${err.message}）` }))
    } finally {
      setStreaming(false)
      streamAbort.current = null
    }
  }

  const stopAssistant = () => { streamAbort.current?.abort(); setStreaming(false) }

  const insertMessageToCanvas = (msg) => {
    const target = openCanvas
    if (!target) { say('先打开一张画布再插入'); return }
    const node = makeNode('text', { x: 420, y: 320 }, { text: msg.text })
    node.x = 160 + (target.nodes.length % 6) * 28
    node.y = 180 + (target.nodes.length % 6) * 24
    updateCanvas(target.id, { nodes: [...target.nodes, node] })
    say('已插入画布')
  }

  return (
    <div className="cf-app">
      <style>{css}</style>
      <div className="cf-ambient" aria-hidden="true"><i /><i /><i /></div>

      <header className="cf-nav">
        <div className="cf-island cf-island--nav">
          <nav className="cf-nav-glass" aria-label="主导航">
            {NAV.map(item => {
              const on = item.id === 'canvas' ? (view === 'canvas' || view === 'editor') : view === item.id
              return (
                <button key={item.id} type="button" className={on ? 'is-on' : ''}
                  onClick={() => go(item.id)} aria-current={on ? 'page' : undefined}>
                  {item.label}
                </button>
              )
            })}
          </nav>
        </div>

        <div className="cf-nav-right">
          <button type="button" className="cf-glass-btn" onClick={() => setModelPick(true)}
            title={`助手模型：${selectionLabel}`}>
            <Icon name="sparkle" size={14} />
            <span>{selectionLabel}</span>
          </button>
          <button type="button" className="cf-glass-btn cf-glass-btn--icon" title="配置"
            aria-label="配置" onClick={() => go('config')}>
            <Icon name="sliders" size={15} />
          </button>
          <button type="button" className={`cf-glass-btn${dockOpen ? ' is-on' : ''}`}
            aria-pressed={dockOpen} onClick={() => setDockOpen(v => !v)}>
            <Icon name="message" size={14} />
            助手
          </button>
        </div>
      </header>

      <Boundary key={view}>
        {view === 'editor' && openCanvas ? (
          <CanvasEditor
            canvas={openCanvas}
            channels={state.channels}
            defaults={state.defaults.image}
            assistantModel={state.assistantModel || null}
            draft={draft}
            onDraftChange={setDraft}
            showComposer={!dockOpen}
            onChange={(p) => updateCanvas(openCanvas.id, p)}
            onBack={() => setState(s => closeCanvasIn(s))}
            say={say}
          />
        ) : null}

        {view === 'canvas' ? (
          <CanvasListPage
            canvases={state.canvases}
            onOpen={(id) => setState(s => openCanvasIn(s, id))}
            onCreate={createCanvas}
            onRename={(id, name) => updateCanvas(id, { name })}
            onDelete={(id) => setState(s => ({ ...s, canvases: s.canvases.filter(c => c.id !== id), openCanvasId: null }))}
            onImport={importCanvas}
          />
        ) : null}

        {view === 'studio' ? (
          <StudioPage
            channels={state.channels}
            defaults={state.defaults.image}
            records={state.records}
            prompt={studioPrompt}
            onPrompt={setStudioPrompt}
            onCreateRecord={(rec) => setState(s => ({ ...s, records: [rec, ...s.records] }))}
            onDeleteRecords={(ids) => setState(s => ({ ...s, records: s.records.filter(r => !ids.includes(r.id)) }))}
            onLookupPrompts={() => { setReturnTo('studio'); patch({ view: 'prompts', openCanvasId: null }) }}
            say={say}
          />
        ) : null}

        {view === 'prompts' ? (
          <PromptsPage
            prompts={state.prompts}
            sources={state.promptSources}
            returnTo={returnTo}
            onUse={usePrompt}
            onBack={returnTo ? () => { setReturnTo(null); patch({ view: returnTo }) } : null}
          />
        ) : null}

        {view === 'assets' ? (
          <AssetsPage
            assets={state.assets}
            onSave={(next) => patch({ assets: next })}
            onDelete={(id) => setState(s => ({ ...s, assets: s.assets.filter(a => a.id !== id) }))}
            onImport={() => say('资产包导入接 Host 后可用')}
            say={say}
          />
        ) : null}

        {view === 'config' ? (
          <ConfigPage
            tab={state.configTab}
            onTab={(t) => patch({ configTab: t })}
            channels={state.channels}
            onChannels={(channels) => patch({ channels })}
            defaults={state.defaults}
            onDefaults={(defaults) => patch({ defaults })}
            promptSources={state.promptSources}
            onPromptSources={(promptSources) => patch({ promptSources })}
            say={say}
          />
        ) : null}
      </Boundary>

      {dockOpen ? (
        <AssistantDock
          messages={messages}
          draft={draft}
          onDraftChange={setDraft}
          streaming={streaming}
          onSend={sendAssistant}
          onStop={stopAssistant}
          onClose={() => setDockOpen(false)}
          onInsert={insertMessageToCanvas}
          onClear={() => patch({ assistantMessages: [] })}
          canInsert={Boolean(openCanvas)}
          modelLabelText={selectionLabel}
        />
      ) : null}

      {modelPick ? (
        <ModelDialog
          models={models}
          selection={selection}
          onPick={setAssistantModel}
          onClose={() => setModelPick(false)}
        />
      ) : null}

      {toast ? <Toast text={toast.text} kind={toast.kind} /> : null}
    </div>
  )
}

// ---------- 模型选择弹框 ----------

function ModelDialog({ models, selection, onPick, onClose }) {
  const [query, setQuery] = React.useState('')
  const providers = models?.providers || []
  const keyword = query.trim().toLowerCase()
  const filtered = providers
    .map(p => ({
      ...p,
      models: p.models.filter(m => !keyword
        || (m.name || m.id).toLowerCase().includes(keyword)
        || p.name.toLowerCase().includes(keyword)),
    }))
    .filter(p => p.models.length)

  return (
    <Dialog title="助手模型" wide onClose={onClose}
      footer={<span style={{ marginInlineEnd: 'auto', fontSize: 12, color: 'var(--cf-caption)' }}>
        {models?.error ? `读取失败：${models.error}` : `来自 DSH 当前供应的 ${providers.reduce((n, p) => n + p.models.length, 0)} 个模型`}
      </span>}>
      <button type="button" className={`cf-chip${!selection?.model ? ' is-on' : ''}`}
        style={{ justifySelf: 'start' }} onClick={() => onPick(null)}>
        跟随 DSH 默认
      </button>

      <input className="cf-input" value={query} placeholder="搜索模型或厂商"
        onChange={e => setQuery(e.target.value)} />

      {filtered.length === 0 ? (
        <p style={{ fontSize: 13, color: 'var(--cf-muted)' }}>
          {models === null ? '正在读取模型…' : keyword ? '没有匹配的模型' : 'DSH 里还没有可用的模型'}
        </p>
      ) : (
        <div style={{ display: 'grid', gap: 'var(--cf-sp-3)' }}>
          {filtered.map(p => (
            <div key={p.id} style={{ display: 'grid', gap: 2 }}>
              <p style={{ fontSize: 12, color: 'var(--cf-caption)', paddingInline: 4 }}>{p.name}</p>
              {p.models.map(m => {
                const on = selection?.provider === p.id && selection?.model === m.id
                return (
                  <button key={m.id} type="button" className={`cf-menu-item${on ? ' is-on' : ''}`}
                    onClick={() => onPick({ provider: p.id, model: m.id })}>
                    <span className="cf-menu-label">{m.name}</span>
                    {on ? <Icon name="check" size={14} /> : null}
                  </button>
                )
              })}
            </div>
          ))}
        </div>
      )}
    </Dialog>
  )
}

// ---------- 助手侧栏 ----------

function AssistantDock({ messages, draft, onDraftChange, streaming, onSend, onStop, onClose, onInsert, onClear, canInsert, modelLabelText }) {
  const bodyRef = React.useRef(null)
  const inputRef = React.useRef(null)
  const imeAt = React.useRef(0)

  React.useEffect(() => {
    const el = bodyRef.current
    if (el) el.scrollTop = el.scrollHeight
  }, [messages])

  React.useEffect(() => { inputRef.current?.focus() }, [])

  return (
    <aside className="cf-dock" aria-label="助手">
      <header className="cf-dock-head">
        <Icon name="message" size={15} />
        <span className="cf-dock-title">助手</span>
        <span style={{ fontSize: 12, color: 'var(--cf-caption)' }}>{modelLabelText}</span>
        {messages.length ? (
          <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" onClick={onClear}>清空</button>
        ) : null}
        <IconBtn name="close" label="关闭助手" onClick={onClose} />
      </header>

      <div className="cf-dock-body" ref={bodyRef}>
        {messages.length === 0 ? (
          <p style={{ fontSize: 13, color: 'var(--cf-muted)', lineHeight: 1.6 }}>
            问点什么，或者把画布输入框里的草稿带过来继续写。
          </p>
        ) : messages.map(m => (
          <div key={m.id} className={`cf-msg cf-msg--${m.role}`}>
            <div className="cf-msg-text">{m.text || (m.role === 'assistant' && streaming ? '…' : '')}</div>
            {m.role === 'assistant' && m.text ? (
              <div className="cf-msg-actions">
                <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" disabled={!canInsert}
                  onClick={() => onInsert(m)}>插入画布</button>
              </div>
            ) : null}
          </div>
        ))}
      </div>

      <div className="cf-dock-foot">
        <textarea
          ref={inputRef}
          className="cf-dock-input"
          value={draft}
          placeholder="给助手说点什么"
          onChange={e => onDraftChange(e.target.value)}
          onCompositionStart={() => { imeAt.current = Date.now() }}
          onCompositionEnd={() => { imeAt.current = Date.now() }}
          onKeyDown={e => {
            if (e.key !== 'Enter') return
            if (e.nativeEvent.isComposing) return
            if (Date.now() - imeAt.current < 500) return
            if (e.shiftKey) return
            e.preventDefault()
            imeAt.current = 0
            onSend()
          }}
        />
        <div className="cf-dock-bar">
          <span style={{ fontSize: 11, color: 'var(--cf-caption)' }}>
            {canInsert ? '回复可插入当前画布' : '打开一张画布后可插入'}
          </span>
          {streaming ? (
            <button type="button" className="cf-send" onClick={onStop} aria-label="停止" data-tip="停止">
              <Icon name="stop" size={13} />
            </button>
          ) : (
            <button type="button" className="cf-send" onClick={onSend} disabled={!draft.trim()}
              aria-label="发送" data-tip="发送">
              <Icon name="arrowUp" size={17} />
            </button>
          )}
        </div>
      </div>
    </aside>
  )
}
