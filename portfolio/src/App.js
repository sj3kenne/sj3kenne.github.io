import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './contents/Projects.js';
import Articles from './contents/Articles.js';
import About from './contents/About.js';
import Resume from './contents/Resume.js';
import Navbar from './components/Navbar.jsx';
import Social from './components/Social.jsx';
import './App.css';

// 404 page
import NotFoundPage from './NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>

        <Switch>
          <Route exact path="/" component={Projects} />
          <Route path="/articles" component={Articles} />
          <Route path="/about" component={About} />
          <Route path="/resume" component={Resume} />
          <Route path="*" component={NotFoundPage}/>
        </Switch>
        
        <Social />
      </div>
    </BrowserRouter>
  );
}

export default App;
