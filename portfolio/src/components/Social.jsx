import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

// const element = <FontAwesomeIcon icon={faGithub} />
// const element2 = <FontAwesomeIcon icon={faLinkedinIn} />
// const element3 = <FontAwesomeIcon icon={faFacebook} />

class Social extends Component {
    render() {
        return (
            <div className="social-bar">
                <div class="social social-margin">
                    <a href="https://github.com/sj3kenne" target="_blank" className="nounderline"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                </div>
                <div class="social social-margin">
                    <a href="https://Linkedin.com/in/samken415" target="_blank" className="nounderline"><FontAwesomeIcon icon={faLinkedinIn} size="2x" /></a>
                </div>
                <div class="social">
                    <a href="https://www.facebook.com/samuel.kennedy.3323" target="_blank" className="nounderline"><FontAwesomeIcon icon={faFacebook} size="2x" /></a>
                </div>
            </div>            
        )
    }
}
    
export default Social;