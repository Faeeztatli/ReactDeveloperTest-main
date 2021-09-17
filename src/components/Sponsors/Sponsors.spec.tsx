import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import { Sponsors } from "./Sponsors";

test('displays a "Hello World" message', () => {
  render(<Sponsors sampleProperty="Hello World" />);
  expect(screen.getByText("Hello World")).toBeInTheDocument();
});

test("should return true", () => {
  expect(true).toBe(true);
});
