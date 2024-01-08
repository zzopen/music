import { type Router } from 'vue-router'

export function createLoginGuard(router: Router) {
  router.beforeEach(async (to) => {
    console.log('to:', to)
    console.log('routes:', router.getRoutes())
  })
}
