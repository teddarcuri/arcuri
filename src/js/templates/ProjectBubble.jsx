import React from 'react';
import {browserHistory, Router, Route, IndexRoute, Link} from 'react-router';

class ProjectBubble extends React.Component {

  constructor(props) {
  	super(props);

    console.log(props);
  }

  render() {
    return (
    	<Link ref={this.props.ref} key={this.props.key} to={this.props.path} className="project-bubble">
        <img className="logo" src={this.props.logoPath} />
        <img className="bg" src={this.props.bgImgPath} />
      </Link>
    );
  }
}

export default ProjectBubble