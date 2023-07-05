import { defineStore } from 'pinia'
import { router } from '@/routers'
import { HOME_ROUTE } from '@/routers'
import { setUserInfo } from '@/logic'
import { type LoginReq, reqLogin } from '@/request'

export const useUserStore = defineStore({
    id: 'app-user',
    state: () => ({
        userInfo: {},
        loadUserInfo: false
    }),
    getters: {

    },
    actions: {
        async login(req: LoginReq) {
            await reqLogin(req)
            await this.afterLogin()
        },
        async afterLogin() {
            setUserInfo()
            await router.replace(HOME_ROUTE.path)
        }
    }
})
