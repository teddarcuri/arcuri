import React from 'react';
import Radium from 'radium';
import {Link, Navigation} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectBelt extends React.Component {

	constructor(props) {
		super(props);
	}

	handleClick(project) {
		let path = "/work/" + project.name;
		
		setTimeout(() =>{
			this.props.history.pushState(null, path);
		}, 1000)

	}

	render(){
		var projects = this.props.projects;

		let styles ={
			page: {
				position: "absolute",
				top: 0, left: 0,
				width:  window.innerWidth,
				height: window.innerHeight,
				display: "flex",
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
				{
		  			projects.map( (p, key)=> {
		  				let path = "/work/" + p.name;
		  				return (
							<div onClick={this.handleClick.bind(this, p)} 
								style={{
									flex: "1 0 auto", 
									width: window.innerWidth / projects.length,
									height: "100px",
									background: "#222",
									overflow: "hidden",
									display: "flex",
									alignItems: "center",
									justifyContent: "center",
									position: "relative",
									background: "url(" + p.background + ") center no-repeat",
									backgroundSize: "cover"
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
									 	background: "rgba(33,33,33,1)",
									 	":hover" : {
									 		background: "rgba(0,0,0,0.7)"
									 	}
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

export default Radium(ProjectBelt)