<template>
  <div id="global-layout">
    <TakaroBanner />
    <ParentLayout />
  </div>
</template>

<script>
import ParentLayout from '@parent-theme/layouts/Layout.vue'
import TakaroBanner from '../components/TakaroBanner.vue'

export default {
  name: 'Layout',
  components: {
    ParentLayout,
    TakaroBanner
  }
}
</script>