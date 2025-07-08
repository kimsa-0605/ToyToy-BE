// 1. Define a type for detailed error info
export interface ErrorDetail {
  field: string; 
  issue: string;
}

// 2. Define a structured error response
export class ErrorResponse {
  error: {
    code: string;          
    message: string;       
    details?: ErrorDetail[]; 
    traceId?: string;      
  };

  // 3. Constructor to initialize the error response
  constructor(
    code: string,
    message: string,
    details?: ErrorDetail[],
  ) {
    this.error = {
      code,
      message,
      details,
    };
  }
}
