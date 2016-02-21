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
				          Hello, My Name is <span className="highlight light">Tedd Arcuri</span>. 
				          I am designer + software developer
				          Currently living in Denver, CO.<br />
				          I am seriously <span className="highlight">passionate</span> about delivering high <span className="highlight">quality products</span> that emphasize <span className="highlight">great user experience</span> and <span className="highlight">rich, interactive features</span>.<br />
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
	    	<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
	    	<img id="about-image" src="/src/img/background-scene.png" />
	    	</CSSTransitionGroup>	
	  	</CSSTransitionGroup>
    )
  }
}

export default About