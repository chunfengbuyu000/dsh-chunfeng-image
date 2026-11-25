// 配置：三个标签（渠道 / 偏好设置含存储摘要 / 提示词来源）
import React from 'react'
import { Btn, Dialog, Empty, Icon, IconBtn } from '../ui.jsx'
import { CAPS, PROTOCOLS, QUALITIES, RATIOS, RESOLUTIONS, newChannel, newId, modelsWithCap, modelKey, findModel } from '../store.js'
import { fetchUpstreamModels, guessCapability } from '../gen/models.js'
import { loadConfigMirror } from '../storage/persist.js'
import { measure, purgeOrphans, formatBytes } from '../storage/quota.js'
import {
  BUILTIN_PROMPT_SOURCES,
  fetchAllSources,
  fetchSingleSource,
  describeSources,
  normalizeSourceRecord,
  readPromptCache,
  sourceNeedsFetch,
} from '../prompts/sources.js'
import { SourcePreviewDialog } from '../prompts/prompt-ui.jsx'
import { buildBackup } from '../storage/zip.js'
import { get as idbGet } from '../storage/idb.js'
import { STORES } from '../storage/keys.js'

// 三个 tab。本地存储并进「偏好设置」底部一行，不单开；
// 本地代理与 WebDAV 已删除（生成走 Host 转发不需要代理；同步只做 ZIP 导出）。
const TABS = [
  { id: 'channels', label: '渠道' },
  { id: 'defaults', label: '偏好设置' },
  { id: 'sources', label: '提示词来源' },
]

export function ConfigPage({
  tab, onTab, channels, onChannels, defaults, onDefaults,
  promptSources, onPromptSources, say, state, onPrompts,
  onUsePrompt, onCopyPrompt, onSavePromptAsset,
  showToolbarLabels, onShowToolbarLabels, theme, onTheme,
}) {
  const [editing, setEditing] = React.useState(null)
  const [confirm, setConfirm] = React.useState(null)
  const [sourceForm, setSourceForm] = React.useState({ name: '', url: '' })
  const [working, setWorking] = React.useState('')

  /** 真拉模型列表：经 Host 转发，绕开 CORS。拉到后按名称猜能力标签并合并。 */
  const pullModels = async (ch) => {
    if (working) return
    if (!ch.apiKey) { say?.('这个渠道还没有填 API Key', 'error'); return }
    setWorking(ch.id)
    try {
      const list = await fetchUpstreamModels(ch)
      const existing = new Set((ch.models || []).map(m => m.id))
      const merged = [
        ...(ch.models || []),
        ...list.filter(m => !existing.has(m.id)).map(m => ({
          id: m.id,
          label: m.label,
          caps: [guessCapability(m.id)],
          enabled: true,
          source: 'pulled',
        })),
      ]
      onChannels(channels.map(c => (c.id === ch.id ? { ...c, models: merged } : c)))
      say?.(`拉到 ${list.length} 个模型，新增 ${merged.length - (ch.models?.length || 0)} 个`)
    } catch (error) {
      say?.(error.message || '拉取失败', 'error')
    } finally {
      setWorking('')
    }
  }

  /** 从本机文件恢复渠道：浏览器存储丢失时的手动兜底。 */
  const restoreFromFile = async () => {
    if (working) return
    setWorking('restore')
    try {
      const cfg = await loadConfigMirror()
      if (!cfg?.channels?.length) { say?.('本机文件里没有可恢复的渠道', 'error'); return }
      onChannels(cfg.channels)
      say?.(`已从本机文件恢复 ${cfg.channels.length} 个渠道`)
    } catch (error) {
      say?.(error.message || '恢复失败', 'error')
    } finally {
      setWorking('')
    }
  }

  /** 连通性诊断：用一次最轻的 models 请求判断「能不能通、通到哪一步」。 */
  const diagnose = async (ch) => {
    if (working) return
    if (!ch.apiKey) { say?.('先填 API Key 再诊断', 'error'); return }
    setWorking(ch.id)
    try {
      const t0 = Date.now()
      const list = await fetchUpstreamModels(ch)
      say?.(`连通正常：${Date.now() - t0}ms，上游有 ${list.length} 个模型`)
    } catch (error) {
      say?.(`诊断失败：${error.message}`, 'error')
    } finally {
      setWorking('')
    }
  }

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
            <p className="cf-page-sub">渠道聚合、默认参数与本地存储</p>
          </div>
        </div>

        <div className="cf-config-notice">
          <span>JSON 文件含明文 API Key，请妥善保管。</span>
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
              <p className="cf-section-desc">每个渠道选择一个协议并拉取模型，为每个模型指定能力（生图 / 视频 / 文本 / 音频）。</p>
              <div style={{ display: 'flex', gap: 6 }}>
                <Btn onClick={restoreFromFile} disabled={Boolean(working)}>从本机文件恢复</Btn>
                <Btn icon="plus" onClick={() => setEditing(newChannel())}>新增渠道</Btn>
              </div>
            </div>
            {channels.length === 0 ? (
              <Empty icon="gear" title="还没有渠道" hint="新增一个渠道，填好接口地址与 Key，就能在这里拉取模型并指定能力。"
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
                        {ch.apiKey ? ` · 密钥 ••••${ch.keyHint || ch.apiKey.slice(-4)}` : ch.keyHint ? ` · 密钥需重填（只有末四位）` : ' · 未填密钥'}
                      </span>
                    </div>
                    <span className="cf-channel-actions">
                      <IconBtn name="refresh" label="拉取模型" onClick={() => pullModels(ch)} />
                      <IconBtn name="target" label="连通性诊断" onClick={() => diagnose(ch)} />
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
          <DefaultsTab
            channels={channels} defaults={defaults} onDefaults={onDefaults}
            state={state} say={say}
            showToolbarLabels={showToolbarLabels} onShowToolbarLabels={onShowToolbarLabels}
            theme={theme} onTheme={onTheme}
          />
        ) : null}

        {tab === 'sources' ? (
          <SourcesTab
            promptSources={promptSources}
            onPromptSources={onPromptSources}
            say={say}
            onPrompts={onPrompts}
            onUsePrompt={onUsePrompt}
            onCopyPrompt={onCopyPrompt}
            onSavePromptAsset={onSavePromptAsset}
          />
        ) : null}

      </div>

      {editing ? (
        <ChannelDialog channel={editing} isNew={!channels.some(c => c.id === editing.id)} onClose={() => setEditing(null)}
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

/**
 * 提示词来源。
 *
 * 四个状态都要让用户看见：
 *   未配置 / 有缓存但没拉过 / 拉取中 / 成功（条数+时间）/ 失败（原因）
 * 只显示「成功」会让失败静默积压 —— 用户以为有数据，其实是很久以前的缓存。
 */
function SourcesTab({ promptSources = [], onPromptSources, say, onPrompts, onUsePrompt, onCopyPrompt, onSavePromptAsset }) {
  const [form, setForm] = React.useState({ name: '', url: '' })
  const [busy, setBusy] = React.useState(false)
  const [busyOneId, setBusyOneId] = React.useState('')
  const [results, setResults] = React.useState([])
  const [viewing, setViewing] = React.useState(null)
  const abortRef = React.useRef(null)
  const cache = React.useMemo(() => readPromptCache(), [busy, busyOneId, promptSources])

  const statuses = describeSources(promptSources, results, cache)
  const existingKeys = new Set(promptSources.map((s) => normalizeSourceRecord(s).url))
  const missingBuiltins = BUILTIN_PROMPT_SOURCES.filter((b) => !existingKeys.has(b.url))
  const enabledSources = promptSources.filter((s) => s && s.url && s.enabled !== false)
  const pendingSources = enabledSources.filter((s, idx) => {
    const st = statuses.find((x) => x.id === s.id || x.url === normalizeSourceRecord(s).url)
    return st?.ok === false || sourceNeedsFetch(s, cache)
  })

  const runList = async (list, { onlyPending = false } = {}) => {
    const enabled = (list || []).filter((s) => s && s.url && s.enabled !== false)
    if (!enabled.length) { say?.('先添加并启用至少一个来源', 'error'); return }
    if (busy) { abortRef.current?.abort(); return }
    const controller = new AbortController()
    abortRef.current = controller
    setBusy(true)
    if (!onlyPending) setResults([])
    try {
      const out = await fetchAllSources(list, {
        signal: controller.signal,
        onlyMissingOrFailed: onlyPending,
        onResult: (r, nextCache) => {
          setResults((prev) => [...prev.filter((x) => x.url !== r.url && x.id !== r.id), r])
          if (r.ok) onPrompts?.(undefined, nextCache)
        },
      })
      if (!onlyPending) setResults(out.results)
      onPrompts?.(out.prompts, out.cache)
      if (out.results.length === 0 && out.skipped > 0) {
        say?.(`全部 ${out.skipped} 个来源均已成功缓存，无需重复拉取`)
        return
      }
      const okCount = out.results.filter((r) => r.ok).length
      const failCount = out.results.length - okCount
      const skipNote = out.skipped > 0 ? `（跳过 ${out.skipped} 个已缓存）` : ''
      if (failCount === 0) say?.(`已从 ${okCount} 个来源拉到 ${out.prompts.length} 条提示词${skipNote}`)
      else say?.(`本次 ${okCount} 成功 / ${failCount} 失败${skipNote}，共 ${out.prompts.length} 条可用`, 'error')
    } catch (error) {
      say?.(error.message || '拉取失败', 'error')
    } finally {
      abortRef.current = null
      setBusy(false)
    }
  }

  const runOne = async (source) => {
    if (busy || busyOneId) return
    setBusyOneId(source.id)
    try {
      const { result, cache: nextCache } = await fetchSingleSource(source)
      setResults((prev) => [...prev.filter((r) => r.url !== result.url && r.id !== result.id), result])
      if (result.ok) {
        onPrompts?.(undefined, nextCache)
        say?.(`已从「${result.name}」拉到 ${result.items.length} 条`)
      } else {
        say?.(`拉取失败：${result.error || '未知原因'}`, 'error')
      }
    } catch (error) {
      say?.(error.message || '拉取失败', 'error')
    } finally {
      setBusyOneId('')
    }
  }

  const addMissingBuiltins = async () => {
    if (!missingBuiltins.length) return
    const next = [...promptSources, ...missingBuiltins]
    onPromptSources?.(next)
    await runList(next, { onlyPending: true })
  }

  const toggleEnabled = (source) => {
    const next = promptSources.map((x) => (x.id === source.id ? { ...x, enabled: x.enabled === false } : x))
    onPromptSources?.(next)
  }

  const fmtTime = (ts) => {
    if (!ts) return ''
    const d = new Date(ts)
    const diff = Date.now() - ts
    if (diff < 60_000) return '刚刚'
    if (diff < 3600_000) return `${Math.floor(diff / 60_000)} 分钟前`
    if (diff < 86400_000) return `${Math.floor(diff / 3600_000)} 小时前`
    return d.toLocaleDateString('zh-CN')
  }

  const viewNorm = viewing ? normalizeSourceRecord(viewing) : null
  const viewItems = viewNorm
    ? (cache[viewNorm.url]?.items || cache[viewing.url]?.items || cache[viewNorm.id]?.items || [])
    : []

  return (
    <>
      <div className="cf-section-head">
        <p className="cf-section-desc">提示词库从这些 JSON 来源拉取（60 秒超时、自动并发切换 jsDelivr 镜像，并支持只重试失败项）。</p>
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--cf-sp-2)', flexShrink: 0 }}>
          {!busy && pendingSources.length > 0 && pendingSources.length < enabledSources.length ? (
            <Btn variant="primary" icon="refresh" onClick={() => runList(promptSources, { onlyPending: true })}>
              仅拉取未成功 ({pendingSources.length})
            </Btn>
          ) : null}
          <Btn icon={busy ? 'stop' : 'refresh'} onClick={() => runList(promptSources)}>
            {busy ? '停止' : '拉取全部'}
          </Btn>
        </div>
      </div>

      <div className="cf-card" style={{ padding: 'var(--cf-sp-4)', display: 'grid', gap: 'var(--cf-sp-3)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) minmax(0,2fr) auto', gap: 'var(--cf-sp-2)' }}>
          <input className="cf-input" placeholder="名称" value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))} />
          <input className="cf-input" placeholder="https://example.com/prompts.json" value={form.url}
            onChange={(e) => setForm((f) => ({ ...f, url: e.target.value }))} />
          <Btn variant="primary" disabled={!form.url.trim()} onClick={() => {
            const norm = normalizeSourceRecord({
              id: newId('src'),
              name: form.name.trim(),
              url: form.url.trim(),
            })
            onPromptSources([...promptSources, {
              id: norm.id,
              name: norm.name,
              url: norm.url,
              fallbackUrl: norm.fallbackUrl,
              homepage: norm.homepage,
              enabled: true,
              builtIn: norm.builtIn,
            }])
            setForm({ name: '', url: '' })
            say?.(norm.convertedFromHomepage || norm.convertedFromBlob
              ? '来源已添加（已自动转换为 JSON 直链）'
              : '来源已添加')
          }}>添加</Btn>
        </div>

        {missingBuiltins.length > 0 ? (
          <div className="cf-source-presets">
            <span>还有 {missingBuiltins.length} 个官方提示词源未添加（包含封面图与配套参考图，共千余条）。</span>
            <Btn size="sm" icon="plus" disabled={busy} onClick={addMissingBuiltins}>
              一键添加并拉取 {missingBuiltins.length} 个官方来源
            </Btn>
          </div>
        ) : null}

        {promptSources.length === 0 ? (
          <p className="cf-end" style={{ textAlign: 'start' }}>还没有配置来源。点上方按钮即可一键启用全部官方来源。</p>
        ) : (
          <div style={{ display: 'grid', gap: 2 }}>
            {promptSources.map((source, i) => {
              const st = statuses[i]
              const disabled = source.enabled === false
              return (
                <div key={source.id} style={{ padding: '10px 4px', borderBottom: 'var(--cf-hair) solid var(--cf-line)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <input
                      type="checkbox"
                      checked={!disabled}
                      onChange={() => toggleEnabled(source)}
                      aria-label={`启用 ${source.name}`}
                      style={{ accentColor: 'var(--cf-accent)' }}
                    />
                    <span style={{ fontSize: 13 }}>{source.name}</span>
                    {source.builtIn ? <span className="cf-tag">官方</span> : null}
                    <span style={{
                      fontSize: 'var(--cf-fs-11)',
                      padding: '1px 6px',
                      borderRadius: 'var(--cf-r-pill)',
                      color: disabled ? 'var(--cf-caption)' : st.ok === true ? 'var(--cf-success)' : st.ok === false ? 'var(--cf-danger)' : 'var(--cf-caption)',
                      boxShadow: 'inset 0 0 0 var(--cf-hair) currentColor',
                    }}>
                      {disabled ? '已停用' : st.ok === true ? '成功' : st.ok === false ? '失败' : st.count ? '缓存' : '未拉取'}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4, marginInlineStart: 'auto' }}>
                      <Btn size="sm" onClick={() => setViewing(source)}>查看</Btn>
                      <Btn size="sm" icon="refresh" disabled={busy || busyOneId === source.id || disabled} onClick={() => runOne(source)}>
                        {busyOneId === source.id ? '拉取中' : '拉取'}
                      </Btn>
                      <IconBtn name="trash" label="移除来源"
                        onClick={() => onPromptSources(promptSources.filter((x) => x.id !== source.id))} />
                    </div>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--cf-caption)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', marginTop: 2 }}>
                    {st.url || source.url}
                  </div>
                  <div style={{ fontSize: 12, color: st.ok === false ? 'var(--cf-danger)' : 'var(--cf-muted)', marginTop: 2 }}>
                    {st.ok === false
                      ? `失败：${st.error || '未知原因'}`
                      : st.count
                        ? `${st.count} 条 · ${fmtTime(st.at)}${st.ms ? ` · ${st.ms}ms` : ''}`
                        : '还没有拉取'}
                  </div>
                </div>
              )
            })}
          </div>
        )}
      </div>

      {viewing ? (
        <SourcePreviewDialog
          source={viewing}
          items={viewItems}
          busy={busyOneId === viewing.id}
          onRefresh={() => runOne(viewing)}
          onUse={onUsePrompt}
          onCopy={onCopyPrompt}
          onSaveAsset={onSavePromptAsset}
          onClose={() => setViewing(null)}
        />
      ) : null}
    </>
  )
}

function DefaultsTab({ channels, defaults, onDefaults, state, say, showToolbarLabels, onShowToolbarLabels, theme = 'system', onTheme }) {
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

      <div className="cf-field">
        <span className="cf-label">图片工具条</span>
        <div className="cf-chips">
          <button type="button" className={`cf-chip${showToolbarLabels ? '' : ' is-on'}`}
            onClick={() => onShowToolbarLabels?.(false)}>只显示图标</button>
          <button type="button" className={`cf-chip${showToolbarLabels ? ' is-on' : ''}`}
            onClick={() => onShowToolbarLabels?.(true)}>显示文字</button>
        </div>
        <span style={{ fontSize: 12, color: 'var(--cf-caption)' }}>
          鼠标悬停在画布里的图片节点上，上方会出现一排操作按钮。
        </span>
      </div>

      <div className="cf-field">
        <span className="cf-label">外观主题</span>
        <div className="cf-chips">
          {[
            { id: 'system', label: '跟随系统' },
            { id: 'light', label: '明亮' },
            { id: 'dark', label: '暗黑' },
          ].map((opt) => (
            <button key={opt.id} type="button" className={`cf-chip${theme === opt.id ? ' is-on' : ''}`}
              onClick={() => onTheme?.(opt.id)}>{opt.label}</button>
          ))}
        </div>
      </div>

      {/* 存储摘要：不单开 tab，只占一行。写失败不再静默，是这条存在的理由。 */}
      <StorageRow state={state} say={say} />
    </>
  )
}

function StorageRow({ state, say }) {
  const [stats, setStats] = React.useState(null)
  const [busy, setBusy] = React.useState(false)
  const [exporting, setExporting] = React.useState(false)

  const refresh = React.useCallback(() => {
    measure().then(setStats).catch((e) => setStats({ unavailable: true, reason: e.message }))
  }, [])
  React.useEffect(refresh, [refresh])

  /**
   * 导出整份备份。
   * 会先把内存态冲刷到 IDB（saveState 有 400ms 防抖），
   * 否则导出的可能是上一拍的数据。
   */
  const exportBackup = async () => {
    if (exporting) return
    setExporting(true)
    try {
      window.__CF_STORAGE__?.flush?.()
      await new Promise((r) => setTimeout(r, 120))
      const { blob, manifest, count } = await buildBackup(state || {}, {
        getBlob: (key) => idbGet(STORES.imageFiles, key).then((rec) => rec?.blob || null),
      })
      const url = URL.createObjectURL(blob)
      const a = document.createElement('a')
      const stamp = new Date().toISOString().slice(0, 10)
      a.href = url
      a.download = `春风画布备份-${stamp}.zip`
      a.click()
      setTimeout(() => URL.revokeObjectURL(url), 4000)
      say?.(`已导出备份：${count} 个文件，${(blob.size / 1024 / 1024).toFixed(1)} MB，含 ${manifest.files.length} 张图`)
    } catch (error) {
      say?.(`导出失败：${error.message}`, 'error')
    } finally {
      setExporting(false)
    }
  }

  const cleanup = async () => {
    if (busy) return
    setBusy(true)
    try {
      // 先 dryRun 报数，用户确认后再删 —— 直接删太危险
      const preview = await purgeOrphans(state || {}, { dryRun: true })
      if (!preview.orphans.length) { say?.('没有可清理的孤儿文件'); return }
      const ok = window.confirm(`将删除 ${preview.orphans.length} 个未被引用的文件，共 ${formatBytes(preview.bytes)}。继续？`)
      if (!ok) return
      const done = await purgeOrphans(state || {}, { dryRun: false })
      say?.(`已清理 ${done.deleted} 个文件，释放 ${formatBytes(done.bytes)}`)
      refresh()
    } catch (e) {
      say?.(`清理失败：${e.message}`, 'error')
    } finally {
      setBusy(false)
    }
  }

  if (!stats) return null
  if (stats.unavailable) {
    return (
      <div className="cf-field" style={{ marginTop: 'var(--cf-sp-5)' }}>
        <span className="cf-label">本地存储</span>
        <span style={{ fontSize: 12, color: 'var(--cf-caption)' }}>当前环境不支持 IndexedDB：{stats.reason}</span>
      </div>
    )
  }

  const pct = stats.quota ? Math.min(100, (stats.usage / stats.quota) * 100) : null
  const parts = stats.stores.filter((x) => x.bytes > 0).map((x) => `${x.label} ${formatBytes(x.bytes)}`)

  return (
    <div className="cf-field" style={{ marginTop: 'var(--cf-sp-5)', paddingTop: 'var(--cf-sp-4)', borderTop: 'var(--cf-hair) solid var(--cf-line)' }}>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--cf-sp-3)', flexWrap: 'wrap' }}>
        <span className="cf-label">本地存储</span>
        <span style={{ fontSize: 12, color: 'var(--cf-muted)' }}>
          已用 {formatBytes(stats.usage)}{parts.length ? ` · ${parts.join(' · ')}` : ''}
        </span>
        {pct !== null ? (
          <span style={{ marginInlineStart: 'auto', fontSize: 12, color: pct > 80 ? 'var(--cf-danger)' : 'var(--cf-caption)' }}>
            配额 {pct.toFixed(1)}%
          </span>
        ) : null}
      </div>
      <div style={{ display: 'flex', gap: 'var(--cf-sp-2)', marginTop: 'var(--cf-sp-2)', flexWrap: 'wrap' }}>
        <Btn size="sm" icon="download" disabled={exporting} onClick={exportBackup}>
          {exporting ? '打包中…' : '导出备份（ZIP）'}
        </Btn>
        <Btn size="sm" icon="trash" disabled={busy} onClick={cleanup}>清理未引用文件</Btn>
        <Btn size="sm" onClick={refresh}>刷新</Btn>
      </div>
    </div>
  )
}


// ---------- 渠道编辑 ----------

function ChannelDialog({ channel, isNew, onClose, onSave, say }) {
  const [form, setForm] = React.useState({ ...channel })
  const [apiKey, setApiKey] = React.useState('')
  const [modelId, setModelId] = React.useState('')
  const set = (k, v) => setForm(f => ({ ...f, [k]: v }))

  // 拉取到的上游模型（只记 id/label），与 form.models 分开存：
  // form.models 是「渠道里有哪些模型 + 各自勾没勾」，
  // available 是「上游有什么」—— 两者做并集渲染，才能实现
  // 「全部列出、勾上的才启用」。
  const [available, setAvailable] = React.useState([])
  const [pulling, setPulling] = React.useState(false)
  const [pullMsg, setPullMsg] = React.useState('')
  const [filter, setFilter] = React.useState('')

  /** 用「输入框里的新 Key」或「已保存的 Key」——和保存按钮的口径保持一致。 */
  const effectiveKey = () => apiKey.trim() || form.apiKey || ''

  const pullModels = async () => {
    if (pulling) return
    if (!String(form.baseUrl || '').trim()) { setPullMsg('先填 Base URL'); return }
    if (!effectiveKey()) { setPullMsg('先填 API Key'); return }

    setPulling(true)
    setPullMsg('')
    try {
      const list = await fetchUpstreamModels({ ...form, apiKey: effectiveKey() })
      setAvailable(list)
      // 增量合并：已有的（含勾选状态、手改过的能力标签）一律不动，只追加新的
      const have = new Set(form.models.map(m => m.id))
      const added = list
        .filter(m => !have.has(m.id))
        .map(m => ({ id: m.id, label: m.label, caps: [guessCapability(m.id)], enabled: true, source: 'pulled' }))
      if (added.length) set('models', [...form.models, ...added])
      setPullMsg(`上游返回 ${list.length} 个模型${added.length ? `，新增 ${added.length} 个` : '，没有新模型'}`)
    } catch (error) {
      setPullMsg(error.message || '拉取失败')
    } finally {
      setPulling(false)
    }
  }

  /** 勾选 = 启用。取消勾选保留条目（enabled:false），别把能力标签一起丢了。 */
  const toggleModel = (id) => {
    // 勾选状态一变，上一条「新增 N 个」的提示就过时了，清掉让它回到计数摘要
    setPullMsg('')
    const cur = form.models.find(m => m.id === id)
    if (cur) {
      set('models', form.models.map(m => (m.id === id ? { ...m, enabled: !m.enabled } : m)))
      return
    }
    const hit = available.find(a => a.id === id)
    set('models', [...form.models, {
      id,
      label: hit?.label || id,
      caps: [guessCapability(id)],
      enabled: true,
      source: 'pulled',
    }])
  }

  /** 并集：上游有的 + 渠道里已有的（可能上游已经下线，或手动加的）。 */
  const modelRows = React.useMemo(() => {
    const ids = []
    const seen = new Set()
    for (const m of form.models) { if (!seen.has(m.id)) { seen.add(m.id); ids.push(m.id) } }
    for (const a of available) { if (!seen.has(a.id)) { seen.add(a.id); ids.push(a.id) } }
    return ids.map((id) => {
      const own = form.models.find(m => m.id === id)
      const up = available.find(a => a.id === id)
      return {
        id,
        label: own?.label || up?.label || id,
        caps: own?.caps || [],
        enabled: Boolean(own?.enabled),
        inChannel: Boolean(own),
        upstream: Boolean(up),
        source: own?.source || 'pulled',
      }
    })
  }, [form.models, available])

  const shownRows = filter.trim()
    ? modelRows.filter(r => r.id.toLowerCase().includes(filter.trim().toLowerCase()))
    : modelRows

  const addModel = () => {
    const id = modelId.trim()
    if (!id) return
    if (form.models.some(m => m.id === id)) { setModelId(''); return }
    set('models', [...form.models, { id, label: id, caps: [guessCapability(id)], enabled: true, source: 'manual' }])
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
    <Dialog title={isNew ? '新增渠道' : '编辑渠道'} wide onClose={onClose}
      footer={<><Btn onClick={onClose}>取消</Btn>
        <Btn variant="primary" disabled={!form.baseUrl.trim()} onClick={() => {
          // 必须存明文：只存末四位的话，永远发不出请求。
          // apiKey 留空表示「不修改」，沿用已有的。
          const nextKey = apiKey.trim() || form.apiKey || ''
          onSave({
            ...form,
            apiKey: nextKey,                                  // 明文，供请求使用
            keyHint: nextKey ? nextKey.slice(-4) : '',         // 末四位，只用于界面显示
            hasKey: Boolean(nextKey),
          })
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
        <div className="cf-form-head">
          <span className="cf-label">模型与能力</span>
          <div className="cf-form-head-actions">
            <Btn size="sm" icon="refresh" onClick={pullModels} disabled={pulling}>
              {pulling ? '拉取中…' : '拉取模型'}
            </Btn>
          </div>
        </div>

        {/* 不用保存就能拉：直接拿对话框里的 Base URL + Key 打上游 */}
        <p className="cf-model-note">
          {pullMsg || (modelRows.length
            ? `共 ${modelRows.length} 个，已启用 ${modelRows.filter(r => r.enabled).length} 个`
            : '填好 Base URL 和 API Key，点「拉取模型」从上游取列表；也可以手动添加。')}
        </p>

        {modelRows.length > 8 ? (
          <input className="cf-input" value={filter} placeholder="筛选模型…"
            onChange={e => setFilter(e.target.value)} style={{ marginBottom: 6 }} />
        ) : null}

        {shownRows.length === 0 ? null : (
          <div className="cf-model-list">
            {shownRows.map((m) => (
              <div key={m.id} className={`cf-model-row${m.enabled ? ' is-on' : ''}`}>
                <input
                  type="checkbox"
                  checked={m.enabled}
                  onChange={() => toggleModel(m.id)}
                  aria-label={`启用 ${m.id}`}
                />
                <span className="cf-model-name" title={m.id}>{m.label || m.id}</span>
                <span className="cf-model-tags">
                  {m.inChannel ? CAPS.map(c => (
                    <button key={c.id} type="button"
                      className={`cf-chip cf-chip--tag${(m.caps || []).includes(c.id) ? ' is-on' : ''}`}
                      onClick={() => toggleCap(m.id, c.id)}
                      title={`切换「${c.label}」能力`}>{c.label}</button>
                  )) : <span className="cf-model-guess">{CAPS.find(c => c.id === (guessCapability(m.id)))?.label || '未标注'}</span>}
                </span>
                <span className="cf-model-src" title={m.upstream ? '上游返回' : '手动添加'}>
                  {m.upstream ? '上游' : '手动'}
                </span>
                {m.inChannel ? (
                  <IconBtn name="trash" label={`移除 ${m.id}`}
                    onClick={() => set('models', form.models.filter(x => x.id !== m.id))} />
                ) : <span className="cf-model-hold" />}
              </div>
            ))}
          </div>
        )}

        <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
          <input className="cf-input" value={modelId} placeholder="手动添加模型 id，例如 gpt-image-1"
            onChange={e => setModelId(e.target.value)}
            onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); addModel() } }} />
          <Btn onClick={addModel} disabled={!modelId.trim()}>添加</Btn>
        </div>
      </div>

      <p style={{ fontSize: 12, color: 'var(--cf-caption)' }}>
        勾选即启用；取消勾选会保留这个模型（连同能力标签），只是不参与生成。
        点能力小标签可以改判定——猜错时在这里改。
      </p>
    </Dialog>
  )
}
