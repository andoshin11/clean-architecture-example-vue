export interface APIError {
  message: string;
  status: number;
  raw: Error;
}
