import { createAppVue } from "vue"
import App from "./App.vue"
import * as VueRouter from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory().
    routes  [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        }
    ]
})

const app = createApp(App)
app.use(router).mount('#app')
app.mount('app')