import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NewProjectForm extends React.Component {
  render() {
    return (
    	<form action="" className="full-screen">
    		<h3>Create Project</h3>

    		<div className="half">
    			<label htmlFor="name">Name</label>
    			<input name="name" type="text" />
    		</div>
    		<div className="half">
    			<label htmlFor="types">Types</label>
    			<input type="types"/>
    		</div>
    		<div className="half">
    			<label htmlFor="background">Background</label>
    			<input type="background"/>
    		</div>
    		<div className="half">
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
    )
  }
}

export default NewProjectForm