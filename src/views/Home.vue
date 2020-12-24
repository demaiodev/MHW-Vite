<template>
  <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
    <div class="px-4 py-6 sm:px-0">
      <div class="flex flex-col items-center text-left">
        <div v-if="error">There was an error :/</div>
        <div v-if="loading" class="loading-box">
          <div><Spinner /></div>
        </div>
        <div
          v-else
          class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5"
        >
          <Card
            v-for="(monster, i) in monsters"
            :key="i"
            :name="monster.name"
            :image="monster.path"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'

import { getMonsters } from '../services'

export default {
  name: 'Home',
  components: { Card, Spinner },
  data() {
    return {
      error: false,
      loading: false,
      monsters: []
    }
  },
  mounted() {
    getMonsters().then(monsters => {
      this.monsters = monsters
    })
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
