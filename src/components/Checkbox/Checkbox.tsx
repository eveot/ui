import React, {useState} from "react";
import  './Checkbox.less'
import {IconCheckbox} from "../Icons/Icons";

export interface ButtonProps {
  onClick: () => void;
  label: string;
  isActive: boolean;
}

const Checkbox = (
  {
    isActive = false,
    onClick,
    label,
    ...props
  }: ButtonProps) => {

  return (
    <label
      className="ev-checkbox"
      onClick={ onClick }
    >
      <div className={
        [
          "ev-checkbox--box",
          isActive && "ev-checkbox--box_active",
        ].join(' ')
      }
      >
        <IconCheckbox />
      </div>
      <span>
        { label }
      </span>
    </label>
  );
};

export default Checkbox;
