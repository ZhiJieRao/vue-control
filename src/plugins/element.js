import Vue from 'vue'
import { Button, Form, Input, FormItem, Message } from 'element-ui'

//配置Message为全局属性
Vue.prototype.$message = Message

Vue.use(Button)
Vue.use(Form)
Vue.use(Input)
Vue.use(FormItem)
