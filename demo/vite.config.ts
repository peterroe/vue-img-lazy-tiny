import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  root: './',
  // keep the same name as your github repos
  base: 'vue-img-lazy-tiny',
  mode: 'production',
  plugins: [vue()],
  build: {
    outDir: './docs',
  },
})
