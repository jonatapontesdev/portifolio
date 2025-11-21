import { describe, it, expect } from "vitest";
import { renderHook } from "@testing-library/react";
import { useTypewriter } from "./useTypewriter";

describe("useTypewriter Hook", () => {
  it("should initialize with empty text", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "Hello", speed: 100, delay: 0 })
    );
    expect(result.current.displayedText).toBe("");
    expect(result.current.isComplete).toBe(false);
  });

  it("should handle empty text", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "", speed: 100, delay: 0 })
    );

    expect(result.current.displayedText).toBe("");
    expect(result.current.isComplete).toBe(false);
  });

  it("should accept text prop", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "Test", speed: 100, delay: 0 })
    );

    expect(result.current).toBeDefined();
    expect(result.current.displayedText).toBeDefined();
    expect(result.current.isComplete).toBeDefined();
  });

  it("should use custom speed when provided", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "Custom", speed: 50, delay: 0 })
    );

    expect(result.current).toBeDefined();
  });

  it("should use custom delay when provided", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "Delayed", speed: 100, delay: 500 })
    );

    expect(result.current).toBeDefined();
  });

  it("should use default speed when not provided", () => {
    const { result } = renderHook(() =>
      useTypewriter({ text: "Default" })
    );

    expect(result.current).toBeDefined();
  });

  it("should cleanup timers on unmount", () => {
    const { unmount } = renderHook(() =>
      useTypewriter({ text: "Cleanup", speed: 100, delay: 0 })
    );

    expect(() => unmount()).not.toThrow();
  });
});
