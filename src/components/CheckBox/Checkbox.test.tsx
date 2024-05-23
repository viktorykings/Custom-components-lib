import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CheckBox from "./CheckBox";

test("checkbox renders", () => {
  render(<CheckBox />);
  expect(screen.getByRole("checkbox")).toBeTruthy();
});

test("checkbox has label prop", () => {
  render(<CheckBox label="Check" />);
  expect(screen.getByLabelText("Check")).toBeTruthy();
});

test("checkbox checked", () => {
  const onChange = jest.fn();

  render(<CheckBox label="Check" checked onChange={onChange} />);
  expect(screen.getByLabelText("Check")).toBeChecked();
});

test("checkbox disabled", () => {
  render(<CheckBox label="Check" disabled />);
  expect(screen.getByLabelText("Check")).toBeDisabled();
});

test("click on disabled checkbox doesnt trigger onChange function", async () => {
  const onChange = jest.fn();
  render(<CheckBox onChange={onChange} disabled />);

  await userEvent.click(screen.getByRole("checkbox"));
  expect(onChange).toHaveBeenCalledTimes(0);
});
test("click on enabled checkbox triggers onChange function", async () => {
  const onChange = jest.fn();
  render(<CheckBox onChange={onChange} />);

  await userEvent.click(screen.getByRole("checkbox"));
  expect(onChange).toHaveBeenCalledTimes(1);
});
