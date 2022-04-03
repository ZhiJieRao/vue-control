import Vue from 'vue'
import VueRouter from 'vue-router'
//导入Login组件
import Login from '@/views/Login.vue'
//导入Home组件
import Home from '@/views/Home.vue'
Vue.use(VueRouter)

const routes = [
  { path: '', redirect: '/login' },//重定向到login
  { path: '/login', component: Login },
  { path: '/home', component: Home }
]

const router = new VueRouter({
  routes
})

export default router