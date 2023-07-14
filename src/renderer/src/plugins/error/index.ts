import { App } from 'vue'

export default {
  install(app: App) {
    setupError(app)
  }
}

export function setupError(app: App) {
  // 全局异常处理
  app.config.errorHandler = (err, vm, info) => {
    // 处理错误
    // `info` 是 Vue 特定的错误信息，比如错误所在的生命周期钩子

    console.error('====== 有报错了兄弟!!! ======', err)
    if (err instanceof Error) {
      console.error('❌ 提示:', err.message)
    }
  }
}
