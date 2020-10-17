import React, { Component } from "react"
import Thumbnail from '../Thumbnail.jsx'; // Import the Thumbnail component
import '../App.css';

// Import the BrowserRouter, Route and Link components
//import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Images
import Headrest_Overview from '../images/Headrest/headrest-final-physical1.jpg';
import Donut_Coffee from '../images/Donut/0030.png';
import Cherry_Stem from '../images/Keycaps/cherry-stem.JPG';
import Jet_Engine from '../images/JetEngine/engine2.JPG';
import Second_Board from '../images/Longboards/longboard2-1.jpg';

import Hydro_Wall from '../images/Hydroponics/hydro-second-iteration.jpg';
import Ergodox from '../images/Keyboards/ergodox-finished.jpg';
import Wedding_Cake from '../images/Cakes/cake-wedding1.jpg';
import Satisfying from '../images/Satisfying/satis-thumb.png';
import Headshot from '../images/BodyScans/BrooklynScan.JPG';

class Projects extends Component {
    render () {
        return (
            <div className="project-container">
                <h1>Projects</h1>
                <p>BEHOLD, some projects!.</p>

                <section className="Projects">
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
                            link="/3dprint"
                            image={Jet_Engine}
                            title="3D Printing Projects"
                            category="DIY"
                        />

                        <Thumbnail
                            link="/longboard"
                            image={Second_Board}
                            title="Longboards"
                            category="DIY"
                        />
                    </div>

                    <div className="right">
                        <Thumbnail
                            link="/hydroponics"
                            image={Hydro_Wall}
                            title="40 Plant Hydroponic Wall"
                            category="DIY"
                        />

                        <Thumbnail
                            link="/keyboards"
                            image={Ergodox}
                            title="Keyboard Projects (Ergodox)"
                            category="3D Design"
                        />

                        <Thumbnail
                            link="/cakes"
                            image={Wedding_Cake}
                            title="Gallery of Cakes"
                            category="Baking"
                        />

                        <Thumbnail
                            link="/satisfying"
                            image={Satisfying}
                            title="Satisfying Gifs"
                            category="DIY"
                        />

                        <Thumbnail
                            link="/threeDscans"
                            image={Headshot}
                            title="Insole Scanning and Printing"
                            category="3D Design"
                        />
                    </div>
                </section>
            </div>
        )
    }
}

export default Projects;