<template>
  <footer>
    <div class="socials">
      <a href="https://www.facebook.com/bombeltyj" target="_blank">
        <img src="img/socials/facebook.svg" alt="bombeltyj on facebook">
      </a>
      <a href="https://www.instagram.com/bombeltyj" target="_blank">
        <img src="img/socials/instagram.svg" alt="bombeltyj on instagram">
      </a>
      <a href="https://www.tiktok.com/@bombeltyj" target="_blank">
        <img src="img/socials/tiktok.svg" alt="bombeltyj on tiktok">
      </a>
      <a href="https://bombeltyj.pl">
        <img src="bombeltyj_logo.svg" alt="bombeltyj on web">
      </a>
    </div>
    <p> &copy; Bombel Tyj 2022 </p>
  </footer>
</template>

<style lang="scss">
@use '@/styles/_global.scss' as *;
footer{
  .socials{
    @extend %simpleBox;      
    font-family:$secondFont;
    display:flex;
    justify-content: center;
    flex-wrap:wrap;
    font-size:.8em;
    a{
      color:inherit;
      margin:.5em;
      padding:.2em;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content: center;
      img{
        width:5em;
        height:5em;
        border-radius:.8em;
      }
    }
  }
  p{
    margin:.5em;
    text-align: right;
    font-family:  $secondFont;
    font-weight: bold;
    @media only screen {    
      color:#fff;
    }
  }
}
</style>