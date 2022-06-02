import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'

import appMenu from './pages/menu.vue'
import review from './pages/review.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: appMenu },
    { path: '/opinia', component: review },
  ]
})

const app = createApp(App)
app.use(router)
app.mount('#app')