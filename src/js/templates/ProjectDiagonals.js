import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectDiagonal from './ProjectDiagonal';


class ProjectDiagonals extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			width:  window.innerWidth,
			height: window.innerHeight
		}
	}

	componentDidMount() {

	}

	render() {
		var projects = this.props.projects;
		return (
		<CSSTransitionGroup className="diagonals" 
							component="div"
							style={{width: this.state.width, height: this.state.height}}
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="slideLeft"
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
					<ProjectDiagonal ref={p.id}
									 key={"diagonal" + key}
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

export default ProjectDiagonals