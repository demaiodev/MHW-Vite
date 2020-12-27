<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="flex flex-col items-center text-left">
        <div v-if="loading" class="loading-box">
          <div><Spinner /></div>
        </div>
        <template v-else>
          <FilterControl @filter="handleFilter" />
          <div
            class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"
          >
            <Card v-for="(monster, i) in monsters" :key="i" :source="monster" />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import FilterControl from '../components/FilterControl.vue'
import { ref, inject, onMounted, watch, defineComponent, Ref } from 'vue'
import { fetchMonsters } from '../services'
import { Size } from '../models/enums/Size'
import Monster from '../models/interfaces/Monster'

export default defineComponent({
  name: 'Monsters',
  components: { Card, Spinner, FilterControl },
  setup() {
    const getMonsters = inject('monsters')
    const loading = inject('loading')

    let monsters: Ref<Monster[]> = ref([])

    const setMonsters = () => {
      monsters.value = getMonsters()
    }
    watch(
      () => loading.value,
      () => setMonsters(),
      { immediate: true }
    )
    const handleFilter = (payload: {
      filter: string
      type: 'element | ailment'
    }) => {
      console.log(payload)
    }

    return { loading, monsters, handleFilter }
  }
})
</script>
<style scoped>
.loading-box {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
