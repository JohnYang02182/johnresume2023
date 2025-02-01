import { createApp } from 'vue'
import { setupI18n } from '../util/i18n'
import { createPinia } from 'pinia'
import { MotionPlugin } from '@vueuse/motion'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFlag, faGlobe, faChevronDown } from '@fortawesome/free-solid-svg-icons'
import prism from '../plugins/prism'
import App from './App.vue'
import router from './router/index'
const pinia = createPinia()
library.add(faFlag, faGlobe, faChevronDown)
export const app = createApp(App)
app.use(router).use(prism).use(setupI18n()).use(pinia).use(MotionPlugin).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
