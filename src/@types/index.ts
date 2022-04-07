export type Product = {
  id: string
  name: string
  price: string
  img: string
  status?: string
}

export type Order = {
  orderItems: Product[]
  name: string
  obs: string
  optionPayment: string
  moneyHand: string
  id: string
}