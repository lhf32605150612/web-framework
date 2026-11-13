<template>
  <div class="box">
    <p>① 手动版：点按钮才聚焦</p>
    <input ref="inputRef" type="text" v-model="msg" />
    <button @click="getFocus">获取焦点</button>
  </div>
</template>

<script>
export default {
  name: 'MyInput01',
  data() {
    return { msg: 'Vue.js前端开发实战' }
  },
  methods: {
    getFocus() {
      this.$refs.inputRef.focus()
    }
  }
}
</script>

<style scoped>
.box {
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  flex: 1;
  background: #fff;
}

.box p {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--muted);
}
</style>