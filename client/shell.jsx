// 春风画布 · 外壳：顶栏导航 + 模型助手 + 右侧助手栏 + 页面路由 + 状态
import React from 'react'
import css from './css.js'
import { Boundary, Dialog, Icon, IconBtn, Toast } from './ui.jsx'
import {
  VIEWS, initialState, newCanvas, newId, imageSize, makeNode, seedCanvas, sanitizeState,
  currentView, navigate, openCanvasIn, closeCanvasIn, createDraftStore,
} from './store.js'
import { fetchModels, modelLabel, streamText } from './api.js'
import { LS } from './storage/keys.js'
import { makeImageEntry } from './canvas/batch.js'
import { migrate } from './storage/migrate.js'
import { isQuotaError } from './storage/idb.js'
import { saveState, loadState, flushState, loadConfigMirror } from './storage/persist.js'
import {
  BUILTIN_PROMPT_SOURCES,
  hydratePromptCache,
  readPromptCache,
  normalizeSourceRecord,
  mergePromptsWithSources,
  fetchAllSources,
  fetchRemoteImagesToStorage,
} from './prompts/sources.js'
import { CanvasListPage, CanvasEditor } from './pages/canvas.jsx'
import { StudioPage } from './pages/studio.jsx'
import { PromptsPage } from './pages/prompts.jsx'
import { AssetsPage } from './pages/assets.jsx'
import { ConfigPage } from './pages/config.jsx'

// 旧键仍指向 storage/keys.js 的同名常量：迁移器只读不写它。
const STORE_KEY = LS.legacyState

// 顶栏四项；「配置」移到右侧齿轮
const NAV = [
  { id: 'canvas', label: '画布', icon: 'canvas' },
  { id: 'studio', label: '生图', icon: 'image' },
  { id: 'prompts', label: '提示词', icon: 'book' },
  { id: 'assets', label: '资产', icon: 'folder' },
]

// 首屏状态：同步先给一份种子（保证首帧不白屏），随后异步用真实数据替换。
// 顺序很重要：先迁移（把旧 localStorage 搬进 IDB），再读。
function seedState() {
  const init = initialState()
  init.canvases = [{ ...newCanvas('霓虹街角'), ...seedCanvas() }]
  init.openCanvasId = null
  return init
}

export function App() {
  const [state, setState] = React.useState(seedState)
  // hydrated=false 时界面可渲染但不可写盘，避免首帧空 state 覆盖磁盘
  const [hydrated, setHydrated] = React.useState(false)
  const bootedRef = React.useRef(false)

  // 画布输入条与助手共用外部草稿容器：谁显示谁订阅，敲击键盘不触发顶层与画布重渲染
  const draftStore = React.useMemo(
    () => createDraftStore(typeof window !== 'undefined' && window.__CF_DEV_PROMPT ? window.__CF_DEV_PROMPT : ''),
    [],
  )
  const [studioPrompt, setStudioPrompt] = React.useState('')
  // 画布送来工作台的参考图（storageKey）。工作台消费后应当清掉，
  // 否则下次从导航进来还会带着上一张。
  const [studioRef, setStudioRef] = React.useState(null)
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

  // 启动：迁移 → 读 → 置 hydrated。
  // 用 ref 挡住 StrictMode 的二次执行，否则会跑两遍迁移。
  React.useEffect(() => {
    if (bootedRef.current) return
    bootedRef.current = true
    let alive = true
    ;(async () => {
      try {
        const result = await migrate()
        if (result.status === 'done') say(`已迁移 ${result.canvases} 个画布到新存储`)
      } catch (error) {
        // 迁移失败不阻断使用：旧数据还在，只是这次读到的是种子
        say(`本地数据迁移未完成：${error.message}`, 'error')
      }
      try {
        const [promptCache, loadedPack] = await Promise.all([
          hydratePromptCache().catch(() => readPromptCache()),
          loadState(),
        ])
        const { state: loaded, from } = loadedPack
        let restored = (loaded && from !== 'none') ? sanitizeState(loaded) : null

        const applyPromptsSync = (st) => {
          const normSources = (st.promptSources || []).map((s) => {
            const norm = normalizeSourceRecord(s)
            return {
              id: norm.id,
              name: norm.name,
              url: norm.url,
              fallbackUrl: norm.fallbackUrl,
              homepage: norm.homepage,
              enabled: norm.enabled,
              builtIn: norm.builtIn,
            }
          })
          return {
            ...st,
            promptSources: normSources,
            prompts: mergePromptsWithSources(st.prompts, normSources, promptCache),
          }
        }

        if (alive && restored) {
          setState(applyPromptsSync(restored))
        }

        // 浏览器存储里没有渠道或缺少镜像恢复字段时，用本机文件兜底恢复。
        const browserChannels = (loaded && Array.isArray(loaded.channels)) ? loaded.channels : []
        if (alive && browserChannels.length === 0) {
          const mirror = await loadConfigMirror()
          if (alive && mirror?.channels?.length) {
            setState((s) => applyPromptsSync(sanitizeState({
              ...s,
              channels: mirror.channels,
              defaults: mirror.defaults || s.defaults,
              assistantModel: mirror.assistantModel ?? s.assistantModel,
              promptSources: (s.promptSources?.length ? s.promptSources : mirror.promptSources) || s.promptSources,
            })))
            say(`已从本机文件恢复 ${mirror.channels.length} 个渠道`)
          }
        }
      } catch { /* 读失败就保留种子 */ }
      if (alive) setHydrated(true)
    })()
    return () => { alive = false }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // 写盘：hydrated 之前一律不写（防首帧覆盖），之后 400ms 防抖 + canvases 引用短路。
  React.useEffect(() => {
    if (!hydrated) return
    saveState(state, {
      onError: (error, info) => {
        say(info?.quota ? '本地存储已满，本次修改可能丢失' : `保存失败：${error.message}`, 'error')
      },
    })
  }, [state, hydrated])

  // 关页面/切后台时立刻冲刷，否则防抖窗口内的最后一笔会丢
  React.useEffect(() => {
    const flush = () => { void flushState() }
    const onHide = () => { if (document.visibilityState === 'hidden') flush() }
    window.addEventListener('pagehide', flush)
    document.addEventListener('visibilitychange', onHide)
    return () => {
      window.removeEventListener('pagehide', flush)
      document.removeEventListener('visibilitychange', onHide)
    }
  }, [])

  // 给回调读最新 state 用：useCallback 的依赖里放 state 会让它每帧重建
  const stateRef = React.useRef(state)
  stateRef.current = state

  const say = React.useCallback((text, kind) => {
    setToast({ text, kind, at: Date.now() })
    clearTimeout(toastTimer.current)
    toastTimer.current = setTimeout(() => setToast(null), 2200)
  }, [])
  React.useEffect(() => () => { clearTimeout(toastTimer.current); streamAbort.current?.abort() }, [])

  /**
   * 把工作台的生成结果送到画布，成为图片节点。
   *
   * 几个决定：
   *   - 目标画布：当前打开的 → 第一个 → 都没有就新建
   *   - 一批多张塞进**同一个节点**（批量图组），而不是铺成 N 个节点
   *   - 落点：放在已有节点包围盒的右侧，不压在别人身上
   */
  /** 画布节点 → 工作台：带上提示词和这张图当参考图。 */
  const sendToStudio = React.useCallback((node) => {
    const key = node?.storageKey || node?.images?.[0]?.storageKey || ''
    // 离开编辑器必须同时清掉 openCanvasId —— currentView 优先看它，
    // 只改 view 是切不走的（这里踩过一次）。
    patch({ view: 'studio', openCanvasId: null })
    setStudioPrompt(node?.prompt || '')
    setStudioRef(key ? { storageKey: key, prompt: node.prompt || '' } : null)
    say(key ? '已送去工作台（图作为参考图）' : '已送去工作台（这个节点没有图片）')
  }, [say])

  const sendToCanvas = React.useCallback((record, opts = {}) => {
    const images = (record?.images || []).filter((i) => i.storageKey)
    if (!images.length) {
      say('这批图没有本地副本，先重新生成再送', 'error')
      return null
    }

    // 目标画布要在**更新之外**先确定：setState 的 updater 是异步执行的，
    // 在里面赋值给外部变量，等 say() 读到的还是空串（之前的 bug：
    // 提示语永远显示兜底名「生成结果」）。
    const snap = stateRef.current
    const existing = snap.canvases.find((c) => c.id === snap.openCanvasId) || snap.canvases[0] || null
    const fallbackName = (record.prompt || '生成结果').slice(0, 16)
    const targetId = existing?.id || null
    const targetName = existing?.name || fallbackName

    setState((s) => {
      const cv = (targetId ? s.canvases.find((c) => c.id === targetId) : null)
        || newCanvas(fallbackName)

      // 找落点：最右侧节点再往右 80px，纵向对齐最上面的节点
      const nodes = cv.nodes || []
      let x = 80
      let y = 120
      if (nodes.length) {
        let maxRight = -Infinity
        let minTop = Infinity
        for (const n of nodes) {
          if (n.type === 'group') continue
          maxRight = Math.max(maxRight, n.x + (n.w || 240))
          minTop = Math.min(minTop, n.y)
        }
        if (Number.isFinite(maxRight)) {
          x = maxRight + 80
          y = Number.isFinite(minTop) ? minTop : 120
        }
      }

      const entries = images.map((img, i) => makeImageEntry({
        storageKey: img.storageKey,
        width: img.width || 0,
        height: img.height || 0,
        bytes: img.bytes || 0,
        mimeType: img.mimeType || '',
        prompt: record.prompt || '',
      }))
      // 第一张决定节点尺寸：按真实宽高比算，别一律当方图
      const first = entries[0]
      const size = first?.width && first?.height
        ? imageSize(`${first.width}:${first.height}`)
        : imageSize('1:1')

      const node = {
        ...makeNode('image', { x, y }, { prompt: record.prompt, ratio: record.ratio }),
        x,
        y,
        ...size,
        status: 'done',
        prompt: record.prompt || '',
        images: entries,
        primaryImageId: first?.id || '',
        storageKey: first?.storageKey || '',
      }

      const nextCanvas = { ...cv, nodes: [...nodes, node], updatedAt: Date.now() }
      const canvases = s.canvases.some((c) => c.id === cv.id)
        ? s.canvases.map((c) => (c.id === cv.id ? nextCanvas : c))
        : [...s.canvases, nextCanvas]

      return {
        ...s,
        canvases,
        // 送完就留在工作台，只是把这张画布设为当前，用户点「画布」直接看到
        openCanvasId: cv.id,
        canvasPickedIds: [node.id],
      }
    })

    say(`已送到画布「${targetName}」`)
    return targetName
  }, [say])


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

  const enableBuiltinSources = React.useCallback(async () => {
    const existingUrls = new Set((stateRef.current.promptSources || []).map((s) => normalizeSourceRecord(s).url))
    const toAdd = BUILTIN_PROMPT_SOURCES.filter((b) => !existingUrls.has(b.url))
    const mergedSources = [...(stateRef.current.promptSources || []), ...toAdd]
    setState((s) => ({ ...s, promptSources: mergedSources }))
    say('正在拉取官方提示词来源…')
    const out = await fetchAllSources(mergedSources, { onlyMissingOrFailed: true })
    setState((s) => ({
      ...s,
      promptSources: mergedSources,
      prompts: mergePromptsWithSources(s.prompts, mergedSources, out.cache),
    }))
    const okCount = out.results.filter((r) => r.ok).length
    const failCount = out.results.length - okCount
    if (failCount === 0) say(`已加载 ${out.prompts.length} 条提示词`)
    else say(`本次 ${okCount} 成功 / ${failCount} 失败，共 ${out.prompts.length} 条可用`, 'error')
  }, [say])

  const copyPrompt = React.useCallback(async (p) => {
    const text = p?.text || p?.prompt || ''
    if (!text) return
    try {
      await navigator.clipboard.writeText(text)
      say('提示词已复制')
    } catch {
      const ta = document.createElement('textarea')
      ta.value = text
      ta.style.cssText = 'position:fixed;left:-9999px;top:0'
      document.body.appendChild(ta)
      ta.select()
      try {
        document.execCommand('copy')
        say('提示词已复制')
      } catch {
        say('复制失败，浏览器不允许剪贴板', 'error')
      } finally {
        document.body.removeChild(ta)
      }
    }
  }, [say])

  const savePromptAsAsset = React.useCallback((p) => {
    if (!p) return
    const asset = {
      id: newId('a'),
      kind: 'text',
      title: p.title || '收藏的提示词',
      text: p.text || p.prompt || '',
      coverUrl: p.coverUrl || '',
      tags: Array.isArray(p.tags) ? p.tags : [],
      source: p.category || p.sourceName || '提示词中心',
      at: Date.now(),
    }
    setState((s) => ({ ...s, assets: [asset, ...s.assets] }))
    say('已收藏到我的资产')
  }, [say])

  /** 使用一条提示词：在画布里新建节点，否则填进生图工作台，支持同步拉取配套参考图。 */
  const usePrompt = React.useCallback(async (p, { withRefs = true } = {}) => {
    const text = p?.text || p?.prompt || ''
    const refUrls = withRefs && Array.isArray(p?.referenceImageUrls) ? p.referenceImageUrls.filter(Boolean) : []
    const curOpenCanvas = stateRef.current.canvases.find((c) => c.id === stateRef.current.openCanvasId) || null

    if (curOpenCanvas) {
      const ratio = stateRef.current.defaults?.image?.ratio || '1:1'
      const size = imageSize(ratio)
      const baseX = 220 + curOpenCanvas.nodes.length * 26
      const baseY = 220 + curOpenCanvas.nodes.length * 20
      const targetNode = {
        id: newId('i'), type: 'image',
        x: baseX, y: baseY,
        w: size.w, h: size.h, name: '', status: 'idle', z: 2,
        prompt: text, ratio, locked: true,
      }
      updateCanvas(curOpenCanvas.id, (c) => ({ nodes: [...c.nodes, targetNode] }))
      if (refUrls.length) {
        say(`已用「${p.title}」建节点，正在加载 ${refUrls.length} 张配套参考图…`)
        const downloaded = await fetchRemoteImagesToStorage(refUrls, { max: 4 })
        if (downloaded.length) {
          const refNodes = downloaded.map((it, idx) => {
            const aspect = it.width && it.height ? it.width / it.height : 1
            const rw = 200
            const rh = Math.round(rw / Math.max(0.25, Math.min(4, aspect))) + 28
            return {
              ...makeNode('image', { x: baseX - 280, y: baseY + idx * (rh + 16) }, { w: rw, h: rh }),
              x: baseX - 280,
              y: baseY + idx * (rh + 16),
              status: 'done',
              storageKey: it.storageKey,
              images: [makeImageEntry({ storageKey: it.storageKey, width: it.width, height: it.height, prompt: '' })],
              primaryImageId: '',
              name: `参考图 ${idx + 1}`,
            }
          }).map((rn) => ({ ...rn, primaryImageId: rn.images[0]?.id || '' }))
          const refEdges = refNodes.map((rn) => ({ id: newId('e'), from: rn.id, to: targetNode.id }))
          updateCanvas(curOpenCanvas.id, (c) => ({
            nodes: [...c.nodes, ...refNodes],
            edges: [...c.edges, ...refEdges],
          }))
          say(`已挂载 ${downloaded.length} 张配套参考图到画布节点`)
          return
        }
      }
      say(`已用「${p.title}」新建图片节点`)
      return
    }

    setStudioPrompt(text)
    patch({ view: 'studio', openCanvasId: null })
    if (refUrls.length) {
      say(`已填入「${p.title}」，正在加载 ${refUrls.length} 张配套参考图…`)
      const downloaded = await fetchRemoteImagesToStorage(refUrls, { max: 4 })
      if (downloaded.length) {
        setStudioRef(downloaded.map((it) => ({ storageKey: it.storageKey, name: it.name })))
        say(`已填入提示词并加载 ${downloaded.length} 张参考图`)
      } else {
        say(`已填入「${p.title}」（配套参考图拉取失败）`)
      }
    } else {
      say(`已填入「${p.title}」`)
    }
  }, [say])

  // ---------- 助手 ----------

  const setAssistantModel = (sel) => { patch({ assistantModel: sel || null }); setModelPick(false) }

  const sendAssistant = async () => {
    const text = draftStore.get().trim()
    if (!text || streaming) return
    const user = { id: newId('m'), role: 'user', text }
    const answer = { id: newId('m'), role: 'assistant', text: '' }
    const history = [...messages, user]
    patch({ assistantMessages: [...history, answer] })
    draftStore.set('')
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

  React.useLayoutEffect(() => {
    if (typeof document === 'undefined') return
    if (document.querySelector('style[data-cf-styles]')) return
    const existing = [...document.head.querySelectorAll('style')].find((s) => s.textContent?.includes('.cf-app'))
    if (existing) { existing.setAttribute('data-cf-styles', '1'); return }
    const el = document.createElement('style')
    el.setAttribute('data-cf-styles', '1')
    el.textContent = css
    document.head.appendChild(el)
  }, [])

  const themeCls = state.theme === 'dark' ? ' dark' : state.theme === 'light' ? ' light' : ''

  return (
    <div className={`cf-app${themeCls}`}>

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
            <Icon name="gear" size={15} />
          </button>
          <button type="button" className={`cf-glass-btn cf-glass-btn--dock${dockOpen ? ' is-on' : ''}`}
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
            prompts={state.prompts}
            onSendToStudio={sendToStudio}
            draftStore={draftStore}
            showComposer={!dockOpen}
            onChange={(p) => updateCanvas(openCanvas.id, p)}
            onBack={() => setState(s => closeCanvasIn(s))}
            onSaveAsset={(asset) => setState((st) => ({ ...st, assets: [asset, ...st.assets] }))}
            showToolbarLabels={state.showToolbarLabels}
            theme={state.theme || 'system'}
            onTheme={(theme) => patch({ theme })}
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
            assets={state.assets}
            prompts={state.prompts}
            prompt={studioPrompt}
            onPrompt={setStudioPrompt}
            onCreateRecord={(rec) => setState(s => ({ ...s, records: [rec, ...s.records] }))}
            onUpdateRecord={(id, updater) => setState(s => ({
              ...s,
              records: s.records.map(r => r.id === id ? (typeof updater === 'function' ? updater(r) : { ...r, ...updater }) : r),
            }))}
            onDeleteRecords={(ids) => setState(s => ({ ...s, records: s.records.filter(r => !ids.includes(r.id)) }))}
            onSaveAsset={(asset) => setState(s => ({ ...s, assets: [asset, ...s.assets] }))}
            onLookupPrompts={() => { setReturnTo('studio'); patch({ view: 'prompts', openCanvasId: null }) }}
            onSendToCanvas={sendToCanvas}
            initialRefs={Array.isArray(studioRef) ? studioRef : null}
            initialRef={!Array.isArray(studioRef) ? studioRef : null}
            onConsumeRef={() => setStudioRef(null)}
            say={say}
          />
        ) : null}

        {view === 'prompts' ? (
          <PromptsPage
            prompts={state.prompts}
            sources={state.promptSources}
            returnTo={returnTo}
            onUse={usePrompt}
            onCopy={copyPrompt}
            onSaveAsset={savePromptAsAsset}
            onEnableBuiltins={enableBuiltinSources}
            onBack={returnTo ? () => { setReturnTo(null); patch({ view: returnTo }) } : null}
          />
        ) : null}

        {view === 'assets' ? (
          <AssetsPage
            assets={state.assets}
            onSave={(next) => patch({ assets: next })}
            onDelete={(id) => setState(s => ({ ...s, assets: s.assets.filter(a => a.id !== id) }))}
            onImport={(imported) => setState(s => ({ ...s, assets: [...imported, ...s.assets] }))}
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
            onPromptSources={(promptSources) => setState((s) => ({
              ...s,
              promptSources,
              prompts: mergePromptsWithSources(s.prompts, promptSources, readPromptCache()),
            }))}
            showToolbarLabels={state.showToolbarLabels}
            onShowToolbarLabels={(v) => patch({ showToolbarLabels: v })}
            theme={state.theme || 'system'}
            onTheme={(theme) => patch({ theme })}
            onPrompts={(_pulled, nextCache) => {
              // 按当前启用源与最新缓存精确重放合并，既覆盖更新已有条目的封面/正文，也清除被删来源的残留
              setState((s) => ({
                ...s,
                prompts: mergePromptsWithSources(s.prompts, s.promptSources, nextCache || readPromptCache()),
              }))
            }}
            onUsePrompt={usePrompt}
            onCopyPrompt={copyPrompt}
            onSavePromptAsset={savePromptAsAsset}
            say={say}
            state={state}
          />
        ) : null}
      </Boundary>

      {dockOpen ? (
        <AssistantDock
          messages={messages}
          draftStore={draftStore}
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

function AssistantDock({ messages, draftStore, streaming, onSend, onStop, onClose, onInsert, onClear, canInsert, modelLabelText }) {
  const draft = React.useSyncExternalStore(draftStore.subscribe, draftStore.get, draftStore.get)
  const onDraftChange = (v) => draftStore.set(v)
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
