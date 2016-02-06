import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from './ProjectPage';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Tabs extends React.Component {
  constructor(props) {
  	super(props);
  }

  // // Send the new project off to the App
   createProject(ev) {

   	ev.preventDefault();

  // 	// var project = {
  // 	// 	name: this.refs.name.value,
  // 	// 	background: this.refs.background.value,
  // 	// 	logo: this.refs.logo.value,
  // 	// 	types: this.refs.types.value,
  // 	// 	description: this.refs.description.value,
  // 	// 	gallery: {
  //  //        image1: {
  //  //          path: "/src/img/gallery_images/colorado_gov/contact.png"
  //  //        }
  //  //      }
  // 	// }

  // 	// Add to project to state
      this.props.addProject();
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
	    				   valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.name') : this.props.linkState('currentProject.name')} />

  			<label htmlFor="logo">Logo</label>
  			<div className="flex">
  				<img className="thumb" src={this.props.project.logo} />
	  			<input ref="logo" 
					   type="logo" 
					   placeholder="logo"
					   name="logo"
					   valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.logo') : this.props.linkState('currentProject.logo')}/>
  			</div>
  			

			<label htmlFor="background">Background</label>
			<div className="flex">
	  			<img className="thumb" src={this.props.project.background} />
				<input ref="background" 
					   type="background" 
					   placeholder="background"
					   name="background"
					   valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.background') : this.props.linkState('currentProject.background')}/>
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
					  valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.description') : this.props.linkState('currentProject.description')}>

			</textarea>
			
  		</div>
  	) 
  }

  showGalleryTab(gallery) {
    var images = Object.keys(gallery),
        fields;

    if (images.length) {
      images.map(function(g){
        return <input key={g} valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.gallery[' + g + '].path') :  this.props.linkState('currentProject.gallery[' + g + '].path')} />
      }, this)
    }

  	return (
  		<div className="details">
  			<div className="gallery-fields">
		  		<button className="add-gallery-field" onClick={this.addGalleryImage.bind(this)}>
		  			+
		  		</button>
	  		</div>
  		</div>
  	) 
  }

  addGalleryImage() {
  	var timestamp = (new Date()).getTime();
  	this.props.project.gallery['image' + timestamp] = {path: "/src/img/gallery_images/colorado_gov/front-page.png"};
  }

  updateTab(key) { 
    this.props.setActiveSection(key);
  }

  renderTabs() {
  	var tabs = this.props.sections;

  	return (
	  	<ul>
	  		{tabs.map(function(t, key){
	  			var boundClick = this.updateTab.bind(this, key),
	  				classes = ( this.props.activeSection === key) ? "tab active" : "tab" ;
				return (<li className={classes} key={key} ref={key} onClick={boundClick}>{t.title}</li>)
			}, this)}
		</ul>
  	)
  }

  renderTab() {
  	switch (this.props.activeSection) {
  		case 0:
  			return this.showHeaderTab();
  			break;
  		case 1:
  			return this.showGalleryTab(this.props.project.gallery);
  			break;
  		case 2:
  			return this.showDetailsTab();
  			break;
  		default:
  			return this.showHeaderTab();
  	}
  }

  render() {

    var title = this.props.mode === "CREATE" ? "Create" : "Edit";
    return (
      <form onSubmit={this.createProject.bind(this)}>

        <h3>{title}</h3>

        <div className="tabs">
              
          {this.renderTabs()}

          <section>
            {this.renderTab()}
          </section>

          <button>Create Project</button>
        </div>

       </form>
    )
  }
}

export default Tabs;