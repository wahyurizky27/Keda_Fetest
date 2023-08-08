import React from "react";
import { render } from "@testing-library/react";
import Home from "../Home";

describe("Home Component", () => {
  test("renders header correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Welcome to EDP Startup")).toBeInTheDocument();
    expect(
      getByText("Discover amazing features and benefits of our product.")
    ).toBeInTheDocument();
    expect(getByText("Get Started")).toBeInTheDocument();
  });

  test("renders about section correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("About")).toBeInTheDocument();
    expect(
      getByText((content, element) => {
        // Check if the element contains the desired text substring
        return content.includes(
          "Sebuah startup membuat suatu website seperti ERP untuk memudahkan"
        );
      })
    ).toBeInTheDocument();
  });

  test("renders pricing section correctly", () => {
    const { getByText } = render(<Home />);

    expect(getByText("Pricing")).toBeInTheDocument();
    expect(getByText("TIER 1/Basic")).toBeInTheDocument();
    expect(getByText("TIER 2/Business")).toBeInTheDocument();
    expect(getByText("TIER 3/Entrepreneur")).toBeInTheDocument();
  });

  test("renders contact section correctly", () => {
    const { getByText, getByRole } = render(<Home />);

    expect(getByText("Contact Us")).toBeInTheDocument();
    expect(
      getByText(
        "Have any questions or inquiries? Feel free to reach out to us."
      )
    ).toBeInTheDocument();
    expect(
      getByRole("link", { name: "contact@example.com" })
    ).toBeInTheDocument();
  });

  test("renders footer correctly", () => {
    const { getByText } = render(<Home />);

    expect(
      getByText("© 2023 Your Company. All rights reserved.")
    ).toBeInTheDocument();
  });
});
