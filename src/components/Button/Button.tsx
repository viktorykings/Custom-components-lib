import React from 'react';
import styles from './Button.module.css' 
import cn from 'classnames'

export interface ButtonProps {
    variant: 'text' | 'contained' | 'outlined';
    disabled?: boolean;
    onClick?: () => void;
    size: 'small' | 'medium' | 'large';
    children: React.ReactNode;
}

const Button = ({
    children, variant='contained', size='medium', ...props
}:Partial<ButtonProps>) => {
    
    const classNames = cn(
        styles.button,
        styles[variant],
        styles[size],
    );
    return (
        <button {...props} className={classNames}>
            {children}
        </button>
    );

}

export default Button;

