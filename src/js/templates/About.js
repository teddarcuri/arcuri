import React from 'react';
import {Router, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class About extends React.Component {
  render() {
  	let styles= {
  		page: {
  			width: "100%",
  			height: "100%",
  			//position: "absolute",
  			top: "0px", 
  			left: "0px",
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center",
  			padding: "200px 0px",
  		},
  		headshot: {
  			position: "relative",
  			perspective: "1000px",
  			WebkitPerspective: "1000px"
  		},
  		headshotImg: {
  			borderRadius: "50%",
  			postion: "relative",
  			margin: "0px auto",
  			marginBottom: 70
  		},
  		shadow: {
  			width: "100px",
  			height: "100px",
  			background: "rgba(0,0,0,0.12)",
  			borderRadius: "50%",
  			WebkitFilter: "blur(10px)",
  			WebkitTransform: "rotateX(100deg)",
  			position: "absolute",
  			top: 90,
  			left: 0
  		},
  		container: {
  			maxWidth: 600,
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center"
  		},
  		p: {
  			color: "#666",
  			lineHeight: "2em"
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
					  <div style={styles.headshot}>
					  	<img style={styles.headshotImg} src="https://lh4.googleusercontent.com/-2qeuQQr-24c/AAAAAAAAAAI/AAAAAAAAAAA/I3aLsM6bU2o/s128-c-k/photo.jpg" alt=""/>
					  	<div style={styles.shadow}></div>	
					  </div>
					  <h3>
				          Hello, My Name is <span className="highlight light">Tedd Arcuri</span><br />
				          I am a software designer + developer<br />
				          Currently living in Denver, Colorado<br /><br />
				          Checkout some of <span className="highlight"><Link to="work"> My Work</Link></span><br />
				          View my <span className="highlight"><Link to="experience"> Experience + Knowledge</Link></span><br />
				          Like what you see? <span className="highlight"><Link to="contact"> Hire Me</Link></span>
			          </h3>
 					</CSSTransitionGroup>		        	
 					<div className="btns">
			          <a className="btn">About Me</a>
			          <a className="btn">See My Work</a>
			          <a className="btn">Get In Touch</a>
			        </div>
			        <p style={styles.p}>
			        	I am highly passionate about delivering products that emphasize great user experience through purposeful design. 
			        	By creating clean &amp; compelling user interfaces focused on maintaining the integrity of the software's functionality, we can create products that keep the user feeling empowered and in control.
			        	<br /><br />
			        	<b>This is exactly what I do.</b>
			        	<br /><br />
			        	You might call me a designer, developer, UX/UI specialist, front-end engineer, etc... <br/> 
			        	Whatever the label, my mission remains the same:<br /> <b>To create software that empowers the people who use it.</b>
			        </p>
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