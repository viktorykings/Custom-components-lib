import React from 'react';
import Select from "./Select";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
    component: Select,
    title: 'Select',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outlined: Story = {
    args: {
        variant: 'outlined',
        disabled: false,
        error: false,
        open: true,
        label:'label',
        // options:[{value:'1', children: 'one'}, {value:'2', children: 'two'}, {value:'3', children: 'three'}]
        options:[{
            value: 'one',
        }, {
            value: 'two',
        }, {
            value: 'three',
        }],
    },
};