import React, {JSX} from "react";
import './Modal.less';
import Input from "../Input";
import Button from "../Button";

export interface ModalProps {
  title: string | JSX.Element;
  type: 'confirmation' | 'input' | 'hint';
  text?: { value: string, update: (text: string) => void }
  onClick: (accepted: boolean, value?: string | number) => void;
  subtitle?: string;
  placeholder?: string;
}

const Modal = ({
                  text,
                 title,
                 subtitle,
                 placeholder = 'Placeholder',
                 type = 'confirmation',
                 onClick,
               }: ModalProps) => {

  return (
    <div
      className={
        [
          "ev-modal",
          `ev-modal-mode--${type}`
        ].join(' ')
      }
    >
      <h3>
        { title }
      </h3>
      {
        subtitle && (
          <p>{ subtitle }</p>
        )
      }
      {
        type === 'input' && text && (
          <Input
            placeholder={ placeholder }
            onChange={ (e) => text.update(e.target.value) }
            value={ text.value }
            size='lg'
            name='modal'
          />
        )
      }
      <div className='ev-modal-buttons'>
        {
          type !== 'hint' && (
            <Button
              mode='default'
              size='lg'
              onClick={() => text && onClick(false, text && text.value)}
            >
              Отменить
            </Button>
          )
        }
        <Button
          mode='primary'
          size='lg'
          onClick={ () => onClick(true, text && text.value) }
        >
          { type === 'hint' ? 'Понятно' : 'Подтвердить' }
        </Button>
      </div>
    </div>
  );
};

export default Modal;
