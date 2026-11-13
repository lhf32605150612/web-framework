import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // resolvers 数组里放"各家组件库的翻译官"——
    // 以后要给 Element Plus 也按需引入，就再 import 一个 ElementPlusResolver 加进来
    Components({
      resolvers: [VantResolver()],
    }),
  ],
})
