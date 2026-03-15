import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AmountInput from "./AmountInput";

describe("AmountInput", () => {
  it("filters non-numeric characters and calls onChange", () => {
    const onChange = vi.fn();
