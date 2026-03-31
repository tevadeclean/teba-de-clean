import { pgTable, serial, text, timestamp, varchar, integer, pgEnum, decimal } from "drizzle-orm/pg-core";

/**
 * Core user table backing auth flow.
 */
export const roleEnum = pgEnum("role", ["user", "admin"]);

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  openId: varchar("openId", { length: 64 }).notNull().unique(),
  name: text("name"),
  email: varchar("email", { length: 320 }),
  loginMethod: varchar("loginMethod", { length: 64 }),
  role: roleEnum("role").default("user").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
  lastSignedIn: timestamp("lastSignedIn").defaultNow().notNull(),
});

export type User = typeof users.$inferSelect;
export type InsertUser = typeof users.$inferInsert;

/**
 * お客様の声テーブル
 */
export const serviceTypeEnum = pgEnum("service_type", ["residential", "commercial"]);

export const testimonials = pgTable("Testimonial", {
  id: serial("id").primaryKey(),
  author_name: varchar("author_name", { length: 100 }),
  rating: integer("rating"),
  content: text("content"),
  serviceType: varchar("serviceType", { length: 50 }),
  imageUrl: varchar("imageUrl", { length: 500 }),
  source: varchar("source", { length: 100 }).default("くらしのマーケット"),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updatedAt").defaultNow(),
});

export type Testimonial = typeof testimonials.$inferSelect;
export type InsertTestimonial = typeof testimonials.$inferInsert;

/**
 * 作業実績ブログテーブル
 */
export const blogCategoryEnum = pgEnum("blog_category", [
  "residential_small",    // 家庭用小規模（～20㎡）
  "residential_medium",   // 家庭用中規模（20～40㎡）
  "residential_large",    // 家庭用大規模（40㎡～）
  "commercial_small",     // 業務用小規模
  "commercial_medium",    // 業務用中規模
  "commercial_large",     // 業務用大規模
]);

export const blogPosts = pgTable("blogPosts", {
  id: serial("id").primaryKey(),
  title: varchar("title", { length: 255 }).notNull(),
  content: text("content").notNull(),
  category: blogCategoryEnum("category").notNull(),
  area: decimal("area", { precision: 6, scale: 2 }), // 作業面積（㎡）
  price: integer("price"), // 作業料金（円）
  location: varchar("location", { length: 100 }), // 作業場所（市町村名など）
  imageUrl: varchar("imageUrl", { length: 500 }), // 作業写真のURL
  isPublished: integer("isPublished").default(1).notNull(), // 1: 公開, 0: 非公開
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type BlogPost = typeof blogPosts.$inferSelect;
export type InsertBlogPost = typeof blogPosts.$inferInsert;

/**
 * 予約フォーム送信テーブル
 */
export const bookingStatusEnum = pgEnum("booking_status", ["pending", "confirmed", "completed", "cancelled"]);

export const bookings = pgTable("bookings", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 320 }),
  phone: varchar("phone", { length: 20 }).notNull(),
  serviceType: serviceTypeEnum("serviceType").notNull(),
  preferredDate: varchar("preferredDate", { length: 100 }), // 希望日時
  message: text("message"), // その他要望
  status: bookingStatusEnum("status").default("pending").notNull(),
  createdAt: timestamp("createdAt").defaultNow().notNull(),
  updatedAt: timestamp("updatedAt").defaultNow().notNull(),
});

export type Booking = typeof bookings.$inferSelect;
export type InsertBooking = typeof bookings.$inferInsert;
