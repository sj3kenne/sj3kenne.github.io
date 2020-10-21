import React from "react"
 
import ergodoxSolder1 from '../../images/Keyboards/ergodox-solder1.jpg';
import ergodoxSolder2 from '../../images/Keyboards/ergodox-solder2.jpg';
import ergodoxSolder3 from '../../images/Keyboards/ergodox-solder3.jpg';
import ergodoxKeyless from '../../images/Keyboards/keyless-ergodox.jpeg';
import helidoxLeft from '../../images/Keyboards/helidox-left.jpg';

function Keyboard(props) {
  return (

    <div>
      <h1>Keyboards</h1>
      <p>I found the Ergodox keyboard online, and was immediately stricken but the uniqueness of the design.</p>
      <p>I think the ortholinear keys are brilliant, and the split idea strongly appealed to me, as well as the customizability.</p>
      <p>Seeing the price of purchase, I resolved to build one myself, and refresh my soldering techniques in the proces</p>
      <p>In the end I probably paid the same amount, but I learned a lot along the way.</p>
      <p>In fact, this entire website was typed off this keyboard!</p>

      <figure>
        <img src={ergodoxSolder1}/>
        <figcaption>Right hand controller soldering. Before soldering on switches.</figcaption>
      </figure>

      <figure>
        <img src={ergodoxSolder2}/>
        <figcaption>Left side soldering.</figcaption>
      </figure>

      <figure>
        <img src={ergodoxSolder3}/>
        <figcaption>Flip side of right hand soldering.</figcaption>
      </figure>

      <figure>
        <img src={ergodoxKeyless}/>
        <figcaption>This is the Ergodox before adding keycaps.</figcaption>
      </figure>

      <figure>
        <img src={helidoxLeft}/>
        <figcaption>This is my current project. A neat little 40% split keyboard.</figcaption>
      </figure>

    </div>
  )
}
 
export default Keyboard;