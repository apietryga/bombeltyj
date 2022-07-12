<template>
  <a 
    :href="href"
    class="reviewButton" 
    target="_blank"
  >
    <img :src="`/img/socials/${serviceName.toLowerCase()}.svg`" :alt="serviceName + ' LOGO'">
    <h4>{{ serviceName }}</h4>
    <span>⭐⭐⭐⭐⭐</span>
  </a>
</template>

<script>
export default {
  props: {
    href: {
      type: String,
      default: 'href'
    }
  },
  data(){
    return {
      serviceName : this.getServiceNameFromHref(this.href)
    }
  },
  methods: {
    getServiceNameFromHref(){
      let href = this.href;
      let serviceName = href.split('/')[2];
      serviceName = serviceName.split('.')[1];
      return serviceName == 'page' ? 'GOOGLE' : serviceName.toUpperCase();
    }
  },
}
</script>

<style lang="scss">
  $radius : 2rem;
  $fontsize: 2rem;
  .reviewButton{
    font-size:$fontsize;
    position:relative;
    padding:2rem;
    border-radius:$radius;
    border:.5rem solid $pink1;
    display:flex;
    flex-direction: column;
    align-items:center;
    width:fit-content;
    margin:.5rem;
    background-color:$pink2;
    h4{
      margin:0;
      z-index:1;
    }
    img{
      width: calc($fontsize*2);
      height: calc($fontsize*2);
      z-index:1;
    }
    span{
      z-index:1;
    }
    &:after{
      top:0;
      right:0;
      z-index:0;
      content: '';
      width:100%;
      position:absolute;
      box-sizing: border-box;
      background: linear-gradient( to left, $pink4,  transparent);
      height:100%;
      border-radius: 0 $radius $radius 0;
    }
  }
</style>