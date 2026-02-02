import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

// notifyOwner関数をモック
vi.mock("./_core/notification", () => ({
  notifyOwner: vi.fn().mockResolvedValue(true)
}));

// データベース関数をモック
vi.mock("./db", () => ({
  createBooking: vi.fn().mockResolvedValue(undefined),
  getAllBookings: vi.fn().mockResolvedValue([
    {
      id: 1,
      name: "テストユーザー",
      email: "test@example.com",
      phone: "098-123-4567",
      serviceType: "residential",
      preferredDate: "2026年2月10日 午前中",
      message: "エアコン2台のクリーニングをお願いします",
      status: "pending",
      createdAt: new Date("2026-02-01"),
      updatedAt: new Date("2026-02-01")
    }
  ]),
  updateBookingStatus: vi.fn().mockResolvedValue(undefined)
}));

function createPublicContext(): { ctx: TrpcContext } {
  const ctx: TrpcContext = {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

function createAdminContext(): { ctx: TrpcContext } {
  const ctx: TrpcContext = {
    user: {
      id: 1,
      openId: "admin-user",
      email: "admin@example.com",
      name: "管理者",
      loginMethod: "manus",
      role: "admin",
      createdAt: new Date(),
      updatedAt: new Date(),
      lastSignedIn: new Date(),
    },
    req: {
      protocol: "https",
      headers: {},
    } as TrpcContext["req"],
    res: {} as TrpcContext["res"],
  };

  return { ctx };
}

describe("bookings.create", () => {
  it("公開エンドポイントで予約を作成できる", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.bookings.create({
      name: "山田太郎",
      phone: "098-123-4567",
      email: "yamada@example.com",
      serviceType: "residential",
      preferredDate: "2026年2月15日 午後",
      message: "家庭用エアコン1台のクリーニングをお願いします"
    });

    expect(result).toEqual({ success: true });
  });

  it("メールアドレスなしでも予約を作成できる", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.bookings.create({
      name: "鈴木花子",
      phone: "098-987-6543",
      serviceType: "commercial",
      preferredDate: "2026年2月20日",
      message: "業務用エアコン3台"
    });

    expect(result).toEqual({ success: true });
  });
});

describe("bookings.list", () => {
  it("管理者は予約一覧を取得できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.bookings.list();

    expect(result).toHaveLength(1);
    expect(result[0]?.name).toBe("テストユーザー");
  });

  it("非管理者は予約一覧を取得できない", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(caller.bookings.list()).rejects.toThrow();
  });
});

describe("bookings.updateStatus", () => {
  it("管理者は予約ステータスを更新できる", async () => {
    const { ctx } = createAdminContext();
    const caller = appRouter.createCaller(ctx);

    const result = await caller.bookings.updateStatus({
      id: 1,
      status: "confirmed"
    });

    expect(result).toEqual({ success: true });
  });

  it("非管理者は予約ステータスを更新できない", async () => {
    const { ctx } = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    await expect(
      caller.bookings.updateStatus({
        id: 1,
        status: "confirmed"
      })
    ).rejects.toThrow();
  });
});
