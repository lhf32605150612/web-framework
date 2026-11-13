import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => ({
    name: '张三',
    age: 18
  }),
  actions: {
    setName(name) {
      this.name = name
    },
    grow() {
      this.age++            // 补全：长一岁——age 自己加一
    }
  },
  persist: {
    // pick = 挑着存：只把 age 写进 localStorage，name 不存（刷新即回默认值）
    pick: ['age']
  }
})