import { App } from 'vue'
import VueDOMPurifyHTML from 'vue-dompurify-html'
import GlobalComponents from '@/components'
import 'uno.css'

export default {
  install(app: App) {
    setupGlobal(app)
  }
}

export function setupGlobal(app: App) {
  app.use(GlobalComponents)
  app.use(VueDOMPurifyHTML)
}
