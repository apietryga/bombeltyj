import products from './static/products.json';
const main_base_URL =  'https://apietryga.github.io/bombeltyj';
export default {
  ssr: false,
  sitemap: {
      hostname: main_base_URL
  },
  env: {
      main_base_URL
  },

  head () {
    const i18nHead = this.$nuxtI18nHead
            ? this.$nuxtI18nHead({ addSeoAttributes: true })
            : { htmlAttrs: [], meta: [], link: [] }
    return {
      title: 'Bombel Tyj',
      htmlAttrs: {
        lang: this.$i18n?.locale,
        ...i18nHead.htmlAttrs
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { ['http-equiv'] : "X-UA-Compatible",  content : "IE=edge" },
        { name: 'format-detection', content: 'telephone=no' },
        { hid: 'description', name: 'description', content: 'Bubble Tea Rybnik - śląska wersja tajwańskiego napoju - po naszymu!' },
        ...i18nHead.meta
      ],
      link: [
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ...i18nHead.link
     ]
    }
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
    '@nuxtjs/google-analytics'
  ],

  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/i18n',
    '@nuxtjs/axios',
    //'@nuxtjs/sitemap' // sitemap always at the end of this arr
  ],
  
  googleAnalytics: {
    id: process.env.GOOGLE_ANALYTICS_ID,
  },
  publicRuntimeConfig: {
    googleAnalytics: {
      id: process.env.GOOGLE_ANALYTICS_ID
    }
  },

  i18n: {
    locales: [
      {
        code: 'sl',
        name: 'Ślonsko godka',
        file: 'sl.json',
      },
      {
        code: 'pl',
        name: 'Polski',
        file: 'pl.json',
      },
      {
        code: 'ua',
        name: 'українська',
        file: 'ua.json',
      },
      {
        code: 'en',
        name: 'English',
        file: 'en.json',
      }
    ],
    defaultLocale: 'pl',
    langDir: '@/assets/lang/',
    lazy: true,
    strategy: 'no_prefix',
    baseUrl: 'https://bombeltyj.pl',
    silentTranslationWarn: true
  },

  // for @error on imgs
  render: { 
    fallback: false
  }

}