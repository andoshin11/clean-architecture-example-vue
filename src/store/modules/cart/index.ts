import { Module } from 'vuex'
import { RootState } from '@/store'
import { mutations } from './mutations'
import { CartState, initialState } from './state'

export * from './state'

export const store: Module<CartState, RootState> = {
  state: initialState,
  mutations
}
