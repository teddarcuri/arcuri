import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';

import CSSTransitionGroup from 'react-addons-css-transition-group';

class ProjectBar extends React.Component {

  constructor(props) {
  	super(props);
  }

  renderNewProjectTab() {
    return (
      <li>
        <Link to="/work/new">
          <img src="/src/img/new-project-btn.jpg" />
        </Link>
      </li>
    ) 
  }

  render() {
  	var p = this.props.currentProject,
        projects = this.props.projects,
        newProjectTab = this.props.uid ? this.renderNewProjectTab() : null,
        styles = {
          bar: {
            //transform: "translateY(75%)" 
            transform: this.props.location.pathname != "/" ? "translateY(75%)" : "translateY(100%)"
          }
        }
    return (
      <ul className="project-bar"
          style={styles.bar}>
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
        {newProjectTab}
      </ul>
    );
  }
}

export default ProjectBar