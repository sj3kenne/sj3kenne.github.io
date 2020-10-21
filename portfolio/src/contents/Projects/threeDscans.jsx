import React from "react"
 
import Brooke from '../../images/BodyScans/BrooklynScan.JPG';
import Jordan from '../../images/BodyScans/JordanScan.JPG';

function threeDscans(props) {
  return (

    <div>
      <h1>3D Scanning</h1>
      <p>I originally learned to do this with the intent to custom print expensive orthodicts. It's possible to scan, but printing with the same quality as they are delivered from the doctor is difficult. So instead I started scanning any model who was patient enough for me to loop around them with a camera.</p>
      <p>This is an exciting aspect of 3D printing, copy real life objects and then customize them to your desires.</p>
      
      <figure>
        <img src={Jordan}/>
        <figcaption>My brother in law wanted an action pose. I later printed this off and sent it to him.</figcaption>
      </figure>

      <figure>
        <img src={Brooke}/>
        <figcaption>Here is a bust of my beautiful wife Brooklyn!</figcaption>
      </figure>

    </div>
  )
}
 
export default threeDscans;