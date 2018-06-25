import Vue from "vue";
import Vuex from "vuex";

// modules
import * as product from '@/store/modules/product'

Vue.use(Vuex);

export interface RootState {
  product: product.ProductState
}

export default new Vuex.Store<RootState>({
  modules: {
    product: product.store
  }
})
