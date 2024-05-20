import React from 'react';
export interface ButtonProps {
    variant: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}
declare const Button: (props: ButtonProps) => import("react/jsx-runtime").JSX.Element;
export default Button;
