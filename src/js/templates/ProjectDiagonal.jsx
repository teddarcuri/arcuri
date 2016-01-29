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
        <div className="project-overlay">
        	<div className="project-info">
            <img className="logo" src={this.props.logoPath} /> <br/>
            <Link className="btn" to={this.props.path}>View {this.props.name}</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectDiagonal