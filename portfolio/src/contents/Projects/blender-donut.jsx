import React from "react"
 
import finalRender from '../../images/Donut/almost-final-render.png';
import firstRender from '../../images/Donut/donut-first-render.png';
import fourthRender from '../../images/Donut/donut-fourth-render.png';
import glassRender from '../../images/Donut/first-glass-cup-saucer.png';
import gifRender from '../../images/Donut/optimize.gif';
import practiceRender from '../../images/Donut/pre-final-render.png';

function Donut(props) {
  return (

    <div>
      <h1>Blender Donut</h1>
      <p>My first project when learning blender was the classic Blender Donut. You can see the various iterations below.</p>
      <p>A donut called for some hot drinks, plates, and some atmosphere!</p>

      <figure>
        <img src={finalRender}/>
        <figcaption>Delicious!</figcaption>
      </figure>

      <figure>
        <img src={firstRender}/>
        <figcaption>After a few hours it actually looked like a donut.</figcaption>
      </figure>


      <figure>
        <img src={fourthRender}/>
        <figcaption>Colours took no time at all. Looks a little fake though.</figcaption>
      </figure>

      <figure>
        <img src={glassRender}/>
        <figcaption>Glass looks really cool in Blender.</figcaption>
      </figure>

      <figure>
        <img src={practiceRender}/>
        <figcaption>Here is a quick video-game-like render.</figcaption>
      </figure>

      <figure>
        <img src={gifRender}/>
        <figcaption>Let's add some action to this donut!</figcaption>
      </figure>
    </div>
  )
}
  
export default Donut;