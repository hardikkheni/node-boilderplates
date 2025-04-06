import type { Request, Response } from 'express';

import type { InfoSchema } from '@/utils/validations';

export function test(_req: Request<InfoSchema, any, InfoSchema>, res: Response<InfoSchema>) {
  res.respond(200, 'success', {
    age: 123,
    name: 'test',
  });
}
