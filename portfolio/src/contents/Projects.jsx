import React from "react"
import Thumbnail from '../Thumbnail.js'; // Import the Thumbnail component
import '../App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Donut from './Projects/blender-donut.jsx';
import Cakes from './Projects/cakes.jsx';
import Embody from './Projects/embody-headrest.jsx';
import Hydro from './Projects/hydroponic-wall.jsx';
import Insoles from './Projects/insoles.jsx';
import Keyboard from './Projects/keyboards.jsx';
import Keycaps from './Projects/keycaps.jsx';
import Longboard from './Projects/longboards.jsx';

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
            <div className="project-container">
                <h1>Projects</h1>
                <p>The projects below are primarily focussed on personal interests.</p>
                <section className="Projects">

                    <Route path="/donut" component={Donut} />
                    <Route path="/cherry-keys" component={Cakes} />
                    <Route path="/hydroponics" component={Hydro} />
                    <Route path="/embody-headrest" component={Embody} />
                    <Route path="/insoles" component={Insoles} />
                    <Route path="/keyboards" component={Keyboard} />
                    <Route path="/keycaps" component={Keycaps} />
                    <Route path="/longboard" component={Longboard} />

                    <div className="left">
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
                            link="/keycaps"
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
                    </div>

                    <div className="right">
                        <Thumbnail
                            link="/longboard"
                            image="https://photoshop-image-url.jpg"
                            title="Longboards"
                            category="DIY"
                        />

                        <Thumbnail
                            link="/keyboards"
                            image="https://photoshop-image-url.jpg"
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
                            link="/insoles"
                            image="https://photoshop-image-url.jpg"
                            title="Insole Scanning and Printing"
                            category="3D Design"
                        />
                    </div>

                </section>
            </div>
        </BrowserRouter>
    )
}

export default Projects;