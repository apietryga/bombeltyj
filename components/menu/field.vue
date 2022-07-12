<template>
  <dl :class="getClass(values)">
    <dt v-if="values.name">
      <div class="recommend" v-if="values.img">
        <div class="imgField">
          <img :src="values.img" :alt="values.name" :class="values.class || escapeSpecialChars(values.name)">
        </div>
        <div v-for="(tail, index) of values.tails" :key="index" class="imgNameField">
          <appIcon :values="{name: tail.ico}" />
          <span>{{tail.name}}</span>
        </div>
      </div>
      <b v-else>
        <div class="imgNameField">
          <appIcon :values="values" v-if="depth > 3" />
          {{values.name}}
          <span v-if="values.subname" class="subname">&nbsp;{{values.subname}}</span>
        </div>
      </b>
    </dt>
    <div class="item-body" v-if="values.items" :class="values.name">
      <dd v-for="(subItems) of values.items">
        <menuField :values="subItems" :depth="depth+1" :key="values.name+'_'+subItems.name" />
        <div v-if="subItems.price" >
          <div> {{subItems.name}} </div>
          <div class="subPrice"> {{subItems.subname}} </div>
        </div>
        <div v-if="subItems.price" class="price">
          {{subItems.price}}
        </div>
      </dd>
    </div>
    <storyProduct :name="values" v-if="typeof values == 'string'" class="has-submenu latest d-3" />
  </dl>
</template>

<script>
export default {
  props: {
    values: { type: Object | String, required: true },
    depth: { type: Number, default: 0 },
  },
  methods:{
    getClass(item){
      if(item.class) return item.class
      if(typeof item == 'string') return 'stringdl'
      if(!item.items) return
      if(!item.items[0].items) return 'has-submenu latest d'+this.depth
      return 'has-submenu d'+this.depth
    },
    escapeSpecialChars(str) {
      return str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
    }
  },

}
</script>

<style lang="scss">
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
          max-width:100%;
          &.maa{
            width:4em;
            height:6em;
          }
          &.dua{
            width:4em;
            height:6em;
          }
        }
      }
    }
  }
  .d2 > dt > b > .imgNameField {
    flex-direction: column;
    align-items: start;
    > .subname{
      font-family: $secondFont;
    }
  }
  > a{
    display:block !important;
    margin:0 !important;

  }
  &.stringdl{
    flex:1;
    display:flex;
    justify-content: center;
  }
  .SEZONOWE{
    flex-direction: row !important;
    flex-wrap:nowrap !important;
    img{
      max-width:100%;
    }
  }
}
.d0{
  @include colorPack($white);
  align-items: flex-start;
}
.d1{@include colorPack($bgColor); dt b {font-size:1.6em;}}
.d2{@include colorPack(rgb(58, 5, 49)); dt b {font-size:1.4em;}}
.d3{@include colorPack($pink4); dt b {font-size:1em;}}
.d4{@include colorPack($pink3)}
</style>