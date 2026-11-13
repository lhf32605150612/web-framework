<template>
  <div>
    <div class="card">
      <h2>Pinia 计数器（对照左边 Vuex 页）</h2>
      <p style="font-size: 40px; margin: 8px 0">
        {{ count }}　<small style="font-size: 18px">× 2 = {{ double  }}</small>   <!-- 补全：getters 里那个"自动算倍数"的成员名 -->
      </p>
      <button @click="increment">+1</button>
      <button @click="decrement">-1</button>
      <p class="muted">
        没有 mutations、没有 $store、没有 commit——mapState 直接抄数据，actions 当方法调
      </p>
    </div>

    <UserCard />
  </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../../store/counter'
import UserCard from './UserCard.vue'

export default {
  name: 'PiniaDemo',
  components: { UserCard },
  computed: {
    // pinia 的 mapState：state 成员（count）和 getters 成员（double）都能抄
    ...mapState(useCounterStore, ['count', 'double'])    // 补全：把 getters 成员也抄进来（数组第二项）
  },
  methods: {
    // pinia 的 mapActions：把仓库里的 actions 挂成本组件的方法
    ...mapActions(useCounterStore, ['increment', 'decrement'])
  }
}
</script>