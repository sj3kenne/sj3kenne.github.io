import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';
import '../App.css';

class Navbar extends Component {
    render () {
        return (
            <div className="navigation">
            {/* <img src={logo} className="logo" alt="Logo Image" /> */}   

                <div class='sam'>
                    <a href="/projects" className="nounderline">Sam Kennedy</a>
                </div>

                <div className="navigation-sub">

                    <NavLink to="/projects" className="nav-item nav-space nounderline" activeClassName="active">Projects</NavLink>
                    <NavLink to="/articles" className="nav-item nav-space nounderline" activeClassName="active">Articles</NavLink>
                    <NavLink to="/about" className="nav-item nav-space nounderline" activeClassName="active">About</NavLink>
                    <NavLink to="/resume" className="nav-item nounderline" activeClassName="active">Resume</NavLink>

                </div>
                <br></br>
            </div>
        )
    }
}

export default Navbar;