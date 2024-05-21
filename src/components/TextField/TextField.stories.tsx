import React from 'react';
import TextField from "./TextField";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
    component: TextField,
    title: 'TextField',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof TextField>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        label: 'outline',
        disabled: false,
        error: false
    },
};
export const Filled: Story = {
    args: {
        variant: 'filled',
        label: 'filled',
        disabled: false,
        error: false
    },
};
export const Standart: Story = {
    args: {
        variant: 'standart',
        label: 'standart',
        disabled: false,
        error: false,
    },
};
export const Error: Story = {
    args: {
        variant: 'standart',
        label: 'Error',
        disabled: false,
        error: true
    },
};