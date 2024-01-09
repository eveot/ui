import React, {JSX, useState} from "react";
import './Modal.less';
import Input from "../Input";
import Button from "../Button";

export interface ModalProps {
  title: string | JSX.Element;
  type: 'confirmation' | 'input' | 'hint';
  onClick: (accepted: boolean, value?: string | number) => void;
  subtitle?: string;
  placeholder?: string;
}

const Modal = ({
                 title,
                 subtitle,
                 placeholder = 'Placeholder',
                 type = 'confirmation',
                 onClick,
               }: ModalProps) => {

  const [text, setText] = useState('')

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
        type === 'input' && (
          <Input
            placeholder={ placeholder }
            onChange={ (e) => setText(e.target.value) }
            value={ text }
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
              onClick={() => onClick(false, text)}
            >
              Отменить
            </Button>
          )
        }
        <Button
          mode='primary'
          size='lg'
          onClick={ () => onClick(true, text) }
        >
          { type === 'hint' ? 'Понятно' : 'Подтвердить' }
        </Button>
      </div>
    </div>
  );
};

export default Modal;
