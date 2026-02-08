import { COOKIE_NAME } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { notifyOwner } from "./_core/notification";
import { sdk } from "./_core/sdk";

export const appRouter = router({
  system: systemRouter,
  auth: router({
    me: publicProcedure.query(opts => opts.ctx.user),
    login: publicProcedure
      .input(z.object({ password: z.string() }))
      .mutation(async ({ input, ctx }) => {
        const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "teba2024";
        if (input.password !== ADMIN_PASSWORD) {
          throw new Error("パスワードが正しくありません");
        }

        const adminOpenId = "admin-user-id";
        await db.upsertUser({
          openId: adminOpenId,
          name: "オーナー",
          role: "admin",
        });

        const sessionToken = await sdk.createSessionToken(adminOpenId, { name: "オーナー" });
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, sessionToken, cookieOptions);

        return { success: true, user: { name: "オーナー", role: "admin" } };
      }),
    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return { success: true };
    }),
  }),

  testimonials: router({
    list: publicProcedure.query(async () => db.getPublishedTestimonials()),
    listAll: protectedProcedure.query(async () => db.getAllTestimonials()),
    create: protectedProcedure
      .input(z.object({
        customerName: z.string(),
        rating: z.number(),
        comment: z.string(),
        serviceType: z.enum(["residential", "commercial"]),
        sourceLabel: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createTestimonial({ ...input, isPublished: 1 });
        return { success: true };
      }),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.deleteTestimonial(input.id);
        return { success: true };
      }),
  }),

  blog: router({
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }).optional())
      .query(async ({ input }) => db.getPublishedBlogPosts(input?.category)),
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => db.getBlogPostById(input.id)),
    listAll: protectedProcedure.query(async () => db.getAllBlogPosts()),
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        content: z.string(),
        category: z.string(),
        area: z.string().optional(),
        price: z.number().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        images: z.array(z.string()).optional(), // 複数画像対応
      }))
      .mutation(async ({ input }) => {
        await db.createBlogPost({ ...input, isPublished: 1 });
        return { success: true };
      }),
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
        category: z.string().optional(),
        area: z.string().optional(),
        price: z.number().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        images: z.array(z.string()).optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input }) => {
        const { id, ...data } = input;
        await db.updateBlogPost(id, data);
        return { success: true };
      }),
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input }) => {
        await db.deleteBlogPost(input.id);
        return { success: true };
      }),
  }),

  bookings: router({
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        phone: z.string(),
        serviceType: z.enum(["residential", "commercial"]),
        preferredDate: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createBooking(input);
        await notifyOwner({
          title: "新しい予約",
          content: `${input.name}様から予約が入りました。`,
        });
        return { success: true };
      }),
    list: protectedProcedure.query(async () => db.getAllBookings()),
  }),
});

export type AppRouter = typeof appRouter;
