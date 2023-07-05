import { createRouter, createWebHistory } from 'vue-router'
import {
  BUILT_IN_ROUTES,
  LAYOUT_COMPONENT,
  ROOT_ROUTE,
  HOME_ROUTE,
} from "@/typings";
import type { AppRouteRecordRaw } from "@/typings";

const routes: AppRouteRecordRaw = {
  name: ROOT_ROUTE.name,
  path: ROOT_ROUTE.path,
  redirect: HOME_ROUTE.path,
  component: LAYOUT_COMPONENT,
  meta: { title: "项目根路径" },
  children: [
    {
      path: "/discover",
      name: "discover",
      component: () => import("@/views/discover/index.vue"),
    },
  ],
};

const router = createRouter({
  history: createWebHistory(), // history路由模式
  routes: [...BUILT_IN_ROUTES, routes] as unknown as AppRouteRecordRaw[],
  strict: true, // 是否应该禁止尾部斜杠。默认为假
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

export { router }