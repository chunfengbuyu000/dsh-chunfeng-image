// 提示词中心：封面图卡片 + 分类/多标签筛选 + 搜索 + 滚动懒加载 + 详情弹窗（含参考图展示与联动使用）
import React from 'react'
import { Btn, Empty, Icon, IconBtn } from '../ui.jsx'
import { PromptImage, PromptDetailDialog } from '../prompts/prompt-ui.jsx'

const PAGE = 24

export function PromptsPage({
  prompts = [], sources = [], onUse, onCopy, onSaveAsset, onEnableBuiltins, onBack, returnTo,
}) {
  const [q, setQ] = React.useState('')
  const [cat, setCat] = React.useState('全部')
  const [selectedTags, setSelectedTags] = React.useState([])
  const [limit, setLimit] = React.useState(PAGE)
  const [detail, setDetail] = React.useState(null)
  const [enabling, setEnabling] = React.useState(false)

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

  const shown = filtered.slice(0, limit)
  const hasMore = filtered.length > shown.length

  React.useEffect(() => { setLimit(PAGE) }, [q, cat, selectedTags])

  const toggleTag = (t) => {
    if (t === '全部') { setSelectedTags([]); return }
    setSelectedTags((prev) => (prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]))
  }

  const onScrollPage = (e) => {
    const el = e.currentTarget
    if (hasMore && el.scrollTop + el.clientHeight >= el.scrollHeight - 180) {
      setLimit((l) => l + PAGE)
    }
  }

  const runEnableBuiltins = async () => {
    if (!onEnableBuiltins || enabling) return
    setEnabling(true)
    try { await onEnableBuiltins() }
    finally { setEnabling(false) }
  }

  return (
    <div className="cf-page" onScroll={onScrollPage}>
      <div className="cf-page-inner">
        <div className="cf-title-center">
          <h1>提示词中心</h1>
          <p>当前共 {prompts.length} 条提示词{filtered.length !== prompts.length ? `（已筛选 ${filtered.length} 条）` : ''}</p>
          {returnTo && onBack ? (
            <button type="button" className="cf-btn cf-btn--quiet cf-btn--sm" style={{ marginTop: 10 }} onClick={onBack}>
              返回生图工作台
            </button>
          ) : null}
        </div>

        <div className="cf-split">
          <aside className="cf-filters" aria-label="筛选">
            <div className="cf-filter-group">
              <span className="cf-filter-title">分类</span>
              <div className="cf-filter-chips">
                {cats.map((c) => (
                  <button
                    key={c}
                    type="button"
                    className={`cf-chip cf-chip--tag${cat === c ? ' is-on' : ''}`}
                    onClick={() => { setCat(c); setSelectedTags([]) }}
                  >{c}</button>
                ))}
              </div>
            </div>
            <div className="cf-filter-group">
              <span className="cf-filter-title">标签{selectedTags.length ? `（已选 ${selectedTags.length}）` : ''}</span>
              <div className="cf-filter-chips">
                {tags.slice(0, 60).map((t) => {
                  const on = t === '全部' ? selectedTags.length === 0 : selectedTags.includes(t)
                  return (
                    <button key={t} type="button" className={`cf-chip cf-chip--tag${on ? ' is-on' : ''}`} onClick={() => toggleTag(t)}>{t}</button>
                  )
                })}
              </div>
            </div>
          </aside>

          <div>
            <div className="cf-search">
              <Icon name="search" size={15} />
              <input className="cf-input" value={q} placeholder="搜索标题、内容、标签或作者" onChange={(e) => setQ(e.target.value)} />
            </div>

            {sources.length === 0 ? (
              <div className="cf-source-presets" style={{ marginBottom: 'var(--cf-sp-4)' }}>
                <span>还没有配置外部提示词来源，当前仅展示内置示例。可去「配置 → 提示词来源」添加，或一键启用 7 个官方源。</span>
                {onEnableBuiltins ? (
                  <Btn size="sm" variant="primary" icon="refresh" disabled={enabling} onClick={runEnableBuiltins}>
                    {enabling ? '拉取中…' : '一键启用 7 个官方源并拉取'}
                  </Btn>
                ) : null}
              </div>
            ) : null}

            {filtered.length === 0 ? (
              <Empty icon="book" title="没有匹配的提示词" hint={q || cat !== '全部' || selectedTags.length ? '换个关键词或筛选条件试试。' : '先去「配置 → 提示词来源」添加并拉取来源。'} />
            ) : (
              <>
                <ul className="cf-prompt-grid">
                  {shown.map((p) => {
                    const refCount = p.referenceImageUrls?.length || 0
                    return (
                      <li key={`${p.sourceId || ''}_${p.id}`} className="cf-prompt-card">
                        <div className="cf-prompt-cover" onClick={() => setDetail(p)} title="点击查看详情与参考图">
                          <PromptImage src={p.coverUrl} alt={p.title || '提示词封面'} />
                          {refCount > 0 ? <span className="cf-prompt-ref-badge">参考图×{refCount}</span> : null}
                        </div>
                        <div className="cf-prompt-body">
                          <button type="button" className="cf-prompt-title" onClick={() => setDetail(p)}>
                            {p.title}
                          </button>
                          <p className="cf-prompt-text" onClick={() => setDetail(p)}>{p.description || p.text}</p>
                          <span className="cf-prompt-tags">
                            {p.category ? <span className="cf-tag">{p.category}</span> : null}
                            {(p.tags || []).slice(0, 5).map((t) => <span key={t} className="cf-tag">{t}</span>)}
                          </span>
                          <span className="cf-prompt-card-actions">
                            <button
                              type="button"
                              className="cf-btn cf-btn--ghost cf-btn--sm"
                              onClick={() => onUse?.(p, { withRefs: refCount > 0 })}
                            >
                              {refCount > 0 ? '带参考图使用' : '使用此提示词'}
                            </button>
                            {onCopy ? <IconBtn name="copy" label="复制提示词" onClick={() => onCopy(p)} /> : null}
                            {onSaveAsset ? <IconBtn name="folder" label="存为资产" onClick={() => onSaveAsset(p)} /> : null}
                          </span>
                        </div>
                      </li>
                    )
                  })}
                </ul>
                {hasMore ? (
                  <div className="cf-more">
                    <Btn onClick={() => setLimit((l) => l + PAGE)}>加载更多（还有 {filtered.length - shown.length} 条）</Btn>
                  </div>
                ) : (
                  <p className="cf-end">已经到底了</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      {detail ? (
        <PromptDetailDialog
          prompt={detail}
          onClose={() => setDetail(null)}
          onUse={onUse}
          onCopy={onCopy}
          onSaveAsset={onSaveAsset}
        />
      ) : null}
    </div>
  )
}
