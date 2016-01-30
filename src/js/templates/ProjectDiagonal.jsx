import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

class ProjectDiagonal extends React.Component {

  constructor(props) {
  	super(props);
  }


  render() {
    return (
      <Link className="diagonal" to={this.props.path} >

        <div className="project-overlay">
        	<div className="project-info">
            <img className="logo" src={this.props.logo} /> <br/>
            <h3>{this.props.name}</h3>
          </div>
        </div>

        <img className="background" src={this.props.background} alt=""/>
        
      </Link>
    );
  }
}

export default ProjectDiagonal