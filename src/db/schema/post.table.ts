import { relations } from 'drizzle-orm';
import { integer, pgTable, varchar } from 'drizzle-orm/pg-core';
import { createSelectSchema } from 'drizzle-zod';

import { users } from '@/db/schema/user.table';

export const posts = pgTable('posts', {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  createdBy: integer().references(() => users.id).notNull(),
});

export const postRelations = relations(posts, ({ one }) => ({
  user: one(users, { fields: [posts.createdBy], references: [users.id] }),
}));

export const postSelectSchema = createSelectSchema(posts);
