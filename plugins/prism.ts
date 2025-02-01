import prism from 'prismjs'
import type { App } from 'vue'

import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-scss'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-markdown'

import 'prismjs/themes/prism-tomorrow.css'

export default {
  install: (app: App) => {
    app.config.globalProperties.$prism = prism
  }
};