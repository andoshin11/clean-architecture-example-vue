import { RootState } from '@/store'
import { IProduct } from '@/entities/Product'

export interface IPresenter {
  item: IProduct
}

// Maybe: use generics?
export default (state: RootState): IPresenter => {
  return {
    item: state.product.item
  }
}
