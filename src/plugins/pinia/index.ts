import { type App } from 'vue'
import { createPinia } from 'pinia'

const pinia = createPinia()

export default {
	install(app: App) {
		setupStore(app)
	}
}

export function setupStore(app: App) {
	app.use(pinia)
}
