import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectDiagonal from './ProjectDiagonal';

import BounceBall from './BounceBall';


class ProjectDiagonals extends React.Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {

	}

	render(){
		var projects = this.props.projects;

		let styles ={
			page: {
				position: "absolute",
				top: 0, left: 0,
				width:  window.innerWidth,
				height: window.innerHeight,
				alignItems: "center"
			},
			container: {
				display: "flex",
				flexFlow: "row wrap",
				alignItems: "center",
				justifyContent: "center"
			}
		}
		return (
		<CSSTransitionGroup className="diagonals" 
							component="div"
							style={styles.page}
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="slideLeft"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
			<div style={styles.container}>
				{
		  			projects.map(function(p, key) {
		  				let path = "/work/" + p.name;
		  				return (
							<BounceBall ref={p.id}
									 path={path}
									 name={p.name}
									 logo={p.logo}
									 background={p.background}
									 >
							</BounceBall>
		  				)
		  			})
		  		}
		  		<h1 style={{flex: "2 0 100%", textAlign: "center"}}>
		  			<img style={{width: 40}} src={projects[1].logo}  className="project-logo"/> Colorado.gov
		  		</h1>
			</div>				
	 
	  	</CSSTransitionGroup>
	   )
	}
}

export default ProjectDiagonals