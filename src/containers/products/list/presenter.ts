import { RootState } from '@/store'
import { IProduct } from '@/entities/Product'

export interface IPresenter {
  items: IProduct[]
}

// Maybe: use generics?
export default (state: RootState): IPresenter => {
  return {
    items: state.product.items
  }
}
