import React from 'react';

class ProjectActionBar extends React.Component {
	render() {
		return (
			<div className="project-action-bar">
				<h3>And you're, like, TOTALLY sure about this?</h3>
				<button className="delete-btn" onClick={this.props.confirmRemoveProject}>Confirm Deletion</button>
				<button onClick={this.props.cancelRemove}>Nevermind</button>
			</div>
		)
	}
}

export default ProjectActionBar;