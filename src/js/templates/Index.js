import React from 'react';
import Radium from 'radium';
import IntroScene from '../utilities/intro-scene';
import {Link, Navigation, browserHistory, History} from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import colors from "../utilities/colors";

class Index extends React.Component {

	componentDidMount() {
		IntroScene.init();

		setTimeout(() => {
			//this.props.history.pushState(null, "/about")
		}, 5000)
	}

	render() {
		let styles= {
	  		page: {
	  			width: "100%",
	  			height: "100%",
	  			position: "absolute",
	  			top: "0px", 
	  			left: "0px",
	  			display: "flex",
	  			flexFlow: "row wrap",
	  			justifyContent: "center",
	  			alignItems: "center"
	  		},
	  		scene: {
	  			flex: "2 0 100%"
	  		},
	  		h1: {
	  			flex: "2 0 100%",
	  			fontSize: "3em",
	  			fontWeight: 300
	  		},
	  		content: {
	  			textAlign: "center",
	  			display: "flex",
	  			flexFlow: "row wrap",
	  			justifyContent: "center",
	  			alignItems: "center"
	  		},
	  		li: {
				textTransform: "uppercase",
				textDecoration: "none",
				letterSpacing: 2,
				fontSize: "1em",
				display: "inline-block",
				":hover" : {
					background: "rgba(0,0,0,0.1)",
				}
	  		},
	  		a: {
	  			color: "#333",
	  			display: "block",
	  			padding: "10px 25px",
	  			textDecoration: "none"
	  		}
  		}
		return (
		<CSSTransitionGroup component="div"
							transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							style={styles.page}
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
			<div style={styles.content}>
				<h1 style={styles.h1}>Welcome.</h1>
				<div id="scene" style={styles.scene}>
				</div>
				<ul>
					<li style={styles.li} key="about-link">
						<Link style={styles.a} to="/about">About Me</Link>
					</li>
					<li style={styles.li} key="work-link">
						<Link style={styles.a} to="/work">My Portfolio</Link>
					</li>
					<li style={styles.li} key="experience-link">
						<Link style={styles.a} to="/experience">My Experience</Link>
					</li>
					<li style={styles.li} key="contact-link">
						<Link style={styles.a} to="/contact">Contact Me</Link>
					</li>
				</ul>
			</div>
		</CSSTransitionGroup>
		)
	}
}

export default Radium(Index);	