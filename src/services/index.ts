import Axios from 'axios'

//Maps
import { monsterMap } from '../maps/monster-map'

//Interfaces
import Monster from '../models/interfaces/Monster'

//Enums
import { Endpoint } from '../models/enums/Endpoint'

const BASE_URL = 'https://mhw-db.com'
const instance = Axios.create({
  baseURL: BASE_URL
})

const getAll = async (endpoint: Endpoint) => {
  const response = instance.get(`/${endpoint}`).then(res => res.data)
  return response
}

const getAilments = async () => {
  const ailments = await getAll(Endpoint.Ailments)
  return ailments
}

const getArmor = async () => {
  const armor = await getAll(Endpoint.Armor)
  return armor
}

const fetchMonsters = async () => {
  const monsters = await getAll(Endpoint.Monsters)
  return mapMonsters(monsters)
}

const getWeapons = async () => {
  const weapons = await getAll(Endpoint.Weapons)
  return weapons
}

const getSpecific = async (endpoint: Endpoint, param: number | string) => {
  const response = instance.get(`/${endpoint}/${param}`).then(res => res.data)
  return response
}

const mapMonsters = async (monsters: Monster[]) => {
  const mapped = monsters.map((monster: Monster) => {
    monster.path = `/assets/monster-images/${
      monsterMap.find(map => monster.id === map.id).path
    }`
    return monster
  })
  return mapped
}

export { getAilments, getArmor, fetchMonsters, getWeapons, getSpecific }
