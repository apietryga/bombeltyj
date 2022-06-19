<template>
  <div class="product">
    <nuxtLink to="/story">wróć</nuxtLink>
    <section>
      <header>
        <storyProduct :name="product" @desc="getDesc" />
        <p>
          {{ desc }}
        </p>
      </header>
      <div class="comments">
        :TODO: FB COMMENTS HERE
        <!-- <fb-comment 
          url="https://www.businessinsider.com/personal-finance/lost-money-following-bad-investing-advice-youtube-2022-6" 
        /> -->
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      product : this.$route.params.product,
      desc: 'OPIS',
    }
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
  },
  methods:{
    getDesc(desc){
      this.desc = desc
    }
  },
  // head() {
  //   return { 
  //     title: this.$route.params.product,
  //   } 
  // },
 
}
</script>

<style lang="scss" scoped>
.product{
  section{
    header{
      display:flex;
      flex-wrap: wrap;
      p{
        border:2px dashed red;
        flex:1;
      }
    }
    // display:flex;
    border:2px dashed red;
    .comments{
      border:2px dashed blue;
      flex:1;
    }
  }
}
</style>