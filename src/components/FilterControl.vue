<template>
  <strong class="text-xl">Filters</strong>
  <div class="flex items-center border shadow-md p-2">
    <div>
      <div class="flex flex-col">
        <div class="flex items-center">
          <strong>Element:</strong>
          <Icon
            v-for="element in elements"
            :key="element"
            :source="element"
            @click="handleFilter({ filter: element, type: 'element' })"
          />
        </div>
        <div class="flex items-center">
          <strong>Ailment:</strong>
          <Icon
            v-for="ailment in ailments"
            :key="ailment"
            :source="ailment"
            @click="handleFilter({ filter: ailment, type: 'ailment' })"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { onMounted, ref } from 'vue'
import Icon from '../components/Icon.vue'

import { Element } from '../models/enums/Element'
import { Ailment } from '../models/enums/Ailment'

export default {
  name: 'FilterControl',
  components: { Icon },
  emits: ['filter'],
  setup(_, { emit }) {
    const elements = ref([])
    const ailments = ref([])
    onMounted(() => {
      elements.value = Object.values(Element)
      ailments.value = Object.values(Ailment)
    })
    const handleFilter = payload => {
      emit('filter', payload)
    }
    return { elements, ailments, handleFilter }
  }
}
</script>
<style scoped></style>
