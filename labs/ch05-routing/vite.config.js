import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// 注册 Vue 插件，Vite 才能编译 .vue 单文件组件
export default defineConfig({
  plugins: [vue()]
})
