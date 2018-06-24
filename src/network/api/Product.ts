import { APIRequest } from '@/network/APIRequest';
import { HTTPMethod } from '@/network/APIClient';
import { IProduct, IProductsCriteria } from '@/entities/Product'

export namespace ProductAPI {
  // List products
  export class GetProducts implements APIRequest<List<IProduct>> {
    response: List<IProduct>;
    path = '/api/products';
    method = HTTPMethod.GET;
    constructor(public params: PaginationRequest<IProductsCriteria>) {}
  }
}
