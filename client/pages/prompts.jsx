// 提示词库：居中标题 + 左分类/标签筛选 + 搜索 + 卡片列表（含分页加载）
import React from 'react'
import { Btn, Empty, Icon } from '../ui.jsx'

const PAGE = 6

export function PromptsPage({ prompts, sources, onUse, onBack, returnTo }) {
  const [q, setQ] = React.useState('')
  const [cat, setCat] = React.useState('全部')
  const [tag, setTag] = React.useState('全部')
  const [limit, setLimit] = React.useState(PAGE)

  const cats = ['全部', ...new Set(prompts.map(p => p.category).filter(Boolean))]
  const tags = ['全部', ...new Set(prompts.flatMap(p => p.tags || []))]

  const filtered = prompts.filter(p => {
    if (cat !== '全部' && p.category !== cat) return false
    if (tag !== '全部' && !(p.tags || []).includes(tag)) return false
    if (!q) return true
    const s = q.toLowerCase()
    return (p.title || '').toLowerCase().includes(s) || (p.text || '').toLowerCase().includes(s) || (p.tags || []).some(t => t.toLowerCase().includes(s))
  })

  const shown = filtered.slice(0, limit)
  const hasMore = filtered.length > shown.length

  React.useEffect(() => { setLimit(PAGE) }, [q, cat, tag])

  return (
    <div className="cf-page">
      <div className="cf-page-inner">
        <div className="cf-title-center">
          <h1>提示词中心</h1>
          <p>当前共 {prompts.length} 条提示词</p>
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
                {cats.map(c => (
                  <button key={c} type="button" className={`cf-chip cf-chip--tag${cat === c ? ' is-on' : ''}`} onClick={() => setCat(c)}>{c}</button>
                ))}
              </div>
            </div>
            <div className="cf-filter-group">
              <span className="cf-filter-title">标签</span>
              <div className="cf-filter-chips">
                {tags.map(t => (
                  <button key={t} type="button" className={`cf-chip cf-chip--tag${tag === t ? ' is-on' : ''}`} onClick={() => setTag(t)}>{t}</button>
                ))}
              </div>
            </div>
          </aside>

          <div>
            <div className="cf-search">
              <Icon name="search" size={15} />
              <input className="cf-input" value={q} placeholder="搜索标题、内容或标签" onChange={e => setQ(e.target.value)} />
            </div>

            {sources.length === 0 ? (
              <p className="cf-end" style={{ textAlign: 'start' }}>
                还没有配置提示词来源。到「配置 → 提示词来源」添加后，这里会分页加载更多。
              </p>
            ) : null}

            {filtered.length === 0 ? (
              <Empty icon="book" title="没有匹配的提示词" hint={q || cat !== '全部' || tag !== '全部' ? '换个关键词或筛选条件试试。' : '先去「配置 → 提示词来源」添加来源。'} />
            ) : (
              <>
                <ul className="cf-prompt-grid">
                  {shown.map(p => (
                    <li key={p.id} className="cf-prompt-card">
                      <span className="cf-prompt-title">{p.title}</span>
                      <span className="cf-prompt-text">{p.text}</span>
                      <span className="cf-prompt-tags">
                        {p.category ? <span className="cf-tag">{p.category}</span> : null}
                        {(p.tags || []).map(t => <span key={t} className="cf-tag">{t}</span>)}
                      </span>
                      <span style={{ display: 'flex', gap: 6, marginTop: 4 }}>
                        <button type="button" className="cf-btn cf-btn--ghost cf-btn--sm" onClick={() => onUse(p)}>
                          使用此提示词
                        </button>
                      </span>
                    </li>
                  ))}
                </ul>
                {hasMore ? (
                  <div className="cf-more">
                    <Btn onClick={() => setLimit(l => l + PAGE)}>加载更多（还有 {filtered.length - shown.length} 条）</Btn>
                  </div>
                ) : (
                  <p className="cf-end">已经到底了</p>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
