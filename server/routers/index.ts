import { router } from "../_core/trpc.js";
import { blogRouter } from "./blog.js";

export const appRouter = router({
  blog: blogRouter,
});

export type AppRouter = typeof appRouter;
