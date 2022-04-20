<template>
  <div class="bombelMenu">
    <NestedFields :values="object" />
  </div>
</template>
<script>
import NestedFields from './NestedFields.vue'
export default {
  name: 'BombelMenu',
  props: {
    object: Object
  },
  components: {
    NestedFields,
  },
}
</script>
<style lang="scss">

</style>
