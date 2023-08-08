import React from "react";
import { render } from "@testing-library/react";
import Login from "../../pages/Login";

describe("Login Page", () => {
  test("renders 'Login' heading", () => {
    const { getByText } = render(<Login />);
    expect(getByText("Login")).toBeInTheDocument();
  });
});
