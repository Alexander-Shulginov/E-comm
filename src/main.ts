import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { Quasar } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'
import 'quasar/src/css/index.sass'
import './assets/styles/style.css'

import App from './App.vue'
import { router } from './router/router'
const pinia = createPinia()

const app = createApp(App)
app.use(pinia)
app.use(router)
app.use(Quasar)
app.mount('#app')
