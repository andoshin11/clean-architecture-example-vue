import axios from 'axios';
import { NetworkClient } from './NetworkClient';
import { APIResponse } from './APIResponse';
import { APIRequest } from './APIRequest';
import { APIError } from './APIError';

export enum HTTPMethod {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT'
}

// APIClient is client class for xhr request
export class APIClient implements NetworkClient {
  static shared = new APIClient();

  // Base fqdn for api endpoints
  baseURL: string = 'http://localhost:4000/v1';
  // Timeout duration
  timeout: number = 15 * 1000;

  request<U extends APIResponse>(request: APIRequest<U>): Promise<U> {
    const isRead = request.method === HTTPMethod.GET;

    return new Promise<U>((resolve, reject) => {
      axios
        .request({
          url: request.path,
          method: request.method,
          params: isRead && request.params,
          data: !isRead && request.params,
          withCredentials: true,
          timeout: this.timeout,
          baseURL: request.baseURL || this.baseURL,
          headers: this.createHeaders()
        })
        .then(data => {
          const response = request.parse
            ? request.parse(data)
            : this.parse<U>(data);
          resolve(response);
        })
        .catch(err => {
          const apiError = this.normalizeError(err);
          reject(apiError);
        });
    });
  }

  // Default parser
  private parse<U extends APIResponse>(data: any): U {
    return data;
  }

  // Convert axios error into APIError
  private normalizeError(error: any): APIError {
    return {
      status: error.response && error.response.status,
      message: error.message,
      raw: error
    };
  }

  // Create headers
  private createHeaders(): any {
    return {};
  }
}
