<template>
  <main>
    <div class="review">
      <h3>Twoja opinia ma znaczenie! 🧐</h3>
      <p>
        Będziemy szalenie 😵 wdzięczni, jeśli podzielisz się z nami swoią opinią:
      </p>
      <div class="links">
        <reviewsButton href="https://g.page/r/Cc1Y69uPvYbbEB0/review" />
        <reviewsButton href="https://www.facebook.com/bombeltyj/reviews/" />
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
h3{
  font-size:clamp(2rem, 2vh, 5rem);
  line-height:clamp(2rem, 2vh, 5rem);
  margin:.5rem 0; 
}
.review{
    @extend %simpleBox;
    padding:2rem;
}
.links{
  display:flex;
  flex-wrap:wrap;
  justify-content: center;
}
</style>