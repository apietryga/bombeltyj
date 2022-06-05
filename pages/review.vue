<template>
  <main>
    <div class="review">

      <router-link to="/">WRÓĆ</router-link>
      <h3
        v-motion
        :initial="{ opacity: 0, x: '-100%'}"
        :enter="{ opacity: 1, x: 0 }"
      >Twoja opinia ma znaczenie! 🧐</h3>
      <p>
        Będziemy szalenie 😵 wdzięczni, jeśli podzielisz się z nami swoią opinią:
      </p>
      <div class="links">
        <a
          href="https://g.page/r/Cc1Y69uPvYbbEB0/review"
          target="_blank"
        >w opiniach Google</a>
        lub
        <a
          href="https://www.facebook.com/bombeltyj/reviews/"
          target="_blank"
        >na Facebooku</a>
      </div>
    </div>
  </main>
</template>

<script>
// import { useMeta } from 'vue-meta'
export default {
  name: "pageReview",
  // setup () {
  //   useMeta({ title: 'OPINIA' })
  // },
}
</script>

<style lang="scss" scoped>
@use '../assets/style/global' as *;
.review{
    @extend %simpleBox;
    padding:2rem;
}
</style>