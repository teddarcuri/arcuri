import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NotFound extends React.Component {
	render() {
		var styles = {
			page: {
			width: "100%",
  			height: "100%",
  			position: "absolute",
  			top: "0px", 
  			left: "0px",
  			display: "flex",
  			flexFlow: "row wrap",
  			justifyContent: "center",
  			alignItems: "center",
  			textAlign: "center"
			},
			ul: {
				display: "flex",
				justifyContent: "space-between",
				listStyle: "none",
				padding: 0,
				margin: "20px 0px"
			},
			a: {
				color: "#777",
				textTransform: "uppercase",
				textDecoration: "none",
				letterSpacing: 2,
				fontSize: "0.8em",
				":hover" : {
					color: "#4682B4",
					fontSize: "2em"
				}
			}
		}
		return(
			<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="bubbleUp"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}
							style={styles.page}>
				<div>
					<h1>Page Not Found</h1>
					<ul style={styles.ul}>
						<li>
							<Link style={styles.a} to="about">About Me</Link>
						</li>
						<li>
							<Link style={styles.a} to="work">My Work</Link>
						</li>
						<li>
							<Link style={styles.a} to="experience"> My Experience</Link>
						</li>
						<li>
							<Link style={styles.a} to="contact">Contact Me</Link>
						</li>
					</ul>
				<img src="https://media.giphy.com/media/RjoLWhQBFEcHS/giphy.gif" alt=""/>
				</div>
			</CSSTransitionGroup>		
		);
	}
}

export default Radium(NotFound);