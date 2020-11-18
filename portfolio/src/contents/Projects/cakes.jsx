import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
 
//import cake1 from '../../images/Headrest/headrest-final-physical1.jpg';

class Cakes extends Component {
  render() {
    return (

      <div>
        <h1>Cakes</h1>
        {/* <img src={}/> */}
        <p>My wife and I bakes cakes for weddings, events, and sometimes just because we both have a sweet tooth. Below is a selection of cakes we have made.</p>

        <div class="social">
          <a href="https://www.instagram.com/cakesbykennedy/" target="_blank" className="nounderline"><FontAwesomeIcon icon={faInstagram} size="2x" /></a>
          <p style={{"padding-left": "10px"}}>Check out my wife's instagram! I can't claim credit on helping on all though.</p>
        </div>




        {/* <figure>
          <img src={finalRender}/>
          <figcaption>Caption goes here</figcaption>
        </figure> */}
      </div>
    ) 
  }
}
 
export default Cakes; 