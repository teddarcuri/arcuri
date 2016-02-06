import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectPage from './ProjectPage';
import Tabs from './tabs';

class Project extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      mode: "CREATE",
      isEditing: false,
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
      this.setState({mode: "CREATE"});
    } else {
      this.setState({mode: "EDIT"});
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
    if (this.state.mode === "EDIT" && this.state.isEditing) {
      return (
         <Tabs sections={this.state.sections}
              activeSection={this.state.activeSection}
              project={this.props.currentProject}
              linkState={this.props.linkState}
              mode={this.state.mode}
              addProject={this.props.addProject}
              setActiveSection={this.setActiveSection.bind(this)} /> 
      ) 
    } else if (this.state.mode === "CREATE") {
      return  (
        <Tabs sections={this.state.sections}
              activeSection={this.state.activeSection}
              project={this.props.newProject}
              linkState={this.props.linkState}
              mode={this.state.mode}
              addProject={this.props.addProject}
              setActiveSection={this.setActiveSection.bind(this)} />  
      )
    }
  }

  render() {
  	var p = this.state.mode === "EDIT" ? this.props.currentProject : this.props.newProject,
        overview = p.description ? p.description : "",
        role = p.role ? p.role : "",
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "",
        sidebarClasses = this.state.isEditing || this.state.mode === "CREATE"  ? "sidebar active" : "sidebar";

    return (

      <div className="project">

          <CSSTransitionGroup className={sidebarClasses}
                              transitionAppear={true}
                              transitionAppearTimeout={0}
                              transitionName="fadeIn"
                              transitionEnterTimeout={1000}
                              transitionLeaveTimeout={1000}>
            {this.renderSidebar()}
          </CSSTransitionGroup>

         <ProjectPage currentProject={p}
                      mode={this.state.mode}
                      isEditing={this.state.isEditing}
                      edit={this.isEditing.bind(this)}
                      linkState={this.props.linkState}
                      removeProject={this.props.removeProject}
                      sections={this.state.sections}
                      activeSection={this.state.activeSection} />
      </div>

      
    );
  }
}

export default Project