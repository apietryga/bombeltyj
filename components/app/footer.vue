<template>
  <footer>
    <div class="socials">
      <a href="https://www.facebook.com/bombeltyj" target="_blank">
        <img src="/img/socials/facebook.svg" alt="bombeltyj on facebook">
      </a>
      <a href="https://www.instagram.com/bombeltyj" target="_blank">
        <img src="/img/socials/instagram.svg" alt="bombeltyj on instagram">
      </a>
      <a href="https://www.tiktok.com/@bombeltyj" target="_blank">
        <img src="/img/socials/tiktok.svg" alt="bombeltyj on tiktok">
      </a>
      <a href="https://bombeltyj.pl">
        <img src="/bombeltyj_logo.svg" alt="bombeltyj on web">
      </a>
    </div>
    <p> &copy; Bombel Tyj 2022 </p>
  </footer>
</template>

<script>
  export default {
    name: 'appFooter',
  }
</script>

<style lang="scss">
footer{
  bottom:0;
  position: relative;
  .socials{
    display:flex;
    flex-wrap:wrap;
    font-size:.8em;
    @extend %simpleBox;      
    font-family:$secondFont;
    justify-content: center;
    
    border-radius: 1rem 1rem 0 0;
    border-width: 3px 0 0 0;
    background: linear-gradient(rgba(255, 255, 255, 0.4), transparent);
    a{
      margin:.5em;
      padding:.2em;
      display:flex;
      color:inherit;
      align-items:center;
      flex-direction:column;
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
  @media only print{
    width:50%;
    right:.5em;
    bottom:.5em;
    border:none;
    position:fixed;
    background:transparent;
    .socials{
      border:none;
      background:transparent;
    }
  }
}
</style>