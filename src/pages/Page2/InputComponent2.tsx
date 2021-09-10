/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { VFC, useState, useContext } from 'react';
import { Page2Context } from './page2Reducer';

export type InputPropsType = {
  id: string;
  title: string;
  message: string;
};

export const InputComponent1: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const { dispatch } = useContext(Page2Context);
  const { message: msg, title, id } = props;

  const message = checked ? '' : <> {msg}</>;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value === '1');
    dispatch({
      type: 'CHANGE_VALUE',
      name: e.target.name,
      value: e.target.value,
    });
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

/**
 *
 * @param props
 */
export const InputComponent2: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const [inputText, setInputText] = useState('');
  const { dispatch } = useContext(Page2Context);
  const { title, id } = props;

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(e.target.value === '1');
    dispatch({
      type: 'CHANGE_VALUE',
      name: e.target.name,
      value: e.target.value,
    });
    if (e.target.value === '1') {
      setInputText('');
      dispatch({ type: 'CLEAR_VALUE', name: `text_${id}`, value: '' });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
    dispatch({
      type: 'CHANGE_VALUE',
      name: e.target.name,
      value: e.target.value,
    });
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
