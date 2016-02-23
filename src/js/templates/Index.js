import React from 'react';
import IntroScene from '../utilities/intro-scene';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Index extends React.Component {

	componentDidMount() {
		IntroScene.init();
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
	  			justifyContent: "center",
	  			alignItems: "center"
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
			<div id="scene">
			</div>
		</CSSTransitionGroup>
		)
	}
}

export default Index;	