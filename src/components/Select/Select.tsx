import React, { forwardRef, useRef, useState, MouseEvent } from 'react';
import styles from './Select.module.css'
import TextField from '../TextField/TextField';
import { error } from 'console';

export interface SelectProps {
    disabled?: boolean;
    error?: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    options?: OptionProps[];
    label?: string
    selected?: string
}

interface OptionProps {
    value: string;
    onClick?: (e:  MouseEvent<HTMLLIElement, globalThis.MouseEvent>) => void,
    cl?: string
}

const Option = forwardRef<HTMLLIElement, OptionProps>(function Option(props, ref) {
    const { value, onClick, cl } = props
    return <li className={styles['option']} ref={ref} onClick={onClick} >{value}</li>
})


const Icon = ({ cl }: { cl: string }) => {
    return (
        <svg className={[styles.arrow, cl].join(' ')}><path d='M7 10l5 5 5-5z'></path></svg>
    )
}

const Select = (props: SelectProps) => {
    const { options, variant, label, selected, error } = props;
    const ref = useRef<HTMLLIElement>(null)

    const [isOpenSelect, setIsOpenSelect] = useState(false);
    const [selectedOption, setSelectedOption] = useState<string>(selected ? selected :  '');
    
    const onChangeSelected = (option: string) => {
        setSelectedOption(option);
    };
    const handleSelectOption = (
        option: string,
        e: MouseEvent<HTMLLIElement, globalThis.MouseEvent>
    ) => {
        e.stopPropagation();
        onChangeSelected(option);
        setIsOpenSelect(false);
    };
    const handleShowOptions = () => {
        setIsOpenSelect((isOpen) => !isOpen);
    }
    
    return (
        <div className={styles['dropdown-container']} tabIndex={-1}  onBlur={e => e.relatedTarget === null && setIsOpenSelect(false)}   onClick={handleShowOptions}>
            <div className={styles['dropdown-header']} >
                <TextField variant={variant} label={label} readonly value={selectedOption} error={error} />
                <Icon cl={isOpenSelect ? styles['rotated-arrow'] : ''} />
            </div>
            {isOpenSelect &&
                <div className={styles['dropdown-opotions-container']}>
                    <ul className={styles['dropdown-options']} >
                        {options && options.map(el => <Option value={el.value} ref={ref} key={el.value} onClick={(e) => handleSelectOption(el.value, e)} ></Option>)}
                    </ul>
                </div>
            }
        </div>
    )
}

export default Select;