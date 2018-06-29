import { ICart } from '@/entities/Cart'

export interface CartState {
  cart: ICart
}

export const initialState = (): CartState => {
  return {
    cart: {
      items: []
    }
  }
}
