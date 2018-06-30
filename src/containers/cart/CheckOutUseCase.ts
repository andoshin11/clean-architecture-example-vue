import BaseUseCase from '@/usecases/BaseUseCase'
import ErrorService from '@/services/ErrorService'
import { CartEntity } from '@/entities/Cart'

export interface ICheckOutUseCase {
  cart: CartEntity
  errorService: ErrorService
}

export default class CheckOutUseCase implements BaseUseCase {
  cart: CartEntity
  errorService: ErrorService

  constructor({ cart, errorService }: ICheckOutUseCase) {
    this.cart = cart
    this.errorService = errorService
  }

  async execute() {
    try {
      await this.cart.checkOut()
    } catch(e) {
      await this.errorService.handle(e)
    }
    return
  }
}
