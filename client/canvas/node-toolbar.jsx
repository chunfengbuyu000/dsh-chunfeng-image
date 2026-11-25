// 节点浮动工具条：悬停在图片节点上时，浮在节点正上方的一排操作。
//
// 定位方式照源项目：世界坐标 → 屏幕坐标，水平居中，向上偏移 14px。
// 关键：**挂在 cf-stage 上而不是 cf-world 里**。world 层整体被 scale 缩放，
// 挂进去工具条会跟着放大缩小、圆角和文字都变形。
import React from 'react'
import { Icon } from '../ui.jsx'

/** 工具条到节点的间隙。悬停判定要把它算进「热区」，否则鼠标穿过会消失。 */
export const TOOLBAR_GAP = 14

/** 工具顺序：提示词 ｜ 编辑 ｜ 查看 ｜ 资产 ｜ 删除（危险项最右）。 */
export const NODE_TOOLS = [
  { id: 'copyPrompt', label: '复制提示词', icon: 'copy', group: 0 },
  { id: 'reversePrompt', label: '反推提示词', icon: 'sparkle', group: 0 },
  { id: 'sendToStudio', label: '送去工作台', icon: 'image', group: 0 },
  { id: 'replace', label: '替换图片', icon: 'replace', group: 1 },
  { id: 'maskEdit', label: '局部修改', icon: 'edit', group: 1 },
  { id: 'crop', label: '裁剪', icon: 'crop', group: 1 },
  { id: 'split', label: '切图', icon: 'split', group: 1 },
  { id: 'upscale', label: '放大', icon: 'upscale', group: 1 },
  { id: 'angle', label: '多角度', icon: 'angle', group: 1 },
  { id: 'view', label: '看大图', icon: 'search', group: 2 },
  { id: 'info', label: '信息', icon: 'info', group: 2 },
  { id: 'saveAsset', label: '存为资产', icon: 'folder', group: 3 },
  { id: 'download', label: '下载', icon: 'download', group: 3 },
  { id: 'delete', label: '删除', icon: 'trash', group: 4, danger: true },
]

/**
 * 算出工具条在屏幕上的位置。
 * 相机的 transform 是 translate3d(x, y, 0) scale(s)，所以屏幕坐标 = cam.xy + 世界坐标 × cam.s。
 */
export function toolbarPosition(node, cam) {
  if (!node || !cam) return null
  const s = cam.s || 1
  return {
    left: cam.x + (node.x + node.w / 2) * s,
    top: cam.y + node.y * s - TOOLBAR_GAP,
  }
}

export function NodeToolbar({ node, cam, showLabels, onAction, onKeep, onLeave }) {
  // 锁比例是切换型：标签要反映「点了会变成什么」
  const tools = React.useMemo(() => {
    const locked = node?.locked !== false
    const list = [...NODE_TOOLS]
    // 插在编辑组末尾
    const at = list.findIndex((t) => t.id === 'angle')
    list.splice(at + 1, 0, {
      id: 'resize',
      label: locked ? '改为自由比例' : '改为等比缩放',
      icon: locked ? 'lock' : 'unlock',
      group: 1,
    })
    return list
  }, [node?.locked])
  const pos = toolbarPosition(node, cam)
  if (!pos || !node) return null

  return (
    <div
      className={`cf-node-toolbar${showLabels ? ' is-labels' : ''}`}
      style={{ left: pos.left, top: pos.top }}
      role="toolbar"
      aria-label="图片操作"
      // 鼠标从节点移到工具条要穿过 14px 间隙，这里必须续命，否则永远点不到
      onPointerEnter={onKeep}
      onPointerLeave={onLeave}
      onPointerDown={(e) => e.stopPropagation()}
    >
      {tools.map((tool, i) => {
        const prev = tools[i - 1]
        const needSep = prev && prev.group !== tool.group
        return (
          <React.Fragment key={tool.id}>
            {needSep ? <span className="cf-node-toolbar-sep" aria-hidden="true" /> : null}
            <button
              type="button"
              className={`cf-node-toolbar-btn${tool.danger ? ' is-danger' : ''}`}
              data-tip={tool.label}
              aria-label={tool.label}
              onClick={(e) => { e.stopPropagation(); onAction(tool.id, node) }}
            >
              <Icon name={tool.icon} size={15} />
              {showLabels ? <span>{tool.label}</span> : null}
            </button>
          </React.Fragment>
        )
      })}
    </div>
  )
}
