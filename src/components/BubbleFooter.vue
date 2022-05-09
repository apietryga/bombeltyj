<template>
  <footer>
    <div class="socials">
      <a href="https://www.facebook.com/bombeltyj" target="_blank">
        <img src="/socials/facebook.webp" alt="bombeltyj on facebook">
        <span>@bombeltyj</span>
      </a>
      <a href="https://www.instagram.com/bombeltyj" target="_blank">
        <img src="/socials/instagram.webp" alt="bombeltyj on instagram">
        <span>@bombeltyj</span>
      </a>
      <a href="https://www.tiktok.com/@bombeltyj" target="_blank">
        <img src="/socials/tiktok.webp" alt="bombeltyj on tiktok">
        <span>@bombeltyj</span>
      </a>
      <a href="https://bombeltyj.pl">
        <img src="/logo192.webp" alt="bombeltyj on web">
        <span>bombeltyj.pl</span>
      </a>
    </div>
    <p> &copy; Bombel Tyj 2022 </p>
  </footer>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@use '@/styles/_global.scss' as *;
footer{
  // color:#fff;
  @extend %simpleBox;      
  .socials{
    font-family:$secondFont;
    display:flex;
    // justify-content: center;
    padding:0 10vw;
    justify-content: space-evenly;
    flex-wrap:wrap;
    font-size:.8em;
    a{
      text-decoration:none;
      color:inherit;
      margin:.5em;
      padding:.2em;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content: center;
      max-width:10vw;
      img{
        max-width:80%;
      }
    }
  }

  p{
    margin:.5em;
    text-align: center;
    font-family:  $secondFont;
    font-weight: bold;
  }
}
</style>