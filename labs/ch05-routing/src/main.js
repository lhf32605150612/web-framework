import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 创建应用实例，挂载路由，最后挂载到 index.html 的 #app
createApp(App).use(router).mount('#app')
