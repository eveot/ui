import React from "react";
import  './Input.less'

export interface ButtonProps {
  onChange: (value: string) => void;
  placeholder?: string;
  size?: 'sm' | 'md';
}

const Input = (
  {
    size = 'md',
    placeholder,
    onChange,
    ...props
  }: ButtonProps) => {

  return (
    <input
      onChange={
        (event) => onChange(event.target.value)
      }
      className={
        [
          "ev-input",
          `ev-input-size--${ size }`
        ].join(' ')
      }
      placeholder={ placeholder }
    />
  );
};

export default Input;
