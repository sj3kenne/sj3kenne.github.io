import React from "react"
 
import longboard from '../../images/Longboards/longboard2-2.jpg';

function Longboard(props) {
  return (

    <div>
        <h1>Longboards</h1>
        <p>I made a couple longboards out of a desire to learn the ways of the laidback longboarder.</p>
        <p>After a couple scraped knees and plams I lost a bit of enthusiasm. They are now resting next to my workspace calling for me to try again!</p>
        <p>The real winner is my infant son who absolutely loves the spinning wheels!</p>





        <figure>
        <img src={longboard}/>
        <figcaption>Always ready to give me some scrapped knees!</figcaption>
      </figure>
    </div>
  )
}
 
export default Longboard;