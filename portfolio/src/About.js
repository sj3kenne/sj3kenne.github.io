import React, {Component} from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
// import axios from "axios";


import Resume from './Resume.js';

class About extends Component {
  state = {

  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/Resume" component={Resume} />

          <h1>About</h1>
          <p>Link to my resume:</p>
          <Link to="/Resume">Resume</Link>



          {/* <div>
          <form className="contact-form" onSubmit={ (e) => this.formSubmit(e)}>
            <label class="message" htmlFor="message-input">Your Message</label>
            <textarea onChange={e => this.setState({ message: e.target.value})} name="message" class="message-input" type="text" placeholder="Please write your message here" value={this.state.message} required/>

            <label class="message-name" htmlFor="message-name">Your Name</label>
            <input onChange={e => this.setState({ name: e.target.value})} name="name" class="message-name" type="text" placeholder="Your Name" value={this.state.name}/>

            <label class="message-email" htmlFor="message-email">Your Email</label>
            <input onChange={(e) => this.setState({ email: e.target.value})} name="email" class="message-email" type="email" placeholder="your@email.com" required value={this.state.email} />

            <div className="button--container">
                <button type="submit" className="button button-primary">{ this.state.buttonText }</button>
            </div>
          </form>
          </div> */}



        </div>
      </BrowserRouter>
    )

  }
}
 
export default About;