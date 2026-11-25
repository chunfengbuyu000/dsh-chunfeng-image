// 生图工作台：三栏（300px 生成记录 / 400px 表单 / 1fr 生成结果），支持多图参考、单槽流式与重试、全量持久化与弹窗挑选
import React from 'react'
import { Btn, Dialog, Empty, Icon, IconBtn } from '../ui.jsx'
import {
  resolveMediaUrl,
  ensureImagePreview,
  getCachedMediaUrl,
  getCachedPreviewUrl,
  putMedia,
  makeStorageKey,
  getMedia,
  readBlobSize,
  blobToDataUrl,
  mediaKeyToDataUrl,
} from '../gen/result.js'
import { resolveImageDimensions, parseSizeString, clampSide } from '../gen/sizes.js'
import { QUALITIES, RATIOS, RESOLUTIONS, modelsWithCap, findModel, ratioValue, newId } from '../store.js'
import { generate as runGenerate, isAbort } from '../gen/index.js'
import { PromptPickerDialog } from '../prompts/prompt-ui.jsx'
import { fetchRemoteImagesToStorage } from '../prompts/sources.js'

function fmtBytes(n) {
  if (!n) return ''
  if (n < 1024) return `${n} B`
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(0)} KB`
  return `${(n / 1024 / 1024).toFixed(2)} MB`
}

function fmtDuration(ms) {
  if (!ms || ms < 0) return ''
  if (ms < 1000) return `${ms}ms`
  return `${(ms / 1000).toFixed(1)}s`
}

function AspectBox({ ratio }) {
  const ar = ratioValue(ratio)
  const max = 12
  const w = ar >= 1 ? max : Math.max(5, Math.round(max * ar))
  const h = ar >= 1 ? Math.max(5, Math.round(max / ar)) : max
  return <span className="cf-aspect-box" style={{ width: w, height: h }} aria-hidden="true" />
}

/** 从 IndexedDB storageKey 解析图片并缓存展示，保证重启后记录依旧显示真图。 */
function StoredImage({ storageKey, url = '', alt = '', preferPreview = true, className, style, onClick }) {
  const cached = storageKey
    ? (preferPreview ? (getCachedPreviewUrl(storageKey) || getCachedMediaUrl(storageKey)) : getCachedMediaUrl(storageKey))
    : ''
  const [src, setSrc] = React.useState(() => cached || url || '')

  React.useEffect(() => {
    let alive = true
    if (!storageKey) { setSrc(url || ''); return () => { alive = false } }
    const init = preferPreview
      ? (getCachedPreviewUrl(storageKey) || getCachedMediaUrl(storageKey))
      : getCachedMediaUrl(storageKey)
    if (init) setSrc(init)
    if (preferPreview) {
      ensureImagePreview(storageKey).then((u) => { if (alive && u) setSrc(u) }).catch(() => {})
    }
    resolveMediaUrl(storageKey).then((u) => {
      if (!alive) return
      if (!preferPreview && u) setSrc(u)
      else setSrc((prev) => prev || u || url || '')
    }).catch(() => { if (alive && url) setSrc((prev) => prev || url) })
    return () => { alive = false }
  }, [storageKey, url, preferPreview])

  if (!src) return null
  return <img src={src} alt={alt} className={className} style={style} loading="lazy" decoding="async" onClick={onClick} />
}

export function StudioPage({
  channels, defaults, records = [], assets = [], prompts = [],
  prompt, onPrompt, onCreateRecord, onUpdateRecord, onDeleteRecords, onSaveAsset,
  onLookupPrompts, onSendToCanvas, initialRef, initialRefs, onConsumeRef, say,
}) {
  const setPrompt = onPrompt
  const initRatio = defaults?.ratio || '1:1'
  const initRes = defaults?.resolution || '自动'
  const initDims = parseSizeString(resolveImageDimensions({ resolution: initRes, ratio: initRatio, align16: true })) || { width: 1024, height: 1024 }

  const [ratio, setRatio] = React.useState(initRatio)
  const [quality, setQuality] = React.useState(defaults?.quality || '自动')
  const [resolution, setResolution] = React.useState(initRes)
  const [transparent, setTransparent] = React.useState(Boolean(defaults?.transparent))
  const [modelKey, setModelKey] = React.useState(defaults?.modelKey || '')
  const [w, setW] = React.useState(initDims.width)
  const [h, setH] = React.useState(initDims.height)
  const [align16, setAlign16] = React.useState(true)
  const [count, setCount] = React.useState(Math.max(1, Math.min(10, defaults?.count || 1)))

  const [picked, setPicked] = React.useState([])
  const [activeRecordId, setActiveRecordId] = React.useState(null)
  const [refs, setRefs] = React.useState([])
  const [busy, setBusy] = React.useState(false)
  const [pickerOpen, setPickerOpen] = React.useState(false)
  const [promptModalOpen, setPromptModalOpen] = React.useState(false)
  const [assetModalOpen, setAssetModalOpen] = React.useState(false)
  const [viewing, setViewing] = React.useState(null)
  const [lightbox, setLightbox] = React.useState(null)
  const [retryingSlots, setRetryingSlots] = React.useState({})

  const fileRef = React.useRef(null)
  const abortRef = React.useRef(null)
  // 记录当前进程内正在生成的 ID：刷新后旧 record 残留 pending 状态时可区分是「真在跑」还是「刷新中断」
  const liveRunIds = React.useRef(new Set())

  const models = modelsWithCap(channels, 'image')
  const active = findModel(channels, modelKey) || models[0] || null

  const syncDimensions = React.useCallback((nextRatio, nextRes, nextAlign = align16) => {
    const dims = parseSizeString(resolveImageDimensions({ resolution: nextRes, ratio: nextRatio, align16: nextAlign }))
    if (dims) { setW(dims.width); setH(dims.height) }
  }, [align16])

  const applyRatio = (id) => {
    setRatio(id)
    syncDimensions(id, resolution, align16)
  }

  const applyResolution = (res) => {
    setResolution(res)
    syncDimensions(ratio, res, align16)
  }

  // 画布或提示词库送来的参考图：支持单张（initialRef）及多张（initialRefs）
  React.useEffect(() => {
    let alive = true
    const incoming = Array.isArray(initialRefs) && initialRefs.length
      ? initialRefs
      : (initialRef?.storageKey ? [{ storageKey: initialRef.storageKey, name: '来自画布的图片' }] : [])
    if (!incoming.length) return () => { alive = false }
    Promise.all(incoming.map(async (item, idx) => {
      const url = await resolveMediaUrl(item.storageKey).catch(() => '')
      if (!url) return null
      return { id: newId('ref'), name: item.name || `参考图 ${idx + 1}`, storageKey: item.storageKey, url }
    })).then((resolved) => {
      if (!alive) return
      const valid = resolved.filter(Boolean)
      if (valid.length) setRefs(valid)
      onConsumeRef?.()
    }).catch(() => { onConsumeRef?.() })
    return () => { alive = false }
  }, [initialRef?.storageKey, initialRefs]) // eslint-disable-line react-hooks/exhaustive-deps

  const addRefFiles = async (fileList) => {
    const files = [...(fileList || [])]
    if (!files.length) return
    const added = []
    for (const file of files) {
      if (!/^image\//.test(file.type)) { say?.(`跳过非图片文件：${file.name}`, 'error'); continue }
      const dims = await readBlobSize(file).catch(() => ({ width: 0, height: 0 }))
      const key = makeStorageKey('ref')
      await putMedia(key, file, { mimeType: file.type, source: 'studio-ref', width: dims.width, height: dims.height })
      added.push({
        id: newId('ref'),
        name: file.name || '参考图',
        storageKey: key,
        url: URL.createObjectURL(file),
      })
    }
    if (!added.length) return
    setRefs((prev) => [...prev, ...added])
    say?.(`已加入 ${added.length} 张参考图`)
  }

  const removeRef = (id) => {
    setRefs((prev) => {
      const target = prev.find((r) => r.id === id)
      if (target?.url?.startsWith('blob:')) URL.revokeObjectURL(target.url)
      return prev.filter((r) => r.id !== id)
    })
  }

  const moveRef = (index, delta) => {
    setRefs((prev) => {
      const nextIndex = index + delta
      if (nextIndex < 0 || nextIndex >= prev.length) return prev
      const copy = [...prev]
      const [item] = copy.splice(index, 1)
      copy.splice(nextIndex, 0, item)
      return copy
    })
  }

  const clearRefs = () => {
    setRefs((prev) => {
      prev.forEach((r) => { if (r.url?.startsWith('blob:')) URL.revokeObjectURL(r.url) })
      return []
    })
  }

  const onPickFile = (e) => {
    addRefFiles(e.target.files)
    e.target.value = ''
  }

  const onDrop = (e) => {
    e.preventDefault()
    addRefFiles(e.dataTransfer?.files)
  }

  const takeFromClipboard = async () => {
    try {
      const items = await navigator.clipboard.read()
      const files = []
      for (const item of items) {
        const type = item.types.find((t) => t.startsWith('image/'))
        if (!type) continue
        const blob = await item.getType(type)
        files.push(new File([blob], '剪贴板图片.png', { type }))
      }
      if (!files.length) { say?.('剪贴板里没有图片', 'error'); return }
      await addRefFiles(files)
    } catch {
      say?.('浏览器不允许读剪贴板，请用「上传」', 'error')
    }
  }

  const refItemsToDataUrls = async (list) => {
    const out = []
    for (const r of list || []) {
      if (r.storageKey) {
        const u = await mediaKeyToDataUrl(r.storageKey).catch(() => '')
        if (u) { out.push(u); continue }
      }
      if (r.url?.startsWith('data:')) { out.push(r.url); continue }
      if (r.url) {
        const resp = await fetch(r.url)
        const blob = await resp.blob()
        out.push(await blobToDataUrl(blob))
      }
    }
    return out
  }

  const toSlotDone = (index, item) => ({
    index,
    status: 'done',
    storageKey: item.storageKey || '',
    width: item.width || 0,
    height: item.height || 0,
    bytes: item.bytes || 0,
    mimeType: item.mimeType || 'image/png',
    degraded: Boolean(item.degraded),
    // 只在远程降级时保留远程 url，本地副本靠 storageKey 从 IndexedDB 还原
    url: item.degraded ? (item.url || '') : '',
    revisedPrompt: item.revisedPrompt || '',
    error: '',
  })

  const startNewTask = () => {
    setActiveRecordId(null)
    setPrompt('')
    clearRefs()
  }

  const restoreRecord = async (rec) => {
    if (!rec) return
    setActiveRecordId(rec.id)
    setPrompt(rec.prompt || '')
    if (rec.ratio) setRatio(rec.ratio)
    if (rec.resolution) setResolution(rec.resolution)
    if (rec.quality) setQuality(rec.quality)
    if (typeof rec.transparent === 'boolean') setTransparent(rec.transparent)
    if (rec.count) setCount(Math.max(1, Math.min(10, Number(rec.count) || 1)))
    if (rec.modelKey) setModelKey(rec.modelKey)
    const parsed = parseSizeString(rec.size)
    if (parsed) { setW(parsed.width); setH(parsed.height) }

    if (Array.isArray(rec.refs) && rec.refs.length) {
      const restoredRefs = await Promise.all(rec.refs.map(async (rf) => {
        const url = rf.storageKey ? await resolveMediaUrl(rf.storageKey).catch(() => '') : (rf.url || '')
        return { id: rf.id || newId('ref'), name: rf.name || '参考图', storageKey: rf.storageKey || '', url }
      }))
      setRefs(restoredRefs.filter((r) => r.storageKey || r.url))
    } else {
      clearRefs()
    }
  }

  const generate = async () => {
    const text = prompt.trim()
    if (!text) { say?.('先写一句提示词'); return }
    if (!active) { say?.('先在配置里加一个渠道并选好模型', 'error'); return }
    if (!active.channel?.apiKey) { say?.('这个渠道还没有填 API Key', 'error'); return }
    if (busy) { abortRef.current?.abort(); return }

    const cw = clampSide(w, 256, 4096, align16)
    const ch = clampSide(h, 256, 4096, align16)
    const reqSize = `${cw}x${ch}`
    const reqCount = Math.max(1, Math.min(10, Math.round(Number(count) || 1)))
    const startedAt = Date.now()
    const recId = newId('r')

    const initialSlots = Array.from({ length: reqCount }, (_, index) => ({ index, status: 'pending' }))
    const rec = {
      id: recId,
      prompt: text,
      model: active.label,
      modelKey: active.key,
      ratio,
      size: reqSize,
      quality,
      resolution,
      transparent,
      count: reqCount,
      refs: refs.map((r) => ({ id: r.id, name: r.name, storageKey: r.storageKey || '' })),
      slots: initialSlots,
      images: [],
      startedAt,
      elapsedMs: 0,
      at: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    }
    onCreateRecord?.(rec)
    setActiveRecordId(recId)
    liveRunIds.current.add(recId)
    setBusy(true)

    const controller = new AbortController()
    abortRef.current = controller

    const filled = new Map()
    const commitSlot = (idx, slotObj) => {
      filled.set(idx, slotObj)
      onUpdateRecord?.(recId, (prev) => {
        const nextSlots = (prev.slots || initialSlots).map((s) => (s.index === idx ? slotObj : s))
        return {
          ...prev,
          slots: nextSlots,
          images: nextSlots.filter((s) => s.status === 'done'),
        }
      })
    }

    try {
      const refDataUrls = await refItemsToDataUrls(refs)
      const editing = refDataUrls.length > 0
      const commonParams = {
        size: reqSize,
        ratio,
        resolution,
        quality,
        count: reqCount,
        align16,
        background: transparent ? 'transparent' : undefined,
        outputFormat: transparent ? 'png' : undefined,
      }
      const { items, failed, requested, got } = await runGenerate(
        editing
          ? {
            capability: 'image-edit',
            channel: active.channel,
            model: active.model?.id || active.label,
            prompt: text,
            params: { ...commonParams, imageDataUrls: refDataUrls },
            signal: controller.signal,
            onProgress: ({ stage, index, item }) => {
              if (stage === 'item' && item) commitSlot(index, toSlotDone(index, item))
            },
          }
          : {
            capability: 'image',
            channel: active.channel,
            model: active.model?.id || active.label,
            prompt: text,
            params: commonParams,
            signal: controller.signal,
            onProgress: ({ stage, index, item }) => {
              if (stage === 'item' && item) commitSlot(index, toSlotDone(index, item))
            },
          },
      )

      const elapsedMs = Date.now() - startedAt
      onUpdateRecord?.(recId, (prev) => {
        const baseSlots = prev.slots || initialSlots
        const nextSlots = baseSlots.map((s) => ({ ...s }))
        items.forEach((item, i) => {
          const idx = item.index ?? i
          if (idx >= 0 && idx < nextSlots.length) nextSlots[idx] = toSlotDone(idx, item)
        })
        ;(failed || []).forEach((f, fi) => {
          const idx = typeof f.index === 'number' ? f.index : nextSlots.findIndex((s) => s.status === 'pending')
          const targetIdx = idx >= 0 ? idx : Math.min(nextSlots.length - 1, items.length + fi)
          if (targetIdx >= 0 && nextSlots[targetIdx] && nextSlots[targetIdx].status !== 'done') {
            nextSlots[targetIdx] = { index: targetIdx, status: 'failed', error: f.error || '生成失败' }
          }
        })
        for (let i = 0; i < nextSlots.length; i++) {
          if (nextSlots[i].status === 'pending') {
            nextSlots[i] = { index: i, status: 'failed', error: '上游未返回该张图片' }
          }
        }
        return {
          ...prev,
          slots: nextSlots,
          images: nextSlots.filter((s) => s.status === 'done'),
          elapsedMs,
        }
      })

      if (failed?.length) say?.(`${failed.length} 张失败：${failed[0].error}`, 'error')
      else if (requested && got && got < requested) say?.(`上游只给了 ${got}/${requested} 张`, 'error')
      else say?.(items.length > 1 ? `已生成 ${items.length} 张` : '生成完成')
    } catch (error) {
      const aborted = isAbort(error)
      const msg = aborted ? '已取消' : (error.message || '生成失败')
      if (aborted) say?.('已取消')
      else say?.(msg, 'error')
      onUpdateRecord?.(recId, (prev) => {
        const nextSlots = (prev.slots || initialSlots).map((s) => (
          s.status === 'pending' ? { ...s, status: 'failed', error: msg } : s
        ))
        return {
          ...prev,
          slots: nextSlots,
          images: nextSlots.filter((s) => s.status === 'done'),
          elapsedMs: Date.now() - startedAt,
        }
      })
    } finally {
      liveRunIds.current.delete(recId)
      abortRef.current = null
      setBusy(false)
    }
  }

  /** 单槽重试：只重新生成失败的那一张，不覆盖同组已成功的图。 */
  const retrySlot = async (rec, slotIndex) => {
    const keyTag = `${rec.id}:${slotIndex}`
    if (retryingSlots[keyTag]) return
    const pick = findModel(channels, rec.modelKey) || active
    if (!pick || !pick.channel?.apiKey) {
      say?.('没有可用的模型或未填写 API Key', 'error')
      return
    }
    setRetryingSlots((m) => ({ ...m, [keyTag]: true }))
    liveRunIds.current.add(rec.id)
    onUpdateRecord?.(rec.id, (prev) => ({
      ...prev,
      slots: (prev.slots || []).map((s) => (s.index === slotIndex ? { index: slotIndex, status: 'pending' } : s)),
    }))
    try {
      const refDataUrls = await refItemsToDataUrls(rec.refs?.length ? rec.refs : refs)
      const commonParams = {
        size: rec.size || '1024x1024',
        ratio: rec.ratio || '1:1',
        resolution: rec.resolution || '自动',
        quality: rec.quality || '自动',
        count: 1,
        align16,
        background: rec.transparent ? 'transparent' : undefined,
        outputFormat: rec.transparent ? 'png' : undefined,
      }
      const out = await runGenerate(
        refDataUrls.length
          ? {
            capability: 'image-edit',
            channel: pick.channel,
            model: pick.model?.id || pick.label,
            prompt: rec.prompt,
            params: { ...commonParams, imageDataUrls: refDataUrls },
          }
          : {
            capability: 'image',
            channel: pick.channel,
            model: pick.model?.id || pick.label,
            prompt: rec.prompt,
            params: commonParams,
          },
      )
      const first = out.items?.[0]
      if (!first) throw new Error(out.failed?.[0]?.error || '上游没有返回图片')
      const doneSlot = toSlotDone(slotIndex, first)
      onUpdateRecord?.(rec.id, (prev) => {
        const nextSlots = (prev.slots || []).map((s) => (s.index === slotIndex ? doneSlot : s))
        const updated = { ...prev, slots: nextSlots, images: nextSlots.filter((s) => s.status === 'done') }
        setViewing((v) => (v && v.id === rec.id ? updated : v))
        return updated
      })
      say?.('重绘完成')
    } catch (err) {
      onUpdateRecord?.(rec.id, (prev) => ({
        ...prev,
        slots: (prev.slots || []).map((s) => (s.index === slotIndex ? { index: slotIndex, status: 'failed', error: err.message || '重试失败' } : s)),
      }))
      say?.(err.message || '重试失败', 'error')
    } finally {
      liveRunIds.current.delete(rec.id)
      setRetryingSlots((m) => { const n = { ...m }; delete n[keyTag]; return n })
    }
  }

  const downloadSlot = async (rec, img) => {
    const key = img?.storageKey
    if (!key) { say?.('没有可下载的本地图片', 'error'); return }
    const data = await getMedia(key).catch(() => null)
    if (!data?.blob) { say?.('图片读取失败', 'error'); return }
    const ext = (data.blob.type?.split('/')[1] || 'png').replace('jpeg', 'jpg')
    const url = URL.createObjectURL(data.blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${(rec.prompt || 'studio-image').slice(0, 32).replace(/[/\\:*?"<>|]/g, '')}.${ext}`
    a.click()
    setTimeout(() => URL.revokeObjectURL(url), 3000)
    say?.('已开始下载')
  }

  const saveSlotAsAsset = (rec, img) => {
    if (!img?.storageKey || !onSaveAsset) { say?.('当前无法存为资产', 'error'); return }
    onSaveAsset({
      id: newId('a'),
      kind: 'image',
      title: (rec.prompt || '工作台作品').slice(0, 30),
      text: rec.prompt || '',
      cover: img.storageKey,
      tags: ['工作台'],
      source: '生图工作台',
      at: Date.now(),
    })
    say?.('已存为资产')
  }

  const useSlotAsRef = async (img) => {
    if (!img?.storageKey) { say?.('这张图缺少本地副本', 'error'); return }
    const url = await resolveMediaUrl(img.storageKey).catch(() => '')
    setRefs((prev) => [...prev, { id: newId('ref'), name: '来自生成结果', storageKey: img.storageKey, url }])
    say?.('已设为参考图')
  }

  const togglePick = (id) => setPicked((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  // 右栏展示具备图片/生成槽位的结果记录（从 IDB 持久化 records 自动恢复）
  const resultRecords = React.useMemo(
    () => (records || []).filter((r) => (r.slots && r.slots.length > 0) || (r.images && r.images.length > 0) || r.url),
    [records],
  )

  return (
    <div className="cf-page cf-page--studio">
      <div className="cf-page-inner">
        {promptModalOpen ? (
          <PromptPickerDialog
            prompts={prompts}
            onPick={async (p, opts = {}) => {
              setPromptModalOpen(false)
              setPrompt(p.text || p.prompt || '')
              if (opts.withRefs && p.referenceImageUrls?.length) {
                say?.(`已填入「${p.title || '提示词'}」，正在加载 ${p.referenceImageUrls.length} 张配套参考图…`)
                const fetched = await fetchRemoteImagesToStorage(p.referenceImageUrls, { max: 4 })
                if (fetched.length) {
                  setRefs((prev) => [...prev, ...fetched.map((it) => ({
                    id: it.id, name: it.name, storageKey: it.storageKey, url: it.url,
                  }))])
                  say?.(`已加入 ${fetched.length} 张配套参考图`)
                  return
                }
              }
              say?.(`已填入「${p.title || '提示词'}」`)
            }}
            onManage={() => { setPromptModalOpen(false); onLookupPrompts?.() }}
            onClose={() => setPromptModalOpen(false)}
          />
        ) : null}

        {assetModalOpen ? (
          <AssetPickerModal
            assets={assets}
            onPick={async (a) => {
              const url = await resolveMediaUrl(a.cover).catch(() => '')
              setRefs((prev) => [...prev, { id: newId('ref'), name: a.title || '资产图片', storageKey: a.cover, url }])
              setAssetModalOpen(false)
              say?.('已加入参考图')
            }}
            onClose={() => setAssetModalOpen(false)}
          />
        ) : null}

        {viewing ? (
          <ResultGallery
            record={resultRecords.find((r) => r.id === viewing.id) || viewing}
            onClose={() => setViewing(null)}
            onSend={(rec) => onSendToCanvas?.(rec)}
            onDownload={downloadSlot}
            onSaveAsset={saveSlotAsAsset}
            onUseAsRef={useSlotAsRef}
            onOpenLightbox={(rec, idx) => setLightbox({ record: rec, index: idx })}
            onRetrySlot={retrySlot}
            isRunning={(id) => liveRunIds.current.has(id)}
          />
        ) : null}

        {lightbox ? (
          <StudioLightbox
            record={resultRecords.find((r) => r.id === lightbox.record.id) || lightbox.record}
            initialIndex={lightbox.index}
            onClose={() => setLightbox(null)}
            onDownload={downloadSlot}
            onSaveAsset={saveSlotAsAsset}
            onUseAsRef={useSlotAsRef}
            onSend={onSendToCanvas}
          />
        ) : null}

        <div className="cf-studio">

          {/* 左：生成记录 */}
          <div className="cf-studio-col cf-studio-col--records">
            <div className="cf-card">
              <div className="cf-card-head">
                <span className="cf-card-title">生成记录</span>
                <span className="cf-card-count">{records.length}</span>
              </div>
              <div className="cf-card-body" style={{ display: 'grid', gap: 'var(--cf-sp-3)', alignContent: 'start' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Btn size="sm" icon="plus" onClick={startNewTask}>新建</Btn>
                  <Btn size="sm" onClick={() => setPicked(records.map((r) => r.id))}>全选</Btn>
                  <Btn size="sm" variant="danger" disabled={!picked.length}
                    onClick={() => {
                      if (activeRecordId && picked.includes(activeRecordId)) setActiveRecordId(null)
                      onDeleteRecords?.(picked)
                      setPicked([])
                    }}>删除</Btn>
                </div>
                {records.length === 0 ? (
                  <div className="cf-drop" style={{ minHeight: 120 }}>暂无生成记录</div>
                ) : (
                  <div className="cf-record-list">
                    {records.map((r) => (
                      <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <input type="checkbox" checked={picked.includes(r.id)} onChange={() => togglePick(r.id)} aria-label={`选择 ${r.prompt}`} />
                        <button
                          type="button"
                          className={`cf-record${activeRecordId === r.id ? ' is-active' : ''}`}
                          style={{ flex: 1, minWidth: 0 }}
                          onClick={() => restoreRecord(r)}
                        >
                          <span className="cf-record-prompt">{r.prompt}</span>
                          <span className="cf-record-meta">{r.model} · {r.size} · {r.at}</span>
                        </button>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* 中：表单 */}
          <div className="cf-studio-col">
            <div className="cf-card">
              <div className="cf-card-head"><span className="cf-card-title">生图工作台</span></div>
              <div className="cf-card-body cf-form" style={{ alignContent: 'start' }}>

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">提示词</span>
                    <div className="cf-form-head-actions">
                      <Btn size="sm" icon="book" onClick={() => setPromptModalOpen(true)}>查看提示词库</Btn>
                    </div>
                  </div>
                  <textarea className="cf-input cf-input--area" rows={4} value={prompt}
                    placeholder="描述画面主体、风格、构图、光线和用途"
                    onChange={(e) => setPrompt(e.target.value)} />
                </div>

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">参考图</span>
                    <div className="cf-form-head-actions">
                      <Btn size="sm" onClick={() => setAssetModalOpen(true)}>资产</Btn>
                      <Btn size="sm" onClick={takeFromClipboard}>剪切板</Btn>
                      <Btn size="sm" icon="upload" onClick={() => fileRef.current?.click()}>上传</Btn>
                    </div>
                  </div>
                  <input ref={fileRef} type="file" accept="image/*" multiple hidden onChange={onPickFile} />
                  {refs.length ? (
                    <div className="cf-studio-refs" onDragOver={(e) => e.preventDefault()} onDrop={onDrop}>
                      {refs.map((r, idx) => (
                        <div key={r.id} className="cf-studio-ref">
                          <StoredImage storageKey={r.storageKey} url={r.url} alt={r.name} />
                          <div className="cf-studio-ref-meta">
                            <span>{r.name}</span>
                            <span className="cf-studio-ref-hint">有参考图时走「图片编辑」，不是纯文生图（第 {idx + 1}/{refs.length} 张）</span>
                          </div>
                          <div className="cf-studio-ref-actions">
                            <IconBtn name="chevron" label="上移" disabled={idx === 0} onClick={() => moveRef(idx, -1)} style={{ transform: 'rotate(180deg)' }} />
                            <IconBtn name="chevron" label="下移" disabled={idx === refs.length - 1} onClick={() => moveRef(idx, 1)} />
                            <IconBtn name="x" label="移除参考图" onClick={() => removeRef(r.id)} />
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div
                      className="cf-drop"
                      onDragOver={(e) => { e.preventDefault() }}
                      onDrop={onDrop}
                    >暂无参考图，可拖入多张图片</div>
                  )}
                </div>

                <div className="cf-form-row">
                  <span className="cf-label">模型</span>
                  <div style={{ position: 'relative' }}>
                    <button type="button" className="cf-model-pill" onClick={() => setPickerOpen((v) => !v)}>
                      <Icon name="sparkle" size={13} />
                      <span>{active ? active.label : '选择模型'}</span>
                      <Icon name="chevron" size={12} />
                    </button>
                    {pickerOpen ? (
                      <div className="cf-menu" style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, width: 300 }}>
                        {models.length ? models.map((m) => (
                          <button key={m.key} type="button" className={`cf-menu-item${m.key === (modelKey || models[0]?.key) ? ' is-on' : ''}`}
                            onClick={() => { setModelKey(m.key); setPickerOpen(false) }}>
                            {m.label} <span style={{ color: 'var(--cf-caption)' }}>· {m.channel.name || m.channel.protocol}</span>
                          </button>
                        )) : <p className="cf-menu-head" style={{ whiteSpace: 'normal' }}>还没有可用模型，去「配置 → 渠道」添加。</p>}
                      </div>
                    ) : null}
                  </div>
                </div>

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">质量</span>
                    <label className="cf-switch" style={{ marginInlineStart: 'auto' }}>
                      <span>透明背景（PNG）</span>
                      <input type="checkbox" checked={transparent} onChange={(e) => setTransparent(e.target.checked)} />
                    </label>
                  </div>
                  <div className="cf-chips">
                    {QUALITIES.map((q) => (
                      <button key={q} type="button" className={`cf-chip${quality === q ? ' is-on' : ''}`} onClick={() => setQuality(q)}>{q}</button>
                    ))}
                  </div>
                </div>

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">尺寸</span>
                    <label className="cf-switch" style={{ marginInlineStart: 'auto' }}>
                      <span>16 倍数对齐</span>
                      <input type="checkbox" checked={align16} onChange={(e) => setAlign16(e.target.checked)} />
                    </label>
                  </div>
                  <div className="cf-size-row">
                    <input className="cf-input cf-input--num" value={w} aria-label="宽"
                      onChange={(e) => setW(Number(e.target.value.replace(/\D/g, '')) || 0)} />
                    <Icon name="link" size={14} style={{ color: 'var(--cf-caption)', flex: '0 0 auto' }} />
                    <input className="cf-input cf-input--num" value={h} aria-label="高"
                      onChange={(e) => setH(Number(e.target.value.replace(/\D/g, '')) || 0)} />
                  </div>
                  <div className="cf-chips">
                    {RATIOS.map((r) => (
                      <button key={r.id} type="button" className={`cf-chip cf-chip--tag${ratio === r.id ? ' is-on' : ''}`} onClick={() => applyRatio(r.id)}>
                        <AspectBox ratio={r.id} />
                        {r.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="cf-form-row">
                  <span className="cf-label">分辨率</span>
                  <div className="cf-chips">
                    {RESOLUTIONS.map((r) => (
                      <button key={r} type="button" className={`cf-chip${resolution === r ? ' is-on' : ''}`} onClick={() => applyResolution(r)}>{r}</button>
                    ))}
                  </div>
                </div>

                <div className="cf-form-row">
                  <span className="cf-label">张数</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                    <div className="cf-chips">
                      {[1, 2, 4].map((n) => (
                        <button key={n} type="button" className={`cf-chip${count === n ? ' is-on' : ''}`}
                          onClick={() => setCount(n)}>{n} 张</button>
                      ))}
                    </div>
                    <input
                      type="number"
                      min={1}
                      max={10}
                      className="cf-input cf-input--num"
                      style={{ width: 64 }}
                      aria-label="自定义生成张数"
                      value={count}
                      onChange={(e) => setCount(Math.max(1, Math.min(10, Number(e.target.value) || 1)))}
                    />
                  </div>
                </div>

                <Btn variant="primary" icon={busy ? 'stop' : 'play'} onClick={generate} disabled={!busy && !prompt.trim()}>
                  {busy ? '停止生成' : '开始生成'}
                </Btn>
              </div>
            </div>
          </div>

          {/* 右：结果 */}
          <div className="cf-studio-col">
            <div className="cf-card">
              <div className="cf-card-head">
                <span className="cf-card-title">生成结果</span>
                <span className="cf-card-count">{resultRecords.length}</span>
              </div>
              <div className="cf-card-body">
                {resultRecords.length === 0 ? (
                  <Empty icon="image" title="还没有生成图片" hint="在左边写好提示词，点开始生成。" />
                ) : (
                  <div className="cf-results">
                    {resultRecords.map((r) => (
                      <ResultCard
                        key={r.id}
                        record={r}
                        active={activeRecordId === r.id}
                        isRunning={liveRunIds.current.has(r.id)}
                        onOpenGallery={() => setViewing(r)}
                        onOpenLightbox={(idx) => setLightbox({ record: r, index: idx })}
                        onSend={() => onSendToCanvas?.(r)}
                        onDownload={(img) => downloadSlot(r, img)}
                        onSaveAsset={(img) => saveSlotAsAsset(r, img)}
                        onUseAsRef={(img) => useSlotAsRef(img)}
                        onRetrySlot={(slotIdx) => retrySlot(r, slotIdx)}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

function PendingImageCard({ record, total, doneCount, isRunning, onRetryAll }) {
  return (
    <div className="cf-pending-card">
      {isRunning ? (
        <>
          <span className="cf-spin" aria-hidden="true" />
          <span>生成中… {doneCount}/{total}</span>
          <span style={{ fontSize: 11, opacity: 0.8 }}>{record.prompt.slice(0, 32)}</span>
        </>
      ) : (
        <>
          <span>任务已中断（刷新前未完成）</span>
          <Btn size="sm" icon="refresh" onClick={onRetryAll}>重新生成</Btn>
        </>
      )}
    </div>
  )
}

function FailedImageCard({ error, label, onRetry }) {
  return (
    <div className="cf-failed-card">
      <span>{label || '生成失败'}</span>
      <span className="cf-failed-err">{error || '请求未完成'}</span>
      {onRetry ? <Btn size="sm" icon="refresh" onClick={onRetry}>重试</Btn> : null}
    </div>
  )
}

/**
 * 结果卡片：支持单张与多张叠牌、单槽待命/失败重试、完整元信息与快捷键动作。
 */
function ResultCard({ record, active, isRunning, onOpenGallery, onOpenLightbox, onSend, onDownload, onSaveAsset, onUseAsRef, onRetrySlot }) {
  const slots = React.useMemo(() => {
    if (Array.isArray(record.slots) && record.slots.length) return record.slots
    const legacy = Array.isArray(record.images) && record.images.length
      ? record.images
      : (record.url ? [{ url: record.url, storageKey: record.storageKey || '', width: record.width, height: record.height }] : [])
    return legacy.map((img, index) => ({ ...img, index, status: 'done' }))
  }, [record])

  const doneItems = slots.filter((s) => s.status === 'done')
  const pendingSlots = slots.filter((s) => s.status === 'pending')
  const failedSlots = slots.filter((s) => s.status === 'failed')

  if (!doneItems.length) {
    if (pendingSlots.length) {
      return (
        <PendingImageCard
          record={record}
          total={slots.length}
          doneCount={0}
          isRunning={isRunning}
          onRetryAll={() => onRetrySlot?.(pendingSlots[0].index)}
        />
      )
    }
    const firstErr = failedSlots[0]
    return (
      <FailedImageCard
        label={slots.length > 1 ? `${slots.length} 张均生成失败` : '生成失败'}
        error={firstErr?.error || '上游未返回图片'}
        onRetry={firstErr ? () => onRetrySlot?.(firstErr.index) : undefined}
      />
    )
  }

  const main = doneItems[0]
  const many = doneItems.length > 1

  return (
    <div className={`cf-result-unit${active ? ' is-active' : ''}`}>
      <figure
        className={`cf-result${many ? ' cf-result--stack' : ''}`}
        title={`${record.prompt}\n${record.model} · ${record.size}${many ? ` · ${doneItems.length} 张` : ''}`}
        onClick={() => (many ? onOpenGallery?.() : onOpenLightbox?.(0))}
        style={{ cursor: 'zoom-in' }}
      >
        <StoredImage storageKey={main.storageKey} url={main.url} alt={record.prompt} />
        {many ? <span className="cf-result-badge">{doneItems.length}</span> : null}
        {main.degraded ? <span className="cf-result-flag">远程</span> : null}
        {onSend ? (
          <button
            type="button"
            className="cf-result-send"
            title="送到画布，成为图片节点"
            aria-label="送到画布"
            onClick={(e) => { e.stopPropagation(); onSend() }}
          >
            <Icon name="canvas" size={13} />
          </button>
        ) : null}
      </figure>

      <div className="cf-result-meta-bar">
        <span className="cf-result-meta-text">
          {main.width && main.height ? `${main.width}×${main.height}` : record.size}
          {main.bytes ? ` · ${fmtBytes(main.bytes)}` : ''}
          {record.elapsedMs ? ` · ${fmtDuration(record.elapsedMs)}` : ''}
        </span>
        <div className="cf-result-meta-actions">
          <IconBtn name="download" label="下载原图" onClick={() => onDownload?.(main)} />
          <IconBtn name="folder" label="存为资产" onClick={() => onSaveAsset?.(main)} />
          <IconBtn name="image" label="设为参考图" onClick={() => onUseAsRef?.(main)} />
        </div>
      </div>

      {pendingSlots.length || failedSlots.length ? (
        <div className="cf-slot-status-strip">
          {pendingSlots.map((s) => (
            <span key={`p_${s.index}`} className="cf-slot-pill">
              <span className="cf-spin" aria-hidden="true" style={{ width: 10, height: 10 }} />
              第 {s.index + 1} 张生成中
            </span>
          ))}
          {failedSlots.map((s) => (
            <button key={`f_${s.index}`} type="button" className="cf-slot-pill is-failed"
              title={s.error || '点击重试'} onClick={() => onRetrySlot?.(s.index)}>
              第 {s.index + 1} 张失败 · 重试
            </button>
          ))}
        </div>
      ) : null}
    </div>
  )
}

/** 一次生成的全部图片，支持查看单张大图、单张操作与单槽重试。 */
function ResultGallery({ record, onClose, onSend, onDownload, onSaveAsset, onUseAsRef, onOpenLightbox, onRetrySlot, isRunning }) {
  const slots = Array.isArray(record.slots) && record.slots.length
    ? record.slots
    : (record.images || []).map((img, index) => ({ ...img, index, status: 'done' }))
  const doneItems = slots.filter((s) => s.status === 'done')
  const failedSlots = slots.filter((s) => s.status === 'failed')
  const pendingSlots = slots.filter((s) => s.status === 'pending')

  return (
    <Dialog title={`${doneItems.length} 张 · ${record.prompt.slice(0, 24)}`} onClose={onClose}
      footer={<>
        {onSend && doneItems.length ? (
          <Btn icon="canvas" onClick={() => { onSend(record); onClose() }}>全部送到画布</Btn>
        ) : null}
        <Btn onClick={onClose}>关闭</Btn>
      </>}>
      <div className="cf-result-gallery">
        {doneItems.map((img, i) => (
          <figure key={img.index ?? i} className="cf-result-gallery-item">
            <StoredImage
              storageKey={img.storageKey}
              url={img.url}
              alt={`${record.prompt} ${i + 1}`}
              style={{ cursor: 'zoom-in' }}
              onClick={() => onOpenLightbox?.(record, i)}
            />
            <figcaption style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 4 }}>
              <span>
                {img.width && img.height ? `${img.width} × ${img.height}` : ''}
                {img.bytes ? ` · ${fmtBytes(img.bytes)}` : ''}
                {img.degraded ? ' · 远程' : ''}
              </span>
              <span style={{ display: 'inline-flex', gap: 2 }}>
                <IconBtn name="download" label="下载" onClick={() => onDownload?.(record, img)} />
                <IconBtn name="folder" label="存资产" onClick={() => onSaveAsset?.(record, img)} />
                <IconBtn name="image" label="设参考" onClick={() => onUseAsRef?.(img)} />
              </span>
            </figcaption>
          </figure>
        ))}
        {pendingSlots.map((s) => (
          <PendingImageCard
            key={`p_${s.index}`}
            record={record}
            total={slots.length}
            doneCount={doneItems.length}
            isRunning={isRunning?.(record.id)}
            onRetryAll={() => onRetrySlot?.(record, s.index)}
          />
        ))}
        {failedSlots.map((s) => (
          <FailedImageCard
            key={`f_${s.index}`}
            label={`第 ${s.index + 1} 张失败`}
            error={s.error}
            onRetry={() => onRetrySlot?.(record, s.index)}
          />
        ))}
      </div>
    </Dialog>
  )
}

function StudioLightbox({ record, initialIndex = 0, onClose, onDownload, onSaveAsset, onUseAsRef, onSend }) {
  const images = React.useMemo(() => {
    const list = (record.slots || record.images || []).filter((s) => s.status !== 'failed' && s.status !== 'pending' && (s.storageKey || s.url))
    return list
  }, [record])
  const [index, setIndex] = React.useState(Math.max(0, Math.min(images.length - 1, initialIndex)))
  const current = images[index] || images[0] || null

  React.useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); onClose(); return }
      if (images.length > 1 && (e.key === 'ArrowLeft' || e.key === 'ArrowRight')) {
        e.preventDefault()
        setIndex((i) => (i + (e.key === 'ArrowRight' ? 1 : -1) + images.length) % images.length)
      }
    }
    window.addEventListener('keydown', onKey, true)
    return () => window.removeEventListener('keydown', onKey, true)
  }, [onClose, images.length])

  if (!current) return null
  return (
    <div className="cf-lightbox" style={{ position: 'fixed', zIndex: 'var(--cf-z-modal)' }} role="dialog" aria-modal="true" aria-label="高清大图预览"
      onPointerDown={(e) => { if (e.target === e.currentTarget) onClose() }}>
      <figure className="cf-lightbox-figure" style={{ '--cf-lb-ratio': ratioValue(record.ratio) }}>
        <StoredImage storageKey={current.storageKey} url={current.url} alt={record.prompt} preferPreview={false} />
      </figure>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.length > 1 ? (
          <>
            <Btn size="sm" onClick={() => setIndex((i) => (i - 1 + images.length) % images.length)}>上一张</Btn>
            <span className="cf-lightbox-cap">{index + 1} / {images.length}</span>
            <Btn size="sm" onClick={() => setIndex((i) => (i + 1) % images.length)}>下一张</Btn>
          </>
        ) : null}
        <Btn size="sm" icon="download" onClick={() => onDownload?.(record, current)}>下载</Btn>
        <Btn size="sm" icon="folder" onClick={() => onSaveAsset?.(record, current)}>存为资产</Btn>
        <Btn size="sm" icon="image" onClick={() => onUseAsRef?.(current)}>设为参考图</Btn>
        {onSend ? <Btn size="sm" icon="canvas" onClick={() => { onSend(record); onClose() }}>送到画布</Btn> : null}
      </div>
      <figcaption className="cf-lightbox-cap">
        {current.width && current.height ? `${current.width} × ${current.height} · ` : ''}{record.prompt}
      </figcaption>
      <button type="button" className="cf-lightbox-x" onClick={onClose} aria-label="关闭预览">
        <Icon name="close" size={16} />
      </button>
    </div>
  )
}

function AssetPickerModal({ assets, onPick, onClose }) {
  const imageAssets = React.useMemo(
    () => (assets || []).filter((a) => a.kind === 'image' && a.cover),
    [assets],
  )
  return (
    <Dialog title="从我的资产选择参考图" onClose={onClose} footer={<Btn onClick={onClose}>关闭</Btn>}>
      {imageAssets.length ? (
        <div className="cf-picker-grid">
          {imageAssets.map((a) => (
            <button key={a.id} type="button" className="cf-picker-asset" onClick={() => onPick(a)}>
              <StoredImage storageKey={a.cover} alt={a.title || '资产图片'} />
              <span>{a.title || '资产图片'}</span>
            </button>
          ))}
        </div>
      ) : (
        <p style={{ fontSize: 12, color: 'var(--cf-caption)' }}>还没有图片资产，先在画布或工作台保存几张图片到资产库。</p>
      )}
    </Dialog>
  )
}
