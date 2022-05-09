<template>
  <div class="icon">
    <slot name="name" v-if="fillByIcon(values.name).src">
      <img :src="fillByIcon(values.name)?.src" :alt="values.name">
    </slot>
    <slot name="name" v-else>
      {{fillByIcon(values.name)}}
    </slot>
  </div>
</template>

<script>
export default {
  data(){
    return {
      icons : {
        "malina" : "img",
        "aloes" : "img",
        "jagoda" : "img",
        "jogurt" : "img",
        "karmel" : "img",
        "s%C5%82ony%20karmel" : "img",
        "liczi" : "img",
        "marakuja" : "img",
        "matcha" : "img",
        "tapioka" : "img",
        "bia%C5%82a%20czekolada" : "img",        
        "arbuz" : "🍉",
        "truskawka" : "🍓",
        "poziomka" : "🍓",
        "mango" : "🥭",
        "wiśnia" : "🍒",
        "morela" : "🍑",
        "pomarańcza" : "🍊",
        "czekolada" : "🍫",
        "kawa" : "☕️",
        "wanilia" : "🥢",
        "mleczny" : "🥛",
        "kokos" : "🥥",
        "jabłko" : "🍏",
        "brzoskwinia" : "🍑",
        "orzech" : "🥜",
        "ananas" : "🍍",
      }
    }
  },
  props: {
    values: { type: Object, required: true },
  },
  methods : {
    fillByIcon( name ){
      if(name == null){return ''}
      if(this.icons[encodeURI(name.toLowerCase())] == "img") return {src: 'icons/'+encodeURI(name.toLowerCase())+'.webp'}
      if(this.icons[name.toLowerCase()]) return this.icons[name.toLowerCase()]
      return ''
    }
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