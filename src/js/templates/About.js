import React from 'react';
import {Motion, spring, presets} from 'react-motion';
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
  			WebkitPerspective: "1000px", 
  			width: "120px",
  			height: "120px",
  			display: "flex",
  			justifyContent: "center",
  			alignItems: "center",
  			marginBottom: 20
  		},
  		headshotImg: {
  			width: "100%",
  			borderRadius: "50%",
  			postion: "relative",
  			margin: "0px auto",
  			zIndex: 1
  		},
  		shadow: {
  			width: "100px",
  			height: "100px",
  			background: "rgba(0,0,0,0.2)",
  			borderRadius: "50%",
  			WebkitFilter: "blur(12px)",
  			WebkitTransform: "translateY(70%) rotateX(100deg)",
  			position: "absolute",
  			top: 0,
  			left: 20,
  			zIndex: 0
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

						<Motion defaultStyle={{x: -200, width: 300, blur: 100}} style={{x: spring(0, {stiffness: 80, damping: 40}), width: spring(80, {stiffness: 80, damping: 40}), blur: spring(6, {stiffness: 80, damping: 40}) }}>
						  {value => {
						  	styles.headshotImg.WebkitTransform = "translateY(" + value.x + "px)";
						  	styles.shadow.width = value.width;
						  	styles.shadow.WebkitFilter = `blur(${value.blur}px)`;

						  	return (
						  		<div style={styles.headshot}>
								  	<img style={styles.headshotImg} src="https://lh4.googleusercontent.com/-2qeuQQr-24c/AAAAAAAAAAI/AAAAAAAAAAA/I3aLsM6bU2o/s128-c-k/photo.jpg" alt=""/>
								  	<div style={styles.shadow}></div>	
								</div>
						  	)
						  }}
						</Motion>
					  
					  <h3>
				          Hello, My Name is <span className="highlight light">Tedd Arcuri</span><br />
				          I am a software designer + developer<br />
				          Currently living in Denver, Colorado<br /><br />
			          </h3>
			           <h4>
			           	  View my <span className="highlight"><Link to="experience"> Experience + Knowledge</Link></span><br />
			           	  Checkout some of <span className="highlight"><Link to="work"> My Work</Link></span><br />
				          Like what you see? <span className="highlight"><Link to="contact"> Hire Me</Link></span>
			           </h4>
 					</CSSTransitionGroup>		        
			        <p style={styles.p}>
			        	I am highly passionate about delivering products that emphasize great user experience through purposeful design. 
			        	By creating clean &amp; compelling user interfaces that focus on maintaining the integrity of the software's functionality we can create products that keep the user feeling empowered and in control.
			        	<br /><br />
			        	<b>This is exactly what I do.</b>
			        	<br /><br />
			        	You might call me a web developer, front end developer, web designer, UX/UI engineer, etc... 
			        	Whatever the label, my focus remains the same:<br /> <b>To create software that empowers the people who use it.</b>
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