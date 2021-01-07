import { debug } from 'console';
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { InputComponent1, InputComponent2 } from "./InputComponent";
import { postPage1 } from "../../api";



export function Page1(){
  const [inputData, setInputData] = useState({});
  const hancleChange = (e: {name:string, value: string, e?: React.ChangeEvent<HTMLInputElement>}) => {
    setInputData({
      ...inputData,
      [e.name]: e.value,
    });
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputData);
    const response = await postPage1(inputData);
    if( response.status !== 200 ){
      console.log(response.statusText);
    }
  }
    return (
      <> 
        <div>Page1</div>
        <ul>
            <li><Link to="/">TopMenu</Link></li>
        </ul>
        <form onSubmit={ handleSubmit }>
          <InputComponent1 id="id1" title="title1" message="message1" handleChange={hancleChange} />
          <InputComponent1 id="id2" title="title2" message="message2" handleChange={hancleChange}  />
          <InputComponent2 id="id3" title="title3" message="message3" handleChange={hancleChange}  />        
          <InputComponent2 id="id4" title="title4" message="message4" handleChange={hancleChange}  />  
          <p>
            <input type="submit" value="登録" />
          </p>                  
        </form>


      </>
    );
}