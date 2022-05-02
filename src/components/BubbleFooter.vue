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
        <img src="@/assets/logo192.webp" alt="bombeltyj on web">
        <span>bombeltyj.pl</span>
      </a>
    </div>
    <p> &copy; Bombel Tyj <span>2022</span> </p>
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
    justify-content: center;
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
      max-width:20%;
      img{
        max-width:80%;
      }
    }
  }

  p{
    margin:.5em;
    text-align: right;
    // padding:0 .5em;
    span{
      font-family:  $secondFont;
      font-weight: bold;
    }
  }
}
</style>