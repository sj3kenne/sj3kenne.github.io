import React from "react"
 
import first_drawing from '../../images/Headrest/headrest-first-drawings.JPG';
import second_drawing from '../../images/Headrest/headrest-second-drawings.JPG';
import first_physical from '../../images/Headrest/headrest-physical-iteration.jpeg';
import final_drawing from '../../images/Headrest/headrest-final-drawing.JPG';
import headrest_progress from '../../images/Headrest/headrest-progression.jpg';
import final1 from '../../images/Headrest/headrest-final-physical1.jpg';
import final2 from '../../images/Headrest/headrest-final-physical2.jpg';
import final3 from '../../images/Headrest/headrest-final-physical3.jpg';

function Embody(props) {
  return (

    <div>
      <h1>Embody Headrest</h1>
      <p>I received a very nice Task Chair (Herman Miller Embody) for Christmas, and it is amazing when I am focused and on task.</p>
      <p>I found however, when I wanted to rest my head, or relax in general the lack of a headrest constituted a real problem.</p>
      <p>After almost a dozen iterations, and with a inexpensive headrest off Amazon, I was able to attach them together non-destructively.</p>
      <p>My dad liked the idea so much I made one for his chair too!</p>

      <figure>
        <img src={first_drawing}/>
        <figcaption>My first drawing, this failed rapidly on printing. The dimensions were off.</figcaption>
      </figure>

      <figure>
        <img src={second_drawing}/>
        <figcaption>Second drawing, the angle was wrong.</figcaption>
      </figure>

      <figure>
        <img src={first_physical}/>
        <figcaption>This was probably the sixth drawing, it dawned on me with this iteration that screwing it in the plastic of my chair would not support the weight.</figcaption>
      </figure>

      <figure>
        <img src={final_drawing}/>
        <figcaption>This drawing was my final iteration. It has held for about six months now.</figcaption>
      </figure>

      <figure>
        <img src={headrest_progress}/>
        <figcaption>You can see a few iterations, isn't 3D printing amazing?</figcaption>
      </figure>

      <figure>
        <img src={final1}/>
        <figcaption>Final iteration angle #1</figcaption>
      </figure>

      <figure>
        <img src={final2}/>
        <figcaption>Final iteration angle #2</figcaption>
      </figure>

      <figure>
        <img src={final3}/>
        <figcaption>Final iteration angle #3</figcaption>
      </figure>

    </div>
  )
}
 
export default Embody;