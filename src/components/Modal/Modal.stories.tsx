import Modal from "./Modal";
import type { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Modal,
  title: "Modal",
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    open: true,
    children: (
      <p>
        hello<br></br>
        <b>hello</b>
      </p>
    ),
  },
};
