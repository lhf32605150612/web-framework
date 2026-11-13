<template>
  <div id="app">
    <h1>ch06-ui-library｜第 6—7 章实验台</h1>
    <p class="muted">第 06 课：UI 组件库（Element Plus · Vant）+ 网络请求与状态管理（Axios · Vuex · Pinia）</p>

    <nav class="top-nav">
      <router-link to="/element">按钮与表格</router-link>
      <router-link to="/form-menu">表单与菜单</router-link>
      <router-link to="/vant">Vant 移动端</router-link>
      <router-link to="/axios">Axios GET</router-link>
      <router-link to="/books">图书列表 POST</router-link>
      <router-link to="/vuex">Vuex 计数器</router-link>
      <router-link to="/pinia">Pinia 计数器</router-link>
    </nav>

    <p class="muted addr">当前地址：<code>{{ $route.fullPath }}</code></p>

    <!-- 唯一的路由出口：地址匹配到谁，谁就在这里上屏 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.top-nav {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 12px 0 8px;
}

.top-nav a {
  color: var(--primary-dark);
  text-decoration: none;
  border: 1px solid var(--primary);
  border-radius: 999px;
  padding: 3px 14px;
  font-size: 14px;
}

.top-nav a:hover {
  background: var(--primary-bg);
}

/* router-link 匹配当前地址时自动带上 router-link-active 类——白送的高亮 */
.top-nav a.router-link-active {
  background: var(--primary);
  color: #fff;
}

.addr {
  font-size: 13px;
}

code {
  background: var(--primary-bg);
  border-radius: 4px;
  padding: 0 6px;
  font-family: Consolas, Monaco, monospace;
}
</style>