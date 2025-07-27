export class SuccessResponse<T = undefined> {
  status: 'success';
  message: string;
  data?: T;

  constructor(message: string, data?: T) {
    this.status = 'success';
    this.message = message;
    if (data !== undefined) {
      this.data = data;
    }
  }
}