import React from "react";
import styles from "./Modal.module.css";

export interface ModalProps {
  open?: boolean;
  children?: React.ReactNode;
  onClose?: () => void;
}
const Modal = (props: ModalProps) => {
  const { open, children, onClose } = props;
  return (
    <div
      className={open ? styles["backdrop-visible"] : styles["backdrop-hidden"]}
      onClick={onClose}
      data-testid="backdrop"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
