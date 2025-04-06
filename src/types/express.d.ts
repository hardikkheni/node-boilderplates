namespace Express {
  type Request = {
    user?: any;
  };
  export type Response<ResBody = any, Locals extends Record<string, any> = Record<string, any>, StatusCode extends number = number> = {
    respond(statusCode: StatusCode, message: string, data?: ResBody): void;
  };
}
