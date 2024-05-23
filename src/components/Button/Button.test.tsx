import "@testing-library/jest-dom/";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Button from "./Button";

test("button renders with default props", () => {
  render(
    <Button variant="contained" size={"medium"}>
      button
    </Button>,
  );
  expect(screen.getByRole("button")).toBeTruthy();
  expect(screen.getByRole("button")).toHaveClass(/contained/gi);
  expect(screen.getByRole("button")).toHaveClass(/medium/gi);
  expect(screen.getByRole("button")).toHaveTextContent("button");
});

test("button variant=outlined size=small", () => {
  render(
    <Button variant="outlined" size={"small"}>
      button
    </Button>,
  );
  expect(screen.getByRole("button")).toHaveClass(/outlined/gi);
  expect(screen.getByRole("button")).toHaveClass(/small/gi);
});
test("button variant=text", () => {
  render(
    <Button variant="text" size={"medium"}>
      button
    </Button>,
  );
  expect(screen.getByRole("button")).toHaveClass(/medium/gi);
  expect(screen.getByRole("button")).toHaveClass(/text/gi);
});
test("button children=Click me!", () => {
  render(
    <Button variant="contained" size={"medium"}>
      Click me!
    </Button>,
  );
  expect(screen.getByRole("button")).toHaveTextContent(/click me/gi);
});
test("button disabled", () => {
  render(
    <Button variant="contained" disabled size={"small"}>
      Click me!
    </Button>,
  );

  expect(screen.getByRole("button")).toBeDisabled();
});

test("click on disabled button doesnt trigger onClick function", async () => {
  const onClick = jest.fn();
  render(
    <Button onClick={onClick} disabled variant={"outlined"} size={"small"}>
      text
    </Button>,
  );

  await userEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalledTimes(0);
});
test("click on enabled button triggers onClick function", async () => {
  const onClick = jest.fn();
  render(
    <Button onClick={onClick} variant={"outlined"} size={"small"}>
      text
    </Button>,
  );

  await userEvent.click(screen.getByRole("button"));
  expect(onClick).toHaveBeenCalledTimes(1);
});
