<template>
  <div class="box">
    <p>② 指令版：页面一打开自动聚焦（点本卡片任意处再按 F5 试试）</p>
    <input v-focus type="text" v-model="msg" />
  </div>
</template>

<script>
export default {
  name: 'MyInput02',
  data() {
    return { msg: '123456789' }
  },
  directives: {
    focus: {
      mounted(el) {
        el.focus()
      }
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