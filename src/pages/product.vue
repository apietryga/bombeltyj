<template>
  <div>
    PRODUCT!!!!
    {{ product?.name }}
    <storyProduct :name="product?.name" />

  </div>
</template>

<script>
export default {
  name: 'pageProduct',
  props: {
    product: { type: Object, required: true },
  },

}
</script>

<style>

</style>