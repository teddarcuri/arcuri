import React from 'react';
import ProjectPage from './ProjectPage';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NewProjectForm extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		currentStage: "DETAILS"
  	}
  }

  createProject(ev) {

  	ev.preventDefault();

  	var project = {
  		name: this.refs.name.value,
  		background: this.refs.background.value,
  		logo: this.refs.logo.value,
  		types: this.refs.types.value,
  		description: this.refs.description.value,
  		gallery: {
          image1: {
            path: "/src/img/gallery_images/colorado_gov/contact.png"
          }
        }
  	}

  	// Add to project to state
  	this.props.addProject(project);
  }

  renderGalleryFields(gallery) {
  	return (
  		<div className="gallery-fields">
  			<h3>Gallery</h3>
	  		{
	  			Object.keys(gallery).map(function(g){
	  				return <input value={gallery[g].path}/>
	  			})
	  		}
	  		<button className="add-gallery-field">
	  			+
	  		</button>
  		</div>
  	) 
  }

  showHeaderTab() {

  }

  showDetailsTab() {

  }

  showGalleryTab() {

  }

  renderFormStage() {
  	return (
  		<div className="details">

  			<label htmlFor="logo">Logo</label>
  			<input ref="logo" 
				   type="logo" 
				   placeholder="logo"
				   name="logo"
				   valueLink={this.props.linkState('newProject.logo')}/>

			<label htmlFor="name">Name</label>
  			<input ref="name" 
	    				   name="name" 
	    				   type="text" 
	    				   placeholder="name"
	    				   name="name"
	    				   valueLink={this.props.linkState('newProject.name')} />

			<input ref="types" 
				   type="types" 
				   placeholder="types"/>

			<input ref="background" 
				   type="background" 
				   placeholder="background"
				   valueLink={this.props.linkState('newProject.background')}/>
  		</div>
  	) 
  }

  render() {

  	var gallery = this.props.newProject.gallery;
  	console.log(gallery);
    return (
    	<section className="project-builder">
    		<div className="sidebar">
	    		<form onSubmit={this.createProject.bind(this)}>

	    			<div className="tabs">
	    				<ul>
	    					<li onClick={this.showHeaderTab}>Header</li>
	    					<li onClick={this.showGalleryTab}>Photo Gallery</li>
	    					<li onClick={this.showDetailsTab}>Project Details</li>
	    				</ul>

	    				<section>
	    					{this.renderFormStage()}
	    				</section>

	    				<button>Create Project</button>
	    			</div>

		    	</form>
	    	</div>

	    	<div id="preview-window">
	    	<ProjectPage currentProject={this.props.newProject}
                      	 linkState={this.props.linkState}
                      	 edit={null}
                     	 />
		   	</div>
    	</section>
    )
  }
}

export default NewProjectForm;