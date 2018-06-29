import { MutationTree } from 'vuex'
import { CartState } from './state'
import { Types, AddItem } from './types'

export const mutations: MutationTree<CartState> = {
  [Types.ADD_ITEM]: (state, action: AddItem) => {
    const item = action.payload
    state.cart = {
      items: [
        ...state.cart.items,
        item
      ]
    }
  }
}
