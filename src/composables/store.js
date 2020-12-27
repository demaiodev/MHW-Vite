import { ref } from 'vue'

const loading = ref(false)
const monsters = ref([])

const setMonsters = val => {
  monsters.value = val
}

const getMonsters = () => {
  return monsters.value
}

const setLoading = val => {
  loading.value = val
}

export { loading, monsters, setMonsters, getMonsters, setLoading }
