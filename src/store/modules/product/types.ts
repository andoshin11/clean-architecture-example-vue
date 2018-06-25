import { IProduct } from '@/entities/Product'

export enum Types {
  STORE_ITEMS = 'product/store_items',
}

export class StoreItems implements FluxStandardAction {
  type = Types.STORE_ITEMS
  constructor(public payload: List<IProduct>){}
}
