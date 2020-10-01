import React, { Component } from 'react';
import Social from './Social.jsx';
import Copyright from './Copyright.jsx';


class Footer extends Component {
    render () {
        return(
        <div className="footer">
            <Social />
            <Copyright />
        </div>

        )
    }
}

export default Footer