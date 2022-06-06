<template>
  <routerLink class="el" :to="'/story/' +  vals.name">
    <figure>
      <div class="heading">
        <h4 class="title"> {{ vals.name }} </h4>
      </div>
      <div class="content" :class="{ 'horizontal' : horizontal }">
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
  name: 'storyProduct',
  data(){
    return {
      vals : !this.values ? this.getValuesByName(this.name) : this.values,
    }
  },
  props: {
    name: { type: String, default : ":NAME:" },
    // values: { default: false },
    values: { default: false },
    horizontal: { type: Boolean, default: false }
  },
  methods:{
    getValuesByName(name){
      // console.log("NAME : ", name)
      // return this.$products.find(item => item.name.toLowerCase() === name.toLowerCase())
      return products.find(item => item.name.toLowerCase() === name.toLowerCase())
    }
  },
  // mounted(){
  //   console.log("storyProduct mounted")
  //   // console.log("storyProduct mounted")

  //   const routes = products.map( product => {
  //     return {
  //       route : `/products/${product.name}`,
  //       payload: product
  //     }
  //   })
  //   console.log('routes : ', routes)

  // },
}
</script>

<style lang="scss" scoped>
@use '../../assets/style/global' as *;
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
    width:fit-content;
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
      @media (max-width:768px){
        img{
          width:250px;
          height:200px;
        }
        &.horizontal{
          img{
            width:125px;
            height:200px;            
          }
        }
      }
      
      &.horizontal{
        display:flex;
        flex-direction:row-reverse;
        align-items:center;
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