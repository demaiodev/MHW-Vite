import Axios from 'axios'
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

const getMonsters = async () => {
  const res = instance.get('/monsters').then(x => console.log(x.data))
  return res
}

export { getAilments, getArmor, getMonsters, genericGet }
