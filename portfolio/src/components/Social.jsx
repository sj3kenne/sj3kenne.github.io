import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faFacebook, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const element = <FontAwesomeIcon icon={faGithub} />
const element2 = <FontAwesomeIcon icon={faLinkedinIn} />
const element3 = <FontAwesomeIcon icon={faFacebook} />

class Social extends Component {
    render() {
        return (
            <div class="social">
                <a href="https://github.com/sj3kenne" target="_blank"><FontAwesomeIcon icon={faGithub} /></a>
                <a href="https://Linkedin.com/in/samken415" target="_blank"><FontAwesomeIcon icon={faLinkedinIn}/></a>
                <a href="https://www.facebook.com/" target="_blank"><FontAwesomeIcon icon={faFacebook}/></a>
            </div>
            )
        }
    }
    
export default Social;