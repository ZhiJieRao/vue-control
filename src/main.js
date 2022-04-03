import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
//导入全局样式
import '../src/assets/css/global.css'
//引入图标样式
import '../src/assets/fonts/iconfont.css'

//配置axios
import axios from 'axios'
Vue.prototype.$http = axios
axios.defaults.baseURL = "http://127.0.0.1:8888/api/private/v1/"

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')