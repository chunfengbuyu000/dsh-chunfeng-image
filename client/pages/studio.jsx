// 生图工作台：三栏（生成记录 / 表单 / 生成结果）
import React from 'react'
import { Btn, Empty, Icon, IconBtn } from '../ui.jsx'
import { QUALITIES, RATIOS, RESOLUTIONS, modelsWithCap, findModel } from '../store.js'

export function StudioPage({ channels, defaults, records, prompt, onPrompt, onCreateRecord, onDeleteRecords, onLookupPrompts, say }) {
  const setPrompt = onPrompt
  const [ratio, setRatio] = React.useState(defaults?.ratio || '1:1')
  const [quality, setQuality] = React.useState(defaults?.quality || '自动')
  const [resolution, setResolution] = React.useState(defaults?.resolution || '自动')
  const [modelKey, setModelKey] = React.useState(defaults?.modelKey || '')
  const [w, setW] = React.useState(1024)
  const [h, setH] = React.useState(1024)
  const [align16, setAlign16] = React.useState(true)
  const [picked, setPicked] = React.useState([])
  const [busy, setBusy] = React.useState(false)
  const [results, setResults] = React.useState([])
  const [pickerOpen, setPickerOpen] = React.useState(false)

  const models = modelsWithCap(channels, 'image')
  const active = findModel(channels, modelKey) || models[0] || null

  const applyRatio = (id) => {
    setRatio(id)
    const r = RATIOS.find(x => x.id === id)
    if (r) { setW(r.w); setH(r.h) }
  }

  const generate = () => {
    const text = prompt.trim()
    if (!text) { say?.('先写一句提示词'); return }
    const clamped = (n) => {
      const v = Math.max(256, Math.min(4096, Math.round(n)))
      return align16 ? Math.round(v / 16) * 16 : v
    }
    setBusy(true)
    const rec = {
      id: `r${Date.now().toString(36)}`,
      prompt: text,
      model: active ? active.label : '未选择模型',
      ratio,
      size: `${clamped(w)}x${clamped(h)}`,
      quality,
      resolution,
      at: new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' }),
    }
    onCreateRecord?.(rec)
    setTimeout(() => {
      setBusy(false)
      setResults(prev => [{ ...rec, id: `img${Date.now().toString(36)}` }, ...prev])
      say?.('生成完成')
    }, 1100)
  }

  const togglePick = (id) => setPicked(prev => (prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]))

  return (
    <div className="cf-page">
      <div className="cf-page-inner">
        <div className="cf-studio">

          {/* 左：生成记录 */}
          <div className="cf-studio-col cf-studio-col--records">
            <div className="cf-card">
              <div className="cf-card-head">
                <span className="cf-card-title">生成记录</span>
                <span className="cf-card-count">{records.length}</span>
              </div>
              <div className="cf-card-body" style={{ display: 'grid', gap: 'var(--cf-sp-3)' }}>
                <div style={{ display: 'flex', gap: 6 }}>
                  <Btn size="sm" icon="plus" onClick={() => setPrompt('')}>新建</Btn>
                  <Btn size="sm" onClick={() => setPicked(records.map(r => r.id))}>全选</Btn>
                  <Btn size="sm" variant="danger" disabled={!picked.length}
                    onClick={() => { onDeleteRecords?.(picked); setPicked([]) }}>删除</Btn>
                </div>
                {records.length === 0 ? (
                  <div className="cf-drop" style={{ minHeight: 120 }}>暂无生成记录</div>
                ) : (
                  <div className="cf-record-list">
                    {records.map(r => (
                      <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                        <input type="checkbox" checked={picked.includes(r.id)} onChange={() => togglePick(r.id)} aria-label={`选择 ${r.prompt}`} />
                        <button type="button" className="cf-record" style={{ flex: 1, minWidth: 0 }}
                          onClick={() => { setPrompt(r.prompt); setRatio(r.ratio) }}>
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
              <div className="cf-card-body cf-form">

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">提示词</span>
                    <div className="cf-form-head-actions">
                      <Btn size="sm" icon="book" onClick={() => onLookupPrompts?.()}>查看提示词库</Btn>
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
                      <Btn size="sm" onClick={() => say?.('参考图接真实渠道后可用')}>剪切板</Btn>
                      <Btn size="sm" icon="upload" onClick={() => say?.('参考图接真实渠道后可用')}>上传</Btn>
                    </div>
                  </div>
                  <div className="cf-drop">暂无参考图，可将图片拖到这里</div>
                </div>

                <div className="cf-form-row">
                  <span className="cf-label">模型</span>
                  <div style={{ position: 'relative' }}>
                    <button type="button" className="cf-model-pill" onClick={() => setPickerOpen(v => !v)}>
                      <Icon name="sparkle" size={13} />
                      <span>{active ? active.label : '选择模型'}</span>
                      <Icon name="chevron" size={12} />
                    </button>
                    {pickerOpen ? (
                      <div className="cf-menu" style={{ position: 'absolute', top: 'calc(100% + 6px)', left: 0, width: 300 }}>
                        {models.length ? models.map(m => (
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
                  <span className="cf-label">质量</span>
                  <div className="cf-chips">
                    {QUALITIES.map(q => (
                      <button key={q} type="button" className={`cf-chip${quality === q ? ' is-on' : ''}`} onClick={() => setQuality(q)}>{q}</button>
                    ))}
                  </div>
                </div>

                <div className="cf-form-row">
                  <div className="cf-form-head">
                    <span className="cf-label">尺寸</span>
                    <label className="cf-switch" style={{ marginInlineStart: 'auto' }}>
                      <span>16 倍数对齐</span>
                      <input type="checkbox" checked={align16} onChange={e => setAlign16(e.target.checked)} />
                    </label>
                  </div>
                  <div className="cf-size-row">
                    <input className="cf-input cf-input--num" value={w} aria-label="宽"
                      onChange={e => setW(Number(e.target.value.replace(/\D/g, '')) || 0)} />
                    <Icon name="link" size={14} style={{ color: 'var(--cf-caption)', flex: '0 0 auto' }} />
                    <input className="cf-input cf-input--num" value={h} aria-label="高"
                      onChange={e => setH(Number(e.target.value.replace(/\D/g, '')) || 0)} />
                  </div>
                  <div className="cf-chips">
                    {RATIOS.map(r => (
                      <button key={r.id} type="button" className={`cf-chip cf-chip--tag${ratio === r.id ? ' is-on' : ''}`} onClick={() => applyRatio(r.id)}>{r.label}</button>
                    ))}
                  </div>
                </div>

                <div className="cf-form-row">
                  <span className="cf-label">分辨率</span>
                  <div className="cf-chips">
                    {RESOLUTIONS.map(r => (
                      <button key={r} type="button" className={`cf-chip${resolution === r ? ' is-on' : ''}`} onClick={() => setResolution(r)}>{r}</button>
                    ))}
                  </div>
                </div>

                <Btn variant="primary" icon={busy ? 'refresh' : 'play'} onClick={generate} disabled={busy || !prompt.trim()}>
                  {busy ? '生成中…' : '开始生成'}
                </Btn>
              </div>
            </div>
          </div>

          {/* 右：结果 */}
          <div className="cf-studio-col">
            <div className="cf-card">
              <div className="cf-card-head">
                <span className="cf-card-title">生成结果</span>
                <span className="cf-card-count">{results.length}</span>
              </div>
              <div className="cf-card-body">
                {results.length === 0 ? (
                  <Empty icon="image" title="还没有生成图片" hint="在左边写好提示词，点开始生成。" />
                ) : (
                  <div className="cf-results">
                    {results.map(r => <ResultTile key={r.id} record={r} />)}
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

function ResultTile({ record }) {
  const ref = React.useRef(null)
  React.useEffect(() => {
    const cv = ref.current
    if (!cv) return
    const S = 320
    cv.width = S; cv.height = S
    const ctx = cv.getContext('2d')
    let seed = 11
    for (const ch of `${record.prompt}${record.id}`) seed = (seed * 31 + ch.charCodeAt(0)) % 2147483647
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647
    ctx.fillStyle = '#141414'
    ctx.fillRect(0, 0, S, S)
    const g = ctx.createRadialGradient(S * rnd(), S * rnd(), 20, S / 2, S / 2, S * 0.7)
    g.addColorStop(0, 'rgba(255,255,255,0.18)')
    g.addColorStop(1, 'rgba(0,0,0,0)')
    ctx.fillStyle = g
    ctx.fillRect(0, 0, S, S)
    ctx.strokeStyle = 'rgba(255,255,255,0.3)'
    ctx.lineWidth = 1.4
    for (let i = 0; i < 5; i++) {
      const y = S * (0.2 + rnd() * 0.6)
      ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(S, y + (rnd() - 0.5) * 60); ctx.stroke()
    }
  }, [record.id, record.prompt])
  return (
    <figure className="cf-result" title={`${record.prompt}\n${record.model} · ${record.size}`}>
      <canvas ref={ref} aria-label={record.prompt} />
    </figure>
  )
}
