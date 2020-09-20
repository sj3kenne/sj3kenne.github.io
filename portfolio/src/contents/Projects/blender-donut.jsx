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
      <p>My first project when learning blender was the classic Blender Donut. You can see the various iterations below.</p>
      <p>A dount called for some hot drinks, plates, and some atomsphere!</p>

      <figure>
        <img src={finalRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>

      <figure>
        <img src={firstRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>


      <figure>
        <img src={fourthRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>

      <figure>
        <img src={glassRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>

      <figure>
        <img src={gifRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>

      <figure>
        <img src={practiceRender}/>
        <figcaption>Caption goes here</figcaption>
      </figure>
    </div>
  )
}
  
export default Donut;