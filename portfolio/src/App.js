import React from 'react';
import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { Redirect, BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import Projects from './contents/Projects.jsx';
import Articles from './contents/Articles.jsx';
import About from './contents/About.jsx';
import Resume from './contents/Resume.js';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// CSS stuff
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 404 page
import NotFoundPage from './NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="body">
          <Navbar />
          <Switch>
            <Route path="/projects" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/404" component={NotFoundPage} />
            <Redirect to="/404" />
          </Switch>
          
          <Footer />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
