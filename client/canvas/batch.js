// 批量图组的纯逻辑：增删、换主图、拆分。
//
// 不碰 DOM、不碰 React，便于单测。
// 数据形状照着源仓库的 CanvasNodeImage，但只保留这一版真正用得上的字段：
//   { id, storageKey, width, height, bytes, mimeType, prompt, createdAt }
//
// 三条不变式（写错就会出各种怪现象）：
//   1. primaryImageId 若为空或指向不存在的 id，一律回落 images[0].id
//   2. 删掉当前主图时，新主图必须自动顶上来，不能留空
//   3. images 只有一张时不算「批量」，UI 不该显示叠牌

/** 造一条图片条目。 */
export function makeImageEntry({
  storageKey = '', width = 0, height = 0, bytes = 0, mimeType = 'image/png',
  prompt = '', id, createdAt, url = '', degraded = false, remoteUrl = '',
} = {}) {
  return {
    id: id || `img_${Date.now().toString(36)}${Math.random().toString(36).slice(2, 7)}`,
    storageKey,
    width,
    height,
    bytes,
    mimeType,
    prompt,
    createdAt: createdAt || Date.now(),
    // 远程地址 + 降级标记：上游只给链接、本地又下载失败时，
    // 这是唯一还能显示出来的途径。丢掉它们等于让用户「扣了费看不到图」。
    url: url || remoteUrl || '',
    degraded: Boolean(degraded),
  }
}

/** 取主图。primaryImageId 无效时回落第一张，保证永远有东西可显示。 */
export function primaryImage(node) {
  const images = node?.images || []
  if (!images.length) return null
  const byId = images.find((img) => img.id === node.primaryImageId)
  return byId || images[0]
}

/** 是否为批量（多于一张）。一张时 UI 不该显示叠牌和计数。 */
export function isBatch(node) {
  return (node?.images?.length || 0) > 1
}

/** 除主图以外的图，用于展开态。 */
export function secondaryImages(node) {
  const main = primaryImage(node)
  return (node?.images || []).filter((img) => img.id !== main?.id)
}

/** 追加图片。首个条目自动成为主图。 */
export function addImages(node, entries) {
  const list = Array.isArray(entries) ? entries : [entries]
  if (!list.length) return node
  const images = [...(node.images || []), ...list]
  return {
    ...node,
    images,
    primaryImageId: primaryImage(node) ? node.primaryImageId || images[0].id : images[0].id,
    // 兼容字段：storageKey 始终指向主图，旧代码读它不会坏
    storageKey: node.storageKey || images[0].storageKey || '',
  }
}

/** 切换主图。 */
export function setPrimary(node, imageId) {
  if (!(node.images || []).some((img) => img.id === imageId)) return node
  const target = node.images.find((img) => img.id === imageId)
  return {
    ...node,
    primaryImageId: imageId,
    storageKey: target.storageKey || node.storageKey,
  }
}

/**
 * 删除一张。
 * 删的是主图时，第一张剩下的自动接棒 —— 留空会让节点显示空白。
 */
export function removeImage(node, imageId) {
  const images = (node.images || []).filter((img) => img.id !== imageId)
  if (!images.length) {
    return { ...node, images: [], primaryImageId: '', storageKey: '' }
  }
  const stillValid = images.some((img) => img.id === node.primaryImageId)
  const nextPrimary = stillValid ? node.primaryImageId : images[0].id
  const target = images.find((img) => img.id === nextPrimary)
  return {
    ...node,
    images,
    primaryImageId: nextPrimary,
    storageKey: target?.storageKey || '',
  }
}

/**
 * 把批量拆成多个独立节点。
 * 布局：横向排开，间距 gap，起点沿用原节点左上角。
 * 每个新节点的尺寸按自身宽高比重新算，避免拉伸。
 */
export function explodeBatch(node, { gap = 24, makeId = () => `i_${Math.random().toString(36).slice(2, 8)}` } = {}) {
  const images = node.images || []
  if (images.length <= 1) return []
  const out = []
  let x = node.x
  const y = node.y
  images.forEach((img) => {
    // 用原节点高度，宽度按图片比例推，最小 140
    const aspect = img.width && img.height ? img.width / img.height : node.w / node.h
    const h = node.h
    const w = Math.max(140, Math.round(h * aspect))
    out.push({
      ...node,
      id: makeId(),
      x,
      y,
      w,
      h,
      images: [img],
      primaryImageId: img.id,
      storageKey: img.storageKey || '',
      // 拆开后状态归位，避免整组都在转圈
      status: 'idle',
    })
    x += w + gap
  })
  return out
}

/** 把多张图合成一个批量节点（合并动作的反向）。 */
export function mergeIntoBatch(nodes, { makeId } = {}) {
  if (nodes.length <= 1) return null
  const base = nodes[0]
  const images = []
  let x = base.x
  let y = base.y
  let right = -Infinity
  let bottom = -Infinity
  nodes.forEach((node) => {
    (node.images?.length ? node.images : [{
      id: `img_${node.id}`,
      storageKey: node.storageKey || '',
      width: node.w,
      height: node.h,
      bytes: node.bytes || 0,
      mimeType: node.mimeType || 'image/png',
      prompt: node.prompt || '',
      createdAt: Date.now(),
    }]).forEach((img) => images.push(img))
    right = Math.max(right, node.x + node.w)
    bottom = Math.max(bottom, node.y + node.h)
  })
  return {
    ...base,
    id: makeId ? makeId() : `i_${Math.random().toString(36).slice(2, 8)}`,
    x,
    y,
    w: Math.max(base.w, right - x),
    h: Math.max(base.h, bottom - y),
    images,
    primaryImageId: images[0]?.id || '',
    storageKey: images[0]?.storageKey || '',
    status: 'idle',
  }
}
