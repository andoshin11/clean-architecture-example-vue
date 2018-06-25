import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from './mutations'
import { ProductState, initialState } from './state'

export * from './state'

export const store: Module<ProductState, RootState> = {
  state: initialState,
  mutations
}
