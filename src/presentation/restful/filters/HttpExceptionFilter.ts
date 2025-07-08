// 1. Import
import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponse } from '../dto/response/errorResponse.dto';

// 2. Global exception filter to handle all errors
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp(); // get HTTP context
    const response = ctx.getResponse<Response>(); // get response object

    // 2.1. Determine status code
    const status =
      exception instanceof HttpException
        ? exception.getStatus() // use status from exception
        : HttpStatus.INTERNAL_SERVER_ERROR; // fallback to 500

    // 2.2. Default error values
    let code = 'INTERNAL_ERROR';
    let message = 'Something went wrong';
    let details = undefined;

    // 2.3. If it's a known HttpException, extract info
    if (exception instanceof HttpException) {
      const res = exception.getResponse();
      if (typeof res === 'string') {
        message = res;
      } else {
        message = (res as any).message || message;
        details = (res as any).details;
        code = (res as any).code || 'RESOURCE_NOT_FOUND';
      }
    }

    // 2.4. Create and return custom error response
    const errorRes = new ErrorResponse(code, message, details);
    response.status(status).json(errorRes);
  }
}