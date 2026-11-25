// 我的资产：类型/标签筛选 + 搜索 + 卡片列表 + 增删改 + 导入导出
import React from 'react'
import { Btn, Dialog, Empty, Icon, IconBtn } from '../ui.jsx'
import { ASSET_KINDS, newId } from '../store.js'
import { resolveMediaUrl, getMediaAny } from '../gen/result.js'
import { PromptImage } from '../prompts/prompt-ui.jsx'

/**
 * 资产缩略图。
 *
 * 关键：`cover` 存的是 **storageKey**（例如 `image:xxx`），不是 URL。
 * 直接当 src 用会得到一张裂图 —— 必须先换成 objectURL。
 * 文本资产（比如从提示词中心收藏的）可能带远程 `coverUrl`，用 PromptImage 兜底显示封面图。
 */
function AssetThumb({ asset }) {
  const key = asset?.kind === 'image' ? asset.cover : ''
  const remoteCover = asset?.coverUrl || (!key && /^https?:\/\//i.test(asset?.cover || '') ? asset.cover : '')
  const [src, setSrc] = React.useState('')

  React.useEffect(() => {
    let alive = true
    if (!key) { setSrc(''); return () => { alive = false } }
    resolveMediaUrl(key).then((url) => { if (alive) setSrc(url || '') }).catch(() => { if (alive) setSrc('') })
    return () => { alive = false }
  }, [key])

  if (src) return <img src={src} alt={asset.title || '资产'} loading="lazy" />
  if (remoteCover) return <PromptImage src={remoteCover} alt={asset.title || '资产'} compactEmpty />
  if (key) return <span className="cf-asset-thumb-empty">图片读不出来</span>
  return <Icon name={asset.kind === 'image' ? 'image' : asset.kind === 'video' ? 'play' : 'text'} size={22} />
}

/** 资产大图预览。 */
function AssetPreview({ asset, onClose }) {
  const [src, setSrc] = React.useState('')
  const [meta, setMeta] = React.useState(null)

  React.useEffect(() => {
    let alive = true
    const key = asset?.cover
    if (!key) return () => { alive = false }
    resolveMediaUrl(key).then((url) => { if (alive) setSrc(url || '') }).catch(() => {})
    getMediaAny(key).then((rec) => {
      if (alive && rec?.blob) setMeta({ bytes: rec.blob.size, type: rec.blob.type })
    }).catch(() => {})
    return () => { alive = false }
  }, [asset?.cover])

  return (
    <Dialog title={asset?.title || '资产预览'} onClose={onClose}
      footer={<Btn onClick={onClose}>关闭</Btn>}>
      <div className="cf-asset-preview">
        {src ? <img src={src} alt={asset?.title || ''} /> : <span className="cf-asset-thumb-empty">图片读不出来</span>}
      </div>
      <div className="cf-asset-preview-meta">
        {meta ? `${meta.type} · ${(meta.bytes / 1024).toFixed(1)} KB` : ''}
        {asset?.tags?.length ? ` · ${asset.tags.join(' / ')}` : ''}
      </div>
    </Dialog>
  )
}

/**
 * 把导入的 JSON 规整成合法资产列表。
 * 兼容：单条资产对象、资产数组、以及 `{ assets: [...] }` / `{ state: { assets: [...] } }` 包装格式。
 */
function normalizeImportedAssets(raw, existingAssets) {
  let list = []
  if (Array.isArray(raw)) {
    list = raw
  } else if (raw && typeof raw === 'object') {
    if (Array.isArray(raw.assets)) list = raw.assets
    else if (Array.isArray(raw.state?.assets)) list = raw.state.assets
    else if (!('assets' in raw)) list = [raw]
  }
  if (!list.length) return []

  const usedIds = new Set((existingAssets || []).map(a => a?.id).filter(Boolean))
  const out = []

  for (const item of list) {
    if (!item || typeof item !== 'object' || Array.isArray(item)) continue
    const title = typeof item.title === 'string' ? item.title.trim() : ''
    const text = typeof item.text === 'string' ? item.text : (typeof item.prompt === 'string' ? item.prompt : '')
    const cover = typeof item.cover === 'string' ? item.cover.trim() : ''
    const coverUrl = typeof item.coverUrl === 'string' ? item.coverUrl.trim() : ''
    if (!title && !text.trim() && !cover && !coverUrl) continue

    const kind = (item.kind === 'image' || item.kind === 'text')
      ? item.kind
      : ((cover || (coverUrl && !text.trim())) ? 'image' : 'text')

    let id = typeof item.id === 'string' ? item.id.trim() : ''
    if (!id || usedIds.has(id)) {
      do { id = newId('a') } while (usedIds.has(id))
    }
    usedIds.add(id)

    const tags = Array.isArray(item.tags)
      ? [...new Set(item.tags.filter(t => typeof t === 'string' && t.trim()).map(t => t.trim()))]
      : []
    const source = typeof item.source === 'string' && item.source.trim() ? item.source.trim() : '导入'

    const asset = {
      id,
      kind,
      title: title || text.trim().slice(0, 24) || '未命名资产',
      text,
      tags,
      source,
      at: Date.now(),
    }
    if (cover) asset.cover = cover
    if (coverUrl) asset.coverUrl = coverUrl
    out.push(asset)
  }

  return out
}

export function AssetsPage({ assets, onSave, onDelete, onImport, say }) {
  const [q, setQ] = React.useState('')
  const [kind, setKind] = React.useState('all')
  const [editing, setEditing] = React.useState(null)
  const [confirm, setConfirm] = React.useState(null)
  const [preview, setPreview] = React.useState(null)
  const importInputRef = React.useRef(null)
  const assetsRef = React.useRef(assets)
  assetsRef.current = assets

  const filtered = assets.filter(a => {
    if (kind !== 'all' && a.kind !== kind) return false
    if (!q) return true
    const s = q.toLowerCase()
    return [a.title, a.text, a.source, ...(a.tags || [])].filter(Boolean).some(v => String(v).toLowerCase().includes(s))
  })

  const handleImportFile = async (e) => {
    const input = e.target
    const file = input.files?.[0]
    if (!file) return
    try {
      const raw = JSON.parse(await file.text())
      const imported = normalizeImportedAssets(raw, assetsRef.current)
      if (!imported.length) {
        say?.('未在文件中找到有效资产条目', 'error')
        return
      }
      if (onImport) onImport(imported)
      else onSave([...imported, ...assetsRef.current])
      say?.(`已导入 ${imported.length} 条资产`)
    } catch {
      say?.('导入失败：JSON 文件格式无效', 'error')
    } finally {
      input.value = ''
    }
  }

  const exportAll = () => {
    const blob = new Blob([JSON.stringify({ version: 1, assets }, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'my-assets.json'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
    say?.('已导出资产')
  }

  return (
    <div className="cf-page">
      <div className="cf-page-inner">
        <div className="cf-page-head">
          <div>
            <h1 className="cf-page-title">我的资产</h1>
            <p className="cf-page-sub">把常用的文字和图片存下来，之后按类型、标题或标签快速找回来。</p>
          </div>
          <div className="cf-page-actions">
            <Btn icon="upload" onClick={() => importInputRef.current?.click()}>导入资产</Btn>
            <input ref={importInputRef} type="file" accept=".json,application/json" hidden onChange={handleImportFile} />
            <Btn icon="download" onClick={exportAll}>导出资产</Btn>
            <Btn variant="primary" icon="plus" onClick={() => setEditing({ kind: 'text', title: '', text: '', tags: [], source: '手动添加' })}>新增资产</Btn>
          </div>
        </div>

        <div className="cf-split" style={{ marginBottom: 'var(--cf-sp-4)' }}>
          <aside className="cf-filters" aria-label="筛选">
            <div className="cf-filter-group">
              <span className="cf-filter-title">类型</span>
              <div className="cf-filter-chips">
                {ASSET_KINDS.map(k => (
                  <button key={k.id} type="button" className={`cf-chip cf-chip--tag${kind === k.id ? ' is-on' : ''}`} onClick={() => setKind(k.id)}>{k.label}</button>
                ))}
              </div>
            </div>
          </aside>
          <div className="cf-search" style={{ marginBottom: 0 }}>
            <Icon name="search" size={15} />
            <input className="cf-input" value={q} placeholder="搜索标题、内容、标签或来源" onChange={e => setQ(e.target.value)} />
          </div>
        </div>

        {filtered.length === 0 ? (
          <Empty icon="folder" title="没有找到资产" hint={q || kind !== 'all' ? '换个关键词或类型试试。' : '新增一条，或从文件导入。'}
            action={<Btn variant="primary" icon="plus" onClick={() => setEditing({ kind: 'text', title: '', text: '', tags: [], source: '手动添加' })}>新增资产</Btn>} />
        ) : (
          <div className="cf-asset-grid">
            {filtered.map(a => (
              <div key={a.id} className="cf-asset">
                <button type="button" className="cf-asset-thumb"
                  onClick={() => { if (a.kind === 'image' && a.cover) setPreview(a) }}
                  title={a.kind === 'image' && a.cover ? '点击看大图' : undefined}>
                  <AssetThumb asset={a} />
                </button>
                <div className="cf-asset-body">
                  <span className="cf-asset-title">{a.title || '未命名资产'}</span>
                  <span className="cf-asset-meta">{a.source || '来源未注明'}{a.tags?.length ? ` · ${a.tags.join(' / ')}` : ''}</span>
                  <span style={{ display: 'flex', gap: 2, marginTop: 4 }}>
                    <IconBtn name="edit" label="编辑" onClick={() => setEditing({ ...a })} />
                    <IconBtn name="trash" label="删除" onClick={() => setConfirm(a)} />
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {editing ? (
        <AssetDialog asset={editing} onClose={() => setEditing(null)}
          onSave={(a) => {
            const next = a.id ? assets.map(x => (x.id === a.id ? a : x)) : [...assets, { ...a, id: newId('a') }]
            onSave(next)
            setEditing(null)
            say?.(a.id ? '资产已更新' : '资产已保存')
          }} />
      ) : null}

      {preview ? <AssetPreview asset={preview} onClose={() => setPreview(null)} /> : null}

      {confirm ? (
        <Dialog title="删除资产？" onClose={() => setConfirm(null)}
          footer={<><Btn onClick={() => setConfirm(null)}>取消</Btn>
            <Btn variant="danger" onClick={() => { onDelete(confirm.id); setConfirm(null); say?.('资产已删除') }}>删除</Btn></>}>
          <p style={{ fontSize: 13, color: 'var(--cf-muted)' }}>确定删除「{confirm.title || '未命名资产'}」吗？删除后会从我的资产中移除。</p>
        </Dialog>
      ) : null}
    </div>
  )
}

function AssetDialog({ asset, onClose, onSave }) {
  const [form, setForm] = React.useState({ ...asset, tags: asset.tags || [] })
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))
  const [tagText, setTagText] = React.useState('')
  const ok = form.title?.trim() && (form.kind !== 'text' || form.text?.trim())

  return (
    <Dialog title={asset.id ? '编辑资产' : '新增资产'} onClose={onClose}
      footer={<><Btn onClick={onClose}>取消</Btn>
        <Btn variant="primary" disabled={!ok} onClick={() => onSave({ ...form, title: form.title.trim() })}>保存</Btn></>}>
      <div className="cf-field">
        <span className="cf-label">类型</span>
        <div className="cf-chips">
          {ASSET_KINDS.filter(k => k.id !== 'all').map(k => (
            <button key={k.id} type="button" className={`cf-chip${form.kind === k.id ? ' is-on' : ''}`} onClick={() => set('kind', k.id)}>{k.label}</button>
          ))}
        </div>
      </div>
      <label className="cf-field">
        <span className="cf-label">标题</span>
        <input className="cf-input" value={form.title} placeholder="给资产起一个容易找到的名字"
          onChange={e => set('title', e.target.value)} />
      </label>
      {form.kind === 'text' ? (
        <label className="cf-field">
          <span className="cf-label">文本内容</span>
          <textarea className="cf-input cf-input--area" rows={5} value={form.text || ''}
            placeholder="保存提示词、文案、参考描述等文字素材" onChange={e => set('text', e.target.value)} />
        </label>
      ) : (
        <label className="cf-field">
          <span className="cf-label">图片地址</span>
          <input className="cf-input" value={form.cover || ''} placeholder="粘贴图片地址" onChange={e => set('cover', e.target.value)} />
        </label>
      )}
      <label className="cf-field">
        <span className="cf-label">标签</span>
        <input className="cf-input" value={tagText} placeholder="输入后回车添加"
          onChange={e => setTagText(e.target.value)}
          onKeyDown={e => {
            if (e.key !== 'Enter') return
            e.preventDefault()
            const t = tagText.trim()
            if (!t) return
            set('tags', [...new Set([...(form.tags || []), t])])
            setTagText('')
          }} />
        {form.tags?.length ? (
          <div className="cf-chips" style={{ marginTop: 4 }}>
            {form.tags.map(t => (
              <button key={t} type="button" className="cf-chip cf-chip--tag is-on"
                onClick={() => set('tags', form.tags.filter(x => x !== t))} title="点击移除">{t} ×</button>
            ))}
          </div>
        ) : null}
      </label>
      <label className="cf-field">
        <span className="cf-label">来源</span>
        <input className="cf-input" value={form.source || ''} placeholder="手动添加 / 画布 / 提示词库"
          onChange={e => set('source', e.target.value)} />
      </label>
    </Dialog>
  )
}
