import React from "react"
 
import satis1 from '../../images/Satisfying/satis.gif';

function Satisfying(props) {
  return (

    <div>
      <h1>Satisfying GIFs</h1>
      <p>This is a selection of Satisfying GIFs that I made in Blender following YouTube Tutorials. I really enjoy these, and I hope you find them as satisfying as I do!</p>



      <figure>
        <img src={satis1}/>
        <figcaption>Is it just me, or is this a frame off? That's what happen if you watch if for hours.</figcaption>
      </figure>
    </div>
  )
}
 
export default Satisfying;