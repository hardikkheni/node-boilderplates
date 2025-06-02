import { integer, timestamp } from 'drizzle-orm/pg-core';

import { usersTable } from '@/db/schema';

export const primaryKey = integer().primaryKey().generatedAlwaysAsIdentity();

export const timestamps = {
  updatedAt: timestamp(),
  createdAt: timestamp().defaultNow().notNull(),
} as const;

export const baseTable = {
  id: primaryKey,
  ...timestamps,
} as const;

export const deletableTable = {
  ...baseTable,
  deletedAt: timestamp(),
} as const;

export const userIdKey = { userId: integer().references(() => usersTable.id) };
