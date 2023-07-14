import { App } from 'vue'
import Components from "@/components"
import "uno.css";

export default {
    install(app: App) {
        setupGlobal(app)
    }
}

export function setupGlobal(app: App) {
    app.use(Components)
}
