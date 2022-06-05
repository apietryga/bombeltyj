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
export default {
  name: 'storyProduct',
  data(){
    if( !this.values){
      return {
        vals : this.getValuesByName(this.name)
      }
    }
    return {
      vals : this.values
    }
  },
  props: {
    name: { type: String },
    values: { default: false },
    horizontal: { type: Boolean, default: false }
  },
  methods:{
    getValuesByName(name){
      return this.$products.find(item => item.name.toLowerCase() === name.toLowerCase())
    }
  },
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