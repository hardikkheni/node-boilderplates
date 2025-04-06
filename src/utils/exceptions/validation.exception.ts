import { StatusCodes } from 'http-status-codes';

import BaseException from '@/utils/exceptions/base.exception';

export default class ValidationException extends BaseException {
  constructor(message: string, errors: Record<string, any>) {
    super(message, StatusCodes.UNPROCESSABLE_ENTITY, errors);
  }
}
