import { createApp } from 'vue'
import App from './App.vue'
import { setupPlugins } from '@/plugins'

const app = createApp(App)
async function bootstrap() {
  await setupPlugins(app)
  app.mount('#app').$nextTick(() => postMessage({ payload: 'removeLoading' }, '*'))
}

await bootstrap()
