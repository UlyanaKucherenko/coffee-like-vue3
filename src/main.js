import { createApp } from 'vue'
import App from './App.vue'
import router from './js/router'

// - - - - - STYLES - - - - - //
import './scss/app.scss'

createApp(App).use(router).mount('#app')
