import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

class ProjectBubble extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
    return (
      <div className="project-bubble-wrap">
      	<Link ref={this.props.ref} to={this.props.path} className="project-bubble">
          <img className="logo" src={this.props.logo} />
          <img className="bg" src={this.props.background} />
        </Link>
      </div>
    );
  }
}

export default ProjectBubble