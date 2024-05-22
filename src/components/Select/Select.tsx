import React, { forwardRef, useRef, useState, MouseEvent } from 'react';
import styles from './Select.module.css'
import TextField from '../TextField/TextField';

export interface SelectProps {
    open?: boolean;
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
}

const Option = forwardRef<HTMLLIElement, OptionProps>(function Option(props, ref) {
    const { value, onClick } = props
    return <li className={styles['option']} ref={ref} onClick={onClick} >{value}</li>
})


const Icon = ({ cl }: { cl: string }) => {
    return (
        <svg className={[styles.arrow, cl].join(' ')}><path d='M7 10l5 5 5-5z'></path></svg>
    )
}

const Select = (props: SelectProps) => {
    const { options, variant, open, label, selected } = props;
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
        console.log('click on ontion', option)
        e.stopPropagation();
        onChangeSelected(option);
        setIsOpenSelect(false);
    };
    const handleShowOptions = () => {
        console.log('click on select')
        setIsOpenSelect((isOpen) => !isOpen);
    }
    
    return (
        <div className={styles['dropdown-container']}>
            <div className={styles['dropdown-header']} onClick={handleShowOptions}>
                <TextField variant={variant} label={label}  />
                {selectedOption}
                <Icon cl={open ? styles['rotated-arrow'] : ''} />
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