import { ICartItem } from '@/entities/Cart'
import CartRepository from '@/repositories/CartRepository'

export interface IPresenter {
  cartRepository: CartRepository
}

export interface IPresenterState {
  items: ICartItem[],
  isEmpty: boolean,
  isCheckingOut: boolean
}

export default ({ cartRepository }: IPresenter): IPresenterState => {
  const items = cartRepository.getItems()
  return {
    items,
    isEmpty: !items || items.length == 0,
    isCheckingOut: cartRepository.isCheckingOut()
  }
}
