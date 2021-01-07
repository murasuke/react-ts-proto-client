import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { TopMenu } from "./pages/TopMenu";
import { Page1 } from "./pages/Page1/Page1";
import { Page2 } from "./pages/Page2";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>header</header>
        <div className="main-container">
          <main className="content">
            <Switch>
              <Route path="/" exact component={TopMenu} />
              <Route path="/page1" component={Page1} />
              <Route path="/page2" component={Page2} />
            </Switch>
          </main>
          <nav className="side-nav">nav</nav>
          <aside className="side-bar">side</aside>
        </div>
        <footer>footer</footer>
      </div>      
    </Router>
  );
}

export default App;
