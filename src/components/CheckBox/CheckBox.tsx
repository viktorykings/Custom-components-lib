import React, { FC } from 'react';
import styles from './CheckBox.module.css'

export interface CheckBoxProps {
    label?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange? : ()=> void
}
const CheckBox: FC<CheckBoxProps> = (props) => {
    const { label, checked, disabled, onChange } = props;
    return (
        <label className={styles.checkBox}>
            <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
            <div className={[styles.checkmarkContainer].join(' ')}>
                <span className={styles.checkmark}></span>
            </div>

            {label}
        </label>
    )
}

export default CheckBox;