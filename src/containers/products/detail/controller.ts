import AddItemToCartUseCase, { IAddItemToCartUseCase } from '@/usecases/AdditemToCartUseCase'
import { CartEntity } from '@/entities/Cart'
import errorService from '@/services/ErrorService'
import { IPresenter } from './presenter'

export default (presenter: IPresenter) => ({
  async addItemToCart() {
    const params: IAddItemToCartUseCase = {
      cart: new CartEntity,
      errorService: new errorService({
        context: 'Adding the item to cart'
      })
    }
  }
})