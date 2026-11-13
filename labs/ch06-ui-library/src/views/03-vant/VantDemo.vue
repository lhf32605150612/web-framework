<template>
  <div>
    <div class="phone">
      <div class="phone-bar"></div>

      <h2>Vant 移动端小样</h2>

      <van-button type="primary">主要按钮</van-button>
      <van-button type="success">成功按钮</van-button>
      <van-button type="default">默认按钮</van-button>
      <van-button type="warning">警告按钮</van-button>              <!-- 补全：警告色的 type 值（和 Element Plus 同名） -->
      <van-button type="danger">危险按钮</van-button>

      <hr />

      <van-button plain hairline type="primary">朴素细边框按钮</van-button>
      <van-button disabled type="primary">禁用按钮</van-button>
      <van-button loading type="primary">加载中</van-button>
      <van-button round block type="primary">圆角通栏按钮</van-button>

      <hr />

      <!-- @submit：校验全通过才触发；哪个字段空了就红字提示哪个 -->
      <van-form @submit="onSubmit">
        <van-cell-group inset>
            <van-field
            v-model="username"
            name="用户名"
            label="用户名"
            placeholder="请输入用户名"
            :rules="[{ required: true, message: '请填写用户名' }]"

            />
          <van-field
            v-model="password"
            type="password"
            name="密码"
            label="密码"
            placeholder="请输入密码"
            :rules="[{ required: true, message: '请填写密码' }]"
          />
        </van-cell-group>
        <div style="margin: 16px 16px 0">
          <van-button round block type="primary" native-type="submit">提交</van-button>  <!-- 补全：声明这是个提交按钮的属性名 -->
        </div>
      </van-form>

      <div class="console" style="margin-top: 12px">{{ submitLog }}</div>
    </div>
    <p class="muted">↑ PC 页面里嵌一部"手机"：Vant 是移动端组件库，375px 宽的壳看得最真实</p>
  </div>
</template>

<script>
export default {
  name: 'VantDemo',
  data() {
    return {
      username: '',
      password: '',
      submitLog: '// 校验通过后这里显示提交的数据'
    }
  },
  methods: {
    // values 是 { 用户名: xxx, 密码: xxx }——name 属性就是收集时的键名
    onSubmit(values) {
      this.submitLog = 'submit ' + JSON.stringify(values)
    }
  }
}
</script>