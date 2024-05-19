import React from 'react';
import Modal from "./Modal";
import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

const meta = {
    component: Modal,
    title: 'Modal',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    // args: {
    //     onClick: fn(),
    // }
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        open: true,
        children: <p>hello<br></br>
            <b>hello</b>
        </p>

    },
};



