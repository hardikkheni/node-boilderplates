import type { NextFunction, Request, Response } from 'express';
import type { z } from 'zod';

import { ValidationException } from '@/utils/exceptions';

export type ValidationPath = 'query' | 'body' | 'params';

export function validator(schema: z.ZodSchema<any>, path: ValidationPath = 'body') {
  return (req: Request, _res: Response, next: NextFunction) => {
    const result = schema.safeParse(req[path]);
    if (!result.success) {
      throw new ValidationException('Validation failed', result.error.flatten().fieldErrors);
    }
    req[path] = result.data;
    next();
  };
}
