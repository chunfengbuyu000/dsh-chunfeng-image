import host from '/Users/xiao/tools/chunfeng/dsh-chunfeng-image/src/host.js'
import { Readable } from 'node:stream'

function makeCtx({ llm, selection, reject } = {}) {
  const handlers = {}
  const services = {
    webServer: { register: (opts) => { handlers[opts.path] = opts.handler; return () => {} } },
    connection: { requestRejection: () => reject },
    llm,
    agentDefaultModel: { currentSelection: () => selection },
  }
  const ctx = {
    effect: (fn) => { fn(); return () => {} },
    get: (k) => services[k],
    // Cordis 的 inject 会把服务直接挂到 ctx 上
    webServer: services.webServer,
    connection: services.connection,
  }
  return { ctx, handlers }
}

function call(handler, { method = 'GET', url = '/dsh-chunfeng-image/models', body = '' } = {}) {
  return new Promise((resolve) => {
    const chunks = []
    const req = Readable.from(body ? [Buffer.from(body)] : [])
    req.method = method
    req.url = url
    req.headers = {}
    const res = {
      status: 0, headers: {}, chunks, ended: false, writableEnded: false,
      writeHead(s, h) { this.status = s; this.headers = h || {}; return this },
      write(c) { chunks.push(c); return true },
      end(c) { if (c) chunks.push(c); this.ended = true; this.writableEnded = true; resolve({ status: this.status, headers: this.headers, body: Buffer.concat(chunks.map(x => Buffer.from(x))).toString() }) },
    }
    handler(req, res)
  })
}

let pass = 0
const ok = async (name, fn) => { try { await fn(); pass++; console.log('  ok  ' + name) } catch (e) { console.error('  FAIL ' + name + '\n       ' + e.message); process.exitCode = 1 } }
const assert = (c, m) => { if (!c) throw new Error(m) }

console.log('Host 半片')

await ok('未授权直接拒绝', async () => {
  const { ctx, handlers } = makeCtx({ reject: 401 })
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'])
  assert(r.status === 401, '应为 401，实际 ' + r.status)
})

await ok('没有 llm 时 models 返回空但不报错', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'])
  assert(r.status === 200, '应为 200')
  const data = JSON.parse(r.body)
  assert(Array.isArray(data.providers) && data.providers.length === 0, 'providers 应为空数组')
  assert(data.available === false, 'available 应为 false')
})

await ok('列出 provider 与模型，并带默认选择', async () => {
  const llm = {
    listProviders: async () => [{ id: 'p1', name: '厂商一' }, { id: 'p2', name: '厂商二' }],
    listModels: async (id) => (id === 'p1' ? [{ id: 'm1', name: '模型一' }] : []),
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p1', model: 'm1' } })
  host.apply(ctx)
  const data = JSON.parse((await call(handlers['/dsh-chunfeng-image'])).body)
  assert(data.providers.length === 1, '空模型的 provider 应被过滤，实际 ' + data.providers.length)
  assert(data.providers[0].models[0].name === '模型一', '模型名不对')
  assert(data.default.model === 'm1', '默认模型没带上')
})

await ok('没有 llm 时 stream 返回 503', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'], { method: 'POST', url: '/dsh-chunfeng-image/stream', body: '{"messages":[]}' })
  assert(r.status === 503, '应为 503，实际 ' + r.status)
})

await ok('流式：逐段下发 NDJSON 并以 done 收尾', async () => {
  const llm = {
    prepareCall: async () => ({
      config: {},
      stream: async function* () {
        yield { type: 'text-delta', text: '你好' }
        yield { type: 'text-delta', text: '，世界' }
        yield { type: 'finish', reason: { kind: 'stop' } }
      },
    }),
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p', model: 'm' } })
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'], {
    method: 'POST', url: '/dsh-chunfeng-image/stream',
    body: JSON.stringify({ messages: [{ role: 'user', text: '写一句问候' }] }),
  })
  const lines = r.body.trim().split('\n').map(l => JSON.parse(l))
  assert(lines.filter(l => l.d).map(l => l.d).join('') === '你好，世界', '增量拼接不对：' + JSON.stringify(lines))
  assert(lines.some(l => l.done), '缺少结束标记')
  assert(r.headers['content-type'].includes('ndjson'), '内容类型不对')
})

await ok('模型报错时下发 error 行而不是断连', async () => {
  const llm = {
    prepareCall: async () => ({
      config: {},
      stream: async function* () {
        yield { type: 'finish', reason: { kind: 'error', failure: { message: '额度不足' } } }
      },
    }),
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p', model: 'm' } })
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'], { method: 'POST', url: '/dsh-chunfeng-image/stream', body: '{"messages":[{"role":"user","text":"x"}]}' })
  const lines = r.body.trim().split('\n').map(l => JSON.parse(l))
  assert(lines.some(l => l.error === '额度不足'), '没有下发错误：' + r.body)
})

console.log(`\n${pass} 项通过`)
