import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

class ProjectDiagonal extends React.Component {

  constructor(props) {
  	super(props);

    console.log(props);
  }

  render() {
    return (
      <div className="diagonal">
        <div className="project-overlay">
        	<div className="project-info">
            <img className="logo" src={this.props.logo} /> <br/>
            <h3>{this.props.name}</h3>
            <Link className="btn" to={this.props.path}>View Site</Link>
          </div>
        </div>

        <img className="background" src={this.props.background} alt=""/>
      </div>
    );
  }
}

export default ProjectDiagonal