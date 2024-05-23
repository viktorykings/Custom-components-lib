import Button from "./Button";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  title: "Button",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Contained: Story = {
  args: {
    variant: "contained",
    children: "Button",
    disabled: false,
    onClick: () => {},
    size: "medium",
  },
};

export const Text: Story = {
  args: {
    ...Contained.args,
    variant: "text",
  },
};
export const Outlined: Story = {
  args: {
    ...Contained.args,
    variant: "outlined",
  },
};

export const Large: Story = {
  args: {
    ...Contained.args,
    size: "large",
  },
};

export const Small: Story = {
  args: {
    ...Contained.args,
    size: "small",
  },
};
