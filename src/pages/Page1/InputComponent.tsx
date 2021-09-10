/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { VFC, useState } from 'react';

export type InputPropsType = {
  id: string;
  title: string;
  message: string;
  // handleChange: (e: {name:string, value: string, e?: React.ChangeEvent<HTMLInputElement>}) => void
  handleChange: (e: { [index: string]: string }) => void;
};

export const InputComponent1: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const { message: msg, title, id } = props;
  const message = checked ? '' : <> {msg}</>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value === '1');
    props.handleChange({ [e.target.name]: e.target.value });
  };

  return (
    <div style={{ padding: '10px' }}>
      <h3>{title}</h3>
      <div>
        <label>
          <input
            type="radio"
            name={`select_${id}`}
            value="1"
            onChange={handleChange}
          />
          はい
        </label>{' '}
        <br />
        <label>
          <input
            type="radio"
            name={`select_${id}`}
            value="0"
            onChange={handleChange}
          />
          いいえ
        </label>
        {message}
      </div>
    </div>
  );
};

export const InputComponent2: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const [inputText, setInputText] = useState('');
  const { title, id } = props;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value === '1');
    if (e.target.value === '1') {
      setInputText('');
      props.handleChange({
        [e.target.name]: e.target.value,
        [`text_${props.id}`]: '',
      });
    } else {
      props.handleChange({ [e.target.name]: e.target.value });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    props.handleChange({ [e.target.name]: e.target.value });
  };

  const message = checked ? (
    ''
  ) : (
    <>
      {' '}
      <input
        type="text"
        name={`text_${id}`}
        onChange={handleInputChange}
        value={inputText}
      />{' '}
    </>
  );

  return (
    <div style={{ padding: '10px' }}>
      <h3>{title}</h3>
      <div>
        <label>
          <input
            type="radio"
            name={`select_${id}`}
            value="1"
            onChange={handleRadioChange}
          />
          はい
        </label>{' '}
        <br />
        <label>
          <input
            type="radio"
            name={`select_${id}`}
            value="0"
            onChange={handleRadioChange}
          />
          いいえ
        </label>
        {message}
      </div>
    </div>
  );
};
