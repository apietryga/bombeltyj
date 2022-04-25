<template>
  <header>
    <a href="./">
      <img src="@/assets/logo192.webp" alt="Bombel Tyj Logo">
    </a>
    <OpenDate />
  </header>
  <main>
    <NestedFields :values="object" />
  </main>
  <footer>
    <p> &copy; Bombel Tyj <span>2022</span> </p>
  </footer>
</template>
<script>
import NestedFields from './components/NestedFields.vue'
import OpenDate from './components/OpenDate.vue'
import Menu from './assets/menu.json'
export default {
  name: 'App',
  data(){
    return {
      object: Menu
    }
  },
  components: {
    NestedFields,
    OpenDate,
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
        box-shadow: .4em .4em 1em rgba(0, 0, 0, 0.8);
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

    > footer{
      color:#fff;
      @extend %simpleBox;      

      p{
        margin:.5em;
        span{
          font-family:  $secondFont;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
