// 1. Define a generic success response wrapper
export class SuccessResponse<T> {
  status: 'success'; 
  message: string;   
  data: T;          

  // 2. Constructor to assign message and data
  constructor(message: string, data: T) {
    this.status = 'success';
    this.message = message;
    this.data = data;
  }
}