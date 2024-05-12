import React from "react";
interface ButtonProps {
    variant: "text" | "contained" | "outlined";
    disabled: boolean;
    size: "small" | "medium" | "large";
    label: string;
    index?: number;
    isSelected?: number;
    onClick?: (event?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
declare const Button: ({ label, variant, disabled, size, onClick, index, isSelected, }: Partial<ButtonProps>) => import("react/jsx-runtime").JSX.Element;
export default Button;
