import { createApp } from 'vue'
import { setupI18n } from '../util/i18n'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'
import router from './router/index'
const pinia = createPinia()
export const app = createApp(App)
app.use(router).use(setupI18n()).use(pinia).use(MotionPlugin).mount('#app')
