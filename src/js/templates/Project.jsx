import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectPage from './ProjectPage';

class Project extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      showGallery: true,
      isEditing: false,
      activeSection: 1,
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

  showGallery() {
    this.setState({showGallery: true});
  }

  isEditing() {
    this.setState({isEditing: !this.state.isEditing});
  }
  
  renderSidebar() {
    if (this.state.isEditing) {
      return (
         <form id="edit-project" onSubmit={this.props.updateProject}>
            <h3>Edit</h3>

            <input 
             type="text" 
             placeholder="name"
             valueLink={this.props.linkState('currentProject.name')} 
             />

             <input ref="types" 
                 type="types" 
                 placeholder="types"/>

            <input ref="background" 
                 type="background" 
                 placeholder="background"
                 valueLink={this.props.linkState('currentProject.background')}/>

            <input ref="logo" 
                 type="logo" 
                 placeholder="logo"
                 valueLink={this.props.linkState('currentProject.logo')}/>

            <textarea ref="description" 
                    name="description"
                    valueLink={this.props.linkState('currentProject.description')} />

            <textarea ref="myRole" 
                    name="my-role" />

            <textarea ref="techUsed" 
                    name="tech-used" />

            <button type="submit">
              Update Project
            </button>
          </form>
      ) 
    } else {
      return 
    }
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

          <CSSTransitionGroup className={sidebarClasses}
                              transitionAppear={true}
                              transitionAppearTimeout={0}
                              transitionName="fadeIn"
                              transitionEnterTimeout={1000}
                              transitionLeaveTimeout={1000}>
            {this.renderSidebar()}
          </CSSTransitionGroup>

         <ProjectPage currentProject={this.props.currentProject}
                      edit={this.isEditing.bind(this)}
                      linkState={this.props.linkState}
                      removeProject={this.props.removeProject} />

      </div>

      
    );
  }
}

export default Project