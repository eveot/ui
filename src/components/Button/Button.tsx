import React from "react";
import './Button.less';

export interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  mode?: 'default' | 'primary';
  size?: 'sm' | 'md';
}

const Button = ({
                  mode = 'default',
                  size = 'md',
                  disabled = false,
                  onClick,
                  label,
                  ...props
                }: ButtonProps) => {

  return (
    <button
      onClick={onClick}
      className={
        [
          "ev-button",
          `ev-button-mode--${mode}`,
          `ev-button-size--${size}`,
          disabled && `ev-button-disabled--${mode}`
        ].join(' ')
      }
    >
      {label}
    </button>
  );
};

export default Button;
