import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectBubble from './ProjectBubble';
import ProjectDiagonal from './ProjectDiagonal';


class ProjectIndex extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		var projects = this.props.projects;
		return (
		<CSSTransitionGroup className="project-bubbles" 
							component="div"
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="slideLeftIn"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
	  		{
	  			projects.map(function(p, key) {
	  				let path = "/work/" + p.name,
	  					 logoPath = p.logo,
	  					 bgImgPath = p.background,
	  					 styles = {
	  					 	backgroundImage: 'url(' + p.background + ')',
	  					 	backgroundSize: 'cover'
	  					 };
	  				return (
					<ProjectBubble ref={key}
									 key={"bubble" + key}
									 path={path}
									 name={p.name}
									 logo={logoPath}
									 background={bgImgPath}
									 styles={styles}/>

	  				)
	  			})
	  		}
	  	</CSSTransitionGroup>
	   )
	}
}

export default ProjectIndex