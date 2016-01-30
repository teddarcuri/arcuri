import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectBar from './ProjectBar';

class Project extends React.Component {

  constructor(props) {
  	super(props);
  }

  render() {
  	var p = this.props.currentProject;
    return (

      <div className="project-page">

        {/*  Project Window */}
        <CSSTransitionGroup component={"div"}
                            transitionName="bubbleUp"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <div className="project-window">
              <h1 className="title">
                <img src={p.logo} alt={p.name} className="project-logo"/>
                {p.name}
              </h1>
              <p>{p.description}</p>
          </div>
        </CSSTransitionGroup>

        {/*  Project Controls*/}
        <CSSTransitionGroup component={"div"}
                            transitionName="slideUp"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <div className="project-controls">

            <ul >
              <li>Overview</li>
              <li>Gallery</li>
              <li>Details</li>
            </ul>

            <ProjectBar projects={this.props.projects}
                    currentProject={this.props.currentProject}/>
          </div>


        </CSSTransitionGroup>

      {/* Background Image */}
        <CSSTransitionGroup component={"div"}
                            className="project-bg"
                            transitionName="fadeIn"
                            transitionAppear={true}
                            transitionAppearTimeout={1000}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <img src={p.background} />
        </CSSTransitionGroup>

      </div>

    );
  }
}

export default Project