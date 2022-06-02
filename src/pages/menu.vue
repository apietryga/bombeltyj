<template>
  <main>
    <nestedFields :values="object" />
  </main>
</template>

<script>
import nestedFields from '../components/menu/nestedFields.vue'
import Menu from '../@/../../public/menu.json'
export default {
  name: 'pageMenu',
  data(){
   
    return {
      object: Menu
    }
  },
  components: {
    nestedFields,
  }
}
</script>
