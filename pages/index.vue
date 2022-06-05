
<template>
  <main>
    <!-- <menuNestedFields :values="data" /> -->
    <menuField :values="data" />
  </main>
</template>

<script>
import menu from '@/static/menu.json';
// import menu from '@/public/menu.json';
// import nestedFields from '../components/menu/nestedFields.vue'
export default {
  // name: 'pageMenu',
  // props: {
  //   data: { type: Object, required: true },
  // },
  data(){
    return {
      data: menu,
    }
  },
  // mounted(){
  //   console.log(this.data)
  // },
  // components: {
  //   nestedFields,
  // },
}
</script>