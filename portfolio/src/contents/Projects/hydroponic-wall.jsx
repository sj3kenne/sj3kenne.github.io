import React from "react"
 
import firstIteration from '../../images/Hydroponics/hydro-first-iteration.jpg';
import poles1 from '../../images/Hydroponics/hydro-poles.jpg';
import poles2 from '../../images/Hydroponics/hydro-poles2.jpg';
import SecondIteration from '../../images/Hydroponics/hydro-second-iteration.jpg';
import hydroTop from '../../images/Hydroponics/hydro-top.jpg';
import screwHoles from '../../images/Hydroponics/hyrdo-screw-holes.jpg';

function Hyrdo(props) {
  return (

    <div>
      <h1>Hyrdoponic Wall</h1>
      <p>Taking some inspiration online, and with dreams of strawberries in a small space, I constructed a 40-pod vertical garden.</p>
      <p>My Mom, the garden expert, and I haven't exactly figured out how to get the waterflow quite right for a demanding fruit like strawberries.</p>
      <p>Nevertheless, I am confident one day soon I'll be eating juicy small footprint strawberries.</p>

      <figure>
        <img src={poles1}/>
        <figcaption>We organized the poles so the assembly would be balanced.</figcaption>
      </figure>

      <figure>
        <img src={poles2}/>
        <figcaption>Another angle of poles.</figcaption>
      </figure>
      
      <figure>
        <img src={hydroTop}/>
        <figcaption>After connecting the poles to the top line, which contained the flow of water, we had to do some thinking about how to balance the outro water line at the bottom.</figcaption>
      </figure>

      <figure>
        <img src={screwHoles}/>
        <figcaption>I prepared the trough by drilling through and securing the assembly to aluminum beams. We connected them with some custom nuts and bolts.</figcaption>
      </figure>

      <figure>
        <img src={firstIteration}/>
        <figcaption>This is the first attempt to pump water vertically up the assembly. The pump was too weak.</figcaption>
      </figure>

      <figure>
        <img src={SecondIteration}/>
        <figcaption>After doubling the size of the pump we were able to get a consistent flow of water to the top. We had to do some troubleshooting to determine if water flow was sufficient in each growing channel.</figcaption>
      </figure>

    </div>
  )
}
 
export default Hyrdo;