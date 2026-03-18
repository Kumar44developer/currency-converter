import React from "react";
import { describe, it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import SwapButton from "./SwapButton";


describe("SwapButton", () => {
  it("invokes onClick when pressed", () => {
    const onClick = vi.fn();





























