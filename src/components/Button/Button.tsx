import React from "react";
import './Button.less';

export interface ButtonProps {
  children: string | JSX.Element | JSX.Element[];
  onClick: () => void;
  disabled?: boolean;
  mode?: 'default' | 'primary' | 'white';
  size?: 'sm' | 'lg' | 'md' | 'xlg';
  icon?: {
    value: JSX.Element,
    position: 'right' | 'left'
  }
}

const Button = ({
                  icon,
                  mode = 'default',
                  size = 'lg',
                  disabled = false,
                  onClick,
                  children,
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
      { icon && icon.position === 'left' && icon.value }
      { children }
      { icon && icon.position === 'right' && icon.value }
    </button>
  );
};

export default Button;
