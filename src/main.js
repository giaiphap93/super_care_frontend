import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import i18n from './i18n'

import Antd from 'ant-design-vue';
import { Button, message } from 'ant-design-vue';


import 'ant-design-vue/dist/reset.css';
import './styles/app.css'

const app = createApp(App);

app.use(i18n)
app.use(store);
app.use(router);
app.use(Antd);
app.use(Button);

app.mount('#app');
app.config.globalProperties.$message = message;
