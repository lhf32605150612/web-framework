<template>
  <div class="page">
    <h2>📚 About 关于页</h2>
    <p>我是路由 <code>/about</code> 对应的页面组件。</p>
    <p>从 Home 点过来：地址栏变成 <code>#/about</code>，Home 组件被卸载、我被挂进 router-view——组件级切换，不是页面级刷新。</p>
  </div>
</template>

<script>
export default {
  name: 'About'
}
</script>

<style scoped>
.page {
  background: var(--card, #fff);
  border: 1px solid var(--border);
  border-left: 4px solid var(--accent);
  border-radius: var(--radius);
  box-shadow: var(--shadow);
  padding: 14px 18px;
}

code {
  background: #f0f1ff;
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}
</style>
