import { FC } from "react";
export interface TextFieldProps {
    disabled: boolean;
    error: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    label: string | number;
    placeholder?: string | undefined;
}
declare const TextField: FC<TextFieldProps>;
export default TextField;
