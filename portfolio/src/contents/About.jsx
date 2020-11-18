import React, {Component} from "react";
import '../App.css';
// import axios from "axios";




class About extends Component {
  state = {

  }

  render() {
    return (
      <div>
        

        <h1>About</h1>
        <p>Hello, and thanks for viewing my page!</p>
        <h2>What is this site?</h2>
        <p>I created this website to showcase some personal interest projects & hobbies. I will add to it intermittently as projects reach a presentable state. Although there are definitely some projects finished, but for a variety of reasons unpresentable. Some projects represent a complete one-off, others I've considered (usually very briefly) turning into an entrepreneurial opportunity.</p>

        <h2>Who am I?</h2>
        <p>If you couldn't tell for the URL or the header, my name is Sam Kennedy. I'm an engineer, project manager, University of Waterloo alumni, and aspiring designer. I love working on projects in new mediums or that personally apply to, and interest me. </p>
        <p>I have a small family, just my wife Brooklyn, and my young son Wesley. My wife tolerates my projects, sometimes taking an active part (willingly or not!). Wesley on the other hand is quite fascinated with just about anything! He can stare at a 3D printed jet engine for hours! He is a pretty easy crowd to please though...</p>

        <h2>Contact me!</h2>
        <p>Please check out my resume to contact me. Also you can find me on LinkedIn and Facebook, as you see below in the footer.</p>

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
    )

  }
}
 
export default About;