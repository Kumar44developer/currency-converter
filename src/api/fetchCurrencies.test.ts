import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { fetchCurrencies } from "./fetchCurrencies";

const originalFetch = globalThis.fetch;

describe("fetchCurrencies", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

           afterEach(() => {
    globalThis.fetch = originalFetch as any;
  });


  it("returns currencies on success", async () => {
    const mockJson = vi
      .fn()
      .mockResolvedValue({ USD: "United States Dollar", EUR: "Euro" });
    globalThis.fetch = vi
      .fn()
      .mockResolvedValue({ ok: true, json: mockJson } as any);
























         
