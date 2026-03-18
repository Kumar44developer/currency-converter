import React from "react";
import { describe, it, expect } from "vitest";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Result from "./Result";

describe("Result", () => {
  it("renders formatted output", () => {
