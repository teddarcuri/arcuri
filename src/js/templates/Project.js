import React from 'react';
import Radium from 'radium';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectPage from './ProjectPage';
import Tabs from './Tabs';
import {Motion, spring, presets} from 'react-motion';


class Project extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      isEditing: false,
      showActiveSection: true,
      activeSection: 0,
      sections: [
        {
          title: "General"
        },
        {
          title: "Gallery"        
        },
        {
          title: "Overview"
        },
        {
          title: "Appearence"
        }
      ]
    }
  }

  /* 
    Lifecycle
  */

  componentWillMount() {
    var path = this.props.location.pathname;

    // Set scroll position to top of page
    window.scrollTo(0, 0);

    // Determine if New or Exisiting Project
    if (path.indexOf('work/new') != -1) {
      this.props.setProjectMode("CREATE");
    } else {
      this.props.setProjectMode("EDIT");
    }
  }

  isEditing() {
    // Set Editing Mode
    this.setState({isEditing: !this.state.isEditing});
  }

  /*
    Active Sections 
  */

  setActiveSection(key) {
    this.setState({activeSection: key});
  }


  /*
    Sidebar
  */

  renderTabs() {
    if (this.props.projectMode === "EDIT" && this.state.isEditing && this.props.uid) {
      return (
       <Tabs sections={this.state.sections}
            activeSection={this.state.activeSection}
            project={this.props.currentProject}
            linkState={this.props.linkState}
            mode={this.props.projectMode}
            addProject={this.props.addProject}
            updateProject={this.props.updateProject}
            setActiveSection={this.setActiveSection.bind(this)}
            addGalleryImage={this.props.addGalleryImage}
            removeGalleryImage={this.props.removeGalleryImage}
            reOrderGallery={this.props.reOrderGallery}
            addTag={this.props.addTag}
            removeTag={this.props.removeTag}
            reOrderTags={this.props.reOrderTags}
             /> 
      ) 
    } else if (this.props.projectMode === "CREATE" && this.props.uid) {
      return  (
      <Tabs sections={this.state.sections}
            activeSection={this.state.activeSection}
            project={this.props.newProject}
            linkState={this.props.linkState}
            mode={this.props.projectMode}
            addProject={this.props.addProject}
            updateProject={this.props.updateProject}
            setActiveSection={this.setActiveSection.bind(this)} 
            addGalleryImage={this.props.addGalleryImage}
            removeGalleryImage={this.props.removeGalleryImage}
            reOrderGallery={this.props.reOrderGallery}
            addTag={this.props.addTag}
            removeTag={this.props.removeTag}
            reOrderTags={this.props.reOrderTags}
            showActiveSection={this.state.showActiveSection} />  
      )
    } else {
      return null;
    }
  }

  renderSidebar() {
    var tabs = this.state.isEditing || this.props.projectMode === "CREATE" ? this.renderTabs() : null;

    return (
      <CSSTransitionGroup 
              className="sidebar"
              transitionName="menuFade"
              transitionAppear={true}
              transitionAppearTimeout={800}
              transitionEnterTimeout={800}
              transitionLeaveTimeout={800}>
         {tabs}
      </CSSTransitionGroup>
    ) 
  }

  getStyles() {
    return {
      projectScrollArrows: {
        position: "fixed",
        zIndex: 2,
        width: "100%",
        height: 60,
        top: "50%", left: 0,
      },
      prevArrow: {
        position: "absolute",
        background: "#000",
        color: "#666",
        height: 100,
        overflow: "hidden",
        left: 0,
        transition: "all ease 0.5s",
        transform: "translateX(calc(-100% + 30px))",
        ":hover": {
          transform: "translateX(0%)"
        }
      },
      nextArrow: {
        position: "absolute",
        background: "#000",
        color: "#666",
        height: 100,
        overflow: "hidden",
        right: 0,
        transition: "all ease 0.5s",
        transform: "translateX(calc(100% - 30px))",
        ":hover": {
          transform: "translateX(0%)"
        }
      }
    }
  }

  render() {
  	var p = this.props.projectMode === "EDIT" ? this.props.currentProject : this.props.newProject,
        sidebar =  this.renderSidebar();

    return (
      <div className="project">

        {/* Sidebar */}
        {sidebar}
          
        {/* Page */}
        <ProjectPage currentProject={p}
                    uid={this.props.uid}
                    projects={this.props.projects}
                    mode={this.props.projectMode}
                    isEditing={this.state.isEditing}
                    edit={this.isEditing.bind(this)}
                    linkState={this.props.linkState}
                    removeProject={this.props.removeProject}
                    sections={this.state.sections}
                    activeSection={this.state.activeSection}
                    showActiveSection={this.state.showActiveSection} />
      </div>   
    );
  }
}

export default Radium(Project);