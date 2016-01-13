import React from 'react';

class About extends React.Component {
    componentDidMount() {
        $(".typed").typed({
            strings: ["a Designer", "a Developer", "a creative thinker", "a human being", "a Front end engineer", "a musician", "a Problem Solver"],
            // typing speed
            typeSpeed: 150,
            // time before typing starts
            startDelay: 0,
            // backspacing speed
            backSpeed: 20,
            // time before backspacing
            backDelay: 2000,
            // loop
            loop: true
        });
    }
    
    render() {
        return (
          <div>
            <h3>
              Hello, My Name is <span className="highlight light">Tedd Arcuri</span>. <br />
              I am <span className="highlight typed light"></span><br />
              Currently living in Denver, CO.<br />
              Checkout some of<span className="highlight ">  <Link to="work">My Work</Link></span>.<br />
              Like what you see?<span className="highlight"> <Link to="contact">Hire Me</Link></span>.
            </h3>
            <div className="btns">
              <a className="btn">About Me</a>
              <a className="btn">See My Work</a>
              <a className="btn">Get In Touch</a>
            </div>
            <img id="about-image"src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/someguy.png" />
          </div>
        );
    }
}

export default About;