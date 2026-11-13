<template>
  <div class="tab-card left">
    <h3>MyLeft 组件（被 KeepAlive 包着）</h3>
    <p>count 值为：{{ count }}（切走再切回，看它丢不丢）</p>
    <button @click="count++">+1</button>
  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  data() {
    return { count: 0 }
  },
  mounted() {
    console.log('MyLeft组件挂载完了')
  },
  unmounted() {
    console.log('MyLeft组件被销毁了')
  },
  activated() {
    console.log('MyLeft组件被激活了')
  },
  deactivated() {
    console.log('MyLeft组件被缓存了')
  }
}
</script>

<style scoped>
.tab-card {
  border: 1.5px solid var(--primary);
  border-radius: 8px;
  padding: 10px 16px;
  margin-top: 10px;
  background: var(--primary-bg);
}
</style>

