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
                currentProject: this.props.currentProject
              })}
		</div>
	   )
	}
}

export default Projects