// 画布几何纯函数。不依赖 React、不依赖 store，可以被单测直接覆盖。
//
// 为什么要单独抽出来：
// 这些公式一旦和视图层各写一份，就会慢慢漂移——最典型的表现是
// 「连线在视口里却看不见」「裁剪误判」，而且极难查。
// 抽成纯函数之后，路径生成与裁剪判据用**同一个** curvature()，物理上不可能不一致。

/** 连线曲率。路径与裁剪判据必须共用这一个函数。 */
export function curvature(x1, x2) {
  return Math.max(40, Math.abs(x2 - x1) * 0.45)
}

/** 节点的出线锚点（右侧中点）与入线锚点（左侧中点）。 */
export function anchors(a, b) {
  return {
    x1: a.x + a.w, y1: a.y + a.h / 2,
    x2: b.x, y2: b.y + b.h / 2,
  }
}

/** 三次贝塞尔路径。 */
export function edgePath(a, b) {
  if (!a || !b) return ''
  const { x1, y1, x2, y2 } = anchors(a, b)
  const dx = curvature(x1, x2)
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`
}

/**
 * 连线是否与视口相交。
 *
 * 用三次贝塞尔的凸包性质做保守判据，不采样：
 * 曲线必定落在四个控制点的凸包内，所以只要包围盒相交就**永不漏画**。
 * 采样法（曲线上取 16 点）会在快速平移时让连线一段段冒出来。
 *
 * 控制点只有 x 被撑开（x1+dx / x2-dx），所以 x 轴加 dx、y 轴只取两端。
 */
export function edgeVisible(a, b, view) {
  if (!a || !b) return false
  const { x1, y1, x2, y2 } = anchors(a, b)
  const dx = curvature(x1, x2)
  return Math.max(x1 + dx, x2) > view.left
    && Math.min(x1, x2 - dx) < view.right
    && Math.max(y1, y2) > view.top
    && Math.min(y1, y2) < view.bottom
}

/** 节点是否与视口相交。 */
export function nodeVisible(node, view) {
  if (!node) return false
  return node.x + node.w > view.left
    && node.x < view.right
    && node.y + node.h > view.top
    && node.y < view.bottom
}

/**
 * 由相机反推世界坐标下的可视范围。
 * padding 用来预热：源仓库取 280，这里取 max(280, 热区换算) ——
 * 端口热区在 0.1 倍缩放下世界坐标是 220px，留 60 余量。
 */
export function viewBounds(cam, size, padding) {
  const s = cam.s || 1
  const pad = padding ?? Math.max(280, 220 + 60)
  const left = -cam.x / s - pad
  const top = -cam.y / s - pad
  return {
    left,
    top,
    right: left + (size.w || 0) / s + pad * 2,
    bottom: top + (size.h || 0) / s + pad * 2,
  }
}
