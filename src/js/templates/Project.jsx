import React from 'react';
import CSSTransitionGroup from 'react-addons-css-transition-group';
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
        role = this.props.currentProject.role,
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "",
        firstPhoto = Object.keys(this.props.currentProject.gallery)[0];

    return (

      <div className="project-page">

        {/*  Project Window */}
        <CSSTransitionGroup component={"div"}
                            className="project-overview"
                            transitionName="project-element"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <header>
            <h1 className="title">
              {logo}
              {p.name}
              <ul className="project-edit-tools">
                <li>
                  <img src="/src/img/icons/edit-icon.svg" />
                </li>
                <li onClick={this.props.removeProject}>
                  <img src="/src/img/icons/close.svg" />
                </li>
              </ul>
            </h1>

            <ul className="tags">
              <li>Web</li>
              <li>Print</li>
            </ul>
          </header>

          <main>

            {/* Gallery */}
            <ProjectGallery project={this.props.currentProject} />

            <section>
              <h3>Overview</h3>

              <p>
                {overview}
              </p>
            </section>

            <aside>
            <h3>My Role</h3>
              {role}

            <h3>Tech Used</h3>
              {role}
            </aside>

          </main>
      
        </CSSTransitionGroup>

        {/* Project Controls */}
        <CSSTransitionGroup component={"div"}
                            transitionName="fadeIn"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>

          <div className="project-controls">
           {/*} <ul >
              <li>Overview</li>
              <li onClick={this.showGallery.bind(this)}>Gallery</li>
            </ul> */}
          </div>

        </CSSTransitionGroup>

        {/* Background Image */}
        <CSSTransitionGroup component={"div"}
                            className="project-bg"
                            transitionName="fadeIn"
                            transitionAppear={true}
                            transitionAppearTimeout={0}
                            transitionEnterTimeout={1000}
                            transitionLeaveTimeout={1000}>
          <img src={p.background} />
        </CSSTransitionGroup>

      </div>
    );
  }
}

export default Project