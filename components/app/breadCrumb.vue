<template>
  <div class="level" v-if="this.$route.name != 'index'">
    <div class="level-left">
      <div class="level-item" >
        <!-- <a class="button is-white" @click="$router.back()">  SMTH </a>-->
        <nuxtLink to="/">BombelTyj</nuxtLink>
      </div>
      <div class="level-item">
        <nav class="breadcrumb" aria-label="breadcrumbs">
          <ul>
            <li v-for="(item, i) in crumbs" :key="i" :class="item.classes">
              <nuxtLink :to="item.path">{{ item.name }}</nuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  computed: {
    crumbs() {
      const crumbs = []
      this.$route.matched.forEach((item, i, { length }) => {
        const crumb = {}
        crumb.path = item.path
        // crumb.name = this.$i18n.t('route.' + (item.name || item.path))
        crumb.name = item.name || item.path

        // is last item?
        if (i === length - 1) {
          // is param route? .../.../:id
          if (item.regex.keys.length > 0) {
            crumbs.push({
              path: item.path.replace(/\/:[^/:]*$/, ''),
              // name: this.$i18n.t('route.' + item.name.replace(/-[^-]*$/, ''))
              name: '' + item.name.replace(/-[^-]*$/, '')
            })
            crumb.path = this.$route.path
            // crumb.name = this.$i18n.t('route.' + this.$route.name, [
            //   crumb.path.match(/[^/]*$/)[0]
            // ])
            // crumb.name = crumb.path.match(/[^/]*$/)[0]
            crumb.name = decodeURI(crumb.path.match(/[^/]*$/)[0])
          }
          crumb.classes = 'is-active'
        }

        crumbs.push(crumb)
      })

      return crumbs
    }
  }
}
</script>

<style lang="scss" scoped>
.level-left{
  display:flex;
  align-items: center;
  ul{
    list-style: none;
    margin:0;
    padding:0;
    display:flex;
    li:before{
      content: '>',
    }
  }
  a{
    cursor: pointer;
    margin:.7em;
  }
}
</style>