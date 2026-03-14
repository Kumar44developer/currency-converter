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






























