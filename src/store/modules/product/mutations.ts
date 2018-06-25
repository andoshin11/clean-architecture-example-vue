import { MutationTree } from 'vuex'
import { ProductState, initialState } from './state'
import { Types, StoreItems, ClearItems } from './types'

export const mutations: MutationTree<ProductState> = {
  [Types.STORE_ITEMS]: (state, action: StoreItems) => {
    const { page, size, items } = action.payload
    state.page = page
    state.size = size
    state.items = items
  },
  [Types.CLEAR_ITEMS]: (state) => {
    const initial = initialState()
    state.items = initial.items
  }
}
