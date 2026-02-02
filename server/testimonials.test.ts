import { describe, expect, it } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type AuthenticatedUser = NonNullable<TrpcContext["user"]>;

function createAdminContext(): { ctx: TrpcContext } {
  const user: AuthenticatedUser = {
    id: 1,
    openId: "admin-user",
    email: "admin@example.com",
    name: "Admin User",
    loginMethod: "manus",
    role: "admin",
    createdAt: new Date(),
    updatedAt: new Date(),
    lastSignedIn: new Date(),
  };

  const ctx: TrpcContext = {
    user,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

function createPublicContext(): { ctx: TrpcContext } {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {
      clearCookie: () => {},
    } as TrpcContext["res"],
  };

  return { ctx };
}

describe("testimonials.create", () => {
  it("管理者がレビューを作成できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.create({
      customerName: "山田太郎",
      rating: 5,
      comment: "とても満足しました",
      serviceType: "residential",
      imageUrl: "https://example.com/image.jpg",
      source: "curama",
      sourceLabel: "くらしのマーケットから引用",
      isPublished: 1,
    });

    expect(result).toEqual({ success: true });
  });

  it("画像URLなしでもレビューを作成できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.create({
      customerName: "鈴木花子",
      rating: 4,
      comment: "良いサービスでした",
      serviceType: "commercial",
    });

    expect(result).toEqual({ success: true });
  });

  it("非管理者はレビューを作成できない", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.testimonials.create({
        customerName: "佐藤次郎",
        rating: 5,
        comment: "素晴らしい",
        serviceType: "residential",
      });
      expect.fail("Should have thrown an error");
    } catch (error: any) {
      // protectedProcedureは認証が必須なので、ログインエラーを返す
      expect(error.message).toContain("Please login");
    }
  });
});

describe("testimonials.list", () => {
  it("公開レビューを取得できる", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.list();

    expect(Array.isArray(result)).toBe(true);
  });
});

describe("testimonials.update", () => {
  it("管理者がレビューを更新できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.update({
      id: 1,
      customerName: "更新された名前",
      rating: 4,
      sourceLabel: "Google ビジネスから引用",
    });

    expect(result).toEqual({ success: true });
  });
});

describe("testimonials.delete", () => {
  it("管理者がレビューを削除できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.testimonials.delete({ id: 1 });

    expect(result).toEqual({ success: true });
  });
});
