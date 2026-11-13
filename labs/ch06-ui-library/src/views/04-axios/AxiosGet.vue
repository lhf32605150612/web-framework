AxiosGet.vue —— 实验 04：Axios 的 GET 请求（教材 7.2.3 第 1 种请求）
  目录：views/04-axios/
  要点：axios.get(url).then(res => ...) 返回 Promise；
        res.data 才是服务器给的"货"；status 是状态码。
  数据从哪来：另开一个 CMD 窗口跑 json-server（本地 3001 端口的模拟服务器）：
        cd /d D:\web-framework-2024xxxx\labs\ch06-ui-library
        npx json-server db.json --port 3001
  ============================================================ -->
<template>
  <div>
    <div class="card">
      <h2>GET 请求：拿一本书回来</h2>
      <p class="muted">
        点按钮 → axios 向 <code>http://localhost:3001/books</code> 发 GET 请求 →
        then 里把 <code>res.data</code> 存进 data → 页面自动更新
      </p>
      <button @click="loadBooks">{{ loaded ? '重新请求' : '发 GET 请求' }}</button>
      <div v-if="loaded" class="console">GET {{ url }}
响应状态：{{ status }}（200 = 成功）
拿回 {{ books.length }} 本书：
<span v-for="(b, i) in books" :key="b.id">  [{{ b.id }}] 《{{ b.name }}》 {{ b.author }} ￥{{ b.price }}
</span></div>
      <div v-else class="console">// 还没发请求——json-server 开了吗？（3001 端口）</div>
    </div>

    <div class="card">
      <h2>响应对象 res 长什么样？</h2>
      <p class="muted">
        then(res =&gt; …) 里的 res 不只是数据，它是个"快递单"：
        <b>res.data</b> 是货、<b>res.status</b> 是签收码（200）、res.config 是发货底单。
        我们 99% 的时候只取 res.data。
      </p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'   // 用到才 import——axios 不需要在 main.js 里 app.use

export default {
  name: 'AxiosGet',
  data() {
    return {
      url: 'http://localhost:3001/books',
      books: [],
      status: null,
      loaded: false
    }
  },
  methods: {
    loadBooks() {
      // axios.get 返回 Promise：请求成功走 then，失败走 catch（课堂演示把 catch 也备上）
      axios
        .get(this.url)                    // ① 发 GET 请求
        .then((res) => {                  // ② 拿到"快递单" res
          this.status = res.status        // 补全：状态码在 res 的哪个属性（数字 200 那个）
          this.books = res.data        // 补全：真正的数据（数组）在 res 的哪个属性
          this.loaded = true
        })
        .catch((err) => {
          alert('请求失败：' + err.message + '\n请确认 json-server 已在 3001 端口运行')
        })
    }
  }
}
</script>