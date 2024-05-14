import React from 'react';
import CheckBox from "./CheckBox";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
    component: CheckBox,
    title: 'CheckBox',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // args: {
    //     onClick: fn(),
    // }
} satisfies Meta<typeof CheckBox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Label',
        checked: false,
        disabled: false,
    },
};

export const Checked: Story = {
    args: {
        ...Default.args,
        checked: true
    },
};
export const Disabled: Story = {
    args: {
        ...Default.args,
        disabled: true
    },
};
export const CheckedDisabled: Story = {
    args: {
        ...Default.args,
        disabled: true,
        checked: true
    },
};

