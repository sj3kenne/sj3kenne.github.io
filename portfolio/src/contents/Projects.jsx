import React, { Component } from "react"
import Thumbnail from '../Thumbnail.jsx'; // Import the Thumbnail component
import '../App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// Import Images
import Headrest_Overview from '../images/Headrest/headrest-final-physical1.jpg';
import Donut_Coffee from '../images/Donut/0030.png';
import Cherry_Stem from '../images/Keycaps/cherry-stem.JPG';
import Hydro_Wall from '../images/Hydroponics/hydro-second-iteration.jpg';
//import Second_Board from '../images/Longboards/';
//import Heliodox from '../images/Keyboards/';
import Wedding_Cake from '../images/Cakes/cake-wedding1.jpg';
//import Insoles from '../images/Insoles/';

class Projects extends Component {
    render () {
        return (
            <div className="project-container">
                <h1>Projects</h1>
                <p>The projects below are primarily focused on personal interests.</p>

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
                            link="/longboard"
                            image="https://photoshop-image-url.jpg"
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
        )
    }
}

export default Projects;