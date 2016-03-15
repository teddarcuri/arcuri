import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';

class Contact extends React.Component {

	render() {
		var small = this.props.windowW < 700 ? true : false;
		let styles= {
			h1: {
				marginRight: 20,
				marginBottom: 15,
				paddingBottom: 15,
				fontWeight: 300,
				textAlign: "center",
				width: "100%",
				borderBottom: "solid 2px rgba(0,0,0,0.1)"
			},
			b: {
				lineHeight: "40px",
				fontWeight: 300,
				color: "#666",
				fontSize: "1.2em"
			},
	  		page: {
	  			width: "100%",
	  			height: "100%",
	  			position: "absolute",
	  			top: "0px", 
	  			left: "0px",
	  			textAlign: "center",
	  			display: "flex",
	  			justifyContent: "center",
	  			alignItems: "center",
	  			flexFlow: small ? "row wrap" : null
	  		},
	  		icon: {
	  			textAlign: "center",
	  			margin: "0px 20px",
	  			fontSize: "1.5em",
	  			lineHeight: "1.5em",
	  			color: "#aaa",
	  			":hover" : {
	  				color: "#111"
	  			}
	  		}
  		}
		return (
		<CSSTransitionGroup transitionAppear={true}
						transitionAppearTimeout={2000}
						transitionName="fadeIn"
						style={styles.page}
						transitionEnterTimeout={2000}
						transitionLeaveTimeout={2000}>
			<div>
				<h1 style={styles.h1}>Contact</h1>
				<b style={styles.b} >tedd.arcuri@gmail.com</b><br />
				<b style={styles.b} >719-440-4732</b><br />
				<a ref="codepen" style={styles.icon} href="http://codepen.io/teddarcuri/">
					<i className="fa fa-codepen"></i>
				</a>
				<a ref="github" style={styles.icon} href="https://github.com/teddarcuri">
					<i className="fa fa-github"></i>
				</a>
				<a ref="linkedin" style={styles.icon} href="https://www.linkedin.com/in/teddarcuri">
					<i className="fa fa-linkedin"></i>
				</a>	
			</div>
		</CSSTransitionGroup>
		)
	}
}

export default Radium(Contact)