import React, {Component} from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
    render () {
        return (
            <div className="navigation">
            {/* <img src={logo} className="logo" alt="Logo Image" /> */}
                <div className="navigation-sub">

                <Link to="/" className="item">Projects</Link>
                <Link to="/articles" className="item">Articles</Link>
                <Link to="/about" className="item">About</Link>
                <Link to="/resume" className="item">Resume</Link>

                </div>
                <br></br>
            </div>
        )
    }
}

export default Navbar;