import { describe, expect, it, vi } from "vitest";
import { appRouter } from "./routers";
import type { TrpcContext } from "./_core/context";

type PublicContext = {
  user: null;
  req: {
    protocol: string;
    headers: Record<string, string>;
  };
  res: {
    clearCookie: (name: string, options: Record<string, unknown>) => void;
  };
};

function createPublicContext(): PublicContext {
  return {
    user: null,
    req: {
      protocol: "https",
      headers: {},
    } as any,
    res: {
      clearCookie: () => {},
    } as any,
  };
}

describe("contact.send", () => {
  it("should validate required fields", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // Test with missing name
    try {
      await caller.contact.send({
        name: "",
        email: "test@example.com",
        subject: "Test Subject",
        message: "This is a test message",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should validate email format", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.send({
        name: "Test User",
        email: "invalid-email",
        subject: "Test Subject",
        message: "This is a test message",
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should validate message length", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    try {
      await caller.contact.send({
        name: "Test User",
        email: "test@example.com",
        subject: "Test Subject",
        message: "Short", // Less than 10 characters
      });
      expect.fail("Should have thrown validation error");
    } catch (error: any) {
      expect(error.code).toBe("BAD_REQUEST");
    }
  });

  it("should accept valid contact form data", async () => {
    const ctx = createPublicContext();
    const caller = appRouter.createCaller(ctx);

    // This test will fail without proper database setup
    // In production, mock the database calls
    const result = await caller.contact.send({
      name: "Test User",
      email: "test@example.com",
      phone: "(11) 99999-9999",
      subject: "Test Subject",
      message: "This is a test message with sufficient length",
    });

    expect(result).toBeDefined();
    expect(result.success).toBeDefined();
  });
});
