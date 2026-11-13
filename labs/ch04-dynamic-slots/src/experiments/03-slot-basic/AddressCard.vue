<template>
  <div class="card">
    <header>📦 收货信息</header>
    <!-- 占位：使用者在双标签里塞什么，这里就显示什么；
         什么都不塞，就显示标签内写好的后备内容 -->
    <slot>
      <p>暂无收货信息，请填写～</p>
    </slot>
  </div>
</template>

<script>
export default {
  name: 'AddressCard'
}
</script>

<style scoped>
.card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: #fff;
  box-shadow: var(--shadow);
  padding: 12px 16px;
  min-width: 220px;
}

header {
  font-weight: 600;
  border-bottom: 1px dashed var(--border);
  padding-bottom: 6px;
  margin-bottom: 8px;
}
</style>




