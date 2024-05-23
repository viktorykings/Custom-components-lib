import Switch from "./Switch";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Switch,
  title: "Switch",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    checked: false,
    disabled: false,
  },
};

export const DefaultChecked: Story = {
  args: {
    ...Default.args,
    checked: true,
  },
};
export const Disabled: Story = {
  args: {
    ...Default.args,
    disabled: true,
  },
};
export const CheckedDisabled: Story = {
  args: {
    disabled: true,
    checked: true,
  },
};
