import React, { FC, useState } from "react";
import styles from './TextField.module.css'

export interface TextFieldProps {
    disabled?: boolean;
    error?: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    label?: string | number;
    placeholder?: string | undefined;
    focused? : boolean
}


const TextField  = (props: TextFieldProps) => {
    const { disabled, error, variant, label, placeholder, focused } = props;
    // const [isFocused, setIsFocused] = useState(false);

    // const handleOnFocus = () => {
    //     setIsFocused(true);
    // };
    // const handleBlur = () => {
    //     setIsFocused(false);
    // };

    return (
        <div className={[styles.textField].join(' ')}>
            <input
                className={[styles[variant], disabled && styles.disabled, error && styles.error ].join(' ')}
                type="text"
                // onFocus={handleOnFocus}
                // onBlur={handleBlur}
                disabled={disabled}
                placeholder={placeholder ?? ' '}
            />
            <label htmlFor="" className={focused ? styles['label-focused'] : styles['label']}>{label}</label>
        </div>

    )
}

export default TextField;