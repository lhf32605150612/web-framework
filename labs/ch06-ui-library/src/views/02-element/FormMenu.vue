<template>
  <div>
    <div class="card">
      <h2>3. Form 表单：:inline 行内 + :model 绑数据</h2>
      <p class="muted">用户名可一键清空（clearable），密码有小眼睛（show-password），提交结果打到下方控制台</p>
      <el-form :inline="true" :model="form" class="demo-form-inline">  <!-- 补全：行内排布的布尔值 -->
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名" clearable />  <!-- 补全：绑到 form 的用户名属性 -->
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="form.password" type="password" placeholder="请输入密码" show-password />  <!-- 补全：密码小眼睛属性 -->
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button @click="onReset">重置</el-button>
        </el-form-item>
      </el-form>
      <div class="console">{{ formLog }}</div>
    </div>

    <div class="card">
      <h2>4. Menu 菜单：横向导航 + 垂直侧边栏</h2>
      <p class="muted">default-active 是点亮项；垂直菜单的"我的"是 el-sub-menu，可展开折叠</p>
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect">  <!-- 补全：横向模式的关键字 -->
        <el-menu-item index="1"><el-icon><HomeFilled /></el-icon>首页</el-menu-item>
        <el-menu-item index="2"><el-icon><ShoppingCart /></el-icon>商品管理</el-menu-item>
        <el-menu-item index="3"><el-icon><Tickets /></el-icon>订单管理</el-menu-item>
      </el-menu>

      <div class="menu-flex">
        <el-menu class="el-menu-vertical-demo" :default-active="activeIndex" @select="handleSelect">
          <el-menu-item index="1"><el-icon><HomeFilled /></el-icon>首页</el-menu-item>
          <el-sub-menu index="my">                                      <!-- 补全：子菜单自己的唯一 index（自定义一个字符串） -->
            <template #title><el-icon><User /></el-icon>我的</template>
            <el-menu-item index="4">个人中心</el-menu-item>
            <el-menu-item index="5">修改密码</el-menu-item>
          </el-sub-menu>
          <el-menu-item index="3"><el-icon><Tickets /></el-icon>订单管理</el-menu-item>
        </el-menu>
        <p class="muted">最近选中：{{ activeIndex }} 号菜单项</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FormMenu',
  data() {
    return {
      form: {
        username: '',
        password: ''
      },
      formLog: '// 提交后这里会显示表单数据',
      activeIndex: '1'
    }
  },
  methods: {
    onSubmit() {
      // 真实项目里这里通常用 axios 把 form 发给服务器（下半场任务 6 就这么干）
      this.formLog = 'submit! ' + JSON.stringify(this.form)
    },
    onReset() {
      // 重置 = 把数据对象清回空串，v-model 绑定的输入框自动跟着清空
      this.form.username = ''
      this.form.password = ''
      this.formLog = '// 已重置'
    },
    handleSelect(index) {
      // @select 事件：点哪个菜单项，index 就是谁——横向/垂直两份菜单共用一个处理函数
      this.activeIndex = index
    }
  }
}
</script>

<style scoped>
.menu-flex {
  display: flex;
  gap: 20px;
  align-items: flex-start;
  margin-top: 16px;
}

/* 垂直菜单别拉满整行 */
.menu-flex .el-menu-vertical-demo {
  width: 180px;
  border-right: 1px solid var(--border);
}
</style>