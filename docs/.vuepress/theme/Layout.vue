<template>
  <div id="global-layout">
    <TakaroBanner />
    <component :is="layout"/>
  </div>
</template>

<script>
import TakaroBanner from '../components/TakaroBanner.vue'

export default {
  name: 'Layout',
  components: {
    TakaroBanner
  },
  computed: {
    layout () {
      if (this.$page.path) {
        if (this.$frontmatter.layout) {
          // You can also check whether layout exists first as the default global layout does.
          return this.$frontmatter.layout
        }
        return 'Layout'
      }
      return 'NotFound'
    }
  }
}
</script>