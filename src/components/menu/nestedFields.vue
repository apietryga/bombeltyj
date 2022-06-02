<template>
  <dl :class="getClass(values)">
    <dt v-if="values.name">
      <div class="recommend" v-if="values.img">
        <div class="imgField">
          <img :src="values.img" :alt="values.name" :class="values.class || escapeSpecialChars(values.name)">
        </div>
        <div v-for="tail of values.tails" :key="tail" class="imgNameField">
          <appIcon :values="{name: tail.ico}" />
          <span>{{tail.name}}</span>
        </div>
      </div>
      <b v-else>
        <div class="imgNameField">
          <appIcon :values="values" v-if="depth > 3" />
          {{values.name}}
          <span v-if="values.subname">&nbsp;{{values.subname}}</span>
        </div>
      </b>
    </dt>
    <div :class="'item-body '+values?.name?.toLowerCase()" v-if="values.items">
      <dd v-for="subItems of values.items" :key="subItems.name">
        <NestedFields :values="subItems" :depth="depth+1" />
        <div v-if="subItems.price" >
          <div> {{subItems.name}} </div>
          <div class="subPrice"> {{subItems.subname}} </div>
        </div>
        <div v-if="subItems.price" class="price">
          {{subItems.price}}
        </div>
      </dd>
    </div>
  </dl>
</template>
<script>
import appIcon from '../app/icon.vue'
export default {
  name: 'nestedFields',
  components: {
    appIcon,
  },
  props: {
    values: { type: Object, required: true },
    depth: { type: Number, default: 0 }
  },
  methods:{
    getClass(item){
      if(item.class) return item.class
      if(!item.items) return
      if(!item.items[0].items) return 'has-submenu latest d'+this.depth
      // if(item.name) return 'has-submenu d'+this.depth+' '+item.name.toLowerCase()
      return 'has-submenu d'+this.depth
    },
    escapeSpecialChars(str) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
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
    border-radius:.7em;
    border-width: .3em;
    border-style:solid;
    // TITLES
    > dt{
      text-align:center;
      display:inline-block;
      padding:2px 10px;
      margin-left:-.1em;
      margin-top:-.3em;
      border-width: 0 .3em .3em 0;
      border-radius:.5em 0 .5em 0;
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
      flex-wrap: wrap;
      align-items: flex-start;
      padding:.25em;
      gap:.25em;
      dd{
        margin:0;
        display:inline;
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
    .imgNameField{
      display:flex;
      align-items: center;
    }
  }
  .latest dd{
    width:100%;
  }
  .recommend{
    .imgField{
      flex:1;
      width:100%;
      text-align:center;
      // border:5px dashed red;
      @media only print{
        img{
          max-width:100%;
        }
      }
      .recommendedIMG{
        width:10em;
        height:8em;
      }
    }
  }
  .price-size{
    .item-body{
      align-items: flex-end;
      flex-wrap:nowrap;
      dd{
        display:flex;
        color:#fff;
        font-size:1.5em;
        align-items:center;
        flex-direction: column;
        .price{
          margin:.5rem;
          font-weight: bold;
          padding:.2em .3em;
          border-radius:10px;
          font-family: $secondFont;
          background-color:$bgColor;
        }
        .subPrice{
          font-family:$secondFont;
          font-size:.5em;
          text-align:center;
        }
        img{
          &.maa{
            width:4em;
            height:5em;
          }
          &.dua{
            width:4em;
            height:6em;
          }
        }
      }
    }
  }
}
.d0{@include colorPack($white);}
.d1{@include colorPack($bgColor); dt b {font-size:1.6em;}}
.d2{@include colorPack(rgb(58, 5, 49)); dt b {font-size:1.4em;}}
.d3{@include colorPack($pink4); dt b {font-size:1em;}}
.d4{@include colorPack($pink3)}
</style>