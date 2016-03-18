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
	}

	render() {

		var small = this.props.windowW < 700 ? true : false;

		let styles= {
	  		page: {
	  			width: "100%",
	  			height: "100%",
	  			position: "absolute",
	  			top: "0px", 
	  			left: "0px",
	  			display: "flex",
	  			//flexFlow: "row wrap",
	  			justifyContent: "center",
	  			alignItems: "center"
	  		},
	  		scene: {
	  			flex: small ? "2 0 100%" : "1 0 100%",
	  			marginLeft: small ? 0 : -200,
	  			zIndex: 999,
	  			position: "relative",
	  			opacity: 0,
	  			transition: "all ease 4s"
	  		},
	  		h1: {
	  			flex: "1 0 100%",
	  			fontSize: "3em",
	  			fontWeight: 300,
	  			margin: 0,
	  			marginBottom: -100
	  		},
	  		content: {
	  			textAlign: "center",
	  			display: "flex",
	  			flexFlow: small ? "row wrap" : null,
	  			justifyContent: "center",
	  			alignItems: "center"
	  		},
	  		ul: {
	  			marginTop: small ? -50 : 0,
	  			marginLeft: small ? 0 : -50,
	  			zIndex: 1000,
	  			textAlign: small ? "center" : "left"
	  		},
	  		li: {
				textTransform: "uppercase",
				textDecoration: "none",
				letterSpacing: 2,
				lineHeight: "2em",
				fontSize: "1em",
				display: "block",
				transition: "transform ease 2s",
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
			<CSSTransitionGroup
							transitionAppear={true}
							transitionAppearTimeout={1000}
							transitionName="fadeIn"
							style={styles.content}
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
				<div id="scene" style={styles.scene}>
					<div id="scene-loading-progress"
						 style={{
						 	background: "#fff",
						 	width: "100%",
						 	height: "100%",
						 	position: "absolute",
						 	display: "flex",
	  						justifyContent: "center",
	  						alignItems: "center",
	  						opacity: 1,
	  						transition: "all ease 3s"
						 }}>
						<img src="https://s3-us-west-2.amazonaws.com/teddarcuri/ring-loader.svg" alt=""/>
					</div>
				</div>
				<CSSTransitionGroup component="ul"
							transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="bubbleUp"
							style={styles.ul}
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
					<li style={styles.li} key="about-link">
						<Link style={styles.a} to="/about">About Me</Link>
					</li>
					<li style={styles.li} key="work-link">
						<Link style={styles.a} to="/work">My Work</Link>
					</li>
					<li style={styles.li} key="experience-link">
						<Link style={styles.a} to="/experience">My Experience</Link>
					</li>
					<li style={styles.li} key="contact-link">
						<Link style={styles.a} to="/contact">Contact Me</Link>
					</li>
				</CSSTransitionGroup>
			</CSSTransitionGroup>
		</CSSTransitionGroup>
		)
	}
}

export default Radium(Index);	