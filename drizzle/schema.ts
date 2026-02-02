import { int, mysqlEnum, mysqlTable, text, timestamp, varchar, decimal } from "drizzle-orm/mysql-core";

/**
 * Core user table backing auth flow.
 * Extend this file with additional tables as your product grows.
 * Columns use camelCase to match both database fields and generated types.
 */
export const users = mysqlTable("users", {
  /**
   * Surrogate primary key. Auto-incremented numeric value managed by the database.
   * Use this for relations between tables.
   */
  id: int("id").autoincrement().primaryKey(),
  /** Manus OAuth identifier (openId) returned from the OAuth callback. Unique per user. */
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: mysqlEnum("role", ["user", "admin"]).default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * お客様の声テーブル
 */
export const testimonials = mysqlTable("testimonials", {
  id: int("id").autoincrement().primaryKey(),
  customerName: varchar("customerName", { length: 100 }).notNull(),
  rating: int("rating").notNull(), // 1-5の評価
  comment: text("comment").notNull(),
  serviceType: mysqlEnum("serviceType", ["residential", "commercial"]).notNull(), // 家庭用 or 業務用
  isPublished: int("isPublished").default(1).notNull(), // 1: 公開, 0: 非公開
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * 作業実績ブログテーブル
 */
export const blogPosts = mysqlTable("blogPosts", {
  id: int("id").autoincrement().primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  category: mysqlEnum("category", [
    "residential_small",    // 家庭用小規模（～20㎡）
    "residential_medium",   // 家庭用中規模（20～40㎡）
    "residential_large",    // 家庭用大規模（40㎡～）
    "commercial_small",     // 業務用小規模
    "commercial_medium",    // 業務用中規模
    "commercial_large",     // 業務用大規模
  ]).notNull(),
  area: decimal("area", { precision: 6, scale: 2 }), // 作業面積（㎡）
  price: int("price"), // 作業料金（円）
  location: varchar("location", { length: 100 }), // 作業場所（市町村名など）
  imageUrl: varchar("imageUrl", { length: 500 }), // 作業写真のURL
  isPublished: int("isPublished").default(1).notNull(), // 1: 公開, 0: 非公開
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * 予約フォーム送信テーブル
 */
export const bookings = mysqlTable("bookings", {
  id: int("id").autoincrement().primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }).notNull(),
  serviceType: mysqlEnum("serviceType", ["residential", "commercial"]).notNull(),
  preferredDate: varchar("preferredDate", { length: 100 }), // 希望日時
  message: text("message"), // その他要望
  status: mysqlEnum("status", ["pending", "confirmed", "completed", "cancelled"]).default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().onUpdateNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;
