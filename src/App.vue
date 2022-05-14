<template>
  <PreLoader />

  <header>
    <a href="./">
      <img src="bombeltyj_logo.svg" alt="Bombel Tyj Logo" fetchpriority="high" />
    </a>
    <div class="content">
      <h1>BOMBEL TYJ</h1>
      <h2>Bubble Tea Rybnik</h2>
      <p>"Śląskie smaki w Bombel Tyju <br /> bo robione na byfyju!"</p>
      <p class="adress"> Rybnik, Sobieskiego 13 </p>
      <a href="https://www.google.com/maps/dir//bombel+tyj/" target="_blank">Kaj to mocie?</a>
    </div>
  </header>
  <main>
    <NestedFields :values="object" />
  </main>
  <BubbleFooter />
</template>
<script>
import BubbleFooter from './components/BubbleFooter.vue'
import NestedFields from './components/NestedFields.vue'
import PreLoader from './components/PreLoader.vue'
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
    BubbleFooter,
    PreLoader
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
      img{
        width:192px;
        height:192px;
        border-radius: 50%;
        cursor:pointer;
      }
      .content{
        padding:0 1em;
        h1,h2,p{margin:0;}
        .adress{
          margin:.5em 0;
          font-family: $secondFont;
          font-weight: bold;
          font-size: .8em;
        }
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
