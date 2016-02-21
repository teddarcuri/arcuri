import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectPage from './ProjectPage';
import Tabs from './tabs';
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
          title: "Header"
        },
        {
          title: "Gallery"        
        },
        {
          title: "Details"
        },
        {
          title: "Role"
        },
        {
          title: "Tech"
        }
      ]
    }
  }

  /* 
    Lifecycle
  */

  componentWillMount() {
    var path = this.props.location.pathname;

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
  renderSidebar() {
    if (this.props.projectMode === "EDIT" && this.state.isEditing) {
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
              removeGalleryImage={this.props.removeGalleryImage} /> 
      ) 
    } else if (this.props.projectMode === "CREATE") {
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
              showActiveSection={this.state.showActiveSection} />  
      )
    }
  }

  render() {
  	var p = this.props.projectMode === "EDIT" ? this.props.currentProject : this.props.newProject,
        sidebarClasses = this.state.isEditing || this.props.projectMode === "CREATE"  ? "sidebar active" : "sidebar";

    return (

      <div className="project">

          <div className={sidebarClasses}>
            {this.renderSidebar()}
          </div>

         <ProjectPage currentProject={p}
                      isAuthenticated={false}
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

export default Project