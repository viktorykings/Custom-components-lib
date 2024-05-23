import "@testing-library/jest-dom/";
import { fireEvent, render, screen } from "@testing-library/react";
import Select from "./Select";

const optionsMock = [{ value: "one" }, { value: "two" }];

test("select renders with props", () => {
  render(
    <Select variant="outlined" label="label" isError={true} disabled={true} />,
  );
  expect(screen.getByRole("textbox")).toBeTruthy();
  expect(screen.getByRole("textbox")).toHaveClass(/outlined/gi);
  expect(screen.getByRole("textbox")).toHaveClass(/error/gi);
  expect(screen.getByRole("textbox")).toBeDisabled();
  expect(screen.getByLabelText("label")).toBeInTheDocument();
});
test("selected oprions shows on select", () => {
  render(
    <Select
      variant="outlined"
      label="label"
      options={optionsMock}
      selected={optionsMock[0].value}
    />,
  );
  expect(screen.getByRole("textbox")).toHaveValue("one");
  fireEvent.change(screen.getByRole("textbox"), { target: { value: "two" } });
  expect(screen.getByRole("textbox")).toHaveValue("two");
});
test("select onClick shows options list", async () => {
  render(<Select variant="outlined" label="label" options={optionsMock} />);

  fireEvent.click(screen.getByRole("textbox"));
  expect(screen.queryByTestId("optionsList")).toBeInTheDocument();

  fireEvent.click(screen.getByRole("textbox"));
  expect(screen.queryByTestId("optionsList")).not.toBeInTheDocument();
});
