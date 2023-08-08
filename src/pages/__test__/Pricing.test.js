import React from "react";
import { render } from "@testing-library/react";
import Pricing from "../../pages/Pricing";

describe("Pricing Page", () => {
  test("renders 'Pricing' heading", () => {
    const { getByText } = render(<Pricing />);
    expect(getByText("Pricing")).toBeInTheDocument();
  });
});
