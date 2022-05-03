export class PresenterFactory<T> {
  public readonly result: T;

  public readonly message?: string;

  public readonly isValid: boolean;

  constructor(data: T, isValid: boolean, message?: string) {
    this.result = data;
    this.message = message;
    this.isValid = isValid;
  }
}
