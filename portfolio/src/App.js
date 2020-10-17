import React from 'react';
// import logo from './logo.svg';
// Import the BrowserRouter, Route and Link components
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Projects from './contents/Projects.jsx';
import Articles from './contents/Articles.jsx';
import About from './contents/About.jsx';
import Resume from './contents/Resume.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import Embody from './contents/Projects/embody-headrest.jsx';
import Donut from './contents/Projects/blender-donut.jsx';
import Keycaps from './contents/Projects/keycaps.jsx';
import Prints from './contents/Projects/prints.jsx';
import Longboard from './contents/Projects/longboards.jsx';

import Hydro from './contents/Projects/hydroponic-wall.jsx';
import Keyboard from './contents/Projects/keyboards.jsx';
import Cakes from './contents/Projects/cakes.jsx';
import Satisfying from './contents/Projects/satisfying.jsx';
import threeDscans from './contents/Projects/threeDscans.jsx';

// CSS stuff
// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// 404 page
import NotFoundPage from './NotFoundPage.jsx';

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

            <Route path="/embody-headrest" component={Embody} />
            <Route path="/donut" component={Donut} />
            <Route path="/keycaps" component={Keycaps} />
            <Route path="/3dprint" component={Prints} />
            <Route path="/longboard" component={Longboard} />            

            <Route path="/hydroponics" component={Hydro} />
            <Route path="/keyboards" component={Keyboard} />
            <Route path="/cakes" component={Cakes} />
            <Route path="/satisfying" component={Satisfying} />
            <Route path="/threeDscans" component={threeDscans} />

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
