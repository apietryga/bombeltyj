<template>
  <div class="preloader" ref="preloader">
    <div class="loader">
      <div class="inLoader"></div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
      loading: false,
    }),
    methods: {
      start() {
        this.loading = true
      },
      finish() {
        this.loading = false
      },
    },
    
  mounted(){
    this.$nextTick(() => {
      setTimeout(() => { 
      this.$refs.preloader.classList.add("hidding")
        setTimeout(() => { 
          this.$refs.preloader.style.display = 'none'; 
          this.$nuxt.$loading.finish()
        }, 500)
      }, 500);
    })
  }
}
</script>

<style lang="scss">
  $loaderSize: 8em;
  $borderSize: 15px;
  $animationSpeed: 3s;
  .preloader{
    top:0;
    left:0;
    opacity:1;
    z-index:3;
    width:100%;
    height:100%;
    display:flex;
    transition:1s;
    position:fixed;
    background-color:$pink4;
    &.hidding{
      opacity:0;
      transition:1s;
    }
    .loader{
      margin:auto;
      border-radius:50%;
      position:relative;
      border-style:solid;
      padding:$borderSize;
      border-width:$borderSize;
      width:calc($loaderSize + ($borderSize * 2));
      height:calc($loaderSize + ($borderSize * 2));
      .inLoader{
        position:absolute;
        border-radius:50%;
        border-style:solid;
        border-width:$borderSize;
        width:calc(100% - ($borderSize * 2));
        height:calc(100% - ($borderSize * 2));
        @keyframes colorChanger2{
          0%{
            border-color:$pink3;
            background-color:$bgColor;
          }
          25%{
            border-color:$bgColor;
            background-color:$pink1;
          }
          50%{
            border-color:$pink1;
            background-color:$pink2;
          }
          75%{
            border-color:$pink2;
            background-color:$pink3;
          }
          100%{
            border-color:$pink3;
            background-color:$bgColor;
          }
        }
        animation:colorChanger2 $animationSpeed infinite linear;  
      }
      @keyframes colorChanger1{
        0%{
          border-color:$pink1;
          background-color:$pink2;
        }
        25%{
          border-color:$pink2;
          background-color:$pink3;
        }
        50%{
          border-color:$pink3;
          background-color:$bgColor;
        }
        75%{
          border-color:$bgColor;
          background-color:$pink1;
        }
        100%{
          border-color:$pink1;
          background-color:$pink2;
        }
      }
      animation:colorChanger1 $animationSpeed infinite linear;
    }
  }
</style>