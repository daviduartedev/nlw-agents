import { pgTable, text, uuid, timestamp } from "drizzle-orm/pg-core";

export const rooms = pgTable('rooms', {
    id: uuid('id').primaryKey().defaultRandom(),
    namet: text('namet').notNull(),
    description: text('description'),
    createdAt: timestamp('created_at').defaultNow().notNull()
})