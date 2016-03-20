import React from 'react';
import {Link, Navigation} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import h from '../utilities/helpers';

class ProjectBelt extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			transitioningToProject: false,
			activeProject: null
		}
	}

	handleClick(project) {
		let path = "/work/" + h.prettyUrl(project.name);
		// Set Active project and transitioning State
		this.setState({activeProject: project.key})
		this.setState({transitioningToProject: true})
		// Make logo light
		document.getElementById("main").classList.add("light");
		// Transition to project page
		setTimeout(() =>{
			this.props.history.pushState(null, path);
		}, 2500)
	}

	handleHover(project) {
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
				paddingTop: small ? 70 : 0,
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexFlow: small ? "row wrap" : "row no-wrap",
				transition: "all ease 1s",
				background: this.state.transitioningToProject ? "#111" : null
			}
		}
		return (
		<CSSTransitionGroup 
			style={styles.page}
			transitionAppear={true}
			transitionAppearTimeout={1000}
			transitionName="bubbleUp"
			transitionEnterTimeout={1000}
			transitionLeaveTimeout={1000}>
			{
	  			projects.map( (p, key)=> {
	  				var isActive = this.state.activeProject == p.key,
	  					transitioning = this.state.transitioningToProject,
	  					fadeOut = !isActive &&  transitioning,
	  					renderProjectInfo;

	  				function tags(p) {
	  					if (p.tags) {
							return (
							<ul>
								{Object.keys(p.tags).map((tag)=>{
									return <li style={{color: "#fff", fontSize: "0.7em", textTransform: "uppercase", margin: "10px 0px"}}>{p.tags[tag].value}</li>
								})}
	  						</ul>
							)
						}
	  				}

	  				if (isActive && transitioning) {
	  					// Loading screen
	  					renderProjectInfo = (
	  						<h3 style={{
								color: "#fff",
								zIndex: 1,
								fontSize: "1.2em",
								margin: "10px 0px"
							}}>
								<img src="http://jxnblk.com/loading/loading-spin.svg" style={{marginRight: 10, verticalAlign: "middle"}} alt=""/>
								Loading {p.name}
							</h3>
	  					)
	  				} else if (isActive && !transitioning && !small) {
	  					// Hover for Information screen
	  					renderProjectInfo = (
	  						<div style={{
	  								zIndex: 1, 
	  								background: "rgba(0,0,0,0.7)", 
	  								padding: 10, 
	  								width: "100%", 
	  								position: "absolute", 
	  								bottom: 0,
	  								textAlign: "center"
	  							}}>
		  						<h3 style={{
									color: "#fff",
									zIndex: 1,
									fontSize: "1.2em",
									padding: "20px 10px 20px 10px",
									width: "auto",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									margin: 0,
									textAlign: "center"
								}}>
		  							{p.name}
		  						</h3>
		  						{tags(p)}
	  						</div>
	  					)
					} else if (small) {
						// Small viewports
						renderProjectInfo = (
							<div style={{
	  								zIndex: -1, 
	  								background: "rgba(0,0,0,0.6)", 
	  								padding: 20, 
	  								width: "70%",
	  								height: "100%", 
	  								position: "absolute", 
	  								bottom: 0,
	  								right: 0,
	  								textAlign: "center",
	  								display: "flex",
									alignItems: "center",
									justifyContent: "center",
	  							}}>
		  						<h3 style={{
									color: "#fff",
									zIndex: 1,
									fontSize: "1em",
									width: "auto",
									whiteSpace: "nowrap",
									overflow: "hidden",
									textOverflow: "ellipsis",
									margin: 0,
									textAlign: "center"
								}}>
		  							{p.name}
		  						</h3>
	  						</div>
						)
					}

					var activeHeight;

					if (isActive && transitioning && small) {
						activeHeight = "500px"
					} else if (isActive && !transitioning && small) {
						activeHeight = "100px"
					} else if(isActive && !small) {
						activeHeight = "50%"
					}

	  				return (
						<div key={p.name} 
						    onClick={this.handleClick.bind(this, p)} 
							onMouseEnter={this.handleHover.bind(this, p)}
							style={{
								flex: small ? "2 1 100%" : "1 1 auto", 
								width: fadeOut ? "0px" : "100%",
								height: isActive ? activeHeight : "100px",
								order: isActive && transitioning && small ? 0 : 1,
								background: "#222",
								cursor: "pointer",
								overflow: "hidden",
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
								flexFlow: "row wrap",
								position: "relative",
								transition: "all ease 1s",
								background: "url(" + p.background + ") center no-repeat",
								backgroundSize: "cover",
								transform: "translateZ(0)",
								opacity: fadeOut ? 0 : 1,
								zIndex: isActive ? 9 : 1,
							 }}>
							<div style={{zIndex: 1, textAlign: small && !transitioning ? "left" : "center", width: "100%"}}>
								<CSSTransitionGroup 
								transitionAppear={true}
								transitionAppearTimeout={1000}
								transitionName="bubbleUp"
								transitionEnterTimeout={1000}
								transitionLeave={false}>
							 		<img src={p.logo} 
							 			 style={{
							 			 	width: isActive && transitioning ? 150 : 55, 
							 			 	margin: small ? 30 : 0, 
							 			 	zIndex: 1, 
							 			 	transition: "all ease 1s"	
							 			 }}/>
							    	{renderProjectInfo}
							 	</CSSTransitionGroup>
							</div>
							<div style={{
								 	zIndex: 0,
								 	position: "absolute",
								 	left: 0, top: 0,
								 	width: "100%", height: "100%",
								 	background: isActive || small ? "rgba(17,17,17,0.7)" : "rgba(17,17,17,1)"
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