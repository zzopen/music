import { type App } from 'vue'
import { router } from '@/routers'
import { setupRouterGuard } from '@/routers/guard'

export default {
  install(app: App) {
    setupRouter(app)
  }
}

export function setupRouter(app: App) {
  app.use(router)
  setupRouterGuard(router)
}
