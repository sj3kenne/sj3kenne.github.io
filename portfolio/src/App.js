import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { Redirect, BrowserRouter, Route, Switch } from 'react-router-dom';
import Projects from './contents/Projects.jsx';
import Articles from './contents/Articles.jsx';
import About from './contents/About.jsx';
import Resume from './contents/Resume.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Donut from './contents/Projects/blender-donut.jsx';
import Cakes from './contents/Projects/cakes.jsx';
import Embody from './contents/Projects/embody-headrest.jsx';
import Hydro from './contents/Projects/hydroponic-wall.jsx';
import Insoles from './contents/Projects/insoles.jsx';
import Keyboard from './contents/Projects/keyboards.jsx';
import Keycaps from './contents/Projects/keycaps.jsx';
import Longboard from './contents/Projects/longboards.jsx';

// CSS stuff
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 404 page
import NotFoundPage from './NotFoundPage.js';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="body">
          <Navbar />
          <Switch>
            <Route exact path="/" component={Projects} /> 
            <Route path="/projects" component={Projects} />
            <Route path="/articles" component={Articles} />
            <Route path="/about" component={About} />
            <Route path="/resume" component={Resume} />
            <Route path="/donut" component={Donut} />
            <Route path="/cherry-keys" component={Cakes} />
            <Route path="/hydroponics" component={Hydro} />
            <Route path="/embody-headrest" component={Embody} />
            <Route path="/insoles" component={Insoles} />
            <Route path="/keyboards" component={Keyboard} />
            <Route path="/keycaps" component={Keycaps} />
            <Route path="/longboard" component={Longboard} />
            <Route path="/cakes" component={Cakes} />
            {/* <Route path="/404" component={NotFoundPage} /> */}
            {/* <Redirect to="/404" /> */}
            <Route path="*" component={NotFoundPage} />
          </Switch>
          
          <Footer />
          </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
