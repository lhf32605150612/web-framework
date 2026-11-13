import { createStore } from 'vuex'

export default createStore({
  state: {
    count: 0                    // 补全：公共计数的初始值（数字）
  },
  mutations: {
    increment(state) {
      state.count++                  // 补全：收银员亲手把哪个货架数据加一？
    },
    decrement(state) {
      state.count--
    },
    reset(state) {
      state.count = 0        // 隔壁卡片也能喊收银员"清零"——同一间仓库
    }
  }
})
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  // state 是函数（返回对象），Pinia 的固定写法
  state: () => ({
    count: 0
  }),
  getters: {
    // 箭头函数收 state：state.count 变，double 自动重算
    double: (state) => state.count * 2      // 补全：double 是 count 的几倍？
  },
  actions: {
    increment() {
      this.count++                                // 补全：没有 mutations 了，actions 里直接改谁？
    },
    decrement() {
      this.count--
    }
  }
})