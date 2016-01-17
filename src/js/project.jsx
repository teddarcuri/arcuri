import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import ReactTransitionGroup from 'react-addons-transition-group';
import projectList from './project-list';

class Project extends React.Component {

  constructor(props) {
  	super(props);
  	this.state = {
  		projects: projectList,
  		project: projectList[0]
  	}
  }

  componentDidMount() {
      const id = this.props.params.name
      this.setState({project: this.findById(this.state.projects, id) })
  }

  animateIn() {
  	setTimeout(() => { document.body.style.background = "#111111"}, 1500);
  	setTimeout(() => { this.refs.backgroundImage.style.opacity = "0.3" }, 1500);
   setTimeout(() => { this.refs.projectSidebar.style.transform = "translateX(0%)" }, 1700);
  }

  animateOut() {
  	document.body.style.background = "whitesmoke";
  	setTimeout(() => { this.refs.backgroundImage.style.opacity = "0" }, 50);
   setTimeout(() => { this.refs.projectSidebar.style.transform = "translateX(-200%)" }, 100);
  }

  findById(source, id) {
	  for (var i = 0; i < source.length; i++) {
	    if (source[i].name == id) {
	      return source[i];
	    }
	  }
	}

  render() {
  	var bgImgPath = this.state.project.background;
    return (
    	<div className="project-page">
    		<img ref="backgroundImage" src={bgImgPath} className="bg"/>

    		<div className="project-sidebar" ref="projectSidebar">
    			<header>
    			   <img ref="logo" src={this.state.project.logo} className="logo"/>
    				<img src={bgImgPath} className="bg"/>
    				<h1>
    					{this.state.project.name}
    				</h1>
    			</header>
    			<ul>
    				<li>
    					<span>Gallery</span>
    				</li>
    				<li>
    					<span>Overview</span>
    				</li>
    				<li>
    					<span>Details</span>
    				</li>
    			</ul>
    		</div>
    		<section className="project-content">

    		</section>
    	</div>
    );
  }
}

export default Project