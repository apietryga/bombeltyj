<template>
  <header>
    <a href="./">
      <img src="bombeltyj_logo.svg" alt="Bombel Tyj Logo" fetchpriority="high" />
    </a>
    <div class="content">
      <h1>BOMBEL TYJ</h1>
      <h2>Bubble Tea Rybnik</h2>
      <a href="https://www.google.com/maps/dir//bombel+tyj/" target="_blank">
        <p class="adress"> Rybnik, Sobieskiego 13 </p>
      </a>
    </div>
    <div>
      <routerLink to="/opinia">TWOJA OPINIA</routerLink>
    </div>
  </header>
</template>

<script>
export default {
  name: "appHeader",

}
</script>

<style lang="scss" scoped>
@use '@/styles/_global.scss' as *;
header{
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding:1em;
  @extend %simpleBox;
  img{
    width:192px;
    height:192px;
    border-radius: 50%;
    cursor:pointer;
  }
  .content{
    padding:0 1em;
    flex:1;
    h1,h2,p{margin:0;}
    .adress{
      margin:.5em 0;
      font-family: $secondFont;
      font-weight: bold;
      font-size: .8em;
    }
  }
  @media (max-width:520px){
    flex-direction: column;
    align-items: center;
    h2{
      text-align:center;
    }
  }
}


</style>