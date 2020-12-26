<template>
  <button
    v-if="getIconPath"
    class="tooltip w-8 h-8 m-2 border transform hover:scale-125 motion-reduce:transform-none shadow-md"
  >
    <img :src="getIconPath" :alt="source" />
    <p class="tooltip-text bg-green-100 rounded p-3 -mt-16 -mr-12">
      {{ source }}
    </p>
  </button>
</template>
<script>
import { iconMap } from '../maps/icon-map'

export default {
  name: 'Icon',
  props: {
    source: String
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
.tooltip .tooltip-text {
  visibility: hidden;
  text-align: center;
  padding: 2px 6px;
  position: absolute;
  z-index: 100;
}
.tooltip:hover .tooltip-text {
  visibility: visible;
  text-transform: capitalize;
}
</style>