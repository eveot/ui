import React, {JSX} from "react";
import './Tip.less';

export interface TipProps {
  text: string[]
  tip: string | JSX.Element
  mode?: 'default' | 'primary' | 'grey';
}

const Tip = ({
                  tip,
                  text,
                  mode = 'default',
                  ...props
                }: TipProps) => {

  return (
    <div
      className={
        [
          "ev-tip",
          `ev-tip-mode--${mode}`,
        ].join(' ')
      }
    >
      <p>{ text[0] }</p>
      <div>
        { tip }
      </div>
      { text[1] && <p>{ text[1] }</p> }
    </div>
  );
};

export default Tip;
