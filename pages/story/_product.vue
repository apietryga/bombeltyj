<template>
  <div class="product">
    <section>
      <header>
        <storyProduct :name="product" />
        <p>{{ $t(`story.desc.${ product }`) }}</p>
      </header>
      <storyList />
      <div class="comments">
        <fbComments />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data(){
    return { 
      product : this.$route.params.product ?? 'elza',
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
}
</script>

<style lang="scss" scoped>
.product{
  section{
    header{
      display:flex;
      flex-wrap: wrap;
      p{
        padding:1rem;
        flex:1;
        @extend %simpleBox;
      }
      @media(max-width:768px){
        a{flex:1;}
      }
    }
    .comments{
      flex:1;
    }
  }
}
</style>