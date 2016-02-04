import React from 'react';
import Project from './project';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import reactMixin from 'react-mixin';
import Catalyst from 'react-catalyst';


class NewProjectForm extends React.Component {
  constructor(props) {
  	super(props);
  }

  createProject(ev) {

  	ev.preventDefault();

  	var project = {
  		name: this.refs.name.value,
  		background: this.refs.background.value,
  		logo: this.refs.logo.value,
  		types: this.refs.types.value,
  		description: this.refs.description.value
  	}

  	// Add to project to state
  	this.props.addProject(project);
  }


  render() {
    return (
    	<section className="project-builder">
    		<div className="sidebar">
	    		<form onSubmit={this.createProject.bind(this)}>
		    		<h3>Create Project</h3>

	    			<input ref="name" 
	    				   name="name" 
	    				   type="text" 
	    				   placeholder="name"
	    				   valueLink={this.props.linkState('newProject.name')} />

	    			<input ref="types" 
	    				   type="types" 
	    				   placeholder="types"/>

	    			<input ref="background" 
	    				   type="background" 
	    				   placeholder="background"
	    				   valueLink={this.props.linkState('newProject.background')}/>

	    			<input ref="logo" 
	    				   type="logo" 
	    				   placeholder="logo"
	    				   valueLink={this.props.linkState('newProject.logo')}/>

		    		<textarea ref="description" 
		    			   	  name="description"
		    			   	  valueLink={this.props.linkState('newProject.description')} />

		    		<textarea ref="myRole" 
		    			   	  name="my-role" />

		    		<textarea ref="techUsed" 
		    			  	  name="tech-used" />

		    		<button type="submit">
		    			Create Project
		    		</button>
		    	</form>
	    	</div>

	    	<div id="preview-window">
		    	<Project currentProject={this.props.newProject} />
		   	</div>
    	</section>
    )
  }
}

reactMixin.onClass(NewProjectForm, Catalyst.LinkedStateMixin);

export default NewProjectForm;