<template>

  <!-- <metainfo>
    <template v-slot:title="{ content }">
        {{ content ? `${content} | BOMBEL TYJ` : `BOMBEL TYJ` }}
    </template>
  </metainfo> -->

  <preLoader />
  <appNav />
  <routerView v-slot="{ Component, route }" >
    <transition name="slide" mode="out-in" >
      <component 
        :is="Component" 
        :key="route.path"  
        class="mainComponent"
      />
    </transition>
  </routerView>
  <appFooter />
</template>
<script>
import appNav from './components/app/nav'
import appFooter from './components/app/footer'
import preLoader from './components/app/preLoader'
// import { useMeta } from 'vue-meta'

export default {
  name: 'App',
  components: {
    appFooter,
    appNav,
    preLoader
  },
  // setup () {
  //   useMeta({
  //     title: '',
  //     htmlAttrs: { lang: 'en', amp: true }
  //   })
  // }
}
</script>

<style lang="scss">
@use '@/styles/_global.scss' as *;

// animations
.slide{
  &-enter-active,
  &-leave-active{
    transition: all 0.5s ease;
  }
  &-enter-from {
    opacity: 0;
  }
  &-leave-to {
    opacity: 0;
  }
}

body{
  margin:0;
  @include linearGradient($pink1, $pink1, $bgColor);
  min-height:100vh;
  #app {
    font-family: $firstFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height:100%;
    .mainComponent{
      padding:0 .5em;
    }
  }
}

// PRINT OPTS
@media only print{
  body{
    background:none;    
    font-size:1.5vh;
    nav{
      display:none!important;
    }
    #app{
      padding:0;
      min-height:100vh;
      display:flex;
      flex-direction: column;
      main{
        flex:1;
        padding:0!important;
        .d0 {
          border-radius:0;
          min-height:100vh;
          display:flex;
          align-items:flex-start;
        }
        .d2{
          .item-body{
            flex-wrap:nowrap!important;
          }
        }
      }
    }
  }
}
</style>
