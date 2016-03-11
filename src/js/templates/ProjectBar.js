import React from 'react';
import {Router, Route, IndexRoute, Link} from 'react-router';
import Sortable from 'sortablejs';
import CSSTransitionGroup from 'react-addons-css-transition-group';

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
            transform: this.props.location.pathname != "/" ? "translateY(66%)" : "translateY(80%)"
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
      <ul id="project-bar" className="project-bar"
          style={styles.bar}>
        {
          projects.map(function(p, key) {
            let path = "/work/" + p.name,
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
      </ul>
    );
  }
}

export default ProjectBar