import { ICartItem } from '@/entities/Cart'

export enum Types {
  ADD_ITEM = 'cart/add_item',
  CLEAR_ITEMS = 'cart/clear_items',
  SET_CHECKING_OUT = 'cart/set_checking_out'
}

export class AddItem implements FluxStandardAction {
  type = Types.ADD_ITEM
  constructor(public payload: ICartItem){}
}

export class SetCheckingOut implements FluxStandardAction {
  type = Types.SET_CHECKING_OUT
  constructor(public payload: boolean){}
}

export class ClearItems implements FluxStandardAction {
  type = Types.CLEAR_ITEMS
}
