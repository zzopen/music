import { App } from 'vue'
import { setupGlobal } from './global'
import { setupError } from './error'
import { setupAntDesignVue } from './ant-design'
import { setupStore } from './pinia'
import { setupRouter } from './vue-router'

export async function setupPlugins(app: App) {
  // 异步加载请使用 setupXXX
  // 同步加载请使用 installXXX
  setupGlobal(app)
  setupError(app)
  setupAntDesignVue(app)
  setupStore(app)
  setupRouter(app)
}
