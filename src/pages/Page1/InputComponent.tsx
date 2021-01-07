import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

export type InputPropsType = {
  id:string, 
  title: string, 
  message:string,
  handleChange: (e: {name:string, value: string, e?: React.ChangeEvent<HTMLInputElement>}) => void
}

export function InputComponent1(props: InputPropsType){
    const [checked, setChecked] = useState(true);
    const message = checked?(''):(<> {props.message}</>);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
      setChecked(e.target.value === "1");
      props.handleChange({ name:e.target.name, value: e.target.value, e });
    }

    return (
      <div style={{padding:"10px"}}> 
        <h3>{props.title}</h3>
        <p>
            <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleChange } />はい</label> <br />
            <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleChange } />いいえ</label>
            { message }           
        </p>   
        <p></p>
      </div>
    ); 
}

export function InputComponent2(props: InputPropsType){
  const [checked, setChecked] = useState(true);
  const [inputText, setInputText] = useState("");

  const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setChecked(e.target.value === "1");
    if(!checked){ 
      setInputText("");
      props.handleChange({ name:`text_${props.id}`, value: "", e })
    } 
    props.handleChange({ name:e.target.name, value: e.target.value, e });
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement> ) =>{
    setInputText(e.target.value); 
    props.handleChange({ name:e.target.name, value: e.target.value, e });
  }

  const message = checked?(''):(<> <input type="text" name={`text_${props.id}`} onChange={handleInputChange} value={inputText} ></input> </>);

  return (
    <div style={{padding:"10px"}}> 
      <h3>{props.title}</h3>
      <p>
          <label><input type="radio" name={`select_${props.id}`} value="1" onChange={ handleRadioChange } />はい</label> <br />
          <label><input type="radio" name={`select_${props.id}`} value="0" onChange={ handleRadioChange } />いいえ</label>
          { message }           
      </p>   
      <p></p>
    </div>
  ); 
}