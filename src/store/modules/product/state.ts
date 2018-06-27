import { IProduct } from '@/entities/Product'

export interface ProductState {
  page: number
  size: number
  items: IProduct[]
  item: IProduct | null
}

export const initialState = (): ProductState => {
  return {
    page: 1,
    size: 20,
    items: [],
    item: null
  }
}
