declare interface PaginationRequest<R> {
  page: number;
  size: number;
  criteria: R;
}
