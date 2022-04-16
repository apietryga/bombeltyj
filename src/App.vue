<template>
  <header>
    <img src="@/assets/logo192.webp" alt="Bombel Tyj Logo">

  </header>
  <div>
    <BombelMenu :object="object" />
  </div>
</template>
<script>
import BombelMenu from './components/BombelMenu.vue'

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
          // { name: 'SMAK',
          //   items: [
          //       { name: 'Orientalne',
          //       items:[
          //         { name: 'Truskawka' },
          //         { name: 'Arbuz' },
          //       ]
          //     }
          //   ]
          // },
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
          { name: 'SYROP',
            subname: 'DODATKI',
            items: [
              {name: 'KARMEL'},
              {name: 'SŁONY KARMEL'},
              {name: 'ORZECH'},
              {name: 'CZEKOLADA'},
              {name: 'BIAŁA CZEKOLADA'},
            ]
          }
        ]
      }
    }
  },
  components: {
    BombelMenu,
  }
}
</script>
<style lang="scss">
@font-face {
  font-family: "Bubbleboddy Neue";
  src: url("@/assets/bubblebody.woff2") format("woff2");
  font-display: block;
}
*{box-sizing:border-box;}
body{
  margin:0;
  #app {
    font-family: Bubbleboddy Neue, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
}
</style>
