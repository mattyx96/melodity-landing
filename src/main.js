import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// tailwind css
import "./assets/main.css"

// boxicons
import "boxicons/css/boxicons.min.css"
import "boxicons/css/animations.css"
import "boxicons/css/transformations.css"

createApp(App).use(router).mount('#app')
