<template>
  <div id="global-layout">
    <TakaroBanner />
    <component :is="ParentLayout">
      <template v-for="(_, name) in $slots" v-slot:[name]="slotData">
        <slot :name="name" v-bind="slotData || {}" />
      </template>
    </component>
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