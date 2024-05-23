import "@testing-library/jest-dom/";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Switch from "./Switch";

test("Switch renders", () => {
  render(<Switch label="switch" />);
  expect(screen.getByLabelText("switch")).toBeTruthy();
});

test("Switch disabled", () => {
  render(<Switch disabled label="switch" />);
  expect(screen.getByLabelText("switch")).toBeDisabled();
});
test("Switch checked", () => {
  const onChange = jest.fn();

  render(<Switch checked onChange={onChange} label="switch" />);
  expect(screen.getByLabelText("switch")).toBeTruthy();
});

test("Switch disabled doesnt trigger onChange function", async () => {
  const onChange = jest.fn();

  render(<Switch disabled={true} onChange={onChange} label="switch" />);
  fireEvent.change(screen.getByRole("switch"), { target: { checked: true } });
  expect(onChange).toHaveBeenCalledTimes(0);
});
test("Switch enabled triggers onChange function", async () => {
  const onChange = jest.fn();

  render(<Switch checked={false} onChange={onChange} label="switch" />);
  await userEvent.click(screen.getByRole("switch"));
  fireEvent.change(screen.getByRole("switch"), { target: { checked: true } });
  expect(onChange).toHaveBeenCalledTimes(1);
  expect(screen.getByRole("switch")).toHaveProperty("checked");
});
