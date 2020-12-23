import Axios from 'axios'

import { monsterMap } from '../maps/monster-map'

const mapMonsters = monsters => {
  const mapped = monsters.map(monster => {
    monster.path = `/public/assets/monster-images/${
      monsterMap.find(map => monster.id === map.id).path
    }`
    return monster
  })
  return mapped
}

const BASE_URL = 'https://mhw-db.com'
const instance = Axios.create({
  baseURL: BASE_URL
})

const genericGet = async endpoint => {
  const res = instance.get(`/${endpoint}`).then(x => console.log(x))
  return res
}

const getAilments = async () => {
  const res = instance.get('/ailments').then(x => console.log(x))
  return res
}

const getArmor = async () => {
  const res = instance.get('/armor').then(x => console.log(x))
  return res
}

const getAllMonsters = async () => {
  const { data } = await instance.get('/monsters')
  return mapMonsters(data)
}

export { getAilments, getArmor, getAllMonsters, genericGet }
