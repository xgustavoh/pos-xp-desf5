export type DiscountType = 'PERCENTAGE' | 'FIXED'

export interface IProduct {
  id: number
  name: string
  description: string
  price: number
  discount?: number
  discountType?: DiscountType
  stock: number
  createdAt: Date
  updatedAt?: Date
}

export type IProductUpsert = Omit<IProduct, 'id' | 'createdAt' | 'updatedAt'>
