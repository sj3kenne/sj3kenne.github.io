import React from "react"
import Thumbnail from './Thumbnail.js'; // Import the Thumbnail component
import './App.css';

// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Embody from './embody-headrest.js';

// Import Images
import Headrest_Overview from './images/overview-headrest.jpeg';



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
                    image="http://airbnb-image-url.jpg>"
                    title="Blender Donut"
                    category="3D Design"
                />

                <Thumbnail
                    link="/cherry-keys"
                    image="http://photoshop-image-url.jpg"
                    title="CherryMX Typewriter Keycap Design"
                    category="3D Design"
                />

                <Thumbnail
                    link="/hyrdoponics"
                    image="http://photoshop-image-url.jpg"
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
                    image="http://photoshop-image-url.jpg"
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