export interface TextFieldProps {
    disabled?: boolean;
    error?: boolean;
    variant: 'outlined' | 'filled' | 'standart';
    label?: string | number;
    placeholder?: string | undefined;
    focused?: boolean;
}
declare const TextField: (props: TextFieldProps) => import("react/jsx-runtime").JSX.Element;
export default TextField;
