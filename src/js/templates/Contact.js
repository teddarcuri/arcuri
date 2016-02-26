import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Contact extends React.Component {

	render() {
		let styles= {
			h1: {
				paddingRight: 20,
				marginRight: 20,
				borderRight: "solid 2px #000"
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
				<b>tedd.arcuri@gmail.com</b><br />
				<b>719-440-4732</b>
			</section>
		</CSSTransitionGroup>
		)
	}
}

export default Contact