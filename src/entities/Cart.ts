import { IProduct } from '@/entities/Product'
import store from '@/store'
import { AddItem } from '@/store/modules/cart/types'

export interface ICartItem extends IProduct {
  checkoutPrice: number;
}

export interface ICart {
  items: ICartItem[]
}

export class CartEntity {
  constructor() {}

  addItemToCart(item: IProduct) {
    // do some price calculation.
    const checkoutPrice = item.price * 1.08
    const cartItem = {
      ...item,
      checkoutPrice
    }
    store.commit(new AddItem(cartItem))
  }
}
