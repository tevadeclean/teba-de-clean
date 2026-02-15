import { z } from "zod";
import { t } from "../_core/trpc";
import { getSortedPostsData, getPostData } from "../lib/posts";

export const blogRouter = t.router({
  list: t.procedure
    .query(() => {
      return getSortedPostsData();
    }),
  get: t.procedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return await getPostData(input.id);
    }),
});
