export class SuccessResponse<T> {
  status: 'success';
  message: string;
  data: T;

  constructor(message: string, data: T) {
    this.status = 'success';
    this.message = message;
    this.data = data;
  }
}