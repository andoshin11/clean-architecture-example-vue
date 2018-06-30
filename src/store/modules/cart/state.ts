import { ICart } from '@/entities/Cart'

export interface CartState {
  cart: ICart,
  isCheckingOut: boolean
}

export const initialState = (): CartState => {
  return {
    cart: {
      items: []
    },
    isCheckingOut: false
  }
}
