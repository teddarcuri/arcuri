import React from 'react';
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
	          		projects: this.props.projects
	        	})}
        	</ReactTransitionGroup>
 		</div>
	   )	
	}
}

export default Projects