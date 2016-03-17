import React from 'react';
import {Link, Navigation} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectBelt extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			transitioningToProject: false,
			activeProject: null
		}
	}

	handleClick(project) {
		let path = "/work/" + project.name;
		// Set Active project and transitioning State
		this.setState({activeProject: project.key})
		this.setState({transitioningToProject: true})
		// Make logo light
		document.getElementById("main").classList.add("light");
		// Transition to project page
		setTimeout(() =>{
			this.props.history.pushState(null, path);
		}, 2200)
	}

	handleHover(project) {
		console.log(project);
		this.setState({activeProject: project.key})
	}

	render(){
		var projects = this.props.projects;
		var small = window.innerWidth < 700;
		let styles ={
			page: {
				position: "absolute",
				top: 0, left: 0,
				width:  window.innerWidth,
				height: small ? "auto" : window.innerHeight,
				paddingTop: small ? 100 : 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexFlow: small ? "row wrap" : "row no-wrap",
				transition: "all ease 1s",
				background: this.state.transitioningToProject ? "#222" : null
			}
		}
		return (
		<CSSTransitionGroup 
			style={styles.page}
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionName="menuFade"
			transitionEnterTimeout={1000}
			transitionLeaveTimeout={1000}>
			{
	  			projects.map( (p, key)=> {
	  				var path = "/work/" + p.name,
	  					isActive = this.state.activeProject == p.key,
	  					transitioning = this.state.transitioningToProject,
	  					fadeOut = !isActive &&  transitioning;

	  				return (
						<div onClick={this.handleClick.bind(this, p)} 
							 onMouseOver={this.handleHover.bind(this, p)}
							style={{
								flex: small ? "2 1 100%" : "1 1 auto", 
								width: fadeOut ? "0px" : "100%",
								height: "100px",
								background: "#222",
								cursor: "pointer",
								overflow: "hidden",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								position: "relative",
								transition: "all ease 1s",
								background: "url(" + p.background + ") center no-repeat",
								backgroundSize: "cover",
								opacity: fadeOut ? 0 : 1
							 }}>
							<img src={p.logo} 
							     style={{
							     	zIndex: 1,
							     	width: 50
							     }}/>
							<div key={path} style={{
								 	zIndex: 0,
								 	position: "absolute",
								 	left: 0, top: 0,
								 	width: "100%", height: "100%",
								 	background: isActive || small ? "rgba(34,34,34,0.8)" : "rgba(34,34,34,1)"
								 }}>
							</div>
						</div>
	  				)
	  			})
	  		}
	  	</CSSTransitionGroup>
	   )
	}
}

export default ProjectBelt