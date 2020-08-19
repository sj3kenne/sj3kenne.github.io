import React from "react"
 
import finalRender from '../../images/Donut/almost-final-render.png';
import firstRender from '../../images/Donut/donut-first-render.png';
import fourthRender from '../../images/Donut/donut-fourth-render.png';
import glassRender from '../../images/Donut/donut-fourth-render.png';
import gifRender from '../../images/Donut/optimize.gif';
import practiceRender from '../../images/Donut/pre-final-render.png';

function Donut(props) {
  return (

    <div>
      <h1>Blender Donut</h1>
      <img src={finalRender}/>
      <img src={firstRender}/>
      <img src={fourthRender}/>
      <img src={glassRender}/>
      <img src={gifRender}/>
      <img src={practiceRender}/>
    </div>
  )
}
  
export default Donut;