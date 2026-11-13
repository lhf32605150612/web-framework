<template>
  <div class="card">
    <h2>隔壁卡（只有重置，也能影响左卡）</h2>
    <p style="font-size: 40px; margin: 8px 0">{{ $store.state.count }}</p>
    <button @click="$store.commit('reset')">清零</button>
  </div>
</template>

<script>
export default {
  name: 'MirrorCard'
}
</script>