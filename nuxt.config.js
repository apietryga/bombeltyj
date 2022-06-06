export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',
  // target: 'public',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Bombel Tyj',
    htmlAttrs: {
      lang: 'pl'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { ['http-equiv'] : "X-UA-Compatible",  content : "IE=edge" },
      { hid: 'description', name: 'description', content: 'Śląska bubble tea - oryginalna, smaczna i tradycyjna. Obejżyj se jak łonaczy!' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '@/assets/style/_global.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // 'nuxt-use-motion',
  ],
  // {
  //   motion: {
  //     directives: {
  //       'pop-bottom': {
  //         initial: {
  //           scale: 0,
  //           opacity: 0,
  //           y: 100
  //         },
  //         visible: {
  //           scale: 1,
  //           opacity: 1,
  //           y: 0
  //         },
  //       }
  //     }
  //   }
  // },



  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    
    ['nuxt-sass-resources-loader', '@/assets/style/_global.scss'],
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
