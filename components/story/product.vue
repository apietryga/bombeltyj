<template>
  <routerLink class="el" :to="'/story/' +  vals.name">
    <figure>
      <div class="heading">
        <h4 class="title"> {{ customName ? customName : vals.name }} </h4>
      </div>
      <div class="content" :class="{ 'horizontal' : vals.horizontal }">
        <img :src="'/' + vals.img" :alt="vals.name">
        <figcaption>
          <ul>
            <li v-for="(tail, index) of vals.tails" :key="index">
              <appIcon :values="{name: tail.ico}" />
              <span>{{tail.name}}</span>
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
    customName: { type: String|Boolean, default: false }
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
@use '../../assets/style/global' as *; // :TODO:
.el{
  border:.3rem solid $pink4;
  border-radius:.7rem;
  display:inline-block;
  background: rgba(255,188,219,.5);
  margin:.5rem;
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
      img{
        width:250px;
        height:200px;
      }
      &.horizontal{
        display:flex;
        flex-direction:row-reverse;
        align-items:center;
        img{
          width:175px;
          height:250px;
        }
      }
      ul{
        list-style:none;
        margin:0;
        padding:0 0 1rem 1rem;
        li{
          display:flex;
        }
      }
    }
  }
}
</style>