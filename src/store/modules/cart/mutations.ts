import { MutationTree } from 'vuex'
import { CartState, initialState } from './state'
import { Types, AddItem, SetCheckingOut } from './types'

export const mutations: MutationTree<CartState> = {
  [Types.ADD_ITEM]: (state, action: AddItem) => {
    const item = action.payload
    state.cart = {
      items: [
        ...state.cart.items,
        item
      ]
    }
  },
  [Types.SET_CHECKING_OUT]: (state, action: SetCheckingOut) => {
    state.isCheckingOut = action.payload
  },
  [Types.CLEAR_ITEMS]: (state) => {
    const initial = initialState().cart.items

    state.cart.items = [...initial]
  }
}
