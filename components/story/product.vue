<template>
  <routerLink class="el" :to="'/story/' +  vals.name">
    <figure>
      <div class="heading">
        <h4 class="title"> {{ $t((customName ? customName : vals.name).toLowerCase()).toUpperCase() }} </h4>
      </div>
      <div class="content" :class="{ 'horizontal' : vals.horizontal }">
        <img :src="'/' + vals.img" :alt="vals.name">
        <figcaption v-if="tails">
          <ul>
            <li v-for="(tail, index) of vals.tails" :key="index">
              <appIcon :values="{name: tail.ico}" />
              <span>{{$t(tail.name.toLowerCase()).toUpperCase()}}</span>
            </li>
          </ul>
        </figcaption>
      </div>
    </figure>
  </routerLink>
</template>

<script>
import products from '@/static/products.json'; // :TODO: put it to store!
export default {
  data(){
    return {
      vals : !this.values ? this.getValuesByName(this.name) : this.values,
    }
  },
  props: {
    name: { type: String, default : ":NAME:" },
    values: { default: false },
    customName: { type: String|Boolean, default: false },
    tails: { type: Boolean, default: true }
  },
  methods:{
    getValuesByName(name){
      const vals = products.find(item => item.name.toLowerCase() === name.toLowerCase())
      this.$emit("desc", vals.desc)
      return vals
    }
  },
}
</script>

<style lang="scss" scoped>
.el{
  border:.3em solid $pink4;
  border-radius:.7em;
  display:inline-block;
  background: rgba(255,188,219,.5);
  margin:.5em;
  figure{
    margin:0;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content: center;
    .heading{
      top:-.3rem;
      left:-.3rem;
      width:100%;
      display:flex;
      position:relative;
      .title{
        background: $pink4 ;
        padding:.5rem 1rem;
        border-radius:.7rem 0 .7rem 0;
        margin:0;
      }
    }
    .content{
      display:flex;
      flex-direction: column;
      align-items: center;
      img{
        width:250px;
        height:200px;
      }
      &.horizontal{
        flex-direction:row-reverse;
        img{
          width:175px;
          height:250px;
        }
      }
      figcaption{
        width:100%;
        ul{
          list-style:none;
          margin:0;
          padding:0 0 .5rem .5rem;
          li{
            display:flex;
          }
        }
      }
    }
  }
}
</style>