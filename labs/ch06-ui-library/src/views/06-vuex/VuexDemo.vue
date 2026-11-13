<template>
  <div>
    <CounterCard />
    <MirrorCard />
    <div class="card">
      <h2>为什么需要 Vuex？</h2>
      <p>
        上面的两张卡互不认识（不是父子、不传 props），但点左卡的 +1，右卡的数字也跟着变——
        因为它们读的是<b>同一间仓库</b>里的同一个 <code>count</code>。
        props/emit 只能"父子相邻传话"，跨层级、兄弟组件共享数据就要靠集中仓库。
      </p>
    </div>
  </div>
</template>

<script>
import CounterCard from './CounterCard.vue'
import MirrorCard from './MirrorCard.vue'

export default {
  name: 'VuexDemo',
  components: { CounterCard, MirrorCard }
}
</script>