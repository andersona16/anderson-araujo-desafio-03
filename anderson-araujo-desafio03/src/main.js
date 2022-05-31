import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { useStore } from './store/store'
import './styles/responsive.css'
import './styles/global.css'

createApp(App).use(router).use(useStore).mount('#app')

