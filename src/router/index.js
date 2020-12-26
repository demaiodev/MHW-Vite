import { createRouter, createWebHistory } from 'vue-router'
import Monsters from '../views/Monsters.vue'
import Weapons from '../views/Weapons.vue'
import Armor from '../views/Armor.vue'

const routes = [
  {
    path: '/',
    name: 'monsters',
    component: Monsters
  },
  {
    path: '/weapons',
    name: 'weapons',
    component: Weapons
  },
  {
    path: '/armor',
    name: 'armor',
    component: Armor
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router
