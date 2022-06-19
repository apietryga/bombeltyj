<template>
  <main>
    <div class="stories">
      <router-link to="/">WRÓĆ</router-link>
      <h2>NAJLEPSZE PRODUKTY</h2>

      <section>
        <header>
          <h3>Ktoś to musi kontrolować:</h3>
        </header>
        <div class="content">
          <storyProduct name="Hajer" />
        </div>
      </section>

      <section>
        <header>
          <h3>Na ciepłe dni:</h3>
        </header>
        <div class="content">
          <storyProduct name="Kawa mrożona" />
          <storyProduct name="Matcha mrożona" />
        </div>
      </section>

      <section>
        <header>
          <h3>Zawsze dobrze wejdą: </h3>
        </header>
        <div class="content">
            <storyProduct name="Elza" />
            <span>z</span>
            <storyProduct name="Frida" customName="FRIDOM" />
        </div>
      </section>

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
  padding:.5rem;
  h2{
    margin:.5rem;
  }
  section{
    margin-bottom:3rem;
    header h3{
      margin: .5rem;
    }
    .content{
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      justify-content: space-around;
      > * {
        justify-content: center;
      }
      span{
        font-size:3rem;
        text-align:center;
        @media (max-width:768px){
          width:100%;
          margin:0;
          flex:none;
        }
      }
    }
  }

}
</style>