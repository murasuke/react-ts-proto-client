import React, { useState, useEffect, useContext } from 'react';
import { Page2Context } from './page2Reducer';

export type InputPropsType = {
  id:string, 
  title: string, 
  message:string,
}

export function InputComponent1(props: InputPropsType){
    const [checked, setChecked] = useState(true);
    const { state, dispatch } = useContext(Page2Context);

    const message = checked?(''):(<> {props.message}</>);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
      setChecked(e.target.value === "1");
      dispatch ({ type: "CHANGE_VALUE", name: e.target.name, value: e.target.value });
    }

    return (
      <div style={{padding:"10px"}}> 
        <h3>{props.title}</h3>
        <div>
            <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleChange } />はい</label> <br />
            <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleChange } />いいえ</label>
            { message }           
        </div>   
      </div>
    ); 
}

/**
 * 
 * @param props 
 */
export function InputComponent2(props: InputPropsType){
  const [checked, setChecked] = useState(true);
  const [inputText, setInputText] = useState("");
  const { state, dispatch } = useContext(Page2Context);

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setChecked(e.target.value === "1");
    dispatch ({ type: "CHANGE_VALUE", name: e.target.name, value: e.target.value });
    if(e.target.value === "1"){ 
      setInputText("");
      dispatch ({ type: "CLEAR_VALUE",  name: `text_${props.id}`, value: "" });
    }    
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setInputText(e.target.value);
    dispatch ({ type: "CHANGE_VALUE", name: e.target.name, value: e.target.value });
  }

  const message = checked?(''):(<> <input type="text" name={`text_${props.id}`} onChange={handleInputChange} value={inputText} ></input> </>);

  return (
    <div style={{padding:"10px"}}> 
      <h3>{props.title}</h3>
      <div>
          <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleRadioChange } />はい</label> <br />
          <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleRadioChange } />いいえ</label>
          { message }           
      </div>   
    </div>
  ); 
}