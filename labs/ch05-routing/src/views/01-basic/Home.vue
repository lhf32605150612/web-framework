<template>
  <div class="page">
    <h2>🏠 Home 首页</h2>
    <p>我是路由 <code>/home</code> 对应的页面组件——地址栏变 <code>#/home</code> 时，router-view 里显示我。</p>
    <p class="muted">注意整个切换过程页面没有刷新（F12 Network 里没有新请求）——这就是"前端路由"。</p>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--primary);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}

.muted {
  color: var(--muted);
}
</style>



