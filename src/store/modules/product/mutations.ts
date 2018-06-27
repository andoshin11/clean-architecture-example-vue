import { MutationTree } from 'vuex'
import { ProductState, initialState } from './state'
import { Types, StoreItems, StoreItem } from './types'

export const mutations: MutationTree<ProductState> = {
  [Types.STORE_ITEM]: (state, action: StoreItem) => {
    const item = action.payload
    state.item = item
  },
  [Types.CLEAR_ITEM]: (state) => {
    const initial = initialState()
    state.item = initial.item
  },
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
