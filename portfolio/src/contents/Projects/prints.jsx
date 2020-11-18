import React from "react"
 
import engine1 from '../../images/JetEngine/engine1.JPG';
import engine2 from '../../images/JetEngine/engine2.JPG';
import bridgeBuilt from '../../images/LEDBridge/bridge-built.jpg';
import BridgeDesk from '../../images/LEDBridge/bridge-desk.jpg';

function Prints(props) {
  return (

    <div>
      <h1>3D Printing Projects</h1>
      <p>Here are some of my more interesting 3D printing projects!</p>

      <figure>
        <img src={engine1}/>
        <figcaption>Top view.</figcaption>
      </figure>

      <figure>
        <img src={engine2}/>
        <figcaption>Side view. I've seen people run leaf blowers through these to see them in action. They are really fun to spin.</figcaption>
      </figure>

      <figure>
        <img src={bridgeBuilt}/>
        <figcaption>After over a hundred hours of printing, and a dozen more for assembly.</figcaption>
      </figure>

      <figure>
        <img src={BridgeDesk}/>
        <figcaption>Here it is lit up over my desk.</figcaption>
      </figure>
    </div>
  )
}
 
export default Prints;