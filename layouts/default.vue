<template>
  <div class="wrapper">
    <appNav />
      <appBreadCrumb />
      <transition name="home" >
        <Nuxt class="mainComponent" />
      </transition>
    <appFooter />
  </div>


</template>

<script>
export default {
  transition: 'home'
}
</script>

<style lang="scss">
// @use '../assets/style/global' as *; // :TODO: make it globally !! 
// animations
.home-enter-active, .home-leave-active { transition: opacity .5s; }
.home-enter, .home-leave-active { opacity: 0; }

body{
  margin:0;
  @include linearGradient($pink1, $pink1, $bgColor);
  min-height:100vh;
  font-family: $firstFont !important;
  #__nuxt {
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
    #__nuxt{
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
        .imgNameField {
          padding:.5em;
        }
        .d3{ 
          .imgNameField {
            padding:0;
          }          
        }

        .maa{
          height:4em;
          width:3em;
        }
        .dua{
          height:4em;
          width:3em;
        }
        .REKOMENDOWANE{
          flex-direction: row;
          a{
            flex:1;
            figure > .content > img{
              height:6em;          
              width:9em;
            }
          }
        }
        .SEZONOWE a{
          flex:1;
          figure > .content > img{
            height:6em;          
            width:6em;
          }
        }

      }
    }
  }
}
</style>
