// 春风画布 · 存储键的唯一真相
// 所有 DB 名 / object store 名 / 键名 / 版本号都从这里取，别处不准写字面量。
// 键名统一带 cf: 前缀，避免和宿主或其它插件撞车。

/** IndexedDB 库名。与插件 id 一致，便于在 DevTools 里认出来。 */
export const DB_NAME = 'dsh-chunfeng-image'

/**
 * 库结构版本。只在 object store 增删时 +1。
 * 注意：这个**不是**数据格式版本，别把它和 SCHEMA_VERSION 混用。
 */
export const DB_VERSION = 1

/**
 * 数据格式版本。迁移器用它判断"这份数据是不是当前格式"。
 * 只写进 IndexedDB 的 meta，不写 localStorage——
 * 写 localStorage 会出现「标记写成功、数据没写进去」的假成功。
 */
export const SCHEMA_VERSION = 1

/** IndexedDB 里的 object store。只增不删；删了老版本标签页会写回 NotFoundError。 */
export const STORES = {
  /** zustand persist 的画布层 + 各种 JSON 键（prompts / assets / 提示词源） */
  appState: 'app_state',
  /** 原图 Blob，一个 storageKey 一条 */
  imageFiles: 'image_files',
  /** 768px WebP 预览 */
  imagePreviews: 'image_previews',
  /** 视频 / 音频 Blob */
  mediaFiles: 'media_files',
  /** 生成记录，一条 log:<id> 一条 */
  logs: 'logs',
  /** schemaVersion / migratedAt / 迁移锁 / 旧数据备份 */
  meta: 'meta',
}

export const STORE_NAMES = Object.values(STORES)

/** localStorage 侧：配置层 + 旧数据。旧键永不主动删。 */
export const LS = {
  /** 旧版整包 state（shell.jsx 的 STORE_KEY）。只读，不写，迁移后保留。 */
  legacyState: 'dsh-chunfeng-image:state:v2',
  /** 配置层：渠道（含明文 Key）、默认参数、助手模型 */
  config: 'dsh-cf:config:v1',
  /** 配置层备份：每次覆盖前把上一份存这里，主键读空时自愈 */
  configBackup: 'dsh-cf:config:backup',
  /** 极小 UI 状态：当前视图、配置页 tab、网格样式 */
  ui: 'dsh-cf:ui:v1',
}

/** IndexedDB 里的逻辑键。 */
export const K = {
  /** 画布层整包（zustand persist 的单键） */
  canvasProjects: 'canvas:projects',
  prompts: 'prompts',
  promptSources: 'promptSources',
  promptCache: 'promptCache',
  assets: 'assets',
  assistantMessages: 'assistantMessages',
  /** 生成记录单条 */
  logOne: (id) => `log:${id}`,
  /** meta */
  schemaVersion: 'schemaVersion',
  migratedAt: 'migratedAt',
  migrationLock: 'migrationLock',
  migrationStatus: 'migration',
  rawBackup: 'rawBackup',
}

/** 存储层错误类型，供上层区分「配额满」和「其它」。 */
export const ERROR_KIND = {
  QUOTA: 'quota',
  VERSION: 'version',
  BLOCKED: 'blocked',
  CLOSED: 'closed',
  UNAVAILABLE: 'unavailable',
  ABORT: 'abort',
  ERROR: 'error',
}
