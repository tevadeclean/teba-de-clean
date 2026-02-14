import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
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
    
    // パスワード認証用のエンドポイント
    loginWithPassword: publicProcedure
      .input(z.object({ password: z.string() }))
      .mutation(async ({ input, ctx }) => {
        // パスワードチェック（環境変数から取得、デフォルトは teba2026）
        const adminPassword = process.env.ADMIN_PASSWORD || "teba2026";
        
        if (input.password !== adminPassword) {
          throw new Error("パスワードが正しくありません");
        }

        // 管理者ユーザーをDBで確保（または作成）
        const adminOpenId = "admin_user_id";
        await db.upsertUser({
          openId: adminOpenId,
          name: "管理者",
          email: "admin@teva-de-clean.jp",
          loginMethod: "password",
          lastSignedIn: new Date(),
          role: 'admin', // 明示的に管理者権限を付与
        });

        // セッショントークンの作成
        const sessionToken = await sdk.createSessionToken(adminOpenId, {
          name: "管理者",
          expiresInMs: ONE_YEAR_MS,
        });

        // クッキーの設定
        const cookieOptions = getSessionCookieOptions(ctx.req);
        ctx.res.cookie(COOKIE_NAME, sessionToken, { ...cookieOptions, maxAge: ONE_YEAR_MS });

        return { success: true };
      }),

    logout: publicProcedure.mutation(({ ctx }) => {
      const cookieOptions = getSessionCookieOptions(ctx.req);
      ctx.res.clearCookie(COOKIE_NAME, { ...cookieOptions, maxAge: -1 });
      return {
        success: true,
      } as const;
    }),
  }),

  // お客様の声
  testimonials: router({
    list: publicProcedure.query(async () => {
      return db.getPublishedTestimonials();
    }),
    
    listAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new Error('Admin only');
      }
      return db.getAllTestimonials();
    }),
    
    create: protectedProcedure
      .input(z.object({
        customerName: z.string(),
        rating: z.number().min(1).max(5),
        comment: z.string(),
        serviceType: z.enum(["residential", "commercial"]),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.createTestimonial(input);
        return { success: true };
      }),
    
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        customerName: z.string().optional(),
        rating: z.number().min(1).max(5).optional(),
        comment: z.string().optional(),
        serviceType: z.enum(["residential", "commercial"]).optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        const { id, ...data } = input;
        await db.updateTestimonial(id, data);
        return { success: true };
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.deleteTestimonial(input.id);
        return { success: true };
      }),
  }),

  // 作業実績ブログ
  blog: router({
    list: publicProcedure
      .input(z.object({
        category: z.string().optional(),
      }).optional())
      .query(async ({ input }) => {
        return db.getPublishedBlogPosts(input?.category);
      }),
    
    getById: publicProcedure
      .input(z.object({ id: z.number() }))
      .query(async ({ input }) => {
        return db.getBlogPostById(input.id);
      }),
    
    listAll: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new Error('Admin only');
      }
      return db.getAllBlogPosts();
    }),
    
    create: protectedProcedure
      .input(z.object({
        title: z.string(),
        content: z.string(),
        category: z.enum([
          "residential_small",
          "residential_medium",
          "residential_large",
          "commercial_small",
          "commercial_medium",
          "commercial_large",
        ]),
        area: z.string().optional(),
        price: z.number().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.createBlogPost(input);
        return { success: true };
      }),
    
    update: protectedProcedure
      .input(z.object({
        id: z.number(),
        title: z.string().optional(),
        content: z.string().optional(),
        category: z.enum([
          "residential_small",
          "residential_medium",
          "residential_large",
          "commercial_small",
          "commercial_medium",
          "commercial_large",
        ]).optional(),
        area: z.string().optional(),
        price: z.number().optional(),
        location: z.string().optional(),
        imageUrl: z.string().optional(),
        isPublished: z.number().optional(),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        const { id, ...data } = input;
        await db.updateBlogPost(id, data);
        return { success: true };
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.deleteBlogPost(input.id);
        return { success: true };
      }),
  }),

  // 予約フォーム
  bookings: router({
    create: publicProcedure
      .input(z.object({
        name: z.string(),
        email: z.string().email().optional(),
        phone: z.string(),
        serviceType: z.enum(["residential", "commercial"]),
        preferredDate: z.string().optional(),
        message: z.string().optional(),
      }))
      .mutation(async ({ input }) => {
        await db.createBooking(input);
        
        // オーナーに通知
        await notifyOwner({
          title: "新しい予約が入りました",
          content: `お名前: ${input.name}\n電話番号: ${input.phone}\nサービス種別: ${input.serviceType === "residential" ? "家庭用" : "業務用"}\n希望日時: ${input.preferredDate || "未指定"}`,
        });
        
        return { success: true };
      }),
    
    list: protectedProcedure.query(async ({ ctx }) => {
      if (ctx.user.role !== 'admin') {
        throw new Error('Admin only');
      }
      return db.getAllBookings();
    }),
    
    updateStatus: protectedProcedure
      .input(z.object({
        id: z.number(),
        status: z.enum(["pending", "confirmed", "completed", "cancelled"]),
      }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.updateBookingStatus(input.id, input.status);
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
