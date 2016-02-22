import React from 'react';
import IntroScene from '../utilities/intro-scene';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Index extends React.Component {

	componentDidMount() {
		IntroScene.init();
	}

	render() {
		return (
		<CSSTransitionGroup component="div"
							transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="fadeIn"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
			<div id="scene">
			</div>

			      {/* <img id="about-image" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/166133/someguy.png" /> */}

		</CSSTransitionGroup>
		)
	}
}

export default Index;	