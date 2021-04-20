import { createApp } from 'vue'
import API from '@/api'
import App from './App.vue'
import router from './router'
import store from './store'
import './index.css'

const vm = createApp(App)
vm.config.globalProperties.$API = API

vm.use(store).use(router).mount('#app')
