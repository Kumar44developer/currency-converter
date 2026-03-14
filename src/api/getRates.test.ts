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
































