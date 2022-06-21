<template>
  <div>
    <!-- REVIEWS: -->
    {{ reviews }}
  </div>
</template>

<script>
export default {
  name: "pageReview",
  data() {
    return {
      reviews: "",
    };
  },
  // created() {
  //   // https://www.google.com/maps/place/Bombel+Tyj/@50.0970013,18.5409088,17z/data=!3m1!4b1!4m5!3m4!1s0x47114f817d13f2af:0xdb86bd8fdbeb58cd!8m2!3d50.096949!4d18.5430966
  //   // this.$axios.$get("https://mybusiness.googleapis.com/v4/accounts/{accountId}/locations/{locationId}/reviews")
  //   this.$axios.$get("https://mybusiness.googleapis.com/v4/accounts/Bombel+Tyj/locations/@50.0970013,18.5409088,17z/reviews")
  //   .then((response) => {
  //     console.log(response)
  //     this.reviews = response.data;
  //   });
  // },
}
</script>

<style>

</style>