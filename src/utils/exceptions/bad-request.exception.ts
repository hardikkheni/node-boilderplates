import { StatusCodes } from 'http-status-codes';

import BaseException from '@/utils/exceptions/base.exception';

export default class BaseReqestException extends BaseException {
  constructor(message: string, readonly errors: Record<string, any>) {
    super(message, StatusCodes.BAD_REQUEST);
  }
}
