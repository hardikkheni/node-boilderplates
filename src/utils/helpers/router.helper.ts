import type { RequestHandler, Router } from 'express';
import type { z } from 'zod';

import { validator } from '@/utils/helpers/validator.helper';

export type GetRouteOption<Param extends z.ZodRawShape, Query extends z.ZodRawShape> = {
  path: string;
  params?: z.ZodObject<Param>;
  query?: z.ZodObject<Query>;
  handlers: RequestHandler<
    z.infer<z.ZodObject<Param>>,
    any,
    any,
    z.infer<z.ZodObject<Query>>
  >[];
};

export type PostRouteOption<Param extends z.ZodRawShape, Query extends z.ZodRawShape, Body extends z.ZodRawShape> = {
  path: string;
  params?: z.ZodObject<Param>;
  query?: z.ZodObject<Query>;
  body?: z.ZodObject<Body>;
  handlers: RequestHandler<
    z.infer<z.ZodObject<Param>>,
    any,
    z.infer<z.ZodObject<Body>>,
    z.infer<z.ZodObject<Query>>
  >[];
};

function get<Param extends z.ZodRawShape = any, Query extends z.ZodRawShape = any>(router: Router, {
  path,
  params,
  query,
  handlers,
}: GetRouteOption<Param, Query>) {
  if (params) {
    handlers.unshift(validator(params, 'params'));
  }
  if (query) {
    handlers.unshift(validator(query, 'query'));
  }
  router.get(path, ...handlers);
}

function post<Param extends z.ZodRawShape = any, Query extends z.ZodRawShape = any, Body extends z.ZodRawShape = any>(router: Router, {
  path,
  params,
  query,
  body,
  handlers,
}: PostRouteOption<Param, Query, Body>) {
  if (params) {
    handlers.unshift(validator(params, 'params'));
  }
  if (query) {
    handlers.unshift(validator(query, 'query'));
  }
  if (body) {
    handlers.unshift(validator(body, 'body'));
  }
  router.post(path, ...handlers);
}

export {
  get,
  post,
};
