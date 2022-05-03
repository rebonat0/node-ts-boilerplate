export class PaginationFactory<T> {
  public readonly items: T[];

  public readonly page: number;

  public readonly perPage: number;

  public readonly total: number;

  constructor(items: T[], page: number, perPage: number, total: number) {
    this.items = items;
    this.page = page;
    this.perPage = perPage;
    this.total = total;
  }
}
