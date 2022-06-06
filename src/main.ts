import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/index'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

//引入pinia  构造函数
import { createPinia } from 'pinia'
//实例化pinia
const pinia = createPinia()



// createApp(App).mount('#app')
const app = createApp(App);
app.use(router).use(ElementPlus).use(pinia).mount("#app")
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}