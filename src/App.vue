<template>
  <preLoader />
  <appHeader />
  <routerView />
  <appFooter />
</template>
<script>
import appHeader from './components/app/header'
import appFooter from './components/app/footer'
import preLoader from './components/app/preLoader'
export default {
  name: 'App',
  components: {
    appFooter,
    appHeader,
    preLoader
  }
}
</script>

<style lang="scss">
@use '@/styles/_global.scss' as *;
body{
  margin:0;
  @include linearGradient($pink1, $pink1, $bgColor);
  min-height:100vh;
  #app {
    font-family: $firstFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding:0 .5em;
  }
}

// PRINT OPTS
@media only print{
  body{
    background:none;    
    font-size:1.5vh;
    header{
      display:none!important;
    }
    #app{
      padding:0;
      min-height:100vh;
      display:flex;
      flex-direction: column;
      main{
        flex:1;
        .d0 {
          border-radius:0;
          min-height:100vh;
          display:flex;
          align-items:center;
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
