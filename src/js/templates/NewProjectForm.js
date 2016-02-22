import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from './ProjectPage';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class NewProjectForm extends React.Component {
  constructor(props) {
  	super(props);

  	this.state = {
  		currentTab: 0,

  		tabs: [
  			{
  				title: "Header"
  			},
  			{
  				title: "Gallery"  			
  			},
  			{
  				title: "Details"
  			}
  		]
  	}
  }

  componentDidMount() {
  	//ReactDOM.findDOMNode(this.refs.header).classList.add("active");
  }

  // Send the new project off to the App
  createProject(ev) {

  	ev.preventDefault();

  	// var project = {
  	// 	name: this.refs.name.value,
  	// 	background: this.refs.background.value,
  	// 	logo: this.refs.logo.value,
  	// 	types: this.refs.types.value,
  	// 	description: this.refs.description.value,
  	// 	gallery: {
   //        image1: {
   //          path: "/src/img/gallery_images/colorado_gov/contact.png"
   //        }
   //      }
  	// }

  	// Add to project to state
  	//this.props.addProject();
  }

  showHeaderTab() {
  	return (
  		<div className="details">
  			<label htmlFor="name">Name</label>
  			<input ref="name" 
	    				   name="name" 
	    				   type="text" 
	    				   placeholder="name"
	    				   name="name"
	    				   valueLink={this.props.linkState('newProject.name')} />

  			<label htmlFor="logo">Logo</label>
  			<div className="flex">
  				<img className="thumb" src={this.props.newProject.logo} />
	  			<input ref="logo" 
					   type="logo" 
					   placeholder="logo"
					   name="logo"
					   valueLink={this.props.linkState('newProject.logo')}/>
  			</div>
  			

			<label htmlFor="background">Background</label>
			<div className="flex">
	  			<img className="thumb" src={this.props.newProject.background} />
				<input ref="background" 
					   type="background" 
					   placeholder="background"
					   name="background"
					   valueLink={this.props.linkState('newProject.background')}/>
			</div>
  		</div>
  	) 
  }

  showDetailsTab() {
  	return (
  		<div className="details">
	    	<label htmlFor="types">Types</label>
	    	<input ref="types" 
				   type="types" 
				   placeholder="types"/>

			<label htmlFor="description">Description</label>
	    	<textarea name="description" 
					  ref="description"
					  id="" 
					  cols="30" 
					  rows="10"
					  valueLink={this.props.linkState('newProject.description')}>

			</textarea>
			
  		</div>
  	) 
  }

  showGalleryTab(gallery) {
  	return (
  		<div className="details">
  			<div className="gallery-fields">
		  		{
		  			Object.keys(gallery).map(function(g){
		  				console.log(this.props.newProject.gallery[g].path)
		  				return <input key={g} valueLink={this.props.linkState('newProject.gallery[' + g + '].path')} />
		  			}, this)
		  		}
		  		<button className="add-gallery-field" onClick={this.addGalleryImage.bind(this)}>
		  			+
		  		</button>
	  		</div>
  		</div>
  	) 
  }

  addGalleryImage() {
  	var timestamp = (new Date()).getTime();
  	this.props.newProject.gallery['image' + timestamp] = {path: "/src/img/gallery_images/colorado_gov/front-page.png"};
  }

  updateTab(key) {
  	this.setState({currentTab: key});
  }

  renderTabs() {
  	var tabs = this.state.tabs;

  	return (
	  	<ul>
	  		{tabs.map(function(t, key){
	  			var boundClick = this.updateTab.bind(this, key),
	  				classes = ( this.state.currentTab === key) ? "tab active" : "tab" ;
				return (<li className={classes} key={key} ref={key} onClick={boundClick}>{t.title}</li>)
			}, this)}
		</ul>
  	)
  }

  renderTab() {
  	console.log(this.state.currentTab);
  	switch (this.state.currentTab) {
  		case 0:
  			return this.showHeaderTab();
  			break;
  		case 1:
  			return this.showGalleryTab(this.props.newProject.gallery);
  			break;
  		case 2:
  			return this.showDetailsTab();
  			break;
  		default:
  			return this.showHeaderTab();
  	}
  }

  render() {

  	var gallery = this.props.newProject.gallery;
    return (
    	<section className="project-builder">
    		<div className="sidebar">
	    		<form onSubmit={this.createProject.bind(this)}>

	    			<h3>Create</h3>

	    			<div className="tabs">
	    				
	    				{this.renderTabs()}

	    				<section>
	    					{this.renderTab()}
	    				</section>

	    				<button>Create Project</button>
	    			</div>

		    	</form>
	    	</div>

	    	<div id="preview-window">
	    	<ProjectPage currentProject={this.props.newProject}
                      	 linkState={this.props.linkState}
                      	 edit={null}
                     	 activeSection={this.state.activeSection}/>
		   	</div>
    	</section>
    )
  }
}

export default NewProjectForm;