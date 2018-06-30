import { IProduct } from '@/entities/Product'
// import { APIClient } from '@/network/APIClient'
// import { CartAPI, CheckoutPayload } from '@/network/api/Cart'
import store from '@/store'
import { AddItem, SetCheckingOut, ClearItems } from '@/store/modules/cart/types'
import CartRepository from '@/repositories/CartRepository'

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

  async checkOut() {
    // Start operation
    store.commit(new SetCheckingOut(true))

    // communicate with server
    // const items = store.state.cart.cart.items
    // const totalPrice = items.reduce((prev, current) => prev + current.checkoutPrice, 0)
    // const params: CheckoutPayload = {
    //   user: "hoge",
    //   items,
    //   totalPrice
    // }
    // const response = await APIClient.shared.request(new CartAPI.Checkout(params))
    // if (response === 'error') throw new Error()

    setTimeout(() => {
      store.commit(new ClearItems())
      store.commit(new SetCheckingOut(false))
    }, 2000) // for dev-use

    return
  }
}
