// dsh-chunfeng-image 浏览器半片：无限画布创作台。
// main keyed slot 占主区整页，sidebar.panellist 放入口。
import React from 'react'
import { App } from './shell.jsx'
import { Boundary } from './ui.jsx'
import { Icon } from './ui.jsx'

const PANEL_ID = 'dsh-chunfeng-image'

export const inject = ['slots']

export function apply(ctx) {
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, Root))
  ctx.effect(() => {
    let release = null
    const mount = () => {
      release?.()
      release = ctx.slots.inject('sidebar.panellist', () => ctx.slots.register({
        name: 'sidebar.panellist', id: PANEL_ID, order: 6, label: () => '春风画布',
      }, PanelIcon))
    }
    mount()
    return () => release?.()
  }, 'dsh-chunfeng-image: sidebar entry')
}

// 侧栏入口图标：单张图片（image），不是画布叠层（canvas）。
// 画布叠层留给画布页自身的空态与品牌位，入口用图片更直白。
function PanelIcon() {
  return <Icon name="image" size={16} />
}

// 根级兜底：连 App 自己抛错（例如读盘数据异常）也不能让面板变白屏
function Root() {
  return <Boundary><App /></Boundary>
}
