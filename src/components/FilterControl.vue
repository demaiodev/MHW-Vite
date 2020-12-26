<template>
  <strong class="text-xl">Filters</strong>
  <div class="flex items-center border shadow-md p-2">
    <div>
      <div class="flex flex-col">
        <div class="flex items-center">
          <strong>Element:</strong>
          <Icon v-for="element in elements" :key="element" :source="element" />
        </div>
        <div class="flex items-center">
          <strong>Ailment:</strong>
          <Icon v-for="ailment in ailments" :key="ailment" :source="ailment" />
        </div>
      </div>
    </div>
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