<template>
  <button
    v-if="getIconPath"
    class="tooltip w-8 h-8 m-2 border transform hover:scale-125 motion-reduce:transform-none shadow-md"
  >
    <img :src="getIconPath" :alt="source" />
    <p
      class="tooltip-text bg-gray-800 text-gray-300 text-xs rounded p-3 -mt-12 -mr-12"
    >
      {{ source }}
    </p>
  </button>
</template>
<script>
import { computed } from 'vue'
import { iconMap } from '../maps/icon-map'

export default {
  name: 'Icon',
  props: {
    source: String
  },
  setup(props) {
    const getIconPath = computed(() => {
      const icon = iconMap.find(element => element.name === props.source)?.path
      if (icon) return `/assets/icons/${icon}`
    })
    return { getIconPath }
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
