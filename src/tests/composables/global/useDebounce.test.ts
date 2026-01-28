import { describe, it, expect, vi } from "vitest";
import { useDebounce } from "@/composables/global/useDebounce";

describe("useDebounce", () => {
  it("should debounce the function calls", async () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 300);

    debouncedFn();
    debouncedFn();
    debouncedFn();

    expect(mockFn).not.toHaveBeenCalled();
    await new Promise((resolve) => setTimeout(resolve, 350));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });

  it("should call the function with correct arguments", async () => {
    const mockFn = vi.fn();
    const debouncedFn = useDebounce(mockFn, 300);
    debouncedFn("arg1", "arg2");
    await new Promise((resolve) => setTimeout(resolve, 350));

    expect(mockFn).toHaveBeenCalledWith("arg1", "arg2");
  });
});
