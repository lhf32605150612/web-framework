<template>
  <div class="note-card">
    <h3>{{ title }}</h3>
    <p>{{ message }}</p>
<p>{{ message.toUpperCase() }}</p>
<p>{{ 1 + 2 * 3 }}</p>
<p v-text="rawText"></p>   <!-- 按纯文本渲染，HTML 标签不解析 -->
<p v-html="htmlText"></p>  
```html
<img :src="imgSrc" :title="tipTitle" width="96" />
<p :class="{ active: count > 0 }">count 大于 0 时这行变高亮</p>
    <p>这是一个单文件组件</p>
    <p>实时展示 → 姓名：{{ form.name }}｜性别：{{ form.gender }}｜爱好：{{ form.hobbies.join('、') }}</p>

<input v-model="form.name" placeholder="输入姓名" />
<label><input type="radio" value="男" v-model="form.gender" /> 男</label>
<label><input type="radio" value="女" v-model="form.gender" /> 女</label>
<label><input type="checkbox" value="篮球" v-model="form.hobbies" /> 篮球</label>
<label><input type="checkbox" value="编程" v-model="form.hobbies" /> 编程</label>
<button @click="show = !show">切换显隐（观察 DevTools 元素面板）</button>
<p v-if="show">v-if:条件为真我才被"渲染"出来</p>
<p v-else>v-else:上面条件为假时才轮到我</p>
<p v-show="show">v-show:我一直存在，只是被 display:none 藏起来</p>
<button @click="subjects[1] = '英语（索引赋值）'">数组索引赋值</button>
<button @click="form.school = '成都理工大学工程技术学院'">对象新增属性</button>
<p v-if="form.school">{{ form.school }}</p>
<ul>
  <li v-for="(subject, index) in subjects" :key="index">
    {{ index }} - {{ subject }}
  </li>
</ul>
  </div>
</template>

<script>
export default {
  name: 'NoteCard',        // 组件 name 与文件名一致（规范铁律 2）
  data() {  

          return {
    title: '我的第一条笔记',
    message: 'hello vue',
    count: 0,
    rawText: '<b>我是 v-text 的纯文本</b>',    // 页面原样显示这串字符
    htmlText: '<b>我是 v-html 解析出的加粗</b>',
    form: { name: '', gender: '', hobbies: [] },
    show: true,
    subjects: ['语文', '数学', '英语'],


   // 页面显示被 <b> 加粗的文字
 }},
  methods: {
    say(word, event) {
      alert(word + '｜事件类型：' + event.type)
    }
  },
    mounted() {                    // 挂载完成后自动执行一次（与 data、methods 平级）
    setTimeout(() => {
      this.count = 100           // 只改数据，不碰 DOM
    }, 3000)
  }
            // data 必须是函数，返回对象（原因见知识点 2）
}
</script>

<style scoped>
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }
.note-card { border: 1px solid #42b883; padding: 10px 16px; border-radius: 6px; }
.active { color: #42b883; font-weight: bold; }
</style>