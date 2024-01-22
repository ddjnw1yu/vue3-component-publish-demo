import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'

const routes = [
  { path: '/'},
]

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
