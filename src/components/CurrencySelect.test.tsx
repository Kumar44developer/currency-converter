import React from "react";
import { describe, it, expect, vi } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import CurrencySelect from "./CurrencySelect";


const currencies = [
  { code: "EUR", name: "Euro", flag: "🇪🇺" },
  { code: "USD", name: "US Dollar", flag: "🇺🇸" },
];


describe("CurrencySelect", () => {
  it("renders options and calls onChange", () => {
    const onChange = vi.fn();
    render(
      <CurrencySelect
        id="from"
        label="From"
        value="EUR"
        onChange={onChange}
        currencies={currencies}
      />
    );

























