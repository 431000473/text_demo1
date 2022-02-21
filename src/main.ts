// 解决使用unplugin-auto-import开发时VSCode出现错误提示问题
import 'vue-global-api'
import { createApp } from 'vue'
import App from './App.vue'
import {createPinia} from 'pinia'
import router from './router/index'

const pinia = createPinia()

createApp(App).use(pinia).use(router).mount('#app')
