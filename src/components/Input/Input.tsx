import React, {ChangeEvent} from "react";
import  './Input.less'

export interface ButtonProps {
  onChange: (value: ChangeEvent<HTMLInputElement>) => void;
  value: string | number;
  name: string;
  placeholder?: string;
  type?: 'number' | 'text' | 'password'
  size?: 'sm' | 'lg' | 'md';
}

const Input = (
  {
    size = 'md',
    placeholder,
    value,
    name,
    type,
    onChange,
    ...props
  }: ButtonProps) => {

  return (
    <input
      value={ value }
      type={ type }
      name={ name }
      onChange={
        (event) => onChange(event)
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
