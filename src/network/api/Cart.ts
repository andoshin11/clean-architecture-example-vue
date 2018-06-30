import { AxiosResponse } from 'axios'
import { APIRequest } from '@/network/APIRequest';
import { HTTPMethod } from '@/network/APIClient';
import { ICartItem } from '@/entities/Cart'

export interface CheckoutPayload {
  user?: any; // Client User Info
  items: ICartItem[];
  totalPrice: number
}

export namespace CartAPI {
  export class Checkout implements APIRequest<string> {
    response: string;
    path = '/api/checkout'
    method = HTTPMethod.POST
    parse = (data: AxiosResponse) => data.data
    constructor(public params: CheckoutPayload) {}
  }
}
