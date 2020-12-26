<template>
  <div class="flex items-center">
    <strong class="text-xl">Sort:</strong>
    <!-- Elements -->
    <Icon v-for="element in elements" :key="element" :source="element" />
    <!-- Ailments -->
    <Icon v-for="ailment in ailments" :key="ailment" :source="ailment" />
  </div>
</template>
<script>
import Icon from '../components/Icon.vue'

import { Element } from '../models/enums/Element'
import { Ailment } from '../models/enums/Ailment'

export default {
  name: 'FilterControl',
  components: { Icon },
  data() {
    return {
      elements: [],
      ailments: []
    }
  },
  mounted() {
    this.elements = Object.values(Element)
    this.ailments = Object.values(Ailment)
  }
}
</script>
<style scoped>
</style>