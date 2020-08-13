import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './Projects.js';
import Articles from './Articles.js';
import About from './About.js';
import './App.css';

// 404 page
import NotFoundPage from './NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="navigation">
            {/* <img src={logo} className="logo" alt="Logo Image" /> */}
            <div className="navigation-sub">

              <Link to="/" className="item">Projects</Link>
              <Link to="/articles" className="item">Articles</Link>
              <Link to="/about" className="item">About</Link>

            </div>
          </div>

        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        
        
      </div>
    </BrowserRouter>
  );
}

export default App;
