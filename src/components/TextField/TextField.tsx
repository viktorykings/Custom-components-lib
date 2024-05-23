import styles from "./TextField.module.css";

export interface TextFieldProps {
  disabled?: boolean;
  isError?: boolean;
  variant: "outlined" | "filled" | "standart";
  label?: string | number;
  placeholder?: string | undefined;
  focused?: boolean;
  onChange?: () => void;
  value?: string;
  readonly?: boolean;
  id: string;
}

const TextField = (props: TextFieldProps) => {
  const {
    disabled,
    isError,
    variant,
    label,
    placeholder,
    value,
    readonly,
    id,
  } = props;

  return (
    <div className={[styles.textField].join(" ")}>
      <input
        id={id}
        className={[
          styles[variant],
          disabled && styles.disabled,
          isError && styles.error,
        ].join(" ")}
        type="text"
        placeholder={placeholder ?? " "}
        defaultValue={value}
        readOnly={readonly}
        disabled={disabled}
      />
      <label htmlFor={id ?? "input"} className={styles["label"]}>
        {label}
      </label>
    </div>
  );
};

export default TextField;
