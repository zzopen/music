import { type Router } from 'vue-router'
import { createLoginGuard } from './loginGuard'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router: Router) {
  // todo: 顺序不能随意修改，有先后依赖
  createLoginGuard(router)
  createPermissionGuard(router)
}
