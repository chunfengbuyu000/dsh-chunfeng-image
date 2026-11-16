// dsh-chunfeng-image host 半片。
// 画布状态存在浏览器侧（localStorage + 导出工程文件），Host 只负责让插件挂载。
export const name = 'dsh-chunfeng-image'

export default {
  inject: [],
  apply() {
    // 画布是纯客户端面板：没有 Host 路由、没有服务依赖。
    // 需要落地时（多端同步、真实渠道调用），在这里加 webServer 路由。
  },
}
