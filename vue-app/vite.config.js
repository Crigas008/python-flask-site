import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: '/vue/',
  build: {
    outDir: '../public/vue',
    emptyOutDir: true, // Очищать выходную директорию
    rollupOptions: {
      external: ['vue'] // Важно для корректного бандлинга
    }
  },
  plugins: [vue()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'vue': 'vue/dist/vue.esm-bundler.js' // Явное указание сборки
    }
  },
  optimizeDeps: {
    include: ['vue'] // Оптимизация для Vue
  }
})