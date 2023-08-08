import React from "react";
import { render } from "@testing-library/react";
import About from "../../pages/About";

describe("About Page", () => {
  test("renders 'About' heading", () => {
    const { getByText } = render(<About />);
    expect(getByText("About")).toBeInTheDocument();
  });
});
