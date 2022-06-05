<template>
  <section>
    <storyProduct :name="product.name" />
    <div class="comments">
      :DEV:
      <fb-comment 
        url="https://www.businessinsider.com/personal-finance/lost-money-following-bad-investing-advice-youtube-2022-6" 
      />
    </div>
  </section>
</template>

<script>
export default {
  name: 'pageProduct',
  props: {
    product: { type: Object, required: true },
  },

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