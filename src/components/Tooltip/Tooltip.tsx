import React, {JSX, useState} from "react";
import './Tooltip.less';

export interface TooltipProps {
  children: string | JSX.Element
  tip: { hint: string | JSX.Element, position: 'left' | 'left-top' | 'left-bottom' | 'bottom' | 'bottom-right' | 'bottom-left' | 'right' | 'right-top' | 'right-bottom' | 'top' | 'top-left' | 'top-right' }
}

const Tooltip = ({
                  children,
                  tip
                }: TooltipProps) => {

  const [show, setShow] = useState(false);

  return (
    <div
      onMouseMove={ () => setShow(true) }
      onMouseLeave={ () => setShow(false) }
      className="ev-tooltip"
      style={{
        flexDirection: (tip.position.split('-')[0] === 'left' || tip.position.split('-')[0] === 'right') ? 'row' : 'column'
      }}
    >
      { children }
      <div
        className={
          [
            "ev-tooltip-hint",
            show && `ev-tooltip-hint--show`,
            `ev-tooltip-hint--position-${ tip.position }`,
          ].join(' ')
        }
      >
        { tip.hint }
      </div>
    </div>
  );
};

export default Tooltip;
