import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import Sortable from 'sortablejs';
import CSSTransitionGroup from 'react-addons-css-transition-group';

import h from '../utilities/helpers';

class ProjectBar extends React.Component {

  constructor(props) {
  	super(props);
  }

  componentDidUpdate() {
      var el = document.getElementById('project-bar'),
          that = this,
          sortable;

      if (el && this.props.uid && this.props.reOrderProjects) {
        sortable = Sortable.create(el, {
          ghostClass: "sortable-ghost",  // Class name for the drop placeholder
          chosenClass: "sortable-chosen",
          setData: function (dataTransfer, dragEl) {
            dataTransfer.setData('Text', dragEl.textContent);
          },
          onEnd: function(evt) {
            var oldPosition = evt.oldIndex;  
            var newPosition = evt.newIndex; 
            that.props.reOrderProjects(oldPosition, newPosition);
            that.forceUpdate()
          }
        });
      } 
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
            transform: this.props.location.pathname != "/" ? "translateY(66%)" : "translateY(100%)"
          },
          overlay: {
            width: "100%",
            height: "100%",
            background: "rgba(0,0,0,0.5)",
            position: "absolute",
            zIndex: 2,
            color: "#fff",
            textTransform: "uppercase",
            letterSpacing: 3,
            lineHeight: "1.7em",
            fontSize: "0.8em",
            padding: 15,
            textAlign: "center",
            transform: "translateY(10%)"
          }
        }
    return (
      <CSSTransitionGroup
          id="project-bar" 
          className="project-bar"
          style={styles.bar}
          transitionName="menuFade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
        {
          projects.map(function(p, key) {
            let path = "/work/" + h.prettyUrl(p.name),
               logoPath = p.logo,
               bgImgPath = p.background;
            return (
              <li key={key}>
                <Link to={path}>
                  <img src={p.background} />
                  <div style={styles.overlay}>
                    {p.name}
                  </div>
                </Link>
              </li>
            )
          })
        }
        {newProjectTab}
      </CSSTransitionGroup>
    );
  }
}

export default ProjectBar