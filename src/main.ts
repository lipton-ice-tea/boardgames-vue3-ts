import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { store, storeKey } from './store'

import ElementUI from 'element-plus';
import locale from 'element-plus/lib/locale/lang/ru';

import 'element-plus/lib/theme-chalk/index.css';
import './assets/styles/index.scss';

createApp(App)
    .use(store, storeKey)
    .use(router)
    .use(ElementUI, { locale })
    .mount('#app');
