<template>
  <section>
    <storyProduct :name="product" />
    <div class="comments">
      :TODO: FB COMMENTS HERE
      <!-- <fb-comment 
        url="https://www.businessinsider.com/personal-finance/lost-money-following-bad-investing-advice-youtube-2022-6" 
      /> -->
    </div>
  </section>
</template>

<script>
export default {
  // beforeCreate () {
  //   console.log('test6', this.$route)
  //   console.log('thisRoute', this.$route.params.product)
  // },
  data(){
    return { product : this.$route.params.product }
  },
  head(){
    return { 
      title: this.$route.params.product,
      meta:[
        { hid: 'og-image', property: 'og:image',
          content: 'https://bombeldevelopment.netlify.app/img/menu/elza.webp'
        },
      ]
    }
    // title: "ELZA",
  }
  // head() {
  //   return { 
  //     title: this.$route.params.product,
  //   } 
  // },
 
}
</script>

<style lang="scss" scoped>
section{
  display:flex;
  border:2px dashed red;
  .comments{
    border:2px dashed blue;
    flex:1;
  }
}
</style>