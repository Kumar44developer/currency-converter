import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { getRates } from "./getRates";

const originalFetch = globalThis.fetch;

describe("getRates", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });


  afterEach(() => {
    globalThis.fetch = originalFetch as any;
  });


  it("builds URL and returns parsed data", async () => {
    const payload = { amount: 5, base: "USD", rates: { EUR: 4.5 } };
    const json = vi.fn().mockResolvedValue(payload);
    globalThis.fetch = vi.fn().mockResolvedValue({ ok: true, json } as any);

    const res = await getRates(5, "USD", "EUR");
    expect(res).toEqual(payload);
    const calledUrl = (globalThis.fetch as any).mock.calls[0][0] as string;
    expect(calledUrl).toContain("amount=5");


























