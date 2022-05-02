<template>
  <header>
    <a href="./">
      <img src="@/assets/logo192.webp" alt="Bombel Tyj Logo">
    </a>
    <!-- <OpenDate /> -->
    <h2>JUŻ OTWARTE!</h2>
  </header>
  <main>
    <NestedFields :values="object" />
  </main>
  <BubbleFooter />
</template>
<script>
import BubbleFooter from './components/BubbleFooter.vue'
import NestedFields from './components/NestedFields.vue'
// import OpenDate from './components/OpenDate.vue'
// import Menu from './assets/menu.json'
import Menu from './@/../../public/menu.json'
export default {
  name: 'App',
  data(){
    return {
      object: Menu
    }
  },
  components: {
    NestedFields,
    // OpenDate,
    BubbleFooter,
  }
}
</script>
<style lang="scss">
@use '@/styles/_global.scss' as *;
*{box-sizing:border-box;}
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
    > header{
      display:flex;
      justify-content: flex-start;
      align-items: center;
      padding:1em;
      @extend %simpleBox;      
      // margin:0;
      img{
        width:192px;
        height:192px;
        border-radius: 50%;
        cursor:pointer;
      }
      @media (max-width:520px){
        flex-direction: column;
        align-items: center;
        h2{
          text-align:center;
        }
      }
    }

  }
}



// PRINT OPTS
@media only print{
// @media (max-height:3178px){
// @media (min-height:3178px){
  body{
    background:none;    
    font-size:1.5vh;
    header{
      display:none!important;
    }
    #app{
      // background:$pink1;
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


      footer{
        border:none;
        background:transparent;
        position:absolute;
        right:0;
        bottom:1.5em;
        width:50%;
      }
    }
  }
}



</style>
