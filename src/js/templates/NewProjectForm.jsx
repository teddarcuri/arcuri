import React from 'react';
import Project from './project';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NewProjectForm extends React.Component {
  constructor(props) {
  	super(props);
  }

  render() {
    return (

    	<div className="sidebar">
    		<form action="">
	    		<h3>Create Project</h3>

	    		<div >
	    			<label htmlFor="name">Name</label>
	    			<input name="name" type="text" />
	    		</div>

	    		<div >
	    			<label htmlFor="types">Types</label>
	    			<input type="types"/>
	    		</div>
	    		<div >
	    			<label htmlFor="background">Background</label>
	    			<input type="background"/>
	    		</div>
	    		<div >
	    			<label htmlFor="logo">Logo</label>
	    			<input type="logo"/>
	    		</div>

	    		<label htmlFor="description">Description</label>
	    		<textarea name="description" />

	    		<label htmlFor="my-role">My Role</label>
	    		<textarea name="my-role" />

	    		<label htmlFor="tech-used">Tech Used</label>
	    		<textarea name="tech-used" />

	    		<button type="submit">
	    			Create Project
	    		</button>
	    	</form>

	    	<div id="preview-window">
	    		<Project currentProject={this.props.currentProject} />
	    	</div>
    	</div>
    )
  }
}

export default NewProjectForm