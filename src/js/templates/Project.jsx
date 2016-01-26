import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import projectList from '../utilities/project-list';

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

      <CSSTransitionGroup className="project-page" 
              component="div"
              transitionAppear={true}
              transitionAppearTimeout={0}
              transitionName="bubbleUp"
              transitionEnterTimeout={1000}
              transitionLeaveTimeout={1000}>
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
    		<section ref="projectContent" className="project-content">
    			<div className="container">
	    			<p>
		    			Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Nullam id dolor id nibh ultricies vehicula ut id elit. Nullam id dolor id nibh ultricies vehicula ut id elit. Maecenas sed diam eget risus varius blandit sit amet non magna. Donec ullamcorper nulla non metus auctor fringilla. Vestibulum id ligula porta felis euismod semper. Etiam porta sem malesuada magna mollis euismod.
					</p>
				</div>
    		</section>
    	</CSSTransitionGroup>
    );
  }
}

export default Project