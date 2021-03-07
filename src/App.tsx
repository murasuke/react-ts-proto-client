import React , {useReducer, useContext, useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./component/Header";
import { TopMenu } from "./pages/TopMenu";
import { Page1 } from "./pages/Page1/Page1";
import { Page2 } from "./pages/Page2/Page2";
import { Page3 } from "./pages/Page3/Page3";
import { ContextProvider,  SiteContext, SiteContextDataType } from './utils/SiteContext';
import './App.css';

function App() {
  const { state } = useContext(SiteContext);
  return (
    <Router>
      <div className="App">
        <Header {...state} />
        <div className="main-container">
          <main className="content">
            <Switch>
              <Route path="/" exact component={TopMenu} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
              <Route path="/page3" component={Page3} />
            </Switch>
          </main>
          <nav className="side-nav">nav</nav>
          <aside className="side-bar">side</aside>
        </div>
        <footer><h3>footer</h3></footer>
      </div>
    </Router>
  );
}

export default App;
