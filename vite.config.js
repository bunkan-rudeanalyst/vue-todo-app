import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: './', // ← 相対パスでデプロイできるようにする
  plugins: [vue()],
})
