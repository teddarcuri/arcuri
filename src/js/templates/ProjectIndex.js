import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import BounceBall from './BounceBall';
import ProjectDiagonal from './ProjectDiagonal';

import _ from 'lodash';
import h from '../utilities/helpers';

class ProjectIndex extends React.Component {

	constructor(props) {
		super(props);
	}

	renderBalls(projects) {
		var related = this.props.filter ? <h3>Other Web Projects</h3> : null;
		let styles ={
			page: {
				position: "absolute",
				top: 0, left: 0,
				width:  window.innerWidth,
				height: window.innerHeight,
				display: "flex",
				flexFlow: "row wrap",
				alignItems: "center",
				justifyContent: "center",
			},
			container: {
				display: "flex",
				flexFlow: "row wrap",
				alignItems: "center",
				justifyContent: "center",
				height: "auto"
			},
		}

		return (
		<CSSTransitionGroup style={this.props.isIndexPage ? styles.page : null}
							component="div"
							transitionAppear={true}
							transitionAppearTimeout={0}
							transitionName="slideLeftIn"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
			{related}
	  		<div style={styles.container}>
				{
		  			projects.map(function(p, key) {
		  				let path = "/work/" + p.name;
		  				return (
							<BounceBall ref={p.id}
									 key={p.id}
									 id={p.id}
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

	renderBars(projects) {
		var related = this.props.filter ? <h3>Other Web Projects</h3> : null;
		return (
			<div className="project-bars">
				{related}
				{
		  			projects.map(function(p, key) {
		  				let path = "/work/" + p.name,
		  					 logoPath = p.logo,
		  					 bgImgPath = p.background,
		  					 styles = {
		  					 	link: {
		  					 		position: "relative",
		  					 		zIndex: 9,
		  					 		width: "100%",
		  					 		padding: 10  					 		
		  					 	},
		  					 	background: {
		  					 		backgroundImage: 'url(' + p.background + ')',
		  					 		backgroundSize: 'cover',
		  					 		position: "absolute",
		  					 		top: 0,
		  					 		left: 0,
		  					 		opacity: "0.666",
		  					 		height: "100%",
		  					 		width: "100%",
		  					 		display: "block"
		  					 	}
		  					 };
		  				return (
							<Link to={path} style={styles.link}>
								<span>
									{p.name}
								</span>
								<div className="background" style={styles.background}></div>
							</Link>
		  				)
		  			})
		  		}
			</div>
		)
	}

	render() {
		var projects = this.props.projects;

		if (this.props.filter === "WEB") {
			projects = _.filter(projects, function(p){
				return _.find(p.tags, {name: "Web"})
			})
		} else if (this.props.filter === "PRINT") {
			projects = _.filter(projects, function(p){
				return _.find(p.tags, {name: "Print"})
			})
		}

		if (this.props.type === "BALLS") {
			return this.renderBalls(projects);
		} else {
			return this.renderBars(projects);
		}
	}
}

export default ProjectIndex