import { fileURLToPath, URL } from 'url'
import path from 'path'
import { defineConfig } from 'vite'
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
    // alias: {
    //   '/@': path.resolve(__dirname, './src'),
    //   '/IMG': fileURLToPath(new URL('./src/assets/images/',import.meta.url))
    // },
    alias: [
      { find: '/@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      { find: '/IMG', replacement: fileURLToPath(new URL('./src/assets/images/', import.meta.url)) },
    ],
    extensions: ['.js','.ts','.json','.jsx','.mjs','.tsx','.vue']
  },
  base: './'
})
