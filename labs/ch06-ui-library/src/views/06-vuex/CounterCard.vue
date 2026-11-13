<template>
  <div class="card">
    <h2>计数器（本卡能加减）</h2>
    <p style="font-size: 40px; margin: 8px 0">{{ ______.state.count }}</p>       <!-- 补全：模板里仓库对象的"路名" -->
    <button @click="$store.commit('______')">+1</button>                          <!-- 补全：加一的 mutation 名字 -->
    <button @click="$store.commit('decrement')">-1</button>
  </div>
</template>

<script>
export default {
  name: 'CounterCard'
  // 这页连 data 都没有——数据全在仓库里，模板直接读 $store.state.count
}
</script>