import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-plus/theme-chalk/index.css'
import App from './App.vue'
// import './router'
// 引入路由
import router from './router/index'
import store from './store/index'
// import * as Icons from '@element-plus/icons-vue' // 统一导入

const app = createApp(App)
// 全局注册
// for (const iName in Icons) {
//   app.component(iName, Icons[iName])
//   console.log(iName)
// }
app.use(router).use(store).use(ElementPlus).mount('#app')

// createApp(App).use(ElementPlus).use(router).use(store).mount('#app')
