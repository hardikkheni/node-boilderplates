import { z } from 'zod';

export const infoSchema = z.object({
  name: z.string(),
  age: z.number(),
});

export type InfoSchema = z.infer<typeof infoSchema>;
