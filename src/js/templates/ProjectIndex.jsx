import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

import projectList from '../utilities/project-list';
import ProjectBubble from './ProjectBubble';


class ProjectIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projectList
		}
	}

	componentWillAppear(callback) {
	}

	componentDidMount() {
   		 console.log(this.refs);
  	}

	animateIn() {
  		this.refs.projectBubbles.style.opacity = "1";
  	}

  	animateOut() {
  		this.refs.projectBubbles.style.opacity = "0";
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
	  					<ProjectBubble ref={p.id}
	  								   key={p.id}
	  								   path={path}
	  								   logoPath={logoPath}
	  								   bgImgPath={bgImgPath}/>
	  				)
	  			})
	  		}
	  	</div>
	   )
	}
}

export default ProjectIndex