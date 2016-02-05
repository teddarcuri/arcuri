import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectPage from './ProjectPage';

class Project extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      showGallery: true,
      isEditing: false
    }
  }

  showGallery() {
    this.setState({showGallery: true});
  }
  
  isEditing() {
    this.setState({isEditing: !this.state.isEditing});
  }

  render() {
  	var p = this.props.currentProject,
        overview = this.props.currentProject.description,
        role = this.props.currentProject.role,
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "",
        firstPhoto = Object.keys(this.props.currentProject.gallery)[0],
        sidebarClasses = this.state.isEditing ? "sidebar active" : "sidebar";

    return (

      <div className="project">

          <div className={sidebarClasses}>
            <form id="edit-project">
                <h3>Edit {p.name}</h3>

                <input 
                 type="text" 
                 placeholder="name"
                 valueLink={this.props.linkState('currentProject.name')} />


                <button type="submit">
                  Create Project
                </button>
              </form>
          </div>

         <ProjectPage currentProject={this.props.currentProject}
                      edit={this.isEditing.bind(this)} />

      </div>

      
    );
  }
}

export default Project