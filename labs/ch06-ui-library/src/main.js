
import { createApp } from 'vue'
import './style.css'

// ① Element Plus：全量引入（教材 6.2.1）——注册全部 el-xxx 组件 + 全部样式
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// ② Element Plus 图标包：全局注册所有图标组件（注册后模板里 <el-icon><HomeFilled /></el-icon> 直接用）
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Vant from 'vant'
import 'vant/lib/index.css'

import App from './App.vue'
import router from './router'          // 第 5 章的路由，今天当"实验台导航"复用
import store from './store' 
import { createPinia } from 'pinia'
import piniaPersist from 'pinia-plugin-persistedstate'


const app = createApp(App)

// 图标注册：把几十个图标组件挨个挂到全局（key 是组件名，如 'HomeFilled'）
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

app.use(ElementPlus)
app.use(Vant)
app.use(router)
const pinia = createPinia()
pinia.use(piniaPersist)   // 挂持久化插件：管 store 里的数据要不要存 localStorage
app.use(pinia)



app.mount('#app')