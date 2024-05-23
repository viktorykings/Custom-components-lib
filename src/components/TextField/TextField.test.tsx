import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TextField from "./TextField";

test("textfield renders with default props", () => {
  render(<TextField id="text" variant="outlined" value="text" />);
  expect(screen.getByRole("textbox")).toBeTruthy();
  expect(screen.getByRole("textbox")).toHaveClass(/outlined/gi);
  expect(screen.getByRole("textbox")).toHaveValue("text");
});
test("textfield renders with placeholder and styles", () => {
  render(
    <TextField
      id="text"
      variant="outlined"
      value="text"
      placeholder="pl"
      isError
      disabled
    />,
  );
  expect(screen.getByPlaceholderText("pl")).toBeTruthy();
  expect(screen.getByRole("textbox")).toHaveClass(/error/gi);
  expect(screen.getByRole("textbox")).toBeDisabled();
  expect(screen.getByRole("textbox")).toHaveValue("text");
});

test("textfield value changes", async () => {
  const user = userEvent.setup();
  render(<TextField id="text" variant="outlined" />);

  await user.type(screen.getByRole("textbox"), "new");
  expect(screen.getByRole("textbox")).toHaveValue("new");
});
