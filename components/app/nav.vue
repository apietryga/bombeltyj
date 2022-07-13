<template>
  <nav>
    <routerLink to="/">
      <img src="/bombeltyj_logo.svg" alt="Bombel Tyj Logo" fetchpriority="high" />
    </routerLink>
    <div class="content">
      <h1>BOMBEL TYJ</h1>
      <a href="https://www.google.com/maps/dir//bombel+tyj/" target="_blank">
        <p class="adress"> Rybnik, Sobieskiego 13 </p>
      </a>
    </div>
    <input type="checkbox" id="toggler" >
    <label for="toggler">
      <div></div>
      <div></div>
      <div></div>
    </label>
    <ul class="links">
      <li>
        <routerLink to="/">{{ $t('menu').toUpperCase()}}</routerLink>
      </li>
      <li>
        <nuxtLink to="/opinie">{{ $t('opinie').toUpperCase()}}</nuxtLink>
      </li>
      <li>
        <nuxtLink to="/story">{{ $t('produkty').toUpperCase()}}</nuxtLink>
      </li>
      <li>
        <div class="dropDown">
          <div class="dropDownContent">
            <button
              class="langButton"
              :style="`background-image: url('/img/flags/${ $i18n.localeProperties.code }.svg');`"
              @click="langDropdown"
            >{{ $i18n.localeProperties.code }} </button>
            <div class="dropDownList" v-if="expandLang">
              <button 
                v-for="locale of $i18n.localeCodes" 
                @click="$i18n.setLocale(locale), expandLang = false"
                class="langButton"
                :style="`background-image: url('/img/flags/${locale}.svg');`"
              > {{ locale }} </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script>
export default { 
  name: "appNav",
  data(){
    return { expandLang : false }
  },
  methods: {
    langDropdown(){
      this.expandLang = !this.expandLang;
    }
  }
}
</script>

<style lang="scss" scoped>
nav{
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding:1rem;
  @extend %simpleBox;
  margin-top:0;
  border-radius: 0 0 1rem 1rem;
  border-width: 0 0 3px 0;
  background: linear-gradient(transparent, rgba(255, 255, 255, 0.4));
  img{
    height:4rem;
    width:4rem;
    border-radius: 50%;
    cursor:pointer;
  }
  .content{
    padding:.5rem;
    h1,h2,p,a{
      margin:0;
      line-height:1.2rem;
    }
    h2{
      font-size:1.2rem;
    }
    .adress{
      font-family: $secondFont;
      font-weight: bold;
      font-size: .8rem;
    }
  }
  input, label{
    display:none
  }
  .links{
    z-index:2;
    flex:1;
    display:flex;
    justify-content: flex-end;
    // align-items: flex-end;
    align-items: center;
    margin:0;
    padding:0;
    list-style:none;
    a{
      margin:.25rem .5rem;
    }
    .dropDown{
      position:relative;
      width:3rem;
      height:2rem;
      .dropDownContent{
        position:absolute;
        width:100%;
        display:flex;
        flex-direction:column;
        .langButton{
          text-transform: uppercase;
          margin:2px 0;
          border:none;
          cursor:pointer;
          background-size:cover;
          background-position:center;
          height: 2rem;
          position:relative;
          text-shadow: 1px 1px #fff;
          opacity:.8;
          width:100%;
          &:hover{
            opacity:1;
          }
        }
      }
    }
  }
}
@media (max-width:768px){
  .links{
    right:0;
    bottom:0;
    z-index:1;
    transition:.5s;
    position: fixed;
    flex-direction: column;
    border-width: 0 0 0 3px;
    border:3px solid #fff;
    transform: translateX(100%);
    border-radius: 1rem 0 0 1rem;
    justify-content: start!important;
    height:calc( 100% - ( 50px + 2rem ) );
    background: linear-gradient(to right, lighten($pink1, 25%) , $pink1);
    li{
      margin:.5rem 0;
      padding:.25rem;
    }
  }
  label{
    cursor:pointer;
    z-index:2;
    transition:.5s;
    display:flex !important;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin:1rem;
    right:0;
    top:0;
    width:4rem;
    height:4rem;
    background-color:rgba(255, 255, 255, 0.50);
    border-radius:50%;
    position:fixed;
    div{
      height:5px;
      margin: 3px 0;
      transition:.5s;
      width:60%;
      border-radius:5px;
      background-color:$bgColor;
      position:relative;
    }
  }
  #toggler:checked ~ 
  {
    .links{
      transform: translateX(0);
    }
    label{
      div{
        transition:1s;
        &:nth-child(1){
          transform: rotate(45deg);
          top:5px;
        }
        &:nth-child(2){
          display:none;
        }
        &:nth-child(3){
          transform: rotate(-45deg);
          top:-5px;
        }
      }
    }
  }
}
</style>