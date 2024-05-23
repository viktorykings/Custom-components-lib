import type { StoryObj } from "@storybook/react";
declare const meta: {
    component: (props: import("./Button").ButtonProps) => import("react/jsx-runtime").JSX.Element;
    title: string;
    parameters: {
        layout: string;
    };
    tags: string[];
};
export default meta;
type Story = StoryObj<typeof meta>;
export declare const Contained: Story;
export declare const Text: Story;
export declare const Outlined: Story;
export declare const Large: Story;
export declare const Small: Story;
