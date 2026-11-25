// 超时信号 + 外部取消信号的合并。
//
// 为什么不能直接用 AbortSignal.timeout()：
// 1. 它只能表达"超时"，用户主动取消要另走一路，两路必须合成一个 signal；
// 2. 合并本身有坑——**预先 aborted 的 signal 必须立刻生效**，
//    浏览器不会补偿性重放 abort 事件，漏了这步就是"点了停止，请求还在跑"。

/** 手写合并：任何一路 abort 都让结果 abort；abort 后解绑监听，避免长任务泄漏。 */
export function mergeSignals(signals) {
  const list = signals.filter(Boolean)
  if (!list.length) return undefined
  if (list.length === 1) return list[0]
  if (typeof AbortSignal.any === 'function') return AbortSignal.any(list)

  const controller = new AbortController()
  const cleanup = () => list.forEach((s) => s.removeEventListener('abort', onAbort))
  function onAbort(event) {
    cleanup()
    controller.abort(event?.target?.reason ?? new DOMException('Aborted', 'AbortError'))
  }
  for (const signal of list) {
    if (signal.aborted) {
      onAbort({ target: signal })
      break
    }
    signal.addEventListener('abort', onAbort, { once: true })
  }
  return controller.signal
}

/** 超时信号：到点以 TimeoutError 中断，和用户取消（AbortError）区分开。 */
export function timeoutSignal(ms) {
  if (!ms || ms <= 0) return undefined
  if (typeof AbortSignal.timeout === 'function') return AbortSignal.timeout(ms)
  const controller = new AbortController()
  const timer = setTimeout(
    () => controller.abort(new DOMException(`请求超过 ${ms}ms 没有响应`, 'TimeoutError')),
    ms,
  )
  controller.signal.addEventListener('abort', () => clearTimeout(timer), { once: true })
  return controller.signal
}

/** 一次请求的最终 signal：外部取消 + 超时。 */
export function requestSignal({ signal, timeoutMs } = {}) {
  return mergeSignals([signal, timeoutSignal(timeoutMs)])
}

/** 可被取消的等待。 */
export function sleep(ms, signal) {
  return new Promise((resolve, reject) => {
    if (signal?.aborted) {
      reject(signal.reason ?? new DOMException('Aborted', 'AbortError'))
      return
    }
    const timer = setTimeout(() => {
      signal?.removeEventListener('abort', onAbort)
      resolve()
    }, ms)
    function onAbort() {
      clearTimeout(timer)
      reject(signal.reason ?? new DOMException('Aborted', 'AbortError'))
    }
    signal?.addEventListener('abort', onAbort, { once: true })
  })
}

export function isAbort(error) {
  return error?.name === 'AbortError' || error?.name === 'TimeoutError'
}
