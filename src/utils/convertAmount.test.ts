import { describe, it, expect } from "vitest";
import { convertAmount } from "./convertAmount";

describe("convertAmount", () => {
  it("computes total and rate correctly", () => {
    const { total, rate } = convertAmount(2, 10);
    expect(total).toBe(10);
    expect(rate).toBe(5);
  });






























