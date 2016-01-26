import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';
import projectList from './project-list';


class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		var key = this.props.location.pathname;
		return (
		<div>
 			{React.cloneElement(this.props.children, {
          		key: key,
          		ref: "childRoute"
        	})}
 		</div>
	   )	
	}
}

export default Projects