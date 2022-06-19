
<template>
  <main>
    test 1
    <menuField :values="data" />
  </main>
</template>

<script>
import data from '@/static/menu.json'; // :TODO: put it to store!
export default {
  data(){ return { data } },
}
</script>