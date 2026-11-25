// 画布撤销栈。
//
// 设计要点（每一条都对应源仓库踩过的坑）：
//
// 1. **只存 nodes / edges / grid**
//    源仓库把 chatSessions 也塞进快照，结果「拖个节点能撤销掉一段对话」。
//    助手对话在外壳层，不属于画布文档，不能进这里。
//
// 2. **last 是「上一稳定态」，不是「当前态」**
//    提交时推的是 last（旧值），然后把 last 更新成 current。
//    顺序写反的话 undo 会原地踏步。
//
// 3. **180ms 防抖**
//    拖拽时每帧都会触发变更，不防抖一次拖拽会产生十几个历史步。
//
// 4. **apply 期间必须暂停**
//    否则 apply 触发的变更又提交一次，undo 变成死循环。
//
// 5. **快照按引用存**
//    全仓都是不可变更新（map/filter 产生新数组），所以存旧引用就够了，
//    50 步的额外内存成本是 50 个数组头，可忽略。

export const HISTORY_LIMIT = 50
export const HISTORY_DEBOUNCE = 180

/** 从 state 里取出要进快照的字段。 */
function snap(state) {
  return {
    nodes: state?.nodes,
    edges: state?.edges,
    grid: state?.grid,
  }
}

/** 引用相等比较：只要有一个不同就认为变了。 */
function same(a, b) {
  if (!a || !b) return false
  return a.nodes === b.nodes && a.edges === b.edges && a.grid === b.grid
}

/**
 * @param get    () => 当前 state
 * @param apply  (snapshot) => void   把快照写回去
 */
export function createHistory({ get, apply, limit = HISTORY_LIMIT, wait = HISTORY_DEBOUNCE }) {
  let past = []
  let future = []
  let last = null
  let timer = 0
  let paused = false
  let onChange = null

  const notify = () => onChange?.({ canUndo: past.length > 0, canRedo: future.length > 0 })

  const commit = () => {
    const current = snap(get())
    if (!last || same(last, current)) return
    // 推的是 last（上一稳定态）
    past = [...past.slice(-(limit - 1)), last]
    future = []
    last = current
    notify()
  }

  return {
    /** 订阅按钮可用性变化 */
    subscribe(fn) {
      onChange = fn
      notify()
      return () => { onChange = null }
    },

    /** 初始化基准，打开画布时调一次 */
    init() {
      last = snap(get())
      past = []
      future = []
      notify()
    },

    /** 每次变更后调用；防抖窗口内只记最后一次 */
    tick() {
      if (paused) return
      if (timer) clearTimeout(timer)
      timer = setTimeout(() => { timer = 0; commit() }, wait)
    },

    /** 拖拽起止、异步生成前后调用，避免把一次操作切成十几步 */
    pause() {
      paused = true
      if (timer) { clearTimeout(timer); timer = 0 }
    },

    resume() {
      if (!paused) return
      paused = false
      commit()
    },

    undo() {
      const prev = past.pop()
      if (!prev) return false
      future = [...future, snap(get())]
      paused = true
      apply(prev)
      last = snap(prev)
      paused = false
      if (timer) { clearTimeout(timer); timer = 0 }
      notify()
      return true
    },

    redo() {
      const next = future.pop()
      if (!next) return false
      past = [...past, snap(get())]
      paused = true
      apply(next)
      last = snap(next)
      paused = false
      if (timer) { clearTimeout(timer); timer = 0 }
      notify()
      return true
    },

    /** 立即落一次（例如切画布前），不等防抖 */
    flush() {
      if (timer) { clearTimeout(timer); timer = 0 }
      commit()
    },

    get canUndo() { return past.length > 0 },
    get canRedo() { return future.length > 0 },
    get depth() { return past.length },

    /** 只给测试用 */
    _reset() {
      past = []
      future = []
      last = null
      paused = false
      if (timer) { clearTimeout(timer); timer = 0 }
      notify()
    },
  }
}
