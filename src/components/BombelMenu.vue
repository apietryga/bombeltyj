<template>
  <div class="bombelMenu">
    <NestedFields :values="object" />
  </div>
</template>
<script>
import NestedFields from './NestedFields.vue'
export default {
  name: 'BombelMenu',
  props: {
    object: Object
  },
  components: {
    NestedFields,
  },
  methods : {
    // getDepth(object){
    //   let depth = 0;
    //   if(object.items){
    //     for(let i = 0; i < object.items.length; i++){
    //       if(object.items[i].items){
    //         depth = this.getDepth(object.items[i]) + 1;
    //       }
    //     }
    //   }
    //   return depth;
    // },
    // getArrByDepth(object, level){
    //   let arr = [];
    //   if(object.items){
    //     for(let i = 0; i < object.items.length; i++){
    //       if(object.items[i].items){
    //         arr = arr.concat(this.getArrByDepth(object.items[i], level));
    //       }
    //       if(object.items[i].items && level == this.getDepth(object.items[i])){
    //         arr.push(object.items[i]);
    //       }
    //     }
    //   }
    //   return arr;
    // },
    // getArrByDepth(object, depth){
    //   let arr = [];
    //   if(object.items){
    //     for(let i = 0; i < object.items.length; i++){
    //       if(object.items[i].items){
    //         arr.push(object.items[i]);
    //         arr = arr.concat(this.getArrByDepth(object.items[i], depth));
    //       }
    //     }
    //   }
    //   console.log("arr", arr);
    //   console.log("depth", depth);
    //   return arr;
    // },
  }
}
</script>
<style lang="scss">
// .bombelMenu{
//   // border:2px dashed red;



// }
</style>
