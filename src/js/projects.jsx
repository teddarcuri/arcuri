import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';
import projectList from './project-list';


class Projects extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	 	console.log(this.refs);
	 	this.refs.derp.style.background = "red"     
	}

	// componentWillAppear(callback) {
	// 	setTimeout(callback, 2000);
	// 	console.log(this.refs.childRoute);
	// 	this.refs.childRoute.animateIn();
	// }

	// componentWillEnter(callback) {
	// 	console.log(this.refs.childRoute + " is entering");
	// 	setTimeout(callback, 2000)
	// 	this.refs.childRoute.animateIn();
	// }

	// componentWillLeave(callback) {
	// 	console.log(this.refs.childRoute + " is leaving");
	// 	setTimeout(callback, 2000)
	// 	this.refs.childRoute.animateOut();
	// }

	render() {
		var key = this.props.location.pathname;
		return (
		<div>
			<ReactTransitionGroup ref="derp">
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