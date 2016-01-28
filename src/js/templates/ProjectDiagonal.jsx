import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

class ProjectDiagonal extends React.Component {

  constructor(props) {
  	super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="diagonal" style={this.props.styles}>
        <div classname="project-info">
      	<Link ref={this.props.ref} key={this.props.key} to={this.props.path}>
          <img className="logo" src={this.props.logoPath} />
        </Link>
        </div>
      </div>
    );
  }
}

export default ProjectDiagonal