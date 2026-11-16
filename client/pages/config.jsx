// 配置：六个标签（渠道 / 本地代理 / 偏好设置 / 提示词来源 / WebDAV / 本地存储）
import React from 'react'
import { Btn, Dialog, Empty, Icon, IconBtn } from '../ui.jsx'
import { CAPS, PROTOCOLS, QUALITIES, RATIOS, RESOLUTIONS, newChannel, newId, modelsWithCap, modelKey, findModel } from '../store.js'

const TABS = [
  { id: 'channels', label: '渠道' },
  { id: 'proxy', label: '本地代理' },
  { id: 'defaults', label: '偏好设置' },
  { id: 'sources', label: '提示词来源' },
  { id: 'webdav', label: 'WebDAV' },
  { id: 'storage', label: '本地存储' },
]

export function ConfigPage({
  tab, onTab, channels, onChannels, defaults, onDefaults,
  promptSources, onPromptSources, say,
}) {
  const [editing, setEditing] = React.useState(null)
  const [confirm, setConfirm] = React.useState(null)
  const [sourceForm, setSourceForm] = React.useState({ name: '', url: '' })

  const exportConfig = () => {
    const data = { version: 1, channels, defaults, promptSources }
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' })
    const a = document.createElement('a')
    a.href = URL.createObjectURL(blob)
    a.download = 'chunfeng-config.json'
    a.click()
    setTimeout(() => URL.revokeObjectURL(a.href), 2000)
    say?.('已导出配置（不含密钥）')
  }

  const importConfig = () => {
    const input = document.createElement('input')
    input.type = 'file'
    input.accept = '.json,application/json'
    input.onchange = async () => {
      const file = input.files?.[0]
      if (!file) return
      try {
        const data = JSON.parse(await file.text())
        if (Array.isArray(data.channels)) onChannels(data.channels)
        if (data.defaults) onDefaults(data.defaults)
        if (Array.isArray(data.promptSources)) onPromptSources(data.promptSources)
        say?.('配置已导入')
      } catch {
        say?.('配置导入失败，请检查文件格式', 'error')
      }
    }
    input.click()
  }

  return (
    <div className="cf-page">
      <div className="cf-page-inner">
        <div className="cf-page-head">
          <div>
            <h1 className="cf-page-title">配置与用户偏好</h1>
            <p className="cf-page-sub">渠道聚合、模型选择、同步与本地存储</p>
          </div>
        </div>

        <div className="cf-config-notice">
          <span>JSON 文件包含 API Key 和 WebDAV 凭据，请妥善保管。</span>
          <span className="cf-config-notice-actions">
            <Btn size="sm" icon="upload" onClick={importConfig}>导入配置</Btn>
            <Btn size="sm" icon="download" onClick={exportConfig}>导出配置</Btn>
          </span>
        </div>

        <div className="cf-tabs" role="tablist">
          {TABS.map(t => (
            <button key={t.id} type="button" role="tab" aria-selected={tab === t.id}
              className={`cf-tab${tab === t.id ? ' is-on' : ''}`} onClick={() => onTab(t.id)}>{t.label}</button>
          ))}
        </div>

        {tab === 'channels' ? (
          <>
            <div className="cf-section-head">
              <p className="cf-section-desc">每个渠道选择一个协议并拉取模型，为每个模型指定能力（生图 / 视频 / 文本 / 音频），并可自定义调用脚本。</p>
              <Btn icon="plus" onClick={() => setEditing(newChannel())}>新增渠道</Btn>
            </div>
            {channels.length === 0 ? (
              <Empty icon="sliders" title="还没有渠道" hint="新增一个渠道，填好接口地址与 Key，就能在这里拉取模型并指定能力。"
                action={<Btn variant="primary" icon="plus" onClick={() => setEditing(newChannel())}>新增渠道</Btn>} />
            ) : (
              <div className="cf-channel-list">
                {channels.map(ch => (
                  <div key={ch.id} className="cf-channel">
                    <div className="cf-channel-main">
                      <span className="cf-channel-name">{ch.name || '未命名渠道'}</span>
                      <span className="cf-channel-meta">
                        {PROTOCOLS.find(p => p.id === ch.protocol)?.label || ch.protocol}
                        {' · '}{ch.models.length} 个模型
                        {' · '}{ch.baseUrl}
                        {ch.keyHint ? ` · 密钥 ••••${ch.keyHint}` : ' · 未填密钥'}
                      </span>
                    </div>
                    <span className="cf-channel-actions">
                      <IconBtn name="edit" label="编辑" onClick={() => setEditing({ ...ch })} />
                      <IconBtn name="trash" label="删除" onClick={() => setConfirm(ch)} />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </>
        ) : null}

        {tab === 'defaults' ? (
          <DefaultsTab channels={channels} defaults={defaults} onDefaults={onDefaults} />
        ) : null}

        {tab === 'sources' ? (
          <>
            <div className="cf-section-head">
              <p className="cf-section-desc">提示词库从这些来源分页加载。留空时只显示内置提示词。</p>
            </div>
            <div className="cf-card" style={{ padding: 'var(--cf-sp-4)', display: 'grid', gap: 'var(--cf-sp-3)' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) auto', gap: 'var(--cf-sp-2)' }}>
                <input className="cf-input" placeholder="名称" value={sourceForm.name}
                  onChange={e => setSourceForm(f => ({ ...f, name: e.target.value }))} />
                <input className="cf-input" placeholder="提示词来源地址（JSON）" value={sourceForm.url}
                  onChange={e => setSourceForm(f => ({ ...f, url: e.target.value }))} />
                <Btn variant="primary" disabled={!sourceForm.url.trim()}
                  onClick={() => {
                    onPromptSources([...promptSources, { id: newId('src'), name: sourceForm.name.trim() || '未命名来源', url: sourceForm.url.trim() }])
                    setSourceForm({ name: '', url: '' })
                    say?.('来源已添加')
                  }}>添加</Btn>
              </div>
              {promptSources.length === 0 ? (
                <p className="cf-end" style={{ textAlign: 'start' }}>还没有配置来源。</p>
              ) : (
                <div style={{ display: 'grid', gap: 2 }}>
                  {promptSources.map(s => (
                    <div key={s.id} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 4px', borderBottom: 'var(--cf-hair) solid var(--cf-line)' }}>
                      <span style={{ fontSize: 13 }}>{s.name}</span>
                      <span style={{ fontSize: 12, color: 'var(--cf-caption)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.url}</span>
                      <IconBtn name="trash" label="移除来源" onClick={() => onPromptSources(promptSources.filter(x => x.id !== s.id))}
                        style={{ marginInlineStart: 'auto' }} />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </>
        ) : null}

        {tab === 'proxy' ? (
          <PlaceholderTab
            title="本地代理"
            desc="让出图请求经过本机代理。"
            items={['代理地址（http://127.0.0.1:7890）', '仅对指定渠道生效', '连通性测试']}
          />
        ) : null}

        {tab === 'webdav' ? (
          <PlaceholderTab
            title="WebDAV"
            desc="把画布和资产同步到自己的 WebDAV。"
            items={['服务器地址', '账号与密码', '同步范围：画布 / 资产 / 提示词']}
          />
        ) : null}

        {tab === 'storage' ? (
          <PlaceholderTab
            title="本地存储"
            desc="数据目前保存在浏览器本地；接上 Host 后会落到 ~/.dsh/dsh-chunfeng-image/。"
            items={['画布与节点', '生成的图片文件', '配置文件（含密钥凭证）']}
          />
        ) : null}
      </div>

      {editing ? (
        <ChannelDialog channel={editing} onClose={() => setEditing(null)}
          onSave={(ch) => {
            const exists = channels.some(c => c.id === ch.id)
            onChannels(exists ? channels.map(c => (c.id === ch.id ? ch : c)) : [...channels, ch])
            setEditing(null)
            say?.(exists ? '渠道已更新' : '渠道已添加')
          }} />
      ) : null}

      {confirm ? (
        <Dialog title="删除渠道？" onClose={() => setConfirm(null)}
          footer={<><Btn onClick={() => setConfirm(null)}>取消</Btn>
            <Btn variant="danger" onClick={() => { onChannels(channels.filter(c => c.id !== confirm.id)); setConfirm(null); say?.('渠道已删除') }}>删除</Btn></>}>
          <p style={{ fontSize: 13, color: 'var(--cf-muted)' }}>删除「{confirm.name || '未命名渠道'}」后，它下面的 {confirm.models.length} 个模型也不可用。</p>
        </Dialog>
      ) : null}
    </div>
  )
}

function DefaultsTab({ channels, defaults, onDefaults }) {
  const models = modelsWithCap(channels, 'image')
  const set = (patch) => onDefaults({ ...defaults, image: { ...defaults.image, ...patch } })
  return (
    <>
      <div className="cf-section-head">
        <p className="cf-section-desc">新建画布和配置节点会用这里的默认值；单个节点仍可单独覆盖。</p>
      </div>
      <div className="cf-defaults">
        <label className="cf-field">
          <span className="cf-label">默认生图模型</span>
          <select className="cf-input" value={defaults.image.modelKey || ''} onChange={e => set({ modelKey: e.target.value })}>
            <option value="">未指定</option>
            {models.map(m => <option key={m.key} value={m.key}>{m.label} · {m.channel.name || m.channel.protocol}</option>)}
          </select>
          {models.length === 0 ? <span style={{ fontSize: 12, color: 'var(--cf-caption)' }}>还没有具备生图能力的模型。</span> : null}
        </label>

        <div className="cf-field">
          <span className="cf-label">默认比例</span>
          <div className="cf-chips">
            {RATIOS.map(r => (
              <button key={r.id} type="button" className={`cf-chip${defaults.image.ratio === r.id ? ' is-on' : ''}`}
                onClick={() => set({ ratio: r.id })}>{r.label}</button>
            ))}
          </div>
        </div>

        <div className="cf-field">
          <span className="cf-label">默认质量</span>
          <div className="cf-chips">
            {QUALITIES.map(q => (
              <button key={q} type="button" className={`cf-chip${defaults.image.quality === q ? ' is-on' : ''}`}
                onClick={() => set({ quality: q })}>{q}</button>
            ))}
          </div>
        </div>

        <div className="cf-field">
          <span className="cf-label">默认分辨率</span>
          <div className="cf-chips">
            {RESOLUTIONS.map(r => (
              <button key={r} type="button" className={`cf-chip${defaults.image.resolution === r ? ' is-on' : ''}`}
                onClick={() => set({ resolution: r })}>{r}</button>
            ))}
          </div>
        </div>

        <div className="cf-field">
          <span className="cf-label">画布默认生图张数</span>
          <div className="cf-chips">
            {[1, 2, 4].map(n => (
              <button key={n} type="button" className={`cf-chip${defaults.image.count === n ? ' is-on' : ''}`}
                onClick={() => set({ count: n })}>{n} 张</button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

function PlaceholderTab({ title, desc, items }) {
  return (
    <>
      <div className="cf-section-head"><p className="cf-section-desc">{desc}</p></div>
      <div className="cf-card" style={{ padding: 'var(--cf-sp-4)' }}>
        <p style={{ fontSize: 13, fontWeight: 500, marginBottom: 8 }}>{title}</p>
        <ul style={{ display: 'grid', gap: 6 }}>
          {items.map(t => (
            <li key={t} style={{ fontSize: 12, color: 'var(--cf-muted)', display: 'flex', gap: 8, alignItems: 'center' }}>
              <span style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--cf-caption)' }} aria-hidden="true" />
              {t}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: 12, color: 'var(--cf-caption)', marginTop: 12 }}>这一版先把位置留好，接入 Host 后再填。</p>
      </div>
    </>
  )
}

// ---------- 渠道编辑 ----------

function ChannelDialog({ channel, onClose, onSave }) {
  const [form, setForm] = React.useState({ ...channel })
  const [apiKey, setApiKey] = React.useState('')
  const [modelId, setModelId] = React.useState('')
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  const addModel = () => {
    const id = modelId.trim()
    if (!id) return
    if (form.models.some(m => m.id === id)) { setModelId(''); return }
    set('models', [...form.models, { id, label: id, caps: guessCaps(id), enabled: true, source: 'manual' }])
    setModelId('')
  }

  const toggleCap = (id, cap) => {
    set('models', form.models.map(m => {
      if (m.id !== id) return m
      const caps = m.caps || []
      return { ...m, caps: caps.includes(cap) ? caps.filter(c => c !== cap) : [...caps, cap] }
    }))
  }

  return (
    <Dialog title={channel.id && channel.models ? '编辑渠道' : '新增渠道'} wide onClose={onClose}
      footer={<><Btn onClick={onClose}>取消</Btn>
        <Btn variant="primary" disabled={!form.baseUrl.trim()} onClick={() => {
          const hint = apiKey.trim() ? apiKey.trim().slice(-4) : form.keyHint
          onSave({ ...form, keyHint: hint || '', hasKey: Boolean(apiKey.trim()) || form.hasKey })
        }}>保存</Btn></>}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--cf-sp-3)' }}>
        <label className="cf-field">
          <span className="cf-label">名称</span>
          <input className="cf-input" value={form.name} placeholder="例如：OpenAI 官方"
            onChange={e => set('name', e.target.value)} />
        </label>
        <label className="cf-field">
          <span className="cf-label">协议</span>
          <select className="cf-input" value={form.protocol}
            onChange={e => {
              const p = PROTOCOLS.find(x => x.id === e.target.value)
              set('protocol', e.target.value)
              if (p) set('baseUrl', p.baseUrl)
            }}>
            {PROTOCOLS.map(p => <option key={p.id} value={p.id}>{p.label}</option>)}
          </select>
        </label>
      </div>

      <label className="cf-field">
        <span className="cf-label">接口地址</span>
        <input className="cf-input" value={form.baseUrl} placeholder="https://api.example.com/v1"
          onChange={e => set('baseUrl', e.target.value)} />
      </label>

      <label className="cf-field">
        <span className="cf-label">API Key{form.keyHint ? `（已保存，末四位 ${form.keyHint}）` : ''}</span>
        <input className="cf-input" type="password" autoComplete="off" value={apiKey}
          placeholder={form.keyHint ? '留空表示不修改' : 'sk-…'}
          onChange={e => setApiKey(e.target.value)} />
        <span style={{ fontSize: 12, color: 'var(--cf-caption)' }}>密钥只存在本机，不会回传给页面。接上 Host 后改存系统凭证区。</span>
      </label>

      <div className="cf-field">
        <span className="cf-label">模型与能力</span>
        <div style={{ display: 'flex', gap: 6 }}>
          <input className="cf-input" value={modelId} placeholder="手动添加模型 id，例如 gpt-image-1"
            onChange={e => setModelId(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addModel() } }} />
          <Btn onClick={addModel} disabled={!modelId.trim()}>添加</Btn>
        </div>
        {form.models.length === 0 ? (
          <p className="cf-end" style={{ textAlign: 'start' }}>还没有模型。保存渠道后可以「拉取模型」，或在这里手动添加。</p>
        ) : (
          <div style={{ display: 'grid', gap: 6, marginTop: 4 }}>
            {form.models.map(m => (
              <div key={m.id} style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap', padding: '8px 10px', borderRadius: 'var(--cf-r-sm)', boxShadow: 'inset 0 0 0 var(--cf-hair) var(--cf-line)' }}>
                <span style={{ fontSize: 12, minWidth: 120 }}>{m.label || m.id}</span>
                <span style={{ display: 'flex', gap: 4, marginInlineStart: 'auto' }}>
                  {CAPS.map(c => (
                    <button key={c.id} type="button" className={`cf-chip cf-chip--tag${(m.caps || []).includes(c.id) ? ' is-on' : ''}`}
                      onClick={() => toggleCap(m.id, c.id)}>{c.label}</button>
                  ))}
                </span>
                <IconBtn name="trash" label={`移除 ${m.id}`}
                  onClick={() => set('models', form.models.filter(x => x.id !== m.id))} />
              </div>
            ))}
          </div>
        )}
      </div>

      <p style={{ fontSize: 12, color: 'var(--cf-caption)' }}>
        自动拉取模型与「实测出图」会在接上 Host 后可用；现在可以先手动添加并勾选能力。
      </p>
    </Dialog>
  )
}

/** 首次导入时按 id 猜一下能力，用户可改。 */
function guessCaps(id) {
  const s = id.toLowerCase()
  if (/image|dall|flux|seedream|wanx|imagen|sd|midjourney|mj/.test(s)) return ['image']
  if (/veo|kling|sora|runway|video/.test(s)) return ['video']
  if (/tts|audio|speech|whisper|music/.test(s)) return ['audio']
  return ['text']
}
