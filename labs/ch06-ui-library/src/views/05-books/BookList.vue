<template>
  <div>
    <div class="card">
      <h2>图书列表（数据来自 json-server）</h2>
      <p class="muted">进页面（mounted）自动发 GET；表格只是"货架"，货是 axios 搬回来的</p>
      <el-table :data="books" border>
        <el-table-column prop="id" label="编号" width="70" />
        <el-table-column prop="name" label="书名" />
        <el-table-column prop="author" label="作者" width="150" />
        <el-table-column prop="price" label="单价（元）" width="110" />
      </el-table>
    </div>

    <div class="card">
      <h2>POST 新增一本书</h2>
      <p class="muted">axios.post(url, 数据对象) ——第二个参数就是要"寄出去"的货</p>
      <el-form :inline="true" :model="newBook">
        <el-form-item label="书名">
          <el-input v-model="newBook.name" placeholder="请输入书名" clearable />
        </el-form-item>
        <el-form-item label="作者">
          <el-input v-model="newBook.author" placeholder="请输入作者" clearable />
        </el-form-item>
        <el-form-item label="单价">
          <el-input v-model.number="newBook.price" placeholder="如 59.8" clearable />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="addBook">上架</el-button>
        </el-form-item>
      </el-form>
      <div class="console">{{ postLog }}</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookList',
  data() {
    return {
      url: 'http://localhost:3001/books',
      books: [],
      newBook: { name: '', author: '', price: null },
      postLog: '// 上架后这里显示 POST 的结果'
    }
  },
  created() {                                    // 补全：进页面就要自动拉列表，用哪个生命周期钩子？
    // 组件一挂载就去搬书——真实项目里列表页的标准开场
    this.loadBooks()
  },
  methods: {
    loadBooks() {
      axios
        .get(this.url)
        .then((res) => {
          this.books = res.data                  // 补全：把响应里的数组交给货架
        })
        .catch((err) => {
          this.postLog = 'GET 失败：' + err.message + '（json-server 开了吗？）'
        })
    },
    addBook() {
      if (!this.newBook.name || !this.newBook.author) {
        this.postLog = '书名和作者都要填哦'
        return
      }
      axios
        .post(this.url, this.newBook)           // 补全：POST 的第二参数——把整个表单对象寄出去
        .then((res) => {
          // POST 成功：服务器返回新造好的那条书（带上了自增的 id）
          this.postLog = 'POST 成功！服务器存下了：' + JSON.stringify(res.data)
          this.newBook = { name: '', author: '', price: null }
          // 关键两步：服务器已经多了书 → 重新 GET 拿最新名单 → 表格自动更新
          this.loadBooks()
        })
        .catch((err) => {
          this.postLog = 'POST 失败：' + err.message
        })
    }
  }
}
</script>