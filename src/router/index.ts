import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import routesParams from './routes'
import { getCardInfo } from '/@/hooks/useProtfolioCard'
function scrollBehavior() {
  document.getElementById('app')!.scrollIntoView({ behavior: 'smooth' });
}
const router = createRouter({
  history: createWebHistory(),
  routes: routesParams
})
router.beforeEach((to, from) => {
  if (to.params.id !== from.params.id && to.params.id !== null) {
    let paramsId = typeof to.params.id !== 'object' ? to.params.id : ''
    to.meta.msg1 = getCardInfo(parseInt(paramsId))
  }
  scrollBehavior()
})
export default router