// 画布连线工作流上下文解析：沿入边收集上游文本、图片、配置节点及分组子节点，
// 支持 @ 提及替换，并判断图片节点是否已有真实图片（用于决定原地填入还是派生子节点）。

import { primaryImage } from './batch.js'
import { NODE_TYPES } from '../store.js'

export function hasRealImage(node) {
  if (!node || node.type !== 'image') return false
  if (primaryImage(node)?.storageKey || node.storageKey) return true
  if (Array.isArray(node.images) && node.images.some((i) => Boolean(i?.storageKey || i?.url))) return true
  return Boolean(node.src)
}

function collectOrderedUpstreamNodes(targetNode, nodes, edges) {
  if (!targetNode || !Array.isArray(nodes) || !Array.isArray(edges)) return []
  const byId = new Map(nodes.map((n) => [n.id, n]))
  const incoming = edges.filter((e) => e.to === targetNode.id)
  if (!incoming.length) return []

  const seen = new Set([targetNode.id])
  const collected = []
  const pushNode = (n) => {
    if (!n || seen.has(n.id)) return
    seen.add(n.id)
    if (n.type === 'group' && Array.isArray(n.childIds)) {
      for (const cid of n.childIds) {
        const child = byId.get(cid)
        if (child && !seen.has(child.id)) {
          seen.add(child.id)
          collected.push(child)
        }
      }
      return
    }
    collected.push(n)
  }

  for (const edge of incoming) {
    pushNode(byId.get(edge.from))
  }
  collected.sort((a, b) => (a.y - b.y) || (a.x - b.x))
  return collected
}

/**
 * 收集某个节点上游连入的所有可用上下文：
 * - textInputs: 上游文本节点正文列表
 * - imageInputs: 上游有图节点的 storageKey / remoteUrl
 * - configNode: 直接连入的配置节点（若有）
 */
export function buildNodeGenerationContext(targetNode, nodes, edges) {
  const upstream = collectOrderedUpstreamNodes(targetNode, nodes, edges)
  const textInputs = []
  const imageInputs = []
  let configNode = null

  for (const n of upstream) {
    if (n.type === 'text') {
      const content = String(n.text || n.prompt || '').trim()
      if (content) textInputs.push({ id: n.id, name: n.name || '', text: content, node: n })
    } else if (n.type === 'image') {
      const main = primaryImage(n)
      const storageKey = main?.storageKey || n.storageKey || ''
      const url = main?.degraded ? (main.url || '') : (main?.url || n.src || '')
      if (storageKey || url) {
        imageInputs.push({
          id: n.id,
          name: n.name || '',
          storageKey,
          url,
          mimeType: main?.mimeType || 'image/png',
          node: n,
        })
      }
    } else if (n.type === 'config' && !configNode) {
      configNode = n
    }
  }

  return { upstream, textInputs, imageInputs, configNode }
}

/**
 * 把上游文本节点内容与 @提及 解析后合成为最终发送给模型的提示词。
 */
export function composePromptWithContext(rawPrompt, textInputs = [], upstream = []) {
  let text = String(rawPrompt || '').trim()
  const referencedTextIds = new Set()

  for (const t of textInputs) {
    const labelA = `@${NODE_TYPES.text}${t.name ? `:${t.name}` : ''}`
    if (text.includes(labelA)) {
      referencedTextIds.add(t.id)
      text = text.split(labelA).join(t.text)
    }
  }

  // 把未在文案里显式 @ 替换的文本节点也一并附上，确保「文本 → 图片」或「文本 → 配置」连线真生效
  const extraTexts = textInputs
    .filter((t) => !referencedTextIds.has(t.id))
    .map((t, idx) => (textInputs.length > 1 || text ? `【参考文本${idx + 1}】${t.text}` : t.text))

  // @图片 标签在发送前已经作为参考图编号传入图片数组，保留清晰中文语义（比如 @图片:霓虹 -> 参考图(霓虹)）
  for (const u of upstream) {
    if (u.type === 'image' && u.name) {
      text = text.split(`@${NODE_TYPES.image}:${u.name}`).join(`参考图(${u.name})`)
    }
  }

  if (!extraTexts.length) return text
  return text ? `${extraTexts.join('\n')}\n${text}` : extraTexts.join('\n')
}
