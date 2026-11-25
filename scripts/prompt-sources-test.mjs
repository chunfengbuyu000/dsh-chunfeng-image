// 提示词来源的纯逻辑测试。重点在 schema 容错 ——
// 真实世界的第三方 JSON 形状千奇百怪，认不出来就会整体失败。
import assert from 'node:assert/strict'
import { createServer } from 'node:http'
import {
  BUILTIN_PROMPT_SOURCES,
  FETCH_TIMEOUT,
  normalizePrompts,
  normalizeSourceRecord,
  mergePromptsWithSources,
  jsdelivrMirrorOf,
  fetchSource,
  fetchAllSources,
  sourceNeedsFetch,
  writePromptCache,
} from '../client/prompts/sources.js'

let pass = 0
let failed = 0
const ok = async (name, fn) => {
  try { await fn(); pass += 1; console.log(`  ok  ${name}`) }
  catch (error) { failed += 1; console.error(`  FAIL ${name}\n       ${error.message}`); process.exitCode = 1 }
}

console.log('提示词来源 · schema 容错')

await ok('纯数组：{title,text} 正常映射', async () => {
  const out = normalizePrompts([{ title: '电影感人像', text: '35mm 胶片质感', tags: ['人像'] }])
  assert.equal(out.length, 1)
  assert.equal(out[0].title, '电影感人像')
  assert.equal(out[0].text, '35mm 胶片质感')
  assert.deepEqual(out[0].tags, ['人像'])
})

await ok('纯数组：字符串条目也能认', async () => {
  const out = normalizePrompts(['一只猫在窗台上晒太阳'])
  assert.equal(out.length, 1)
  assert.equal(out[0].text, '一只猫在窗台上晒太阳')
  assert.ok(out[0].title.length > 0, '应自动生成标题')
})

await ok('common 包装：{ prompts: [...] }', async () => {
  const out = normalizePrompts({ prompts: [{ title: 'A', text: 'aaa' }] })
  assert.equal(out.length, 1)
  assert.equal(out[0].title, 'A')
})

await ok('common 包装：{ items: [...] } 与 { data: [...] }', async () => {
  assert.equal(normalizePrompts({ items: [{ text: 'x' }] }).length, 1)
  assert.equal(normalizePrompts({ data: [{ text: 'y' }] }).length, 1)
  assert.equal(normalizePrompts({ list: [{ text: 'z' }] }).length, 1)
})

await ok('分类嵌套：{ categories: [{ name, items }] } 并继承分类名', async () => {
  const out = normalizePrompts({
    categories: [
      { name: '摄影', items: [{ title: 'P1', text: 'photography' }] },
      { name: '插画', items: [{ title: 'I1', text: 'illustration' }] },
    ],
  })
  assert.equal(out.length, 2)
  assert.equal(out[0].category, '摄影', `分类应继承，实际「${out[0].category}」`)
  assert.equal(out[1].category, '插画')
})

await ok('字段别名：prompt / content / value 都当正文', async () => {
  assert.equal(normalizePrompts([{ prompt: 'via prompt' }])[0].text, 'via prompt')
  assert.equal(normalizePrompts([{ content: 'via content' }])[0].text, 'via content')
  assert.equal(normalizePrompts([{ value: 'via value' }])[0].text, 'via value')
})

await ok('tags 是逗号分隔字符串时也能拆', async () => {
  const out = normalizePrompts([{ text: 'x', tags: '人像，胶片, 暖色' }])
  assert.deepEqual(out[0].tags, ['人像', '胶片', '暖色'])
})

await ok('缺 title 时用正文截断兜底', async () => {
  const out = normalizePrompts([{ text: '一二三四五六七八九十一二三四五六七八九十一二三四五六七八九十' }])
  assert.ok(out[0].title.length > 0 && out[0].title.length <= 24, `标题长度 ${out[0].title.length}`)
})

await ok('完全认不出时返回空数组，不抛', async () => {
  assert.deepEqual(normalizePrompts(null), [])
  assert.deepEqual(normalizePrompts(undefined), [])
  assert.deepEqual(normalizePrompts({}), [])
  assert.deepEqual(normalizePrompts(42), [])
  assert.deepEqual(normalizePrompts('just a string'), [])
})

await ok('多余字段被忽略，不污染结构', async () => {
  const out = normalizePrompts([{ text: 'x', __proto__: { evil: 1 }, junk: [1, 2], nested: { a: 1 } }])
  assert.equal(out.length, 1)
  assert.equal(out[0].junk, undefined, '不该带上无关字段')
  assert.equal(out[0].nested, undefined)
})

await ok('按 title+text 去重', async () => {
  const dup = [{ title: 'A', text: 'same' }, { title: 'A', text: 'same' }, { title: 'B', text: 'diff' }]
  assert.equal(normalizePrompts(dup).length, 2, '重复项应被去掉')
})

await ok('没有 id 时自动生成稳定 id', async () => {
  const a = normalizePrompts([{ title: 'X', text: 'y' }])[0]
  const b = normalizePrompts([{ title: 'X', text: 'y' }])[0]
  assert.equal(a.id, b.id, '同样的内容应得到同样的 id（用于去重）')
  assert.ok(a.id.length > 0)
})

await ok('深层嵌套不会递归爆栈', async () => {
  let deep = { text: 'root' }
  for (let i = 0; i < 30; i += 1) deep = { children: [deep] }
  // 认不出就返回空，关键是不抛
  assert.doesNotThrow(() => normalizePrompts(deep))
})

await ok('条目数超过上限时被截断', async () => {
  const many = Array.from({ length: 5000 }, (_, i) => ({ title: `t${i}`, text: `x${i}` }))
  const out = normalizePrompts(many)
  assert.ok(out.length <= 3000, `应截断到 3000，实际 ${out.length}`)
})

await ok('normalizeSourceRecord：内置主页与 GitHub blob 链接自动转为 JSON 直链及镜像', async () => {
  assert.equal(BUILTIN_PROMPT_SOURCES.length, 7, '应内置 7 个官方来源')
  const fromHome = normalizeSourceRecord({ url: 'https://github.com/YouMind-OpenLab/awesome-gpt-image-2/' })
  assert.equal(fromHome.url, 'https://raw.githubusercontent.com/yukkcat/image-prompts/main/dist/sources/youmind-gpt-image-2.json')
  assert.equal(fromHome.fallbackUrl, 'https://cdn.jsdelivr.net/gh/yukkcat/image-prompts@main/dist/sources/youmind-gpt-image-2.json')
  assert.equal(fromHome.convertedFromHomepage, true)
  assert.equal(fromHome.name, 'YouMind GPT Image 2')

  const fromBlob = normalizeSourceRecord({ url: 'https://github.com/u/r/blob/main/dist/prompts.json' })
  assert.equal(fromBlob.url, 'https://raw.githubusercontent.com/u/r/main/dist/prompts.json')
  assert.equal(fromBlob.fallbackUrl, 'https://cdn.jsdelivr.net/gh/u/r@main/dist/prompts.json')
  assert.equal(fromBlob.convertedFromBlob, true)
  assert.ok(jsdelivrMirrorOf(fromBlob.url).includes('cdn.jsdelivr.net'))
})

await ok('normalizePrompts：保留封面图、参考图并把相对路径转绝对地址，缺分类自动继承来源名', async () => {
  const out = normalizePrompts([{
    id: 'p1',
    title: '苹果海报',
    prompt: '生成苹果风格海报',
    description: '高质感商业海报',
    coverUrl: 'images/cover.png',
    referenceImageUrls: ['images/ref1.jpg', 'https://cdn.example.com/ref2.png'],
    author: 'Tester',
    tags: ['海报'],
  }], { baseUrl: 'https://example.com/dist/sources/s1.json', sourceId: 's1', sourceName: '官方测试源' })
  assert.equal(out.length, 1)
  assert.equal(out[0].coverUrl, 'https://example.com/dist/sources/images/cover.png')
  assert.deepEqual(out[0].referenceImageUrls, [
    'https://example.com/dist/sources/images/ref1.jpg',
    'https://cdn.example.com/ref2.png',
  ])
  assert.equal(out[0].description, '高质感商业海报')
  assert.equal(out[0].author, 'Tester')
  assert.equal(out[0].category, '官方测试源')
})

await ok('mergePromptsWithSources：覆盖更新同源条目，停用/移除来源时剔除残留', async () => {
  const localSeed = [{ id: 'seed1', title: '本地种子', text: 'seed text', category: '内置', tags: [] }]
  const srcA = { id: 'sa', name: '源A', url: 'https://a.test/p.json', enabled: true }
  const srcB = { id: 'sb', name: '源B', url: 'https://b.test/p.json', enabled: true }
  const cache = {
    'https://a.test/p.json': { items: [{ id: '1', title: 'A1', text: 'new text', coverUrl: 'https://img/a.png' }] },
    'https://b.test/p.json': { items: [{ id: '2', title: 'B1', text: 'b text' }] },
  }
  const merged = mergePromptsWithSources(localSeed, [srcA, srcB], cache)
  assert.equal(merged.length, 3)
  assert.equal(merged.find((x) => x.id === '1')?.coverUrl, 'https://img/a.png')

  // 停用 B 后重新合并，应只剩源 A 和本地种子
  const onlyA = mergePromptsWithSources(merged, [srcA, { ...srcB, enabled: false }], cache)
  assert.equal(onlyA.length, 2)
  assert.equal(onlyA.some((x) => x.id === '2'), false)
  assert.equal(onlyA.some((x) => x.id === 'seed1'), true)
})

await ok('fetchSource：默认超时为 60 秒，且主地址卡住时提前竞速镜像成功', async () => {
  assert.ok(FETCH_TIMEOUT >= 60_000, `默认超时应不少于 60 秒，实际 ${FETCH_TIMEOUT}`)
  const hits = { primary: 0, fallback: 0 }
  const timers = []
  const srv = createServer((req, res) => {
    if (req.url === '/slow.json') {
      hits.primary += 1
      // 模拟主地址卡死不返回
      const t = setTimeout(() => {
        if (!res.writableEnded) {
          res.writeHead(200, { 'content-type': 'application/json' })
          res.end(JSON.stringify([{ title: '慢主源', text: 'slow' }]))
        }
      }, 4000)
      timers.push(t)
      return
    }
    if (req.url === '/fast-mirror.json') {
      hits.fallback += 1
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify([{ title: '镜像成功', text: 'mirror prompt' }]))
      return
    }
    res.writeHead(404).end('nf')
  })
  await new Promise((r) => srv.listen(0, '127.0.0.1', r))
  const port = srv.address().port
  try {
    const out = await fetchSource(
      { id: 'hedge_1', name: '竞速源', url: `http://127.0.0.1:${port}/slow.json`, fallbackUrl: `http://127.0.0.1:${port}/fast-mirror.json` },
      { timeoutMs: 3000, hedgeDelayMs: 60 },
    )
    assert.equal(out.ok, true, `镜像竞速应成功，实际失败：${out.error}`)
    assert.equal(out.items.length, 1)
    assert.equal(out.items[0].title, '镜像成功')
    assert.ok(out.ms < 1500, `镜像竞速应快速返回，实际耗时 ${out.ms}ms`)
    assert.equal(hits.primary, 1)
    assert.equal(hits.fallback, 1)
  } finally {
    timers.forEach(clearTimeout)
    srv.close()
  }
})

await ok('fetchAllSources：onlyMissingOrFailed 跳过已成功缓存的源，不重复请求', async () => {
  const hits = { cached: 0, missing: 0 }
  const srv = createServer((req, res) => {
    if (req.url === '/cached.json') {
      hits.cached += 1
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify([{ title: '新缓存', text: 'fresh' }]))
      return
    }
    if (req.url === '/missing.json') {
      hits.missing += 1
      res.writeHead(200, { 'content-type': 'application/json' })
      res.end(JSON.stringify([{ title: '补拉成功', text: 'retried prompt' }]))
      return
    }
    res.writeHead(404).end('nf')
  })
  await new Promise((r) => srv.listen(0, '127.0.0.1', r))
  const port = srv.address().port
  const cachedUrl = `http://127.0.0.1:${port}/cached.json`
  const missingUrl = `http://127.0.0.1:${port}/missing.json`
  const srcCached = { id: 's_ok', name: '已成功源', url: cachedUrl, enabled: true }
  const srcMissing = { id: 's_miss', name: '未拉取源', url: missingUrl, enabled: true }
  try {
    writePromptCache({
      [cachedUrl]: { id: 's_ok', name: '已成功源', url: cachedUrl, items: [{ id: 'old1', title: '已有条目', text: 'cached text' }], at: Date.now(), count: 1 },
    })
    assert.equal(sourceNeedsFetch(srcCached), false)
    assert.equal(sourceNeedsFetch(srcMissing), true)

    const out = await fetchAllSources([srcCached, srcMissing], { onlyMissingOrFailed: true, timeoutMs: 3000 })
    assert.equal(out.skipped, 1, '应跳过 1 个已成功缓存的源')
    assert.equal(out.results.length, 1, '只应返回实际拉取的 1 个源结果')
    assert.equal(out.results[0].ok, true)
    assert.equal(hits.cached, 0, '已成功缓存的源不该再次发网络请求')
    assert.equal(hits.missing, 1, '未拉取的源应发 1 次请求')
    assert.equal(out.prompts.length, 2, '合并后的提示词应包含跳过的旧缓存和新拉到的条目')
  } finally {
    writePromptCache({})
    srv.close()
  }
})

console.log(`\n${pass} 项通过${failed ? `，${failed} 项失败` : ''}`)
