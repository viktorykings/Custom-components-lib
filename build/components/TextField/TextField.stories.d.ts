import type { StoryObj } from '@storybook/react';
declare const meta: {
    component: (props: import("./TextField").TextFieldProps) => import("react/jsx-runtime").JSX.Element;
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
