// 右侧面板：检视 / 提示词库 / 模型渠道 / 素材 / 生成记录。
import React from 'react'
import { IMAGE_MODELS, PROMPT_LIBRARY, RATIOS, TYPE_LABEL } from './store.js'

function Row({ label, children }) {
  return (
    <div className="row">
      <span className="row-k">{label}</span>
      <span className="row-v">{children}</span>
    </div>
  )
}

function Field({ label, children }) {
  return (
    <label className="field">
      <span className="field-k">{label}</span>
      {children}
    </label>
  )
}

// ---------- 检视 ----------

export function Inspector({ node, dispatch, onDelete, onDuplicate, onWrap, onUngroup, selectedCount }) {
  if (!node) {
    return (
      <div className="panel-empty">
        <p>没有选中节点</p>
        <p className="panel-empty-hint">在画布上点一个节点，这里会显示它的参数。</p>
        {selectedCount > 1 ? (
          <button type="button" className="btn btn--ghost btn--sm" onClick={onWrap}>把选中的 {selectedCount} 个节点包成组</button>
        ) : null}
      </div>
    )
  }
  const set = (patch) => dispatch({ type: 'update-node', id: node.id, patch })
  return (
    <div className="panel-section">
      <div className="panel-head">
        <h2 className="panel-title">{node.name || TYPE_LABEL[node.type]}</h2>
        <span className="panel-sub">{TYPE_LABEL[node.type]}节点</span>
      </div>

      <div className="panel-grid">
        <Row label="位置">{node.x}, {node.y}</Row>
        <Row label="尺寸">{node.w} × {node.h}</Row>
        {node.type !== 'group' ? <Row label="状态">{node.status === 'running' ? '生成中' : node.status === 'failed' ? '失败' : node.status === 'done' ? '已完成' : '待生成'}</Row> : null}
        {node.childIds?.length ? <Row label="包含">{node.childIds.length} 个节点</Row> : null}
      </div>

      <Field label="名称">
        <input className="input" value={node.name || ''} placeholder="未命名" onChange={(e) => set({ name: e.target.value })} />
      </Field>

      {(node.type === 'image' || node.type === 'video' || node.type === 'audio') ? (
        <>
          <Field label={node.type === 'audio' ? '声音描述' : '提示词'}>
            <textarea
              className="input input--area"
              rows={4}
              value={node.prompt || ''}
              placeholder={node.type === 'audio' ? '描述要生成的音频内容' : '描述画面主体、风格、构图、光线和用途'}
              onChange={(e) => set({ prompt: e.target.value })}
            />
          </Field>
          {node.type !== 'audio' ? (
            <>
              <Field label="比例">
                <div className="chips">
                  {RATIOS.map(r => (
                    <button key={r} type="button" className={`chip${node.ratio === r ? ' is-on' : ''}`} onClick={() => set({ ratio: r })}>{r}</button>
                  ))}
                </div>
              </Field>
              <label className="switch">
                <input type="checkbox" checked={node.locked !== false} onChange={(e) => set({ locked: e.target.checked })} />
                <span>锁定比例</span>
              </label>
            </>
          ) : null}
        </>
      ) : null}

      {node.type === 'text' ? (
        <>
          <Field label="文本">
            <textarea className="input input--area" rows={6} value={node.text || ''} onChange={(e) => set({ text: e.target.value })} />
          </Field>
          <Field label={`字号 ${node.fontSize || 14}px`}>
            <input className="range" type="range" min={10} max={28} value={node.fontSize || 14} onChange={(e) => set({ fontSize: Number(e.target.value) })} />
          </Field>
        </>
      ) : null}

      {node.type === 'config' ? (
        <>
          <Field label="模型">
            <select className="input" value={node.model} onChange={(e) => set({ model: e.target.value })}>
              {IMAGE_MODELS.map(m => <option key={m.id} value={m.id}>{m.label} · {m.channel}</option>)}
            </select>
          </Field>
          <Field label="默认比例">
            <div className="chips">
              {RATIOS.map(r => (
                <button key={r} type="button" className={`chip${node.ratio === r ? ' is-on' : ''}`} onClick={() => set({ ratio: r })}>{r}</button>
              ))}
            </div>
          </Field>
          <Field label={`张数 ${node.count}`}>
            <input className="range" type="range" min={1} max={8} value={node.count} onChange={(e) => set({ count: Number(e.target.value) })} />
          </Field>
          <Field label="系统提示词">
            <textarea className="input input--area" rows={3} value={node.systemPrompt || ''} placeholder="例如：你是一位擅长电影感写实摄影的视觉导演。" onChange={(e) => set({ systemPrompt: e.target.value })} />
          </Field>
        </>
      ) : null}

      <div className="panel-actions">
        <button type="button" className="btn btn--ghost btn--sm" onClick={onDuplicate}>复制</button>
        {node.type !== 'group' ? <button type="button" className="btn btn--ghost btn--sm" onClick={onWrap}>包成组</button> : <button type="button" className="btn btn--ghost btn--sm" onClick={onUngroup}>解散组</button>}
        <button type="button" className="btn btn--danger btn--sm" onClick={onDelete}>删除</button>
      </div>
    </div>
  )
}

// ---------- 提示词库 ----------

export function PromptLibrary({ onUse }) {
  const [q, setQ] = React.useState('')
  const list = PROMPT_LIBRARY.filter(p => !q || p.name.includes(q) || p.text.includes(q))
  return (
    <div className="panel-section">
      <div className="panel-head">
        <h2 className="panel-title">提示词库</h2>
        <span className="panel-sub">共 {PROMPT_LIBRARY.length} 条</span>
      </div>
      <input className="input" placeholder="搜索提示词" value={q} onChange={(e) => setQ(e.target.value)} />
      {list.length ? (
        <ul className="prompt-list">
          {list.map(p => (
            <li key={p.id} className="prompt-item">
              <button type="button" className="prompt-use" onClick={() => onUse(p)}>
                <span className="prompt-name">{p.name}</span>
                <span className="prompt-text">{p.text}</span>
              </button>
            </li>
          ))}
        </ul>
      ) : <p className="panel-empty-hint">没有匹配的提示词。</p>}
    </div>
  )
}

// ---------- 模型渠道 ----------

export function ModelsPanel() {
  return (
    <div className="panel-section">
      <div className="panel-head">
        <h2 className="panel-title">模型渠道</h2>
        <span className="panel-sub">{IMAGE_MODELS.length} 个模型</span>
      </div>
      <ul className="model-list">
        {IMAGE_MODELS.map(m => (
          <li key={m.id} className="model-item">
            <div>
              <p className="model-name">{m.label}</p>
              <p className="model-channel">{m.channel}</p>
            </div>
            <span className="model-tag">生图</span>
          </li>
        ))}
      </ul>
      <p className="panel-empty-hint">在「设置 → 渠道」里填接口地址与 Key 后，这里会拉取真实模型列表。</p>
    </div>
  )
}

// ---------- 素材 ----------

export function AssetsPanel({ nodes }) {
  const imgs = nodes.filter(n => n.type === 'image' && n.status !== 'running')
  return (
    <div className="panel-section">
      <div className="panel-head">
        <h2 className="panel-title">画布素材</h2>
        <span className="panel-sub">{imgs.length} 张</span>
      </div>
      {imgs.length ? (
        <div className="asset-grid">
          {imgs.map(n => (
            <div key={n.id} className="asset-cell" title={n.prompt || ''}>
              <canvas className="asset-thumb" width="1" height="1" ref={(el) => {
                if (!el) return
                el.width = 120; el.height = 120
                const ctx = el.getContext('2d')
                ctx.fillStyle = '#1a1512'
                ctx.fillRect(0, 0, 120, 120)
                let seed = 7
                for (const ch of n.id) seed = (seed * 31 + ch.charCodeAt(0)) % 2147483647
                const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
                const g = ctx.createRadialGradient(60 * rnd(), 60 * rnd(), 6, 60, 60, 90)
                g.addColorStop(0, 'oklch(70% 0.2 45 / 0.6)')
                g.addColorStop(1, 'transparent')
                ctx.fillStyle = g
                ctx.fillRect(0, 0, 120, 120)
              }} />
            </div>
          ))}
        </div>
      ) : <p className="panel-empty-hint">画布上还没有图片。</p>}
    </div>
  )
}

// ---------- 生成记录 ----------

export function LogsPanel({ logs }) {
  return (
    <div className="panel-section">
      <div className="panel-head">
        <h2 className="panel-title">生成记录</h2>
        <span className="panel-sub">{logs.length} 条</span>
      </div>
      {logs.length ? (
        <ul className="log-list">
          {logs.map(l => (
            <li key={l.id} className="log-item">
              <span className={`log-dot is-${l.status}`} aria-hidden="true" />
              <div className="log-body">
                <p className="log-prompt">{l.prompt || '未填提示词'}</p>
                <p className="log-meta">{l.model} · {l.ratio} · {l.at}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : <p className="panel-empty-hint">还没有生成记录。</p>}
    </div>
  )
}
