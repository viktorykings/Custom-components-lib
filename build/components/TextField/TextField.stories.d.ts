import React from 'react';
import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: React.FC<import("./TextField").TextFieldProps>;
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Outlined: Story;
export declare const Filled: Story;
export declare const Standart: Story;
export declare const Error: Story;
