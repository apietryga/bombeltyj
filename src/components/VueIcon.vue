<template>
  <div class="icon">
    <slot name="name" v-if="fillByIcon(values.name).src">
      <img :src="fillByIcon(values.name)?.src" :alt="values.name" @error="err">
    </slot>
    <slot name="name" v-else>
      {{fillByIcon(values.name)}}
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    values: { type: Object, required: true },
  },
  methods : {
    fillByIcon( name ){
      if(name == null){return ''}
      // console.log(name)
      return { src: 'icons/'+encodeURI(name.toLowerCase())+'.svg' }
      // if(this.icons[encodeURI(name.toLowerCase())] == "img") return {src: 'icons/'+encodeURI(name.toLowerCase())+'.webp'}
      // if(this.icons[name.toLowerCase()]) return this.icons[name.toLowerCase()]
      // return ''
    },
    err(e){ e.target.src = 'icons/bombeltyj.svg' }
  }
}
</script>

<style lang="scss" scoped>
  // IMG AS ICONS
  img{
    // border:5px dashed red;
    width:1.2em;
    height:1.2em;
  }


</style>