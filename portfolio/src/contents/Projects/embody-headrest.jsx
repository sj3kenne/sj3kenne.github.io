import React from "react"
 
import Headrest_Detail from '../../images/Headrest/headrest-final-physical1.jpg';

function Embody(props) {
  return (

    <div>
      <h1>Embody Headrest</h1>
      <p>I received a very nice Task Chair (Herman Miller Embody) for Christmas, and it is amazing when I am focused and on task.</p>
      <p>I found however, when I wanted to rest my head, or relax in general the lack of a headrest constituted a real problem.</p>
      <p>After almost a dozen iterations, and with a inexpensive headrest off Amazon, I was able to attach them together non-destructively.</p>
      <p>My dad liked the idea so much I made one for his chair too!</p>



      <figure>
        <img src={Headrest_Detail}/>
        <figcaption>Caption goes here</figcaption>
      </figure>
    </div>
  )
}
 
export default Embody;