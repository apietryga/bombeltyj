<template>
  <div class="storyList">
    <storyProduct 
      v-for="product of products" 
      :name="product.name" 
      :key="product.name" 
      :tails="false" 
    />
  </div>
</template>

<!-- <script setup> -->
<script>
  import products from '@/static/products.json'; // :TODO: put it to store!
  export default {
    data () { return { products } },
  }
</script>

<style lang="scss" scoped>
.storyList{
  @extend %simpleBox;
  padding:.5rem;
  margin-top:0;
  display:flex;
  overflow-x:auto;
}
</style>