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
// import { useMeta } from 'vue-meta'
import { defineComponent, computed, reactive } from 'vue'
import { useHead } from '@vueuse/head'

export default defineComponent({
  name: 'pageProduct',
  props: {
    product: { type: Object, required: true },
  },

  setup() {

    const siteData = reactive({
      title: `ELZA`,
      description: `A beautiful princess`,
      ['og-image']: location.origin + '/' + props.product.img,
      ['og-title']: "ELZA ZIOM",
    })

    useHead({
      // Can be static or computed
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
        {
          name: `og-image`,
          content: computed(() => siteData['og-image']),
        },
        {
          name: `og-title`,
          content: computed(() => siteData['og-title']),
        },
      ],
    })
  },
})

// export default {
//   name: 'pageProduct',
//   props: {
//     product: { type: Object, required: true },
//   },
//   // setup (props) {
//   //   console.log(props.product)
//   //   useMeta({ 
//   //     title: props.product.name,
//   //     ['og-image']: location.origin + '/' + props.product.img,
//   //     ['og-title']: props.product.name,
//   //     // ['og-description']: props.product.description,
//   //   })
//   // },
//   head: {
//     title: 'Product',
//     meta: [
//       { name: 'application-name', content: 'Name of my application' },
//       { name: 'description', content: 'A description of the page', id: 'desc' }
//     ]
//   }
// }
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