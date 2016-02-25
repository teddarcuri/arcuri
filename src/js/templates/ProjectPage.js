import React from 'react';
import ReactDOM from 'react-dom';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ProjectGallery from './ProjectGallery';
import ProjectIndex from './ProjectIndex';
import ProjectActionBar from './ProjectActionBar';
import showdown from 'showdown';

class ProjectPage extends React.Component {

  constructor(props) {
  	super(props);

    this.converter = new showdown.Converter();

    this.state = {
      showGallery: true,
      confirmRemoveProject: false,
    }
  }

  componentWillMount() {
    // Create Active Window Div
    this.createActiveWindow();
  }

  componentWillUpdate() {
    // Create Active Window Div
    this.createActiveWindow();
  }

  createActiveWindow() {
     if (!document.getElementById('active-window')) {
      var activeWindow = document.createElement('div');
      activeWindow.id = "active-window";
      document.body.appendChild(activeWindow);
    }
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
      case 3:
        el = ReactDOM.findDOMNode(this.refs.role);
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
    if (this.props.mode === "EDIT" && this.props.uid) {
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

  renderOverview() {
    if (this.props.currentProject.description) {
      return {__html: this.converter.makeHtml(this.props.currentProject.description) }
    }
  }

  render() {
  	var p = this.props.currentProject,
        role = this.props.currentProject.role ? this.props.currentProject.role : null,
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "";

      let styles = {
        infobar: {
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }
      }

    return (

        <div className="project-page">
          {/*  Project Window */}
          <div className="project-overview">
            <header ref="header"
                    data-section="header">
              <h1 className="title">
                {logo}
                {p.name}
                {this.renderEditTools()}
              </h1>
            </header>

            {this.renderProjectActionBar()}

            <main>

              <div className="project-infobar"
                    style={styles.infobar}>
                 <ul className="tags">
                  <li>
                    Web
                    <ProjectIndex projects={this.props.projects}
                                  type="BARS"
                                  filter="WEB"></ProjectIndex>
                  </li>
                  <li>
                    Print
                    <ProjectIndex projects={this.props.projects}
                                  type="BUBBLES"
                                  filter="PRINT"></ProjectIndex>
                  </li>
                </ul>

                <span className="view-site-btn">
                  <a href="google.com">
                    <i className="fa fa-eye"></i>
                    View Site
                  </a>
                </span>
              </div>
             

              {this.renderGallery()}

              <section ref="details"
                        data-section="details"
                        dangerouslySetInnerHTML={this.renderOverview()}>
              </section>

            </main>
        
          </div>

          {/* Background Image */}
          <div className="project-bg" >
            <img src={p.background} />
          </div>

        </div>
    
    );
  }
}

export default ProjectPage