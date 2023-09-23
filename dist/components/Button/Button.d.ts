import React from "react";
import './Button.less';
export interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    mode?: 'default' | 'primary';
    size?: 'sm' | 'md';
}
declare const Button: ({ mode, size, disabled, onClick, label, ...props }: ButtonProps) => React.JSX.Element;
export default Button;
