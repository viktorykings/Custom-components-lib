import "@testing-library/jest-dom/";
import { fireEvent, render, screen } from "@testing-library/react";
import Modal from "./Modal";

test("modal renders with props", async () => {
  const onClose = jest.fn();
  render(
    <Modal open onClose={onClose}>
      modal
    </Modal>,
  );
  expect(screen.getByTestId("backdrop")).toBeInTheDocument();
  expect(screen.getByText("modal")).toBeInTheDocument();
  fireEvent.click(screen.getByText("modal"));
  expect(onClose).not.toHaveBeenCalled();
});
