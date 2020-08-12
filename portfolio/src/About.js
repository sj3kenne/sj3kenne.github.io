import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';


import Resume from './Resume.js';

function About(props) {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/Resume" component={Resume} />

        <h1>About</h1>
        <p>Link to my resume:</p>
        <Link to="/Resume">Resume</Link>
      </div>
    </BrowserRouter>
    
  )
}
 
export default About;