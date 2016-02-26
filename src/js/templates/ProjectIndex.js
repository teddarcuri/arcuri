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

		this.state = {
			activeProject: null
		}
	}

	setActiveProject(id) {
		this.setState({activeProject: id});
		console.log(this.state);

	}

	renderBalls(projects) {
		var related = this.props.filter ? <h3>Other Web Projects</h3> : null;
		let styles ={
			page: {
				position: this.props.isIndexPage ? "absolute" : "relative",
				top: 0, left: 0,
				width:  this.props.isIndexPage ? window.innerWidth : "auto",
				height: this.props.isIndexPage ? window.innerHeight : "auto",
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

		var title = this.state.activeProject ? this.props.projects[this.state.activeProject - 1].name : "Select A Project from Above";
		var img = this.state.activeProject ? <img src={this.props.projects[this.state.activeProject - 1].logo} style={{width: 40, verticalAlign: "middle", marginRight: 10}}/> : null;

		var currentProject = (
			<h3 style={{flex: "2 0 100%", textAlign: "center", height: 80, marginTop: 30}}>
	  			{img}
	  			{title}
			</h3>
		)

		var size = this.props.size;
		var setActiveProject = this.setActiveProject.bind(this);

		return (
		<CSSTransitionGroup style={styles.page}
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
									 size={size}
									 setActiveProject={setActiveProject}
									 >
							</BounceBall>
		  				)
		  			})
		  		}
		  		{this.props.isIndexPage ? currentProject : null}
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