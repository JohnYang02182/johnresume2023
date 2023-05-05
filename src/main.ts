import { createApp } from 'vue'
import { setupI18n } from '../util/i18n'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router/index'
const pinia = createPinia()
const i18n = async() => await setupI18n(localStorage.getItem('lang') ?? 'en')
export const app = createApp(App)
app.use(router).use(i18n).use(pinia).mount('#app')
