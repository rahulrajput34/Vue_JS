import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

/*
==>We can creates the mutliple Vue Application if we want
//1
const app1 = createApp({
})
app1.mount('#container-1')
//2
const app2 = createApp({
})
app2.mount('#container-2')


===>Note: If you are using Vue to enhance server-rendered HTML and only need Vue to control specific parts of a large page, avoid mounting a single Vue application instance on the entire page. Instead, create multiple small application instances and mount them on the elements they are responsible for.

==> Vue uses an HTML-based template syntax that allows you to declaratively bind the rendered DOM to the underlying component instance's data. All Vue templates are syntactically valid HTML that can be parsed by spec-compliant browsers and HTML parsers.

==> Under the hood, Vue compiles the templates into highly-optimized JavaScript code....... Also!!! Vue documentation says that the concept templates is more optimized than the concept of vertual DOM we learnt iniside the react JS

*/

