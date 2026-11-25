// 提示词共享视觉组件：防裂图代理封面、详情弹窗、工作台/画布通用提示词选择器、单源内容预览弹窗
import React from 'react'
import { Btn, Dialog, Empty, Icon, IconBtn } from '../ui.jsx'
import { jsdelivrMirrorOf } from './sources.js'

function fmtDate(val) {
  if (!val) return ''
  const d = new Date(val)
  return Number.isNaN(d.getTime()) ? '' : d.toLocaleDateString('zh-CN')
}

/**
 * 提示词图片渲染：
 *   0: 原 URL（referrerPolicy="no-referrer"）
 *   1: 若有 jsDelivr 镜像则切镜像
 *   2: 经 Host /fetch-media 二进制代理绕过外链/防盗链
 *   3: 优雅占位，避免浏览器破裂图标
 */
export function PromptImage({ src, alt = '', className = '', onClick, compactEmpty = false }) {
  const clean = String(src || '').trim()
  const [stage, setStage] = React.useState(0)

  React.useEffect(() => { setStage(0) }, [clean])

  if (!clean || stage >= 3) {
    return (
      <div className={`cf-prompt-cover-empty${compactEmpty ? ' is-compact' : ''} ${className}`} aria-hidden="true">
        <Icon name="image" size={compactEmpty ? 16 : 22} stroke={1.4} />
      </div>
    )
  }

  const mirror = jsdelivrMirrorOf(clean)
  const proxyUrl = /^https?:\/\//i.test(clean)
    ? `dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(mirror || clean)}`
    : ''

  let effectiveSrc = clean
  if (stage === 1) {
    effectiveSrc = mirror || proxyUrl || clean
  } else if (stage === 2) {
    effectiveSrc = proxyUrl || ''
  }

  if (!effectiveSrc) {
    return (
      <div className={`cf-prompt-cover-empty${compactEmpty ? ' is-compact' : ''} ${className}`} aria-hidden="true">
        <Icon name="image" size={compactEmpty ? 16 : 22} stroke={1.4} />
      </div>
    )
  }

  const advance = () => {
    setStage((s) => {
      if (s === 0 && !mirror) return proxyUrl ? 2 : 3
      if (s === 1 && !proxyUrl) return 3
      return s + 1
    })
  }

  return (
    <img
      src={effectiveSrc}
      alt={alt}
      className={className}
      loading="lazy"
      decoding="async"
      referrerPolicy="no-referrer"
      onError={advance}
      onClick={onClick}
    />
  )
}

/**
 * 提示词详情弹窗：完整展示封面大图、全部参考原图、完整提示词正文、标签与操作按钮。
 */
export function PromptDetailDialog({ prompt, onClose, onUse, onCopy, onSaveAsset }) {
  if (!prompt) return null
  const refs = Array.isArray(prompt.referenceImageUrls) ? prompt.referenceImageUrls.filter(Boolean) : []
  const fullText = prompt.text || prompt.prompt || ''
  const created = fmtDate(prompt.createdAt)
  const updated = fmtDate(prompt.updatedAt)

  return (
    <Dialog
      wide
      title={prompt.title || '提示词详情'}
      onClose={onClose}
      footer={(
        <>
          {refs.length > 0 && onUse ? (
            <>
              <Btn variant="primary" icon="image" onClick={() => { onUse(prompt, { withRefs: true }); onClose() }}>
                带参考图使用（{refs.length} 张）
              </Btn>
              <Btn onClick={() => { onUse(prompt, { withRefs: false }); onClose() }}>仅使用文字</Btn>
            </>
          ) : onUse ? (
            <Btn variant="primary" onClick={() => { onUse(prompt, { withRefs: false }); onClose() }}>
              使用此提示词
            </Btn>
          ) : null}
          {onCopy ? <Btn icon="copy" onClick={() => onCopy(prompt)}>复制提示词</Btn> : null}
          {onSaveAsset ? <Btn icon="folder" onClick={() => onSaveAsset(prompt)}>存为资产</Btn> : null}
          <Btn onClick={onClose}>关闭</Btn>
        </>
      )}
    >
      <div className="cf-prompt-detail">
        {(prompt.coverUrl || refs.length > 0) ? (
          <div className="cf-prompt-detail-media">
            {prompt.coverUrl ? (
              <div className="cf-prompt-detail-cover">
                <PromptImage src={prompt.coverUrl} alt={prompt.title || '封面'} />
              </div>
            ) : null}
            {refs.length > 0 ? (
              <div className="cf-prompt-detail-refs">
                <div className="cf-prompt-detail-subhead">配套参考图（{refs.length} 张）</div>
                <div className="cf-prompt-detail-ref-grid">
                  {refs.map((u, idx) => (
                    <div key={`${u}_${idx}`} className="cf-prompt-detail-ref-item">
                      <PromptImage src={u} alt={`参考图 ${idx + 1}`} compactEmpty />
                    </div>
                  ))}
                </div>
              </div>
            ) : null}
          </div>
        ) : null}

        <div className="cf-prompt-detail-body">
          <div className="cf-prompt-detail-meta">
            {prompt.category ? <span className="cf-tag">{prompt.category}</span> : null}
            {(prompt.tags || []).map((t) => <span key={t} className="cf-tag">{t}</span>)}
            {prompt.author ? <span className="cf-prompt-detail-note">作者：{prompt.author}</span> : null}
            {created || updated ? (
              <span className="cf-prompt-detail-note">
                {created ? `创建 ${created}` : ''}{created && updated ? ' · ' : ''}{updated ? `更新 ${updated}` : ''}
              </span>
            ) : null}
            {prompt.sourceUrl ? (
              <a className="cf-link" href={prompt.sourceUrl} target="_blank" rel="noreferrer">查看原项目</a>
            ) : null}
          </div>

          {prompt.description ? (
            <p className="cf-prompt-detail-desc">{prompt.description}</p>
          ) : null}

          {prompt.preview ? (
            <pre className="cf-prompt-detail-preview">{prompt.preview}</pre>
          ) : null}

          <div className="cf-prompt-detail-full">{fullText}</div>
        </div>
      </div>
    </Dialog>
  )
}

/**
 * 工作台 / 画布共用的提示词选择器弹窗（看图选词 + 多标签筛选 + 分页懒加载）。
 */
export function PromptPickerDialog({ prompts = [], onPick, onManage, onClose }) {
  const [q, setQ] = React.useState('')
  const [cat, setCat] = React.useState('全部')
  const [selectedTags, setSelectedTags] = React.useState([])
  const [limit, setLimit] = React.useState(24)
  const [detail, setDetail] = React.useState(null)

  const cats = React.useMemo(
    () => ['全部', ...new Set(prompts.map((p) => p.category).filter(Boolean))],
    [prompts],
  )
  const tags = React.useMemo(() => {
    const scope = cat === '全部' ? prompts : prompts.filter((p) => p.category === cat)
    return ['全部', ...new Set(scope.flatMap((p) => p.tags || []).filter(Boolean))]
  }, [prompts, cat])

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase()
    return prompts.filter((p) => {
      if (cat !== '全部' && p.category !== cat) return false
      if (selectedTags.length && !selectedTags.some((t) => (p.tags || []).includes(t))) return false
      if (!s) return true
      return [p.title, p.text, p.description, p.category, p.author, ...(p.tags || [])]
        .filter(Boolean)
        .some((v) => String(v).toLowerCase().includes(s))
    })
  }, [prompts, cat, selectedTags, q])

  React.useEffect(() => { setLimit(24) }, [q, cat, selectedTags])

  const shown = filtered.slice(0, limit)
  const hasMore = filtered.length > shown.length

  const toggleTag = (t) => {
    if (t === '全部') { setSelectedTags([]); return }
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  return (
    <>
      <Dialog
        wide
        title={`选择提示词（${filtered.length} 条）`}
        onClose={onClose}
        footer={(
          <>
            {onManage ? <Btn onClick={onManage}>打开提示词中心</Btn> : null}
            <Btn onClick={onClose}>关闭</Btn>
          </>
        )}
      >
        <div className="cf-prompt-picker">
          <aside className="cf-prompt-picker-side">
            <div className="cf-filter-group">
              <span className="cf-filter-title">分类</span>
              <div className="cf-filter-chips">
                {cats.map((c) => (
                  <button key={c} type="button" className={`cf-chip cf-chip--tag${cat === c ? ' is-on' : ''}`}
                    onClick={() => { setCat(c); setSelectedTags([]) }}>{c}</button>
                ))}
              </div>
            </div>
            <div className="cf-filter-group">
              <span className="cf-filter-title">标签</span>
              <div className="cf-filter-chips">
                {tags.slice(0, 40).map((t) => {
                  const on = t === '全部' ? selectedTags.length === 0 : selectedTags.includes(t)
                  return (
                    <button key={t} type="button" className={`cf-chip cf-chip--tag${on ? ' is-on' : ''}`}
                      onClick={() => toggleTag(t)}>{t}</button>
                  )
                })}
              </div>
            </div>
          </aside>

          <div className="cf-prompt-picker-main">
            <input
              className="cf-input"
              placeholder="搜索标题、正文、标签或作者…"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              autoFocus
            />
            <div
              className="cf-prompt-picker-scroll"
              onScroll={(e) => {
                const el = e.currentTarget
                if (hasMore && el.scrollTop + el.clientHeight >= el.scrollHeight - 140) {
                  setLimit((l) => l + 24)
                }
              }}
            >
              {shown.length === 0 ? (
                <p style={{ fontSize: 12, color: 'var(--cf-caption)', padding: '24px 0', textAlign: 'center' }}>
                  没有匹配的提示词
                </p>
              ) : (
                <div className="cf-prompt-picker-grid">
                  {shown.map((p) => {
                    const refCount = p.referenceImageUrls?.length || 0
                    return (
                      <div key={`${p.sourceId || ''}_${p.id}`} className="cf-prompt-picker-card">
                        <button
                          type="button"
                          className="cf-prompt-picker-thumb"
                          onClick={() => onPick?.(p, { withRefs: refCount > 0 })}
                          title={refCount > 0 ? `点击填入提示词并加载 ${refCount} 张参考图` : '点击使用此提示词'}
                        >
                          <PromptImage src={p.coverUrl} alt={p.title} compactEmpty />
                          {refCount > 0 ? <span className="cf-prompt-ref-badge">参考图×{refCount}</span> : null}
                        </button>
                        <div className="cf-prompt-picker-info">
                          <button
                            type="button"
                            className="cf-prompt-picker-title"
                            onClick={() => onPick?.(p, { withRefs: refCount > 0 })}
                          >{p.title || '未命名提示词'}</button>
                          <p className="cf-prompt-picker-snippet">{p.text}</p>
                          <div className="cf-prompt-picker-foot">
                            <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm"
                              onClick={() => onPick?.(p, { withRefs: refCount > 0 })}>使用</button>
                            <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm"
                              onClick={() => setDetail(p)}>详情</button>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              )}
              {hasMore ? (
                <div style={{ textAlign: 'center', paddingTop: 10 }}>
                  <Btn size="sm" onClick={() => setLimit((l) => l + 24)}>
                    加载更多（还剩 {filtered.length - shown.length} 条）
                  </Btn>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Dialog>

      {detail ? (
        <PromptDetailDialog
          prompt={detail}
          onClose={() => setDetail(null)}
          onUse={(item, opts) => { setDetail(null); onPick?.(item, opts) }}
        />
      ) : null}
    </>
  )
}

/**
 * 配置页「查看」单个提示词来源内容的弹窗。
 */
export function SourcePreviewDialog({ source, items = [], busy = false, onRefresh, onUse, onCopy, onSaveAsset, onClose }) {
  const [q, setQ] = React.useState('')
  const [limit, setLimit] = React.useState(20)
  const [detail, setDetail] = React.useState(null)

  const filtered = React.useMemo(() => {
    const s = q.trim().toLowerCase()
    if (!s) return items
    return items.filter((p) => (
      (p.title || '').toLowerCase().includes(s)
      || (p.text || '').toLowerCase().includes(s)
      || (p.tags || []).some((t) => t.toLowerCase().includes(s))
    ))
  }, [items, q])

  React.useEffect(() => { setLimit(20) }, [q, source?.url])
  if (!source) return null
  const shown = filtered.slice(0, limit)

  return (
    <>
      <Dialog
        wide
        title={`${source.name || '来源内容'}（${items.length} 条）`}
        onClose={onClose}
        footer={(
          <>
            {onRefresh ? (
              <Btn icon="refresh" disabled={busy} onClick={onRefresh}>
                {busy ? '拉取中…' : '刷新此源'}
              </Btn>
            ) : null}
            <Btn onClick={onClose}>关闭</Btn>
          </>
        )}
      >
        <div style={{ display: 'grid', gap: 10 }}>
          <input className="cf-input" placeholder="在当前来源中搜索…" value={q} onChange={(e) => setQ(e.target.value)} />
          <div className="cf-source-preview-list">
            {shown.length === 0 ? (
              <Empty icon="book" title={items.length ? '没有匹配条目' : '该来源暂无缓存内容'} hint="点下方「刷新此源」立刻拉取。" />
            ) : shown.map((item) => (
              <div key={item.id} className="cf-source-preview-row">
                <div className="cf-source-preview-thumb" onClick={() => setDetail(item)} style={{ cursor: 'pointer' }}>
                  <PromptImage src={item.coverUrl} alt={item.title} compactEmpty />
                </div>
                <div style={{ minWidth: 0, flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ fontWeight: 500, fontSize: 13 }}>{item.title}</span>
                    {item.referenceImageUrls?.length ? (
                      <span className="cf-tag">参考图×{item.referenceImageUrls.length}</span>
                    ) : null}
                  </div>
                  <p className="cf-prompt-picker-snippet" style={{ marginTop: 2 }}>{item.text}</p>
                  {item.tags?.length ? (
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 4, marginTop: 4 }}>
                      {item.tags.slice(0, 5).map((t) => <span key={t} className="cf-tag">{t}</span>)}
                    </div>
                  ) : null}
                </div>
                <div style={{ display: 'flex', gap: 4, flex: 'none' }}>
                  <IconBtn name="copy" label="复制" onClick={() => onCopy?.(item)} />
                  <Btn size="sm" onClick={() => setDetail(item)}>详情</Btn>
                  {onUse ? <Btn size="sm" variant="primary" onClick={() => { onUse(item, { withRefs: true }); onClose() }}>使用</Btn> : null}
                </div>
              </div>
            ))}
          </div>
          {filtered.length > shown.length ? (
            <div style={{ textAlign: 'center' }}>
              <Btn size="sm" onClick={() => setLimit((l) => l + 20)}>加载更多（还有 {filtered.length - shown.length} 条）</Btn>
            </div>
          ) : null}
        </div>
      </Dialog>

      {detail ? (
        <PromptDetailDialog
          prompt={detail}
          onClose={() => setDetail(null)}
          onUse={(item, opts) => { setDetail(null); onClose(); onUse?.(item, opts) }}
          onCopy={onCopy}
          onSaveAsset={onSaveAsset}
        />
      ) : null}
    </>
  )
}
