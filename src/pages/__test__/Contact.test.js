import React from "react";
import { render } from "@testing-library/react";
import Contact from "../../pages/Contact";

describe("Contact Page", () => {
  test("renders 'Contact' heading", () => {
    const { getByText } = render(<Contact />);
    expect(getByText("Contact")).toBeInTheDocument();
  });
});
