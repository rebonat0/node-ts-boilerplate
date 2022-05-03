export class PaginatorFactory<T> {
  public readonly query: T;

  public readonly page: number;

  public readonly perPage: number;

  constructor(query: T, page: number, perPage: number) {
    this.query = query;
    this.page = page;
    this.perPage = perPage;
  }
}
