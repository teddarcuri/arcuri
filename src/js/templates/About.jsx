import React from 'react';
import {Router, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
    return (
    	<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
		  	<div className="container mw">
	    		<div>
		        	<CSSTransitionGroup 
					        			transitionAppear={true}
										transitionAppearTimeout={2000}
										transitionName="bubbleUp"
										transitionEnterTimeout={2000}
										transitionLeaveTimeout={2000}>
					  <h3>
				          Hello, My Name is <span className="highlight light">Tedd Arcuri</span>. <br />
				          I am Developer + Designer
				          Currently living in Denver, CO.<br />
				          Checkout some of <span className="highlight"><Link to="work"> My Work</Link></span>.<br />
				          View my <span className="highlight"><Link to="contact"> Experience + Knowledge</Link></span>.<br />
				          Like what you see? <span className="highlight"><Link to="contact"> Hire Me</Link></span>.
			          </h3>
 					</CSSTransitionGroup>		        	
 					<div className="btns">
			          <a className="btn">About Me</a>
			          <a className="btn">See My Work</a>
			          <a className="btn">Get In Touch</a>
			        </div>
			     </div>
	    	</div>

	    	<img id="about-image" src="/src/img/background-scene.png" />
	  	</CSSTransitionGroup>
    )
  }
}

export default About