<template>Weapons</template>
<script>
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import FilterControl from '../components/FilterControl.vue'

import { getWeapons } from '../services'

export default {
  name: 'Weapons',
  components: { Card, Spinner, FilterControl },
  data() {
    return {
      loading: false,
      weapons: []
    }
  },
  mounted() {
    this.loading = true
    getWeapons().then(weapons => {
      this.weapons = weapons
      this.loading = false
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
