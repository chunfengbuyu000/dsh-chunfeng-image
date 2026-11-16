// 只用于本地预览：把 Desk 挂到 #root，并把样式字符串注入 <style>。
import React from 'react'
import { createRoot } from 'react-dom/client'
import { Desk } from '../client/desk.jsx'
import css from '../client/css.js'

const style = document.createElement('style')
style.textContent = css
document.head.append(style)

createRoot(document.getElementById('root')).render(React.createElement(Desk))
