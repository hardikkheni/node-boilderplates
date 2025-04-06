import type { Response } from 'express';
import type { StatusCodes } from 'http-status-codes';

export function respond(
  this: Response,
  statusCode: StatusCodes,
  message: string,
  data?: any,
) {
  this.status(statusCode).json({
    message,
    data,
  });
}
