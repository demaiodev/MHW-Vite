export default interface Reward {
  id: number
  item: {
    id: number
    rarity: number
    carryLimit: number
    value: number
    name: string
    description: string
  }
  conditions: [
    {
      type: string
      rank: string
      quantity: number
      chance: number
      subtype: string
    }
  ]
}
