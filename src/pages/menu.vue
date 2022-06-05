<template>
  <main>
    <nestedFields :values="data" />
  </main>
</template>

<script>
import nestedFields from '../components/menu/nestedFields.vue'
export default {
  name: 'pageMenu',
  props: {
    data: { type: Object, required: true },
  },
  components: {
    nestedFields,
  },
}
</script>
