import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';


class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var key = this.props.location.pathname;
		return (
		<div>
			<ReactTransitionGroup>
 			{React.cloneElement(this.props.children, {
          		key: key,
          		ref: "childRoute"
        	})}
        	</ReactTransitionGroup>
 		</div>
	   )	
	}
}

export default Projects