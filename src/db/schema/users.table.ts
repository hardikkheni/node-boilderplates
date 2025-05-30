import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';

import { postsTable } from '@/db/schema/posts.table';
import { deletedTable } from '@/utils/constants/db.constant';

export const usersTable = pgTable('users', {
  ...deletedTable,
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});

export const usersTableRelations = relations(usersTable, ({ many }) => ({
  posts: many(postsTable),
}));
