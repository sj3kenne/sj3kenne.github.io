import React from "react"
 
import engine1 from '../../images/JetEngine/engine1.JPG';
import engine2 from '../../images/JetEngine/engine2.JPG';
import bridgeBuilt from '../../images/LEDBridge/bridge-built.jpg';
import BridgeDesk from '../../images/LEDBridge/bridge-desk.jpg';

function Prints(props) {
  return (

    <div>
      <h1>3D Printing Projects</h1>
      <p>This project currently under development.</p>




      <figure>
        <img src={engine2}/>
        <figcaption>Caption goes here</figcaption>
      </figure>
    </div>
  )
}
 
export default Prints;