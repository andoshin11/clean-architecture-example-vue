import CartRepository from '@/repositories/CartRepository'
import { ICartItem } from '@/entities/Cart'

export interface IPresenter {
  cartRepository: CartRepository
}

export interface IPresenterState {
  totalPrice: number,
  cartItems: ICartItem[]
}

const calcTotalPrice = (cartRepository: CartRepository): number => {
  const cartItems = cartRepository.getItems()
  const totalPrice = cartItems.reduce((prev, current) => {
    return prev + current.price
  }, 0)

  return totalPrice
}

export default ({cartRepository}: IPresenter): IPresenterState => {
  return {
    totalPrice: calcTotalPrice(cartRepository),
    cartItems: cartRepository.getItems()
  }
}
