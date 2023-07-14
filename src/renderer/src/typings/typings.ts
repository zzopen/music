import { type RouteRecordRaw } from 'vue-router'

type AppRouteRecordRaw = RouteRecordRaw

interface Route {
  name: string
  path: string
  childrenName?: string
}

export type { AppRouteRecordRaw, Route }
