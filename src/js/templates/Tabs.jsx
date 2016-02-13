import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from './ProjectPage';
import CSSTransitionGroup from 'react-addons-css-transition-group';

class Tabs extends React.Component {
  constructor(props) {
  	super(props);
  }

  handleSubmit(ev) {
    ev.preventDefault();

    if (this.props.mode === "CREATE") {
      this.props.addProject();
    } else {
      this.props.updateProject();
    }

  }

  // Send the new project off to the App
  /* 
    Tab Renders
  */
  showHeaderTab() {
  	return (
  		<div className="details">
  			<label htmlFor="name">Name</label>
        <div className="flex">
    			<input ref="name" 
  	    				   name="name" 
  	    				   type="text" 
  	    				   placeholder="name"
  	    				   name="name"
  	    				   valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.name') : this.props.linkState('currentProject.name')} />
        </div>
        
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

    /* FIGURE OUT HOW TO LINK STATE TO IMAGES */

    if (images.length) {
      fields = images.map(function(g){
        var linkState = this.props.mode === "CREATE" ? this.props.linkState('newProject.gallery.' + g + '.path') : this.props.linkState('currentProject.gallery.' + g + '.path');
        return (
          <div className="flex" key={g}>
            <img className="thumb" src={this.props.project.gallery[g].path} />
            <input ref={g}
                   type="text"
                   valueLink={linkState} />
            <span className="remove-btn" onClick={this.props.removeGalleryImage.bind(null, g)}>X</span>
          </div>
        )
      }, this)
    } else {
      fields = <span className="support-text">There is no gallery yet. Add some images!</span>
    }
 
  	return (
  		<div className="details">
  			<div className="gallery-fields">
          <a className="add-gallery-field" onClick={this.props.addGalleryImage}>
            Add Image
          </a>
          {fields}
	  		</div>
  		</div>
  	) 
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
    var title = this.props.mode === "CREATE" ? "Create" : "Edit Sections",
        btnText = this.props.mode === "CREATE" ? "Create Project" : "Apply Changes",
        deleteBtn = this.props.mode === "EDIT" ? <button className="red-btn-outline">Delete Project</button> : "";
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

        <h3>{title}</h3>

        <div className="tabs">
              
          {this.renderTabs()}

          <section>
            {this.renderTab()}
          </section>

          <button className="confirm-btn-outline">{btnText}</button>

          {deleteBtn}
        </div>

       </form>
    )
  }
}

export default Tabs;