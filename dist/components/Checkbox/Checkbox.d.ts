import React from "react";
import './Checkbox.less';
export interface ButtonProps {
    onClick: () => void;
    label: string;
    isActive: boolean;
}
declare const Checkbox: ({ isActive, onClick, label, ...props }: ButtonProps) => React.JSX.Element;
export default Checkbox;
