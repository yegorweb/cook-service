import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Layout, Button, Row, Col, Input, Select, Progress, Table, Divider, Drawer, Form, Modal, Card, Space, Upload, DatePicker, Badge, Affix,Spin, InputNumber, Radio } from 'ant-design-vue';
createApp(App)
.use(Card)
.use(Layout)
.use(Button)
.use(Col)
.use(Row)
.use(Input)
.use(Select)
.use(Progress)
.use(Table)
.use(Divider)
.use(Drawer)
.use(Form)
.use(Modal)
.use(Space)
.use(Upload)
.use(DatePicker)
.use(Badge)
.use(Affix)
.use(Spin)
.use(InputNumber)
.use(Radio)
.use(createPinia())
.use(router)
.mount('#app')
