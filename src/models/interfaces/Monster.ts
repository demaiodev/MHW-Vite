// Interfaces
import Ailment from './Ailment'
import Location from './Location'
import Resistance from './Resistance'
import Weakness from './Weakness'
import Reward from './Reward'

// Enums
import { Size } from '../enums/Size'
import { Element } from '../enums/Element'
import { Species } from '../enums/Species'

export default interface Monster {
  id: number
  type: Size
  species: Species
  elements: Element[]
  name: string
  description: string
  ailments: Ailment[]
  locations: Location[]
  resistances: Resistance[]
  weaknesses: Weakness[]
  rewards: Reward[]
  path: string
}
