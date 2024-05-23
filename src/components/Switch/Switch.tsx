import styles from "./Switch.module.css";

export interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
  label?: string;
}
const Switch = (props: SwitchProps) => {
  const { checked, disabled, onChange, label } = props;
  return (
    <label className={styles.switch}>
      <input
        type="checkbox"
        {...props}
        disabled={disabled}
        checked={checked}
        onChange={onChange}
        role="switch"
      />
      <div className={styles.slider}>
        <div className={styles.circleContainer}>
          <div className={styles.circle}></div>
        </div>
      </div>
      {label}
    </label>
  );
};

export default Switch;
