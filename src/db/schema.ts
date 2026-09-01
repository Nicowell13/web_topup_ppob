import { pgTable, text, timestamp, integer, boolean, pgEnum } from "drizzle-orm/pg-core";

export const roleEnum = pgEnum("role", ["user", "admin"]);
export const transactionStatusEnum = pgEnum("transaction_status", ["PENDING", "PAID", "PROCESSING", "SUCCESS", "FAILED"]);

export const users = pgTable("users", {
  id: text("id").primaryKey(),
  email: text("email").notNull().unique(),
  name: text("name"),
  role: roleEnum("role").default("user").notNull(),
  points: integer("points").default(0).notNull(),
  streak: integer("streak").default(0).notNull(),
  lastLoginAt: timestamp("last_login_at"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

export const systemConfigs = pgTable("system_configs", {
  key: text("key").primaryKey(),
  value: text("value").notNull(),
  description: text("description"),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});
