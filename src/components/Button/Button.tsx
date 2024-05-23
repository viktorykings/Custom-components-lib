import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps {
  variant: "text" | "contained" | "outlined";
  disabled?: boolean;
  onClick?: () => void;
  size: "small" | "medium" | "large";
  children: React.ReactNode;
}

const Button = (props: ButtonProps) => {
  const { children, variant, size } = props;
  return (
    <button
      {...props}
      className={[styles.button, styles[variant], styles[size]].join(" ")}
    >
      {children}
    </button>
  );
};

export default Button;
