import React, { VFC, useState, useContext } from 'react';
import {
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Input,
  Box,
} from '@material-ui/core';
import { Page3Context } from './page3Reducer';

export type InputPropsType = {
  id: string;
  title: string;
  message: string;
};

export const InputComponent1: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const { dispatch } = useContext(Page3Context);
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
    <Box component="div">
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        {/* <div>
              <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleChange } />はい</label> <br />
              <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleChange } />いいえ</label>
              { message }
          </div>    */}
        <RadioGroup onChange={handleChange} name={`select_${id}`}>
          <FormControlLabel value="1" control={<Radio />} label="はい" />
          <FormControlLabel value="0" control={<Radio />} label="いいえ" />
          <FormHelperText>{message}</FormHelperText>
        </RadioGroup>
      </FormControl>
    </Box>
  );
};

/**
 *
 * @param props
 */
export const InputComponent2: VFC<InputPropsType> = (props) => {
  const [checked, setChecked] = useState(true);
  const [inputText, setInputText] = useState('');
  const { dispatch } = useContext(Page3Context);
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
      dispatch({ type: 'CLEAR_VALUE', name: `text_${props.id}`, value: '' });
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

  // const message = checked?(''):(<> <input type="text" name={`text_${props.id}`} onChange={handleInputChange} value={inputText} ></input> </>);
  const display = checked ? 'none' : 'block';

  return (
    // <div style={{padding:"10px"}}>
    //   <h3>{props.title}</h3>
    //   <div>
    //       <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleRadioChange } />はい</label> <br />
    //       <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleRadioChange } />いいえ</label>
    //       { message }
    //   </div>
    // </div>
    <Box component="div">
      <FormControl component="fieldset">
        <FormLabel component="legend">{title}</FormLabel>
        {/* <div>
            <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleChange } />はい</label> <br />
            <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleChange } />いいえ</label>
            { message }
        </div>    */}
        <RadioGroup onChange={handleRadioChange} name={`select_${id}`}>
          <FormControlLabel value="1" control={<Radio />} label="はい" />
          <FormControlLabel value="0" control={<Radio />} label="いいえ" />
        </RadioGroup>
        <Box component="span" display={display}>
          <Input
            name={`text_${id}`}
            onChange={handleInputChange}
            value={inputText}
          />
        </Box>
      </FormControl>
    </Box>
  );
};
