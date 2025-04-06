export default class BaseException extends Error {
  constructor(message: string, readonly statusCode: number, readonly errors?: Record<string, any>) {
    super(message);
  }
}
