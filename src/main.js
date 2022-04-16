import Vue from 'vue'
import App from './App.vue'
import router from './router'
//导入富文本编辑器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css' // import styles
import 'quill/dist/quill.snow.css' // for snow theme
import 'quill/dist/quill.bubble.css' // for bubble theme
//导入echarts
import * as echarts from 'echarts';

//
import FZ from './judgeRes'
//
import './plugins/element.js'
//导入全局样式
import '../src/assets/css/global.css'
//引入图标样式
import '../src/assets/fonts/iconfont.css'
//
import ZkTable from 'vue-table-with-tree-grid'
//配置axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"
//通过axios请求拦截器添加token，保证拥有获取数据的权限
axios.interceptors.request.use(config => {
  config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

//全局注册 vue-table-with-tree-grid
Vue.component(ZkTable.name, ZkTable)
//将echarts注册为全局对象
Vue.prototype.$echarts = echarts
//全局注册judgeRes方法
Vue.prototype.judgeRes = FZ.judgeRes
//定义一个全局过滤器
Vue.filter('dataFormat', function (origin) {
  const dt = new Date(origin)
  const y = dt.getFullYear()
  const m = (dt.getMonth() + 1 + '').padStart(2, '0')
  const d = (dt.getDate() + '').padStart(2, '0')
  const h = (dt.getHours() + '').padStart(2, '0')
  const mm = (dt.getMinutes() + '').padStart(2, '0')
  const ss = (dt.getSeconds() + '').padStart(2, '0')
  return `${y}-${m}-${d} ${h}:${mm}:${ss}`
})



Vue.config.productionTip = false
Vue.use(VueQuillEditor)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
