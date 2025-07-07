export interface ErrorDetail {
  field: string;
  issue: string;
}

export class ErrorResponse {
  error: {
    code: string;
    message: string;
    details?: ErrorDetail[];
    traceId?: string;
  };

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
