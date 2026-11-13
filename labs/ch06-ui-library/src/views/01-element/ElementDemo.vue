<template>
  <div>
    <div class="card">
      <h2>1. Button 按钮：type 五兄弟 + 三个开关</h2>
      <p class="muted">type 换颜色，plain 朴素（白底彩字），round 圆角，link 链接样式，disabled 禁用</p>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>            <!-- 补全：蓝色主按钮的 type 值 -->
        <el-button type="success">成功按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button plain>朴素按钮</el-button>
        <el-button type="primary" plain>主要朴素</el-button>
        <el-button type="success" round>圆角按钮</el-button>
      </el-row>
      <el-row>
        <el-button type="primary" link>链接按钮</el-button>
        <el-button type="primary" disabled>禁用按钮</el-button>      <!-- 补全：禁用用哪个属性（布尔属性名） -->
      </el-row>
    </div>

    <div class="card">
      <h2>2. Table 表格：:data 给数组，prop 对键名</h2>
      <p class="muted">tableData 里 3 个对象，el-table-column 的 prop 决定每一列显示哪个键</p>
      <el-table :data="tableData" border>                            <!-- 补全：绑定的数据数组名 -->
        <el-table-column prop="date" label="日期" width="140" /> <!-- 补全：日期列对应数据的哪个键 -->
        <el-table-column prop="name" label="姓名" width="120" />
        <el-table-column prop="address" label="地址" />
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ElementDemo',
  data() {
    return {
      // 表格的数据源：真实项目里它往往来自 axios 请求（任务 6 见）
      tableData: [
        { date: '2026-11-01', name: '王小虎', address: '上海市普陀区金沙江路 1518 弄' },
        { date: '2026-11-02', name: '李小花', address: '北京市海淀区中关村大街 100 号' },
        { date: '2026-11-03', name: '赵小明', address: '成都市成华区二仙桥东三路 1 号' }
      ]
    }
  }
}
</script>