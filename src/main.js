import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import Antd from "ant-design-vue";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

createApp(App)
.use(Antd)
.use(Toast)
.use(createPinia())
.use(router)
.mount('#app')
