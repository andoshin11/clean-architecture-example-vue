import { MutationTree } from 'vuex'
import { ProductState } from './state'
import { Types, StoreItems } from './types'

export const mutations: MutationTree<ProductState> = {
  [Types.STORE_ITEMS]: (state, action: StoreItems) => {
    const { page, size, items } = action.payload
    state.page = page
    state.size = size
    state.items = items
  }
}
