<template>
  <div class="comment">
    <div class="loading" v-if="loading">
      loading...
    </div>
    <div 
      class="fb-comments"
      ref="comments"
      data-numposts="5"></div>
  </div>
  <!-- :data-href="location.href"  -->
</template>

<script>
export default {
  data(){
    return {
      script: null,
      loading: true,
      // dataHref: http://devbombeltyj.herokuapp.com/story/ELZA
    }
  },
  mounted(){
    // console.log(location)
    this.fbCommentAppend()
    if(typeof FB !== 'undefined'){
      FB.Event.subscribe('xfbml.render', this.fbCommentsRendered)
    }
  },
  methods:{
    fbCommentsRendered(){
      this.loading = false
    },
    fbCommentAppend(){
      this.script = document.createElement('script')
      this.script.setAttribute('src', 'https://connect.facebook.net/pl_PL/sdk.js#xfbml=1&version=v14.0&appId=1156400821602518&autoLogAppEvents=1')
      this.script.setAttribute('crossorigin', 'anonymous')
      this.script.setAttribute('nonce', 'r78JeLos')
      this.script.defer = true
      this.script.async = true
      document.head.appendChild(this.script)
      // if(window?.FB){
      //   window.FB?.XFBML.parse()
      // }else{
      //   this.loading = false
      // }
    }
  }
}
</script>

<style lang="scss">
.comment{
  background-color: #fafafab7;
  border-radius:$borderRadius;
  padding:1rem;
  .fb-comments{
    width:100%;
    display:flex;
    justify-content: center;
  }
}

</style>