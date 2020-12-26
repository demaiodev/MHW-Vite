<template>
  <div
    class="bg-white rounded-lg border shadow-xl transform hover:scale-105 motion-reduce:transform-none"
  >
    <h1 class="font-bold text-lg text-center text-gray-700">
      {{ source.name }}
    </h1>
    <div class="flex items-center justify-center">
      <Icon
        v-for="element in [
          ...source.elements,
          ...source.ailments.map(x => x.name)
        ]"
        :key="element"
        :source="element"
      />
    </div>
    <div class="p-8 mt-2 pt-0">
      <div>
        <img
          :src="source.path"
          :alt="source.name"
          style="height: 300px; width: 300px"
        />
      </div>
    </div>
    <!-- <div class="flex items-center">
      <span>Ailments: </span
      ><Icon
        v-for="ailment in source.ailments"
        :key="ailment.name"
        :source="ailment.name"
      />
    </div>
    <div class="flex items-center">
      <span>Resistances: </span
      ><Icon
        v-for="resistance in source.resistances"
        :key="resistance.name"
        :source="resistance.element"
      />
    </div>
    <div class="flex items-center">
      <span>Weaknesses: </span
      ><Icon
        v-for="weakness in source.weaknesses"
        :key="weakness.name"
        :source="weakness.element"
      />
    </div> -->
  </div>
</template>
<script>
import Icon from '../components/Icon.vue'
export default {
  name: 'Card',
  components: { Icon },
  props: {
    source: {
      type: Object
    }
  }
}
</script>
