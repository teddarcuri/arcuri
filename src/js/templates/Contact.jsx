import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Contact extends React.Component {

	render() {
		return (
		<CSSTransitionGroup transitionAppear={true}
						transitionAppearTimeout={2000}
						transitionName="fadeIn"
						transitionEnterTimeout={2000}
						transitionLeaveTimeout={2000}>
			<h1>Contact</h1>
			<section className="split">
				<aside>tedd.arcuri@gmail.com</aside>
				<aside>719-440-4732</aside>
			</section>
		</CSSTransitionGroup>
		)
	}
}

export default Contact