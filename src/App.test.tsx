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

import { fetchCurrencies } from "./api/fetchCurrencies";
import { getRates } from "./api/getRates";


describe("App", () => {
  beforeEach(() => {
    vi.resetAllMocks();
    (fetchCurrencies as any).mockResolvedValue({
      USD: "US Dollar",
      EUR: "Euro",
    });
  });


  it("loads currencies and converts amount", async () => {
    // After currencies load, App normalizes to from=EUR, to=USD
    (getRates as any).mockResolvedValue({
      amount: 1,
      base: "EUR",
      rates: { USD: 2 },
    });
    render(<App />);

    const fromSelect = await screen.findByLabelText(/from/i);
    const toSelect = screen.getByLabelText(/to/i);

    const input = screen.getByLabelText(/enter amount/i) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "1" } });


    fireEvent.click(screen.getByRole("button", { name: /get exchange rate/i }));


    await waitFor(() => {
      expect(screen.getByText(/eur =/i)).toBeInTheDocument();
    });


    expect(getRates).toHaveBeenCalledWith(
      1,
      (fromSelect as HTMLSelectElement).value,
      (toSelect as HTMLSelectElement).value
    );
  });


  it("shows error when conversion fails", async () => {
    (getRates as any).mockRejectedValue(new Error("boom"));
    render(<App />);


    const input = await screen.findByLabelText(/enter amount/i);
    fireEvent.change(input, { target: { value: "1" } });
    fireEvent.click(screen.getByRole("button", { name: /get exchange rate/i }));


    await screen.findByText(/boom/i);
  });
    fireEvent.click(convertBtn);
    await screen.findByText(/usd =/i);
    expect(getRates).toHaveBeenCalledTimes(3);
  });
  

  it("swaps currencies and fetches swapped rate when valid", async () => {
    // First convert: from=EUR to=USD
    (getRates as any).mockResolvedValueOnce({
      amount: 1,
      base: "EUR",
      rates: { USD: 2 },
    });

    (getRates as any).mockResolvedValueOnce({
      amount: 1,
      base: "USD",
      rates: { EUR: 3 },
    });

    (getRates as any).mockResolvedValueOnce({
      amount: 1,
      base: "USD",
      rates: { EUR: 3 },
    });

    render(<App />);

    const input = await screen.findByLabelText(/enter amount/i);
    fireEvent.change(input, { target: { value: "1" } });
    
    fireEvent.click(screen.getByRole("button", { name: /get exchange rate/i }));
    await screen.findByText(/eur =/i);

    fireEvent.click(screen.getByRole("button", { name: /swap currencies/i }));

    const convertBtn = await screen.findByRole("button", {
      name: /get exchange rate/i,
    });

  it("disables convert button for invalid amount", async () => {
    (getRates as any).mockResolvedValue({
      amount: 1,
      base: "EUR",
      rates: { USD: 2 },
    });
    render(<App />);
    await screen.findByLabelText(/from/i);
    const input = screen.getByLabelText(/enter amount/i) as HTMLInputElement;
    const button = screen.getByRole("button", { name: /get exchange rate/i });
    fireEvent.change(input, { target: { value: "0" } });
    expect(button).toBeDisabled();
