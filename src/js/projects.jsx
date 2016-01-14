import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

let projects = [
		{
			id: 1,
			name: "Colorado.gov",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "src/img/logos/co-logo.png",
			background: "src/img/backgrounds/colorado.jpg"
		},
		{
			id: 2,
			name: "Colorado Governor",
			types: ["Web"],
			roles: ["Front End Development"],
			images: ["images/stuff.jpg"],
			logo: "src/img/logos/co-state-seal.png",
			background: "src/img/backgrounds/hickenlooper.jpg"
		}
]

class Projects extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			projects: projects
		}
	}

	componentDidMount() {
	      
	}

	render() {
		var projects = this.state.projects;
		return (
		<div>
	  		<h1>My Work</h1>
	  		{
	  			projects.map(function(p) {
	  				let path = "work/" + p.name,
	  					 logoPath = p.logo,
	  					 bgImgPath = p.background;
	  				return (
	  					<Link to={path} className="project-bubble">
							<img className="logo" src={logoPath} />
							<img className="bg" src={bgImgPath} />
	  					</Link>
	  				)
	  			})
	  		}
	  	</div>
	   )
	}
}


export default Projects