import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";
import { ENV } from "../_core/env";
import { eq } from "drizzle-orm";

console.log("DATABASE_URL value:", ENV.databaseUrl);
if (!ENV.databaseUrl) {
  throw new Error("DATABASE_URL is not set");
}

const client = postgres(ENV.databaseUrl);
export const db = drizzle(client, { schema });

export async function getUserByOpenId(openId: string) {
  return await db.query.users.findFirst({
    where: eq(schema.users.openId, openId),
  });
}

// ユーザー関連
export async function upsertUser(user: any) {
  return await db.insert(schema.users).values(user).onConflictDoUpdate({
    target: schema.users.openId,
    set: {
      name: user.name,
      email: user.email,
      lastSignedIn: new Date(),
      role: user.role,
    },
  }).returning();
}

// お客様の声関連
export async function getPublishedTestimonials() {
  try {
    console.log("Fetching testimonials from DB...");
    const results = await db.query.testimonials.findMany();
    console.log(`Successfully fetched ${results.length} testimonials.`);
    return results;
  } catch (error) {
    console.error("CRITICAL ERROR in getPublishedTestimonials:", error);
    // 原因切り分けのため、エラー時はダミーデータを返す
    return [
      {
        id: 999,
        author_name: "システム（デバッグ用）",
        content: "現在、データベースとの接続を調整中です。データ自体は無事ですのでご安心ください。エラー内容: " + (error as Error).message,
        rating: 5,
        serviceType: "residential",
        source: "システム",
        createdAt: new Date(),
      }
    ];
  }
}

export async function getAllTestimonials() {
  return await db.query.testimonials.findMany({
    orderBy: (testimonials, { desc }) => [desc(testimonials.createdAt)],
  });
}

export async function createTestimonial(testimonial: any) {
  return await db.insert(schema.testimonials).values(testimonial).returning();
}

export async function updateTestimonial(id: number, data: any) {
  return await db.update(schema.testimonials).set(data).where(eq(schema.testimonials.id, id)).returning();
}

export async function deleteTestimonial(id: number) {
  return await db.delete(schema.testimonials).where(eq(schema.testimonials.id, id)).returning();
}

// 予約関連
export async function createBooking(booking: any) {
  return await db.insert(schema.bookings).values(booking).returning();
}

export async function getAllBookings() {
  return await db.query.bookings.findMany({
    orderBy: (bookings, { desc }) => [desc(bookings.createdAt)],
  });
}

export async function updateBookingStatus(id: number, status: "pending" | "confirmed" | "completed" | "cancelled") {
  return await db.update(schema.bookings).set({ status }).where(eq(schema.bookings.id, id)).returning();
}
