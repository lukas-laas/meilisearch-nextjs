import { pgTable, text, uuid } from "drizzle-orm/pg-core";

export const developers = pgTable("developers", {
  id: uuid("id").defaultRandom().primaryKey(),
  name: text("name").notNull(),
  role: text("role").notNull(),
  status: text("status").notNull(),
});
