<template>
  <div class="icon">
    <slot name="name" v-if="fillByIcon(values.name).src">
      <img
        :src="fillByIcon(values.name).src"
        @error="imgLoadError"
      />
    </slot>
    <slot name="name" v-else>
      {{fillByIcon(values.name)}}
    </slot>
  </div>
</template>
<script>
const fs = (process.server ? require('fs-extra') : null)
export default {
  props: {
    values: { type: Object, required: true },
  },
  methods : {
    fillByIcon( name ){
      if(name == null){return ''}
      return { src: '../../img/icons/'+encodeURI(name.toLowerCase())+'.svg' }
    },
    imgLoadError(e){ 
      e.target.src = '/img/icons/bombeltyj.svg' 
    }
  }
}
</script>
<style lang="scss" scoped>
  // IMG AS ICONS
  img{
    width:1.2em;
    height:1.2em;
    margin-right: .2em;
  }
</style>