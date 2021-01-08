import { Link } from "react-router-dom";
import React , {useReducer, useContext} from 'react';
import { Page2ContextProvider, Page2Context } from "./page2Reducer"
import { InputComponent1, InputComponent2 } from "./InputComponent2";
import { postPage2 } from "../../api";

/**
 * ・フォーム全体の入力値(inputData)は、Page1が保持する。
 * ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。
 * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。
 */
export function Page2() {
  return (
    <>
      <h3>Page2</h3>
      <ul>
        <li><Link to="/">TopMenu</Link></li>
      </ul>
      <Page2ContextProvider>
        <Page2Form />
      </Page2ContextProvider>
    </>
  )
}

/**
 * contextを利用するためにはコンポーネントをProvider内部に配置する必要があるため、
 * Formを切り出してContextを利用する
 */
function Page2Form() {
  const { state, dispatch } = useContext(Page2Context);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    alert(JSON.stringify(state, null, "\t"));

    // バックエンドへ送信
    const response = await postPage2(state);
    if (response.status !== 200) {
      console.log(response.statusText);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputComponent1 id="id1" title="title1" message="message1" />
        <InputComponent1 id="id2" title="title2" message="message2" />
        <InputComponent2 id="id3" title="title3" message="message3" />
        <InputComponent2 id="id4" title="title4" message="message4" />
        <p>
          <input type="submit" value="登録" />
        </p>
      </form>
      <br />
 * ・フォーム全体の入力値(inputData)は、Page1が保持する。<br />
 * ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。<br />
 * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。<br />
    </>
  )
}