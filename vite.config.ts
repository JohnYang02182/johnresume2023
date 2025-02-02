import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import { dirname, resolve } from 'node:path'

export default defineConfig({
  build: {
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia']
        }
      }
    }
  },
  plugins: [
    vue({
      template: {
        compilerOptions: {
          isCustomElement: () => false
        }
      }
    }),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './locales/**'),
      strictMessage: false,
      escapeHtml: false
    })
  ],
  resolve: {
    alias: {
      '/@': fileURLToPath(new URL('./src', import.meta.url)),
      '/IMG': fileURLToPath(new URL('./src/assets/images', import.meta.url)),
      '/FONT': fileURLToPath(new URL('./src/assets/fonts', import.meta.url))
    }
  },
  base: '/'
})