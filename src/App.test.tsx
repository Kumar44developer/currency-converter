import React from "react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import "@testing-library/jest-dom";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import App from "./App";

vi.mock("./api/fetchCurrencies", () => ({
  fetchCurrencies: vi.fn().mockResolvedValue({ USD: "US Dollar", EUR: "Euro" }),
}));

vi.mock("./api/getRates", () => ({
  getRates: vi.fn(),
}));




































