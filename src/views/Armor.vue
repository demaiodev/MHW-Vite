<template>Armor</template>
<script>
import Card from '../components/Card.vue'
import Spinner from '../components/Spinner.vue'
import FilterControl from '../components/FilterControl.vue'

import { getArmor } from '../services'

export default {
  name: 'Armor',
  components: { Card, Spinner, FilterControl },
  data() {
    return {
      loading: false,
      armor: []
    }
  },
  mounted() {
    getArmor().then(armor => {
      this.armor = armor
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