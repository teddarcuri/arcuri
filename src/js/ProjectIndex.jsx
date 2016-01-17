import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';

import projectList from './project-list';


class ProjectIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projectList
		}
	}

	animateIn() {
  		setTimeout(() => { this.refs.projectBubbles.style.opacity = "1" }, 50);
  	}

  	animateOut() {
  		setTimeout(() => { this.refs.projectBubbles.style.opacity = "0" }, 50);
  	}

	render() {
		var projects = this.state.projects;
		return (
		<div className="project-bubbles" ref="projectBubbles">
	  		{
	  			projects.map(function(p) {
	  				let path = "work/" + p.name,
	  					 logoPath = p.logo,
	  					 bgImgPath = p.background;
	  				return (
	  					<Link key={p.id} to={path} className="project-bubble">
							<img className="logo" src={logoPath} />
							<img className="bg" src={bgImgPath} />
	  					</Link>
	  				)
	  			})
	  		}
	  	</div>
	   )
	}
}

export default ProjectIndex