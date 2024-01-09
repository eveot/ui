import React from "react";
import  './Radio.less'

export interface RadioProps {
  isActive: boolean;
}

const Radio = (
  {
    isActive = false
  }: RadioProps) => {

  return (
    <label
      className="ev-radio"
    >
      <div className={
        [
          "ev-radio--box",
          isActive && "ev-radio--box_active",
        ].join(' ')
      }>
        <div />
      </div>
    </label>
  );
};

export default Radio;
