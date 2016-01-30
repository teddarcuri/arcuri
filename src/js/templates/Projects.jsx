import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';


class Projects extends React.Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
		<div>
			{React.cloneElement(this.props.children, {
                key: this.props.location.pathname,
                isProjectPage: this.props.isProjectPage,
                projects: this.props.projects,
                currentProject: this.props.currentProject
              })}
		</div>
	   )
	}
}

export default Projects