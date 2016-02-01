import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectBar from './ProjectBar';
import ProjectGallery from './ProjectGallery';

class Project extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      showGallery: true
    }
  }

  showGallery() {
    this.setState({showGallery: true});
  }

  render() {
  	var p = this.props.currentProject,
        overview = this.props.currentProject.description,
        firstPhoto = Object.keys(this.props.currentProject.gallery)[0];

    return (

      <div className="project-page">

        {/*  Project Window */}
        <CSSTransitionGroup component={"div"}
                            className="project-overview"
                            transitionName="bubbleUp"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <header>
            <h1 className="title">
              <img src={p.logo} alt={p.name} className="project-logo"/>
              {p.name}
            </h1>

            <ul className="tags">
              <li>Web</li>
              <li>Print</li>
            </ul>
          </header>

          <section>

            {/* Gallery */}
            <ProjectGallery project={this.props.currentProject} />

            <p>
              {overview}
            </p>

          </section>
      
        </CSSTransitionGroup>



        {/* Project Controls */}
        <CSSTransitionGroup component={"div"}
                            transitionName="slideUp"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>

          <div className="project-controls">

           {/*} <ul >
              <li>Overview</li>
              <li onClick={this.showGallery.bind(this)}>Gallery</li>
            </ul> */}

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