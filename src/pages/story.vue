<template>
  <main>
    <div class="stories">
      <router-link to="/">WRÓĆ</router-link>
      <h2>STORIES</h2>


      <section>
        <h3>IDOM!</h3>
        <p>
          <routerLink to="/story/ELZA" >ELZA</routerLink>
          z
          <routerLink to="/story/FRIDA" >Fridom</routerLink>
        </p>

      </section>

      <storyProduct name="Elza" />


    </div>    
  </main>
</template>

<script>
export default { 
  name: "appStory",
}
</script>

<style lang="scss" scoped>
@use '@/styles/_global.scss' as *;
.stories{
  @extend %simpleBox;
  padding:2rem;
}
.products{
  border:2px dashed blue;
}
</style>