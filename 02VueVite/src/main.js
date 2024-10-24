import { createApp } from 'vue'
import App from './App.vue'

// We get the App componenet
// pass this id inside the div of index.html
// Just like react also here its change the code of index.html of given id to this vue code

// Important note:
// Vue JS also generates the vertual DOM as well like we used inside the React JS
// Like React createApp is for creating the vertual DOM and the mount is used for the render it on the website
// When users interact with the UI (e.g., clicking buttons, filling forms), they are interacting with the real DOM.
// These interactions trigger state changes within the application, leading to updates in the virtual DOM.
createApp(App).mount('#app')
