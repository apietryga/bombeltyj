<template>
  <div class="error">
    <h1>404</h1>
    <p>Page not found</p>
    <p>
      <router-link to="/">Go back home</router-link>
    </p>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.error {
  text-align: center;
  padding: 20px;
  color: #666;
  font-family: $secondFont;
}

</style>