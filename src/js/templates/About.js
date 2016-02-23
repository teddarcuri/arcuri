import React from 'react';
import {Router, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
  	let styles= {
  		page: {
  			width: "100%",
  			height: "100%",
  			position: "absolute",
  			top: "0px", 
  			left: "0px",
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center"
  		},
  		headshot: {
  			borderRadius: "50%",
  			display: "block",
  			postion: "relative",
  			margin: "0px auto",
  			marginBottom: 30
  		},
  		container: {
  			textAlign: "center"
  		}
  	}
    return (
    	<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}
							style={styles.page}>
		  	<div className="container mw" style={styles.container}>
	    		<div>
		        	<CSSTransitionGroup 
	        			transitionAppear={true}
						transitionAppearTimeout={2000}
						transitionName="fadeIn"
						transitionEnterTimeout={2000}
						transitionLeaveTimeout={2000}>
					  <img style={styles.headshot} src="https://lh4.googleusercontent.com/-2qeuQQr-24c/AAAAAAAAAAI/AAAAAAAAAAA/I3aLsM6bU2o/s128-c-k/photo.jpg" alt=""/>
					  <h3>
				          Hello, My Name is <span className="highlight light">Tedd Arcuri</span>.<br />
				          I am a software designer + developer.<br />
				          Currently living in Denver, CO.<br /><br />
				          Checkout some of <span className="highlight"><Link to="work"> My Work</Link></span>.<br />
				          View my <span className="highlight"><Link to="experience"> Experience + Knowledge</Link></span>.<br />
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
	    	{/*<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
	    	<img id="about-image" src="/src/img/background-scene.png" />
	    	</CSSTransitionGroup>*/}
	  	</CSSTransitionGroup>
    )
  }
}

export default About