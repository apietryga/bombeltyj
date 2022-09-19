<template>
  <div class="closure">
    <h2>⚠️{{$t('closure.h2')}}</h2>
    <p>{{$t('closure.p')}}</p>
  </div>
</template>
<script>
  export default {}
</script>
<style lang="scss" scoped>
.closure{
  white-space: pre-line;
  @extend %simpleBox;      
  background-color: rgba(255, 255, 29, 0.638);
  margin:0 8px 8px 8px;
  h2{
    margin:1rem 1rem 0 1rem;
  }
  p{
    font-family:$secondFont;
    margin:.5rem 1.5rem 1rem 1.5rem;
    // font-weight: bold;
  }
}

</style>