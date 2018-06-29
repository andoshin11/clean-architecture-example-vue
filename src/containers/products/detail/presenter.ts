import { IProduct } from '@/entities/Product'
import CartRepository from '@/repositories/CartRepository'
import ProductRepository from '@/repositories/ProductRepository'

export interface IPresenter {
  productRepository: ProductRepository
  cartRepository: CartRepository
}

export interface IPresenterState {
  item: IProduct
  isInCart: boolean
}

const isInCart = (productRepository: ProductRepository, cartRepository: CartRepository) => {
  const item = productRepository.getItem()
  const cartItems = cartRepository.getItems()

  const targetItem = cartItems.find(cartItem => cartItem.id === item.id)

  return targetItem ? true : false
}

export default ({ productRepository, cartRepository }: IPresenter): IPresenterState => {
  return {
    item: productRepository.getItem(), // TODO: Manage with ID
    isInCart: isInCart(productRepository, cartRepository)
  }
}
