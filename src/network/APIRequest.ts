import { HTTPMethod } from '@/network/APIClient';
import { APIResponse } from '@/network/APIResponse';

export type APIRequest<R extends APIResponse> = {
  response: R;
  path: string;
  method: HTTPMethod;
  params?: any;
  baseURL?: string;
  parse?: (data: any) => R;
};
