
<template>
  <main>
    <menuField :values="data" />
  </main>
</template>

<script>
import data from '@/static/menu.json'; // :TODO: put it to store!
export default {
  data(){ return { data } },
  head() {
    return {
      title: "Bombel Tyj",
      meta: [
        { hid: 'description', name: 'description', content: 'Bubble Tea Rybnik - śląska wersja tajwańskiego napoju - po naszymu!' },
        { hid: 'og:image', name: 'og:image', content: process.env.ORIGIN + '/img/og/index.png' },
      ]
    }
  },
}
</script>