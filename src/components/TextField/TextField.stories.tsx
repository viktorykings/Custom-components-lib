import TextField from "./TextField";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: TextField,
  title: "TextField",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    id: "text",
    variant: "outlined",
    label: "outline",
    disabled: false,
    isError: false,
  },
};
export const Filled: Story = {
  args: {
    id: "text",
    variant: "filled",
    label: "filled",
    disabled: false,
    isError: false,
  },
};
export const Standart: Story = {
  args: {
    id: "text",
    variant: "standart",
    label: "standart",
    disabled: false,
    isError: false,
  },
};
export const Error: Story = {
  args: {
    id: "text",
    variant: "standart",
    label: "Error",
    disabled: false,
    isError: true,
  },
};
