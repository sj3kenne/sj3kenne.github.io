import React from "react"
 
import ergodoxKeyless from '../../images/Keyboards/keyless-ergodox.jpeg';
import ergodoxSolder1 from '../../images/Keyboards/ergodox-solder1.jpg';
import ergodoxSolder2 from '../../images/Keyboards/ergodox-solder2.jpg';
import ergodoxSolder3 from '../../images/Keyboards/ergodox-solder3.jpg';


function Keyboard(props) {
  return (

    <div>
      <h1>Keyboards</h1>
      <img src={ergodoxKeyless}/>
    </div>
  )
}
 
export default Keyboard;