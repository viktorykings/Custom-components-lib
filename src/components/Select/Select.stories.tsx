import Select from "./Select";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Select,
  title: "Select",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
  args: {
    variant: "outlined",
    disabled: false,
    isError: false,
    label: "label",
    options: [
      {
        value: "one",
      },
      {
        value: "two",
      },
      {
        value: "three",
      },
    ],
  },
};
export const Filled: Story = {
  args: {
    variant: "filled",
    disabled: false,
    isError: false,
    label: "label",
    options: [
      {
        value: "one",
      },
      {
        value: "two",
      },
      {
        value: "three",
      },
    ],
  },
};
export const Standart: Story = {
  args: {
    variant: "standart",
    disabled: false,
    isError: false,
    label: "label",
    options: [
      {
        value: "one",
      },
      {
        value: "two",
      },
      {
        value: "three",
      },
    ],
  },
};
export const Error: Story = {
  args: {
    variant: "outlined",
    disabled: false,
    isError: true,
    label: "label",
    options: [
      {
        value: "one",
      },
      {
        value: "two",
      },
      {
        value: "three",
      },
    ],
  },
};
