import products from './static/products.json';
export default {

  head: {
    title: 'Bombel Tyj',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { ['http-equiv'] : "X-UA-Compatible",  content : "IE=edge" },
      { hid: 'description', name: 'description', content: 'Bubble Tea Rybnik - śląska wersja tajwańskiego napoju - po naszymu!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    // script: [
    //  { src: '/js/fb-sdk.js' }
    // ]
  },


  generate : {
    generate: { fallback: '404.html' },
    routes: products.map( product => {
      return {
        route : `/story/${product.name}`,
        payload: product
      }
    })
  },

  
  styleResources: {
    scss: ['./assets/style/*.scss']
  },

  components: true,

  loading: '~/components/app/loader.vue',

  buildModules: [
    "@nuxt/typescript-build",
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/axios',
    // sitemap always at end of this arr
    '@nuxtjs/sitemap',
  ],

  // for @error on imgs
  render: { 
    fallback: false
  }

}