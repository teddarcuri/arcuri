import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';


class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	routerWillLeave(callback) {
		setTimeout(function() {
			callback();
		}, 1000)
	}

	render() {
		var key = this.props.location.pathname;
		return (
		<div>
			<ReactTransitionGroup>
	 			{React.cloneElement(this.props.children, {
	          		key: key
	        	})}
        	</ReactTransitionGroup>
 		</div>
	   )	
	}
}

export default Projects