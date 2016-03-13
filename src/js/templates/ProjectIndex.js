import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import BounceBall from './BounceBall';
import ProjectDiagonal from './ProjectDiagonal';
import AtvImg from 'react-atv-img';

import _ from 'lodash';
import h from '../utilities/helpers';
import Sortable from 'sortablejs';

class ProjectIndex extends React.Component {

	constructor(props) {
		super(props);

		this.state = {
			activeProject: null
		}
	}

	componentDidUpdate() {
	    var el = document.getElementById('balls'),
	        that = this,
	        sortable;

	    if (el && this.props.uid && this.props.reOrderProjects) {
	      sortable = Sortable.create(el, {
	        ghostClass: "sortable-ghost",  // Class name for the drop placeholder
	        chosenClass: "sortable-chosen",
	        setData: function (dataTransfer, dragEl) {
	          dataTransfer.setData('Text', dragEl.textContent);
	        },
	        onEnd: function(evt) {
	        	var oldPosition = evt.oldIndex;  
          		var newPosition = evt.newIndex; 
         		that.props.reOrderProjects(oldPosition, newPosition);
          		that.forceUpdate()
	        }
	      });
	    } 
	}

	setActiveProject(id) {
		this.setState({activeProject: id});
	}

	renderTiles(projects) {
		let styles ={
			page: {
				position: this.props.isIndexPage ? "absolute" : "relative",
				top: 0, left: 0,
				width:  this.props.isIndexPage ? "100%" : "auto",
				height: this.props.isIndexPage ? "100%" : "auto",
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
				<div style={styles.container}>

					<CSSTransitionGroup style={styles.page}
							component="div"
							transitionAppear={true}
							transitionAppearTimeout={1000}
							transitionName="bubbleUp"
							transitionEnterTimeout={1000}
							transitionLeaveTimeout={1000}>
						<h1 style={{flex: "2 0 100%", textAlign: "center", margin: 0}}>My Work</h1>
						{
				  			projects.map(function(p, key) {
				  				let path = "/work/" + p.name;
				  				return (
				  				<Link to={path} key={p.name}>
									<AtvImg
									  layers={[
									    p.background,
									    p.logo,
									  ]}
									  staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
									  isStatic={false}
									  className={'thisIsOptional'}
									  style={{ width: 120, height: 80, margin: 20 }}
									/>
								</Link>
				  				)
				  			})
				  		}					
			  		</CSSTransitionGroup>
				</div>
		)
	}

	renderBalls(projects) {
		var related = this.props.filter ? <h3>Other Web Projects</h3> : null,
			small = this.props.windowW < 700 ? true : false;
		let styles ={
			page: {
				position: this.props.isIndexPage ? "absolute" : "relative",
				top: 0, left: 0,
				width:  this.props.isIndexPage ? "100%" : "auto",
				height: this.props.isIndexPage ? "100%" : "auto",
				display: "flex",
				flexFlow: "row wrap",
				alignItems: small ? "flex-start" : "center",
				justifyContent: "center",
				paddingTop: small ? 70 : null
			},
			container: {
				display: "flex",
				flexFlow: "row wrap",
				alignItems: "center",
				justifyContent: "center",
				height: "auto"
			},
		}

		//var title = this.state.activeProject ? this.props.projects[this.state.activeProject].name : "My Work";
		var title = "My Work",
		img;
		//var img = this.state.activeProject ? <img src={this.props.projects[this.state.activeProject].logo} style={{width: 45, verticalAlign: "middle", marginRight: 10}}/> : null;

		var currentProject = (
			<CSSTransitionGroup 
				style={{flex: "1 0 100%",
						textAlign: "center",
						width: "100%", 
						height: "auto", 
						margin: 10, 
						fontSize: "1em", 
						position: "relative", 
						whiteSpace: "nowrap"}}
				transitionName="fadeIn"
		        transitionAppear={true}
		        transitionAppearTimeout={1000}
		        transitionEnterTimeout={1000}
		        transitionLeaveTimeout={1000}>
			    <h1 style={{margin: 0}}>
			    	{img}
			    	{title}
			    </h1>
	  			<div style={{
	  					width:"100%",
	  					height: "100%",
	  					position: "absolute",
	  					top: 0,
	  					left: 0,
	  					background: "linear-gradient(transparent 0%, rgba(255,255,255, 0.6) 100%)"
	  		 		 }}>
	  			</div>
			</CSSTransitionGroup>
		)

		var size = this.props.size;
		var setActiveProject = this.setActiveProject.bind(this);

		return (
		<div style={styles.page}>
			<section>
				{this.props.isIndexPage ? currentProject : null}
		  		<CSSTransitionGroup 
		  					id="balls"
							component="div"
							style={styles.container}
							transitionAppear={true}
							transitionAppearTimeout={2000}
							transitionName="menuFade"
							transitionEnterTimeout={2000}
							transitionLeaveTimeout={2000}>
					{
			  			projects.map(function(p, key) {
			  				let path = "/work/" + h.prettyUrl(p.name);
			  				return (
								<BounceBall 
									 ref={p.key}
									 key={p.key}
									 id={p.key}
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
			  		</CSSTransitionGroup>
			</section>
	  	</div>
	   )
	}

	renderBars(projects) {
		var related = this.props.filter ? <h3>Other Web Projects</h3> : null;
		return (
			<div className="project-bars">
				{related}
				{
		  			projects.map(function(p, key) {
		  				let path = "/work/" + h.prettyUrl(p.name),
		  					 logoPath = p.logo,
		  					 bgImgPath = p.background,
		  					 styles = {
		  					 	link: {
		  					 		position: "relative",
		  					 		zIndex: 9,
		  					 		width: "100%",
		  					 		height: "auto"
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
							<Link to={path} style={styles.link} key={p.id}>
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