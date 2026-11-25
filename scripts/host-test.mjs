import { rmSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'

const TEST_CFG_DIR = join(tmpdir(), `dsh-cf-host-test-${process.pid}`)
const DEFAULT_TEST_CFG = join(TEST_CFG_DIR, 'config.json')
process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
process.on('exit', () => { try { rmSync(TEST_CFG_DIR, { recursive: true, force: true }) } catch { /* 清理失败不影响退出 */ } })

const { default: host } = await import('../src/host.js')
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

// ---------- 上游转发（生图 / 视频） ----------
// 用本地起的假上游来验，不碰外网。
import { createServer } from 'node:http'
import { chmod, rm, readFile as readFileAsync, stat, writeFile } from 'node:fs/promises'

/** 起一个可编程的假上游，返回 { baseUrl, close, calls } */
async function fakeUpstream(handler) {
  const calls = []
  const server = createServer(async (req, res) => {
    const chunks = []
    for await (const c of req) chunks.push(c)
    const body = Buffer.concat(chunks).toString()
    calls.push({ method: req.method, url: req.url, headers: req.headers, body })
    await handler(req, res, body)
  })
  await new Promise((r) => server.listen(0, '127.0.0.1', r))
  return {
    baseUrl: `http://127.0.0.1:${server.address().port}`,
    calls,
    close: () => new Promise((r) => server.close(r)),
  }
}

const relayCall = (handlers, payload) => call(handlers['/dsh-chunfeng-image'], {
  method: 'POST',
  url: '/dsh-chunfeng-image/relay',
  body: JSON.stringify(payload),
})

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

await ok('带图片的流式请求：图片按 DSH 的 input_image 格式挂到最后一条 user 上', async () => {
  let captured = null
  const llm = {
    prepareCall: async () => ({
      config: {},
      stream: async function* (args) {
        captured = args.messages
        yield { type: 'text-delta', text: '一只橘猫' }
        yield { type: 'finish', reason: { kind: 'stop' } }
      },
    }),
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p', model: 'm' } })
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'], {
    method: 'POST',
    url: '/dsh-chunfeng-image/stream',
    body: JSON.stringify({
      messages: [{ role: 'user', text: '描述这张图' }],
      images: [{ mimeType: 'image/jpeg', data: 'QUJD' }],
    }),
  })
  assert(r.status === 200, `应为 200，实际 ${r.status}`)
  assert(Array.isArray(captured) && captured.length === 1, `消息数不对：${captured?.length}`)
  const content = captured[0].content
  assert(Array.isArray(content), 'content 应是数组')
  const img = content.find((c) => c.type === 'input_image')
  assert(img, `没有 input_image，实际 ${content.map((c) => c.type).join(',')}`)
  assert(img.image_url === 'data:image/jpeg;base64,QUJD', `图片格式不对：${img.image_url}`)
  assert(img.detail === 'auto', `detail 应为 auto，实际 ${img.detail}`)
  assert(content.some((c) => c.type === 'text' && c.text === '描述这张图'), '文字部分丢了')
})

await ok('不带图片时消息里没有 input_image（不要误发空图）', async () => {
  let captured = null
  const llm = {
    prepareCall: async () => ({
      config: {},
      stream: async function* (args) {
        captured = args.messages
        yield { type: 'text-delta', text: 'ok' }
        yield { type: 'finish', reason: { kind: 'stop' } }
      },
    }),
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p', model: 'm' } })
  host.apply(ctx)
  await call(handlers['/dsh-chunfeng-image'], {
    method: 'POST', url: '/dsh-chunfeng-image/stream',
    body: JSON.stringify({ messages: [{ role: 'user', text: '你好' }] }),
  })
  const types = captured[0].content.map((c) => c.type)
  assert(!types.includes('input_image'), `不该有图片：${types.join(',')}`)
})

await ok('/models 透出 inputModalities（客户端据此判断能不能读图）', async () => {
  const llm = {
    listProviders: async () => [{ id: 'p1', name: '厂商' }],
    listModels: async () => [
      { id: 'vision-1', name: '带视觉', inputModalities: ['text', 'image'] },
      { id: 'text-1', name: '纯文本' },
    ],
  }
  const { ctx, handlers } = makeCtx({ llm, selection: { provider: 'p1', model: 'vision-1' } })
  host.apply(ctx)
  const data = JSON.parse((await call(handlers['/dsh-chunfeng-image'])).body)
  const models = data.providers[0].models
  assert(Array.isArray(models[0].inputModalities), '应透出 inputModalities')
  assert(models[0].inputModalities.includes('image'), '带视觉的模型应声明 image')
  assert(models[1].inputModalities === null, `没声明时应为 null，实际 ${JSON.stringify(models[1].inputModalities)}`)
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

await ok('ping：Host 存活探测可用', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await call(handlers['/dsh-chunfeng-image'], { method: 'GET', url: '/dsh-chunfeng-image/ping' })
  assert(r.status === 200, `应为 200，实际 ${r.status}`)
  const body = JSON.parse(r.body)
  assert(body.ok === true, 'ping 应返回 ok:true')
  assert(typeof body.pid === 'number', '应带进程号，便于确认是哪个实例')
})

await ok('relay 会写请求日志（出问题时有据可查）', async () => {
  const dir = `/tmp/dsh-relay-log-${Date.now()}`
  process.env.DSH_CHUNFENG_CONFIG = `${dir}/config.json`
  const up = await fakeUpstream((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end('{"ok":true}')
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'k' },
    path: 'v1/images/generations',
    payload: {},
  })
  await new Promise((r) => setTimeout(r, 500))
  const text = await readFileAsync(`${dir}/relay.log`, 'utf8')
  assert(/relay START/.test(text), `日志应记录开始：${text}`)
  assert(/relay OK/.test(text), `日志应记录结果：${text}`)
  assert(/v1\/images\/generations/.test(text), '日志应带路径')
  await up.close()
  await rm(dir, { recursive: true, force: true })
  process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
})

await ok('relay 日志并发写不会互相吃字', async () => {
  const dir = `/tmp/dsh-relay-conc-${Date.now()}`
  process.env.DSH_CHUNFENG_CONFIG = `${dir}/config.json`
  const up = await fakeUpstream((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end('{"ok":true}')
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  // 同时打 6 次
  await Promise.all(Array.from({ length: 6 }, (_, i) => relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'k' },
    path: `v1/probe-${i}`,
    payload: {},
  })))
  await new Promise((r) => setTimeout(r, 600))
  const text = await readFileAsync(`${dir}/relay.log`, 'utf8')
  const starts = (text.match(/relay START/g) || []).length
  const oks = (text.match(/relay OK/g) || []).length
  assert(starts === 6, `6 次请求应记 6 条 START，实际 ${starts}`)
  assert(oks === 6, `6 次请求应记 6 条 OK，实际 ${oks}`)
  // 每行都应是完整的一行（时间戳开头），不能粘在一起
  const lines = text.trim().split('\n')
  assert(lines.every((l) => /^\d{4}-\d{2}-\d{2}T/.test(l)), `日志行被粘连了：${text.slice(0, 160)}`)
  await up.close()
  await rm(dir, { recursive: true, force: true })
  process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
})

await ok('config：空渠道不覆盖本机文件里已有的配置', async () => {
  const tmp = `/tmp/dsh-cfg-test-${Date.now()}.json`
  process.env.DSH_CHUNFENG_CONFIG = tmp
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const h = handlers['/dsh-chunfeng-image']
  // 先写一份有渠道的
  const put1 = await call(h, { method: 'PUT', url: '/dsh-chunfeng-image/config', body: JSON.stringify({ channels: [{ id: 'c1', name: '真渠道' }] }) })
  assert(put1.status === 200, `写入失败 ${put1.status}`)
  // 再写空渠道：应当被跳过，不抹掉磁盘上的
  const put2 = await call(h, { method: 'PUT', url: '/dsh-chunfeng-image/config', body: JSON.stringify({ channels: [] }) })
  const body2 = JSON.parse(put2.body)
  assert(body2.skipped === true, `空渠道应跳过，实际 ${put2.body}`)
  const get = await call(h, { method: 'GET', url: '/dsh-chunfeng-image/config' })
  const data = JSON.parse(get.body)
  assert(data.exists === true, '本机文件应存在')
  assert(data.config.channels?.[0]?.name === '真渠道', `渠道被抹掉了：${get.body}`)
  await new Promise((r) => rm(tmp, { force: true }).then(r, r))
  process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
})

await ok('config：读回写入的内容（含明文 Key 与默认参数）', async () => {
  const tmp = `/tmp/dsh-cfg-test2-${Date.now()}.json`
  process.env.DSH_CHUNFENG_CONFIG = tmp
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const h = handlers['/dsh-chunfeng-image']
  await call(h, {
    method: 'PUT', url: '/dsh-chunfeng-image/config',
    body: JSON.stringify({
      channels: [{ id: 'c2', name: '带 Key 的渠道', apiKey: 'sk-abc', baseUrl: 'https://x/v1' }],
      defaults: { image: { modelKey: 'c2:m1' } },
      assistantModel: { provider: 'p', model: 'm' },
    }),
  })
  const data = JSON.parse((await call(h, { method: 'GET', url: '/dsh-chunfeng-image/config' })).body)
  assert(data.config.channels[0].apiKey === 'sk-abc', 'Key 没存下来')
  assert(data.config.defaults.image.modelKey === 'c2:m1', '默认参数没存下来')
  assert(data.config.assistantModel.model === 'm', '助手模型没存下来')
  assert(data.config.savedAt, '应带保存时间')
  await new Promise((r) => rm(tmp, { force: true }).then(r, r))
  process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
})

await ok('relay：成功时原样回传上游结果', async () => {
  const up = await fakeUpstream((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ data: [{ b64_json: 'AAA' }] }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/generations',
    payload: { model: 'm', prompt: 'p' },
  })
  assert(r.status === 200, '应为 200，实际 ' + r.status)
  assert(JSON.parse(r.body).data[0].b64_json === 'AAA', '结果被改动了')
  // 上游实际收到的：路径正确 + 三种鉴权头都带
  const got = up.calls[0]
  assert(got.url === '/v1/images/generations', '上游路径不对：' + got.url)
  assert(got.headers.authorization === 'Bearer sk-test', '缺 authorization')
  assert(got.headers['x-api-key'] === 'sk-test', '缺 x-api-key')
  assert(JSON.parse(got.body).prompt === 'p', 'body 没透传')
  await up.close()
})

await ok('relay：baseUrl 已带 /v1 时不重复追加', async () => {
  const up = await fakeUpstream((req, res) => { res.writeHead(200).end('{}') })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  await relayCall(handlers, { channel: { baseUrl: up.baseUrl + '/v1', apiKey: 'k' }, path: 'v1/models' })
  // 之前这里断言的是 /v1/v1/models —— 名字说「不重复」，断言却把 bug 固化成了预期
  assert(up.calls[0].url === '/v1/models', '带 /v1 的 baseUrl 不该再拼一次：' + up.calls[0].url)
  await up.close()
})

await ok('relay：baseUrl 不带 /v1 时正常追加', async () => {
  const up = await fakeUpstream((req, res) => { res.writeHead(200).end('{}') })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  await relayCall(handlers, { channel: { baseUrl: up.baseUrl, apiKey: 'k' }, path: 'v1/models' })
  assert(up.calls[0].url === '/v1/models', '拼接结果不对：' + up.calls[0].url)
  await up.close()
})

await ok('relay：/api/v1 这类带前缀的 baseUrl 也不重复', async () => {
  const up = await fakeUpstream((req, res) => { res.writeHead(200).end('{}') })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  await relayCall(handlers, { channel: { baseUrl: up.baseUrl + '/api/v1', apiKey: 'k' }, path: 'v1/models' })
  assert(up.calls[0].url === '/api/v1/models', '拼接结果不对：' + up.calls[0].url)
  await up.close()
})

await ok('relay：尾部多余的斜杠不影响拼接', async () => {
  const up = await fakeUpstream((req, res) => { res.writeHead(200).end('{}') })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  await relayCall(handlers, { channel: { baseUrl: up.baseUrl + '/v1///', apiKey: 'k' }, path: '/v1/models' })
  assert(up.calls[0].url === '/v1/models', '拼接结果不对：' + up.calls[0].url)
  await up.close()
})

await ok('relay：上游 404 时错误信息里带上真实请求地址', async () => {
  const up = await fakeUpstream((req, res) => { res.writeHead(404, { 'content-type': 'text/plain' }).end('404 page not found') })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, { channel: { baseUrl: up.baseUrl + '/v1', apiKey: 'k' }, path: 'v1/models' })
  assert(r.status === 404, '状态码应透传 404')
  const payload = JSON.parse(r.body)
  assert(/请求 http/.test(payload.error), `错误里应带请求地址：${payload.error}`)
  assert(/\/v1\/models/.test(payload.error), `应显示拼出来的路径：${payload.error}`)
  assert(payload.target && /\/v1\/models$/.test(payload.target), `应另带 target 字段：${payload.target}`)
  await up.close()
})

await ok('relay：上游 401 把 code 翻成中文并透传状态码', async () => {
  const up = await fakeUpstream((req, res) => {
    res.writeHead(401, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ code: 'INVALID_API_KEY', message: 'Invalid API key' }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, { channel: { baseUrl: up.baseUrl, apiKey: 'bad' }, path: 'v1/images/generations', payload: {} })
  assert(r.status === 401, '状态码没透传，实际 ' + r.status)
  const body = JSON.parse(r.body)
  assert(body.error.includes('API Key 无效'), '错误没归一化：' + body.error)
  await up.close()
})

await ok('relay：上游返回 HTML 时给出可读提示', async () => {
  const up = await fakeUpstream((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<!doctype html><html><body>Not Found Page</body></html>')
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, { channel: { baseUrl: up.baseUrl, apiKey: 'k' }, path: 'v1/x', payload: {} })
  // 200 但内容是 HTML：原样回传，由前端识别；这里只断言没崩
  assert(r.status === 200, '应为 200')
  assert(r.body.includes('Not Found Page'), 'HTML 被丢弃了')
  await up.close()
})

await ok('relay：渠道没填 baseUrl 时报 400 而不是崩', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, { channel: {}, path: 'v1/images/generations', payload: {} })
  assert(r.status === 400, '应为 400，实际 ' + r.status)
  assert(JSON.parse(r.body).error.includes('Base URL'), '提示不清楚')
})

await ok('relay：上游连不上时报 502 并说明目标', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: 'http://127.0.0.1:1', apiKey: 'k' },
    path: 'v1/images/generations',
    payload: {},
    timeoutMs: 3000,
  })
  assert(r.status === 502, '应为 502，实际 ' + r.status)
  assert(JSON.parse(r.body).error, '没有错误说明')
})

await ok('relay：上游瞬时 503 / No available compatible accounts 会自动重试并成功', async () => {
  let hits = 0
  const up = await fakeUpstream((req, res) => {
    hits += 1
    if (hits <= 2) {
      res.writeHead(503, { 'content-type': 'application/json' })
      res.end(JSON.stringify({ error: { message: 'No available compatible accounts', type: 'api_error' } }))
      return
    }
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ data: [{ b64_json: 'RETRY_OK' }] }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/generations',
    payload: { model: 'm', prompt: 'p' },
  })
  assert(r.status === 200, '重试后应为 200，实际 ' + r.status)
  assert(JSON.parse(r.body).data[0].b64_json === 'RETRY_OK', '重试结果不对')
  assert(hits === 3, '应打 3 次上游，实际 ' + hits)
  await up.close()
})

await ok('relay：重试用尽后仍失败则如实透传状态码', async () => {
  let hits = 0
  const up = await fakeUpstream((req, res) => {
    hits += 1
    res.writeHead(503, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ error: { message: 'No available compatible accounts', type: 'api_error' } }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/generations',
    payload: { model: 'm', prompt: 'p' },
  })
  assert(r.status === 503, '应为 503，实际 ' + r.status)
  assert(hits === 5, '应共打 5 次上游（1+4 重试），实际 ' + hits)
  await up.close()
})

await ok('relay：400 这类确定性错误不重试', async () => {
  let hits = 0
  const up = await fakeUpstream((req, res) => {
    hits += 1
    res.writeHead(400, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ error: { message: 'n must be between 1 and 4' } }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/generations',
    payload: { model: 'm', prompt: 'p' },
  })
  assert(r.status === 400, '应为 400，实际 ' + r.status)
  assert(hits === 1, '400 不该重试，实际打了 ' + hits + ' 次')
  await up.close()
})

await ok('relay：重试用尽后错误文案翻译成中文', async () => {
  const up = await fakeUpstream((req, res) => {
    res.writeHead(503, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ error: { message: 'No available compatible accounts', type: 'api_error' } }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/generations',
    payload: { model: 'm', prompt: 'p' },
  })
  const msg = JSON.parse(r.body).error
  assert(msg.includes('账号池'), '应翻译成中文，实际：' + msg)
  await up.close()
})

await ok('relay：multipart/form-data 透传二进制图片并返回 image/* 的 b64_json', async () => {
  const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
  let receivedContentType = ''
  let receivedRaw = ''
  const up = await fakeUpstream((req, res, body) => {
    receivedContentType = String(req.headers['content-type'] || '')
    receivedRaw = body
    res.writeHead(200, { 'content-type': 'image/png' })
    res.end(Buffer.from(PNG_1PX, 'base64'))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: up.baseUrl, apiKey: 'sk-test' },
    path: 'v1/images/edits',
    multipart: {
      fields: { model: 'gpt-image-1', prompt: '去掉背景', size: '1024x1024' },
      files: [{ field: 'image[]', name: 'ref.png', dataUrl: `data:image/png;base64,${PNG_1PX}`, mimeType: 'image/png' }],
    },
  })
  assert(r.status === 200, 'multipart 应返回 200，实际 ' + r.status)
  assert(receivedContentType.includes('multipart/form-data'), '上游应收到 multipart/form-data：' + receivedContentType)
  assert(receivedRaw.includes('name="prompt"') && receivedRaw.includes('去掉背景'), '上游没收到 multipart prompt 字段')
  assert(receivedRaw.includes('name="image[]"'), '上游没收到 multipart 文件字段')
  const parsed = JSON.parse(r.body)
  assert(parsed.data?.[0]?.b64_json === PNG_1PX, '二进制 image/png 响应未转成 data[0].b64_json')
  await up.close()
})

await ok('relay：Gemini /v1beta 路径不重复拼接，且保留 x-goog-api-key', async () => {
  const up = await fakeUpstream((req, res) => {
    res.writeHead(200, { 'content-type': 'application/json' })
    res.end(JSON.stringify({ url: req.url, xGoog: req.headers['x-goog-api-key'] || '' }))
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const r = await relayCall(handlers, {
    channel: { baseUrl: `${up.baseUrl}/v1beta`, apiKey: 'AIza-test', protocol: 'gemini' },
    path: 'v1beta/models/gemini-2.5-flash-image:generateContent',
    payload: { contents: [] },
  })
  assert(r.status === 200, 'Gemini relay 应为 200，实际 ' + r.status)
  const out = JSON.parse(r.body)
  assert(out.url === '/v1beta/models/gemini-2.5-flash-image:generateContent', 'Gemini 路径重复拼接或缺失：' + out.url)
  assert(out.xGoog === 'AIza-test', '缺少 x-goog-api-key：' + out.xGoog)
  await up.close()
})

await ok('fetch-media：透传上游二进制图片并拒绝 HTML 网页', async () => {
  const PNG_1PX = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg=='
  const pngBuf = Buffer.from(PNG_1PX, 'base64')
  const up = await fakeUpstream((req, res) => {
    if (req.url === '/img.png') {
      res.writeHead(200, { 'content-type': 'image/png' })
      res.end(pngBuf)
      return
    }
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end('<!doctype html><html><body>not image</body></html>')
  })
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const h = handlers['/dsh-chunfeng-image']

  // 1. 拉图片：返回 raw 字节（注意测试 call() 会转成 string，比 base64/length 更可靠）
  const rImg = await new Promise((resolve) => {
    const chunks = []
    const req = Readable.from([])
    req.method = 'GET'
    req.url = `/dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(`${up.baseUrl}/img.png`)}`
    req.headers = {}
    const res = {
      status: 0, headers: {},
      writeHead(s, hdr) { this.status = s; this.headers = hdr || {}; return this },
      write(c) { chunks.push(c); return true },
      end(c) { if (c) chunks.push(c); resolve({ status: this.status, headers: this.headers, buf: Buffer.concat(chunks.map((x) => Buffer.from(x))) }) },
    }
    h(req, res)
  })
  assert(rImg.status === 200, `fetch-media 应返回 200，实际 ${rImg.status}`)
  assert(String(rImg.headers['content-type'] || '').startsWith('image/png'), `content-type 应为 image/png：${rImg.headers['content-type']}`)
  assert(Buffer.compare(rImg.buf, pngBuf) === 0, '返回图片字节与上游不一致')

  // 2. 上游返回 HTML 时应明确返回 415 拒绝
  const rHtml = await call(h, {
    method: 'GET',
    url: `/dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(`${up.baseUrl}/page.html`)}`,
  })
  assert(rHtml.status === 415, `网页应被拒绝（415），实际 ${rHtml.status}`)
  await up.close()
})

await ok('config：写入本机配置文件与备份均收紧为 0600 权限', async () => {
  const tmp = `/tmp/dsh-cfg-perm-${process.pid}-${Date.now()}.json`
  process.env.DSH_CHUNFENG_CONFIG = tmp
  try {
    // 模拟已有 0644 旧配置，覆盖后原文件与 .bak 都应收紧为 0600
    await writeFile(tmp, JSON.stringify({ channels: [{ id: 'old', name: '旧渠道' }] }), { encoding: 'utf8', mode: 0o644 })
    await chmod(tmp, 0o644)

    const { ctx, handlers } = makeCtx({})
    host.apply(ctx)
    const h = handlers['/dsh-chunfeng-image']
    const put = await call(h, {
      method: 'PUT',
      url: '/dsh-chunfeng-image/config',
      body: JSON.stringify({
        channels: [{ id: 'c-perm', name: '敏感渠道', apiKey: 'sk-secret', baseUrl: 'https://x/v1' }],
      }),
    })
    assert(put.status === 200, `写入失败 ${put.status}`)
    const st = await stat(tmp)
    assert((st.mode & 0o777) === 0o600, `config.json 权限应为 0600，实际 0${(st.mode & 0o777).toString(8)}`)
    const bakSt = await stat(`${tmp}.bak`)
    assert((bakSt.mode & 0o777) === 0o600, `config.json.bak 权限应为 0600，实际 0${(bakSt.mode & 0o777).toString(8)}`)
  } finally {
    await rm(tmp, { force: true })
    await rm(`${tmp}.bak`, { force: true })
    process.env.DSH_CHUNFENG_CONFIG = DEFAULT_TEST_CFG
  }
})

await ok('fetch 与 fetch-media：拒绝云元数据与链路本地地址（SSRF 防护）', async () => {
  const { ctx, handlers } = makeCtx({})
  host.apply(ctx)
  const h = handlers['/dsh-chunfeng-image']

  const blockedUrls = [
    'http://169.254.169.254/latest/meta-data/',
    'http://169.254.0.1/',
    'http://100.100.100.200/latest/meta-data/',
    'http://metadata.google.internal/',
    'http://METADATA.GOOG./',
    'http://metadata.azure.internal/',
    'http://[fe80::1]/',
    'http://[::ffff:169.254.169.254]/',
  ]

  for (const targetUrl of blockedUrls) {
    const rText = await call(h, {
      method: 'GET',
      url: `/dsh-chunfeng-image/fetch?url=${encodeURIComponent(targetUrl)}`,
    })
    const bodyText = JSON.parse(rText.body)
    assert(bodyText.ok === false, `/fetch 应拒绝 ${targetUrl}`)
    assert(bodyText.status === 403, `/fetch 拒绝状态应为 403，实际 ${bodyText.status}（${targetUrl}）`)
    assert(/元数据|禁止/.test(bodyText.error || ''), `/fetch 错误文案不明确：${bodyText.error}`)

    const rMedia = await call(h, {
      method: 'GET',
      url: `/dsh-chunfeng-image/fetch-media?url=${encodeURIComponent(targetUrl)}`,
    })
    assert(rMedia.status === 403, `/fetch-media 应返回 403 拒绝 ${targetUrl}，实际 ${rMedia.status}`)
    const bodyMedia = JSON.parse(rMedia.body)
    assert(bodyMedia.ok === false, `/fetch-media 应返回 ok:false（${targetUrl}）`)
    assert(/元数据|禁止/.test(bodyMedia.error || ''), `/fetch-media 错误文案不明确：${bodyMedia.error}`)
  }

  // 验证重定向到云元数据也会被拦截，同时 127.0.0.1 仍允许访问
  const up = await fakeUpstream((req, res) => {
    if (req.url === '/redir') {
      res.writeHead(302, { location: 'http://169.254.169.254/latest/meta-data/' })
      res.end()
      return
    }
    res.writeHead(200, { 'content-type': 'text/plain' })
    res.end('local-ok')
  })
  try {
    const rLocal = await call(h, {
      method: 'GET',
      url: `/dsh-chunfeng-image/fetch?url=${encodeURIComponent(`${up.baseUrl}/ok`)}`,
    })
    const localBody = JSON.parse(rLocal.body)
    assert(localBody.ok === true && localBody.text === 'local-ok', `127.0.0.1 应允许访问：${rLocal.body}`)

    const rRedir = await call(h, {
      method: 'GET',
      url: `/dsh-chunfeng-image/fetch?url=${encodeURIComponent(`${up.baseUrl}/redir`)}`,
    })
    const redirBody = JSON.parse(rRedir.body)
    assert(redirBody.ok === false && redirBody.status === 403, `重定向到云元数据应被拦截：${rRedir.body}`)
  } finally {
    await up.close()
  }
})

console.log(`\n${pass} 项通过`)
