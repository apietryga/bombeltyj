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
import { useMeta } from 'vue-meta'
export default {
  name: 'pageProduct',
  props: {
    product: { type: Object, required: true },
  },
  setup (props) {
    console.log(props.product)
    useMeta({ 
      title: props.product.name,
      ['og-image']: location.origin + '/' + props.product.img,
      ['og-title']: props.product.name,
      // ['og-description']: props.product.description,
    })
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