import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue";

createApp(App)
.use(Antd)
.use(createPinia())
.use(router)
.mount('#app')
