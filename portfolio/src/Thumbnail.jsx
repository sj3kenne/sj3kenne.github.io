import React from 'react'; // Import the Component component from React
import {Link} from 'react-router-dom'; // Import the Link component
import './App.css';
 
function Thumbnail(props) {
  return (
    <div className="project">
      <Link to={props.link} className="nounderline">
        <div className="card">
          <div className="project-image">
            <img src={props.image} className="image-icons" alt="Project Image"/>
          </div>
          <div className="project-title">{props.title}</div>
          <div className="project-category">{props.category}</div>
        </div>
      </Link>
    </div>
  );
}
 
export default Thumbnail;