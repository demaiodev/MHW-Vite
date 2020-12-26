<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="flex flex-col items-center text-left">
        <div v-if="loading" class="loading-box">
          <div><Spinner /></div>
        </div>
        <template v-else>
          <FilterControl />
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
<script>
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import FilterControl from '../components/FilterControl.vue'
import { onMounted, ref } from 'vue'

import { getMonsters } from '../services'
import { Size } from '../models/enums/Size'

export default {
  name: 'Monsters',
  components: { Card, Spinner, FilterControl },
  setup() {
    const loading = ref(false)
    const monsters = ref([])
    onMounted(() => {
      loading.value = true
      getMonsters().then(allMonsters => {
        // we'll do something else with small monsters later
        monsters.value = allMonsters.filter(
          monster => monster.type === Size.Large
        )
        loading.value = false
      })
    })

    return { loading, monsters }
  }
}
</script>
<style scoped>
.loading-box {
  min-height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
