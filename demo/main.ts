import { createApp } from 'vue'
import App from './App.vue'
import { install } from '../src/index'

createApp(App).use(install).mount('#app')
