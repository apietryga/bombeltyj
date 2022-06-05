import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'
import App from './App.vue'

import menu from './pages/menu.vue'
import review from './pages/review.vue'
import story from './pages/story.vue'
import productPage from './pages/product.vue'

import data from '../public/menu.json'
import products from '../public/products.json'

import storyProduct from './components/story/product.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: menu, props: { data } },
    { path: '/opinia', component: review },
    { path: '/story/', component: story },
    ...products.map(product => { 
      return {
        path: `/story/${product.name}`,
        component: productPage,
        props: {
          product: product
        }
      }
    })
  ]
})

const app = createApp(App)


app.component('storyProduct', storyProduct);

app.config.globalProperties.$products = products;

app.use(MotionPlugin)
app.use(router)
app.mount('#app')