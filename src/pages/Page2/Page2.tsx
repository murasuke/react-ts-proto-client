import { Link } from 'react-router-dom';
import React, { VFC, useEffect, useContext } from 'react';
import { Page2ContextProvider, Page2Context } from './page2Reducer';
import { InputComponent1, InputComponent2 } from './InputComponent2';
import { SiteContext } from '../../utils/SiteContext';
import { postPage2 } from '../../api';

/**
 * contextを利用するためにはコンポーネントをProvider内部に配置する必要があるため、
 * Formを切り出してContextを利用する
 */
const Page2Form: VFC = () => {
  const { state } = useContext(Page2Context);
  const { dispatch: siteDispatch } = useContext(SiteContext);
  useEffect(() => {
    siteDispatch({ type: 'CHANGE_PAGE_NAME', strValue: 'Page2', numValue: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    alert(JSON.stringify(state, null, '\t'));

    // バックエンドへ送信
    const response = await postPage2(state);
    if (response.status !== 200) {
      console.log(response.statusText);
    }
  };

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
      * ・フォーム全体の入力値(inputData)は、Page1が保持する。
      <br />
      *
      ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。
      <br />
      * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。
      <br />
    </>
  );
};

/**
 * ・フォーム全体の入力値(inputData)は、Page1が保持する。
 * ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。
 * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。
 */
const Page2: VFC = () => (
  <>
    <h3>Page2</h3>
    <ul>
      <li>
        <Link to="/">TopMenu</Link>
      </li>
    </ul>
    <Page2ContextProvider>
      <Page2Form />
    </Page2ContextProvider>
  </>
);

export default Page2;
