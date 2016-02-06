import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectActionBar from './ProjectActionBar';

class ProjectPage extends React.Component {

  constructor(props) {
  	super(props);

    this.state = {
      showGallery: true,
      confirmRemoveProject: false
    }
  }

  componentWillMount() {
    // Create Active Window Div
    var activeWindow = document.createElement('div');
    activeWindow.id = "active-window";
    document.body.appendChild(activeWindow);
  }

  componentDidMount() {
    // Determine active section to highlight
    this.setActiveSection(this.props.activeSection);
  }

  componentDidUpdate() {
    // Determine active section to highlight
    this.setActiveSection(this.props.activeSection);
  }

  /*
    Highlight Active Section 
  */
  setActiveSection(section) {

    var el;

    switch (this.props.activeSection) {
      case 0: 
        el = ReactDOM.findDOMNode(this.refs.header);
        break;
      case 1:
        el = ReactDOM.findDOMNode(this.refs.gallery);
        break;
      case 2:
        el = ReactDOM.findDOMNode(this.refs.details);
        break;
      default:
        return;
    }

    // highlight active section if editing or creating
    var activeWindow =  document.getElementById("active-window");
    if (this.props.isEditing || this.props.mode === "CREATE") {
     activeWindow.classList.add('active');
     el.appendChild(activeWindow);
    } else {
      activeWindow.classList.remove('active');
    }
  
  }

  toggleConfirmBox() {
    this.setState({confirmRemoveProject: !this.state.confirmRemoveProject});
  }

  renderGallery() {
    if (Object.keys(this.props.currentProject.gallery).length) {
      return (<ProjectGallery ref="gallery" 
                              project={this.props.currentProject} 
                              data-section="gallery" />)
    }
  }

  renderEditTools() {
    if (this.props.mode === "EDIT") {
      return (
        <ul className="project-edit-tools">
          <li onClick={this.props.edit}>
            <img src="/src/img/icons/edit-icon.svg" />
          </li>
          <li onClick={this.toggleConfirmBox.bind(this)}>
            <img src="/src/img/icons/close.svg" />
          </li>
        </ul>
      )            
    }
  }

  renderProjectActionBar() {
    if (this.state.confirmRemoveProject) {
      return (
        <ProjectActionBar confirmRemoveProject={this.props.removeProject}
                          cancelRemove={this.toggleConfirmBox.bind(this)}/>
      )
    }
  }

  render() {
  	var p = this.props.currentProject,
        overview = this.props.currentProject.description,
        role = this.props.currentProject.role,
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "";

    return (

        <div className="project-page">
          {/*  Project Window */}
          <CSSTransitionGroup component={"div"}
                              className="project-overview"
                              transitionName="project-element"
                              transitionAppear={true}
                              transitionAppearTimeout={0}
                              transitionEnterTimeout={1000}
                              transitionLeaveTimeout={0}>
            <header ref="header"
                    data-section="header">
              <h1 className="title">
                {logo}
                {p.name}
                {this.renderEditTools()}
              </h1>

              <ul className="tags">
                <li>Web</li>
                <li>Print</li>
              </ul>
            </header>

            {this.renderProjectActionBar()}

            <main>

              {this.renderGallery()}

              <section ref="details"
                        data-section="details">
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

export default ProjectPage