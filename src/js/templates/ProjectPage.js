import React from 'react';
import {Link} from 'react-router';
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
        el = ReactDOM.findDOMNode(this.refs.bg);
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
    if ( this.props.currentProject && Object.keys(this.props.currentProject.gallery).length) {
      return (<ProjectGallery ref="gallery" 
                              project={this.props.currentProject} 
                              data-section="gallery" />)
    }
  }

  renderEditTools() {
    if (this.props.mode === "EDIT" && this.props.uid) {
      return (
        <CSSTransitionGroup
          component="ul"
          className="project-edit-tools"
          transitionName="menuFade"
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}>
          <li key="edit" onClick={this.props.edit}>
            <img src="https://s3-us-west-2.amazonaws.com/teddarcuri/icons/edit.svg" />
          </li>
          <li key="delete" onClick={this.toggleConfirmBox.bind(this)}>
            <img src="https://s3-us-west-2.amazonaws.com/teddarcuri/icons/close.svg" />
          </li>
        </CSSTransitionGroup>
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

  renderTags() {
    var tags = Object.keys(this.props.currentProject.tags);
    if (tags) {
      return (
        <ul className="tags">
          {
            tags.map((t)=>{
              return (
                <li>{this.props.currentProject.tags[t].value}</li>
              )
            })
          }
        </ul>
      )
    }
  }

  renderOverview() {
    if (this.props.currentProject && this.props.currentProject.description) {
      return {__html: this.converter.makeHtml(this.props.currentProject.description) }
    }
  }

  render() {
  	var p = this.props.currentProject ? this.props.currentProject : {},
        logo = p.logo ? <img src={p.logo} alt={p.name} className="project-logo"/> : "",
        tags = p.tags ? this.renderTags() : null,
        viewSite;

    if (p.url) {
      viewSite = (
         <span className="view-site-btn" style={{padding: "15px 0px"}}>
            <a href={p.url}>
              <i className="fa fa-eye"></i>
              View Site
            </a>
          </span>
      )
    }

    let styles = {
      infobar: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexFlow: "row wrap"
      }
    }

    return (
     <div className="project-page">
        {/* Background Image */}
        <div className="project-bg">
          <CSSTransitionGroup
            style={{opacity: 0.4}} 
            transitionAppear={true}
            transitionAppearTimeout={4000}
            transitionName="fadeInBackground"
            transitionEnterTimeout={4000}
            transitionLeaveTimeout={4000}>
              <img key={p.background} src={p.background} />
          </CSSTransitionGroup>
        </div>
       
        {/*  Project Window */}
        <div className="project-overview" key={p.name}>
          <CSSTransitionGroup 
            component="header"
            ref="header"
            data-section="header"
            transitionAppear={true}
            transitionAppearTimeout={2000}
            transitionName="menuFade"
            transitionEnterTimeout={2000}
            transitionLeaveTimeout={2000}>
            <h1 className="title">
              <span className="project-logo">
                {logo}
              </span>
              {p.name}
              {this.renderEditTools()}
            </h1>
          </CSSTransitionGroup>
          <CSSTransitionGroup 
            transitionAppear={true}
            transitionAppearTimeout={1000}
            transitionName="menuFade"
            style={{width: "100%"}}
            transitionEnterTimeout={1000}
            transitionLeaveTimeout={1000}>
            {this.renderProjectActionBar()}
          </CSSTransitionGroup>
          <main>
            <div className="project-infobar"
                  style={styles.infobar}>
              {tags}
              {viewSite}
            </div>
            {this.renderGallery()}
            <section ref="details"
                      data-section="details"
                      dangerouslySetInnerHTML={this.renderOverview()}>
            </section>
          </main>
        </div>
        
      </div>
    );
  }
}

export default ProjectPage