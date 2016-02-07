import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div className="projects">
			{React.cloneElement(this.props.children, {
                key: this.props.location.pathname,
               	projects: this.props.projects,
                isProjectPage: this.props.isProjectPage,
                currentProject: this.props.currentProject,
                newProject: this.props.newProject,
                addProject: this.props.addProject,
                updateProject: this.props.updateProject,
                removeProject: this.props.removeProject,
                linkState: this.props.linkState,
                addGalleryImage: this.props.addGalleryImage,
                removeGalleryImage: this.props.removeGalleryImage,
                projectMode: this.props.projectMode,
                setProjectMode: this.props.setProjectMode
              })}
		</div>
	   )
	}
}

export default Projects