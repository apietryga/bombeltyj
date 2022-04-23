<template>
  <header>
    <a href="./">
      <img src="@/assets/logo192.webp" alt="Bombel Tyj Logo">
    </a>
    <OpenDate />
  </header>
  <main>
    <NestedFields :values="object" />
  </main>
  <footer>
    <p> &copy; Bombel Tyj <span>2022</span> </p>
  </footer>
</template>
<script>
import NestedFields from './components/NestedFields.vue'
import OpenDate from './components/OpenDate.vue'
export default {
  name: 'App',
  data(){
    return {
      object: {
        name: 'MENU',
        items: [
          { name: 'BAZA',
            items: [
              { name: 'HERBATA',
                subname: 'CZARNA LUB ZIELONA',
                items:[
                  { name: 'TRUSKAWKA' },
                  { name: 'POZIOMKA' },
                  { name: 'MARAKUJA' },
                  { name: 'MANGO' },
                  { name: 'WIŚNIA' },
                  { name: 'JAGODA' },
                  { name: 'MORELA' },
                  { name: 'POMARAŃCZA' },
                  { name: 'LICZI' },
                  { name: 'MALINA' },
                ]
              },
              { name: 'MLEKO',
                items: [
                  { name: "DESEROWE",
                    items: [
                      { name: "CZEKOLADA" },
                      { name: "KAWA" },
                      { name: "WANILIA" },
                      { name: "MATCHA" },
                      { name: "KOKOS" },
                      { name: "KARMEL" },
                      { name: "MLECZNY" },
                    ]
                  },
                  { name: "OWOCOWE",
                    items: [
                      { name: "TRUSKAWKA" },
                      { name: "MANGO" },
                      { name: "WIŚNIA" },
                      { name: "JAGODA" },
                      { name: "MALINA" },
                    ]
                  },
                ]
              },
            ]
          },
          { name: 'KULKI',
            items: [
              { name: 'OWOCOWE',
                items:[
                  { name: 'WIŚNIA' },
                  { name: 'TRUSKAWKA' },
                  { name: 'MARAKUJA' },
                  { name: 'MANGO' },
                  { name: 'MALINA' },
                  { name: 'JABŁKO' },
                  { name: 'BRZOSKWINIA' },
                  { name: 'ALOES' },
                  { name: 'POMARAŃCZA' },
                  { name: 'LICZI' },
                  { name: 'TAPIOKA' },
                ]
              },
              { name: 'DESEROWE',
                items:[
                  { name: 'KARMEL' },
                  { name: 'KAWA' },
                  { name: 'KOKOS' },
                  { name: 'JOGURT' },
                  { name: 'ORZECH' },
                ]
              }            
            ]
          },
          { name: 'DODATKI',
            items: [
              {
                name: 'SYROP',
                items: [
                  {name: 'KARMEL'},
                  {name: 'SŁONY KARMEL'},
                  {name: 'ORZECH'},
                  {name: 'CZEKOLADA'},
                  {name: 'BIAŁA CZEKOLADA'},
                ]
              }
            ]
          },
          { name: 'REKOMENDOWANE',
            items:[
              { name : "ELZA",
                items:[
                  { name: 'Skład',
                    img: 'elza.webp',
                    tails: [
                      { name: 'mleko truskawkowe',
                        ico: 'truskawka',
                      },
                      { name: 'kulki jogurtowe',
                        ico: 'jogurt'
                      },
                      { name: 'syrop karmelowy',
                        ico: 'karmel',
                      },
                    ]
                  }
                ]

              },
              { name : "FRIDA",
                items:[
                  { name: 'Skład',
                    img: 'frida.webp',
                    tails: [
                      { name: 'mleko kawowe',
                        ico: 'kawa',
                      },
                      { name: 'kulki kawowe',
                        ico: 'kawa'
                      },
                      { name: 'syrop karmelowy',
                        ico: 'karmel',
                      },
                    ]
                  }
                ]
              },
            ]
          },
          { name: 'CENNIK',
            items:[
              { name: '',
                // name: 'ROZMIAR',
                class: 'price-size',
                items: [
                  { name : 'MAŁA',
                    img: 'small_cup.webp',
                    price: '10zł',
                  },
                  { name : 'DUŻA',
                    img: 'big_cup.webp',
                    price: '15zł',
                  },
                ]

              },
            ]
          },
        ]
      }
    }
  },
  components: {
    NestedFields,
    OpenDate,
  }
}
</script>
<style lang="scss">
@use '@/styles/_global.scss' as *;
*{box-sizing:border-box;}
body{
  margin:0;
  @include linearGradient($pink1, $pink1, $bgColor);
  min-height:100vh;
  #app {
    font-family: $firstFont;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    padding:0 .5em;
    > header{
      display:flex;
      justify-content: flex-start;
      align-items: center;
      padding:1em;
      @extend %simpleBox;      
      img{
        width:192px;
        height:192px;
        border-radius: 50%;
        box-shadow: .4em .4em 1em rgba(0, 0, 0, 0.8);
        cursor:pointer;
      }
      @media (max-width:520px){
        flex-direction: column;
        align-items: center;
        h2{
          text-align:center;
        }
      }
    }

    > footer{
      color:#fff;
      @extend %simpleBox;      

      p{
        margin:.5em;
        span{
          font-family:  $secondFont;
          font-weight: bold;
        }
      }
    }
  }
}
</style>
