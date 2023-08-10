import React from "react";
import { render, screen, act } from "@testing-library/react";
import AddBusiness from "./AddBusiness";
import { Formik } from "formik";
import userEvent from "@testing-library/user-event";

const mockedUsedNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...(jest.requireActual("react-router-dom") as any),
  useNavigate: () => mockedUsedNavigate,
}));

describe("AddBusiness component", () => {
  test("renders properly", () => {
    render(<AddBusiness />);

    expect(screen.getByText("Name")).toBeInTheDocument();
    expect(screen.getByText("Business Price")).toBeInTheDocument();
    expect(screen.getByText("Loan Amount")).toBeInTheDocument();
  });

  test("form", () => {
    render(
      <Formik
        initialValues={{ name: "", business_price: 0, loan_amount: 0 }}
        onSubmit={jest.fn()}
      >
        <AddBusiness />
      </Formik>,
    );

    act(() => userEvent.type(screen.getByLabelText("Name"), "Business"));
    expect((screen.getByLabelText("Name") as HTMLInputElement).value).toBe(
      "Business",
    );

    act(() => userEvent.type(screen.getByLabelText("Business Price"), "100"));
    expect(
      (screen.getByLabelText("Business Price") as HTMLInputElement).value,
    ).toBe("100");

    act(() => userEvent.type(screen.getByLabelText("Loan Amount"), "200"));
    expect(
      (screen.getByLabelText("Loan Amount") as HTMLInputElement).value,
    ).toBe("200");
  });
});
