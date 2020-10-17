import React from "react"
 
import cherryStem from '../../images/Keycaps/cherry-stem.JPG';

function Keycaps(props) {
  return (

    <div>
      <h1>Keycaps</h1>
      <p>After my sucess with the Ergodox, I decided I wanted to tune it up a bit.</p>
      <p>You can see my multi coloured keys on the Ergodox page, but I was unsatisfied with printing quality of these, mainly due to poor PLA plastic.</p>
      <p>More interesting designs are in the pipeline, along with some better PLA!</p>




      <figure>
        <img src={cherryStem}/>
        <figcaption>Caption goes here</figcaption>
      </figure>
    </div>
  )
}
 
export default Keycaps;