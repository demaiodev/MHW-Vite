<template>
  <button
    v-if="getIconPath"
    class="w-8 h-8 m-2 border transform hover:scale-110 motion-reduce:transform-none"
  >
    <img :src="getIconPath" :alt="source" />
  </button>
</template>
<script>
import { iconMap } from '../maps/icon-map'

export default {
  name: 'Icon',
  props: {
    source: {
      type: String
    }
  },
  computed: {
    getIconPath() {
      const icon = iconMap.find(element => element.name === this.source)?.path
      if (icon) return `/assets/icons/${icon}`
    }
  }
}
</script>
<style scoped>
</style>