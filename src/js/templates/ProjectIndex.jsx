import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectBubble from './ProjectBubble';
import ProjectDiagonal from './ProjectDiagonal';


class ProjectIndex extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		console.log(this.props.projects);
	}

	render() {
		var projects = this.props.projects;
		return (
		<CSSTransitionGroup className="diagonals" 
							component="div"
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="slideLeftIn"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
	  		{
	  			projects.map(function(p) {
	  				let path = "work/" + p.name,
	  					 logoPath = p.logo,
	  					 bgImgPath = p.background,
	  					 styles = {
	  					 	backgroundImage: 'url(' + p.background + ')',
	  					 	backgroundSize: 'cover'
	  					 };
	  				return (
	  					// <ProjectBubble ref={p.id}
	  					// 			   key={p.id}
	  					// 			   path={path}
	  					// 			   name={p.name}
	  					// 			   logoPath={logoPath}
	  					// 			   bgImgPath={bgImgPath}/>

  							<ProjectDiagonal ref={p.id}
	  								   key={p.id}
	  								   path={path}
	  								   name={p.name}
	  								   logoPath={logoPath}
	  								   bgImgPath={bgImgPath}
	  								   styles={styles}/>

	  				)
	  			})
	  		}
	  	</CSSTransitionGroup>
	   )
	}
}

export default ProjectIndex