import { IProduct } from '@/entities/Product'

export interface ProductState {
  page: number
  size: number
  items: IProduct[]
}

export const initialState = (): ProductState => {
  return {
    page: 1,
    size: 20,
    items: []
  }
}
