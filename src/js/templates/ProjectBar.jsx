import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectBar extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	var p = this.props.currentProject,
        projects = this.props.projects;
    return (
      <ul className="project-bar">
        {
          projects.map(function(p, key) {
            let path = "/work/" + p.name,
               logoPath = p.logo,
               bgImgPath = p.background,
               styles = {
                backgroundImage: 'url(' + p.background + ')',
                backgroundSize: 'cover'
               };
            return (
              <li key={key}>
                <Link to={path}>
                  <img src={p.background} />
                </Link>
              </li>
            )
          })
        }
        <li>
          <Link to="/work/new">
            <img src="/src/img/new-project-btn.jpg" />
          </Link>
        </li>
      </ul>
    );
  }
}

export default ProjectBar