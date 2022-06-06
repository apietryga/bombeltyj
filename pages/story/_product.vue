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
  // name: 'pageProduct',
  data(){
    return { product: '' }
  },
  async asyncData({ params }) {
    const product = params.product
    return { product }
  },
  head() {
    if(this.product){
      return { 
        title: this.product,
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
      }     
    }else{ 
      return { 
        title: "Produkt",
        meta: [
          {
            hid: 'description',
            name: 'description',
            content: 'Home page description'
          }
        ],
      }     
    }
  }
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