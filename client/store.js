// 春风画布 · 数据模型
// 页面：画布列表 / 画布编辑器 / 生图工作台 / 提示词库 / 我的资产 / 配置

export const VIEWS = [
  { id: 'canvas', label: '我的画布', icon: 'canvas' },
  { id: 'studio', label: '生图工作台', icon: 'image' },
  { id: 'prompts', label: '提示词库', icon: 'book' },
  { id: 'assets', label: '我的资产', icon: 'folder' },
  { id: 'config', label: '配置', icon: 'sliders' },
]

export const NODE_TYPES = { image: '图片', text: '文本', config: '配置', audio: '音频', group: '组' }

export const GRID_STYLES = [
  { id: 'dots', label: '点阵' },
  { id: 'lines', label: '网格' },
  { id: 'blank', label: '空白' },
]

export const RATIOS = [
  { id: '1:1', label: '1:1', w: 1024, h: 1024 },
  { id: '4:3', label: '4:3', w: 1152, h: 864 },
  { id: '3:4', label: '3:4', w: 864, h: 1152 },
  { id: '16:9', label: '16:9', w: 1280, h: 720 },
  { id: '9:16', label: '9:16', w: 720, h: 1280 },
]

export const QUALITIES = ['自动', '低', '中', '高', '极高', '最高']
export const RESOLUTIONS = ['1k', '2k', '4k', '自动']
export const CAPS = [
  { id: 'image', label: '生图' },
  { id: 'video', label: '视频' },
  { id: 'text', label: '文本' },
  { id: 'audio', label: '音频' },
]
export const PROTOCOLS = [
  { id: 'openai', label: 'OpenAI', baseUrl: 'https://api.openai.com/v1' },
  { id: 'gemini', label: 'Gemini', baseUrl: 'https://generativelanguage.googleapis.com/v1beta' },
]
export const ASSET_KINDS = [
  { id: 'all', label: '全部' },
  { id: 'text', label: '文本' },
  { id: 'image', label: '图片' },
]

let seq = 0
export function newId(prefix = 'x') {
  seq += 1
  return `${prefix}_${Date.now().toString(36)}${seq.toString(36)}`
}

export function newCanvas(name = '未命名画布') {
  return { id: newId('cv'), name, nodes: [], edges: [], camera: { x: 0, y: 0, s: 1 }, grid: 'dots', updatedAt: Date.now() }
}

export function defaultSize(type) {
  switch (type) {
    case 'image': return { w: 240, h: 268 }
    case 'audio': return { w: 240, h: 140 }
    case 'text': return { w: 230, h: 160 }
    case 'config': return { w: 240, h: 176 }
    case 'group': return { w: 420, h: 320 }
    default: return { w: 240, h: 200 }
  }
}

export function makeNode(type, at, extra = {}) {
  const size = defaultSize(type)
  const node = {
    id: newId(type[0]),
    type,
    x: Math.round(at.x - size.w / 2),
    y: Math.round(at.y - size.h / 2),
    w: size.w,
    h: size.h,
    name: '',
    status: 'idle',
    z: type === 'group' ? 1 : 2,
    ...extra,
  }
  if (type === 'text') node.text = extra.text ?? ''
  if (type === 'config') {
    node.modelKey = extra.modelKey ?? ''
    node.ratio = extra.ratio ?? '1:1'
    node.count = extra.count ?? 1
  }
  if (type === 'image') {
    node.prompt = extra.prompt ?? ''
    node.ratio = extra.ratio ?? '1:1'
    node.locked = extra.locked ?? true
  }
  if (type === 'audio') node.prompt = extra.prompt ?? ''
  return node
}

// ---------- 渠道 ----------

export function newChannel(protocol = 'openai') {
  const p = PROTOCOLS.find(x => x.id === protocol) || PROTOCOLS[0]
  return {
    id: newId('ch'),
    name: '',
    protocol: p.id,
    baseUrl: p.baseUrl,
    keyHint: '',
    hasKey: false,
    models: [],
    enabled: true,
  }
}

export function modelKey(channelId, modelId) {
  return `${channelId}:${modelId}`
}

export function findModel(channels, key) {
  if (!key) return null
  const [channelId, ...rest] = key.split(':')
  const ch = channels.find(c => c.id === channelId)
  if (!ch) return null
  const m = ch.models.find(x => x.id === rest.join(':'))
  if (!m) return null
  return { channel: ch, model: m, label: m.label || m.id }
}

/** 所有具备某能力的模型，给选择器用。 */
export function modelsWithCap(channels, cap = 'image') {
  const out = []
  for (const ch of channels) {
    if (!ch.enabled) continue
    for (const m of ch.models) {
      if (!m.enabled) continue
      if ((m.caps || []).includes(cap)) out.push({ key: modelKey(ch.id, m.id), model: m, channel: ch })
    }
  }
  return out
}

// ---------- 提示词 ----------

export const PROMPT_SEED = [
  { id: 'p1', title: '电影感人像', text: '35mm 胶片质感，柔和侧逆光，浅景深，人物半侧脸，背景虚化成暖色光斑', category: '摄影', tags: ['人像', '胶片'] },
  { id: 'p2', title: '产品白底图', text: '纯白背景，柔光箱打光，产品居中，轻微投影，商业摄影质感', category: '商业', tags: ['产品', '白底'] },
  { id: 'p3', title: '等距插画', text: '等距视角，柔和渐变，扁平插画风格，圆角几何造型，浅色背景', category: '插画', tags: ['等距', '扁平'] },
  { id: 'p4', title: '黑白胶片街拍', text: '高对比黑白，颗粒感，街头抓拍，广角，暗角明显', category: '摄影', tags: ['黑白', '街拍'] },
  { id: 'p5', title: '国风山水', text: '水墨留白，远山淡墨，宣纸质感，竖构图，一叶小舟', category: '国风', tags: ['水墨', '留白'] },
  { id: 'p6', title: '赛博夜景', text: '雨夜霓虹，湿润地面反射，青橙对比，长曝光车流，香港街巷', category: '场景', tags: ['夜景', '霓虹'] },
  { id: 'p7', title: '极简几何海报', text: '大面积留白，单一几何主体，高对比配色，硬边阴影，印刷质感', category: '设计', tags: ['极简', '海报'] },
  { id: 'p8', title: '自然光静物', text: '窗光从侧面进入，木质台面，克制的道具，浅景深，安静的色调', category: '摄影', tags: ['静物', '自然光'] },
]

// ---------- 资产 ----------

export const ASSET_SEED = [
  { id: 'a1', kind: 'text', title: '品牌口吻说明', text: '克制、具体、不用形容词堆叠，先给结论再给理由。', tags: ['文案', '规范'], source: '手动添加' },
  { id: 'a2', kind: 'text', title: '常用负面词', text: '不要文字、不要水印、不要多余的肢体、不要过曝', tags: ['负面词'], source: '手动添加' },
]

// ---------- 初始状态 ----------

export function initialState() {
  return {
    view: 'canvas',
    openCanvasId: null,
    canvases: [],
    channels: [],
    prompts: PROMPT_SEED.map(p => ({ ...p })),
    promptSources: [],
    assets: ASSET_SEED.map(a => ({ ...a })),
    defaults: { image: { modelKey: '', size: '1024x1024', ratio: '1:1', count: 1, quality: '自动', resolution: '自动' }, canvasCount: 1 },
    records: [],
    configTab: 'channels',
    grid: 'dots',
  }
}

/** 演示用：打开产品时先给一张示例画布，让画布页不是空的。 */
export function seedCanvas() {
  // 显式矩形坐标，避免 makeNode 的中心定位算出重叠
  const place = (type, x, y, w, h, extra) => {
    const n = makeNode(type, { x: x + w / 2, y: y + h / 2 }, { ...extra, w, h })
    n.x = x; n.y = y
    return n
  }
  const g = place('group', 660, 120, 640, 700, { name: '霓虹街角' })
  const t = place('text', 120, 300, 230, 160, { text: '雨夜的霓虹街角，湿润地面反射招牌' })
  const c = place('config', 400, 300, 240, 176, { ratio: '3:4', count: 1 })
  const a = place('image', 700, 200, 240, 268, { prompt: '雨夜的霓虹街角，湿润地面反射招牌', ratio: '3:4' })
  const b = place('image', 980, 200, 240, 268, { prompt: '雨夜的霓虹街角，湿润地面反射招牌', ratio: '3:4' })
  const d = place('image', 700, 510, 240, 268, { prompt: '同一街角的清晨，雨停后的反光', ratio: '3:4' })
  const edges = [
    { id: newId('e'), from: t.id, to: c.id },
    { id: newId('e'), from: c.id, to: a.id },
    { id: newId('e'), from: c.id, to: b.id },
    { id: newId('e'), from: c.id, to: d.id },
  ]
  return { nodes: [g, t, c, a, b, d], edges }
}

export function canConnect(nodes, edges, from, to) {
  if (from === to) return false
  const a = nodes.find(n => n.id === from)
  const b = nodes.find(n => n.id === to)
  if (!a || !b) return false
  if (a.type === 'config' && b.type === 'config') return false
  if (a.type === 'group' || b.type === 'group') return false
  if (edges.some(e => e.from === from && e.to === to)) return false
  return true
}

export function wrapInGroup(nodes, selection) {
  const kids = nodes.filter(n => selection.includes(n.id) && n.type !== 'group')
  if (!kids.length) return null
  const pad = 44
  const minX = Math.min(...kids.map(n => n.x)) - pad
  const minY = Math.min(...kids.map(n => n.y)) - pad - 34
  const maxX = Math.max(...kids.map(n => n.x + n.w)) + pad
  const maxY = Math.max(...kids.map(n => n.y + n.h)) + pad
  return makeNode('group', { x: (minX + maxX) / 2, y: (minY + maxY) / 2 }, {
    w: Math.round(maxX - minX),
    h: Math.round(maxY - minY),
    name: '新分组',
    childIds: kids.map(n => n.id),
    x: Math.round(minX),
    y: Math.round(minY),
  })
}
