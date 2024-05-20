import React from 'react';
import styles from './Switch.module.css'

export interface SwitchProps {
    checked?: boolean;
    disabled?: boolean;
    onChange?: () => void
}
const Switch = (props: SwitchProps) => {
    const { checked, disabled, onChange } = props;
    return (
        <label className={styles.switch}>
            <input type="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
            <div className={styles.slider}>
                <div className={styles.circleContainer}>
                    <div className={styles.circle}></div>
                </div>
            </div>

        </label>
    )
}

export default Switch;