import { relations } from 'drizzle-orm';
import { pgTable, text, varchar } from 'drizzle-orm/pg-core';

import { usersTable } from '@/db/schema/users.table';
import { baseTable, userIdKey } from '@/utils/constants/db.constant';

export const postsTable = pgTable('posts', {
  ...baseTable,
  title: varchar({ length: 255 }).notNull(),
  content: text().notNull(),
  ...userIdKey,
});

export const postsTableRelations = relations(postsTable, ({ one }) => ({
  user: one(usersTable, {
    fields: [postsTable.userId],
    references: [usersTable.id],
  }),
}));
