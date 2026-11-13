import { createRouter, createWebHashHistory } from 'vue-router'
import ElementDemo from '../views/01-element/ElementDemo.vue'
import FormMenu from '../views/02-element/FormMenu.vue'
import VantDemo from '../views/03-vant/VantDemo.vue'
import AxiosGet from '../views/04-axios/AxiosGet.vue'
import BookList from '../views/05-books/BookList.vue'
import VuexDemo from '../views/06-vuex/VuexDemo.vue'
import PiniaDemo from '../views/07-pinia/PiniaDemo.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', redirect: '/element' },
    { path: '/element', component: ElementDemo },
    { path: '/form-menu', component: FormMenu },
    { path: '/vant', component: VantDemo },
    { path: '/axios', component: AxiosGet },
    { path: '/books', component: BookList },
    { path: '/vuex', component: VuexDemo },
    { path: '/pinia', component: PiniaDemo }
  ]
})

export default router