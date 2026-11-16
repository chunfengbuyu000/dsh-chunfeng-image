// 画布 reducer：所有写操作在这里，方便做撤销/重做。
import { newId, canConnect, wrapInGroup, makeNode } from './store.js'

const HISTORY = 40

function snap(state) {
  return {
    nodes: state.nodes.map(n => ({ ...n })),
    edges: state.edges.map(e => ({ ...e })),
  }
}

function pushHistory(state) {
  const undo = [...state.undo, snap(state)]
  if (undo.length > HISTORY) undo.shift()
  return { undo, redo: [] }
}

export function reducer(state, action) {
  switch (action.type) {
    case 'select':
      return { ...state, selection: action.ids }

    case 'move-selection': {
      const ids = new Set(action.ids)
      return {
        ...state,
        nodes: state.nodes.map(n => ids.has(n.id) ? { ...n, x: Math.round(n.x + action.dx), y: Math.round(n.y + action.dy) } : n),
      }
    }

    case 'commit':
      return state

    case 'resize-node':
      return { ...state, nodes: state.nodes.map(n => n.id === action.id ? { ...n, w: action.w, h: action.h } : n) }

    case 'add-node': {
      const h = pushHistory(state)
      const node = action.node || makeNode(action.nodeType, action.at, action.extra || {})
      return { ...state, ...h, nodes: [...state.nodes, node], selection: [node.id] }
    }

    case 'update-node': {
      const h = pushHistory(state)
      return { ...state, ...h, nodes: state.nodes.map(n => n.id === action.id ? { ...n, ...action.patch } : n) }
    }

    case 'set-node-silent':
      // 流式更新状态时不进历史
      return { ...state, nodes: state.nodes.map(n => n.id === action.id ? { ...n, ...action.patch } : n) }

    case 'remove-selected': {
      if (!state.selection.length) return state
      const h = pushHistory(state)
      const ids = new Set(state.selection)
      const nodes = state.nodes.filter(n => !ids.has(n.id))
      const edges = state.edges.filter(e => !ids.has(e.from) && !ids.has(e.to))
      return { ...state, ...h, nodes, edges, selection: [] }
    }

    case 'duplicate-selected': {
      if (!state.selection.length) return state
      const h = pushHistory(state)
      const picks = state.nodes.filter(n => state.selection.includes(n.id))
      const map = {}
      const copies = picks.map(n => {
        const id = newId(n.type[0])
        map[n.id] = id
        return { ...n, id, x: n.x + 40, y: n.y + 40, status: n.type === 'config' ? n.status : 'idle', name: n.name ? `${n.name} 副本` : '' }
      })
      const innerEdges = state.edges
        .filter(e => map[e.from] && map[e.to])
        .map(e => ({ id: newId('e'), from: map[e.from], to: map[e.to] }))
      return { ...state, ...h, nodes: [...state.nodes, ...copies], edges: [...state.edges, ...innerEdges], selection: copies.map(c => c.id) }
    }

    case 'connect': {
      if (!canConnect(state.nodes, state.edges, action.from, action.to)) return state
      const h = pushHistory(state)
      return { ...state, ...h, edges: [...state.edges, { id: newId('e'), from: action.from, to: action.to }] }
    }

    case 'remove-edge': {
      const h = pushHistory(state)
      return { ...state, ...h, edges: state.edges.filter(e => e.id !== action.id) }
    }

    case 'wrap-group': {
      const group = wrapInGroup(state.nodes, state.selection)
      if (!group) return state
      const h = pushHistory(state)
      return { ...state, ...h, nodes: [group, ...state.nodes], selection: [group.id] }
    }

    case 'ungroup': {
      const ids = new Set(state.nodes.filter(n => state.selection.includes(n.id) && n.type === 'group').map(n => n.id))
      if (!ids.size) return state
      const h = pushHistory(state)
      return { ...state, ...h, nodes: state.nodes.filter(n => !ids.has(n.id)), selection: [] }
    }

    case 'set-canvas':
      return { ...state, camera: action.camera }

    case 'set-grid':
      return { ...state, grid: action.grid }

    case 'set-theme':
      return { ...state, theme: action.theme }

    case 'toggle-minimap':
      return { ...state, minimap: !state.minimap }

    case 'set-panel':
      return { ...state, panel: action.panel }

    case 'clear':
      return { ...state, ...pushHistory(state), nodes: [], edges: [], selection: [] }

    case 'undo': {
      if (!state.undo.length) return state
      const prev = state.undo[state.undo.length - 1]
      return {
        ...state,
        ...prev,
        undo: state.undo.slice(0, -1),
        redo: [...state.redo, snap(state)],
        selection: state.selection.filter(id => prev.nodes.some(n => n.id === id)),
      }
    }

    case 'redo': {
      if (!state.redo.length) return state
      const next = state.redo[state.redo.length - 1]
      return {
        ...state,
        ...next,
        redo: state.redo.slice(0, -1),
        undo: [...state.undo, snap(state)],
        selection: state.selection.filter(id => next.nodes.some(n => n.id === id)),
      }
    }

    case 'load':
      return { ...state, nodes: action.nodes, edges: action.edges, undo: [], redo: [], selection: [] }

    default:
      return state
  }
}
