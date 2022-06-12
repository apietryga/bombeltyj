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
// import { useMeta } from 'vue-meta'
export default { 
  name: "appStory",
  // setup () {
  //   useMeta({ title: 'STORY' })
  // },
  head: {
    title: 'Story page',
    meta: [
      {
        hid: 'description',
        name: 'description',
        content: 'Home page description'
      },
      { hid: 'og-image', property: 'og:image',
        content: 'https://aws.dqlwz1fz4ump3.amplifyapp.com/img/menu/elza.png'
      },
    ],
  }
}
</script>

<style lang="scss" scoped>
@use '@/assets/style/global' as *;
.stories{
  @extend %simpleBox;
  padding:2rem;
}
.products{
  border:2px dashed blue;
}
</style>