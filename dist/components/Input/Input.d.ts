import React from "react";
import './Input.less';
export interface ButtonProps {
    onChange: (value: string) => void;
    placeholder?: string;
    size?: 'sm' | 'md';
}
declare const Input: ({ size, placeholder, onChange, ...props }: ButtonProps) => React.JSX.Element;
export default Input;
