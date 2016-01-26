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
		</CSSTransitionGroup>
		)
	}
}

export default Index;	