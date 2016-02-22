import React from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NotFound extends React.Component {
	render() {
		var styles = {
			ul: {
				display: "flex",
				justifyContent: "space-between",
				listStyle: "none",
				padding: 0,
				margin: 0
			},
			a: {
				color: "#333",
				textTransform: "uppercase",
				":hover" : {
					color: "#4682B4"
				}
			}
		}
		return(
			<CSSTransitionGroup transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="bubbleUp"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}
							style={{textAlign: "center"}}>
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
				<img src="./src/img/confused_travolta.gif" alt=""/>
			</CSSTransitionGroup>		
		);
	}
}

export default Radium(NotFound);