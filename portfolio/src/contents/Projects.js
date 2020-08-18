import React from "react"
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Embody from './Projects/embody-headrest.js';

// Import Images
import Headrest_Overview from '../images/Headrest/headrest-final-physical1.jpg';
import Donut_Coffee from '../images/Donut/0030.png';
import Cherry_Stem from '../images/Keycaps/cherry-stem.JPG';
import Hydro_Wall from '../images/Hydroponics/hydro-second-iteration.jpg';
//import Second_Board from '../images/Longboards/';
//import Heliodox from '../images/Keyboards/';
import Wedding_Cake from '../images/Cakes/cake-wedding1.jpg';
//import Insoles from '../images/Insoles/';

function Projects(props) {
    return (
        <BrowserRouter>
            <div className="Projects">

                <Route path="/embody-headrest" component={Embody} />


                <h1>Projects</h1>

                <p>The projects below are primarily focussed on personal interests.</p>

                <Thumbnail
                    link="/embody-headrest"
                    image= {Headrest_Overview}
                    title="Embody Headrest"
                    category="3D Design"
                />

                <Thumbnail
                    link="/donut"
                    image={Donut_Coffee}
                    title="Blender Donut"
                    category="3D Design"
                />

                <Thumbnail
                    link="/cherry-keys"
                    image={Cherry_Stem}
                    title="CherryMX Typewriter Keycap Design"
                    category="3D Design"
                />

                <Thumbnail
                    link="/hyrdoponics"
                    image={Hydro_Wall}
                    title="40 Plant Hydroponic Wall"
                    category="DIY"
                />

                <Thumbnail
                    link="/longboard"
                    image="http://photoshop-image-url.jpg"
                    title="Longboards"
                    category="DIY"
                />

                <Thumbnail
                    link="/heliodox-tent"
                    image="http://photoshop-image-url.jpg"
                    title="Helidox (CRKBD) keyboard tenting and case redesign"
                    category="3D Design"
                />

                <Thumbnail
                    link="/cakes"
                    image={Wedding_Cake}
                    title="Gallery of Cakes"
                    category="Baking"
                />

                <Thumbnail
                    link="/Insoles"
                    image="http://photoshop-image-url.jpg"
                    title="Insole Scanning and Printing"
                    category="3D Design"
                />

            </div>
        </BrowserRouter>
    )
}

export default Projects;