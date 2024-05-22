import React from 'react';
import styles from './TextField.module.css'

export interface TextFieldProps {
    disabled?: boolean;
    error?: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    label?: string | number;
    placeholder?: string | undefined;
    focused? : boolean
    onClick? : () => void
}


const TextField  = (props: TextFieldProps) => {
    const { disabled, error, variant, label, placeholder, focused } = props;

    return (
        <div className={[styles.textField].join(' ')}>
            <input
                id="input"
                className={[styles[variant], disabled && styles.disabled, error && styles.error ].join(' ')}
                type="text"
                placeholder={placeholder ?? ' '}
                {...props}
            />
            {/* <label htmlFor="" className={focused ? styles['label-focused'] : styles['label']}>{label}</label> */}
            {/* foc */}
            <label htmlFor="input" className={styles['label']}>{label}</label>
        </div>

    )
}

export default TextField;