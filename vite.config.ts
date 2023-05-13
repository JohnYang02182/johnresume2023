import { fileURLToPath, URL } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
import { resolve, dirname } from 'node:path'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 6060,
  },
  plugins: [
    vue(),
    VueI18nPlugin({
      include: [path.resolve(__dirname, './locales/**')],
    })
  ],
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL("./src",import.meta.url)),
      '/IMG': fileURLToPath(new URL('./src/assets/images/',import.meta.url))
    }
  },
})
