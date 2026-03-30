import { eq } from "drizzle-orm";
import { users } from "../../drizzle/schema";
import { db } from "./index";
import type { User, InsertUser } from "../../drizzle/schema";

export const getUserByOpenId = async (openId: string): Promise<User | undefined> => {
  const result = await db.select().from(users).where(eq(users.openId, openId)).limit(1);
  return result[0];
};

export const upsertUser = async (user: InsertUser): Promise<void> => {
  await db.insert(users).values(user).onDuplicateKeyUpdate({ set: user });
};
