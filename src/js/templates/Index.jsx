import React from 'react';
import IntroScene from '../utilities/intro-scene';


class Index extends React.Component {

	componentDidMount() {
		IntroScene.init();
	}

	render() {
		return (
			<div id="scene">
			</div>
		)
	}
}

export default Index;	