import { eq } from "drizzle-orm";
import { blogPosts } from "../../drizzle/schema";
import { db } from "./index";
import type { BlogPost } from "../../drizzle/schema";

export const getPostData = async (id: number): Promise<BlogPost | undefined> => {
  const result = await db.select().from(blogPosts).where(eq(blogPosts.id, id)).limit(1);
  return result[0];
};

export const getSortedPostsData = async (): Promise<BlogPost[]> => {
  const result = await db.select().from(blogPosts).orderBy(blogPosts.createdAt);
  return result;
};
