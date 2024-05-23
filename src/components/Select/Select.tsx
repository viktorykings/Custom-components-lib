import { forwardRef, useRef, useState, MouseEvent } from "react";
import styles from "./Select.module.css";
import TextField from "../TextField/TextField";

export interface SelectProps {
  disabled?: boolean;
  isError?: boolean;
  variant: "outlined" | "filled" | "standart";
  options?: OptionProps[];
  label?: string;
  selected?: string;
}

interface OptionProps {
  value: string;
  onClick?: (e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void;
  cl?: string;
}

const Option = forwardRef<HTMLLIElement, OptionProps>(
  function Option(props, ref) {
    const { value, onClick } = props;
    return (
      <li
        className={styles["option"]}
        ref={ref}
        onClick={onClick}
        data-testid="option"
      >
        {value}
      </li>
    );
  },
);

const Icon = ({ cl }: { cl: string }) => {
  return (
    <svg className={[styles.arrow, cl].join(" ")}>
      <path d="M7 10l5 5 5-5z"></path>
    </svg>
  );
};

const Select = (props: SelectProps) => {
  const { options, variant, label, selected, isError, disabled } = props;
  const ref = useRef<HTMLLIElement>(null);

  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(
    selected ? selected : "",
  );

  const handleClickOption = (option: string) => {
    setSelectedOption(option);
  };

  const handleSelectOption = (
    option: string,
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>,
  ) => {
    e.stopPropagation();
    handleClickOption(option);
    setIsOpenSelect(false);
  };

  const handleShowOptions = () => {
    setIsOpenSelect((isOpen) => !isOpen);
  };

  return (
    <div
      className={styles["dropdown-container"]}
      tabIndex={-1}
      onBlur={(e) => e.relatedTarget === null && setIsOpenSelect(false)}
      onClick={handleShowOptions}
    >
      <div className={styles["dropdown-header"]}>
        <TextField
          id="dropdown-header"
          variant={variant}
          label={label}
          readonly={true}
          value={selectedOption}
          isError={isError}
          disabled={disabled}
        />
        <Icon cl={isOpenSelect ? styles["rotated-arrow"] : ""} />
      </div>
      {isOpenSelect && (
        <div
          className={styles["dropdown-opotions-container"]}
          data-testid={"optionsList"}
        >
          <ul className={styles["dropdown-options"]}>
            {options &&
              options.map((el) => (
                <Option
                  value={el.value}
                  ref={ref}
                  key={el.value}
                  onClick={(e) => {
                    handleSelectOption(el.value, e);
                  }}
                ></Option>
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Select;
