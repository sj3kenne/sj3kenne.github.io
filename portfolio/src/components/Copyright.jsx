import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopyright } from '@fortawesome/free-regular-svg-icons'

const element = <FontAwesomeIcon icon={faCopyright} />

class Copyright extends Component {
    render () {
        return(
        <div className="copyright">
            <FontAwesomeIcon icon={faCopyright} />
            &nbsp;2020, Sam Kennedy
        </div>

        )
    }
}

export default Copyright