export class PaginationModel<T> {
  constructor(
    public content: T,
    public totalPages: number,
    public totalElements: number,
    public size: number,
    public number: number,
    public prevPage: number,
    public nextPage: number
  ) {
  }
}
