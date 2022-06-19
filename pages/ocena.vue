<template>
  <main>
    <div class="review">
      <nuxtLink to="/">WRÓĆ</nuxtLink>
      <h3>Twoja opinia ma znaczenie! 🧐</h3>
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
export default {
  name: "pageReview",
}
</script>

<style lang="scss" scoped>
// @use '../assets/style/global' as *;
.review{
    @extend %simpleBox;
    padding:2rem;
}
</style>