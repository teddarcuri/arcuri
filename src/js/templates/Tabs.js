import React from 'react';
import ReactDOM from 'react-dom';
import ProjectPage from './ProjectPage';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import Sortable from 'sortablejs';

class Tabs extends React.Component {
  constructor(props) {
  	super(props);
  }

  componentWillUpdate() {
    var galleryEl = document.getElementById('gallery-fields'),
        tagsEl = document.getElementById('tag-fields'),
        that = this,
        sortableGallery,
        sortableTags;

    if (galleryEl) {
      sortableGallery = Sortable.create(galleryEl, {
        ghostClass: "sortable-ghost",  // Class name for the drop placeholder
        chosenClass: "sortable-chosen",
        setData: function (dataTransfer, dragEl) {
          dataTransfer.setData('Text', dragEl.textContent);
        },
        onEnd: function (evt) {
          var oldPosition = evt.oldIndex;  
          var newPosition = evt.newIndex; 
          that.props.reOrderGallery(oldPosition, newPosition);
          that.forceUpdate()
        },
      });
    } else if (tagsEl) {
      sortableTags = Sortable.create(tagsEl, {
        ghostClass: "sortable-ghost",  // Class name for the drop placeholder
        chosenClass: "sortable-chosen",
        setData: function (dataTransfer, dragEl) {
          dataTransfer.setData('Text', dragEl.textContent);
        },
        onEnd: function (evt) {
          var oldPosition = evt.oldIndex;  
          var newPosition = evt.newIndex; 
          that.props.reOrderTags(oldPosition, newPosition);
          that.forceUpdate()
        },
      });
    }
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
  showGeneralTab() {
    var tagFields,
        tags = this.props.project.tags ? Object.keys(this.props.project.tags) : null;

    if (tags) {
      tagFields = tags.map(function(t){
        var linkState = this.props.mode === "CREATE" ? this.props.linkState('newProject.tags.' + t + '.value') : this.props.linkState('currentProject.tags.' + t + '.value');
        return (
          <div className="flex" key={t}>
            <input ref={t}
                   type="text"
                   valueLink={linkState} />
            <span className="remove-btn" onClick={this.props.removeTag.bind(null, t)}>X</span>
          </div>
        )
      }, this)
    } else {
      tagFields = <span className="support-text">There is no gallery yet. Add some images!</span>;
    }


  	return (
  		<div className="details">
  			<label htmlFor="name">Name</label>
        <div className="flex">
    			<input ref="name" 
  	    				   name="name" 
  	    				   type="text" 
  	    				   placeholder="name"
  	    				   valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.name') : this.props.linkState('currentProject.name')} />
        </div>

        <label htmlFor="url">URL</label>
        <div className="flex">
          <input ref="url" 
             type="url" 
             placeholder="url"
             name="url"
             valueLink={ this.props.mode === "CREATE" ? this.props.linkState('newProject.url') : this.props.linkState('currentProject.url')}/>
        </div>
        <div className="gallery-fields">
          <a className="add-gallery-field" onClick={this.props.addTag}>
            Add Tag
          </a>
          <br />
          <br />
          <div id="tag-fields">
            {tagFields}
          </div>
        </div>
  		</div>
  	) 
  }

  showAppearenceTab() {
    return (
      <div>
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

  showOverviewTab() {
  	return (
  		<div className="details">
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
          <br />
          <br />
          <div id="gallery-fields">
            {fields}
          </div>
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
  			return this.showGeneralTab();
  			break;
  		case 1:
  			return this.showGalleryTab(this.props.project.gallery);
  			break;
  		case 2:
  			return this.showOverviewTab();
  			break;
      case 3:
        return this.showAppearenceTab();
        break;
  		default:
  			return this.showHeaderTab();
  	}
  }

  render() {
    var btnText = this.props.mode === "CREATE" ? "Create Project" : "Apply Changes",
        deleteBtn = this.props.mode === "EDIT" ? <button className="red-btn-outline">Delete Project</button> : "";
    return (
      <form onSubmit={this.handleSubmit.bind(this)}>

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