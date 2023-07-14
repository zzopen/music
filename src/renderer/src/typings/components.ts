import type { AppRouteRecordRaw, Route } from './typings'

const ROOT_ROUTE: Route = {
  name: 'Root',
  path: '/'
}

const LOGIN_ROUTE: Route = {
  name: 'Login',
  path: '/login'
}

const HOME_ROUTE: Route = {
  name: 'Home',
  path: '/discover'
}

const PAGE_NOT_FOUND_ROUTE: Route = {
  name: 'PageNotFound',
  childrenName: 'PageNotFoundChildren',
  path: '/:pathMatch(.*)*'
}

const LOGIN_COMPONENT = () => import('@/components/login')
const EXCEPTION_COMPONENT = () => import('@/components/exception')
const LAYOUT_COMPONENT = () => import('@/components/layout/default')

const LoginRoute: AppRouteRecordRaw = {
  name: LOGIN_ROUTE.name,
  path: LOGIN_ROUTE.path,
  component: LOGIN_COMPONENT,
  meta: { title: '登录页面' }
}

const PageNotFoundRoute: AppRouteRecordRaw = {
  path: PAGE_NOT_FOUND_ROUTE.path,
  name: PAGE_NOT_FOUND_ROUTE.name,
  component: EXCEPTION_COMPONENT,
  meta: {
    title: '404'
  }
}

const BUILT_IN_ROUTES = [LoginRoute, PageNotFoundRoute]

export {
  LoginRoute,
  PageNotFoundRoute,
  ROOT_ROUTE,
  HOME_ROUTE,
  LOGIN_ROUTE,
  PAGE_NOT_FOUND_ROUTE,
  BUILT_IN_ROUTES,
  LOGIN_COMPONENT,
  EXCEPTION_COMPONENT,
  LAYOUT_COMPONENT
}
