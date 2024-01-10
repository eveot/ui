import React, {JSX, useState} from "react";
import './Dropdown.less';

export interface TooltipProps {
  children: string | JSX.Element;
  callbacks: { value: JSX.Element | string, callback: { mouseMove?: () => void, click?: () => void, mouseLeave?: () => void } }[];
}

const Dropdown = ({
                  children,
                  callbacks
                }: TooltipProps) => {

  const [open, setOpen] = useState(false);

  const click = (callback?: () => void) => {
    callback && callback();

    setOpen(false);
  }

  return (
    <div
      className="ev-dropdown"
      onMouseLeave={ () => setOpen(false) }
    >
      <div
        onClick={ () => setOpen(!open) }
        className={
          [
            "ev-dropdown-box",
            open && `ev-dropdown-box--show`,
          ].join(' ')
        }
      >
        { children }
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
          <path d="M14.9324 6.81641H9.74075H5.06572C4.26572 6.81641 3.86572 7.78307 4.43239 8.34975L8.74908 12.6664C9.44075 13.3581 10.5657 13.3581 11.2574 12.6664L12.8991 11.0247L15.5741 8.34975C16.1324 7.78307 15.7324 6.81641 14.9324 6.81641Z" fill="#515356"/>
        </svg>
      </div>
      <div
        className={
          [
            "ev-dropdown-callbacks",
            open && `ev-dropdown-callbacks--show`,
          ].join(' ')
        }
      >
        {
          callbacks.map(
            callback => (
              <div
                onClick={ () => click(callback.callback.click) }
                className='ev-dropdown-callbacks--box'
                onMouseMove={ callback.callback.mouseMove }
                onMouseLeave={ callback.callback.mouseLeave }
              >
                { callback.value }
              </div>
            )
          )
        }
      </div>
    </div>
  );
};

export default Dropdown;
