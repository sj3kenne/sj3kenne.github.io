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
      <img src={firstIteration}/>
      <img src={poles1}/>
      <img src={poles2}/>
      <img src={SecondIteration}/>
      <img src={hydroTop}/>
      <img src={screwHoles}/>
    </div>
  )
}
 
export default Hyrdo;