import { createRouter, createWebHistory } from 'vue-router'
import routesParams from './routes'
import { getCardInfo } from '/@/hooks/useProtfolioCard'
import { useUserStore } from '../../store/user'

function scrollBehavior() {
  document.getElementById('app')!.scrollIntoView({ behavior: 'smooth' });
}
const router = createRouter({
  history: createWebHistory(),
  routes: routesParams
})

router.beforeEach((to, from) => {
  const userStore = useUserStore()
  if (to.params.id !== from.params.id && to.params.id !== null) {
    let paramsId = typeof to.params.id !== 'object' ? to.params.id : ''
    to.meta.msg1 = getCardInfo(parseInt(paramsId))
  }
  scrollBehavior()
  userStore.loadingStart()
})
router.afterEach(() => {
  const userStore = useUserStore()
  userStore.loadingEnd()
})
export default router