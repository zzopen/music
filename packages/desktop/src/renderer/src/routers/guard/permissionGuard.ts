import { type Router } from 'vue-router'

export function createPermissionGuard(router: Router) {
  router.beforeEach(async (to) => {
    window.preloadContext.tokenService.setToken(
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2OTI3Nzc0ODIsImlhdCI6MTY5MDE4NTQ4Mn0.5WeOU-_ZTpa78j5kDTsG5y8HNXaWY95E7yDmEFpcJcI'
    )
  })
}
