import React from "react"
 
import ergodoxKeyless from '../../images/Keyboards/keyless-ergodox.jpeg';
// import ergodoxSolder1 from '../../images/Keyboards/ergodox-solder1.jpg';
// import ergodoxSolder2 from '../../images/Keyboards/ergodox-solder2.jpg';
// import ergodoxSolder3 from '../../images/Keyboards/ergodox-solder3.jpg';


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
        <img src={ergodoxKeyless}/>
        <figcaption>Caption goes here</figcaption>
      </figure>
    </div>
  )
}
 
export default Keyboard;