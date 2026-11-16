// 画布数据模型与状态。对齐 hb.c0c.cc 的节点体系：
// image / text / config / video / audio / group 六种节点，节点间用连线表达参考关系。

export const NODE_TYPES = ['image', 'text', 'config', 'video', 'audio', 'group']

export const TYPE_LABEL = {
  image: '图片',
  text: '文本',
  config: '配置',
  video: '视频',
  audio: '音频',
  group: '组',
}

export const GRID_STYLES = [
  { id: 'dots', label: '点阵' },
  { id: 'lines', label: '网格' },
  { id: 'blank', label: '空白' },
]

export const RATIOS = ['1:1', '4:3', '3:4', '16:9', '9:16', '3:2', '2:3']

export const IMAGE_MODELS = [
  { id: 'gpt-image-1', label: 'gpt-image-1', channel: 'OpenAI' },
  { id: 'gemini-3-pro-image', label: 'gemini-3-pro-image', channel: 'Gemini' },
  { id: 'seedream-4', label: 'seedream-4', channel: '火山' },
  { id: 'flux-2-pro', label: 'flux-2-pro', channel: 'BFL' },
]

export const PROMPT_LIBRARY = [
  { id: 'p1', name: '电影感人像', text: '35mm 胶片质感，柔和侧逆光，浅景深，人物半侧脸，背景虚化成暖色光斑' },
  { id: 'p2', name: '产品白底图', text: '纯白背景，柔光箱打光，产品居中，轻微投影，商业摄影质感' },
  { id: 'p3', name: '等距插画', text: '等距视角，柔和渐变，扁平插画风格，圆角几何造型，浅色背景' },
  { id: 'p4', name: '黑白胶片', text: '高对比黑白，颗粒感，街头抓拍，广角，暗角明显' },
  { id: 'p5', name: '国风山水', text: '水墨留白，远山淡墨，宣纸质感，竖构图，一叶小舟' },
  { id: 'p6', name: '赛博夜景', text: '雨夜霓虹，湿润地面反射，青橙对比，长曝光车流，香港街巷' },
]

let counter = 0
export function newId(prefix = 'n') {
  counter += 1
  return `${prefix}_${Date.now().toString(36)}${counter.toString(36)}`
}

/** 一张卡片的默认尺寸，按类型给。 */
export function defaultSize(type) {
  switch (type) {
    case 'image': return { w: 260, h: 300 }
    case 'video': return { w: 300, h: 260 }
    case 'audio': return { w: 260, h: 150 }
    case 'text': return { w: 240, h: 180 }
    case 'config': return { w: 260, h: 230 }
    case 'group': return { w: 420, h: 320 }
    default: return { w: 240, h: 200 }
  }
}

/** 造一个节点。 */
export function makeNode(type, at, extra = {}) {
  const size = defaultSize(type)
  const base = {
    id: newId(type[0]),
    type,
    x: Math.round(at.x - size.w / 2),
    y: Math.round(at.y - size.h / 2),
    w: size.w,
    h: size.h,
    name: '',
    status: 'idle',
    z: 1,
    ...extra,
  }
  if (type === 'text') base.text = extra.text ?? ''
  if (type === 'config') {
    base.model = extra.model ?? IMAGE_MODELS[0].id
    base.ratio = extra.ratio ?? '1:1'
    base.count = extra.count ?? 1
    base.systemPrompt = extra.systemPrompt ?? ''
  }
  if (type === 'image' || type === 'video') {
    base.prompt = extra.prompt ?? ''
    base.ratio = extra.ratio ?? '1:1'
    base.locked = extra.locked ?? true
  }
  if (type === 'audio') base.prompt = extra.prompt ?? ''
  return base
}

export const initialState = () => ({
  canvases: [
    { id: 'cv1', name: '未命名画布', updatedAt: Date.now() },
  ],
  activeCanvas: 'cv1',
  nodes: [],
  edges: [],
  selection: [],
  camera: { x: 0, y: 0, s: 1 },
  grid: 'dots',
  theme: 'dark',
  minimap: true,
  panel: 'inspector',
  undo: [],
  redo: [],
})

// 演示用的起步内容：一条「文本 → 配置 → 图片」的流程，让画布一打开就有东西看
export function seedCanvas() {
  const t = makeNode('text', { x: 300, y: 300 }, { text: '雨夜的霓虹街角，湿润地面反射招牌' })
  const c = makeNode('config', { x: 620, y: 300 }, { model: 'gpt-image-1', ratio: '3:4', count: 1 })
  const i1 = makeNode('image', { x: 940, y: 220 }, { prompt: '雨夜的霓虹街角，湿润地面反射招牌', ratio: '3:4' })
  const i2 = makeNode('image', { x: 1240, y: 220 }, { prompt: '雨夜的霓虹街角，湿润地面反射招牌', ratio: '3:4' })
  const i3 = makeNode('image', { x: 940, y: 540 }, { prompt: '同一街角的清晨，雨停后的反光', ratio: '3:4' })
  const g = makeNode('group', { x: 880, y: 120 }, { w: 620, h: 720, name: '霓虹街角' })
  const nodes = [g, t, c, i1, i2, i3]
  // 组在最底层
  for (const n of nodes) if (n.type !== 'group') n.z = 2
  const edges = [
    { id: newId('e'), from: t.id, to: c.id },
    { id: newId('e'), from: c.id, to: i1.id },
    { id: newId('e'), from: c.id, to: i2.id },
    { id: newId('e'), from: c.id, to: i3.id },
  ]
  return { nodes, edges }
}

/** 连线合法性：配置节点之间不连；自己不能连自己；不重复连。 */
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

/** 把选中节点包进一个组。 */
export function wrapInGroup(nodes, selection) {
  const kids = nodes.filter(n => selection.includes(n.id) && n.type !== 'group')
  if (!kids.length) return null
  const pad = 48
  const minX = Math.min(...kids.map(n => n.x)) - pad
  const minY = Math.min(...kids.map(n => n.y)) - pad - 34
  const maxX = Math.max(...kids.map(n => n.x + n.w)) + pad
  const maxY = Math.max(...kids.map(n => n.y + n.h)) + pad
  const group = makeNode('group', { x: (minX + maxX) / 2, y: (minY + maxY) / 2 }, {
    w: Math.round(maxX - minX),
    h: Math.round(maxY - minY),
    name: '新分组',
    childIds: kids.map(n => n.id),
  })
  group.x = Math.round(minX)
  group.y = Math.round(minY)
  return group
}
