import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import Radium from 'radium';

class Contact extends React.Component {

	render() {
		let styles= {
			h1: {
				paddingRight: 20,
				marginRight: 20,
				fontWeight: 300,
				borderRight: "solid 1px #333"
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
	  			display: "flex",
	  			justifyContent: "center",
	  			alignItems: "center",
	  		},
	  		icon: {
	  			marginRight: 20,
	  			fontSize: "1.5em",
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
			<h1 style={styles.h1}>Contact</h1>
			<section>
				<b style={styles.b} >tedd.arcuri@gmail.com</b><br />
				<b style={styles.b} >719-440-4732</b><br />
				<a ref="codepen" style={styles.icon} href="">
					<i className="fa fa-codepen"></i>
				</a>
				<a ref="github" style={styles.icon} href="">
					<i className="fa fa-github"></i>
				</a>
				<a ref="linkedin" style={styles.icon} href="">
					<i className="fa fa-linkedin"></i>
				</a>	
			</section>
		</CSSTransitionGroup>
		)
	}
}

export default Radium(Contact)