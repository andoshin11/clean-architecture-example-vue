import { ICartItem } from '@/entities/Cart'

export enum Types {
  ADD_ITEM = 'cart/add_item'
}

export class AddItem implements FluxStandardAction {
  type = Types.ADD_ITEM
  constructor(public payload: ICartItem){}
}
