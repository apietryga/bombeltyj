<template>
  <dl :class="getClass(values)">
    <dt>
      <div class="recommend" v-if="values.img">
        <img :src="values.img" :alt="values.name">
        <div v-for="tail of values.tails" :key="tail">
          <VueIcon :values="{name: tail.ico}" />
        </div>
      </div>
      <b v-else>
        <VueIcon :values="values" />
        <span v-if="values.subname">{{values.subname}}</span>
      </b>
    </dt>
    <div class="item-body" v-if="values.items">
      <dd v-for="subItems of values.items" :key="subItems.name">
        <div v-if="subItems.price">
          {{subItems.name}}
        </div>
        <NestedFields :values="subItems" :depth="depth+1" />
        <div v-if="subItems.price" class="price">
          {{subItems.price}}
        </div>
      </dd>
    </div>
  </dl>
</template>
<script>
import VueIcon from './VueIcon.vue'
export default {
  name: 'NestedFields',
  components: {
    VueIcon,
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
      return 'has-submenu d'+this.depth
    },
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
        // display:flex;
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
  }

  .recommend{
    // border:2px dashed red;
    img{
      max-width:100%;
    }
  }

  .price-size{
    // border:2px dashed red;
    .item-body{
      align-items: flex-end;
      dd{
        display:flex;
        flex-direction: column;
        // border:2px dashed blue;
        align-items:center;
        font-size:1.5em;
        .price{
          padding:.5em 2em;
          background-color:$bgColor;
          color:$pink4;
          border:4px solid $pink1;
          font-family: $secondFont;
          border-radius:10px;
          font-weight: bold;
        }

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
.d1{@include colorPack($pink4)}
.d2{@include colorPack($pink1)}
.d3{@include colorPack(rgb(184, 9, 155))}
.d4{@include colorPack($pink3)}
</style>