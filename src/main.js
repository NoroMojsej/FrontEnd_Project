import { createApp } from 'vue'
import { createPinia } from 'pinia'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue'
import router from './router'

const app = createApp(App)

import Navbar from './components/Navbar.vue'
app.component('Navbar', Navbar)

app.use(createPinia())
app.use(router)

app.mount('#app')
