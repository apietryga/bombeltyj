// import Vue from 'vue/dist/vue.esm-bundler';
// import Vue from 'vue';
import { createApp } from 'vue/dist/vue.esm-bundler';
import { createRouter, createWebHistory } from 'vue-router'
import { MotionPlugin } from '@vueuse/motion'


// import Vue from 'vue'
// console.log("vue", Vue)

import VueFacebook from 'vue-facebook';
// import VueMeta from 'vue-meta'
import { createMetaManager } from 'vue-meta'


import App from './App.vue'

import menu from './pages/menu.vue'
import review from './pages/review.vue'
import story from './pages/story.vue'
import productPage from './pages/product.vue'

import data from '../public/menu.json'
import products from '../public/products.json'

import storyProduct from './components/story/product.vue'
import appIcon from './components/app/icon.vue'

// import { useMeta } from 'vue-meta'


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
  .use(VueFacebook)
  .use(createMetaManager())
  .use(MotionPlugin)
  .use(router)

  .component('storyProduct', storyProduct)
  .component('appIcon', appIcon)
  // .component('appIcon', appIcon)
  // .use(useMeta)

// app.config.globalFunctions.useMeta = useMeta
// app.config.globalProperties.$useMeta = useMeta
app.config.globalProperties.$products = products
app.mount('#app')
