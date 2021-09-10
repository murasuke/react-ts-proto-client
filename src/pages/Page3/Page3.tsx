import { Link } from 'react-router-dom';
import React, { VFC, useContext, useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Page3ContextProvider, Page3Context } from './page3Reducer';
import { InputComponent1, InputComponent2 } from './InputComponent3';
import { SiteContext } from '../../utils/SiteContext';
// import { postPage3 } from '../../api';

/**
 * contextを利用するためにはコンポーネントをProvider内部に配置する必要があるため、
 * Formを切り出してContextを利用する
 */
const Page3Form = () => {
  const { state } = useContext(Page3Context);
  const { dispatch: siteDispatch } = useContext(SiteContext);

  useEffect(() => {
    siteDispatch({ type: 'CHANGE_PAGE_NAME', strValue: 'Page3', numValue: 0 });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // eslint-disable-next-line @typescript-eslint/require-await
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(state);
    // alert(JSON.stringify(state, null, "\t"));
    siteDispatch({ type: 'CHANGE_USER', strValue: 'userPage3', numValue: 333 });

    // // バックエンドへ送信
    // const response = await postPage3(state);
    // if (response.status !== 200) {
    //   console.log(response.statusText);
    // }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <InputComponent1 id="id1" title="title1" message="message1" />
        <InputComponent1 id="id2" title="title2" message="message2" />
        <InputComponent2 id="id3" title="title3" message="message3" />
        <InputComponent2 id="id4" title="title4" message="message4" />
        <p>
          <Button type="submit" variant="contained" color="primary">
            登録
          </Button>
        </p>
      </form>
      <br />
      * ・フォーム全体の入力値(inputData)は、Page3が保持する。
      <br />
      *
      ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。
      <br />
      * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。
      <br />
      * ・Material-UIコンポーネントのサンプル
      <br />
    </>
  );
};

/**
 * ・フォーム全体の入力値(inputData)は、Page3が保持する。
 * ・useContextフックを使うことで、propsにコールバックを引き渡す必要はない。
 * ・ページとコンポーネントの階層が深くなる場合でも複雑化しない。
 */
const Page3: VFC = () => (
  <>
    <h3>Page2</h3>
    <ul>
      <li>
        <Link to="/">TopMenu</Link>
      </li>
    </ul>
    <Page3ContextProvider>
      <Page3Form />
    </Page3ContextProvider>
  </>
);

export default Page3;
