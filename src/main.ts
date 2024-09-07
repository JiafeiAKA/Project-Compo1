import { createApp } from 'vue'
import { createPinia } from 'pinia'
import "./assets/index.css"
import CountryFlag from 'vue-country-flag-next'

import App from './App.vue'
import router from './router'
import 'nprogress/nprogress.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('country-flag', CountryFlag)

app.mount('#app')
