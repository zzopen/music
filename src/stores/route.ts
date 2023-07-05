import { defineStore } from 'pinia'
import { router } from '@/routers'
import { type AppRouteRecordRaw, loadAsyncRoutes } from '@/routers'

export const useRouteStore = defineStore({
	id: 'app-route',
	state: () => ({
		flag: false, // 代表是否已经动态加载完毕路由
		routeList: [] as AppRouteRecordRaw[]
	}),
	getters: {
		isLoadRoute(): boolean {
			return this.flag
		}
	},
	actions: {
		setFlag() {
			this.flag = true
		},
		async loadRoutes() {
			if (this.flag) {
				return
			}

            const routeList = await loadAsyncRoutes()
			routeList.forEach((route) => {
				router.addRoute(route)
			})

			this.setFlag()
            this.routeList = routeList
		}
	}
})
