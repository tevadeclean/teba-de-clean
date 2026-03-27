import { z } from "zod";
import { publicProcedure, router } from "../_core/trpc.js";
import { getSortedPostsData, getPostData } from "../lib/posts";

export const blogRouter = router({
  list: publicProcedure
    .input(z.object({ category: z.string().optional() }))
    .query(({ input }) => {
      return getSortedPostsData(input.category);
    }),
  get: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await getPostData(input.id);
    }),
});
