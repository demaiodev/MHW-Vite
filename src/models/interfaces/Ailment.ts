export default interface Ailment {
  id: number
  name: string
  description: string
  recovery: {
    actions: string[]
    items: [
      {
        id: number
        rarity: number
        value: number
        carryLimit: number
        name: string
        description: string
      }
    ]
  }
  protection: { skills: any[]; items: any[] }
}
