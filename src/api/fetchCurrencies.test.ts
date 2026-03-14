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
