<template>
  <div class="icon">
    <slot name="name" v-if="fillByIcon(values.name).src">
      <img :src="fillByIcon(values.name).src" :alt="values.name">
      {{fillByIcon(values.name).name}}
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
        "słony karmel" : "img",
        "liczi" : "img",
        "marakuja" : "img",
        "matcha" : "img",

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
        "tapioka" : "🧆",
        "orzech" : "🥜",
        "biała czekolada" : "🍫",
      }
    }
  },
  props: {
    values: { type: Object, required: true },
  },
  methods : {
    fillByIcon( name ){
      if(this.icons[name.toLowerCase()] == "img") return {name: name, src: 'icons/'+name.toLowerCase()+'.webp'}
      if(this.icons[name.toLowerCase()]) return this.icons[name.toLowerCase()] + " " + name
      return name
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