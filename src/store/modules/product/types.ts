import { IProduct } from '@/entities/Product'

export enum Types {
  STORE_ITEM = 'product/store_item',
  STORE_ITEMS = 'product/store_items',
  CLEAR_ITEMS = 'product/clear_items'
}

export class StoreItem implements FluxStandardAction {
  type = Types.STORE_ITEM
  constructor(public payload: IProduct){}
}

export class StoreItems implements FluxStandardAction {
  type = Types.STORE_ITEMS
  constructor(public payload: List<IProduct>){}
}

export class ClearItems implements FluxStandardAction {
  type = Types.CLEAR_ITEMS
}
