import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "../../drizzle/schema";
import { ENV } from "../_core/env";
import { eq } from "drizzle-orm";

// Vercelのサーバーレス環境では、リクエストごとに接続が作られるため、
// 接続を再利用するように設定します。
let client: any;
let dbInstance: any;

function getDb() {
  if (!dbInstance) {
    console.log("Initializing database connection...");
    if (!ENV.databaseUrl) {
      throw new Error("DATABASE_URL is not set in environment variables.");
    }
    // 接続オプションを調整（SSL必須、タイムアウト設定など）
    client = postgres(ENV.databaseUrl, { 
      ssl: 'require',
      max: 1, // サーバーレス環境では1リクエスト1接続が基本
      idle_timeout: 20,
      connect_timeout: 10
    });
    dbInstance = drizzle(client, { schema });
  }
  return dbInstance;
}

export const db = {
  get query() { return getDb().query; },
  insert: (...args: any[]) => getDb().insert(...args),
  update: (...args: any[]) => getDb().update(...args),
  delete: (...args: any[]) => getDb().delete(...args),
  getPublishedTestimonials,
  getAllTestimonials,
  createTestimonial,
  updateTestimonial,
  deleteTestimonial,
  getUserByOpenId,
  upsertUser,
  createBooking,
  getAllBookings,
  updateBookingStatus
};

async function getUserByOpenId(openId: string) {
  return await getDb().query.users.findFirst({
    where: eq(schema.users.openId, openId),
  });
}

// ユーザー関連
async function upsertUser(user: any) {
  return await getDb().insert(schema.users).values(user).onConflictDoUpdate({
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
async function getPublishedTestimonials() {
  try {
    console.log("Fetching testimonials from DB...");
    const results = await getDb().query.testimonials.findMany();
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

async function getAllTestimonials() {
  return await getDb().query.testimonials.findMany({
    orderBy: (testimonials: any, { desc }: any) => [desc(testimonials.createdAt)],
  });
}

async function createTestimonial(testimonial: any) {
  return await getDb().insert(schema.testimonials).values(testimonial).returning();
}

async function updateTestimonial(id: number, data: any) {
  return await getDb().update(schema.testimonials).set(data).where(eq(schema.testimonials.id, id)).returning();
}

async function deleteTestimonial(id: number) {
  return await getDb().delete(schema.testimonials).where(eq(schema.testimonials.id, id)).returning();
}

// 予約関連
async function createBooking(booking: any) {
  return await getDb().insert(schema.bookings).values(booking).returning();
}

async function getAllBookings() {
  return await getDb().query.bookings.findMany({
    orderBy: (bookings: any, { desc }: any) => [desc(bookings.createdAt)],
  });
}

async function updateBookingStatus(id: number, status: "pending" | "confirmed" | "completed" | "cancelled") {
  return await getDb().update(schema.bookings).set({ status }).where(eq(schema.bookings.id, id)).returning();
}
