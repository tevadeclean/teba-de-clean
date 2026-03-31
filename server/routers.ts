import { COOKIE_NAME, ONE_YEAR_MS } from "@shared/const";
import { getSessionCookieOptions } from "./_core/cookies";
import { systemRouter } from "./_core/systemRouter";
import { publicProcedure, protectedProcedure, router } from "./_core/trpc";
import { z } from "zod";
import * as db from "./db";
import { notifyOwner } from "./_core/notification";
import { sdk } from "./_core/sdk";
import nodemailer from "nodemailer";
import { ENV } from "./_core/env";
import { getSortedPostsData, getPostData } from "./lib/posts";

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

        console.log("Returning success response for booking creation.");
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
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }))
      .query(async ({ input }) => {
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
        console.log("Returning success response for booking creation.");
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
        console.log("Returning success response for booking creation.");
        return { success: true };
      }),
    
    delete: protectedProcedure
      .input(z.object({ id: z.number() }))
      .mutation(async ({ input, ctx }) => {
        if (ctx.user.role !== 'admin') {
          throw new Error('Admin only');
        }
        await db.deleteTestimonial(input.id);
        console.log("Returning success response for booking creation.");
        return { success: true };
      }),
  }),

  // Markdownベースのブログ
  blog: router({
    list: publicProcedure
      .input(z.object({ category: z.string().optional() }))
      .query(async ({ input }) => {
      return getSortedPostsData(input.category);
    }),
    
    get: publicProcedure
      .input(z.object({ id: z.string() }))
      .query(async ({ input }) => {
        return await getPostData(input.id);
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
        console.log("Attempting to create booking in DB with input:", input);
        const newBooking = await db.createBooking(input);
        console.log("Booking created successfully:", newBooking);
        
        // オーナーに通知（システム通知）- 環境変数が未設定のため一時的に無効化
        /*
        await notifyOwner({
          title: "新しい予約が入りました",
          content: `お名前: ${input.name}\n電話番号: ${input.phone}\nサービス種別: ${input.serviceType === "residential" ? "家庭用" : "業務用"}\n希望日時: ${input.preferredDate || "未指定"}`,
        });
        */

        // メール送信処理 - 環境変数が未設定のため一時的に無効化
        /*
        if (ENV.smtpPass) {
          try {
            const transporter = nodemailer.createTransport({
              host: ENV.smtpHost,
              port: ENV.smtpPort,
              secure: ENV.smtpPort === 465,
              auth: {
                user: ENV.smtpUser,
                pass: ENV.smtpPass,
              },
            });

            const mailOptions = {
              from: `"テバdeクリーン 予約システム" <${ENV.smtpUser}>`,
              to: ENV.smtpUser, // 管理者宛て
              replyTo: input.email || undefined, // お客様のメールアドレスを返信先に設定
              subject: `【新規予約】${input.name}様より予約が入りました`,
              text: `
テバdeクリーン 予約システムよりお知らせです。
新しい予約の申し込みがありました。

■お客様情報
お名前: ${input.name}
電話番号: ${input.phone}
メールアドレス: ${input.email || "未入力"}

■予約内容
サービス種別: ${input.serviceType === "residential" ? "家庭用エアコンクリーニング" : "業務用エアコンクリーニング"}
希望日時: ${input.preferredDate || "未指定"}

■その他ご要望・ご質問
${input.message || "なし"}

---
このメールにそのまま返信すると、お客様（${input.email || "メールアドレス未入力"}）に返信できます。
              `,
            };

            await transporter.sendMail(mailOptions);
            console.log("予約通知メールを送信しました");
          } catch (error) {
            console.error("メール送信エラー:", error);
          }
        }
        */
        
        console.log("Returning success response for booking creation.");
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
        console.log("Returning success response for booking creation.");
        return { success: true };
      }),
  }),
});

export type AppRouter = typeof appRouter;
