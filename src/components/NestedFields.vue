<template>
  <dl :class="getClass(values)">
    <dt>
      <b>
        {{fillByIcon(values.name)}}        
        <span v-if="values.subname">{{values.subname}}</span>
      </b>
    </dt>
    <div class="item-body" v-if="values.items">
      <dd v-for="subItems of values.items" 
        :key="subItems.name">
        <NestedFields :values="subItems" :depth="depth+1" />
      </dd>
    </div>
  </dl>
</template>
<script>
export default {
  name: 'NestedFields',
  props: {
    values: { type: Object, required: true },
    depth: { type: Number, default: 0 }
  },
  data(){
    return{
      icons : {
        "malina" : "🍓",
        "truskawka" : "🍓",
        "poziomka" : "🍓",
        "marakuja" : "🍛",
        "mango" : "🥭",
        "jagoda" : "🍆",
        "wiśnia" : "🍒",
        "morela" : "🍑",
        "pomarańcza" : "🍊",
        "liczi" : "🍅",
        "czekolada" : "🍫",
        "matcha" : "🥤",
        "kawa" : "☕️",
        "wanilia" : "🥢",
        "mleczny" : "🥛",
        "kokos" : "🥥",
        "karmel" : "🧈",
        "słony karmel" : "🧈",
        "jabłko" : "🍏",
        "brzoskwinia" : "🍑",
        "aloes" : "🌿",
        "tapioka" : "🧆",
        "orzech" : "🥜",
        "biała czekolada" : "🍫",
      }
    }
  },
  methods:{
    getClass(item){
      if(!item.items) return
      if(!item.items[0].items) return 'has-submenu latest d'+this.depth
      return 'has-submenu d'+this.depth
    },
    fillByIcon( name ){
      if(!this.icons[name.toLowerCase()]) return name
      return this.icons[name.toLowerCase()] +" "+ name
    }
  }
}
</script>
<style lang="scss">
@use '@/styles/_global.scss' as *;
// NESTED STYLES
dl{
  margin:0;
  &.has-submenu {
    flex:1;
    border-radius:10px;
    border-width: 3px;
    border-style:solid;
    // TITLES
    > dt{
      text-align:center;
      border:inherit;
      display:inline-block;
      padding:2px 10px;
      margin-left:-1px;
      margin-top:-1px;
      border-width: 0 3px 3px 0;
      border-radius:7px 0 7px 0;
      b{
        display:flex;
        flex-direction: column;
        color:#fff;
        mix-blend-mode: difference;
        span{
          font-size:0.6em;
          -webkit-filter: brightness(0.7);
          filter: brightness(0.7);
        }
      }
    }
    // BODIES
    .item-body{
      display:flex;
      align-items: flex-start;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: flex-start;
      padding:10px;
      gap:10px;
      dd{
        margin:0;
        display:flex;
        flex:1;
      }
    }
    // DEPTH (LAST) LIST ITEM
    &.latest {
      .item-body{
        flex-direction:column;
        background-color:transparent!important;
        min-width:200px;
      }
    }
  }
}
// COLORS OF DEPTHS
@mixin colorPack($color){
  border-color:$color!important;
  background-color:rgba($color, .5);
  > dt{
    background-color:$color;
  }
}
.d0{@include colorPack($white)}
.d1{@include colorPack($pink1)}
.d2{@include colorPack($pink4);}
.d3{@include colorPack($pink2);}
.d4{@include colorPack($pink3);}
</style>