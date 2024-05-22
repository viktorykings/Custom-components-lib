import React, { useState } from 'react';
import styles from './TextField.module.css'

export interface TextFieldProps {
    disabled?: boolean;
    error?: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    label?: string | number;
    placeholder?: string | undefined;
    focused?: boolean
    onChange?: () => void
    value?: string
    readonly?: boolean
}


const TextField = (props: TextFieldProps) => {
    const { disabled, error, variant, label, placeholder, focused, value } = props;

    const [inputValue, setInputValue] = useState(value ?? '')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value)
    }

    return (
        <div className={[styles.textField].join(' ')}>
            <input
                id="input"
                className={[styles[variant], disabled && styles.disabled, error && styles.error].join(' ')}
                type="text"
                placeholder={placeholder ?? ' '}
                value={inputValue}
                onChange={handleChange}
                {...props}
            />
            <label htmlFor="input" className={styles['label']}>{label}</label>
        </div>

    )
}

export default TextField;