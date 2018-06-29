import BaseUseCase from '@/usecases/BaseUseCase'
import { CartEntity } from '@/entities/Cart'
import { IProduct } from '@/entities/Product'
import ErrorService from '@/services/ErrorService'

export interface IAddItemToCartUseCase {
  cart: CartEntity;
  errorService: ErrorService
}

export default class AddItemToCartUseCase implements BaseUseCase {
  cart: CartEntity
  errorService: ErrorService

  constructor({ cart, errorService }: IAddItemToCartUseCase) {
    this.cart = cart
    this.errorService = errorService
  }

  async execute(item: IProduct) {
    try {
      this.cart.addItemToCart(item)
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
