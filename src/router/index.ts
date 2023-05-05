import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routesParams from './routes'

const router = createRouter({
  history: createWebHistory(),
  routes: routesParams
})

export default router