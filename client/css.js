// 三份样式拼成一个字符串：esbuild 的 text loader 不会解析 CSS 里的 @import，
// 所以 tokens / base / app 必须在这里合并后一起注入宿主。
import tokens from './tokens.css'
import base from './base.css'
import app from './styles.css'

export default `${tokens}\n${base}\n${app}`
