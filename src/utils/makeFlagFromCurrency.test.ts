import { describe, it, expect } from "vitest";
import { makeFlagFromCurrency } from "./makeFlagFromCurrency";

describe("makeFlagFromCurrency", () => {
  it("returns correct flag for USD", () => {
    expect(makeFlagFromCurrency("USD")).toBe("🇺🇸");
  });

































