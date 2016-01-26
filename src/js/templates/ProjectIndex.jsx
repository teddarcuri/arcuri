import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import projectList from '../utilities/project-list';
import ProjectBubble from './ProjectBubble';


class ProjectIndex extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			projects: projectList
		}
	}

	render() {
		var projects = this.state.projects;
		return (
		<CSSTransitionGroup className="project-bubbles" 
							ref="projectBubbles"
							component="ul"
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="bubbleUp"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
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
	  	</CSSTransitionGroup>
	   )
	}
}

export default ProjectIndex