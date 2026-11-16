// dsh-chunfeng-image 浏览器半片：无限画布创作台。
// main keyed slot 占主区整页，sidebar.panellist 放入口。
import css from './css.js'
import { Desk } from './desk.jsx'
import { Icon } from './ui.jsx'

const PANEL_ID = 'dsh-chunfeng-image'

export function apply(ctx) {
  ctx.slots.inject('main', () => ctx.slots.register({ name: 'main', key: PANEL_ID }, Desk))
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

function PanelIcon() {
  return <Icon name="canvas" size={16} />
}
