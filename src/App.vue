<template>
  <NavBar />
  <router-view></router-view>
</template>

<script>
import { reactive, provide, readonly } from 'vue'
import NavBar from './components/NavBar.vue'
import {
  monsters,
  loading,
  setMonsters,
  setLoading,
  getMonsters
} from './composables/store'
import { fetchMonsters } from './services'
export default {
  name: 'App',
  components: {
    NavBar
  },
  setup() {
    setLoading(true)
    fetchMonsters().then(monsters => {
      setMonsters(monsters)
      setLoading(false)
    })

    provide('monsters', getMonsters)
    provide('loading', readonly(loading))
  }
}
</script>
