import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
/*
// Important note:
// Vue.js also generates a virtual DOM, similar to how React does.
// In Vue, createApp is used to create the virtual DOM, and mount is used to render it on the website.
*/
const app = createApp(App)
app.use(router)
app.mount('#app')
