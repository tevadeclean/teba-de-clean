import { eq } from "drizzle-orm";
import { posts } from "../../drizzle/schema";
import { db } from "./index";
import type { PostData } from "@shared/types";

export const getPostData = async (id: string): Promise<PostData | undefined> => {
  const result = await db.select().from(posts).where(eq(posts.id, id)).limit(1);
  return result[0];
};

export const getSortedPostsData = async (): Promise<PostData[]> => {
  const result = await db.select().from(posts).orderBy(posts.date);
  return result;
};
